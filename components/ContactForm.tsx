"use client";

import { useState, type FormEvent } from "react";
import type { SiteCopy, Lang } from "@/lib/siteCopy";
import {
  CONSENT_VERSION,
  getConsentPreferences,
  getStoredAttribution,
  trackEvent,
  trackLeadAndNavigate,
} from "@/lib/analytics";

type Props = {
  copy: SiteCopy["pages"]["contact"]["form"];
  email: string;
  lang: Lang;
};

export default function ContactForm({ copy, email, lang }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setSubmitting(true);
    setError("");

    const formData = new FormData(form);
    const service = String(formData.get("service") || "");
    const consent = getConsentPreferences();
    const payload = {
      name: String(formData.get("name") || ""),
      company: String(formData.get("company") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      service,
      message: String(formData.get("message") || ""),
      topics: formData.getAll("topics").map(String),
      website: String(formData.get("website") || ""),
      privacyAcknowledged: formData.get("privacyAcknowledgement") === "yes",
      lang,
      landingPage: window.location.href,
      attribution: getStoredAttribution(),
      consent: {
        analytics: consent?.analytics ?? false,
        advertising: consent?.advertising ?? false,
        version: consent?.version || CONSENT_VERSION,
        updatedAt: consent?.updatedAt || null,
      },
    };

    try {
      const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "/api/contact";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(copy.errorMessage);
      }

      trackEvent("form_submit_success", {
        form_id: "contact",
        language: lang,
        service,
      });
      trackLeadAndNavigate(lang === "zh" ? "/zh/thank-you" : "/thank-you", { language: lang, service });
    } catch (submissionError) {
      setSubmitting(false);
      setError(submissionError instanceof Error ? submissionError.message : copy.errorMessage);
    }
  }

  return (
    <form className="mx-auto" style={{ maxWidth: 800 }} onSubmit={handleSubmit} noValidate={false}>
      <h2 className="h1 card-title text-center pb-4">{copy.title}</h2>

      <div className="row g-4">
        <div className="col-sm-6">
          <label className="form-label fs-base" htmlFor="name">
            {copy.fields.nameLabel}
          </label>
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder={copy.fields.namePlaceholder}
            required
            maxLength={120}
            autoComplete="name"
            id="name"
            name="name"
          />
        </div>

        <div className="col-sm-6">
          <label className="form-label fs-base" htmlFor="company">
            {copy.fields.companyLabel}
          </label>
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder={copy.fields.companyPlaceholder}
            maxLength={160}
            autoComplete="organization"
            id="company"
            name="company"
          />
        </div>

        <div className="col-sm-6">
          <label className="form-label fs-base" htmlFor="email">
            {copy.fields.emailLabel}
          </label>
          <input
            className="form-control form-control-lg"
            type="email"
            placeholder={copy.fields.emailPlaceholder}
            required
            maxLength={254}
            autoComplete="email"
            id="email"
            name="email"
          />
        </div>

        <div className="col-sm-6">
          <label className="form-label fs-base" htmlFor="phone">
            {copy.fields.phoneLabel}
          </label>
          <input
            className="form-control form-control-lg"
            type="tel"
            placeholder={copy.fields.phonePlaceholder}
            maxLength={40}
            autoComplete="tel"
            id="phone"
            name="phone"
          />
        </div>

        <div className="col-sm-12">
          <label className="form-label fs-base" htmlFor="service">
            {copy.fields.serviceLabel}
          </label>
          <select className="form-select form-select-lg" id="service" name="service" defaultValue={copy.fields.serviceDefault}>
            {copy.fields.serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="col-sm-12">
          <label className="form-label fs-base" htmlFor="message">
            {copy.fields.messageLabel}
          </label>
          <textarea
            className="form-control form-control-lg"
            rows={6}
            placeholder={copy.fields.messagePlaceholder}
            required
            minLength={10}
            maxLength={5000}
            id="message"
            name="message"
          />
        </div>

        <div className="col-sm-12">
          <div className="d-flex flex-wrap gap-3">
            {copy.topics.map((topic) => (
              <div className="form-check" key={topic.id}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={topic.id}
                  name="topics"
                  value={topic.value}
                  defaultChecked={topic.defaultChecked}
                />
                <label className="form-check-label fs-base" htmlFor={topic.id}>
                  {topic.label}
                </label>
              </div>
            ))}
          </div>

          <div className="form-check mt-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="privacy-acknowledgement"
              name="privacyAcknowledgement"
              value="yes"
              required
            />
            <label className="form-check-label fs-sm" htmlFor="privacy-acknowledgement">
              {copy.privacyAcknowledgement}{" "}
              <a className="text-white" href={lang === "zh" ? "/zh/privacy-policy" : "/privacy-policy"} target="_blank">
                {copy.privacyLinkLabel}
              </a>
            </label>
          </div>

          <p className="fs-sm text-body mt-3 mb-0" style={{ opacity: 0.85 }}>
            {copy.disclaimer}
          </p>

          <div className="visually-hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>
        </div>

        {error && (
          <div className="col-sm-12" role="alert">
            <div className="alert alert-danger mb-0">{error}</div>
          </div>
        )}

        <div className="col-sm-12 text-center pt-4">
          <button className="btn btn-lg btn-light" type="submit" disabled={submitting} aria-busy={submitting}>
            {submitting ? copy.submittingLabel : copy.submitLabel}
          </button>

          <div className="pt-3">
            <a
              className="btn btn-link d-block w-100 text-white text-decoration-none text-wrap text-break px-0"
              href={`mailto:${email}`}
            >
              {copy.orEmailPrefix} {email}
            </a>
          </div>
        </div>
      </div>
    </form>
  );
}
