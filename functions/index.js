const crypto = require("node:crypto");
const { initializeApp } = require("firebase-admin/app");
const { FieldValue, Timestamp, getFirestore } = require("firebase-admin/firestore");
const { defineSecret, defineString } = require("firebase-functions/params");
const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

initializeApp();

const db = getFirestore();
const resendApiKey = defineSecret("RESEND_API_KEY");
const notificationEmail = defineString("LEAD_NOTIFICATION_EMAIL", {
  default: "info@accountantsmalta.com",
});
const fromEmail = defineString("LEAD_FROM_EMAIL", {
  default: "XLW Advisory Website <leads@accountantsmalta.com>",
});
const allowedOrigins = defineString("CONTACT_ALLOWED_ORIGINS", {
  default:
    "https://accountantsmalta.com,https://www.accountantsmalta.com,https://accountantsmalta.web.app,http://localhost:3000,http://127.0.0.1:3000",
});

const limits = {
  name: 120,
  company: 160,
  email: 254,
  phone: 40,
  service: 120,
  message: 5000,
  topic: 80,
  url: 1000,
  attribution: 250,
};

function cleanString(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function cleanEmail(value) {
  const email = cleanString(value, limits.email).toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : "";
}

function cleanAttribution(value) {
  const allowed = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "gclid",
    "gbraid",
    "wbraid",
  ];
  const source = value && typeof value === "object" ? value : {};
  return Object.fromEntries(
    allowed
      .map((key) => [key, cleanString(source[key], limits.attribution)])
      .filter(([, item]) => Boolean(item)),
  );
}

function html(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function requestIp(req) {
  const forwarded = req.get("x-forwarded-for");
  return (forwarded ? forwarded.split(",")[0] : req.ip || "unknown").trim();
}

async function enforceRateLimit(req) {
  const bucketMs = 15 * 60 * 1000;
  const bucket = Math.floor(Date.now() / bucketMs);
  const fingerprint = crypto
    .createHash("sha256")
    .update(`${requestIp(req)}|${req.get("user-agent") || "unknown"}`)
    .digest("hex")
    .slice(0, 32);
  const ref = db.collection("formRateLimits").doc(`${bucket}-${fingerprint}`);

  await db.runTransaction(async (transaction) => {
    const snapshot = await transaction.get(ref);
    const count = snapshot.exists ? Number(snapshot.data().count || 0) : 0;
    if (count >= 5) {
      const error = new Error("RATE_LIMITED");
      error.code = "RATE_LIMITED";
      throw error;
    }

    transaction.set(
      ref,
      {
        count: count + 1,
        updatedAt: FieldValue.serverTimestamp(),
        expiresAt: Timestamp.fromMillis(Date.now() + 48 * 60 * 60 * 1000),
      },
      { merge: true },
    );
  });
}

async function sendLeadEmail(leadId, lead) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey.value()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail.value(),
      to: [notificationEmail.value()],
      reply_to: lead.email,
      subject: `New website enquiry: ${lead.service || "General enquiry"}`,
      html: `
        <h2>New XLW Advisory website enquiry</h2>
        <p><strong>Reference:</strong> ${html(leadId)}</p>
        <p><strong>Name:</strong> ${html(lead.name)}</p>
        <p><strong>Company:</strong> ${html(lead.company || "Not supplied")}</p>
        <p><strong>Email:</strong> ${html(lead.email)}</p>
        <p><strong>Phone:</strong> ${html(lead.phone || "Not supplied")}</p>
        <p><strong>Service:</strong> ${html(lead.service || "Not supplied")}</p>
        <p><strong>Topics:</strong> ${html(lead.topics.join(", ") || "Not supplied")}</p>
        <p><strong>Language:</strong> ${html(lead.lang)}</p>
        <p><strong>Message:</strong></p>
        <p>${html(lead.message).replaceAll("\n", "<br>")}</p>
      `,
    }),
  });

  if (!response.ok) {
    throw new Error(`Email provider returned HTTP ${response.status}`);
  }
}

exports.submitContact = onRequest(
  {
    region: "europe-west1",
    cors: true,
    secrets: [resendApiKey],
    maxInstances: 10,
    timeoutSeconds: 30,
  },
  async (req, res) => {
    res.set("Cache-Control", "no-store");

    if (req.method !== "POST") {
      res.set("Allow", "POST").status(405).json({ error: "Method not allowed." });
      return;
    }

    const origin = req.get("origin");
    const acceptedOrigins = allowedOrigins
      .value()
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    if (origin && !acceptedOrigins.includes(origin)) {
      res.status(403).json({ error: "Request origin is not allowed." });
      return;
    }

    const body = req.body && typeof req.body === "object" ? req.body : {};
    if (cleanString(body.website, 100)) {
      res.status(201).json({ ok: true });
      return;
    }

    const lead = {
      name: cleanString(body.name, limits.name),
      company: cleanString(body.company, limits.company),
      email: cleanEmail(body.email),
      phone: cleanString(body.phone, limits.phone),
      service: cleanString(body.service, limits.service),
      message: cleanString(body.message, limits.message),
      topics: Array.isArray(body.topics)
        ? body.topics.slice(0, 12).map((item) => cleanString(item, limits.topic)).filter(Boolean)
        : [],
      lang: body.lang === "zh" ? "zh" : "en",
      landingPage: cleanString(body.landingPage, limits.url),
      attribution: cleanAttribution(body.attribution),
      consent: {
        analytics: body.consent?.analytics === true,
        advertising: body.consent?.advertising === true,
        version: cleanString(body.consent?.version, 40),
        updatedAt: cleanString(body.consent?.updatedAt, 40) || null,
      },
      privacyAcknowledged: body.privacyAcknowledged === true,
    };

    if (!lead.name || !lead.email || lead.message.length < 10 || !lead.privacyAcknowledged) {
      res.status(400).json({ error: "Please complete the required fields and accept the privacy acknowledgement." });
      return;
    }

    try {
      await enforceRateLimit(req);
    } catch (error) {
      if (error?.code === "RATE_LIMITED") {
        res.status(429).json({ error: "Too many requests. Please wait and try again." });
        return;
      }
      logger.error("Rate-limit check failed", { error: error instanceof Error ? error.message : "unknown" });
      res.status(503).json({ error: "The enquiry service is temporarily unavailable." });
      return;
    }

    try {
      const leadRef = await db.collection("leads").add({
        ...lead,
        status: "new",
        source: "website_contact_form",
        notificationStatus: "pending",
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      });

      try {
        await sendLeadEmail(leadRef.id, lead);
        await leadRef.update({ notificationStatus: "sent", notificationSentAt: FieldValue.serverTimestamp() });
      } catch (emailError) {
        logger.error("Lead email notification failed", {
          leadId: leadRef.id,
          error: emailError instanceof Error ? emailError.message : "unknown",
        });
        await leadRef.update({ notificationStatus: "failed" });
      }

      res.status(201).json({ ok: true });
    } catch (error) {
      logger.error("Lead submission failed", { error: error instanceof Error ? error.message : "unknown" });
      res.status(503).json({ error: "The enquiry service is temporarily unavailable." });
    }
  },
);
