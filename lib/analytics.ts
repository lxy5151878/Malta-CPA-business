export const CONSENT_STORAGE_KEY = "xlw_consent_v1";
export const ATTRIBUTION_STORAGE_KEY = "xlw_attribution_v1";
export const CONSENT_VERSION = "2026-09-19";

export type Attribution = Partial<
  Record<
    | "utm_source"
    | "utm_medium"
    | "utm_campaign"
    | "utm_term"
    | "utm_content"
    | "gclid"
    | "gbraid"
    | "wbraid",
    string
  >
>;

export function getConsentPreferences(): XlwConsentPreferences | null {
  if (typeof window === "undefined") return null;

  try {
    return JSON.parse(window.localStorage.getItem(CONSENT_STORAGE_KEY) || "null") as XlwConsentPreferences | null;
  } catch {
    return null;
  }
}

export function getStoredAttribution(): Attribution {
  if (typeof window === "undefined") return {};

  try {
    return JSON.parse(window.localStorage.getItem(ATTRIBUTION_STORAGE_KEY) || "{}") as Attribution;
  } catch {
    return {};
  }
}

export function trackEvent(name: string, parameters: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, parameters);
}

export function trackLeadAndNavigate(
  destination: string,
  parameters: { language: "en" | "zh"; service: string },
) {
  if (typeof window === "undefined") return;

  let navigated = false;
  const navigate = () => {
    if (navigated) return;
    navigated = true;
    window.location.assign(destination);
  };

  const timer = window.setTimeout(navigate, 1000);
  if (typeof window.gtag !== "function") {
    window.clearTimeout(timer);
    navigate();
    return;
  }

  window.gtag("event", "generate_lead", {
    form_id: "contact",
    language: parameters.language,
    service: parameters.service,
    event_callback: () => {
      window.clearTimeout(timer);
      navigate();
    },
    event_timeout: 900,
  });
}

