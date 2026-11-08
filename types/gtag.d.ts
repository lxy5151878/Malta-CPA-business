type GtagConsentValue = "granted" | "denied";

interface Window {
  dataLayer: unknown[];
  gtag?: (...args: unknown[]) => void;
  openCookieSettings?: () => void;
}

type ConsentPreferences = {
  analytics: boolean;
  advertising: boolean;
  updatedAt: string;
  version: string;
};

