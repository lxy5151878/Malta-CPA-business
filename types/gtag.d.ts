type GtagConsentValue = "granted" | "denied";

interface Window {
  dataLayer: unknown[];
  gtag?: (...args: unknown[]) => void;
  xlwOpenCookieSettings?: () => void;
}

type XlwConsentPreferences = {
  analytics: boolean;
  advertising: boolean;
  updatedAt: string;
  version: string;
};

