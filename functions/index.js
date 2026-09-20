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

async function sendEmail({ to, replyTo, subject, htmlBody, textBody, idempotencyKey }) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey.value()}`,
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey,
    },
    body: JSON.stringify({
      from: fromEmail.value(),
      to: [to],
      reply_to: replyTo,
      subject,
      html: htmlBody,
      text: textBody,
    }),
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(`Email provider returned HTTP ${response.status}: ${cleanString(result.message, 300) || "unknown error"}`);
  }

  return cleanString(result.id, 120) || null;
}

async function sendLeadEmail(leadId, lead) {
  return sendEmail({
    to: notificationEmail.value(),
    replyTo: lead.email,
    subject: `New website enquiry: ${lead.service || "General enquiry"}`,
    idempotencyKey: `lead-notification/${leadId}`,
    htmlBody: `
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
    textBody: [
      "New XLW Advisory website enquiry",
      `Reference: ${leadId}`,
      `Name: ${lead.name}`,
      `Company: ${lead.company || "Not supplied"}`,
      `Email: ${lead.email}`,
      `Phone: ${lead.phone || "Not supplied"}`,
      `Service: ${lead.service || "Not supplied"}`,
      `Topics: ${lead.topics.join(", ") || "Not supplied"}`,
      `Language: ${lead.lang}`,
      "",
      lead.message,
    ].join("\n"),
  });
}

async function sendCustomerAcknowledgement(leadId, lead) {
  const isChinese = lead.lang === "zh";
  const subject = isChinese ? "感谢您联系 XLW Advisory" : "Thank you for contacting XLW Advisory";
  const service = lead.service || (isChinese ? "一般咨询" : "General enquiry");

  return sendEmail({
    to: lead.email,
    replyTo: notificationEmail.value(),
    subject,
    idempotencyKey: `lead-acknowledgement/${leadId}`,
    htmlBody: isChinese
      ? `
        <h2>感谢您联系 XLW Advisory</h2>
        <p>${html(lead.name)}，您好：</p>
        <p>我们已经收到您的咨询。团队将审核相关信息，并尽快与您联系。</p>
        <p><strong>咨询编号：</strong>${html(leadId)}</p>
        <p><strong>服务类别：</strong>${html(service)}</p>
        <p>如需补充资料，请直接回复本邮件。</p>
        <p>XLW Advisory</p>
      `
      : `
        <h2>Thank you for contacting XLW Advisory</h2>
        <p>Dear ${html(lead.name)},</p>
        <p>We have received your enquiry. Our team will review the information and contact you as soon as possible.</p>
        <p><strong>Reference:</strong> ${html(leadId)}</p>
        <p><strong>Service:</strong> ${html(service)}</p>
        <p>If you need to add any information, please reply directly to this email.</p>
        <p>XLW Advisory</p>
      `,
    textBody: isChinese
      ? [
          `${lead.name}，您好：`,
          "",
          "我们已经收到您的咨询。团队将审核相关信息，并尽快与您联系。",
          `咨询编号：${leadId}`,
          `服务类别：${service}`,
          "",
          "如需补充资料，请直接回复本邮件。",
          "XLW Advisory",
        ].join("\n")
      : [
          `Dear ${lead.name},`,
          "",
          "We have received your enquiry. Our team will review the information and contact you as soon as possible.",
          `Reference: ${leadId}`,
          `Service: ${service}`,
          "",
          "If you need to add any information, please reply directly to this email.",
          "XLW Advisory",
        ].join("\n"),
  });
}

exports.submitContact = onRequest(
  {
    region: "europe-west1",
    cors: true,
    invoker: "public",
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
        acknowledgementStatus: "pending",
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      });

      const [notificationResult, acknowledgementResult] = await Promise.allSettled([
        sendLeadEmail(leadRef.id, lead),
        sendCustomerAcknowledgement(leadRef.id, lead),
      ]);
      const emailUpdate = {};

      if (notificationResult.status === "fulfilled") {
        emailUpdate.notificationStatus = "sent";
        emailUpdate.notificationSentAt = FieldValue.serverTimestamp();
        emailUpdate.notificationProviderId = notificationResult.value;
      } else {
        emailUpdate.notificationStatus = "failed";
        logger.error("Lead email notification failed", {
          leadId: leadRef.id,
          error: notificationResult.reason instanceof Error ? notificationResult.reason.message : "unknown",
        });
      }

      if (acknowledgementResult.status === "fulfilled") {
        emailUpdate.acknowledgementStatus = "sent";
        emailUpdate.acknowledgementSentAt = FieldValue.serverTimestamp();
        emailUpdate.acknowledgementProviderId = acknowledgementResult.value;
      } else {
        emailUpdate.acknowledgementStatus = "failed";
        logger.error("Customer acknowledgement email failed", {
          leadId: leadRef.id,
          error: acknowledgementResult.reason instanceof Error ? acknowledgementResult.reason.message : "unknown",
        });
      }

      try {
        await leadRef.update(emailUpdate);
      } catch (statusError) {
        logger.error("Email delivery status update failed", {
          leadId: leadRef.id,
          error: statusError instanceof Error ? statusError.message : "unknown",
        });
      }

      res.status(201).json({ ok: true });
    } catch (error) {
      logger.error("Lead submission failed", { error: error instanceof Error ? error.message : "unknown" });
      res.status(503).json({ error: "The enquiry service is temporarily unavailable." });
    }
  },
);
