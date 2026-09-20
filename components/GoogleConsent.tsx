"use client";

import { useEffect, useState } from "react";
import {
  ATTRIBUTION_STORAGE_KEY,
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  getConsentPreferences,
  type Attribution,
} from "@/lib/analytics";

const attributionKeys = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
] as const;

function captureAttribution() {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const captured: Attribution = {};
  attributionKeys.forEach((key) => {
    const value = params.get(key)?.trim();
    if (value) captured[key] = value.slice(0, 250);
  });

  if (Object.keys(captured).length > 0) {
    window.localStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(captured));
  }
}

export default function GoogleConsent() {
  const [open, setOpen] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);
  const [isZh, setIsZh] = useState(false);

  useEffect(() => {
    const existing = getConsentPreferences();
    let active = true;
    queueMicrotask(() => {
      if (!active) return;
      setIsZh(window.location.pathname.startsWith("/zh"));
      setOpen(!existing);
      if (existing) {
        setAnalytics(existing.analytics);
        setAdvertising(existing.advertising);
        if (existing.advertising) captureAttribution();
      }
    });

    window.xlwOpenCookieSettings = () => {
      const current = getConsentPreferences();
      setAnalytics(current?.analytics ?? false);
      setAdvertising(current?.advertising ?? false);
      setCustomizing(true);
      setOpen(true);
    };

    return () => {
      active = false;
      delete window.xlwOpenCookieSettings;
    };
  }, []);

  function save(nextAnalytics: boolean, nextAdvertising: boolean) {
    const preferences: XlwConsentPreferences = {
      analytics: nextAnalytics,
      advertising: nextAdvertising,
      updatedAt: new Date().toISOString(),
      version: CONSENT_VERSION,
    };

    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(preferences));
    window.gtag?.("consent", "update", {
      analytics_storage: nextAnalytics ? "granted" : "denied",
      ad_storage: nextAdvertising ? "granted" : "denied",
      ad_user_data: nextAdvertising ? "granted" : "denied",
      ad_personalization: nextAdvertising ? "granted" : "denied",
    });

    if (nextAdvertising) captureAttribution();
    if (!nextAdvertising) window.localStorage.removeItem(ATTRIBUTION_STORAGE_KEY);

    setAnalytics(nextAnalytics);
    setAdvertising(nextAdvertising);
    setOpen(false);
    setCustomizing(false);
  }

  if (!open) return null;

  return (
    <div className="xlw-consent" role="dialog" aria-modal="true" aria-labelledby="xlw-consent-title">
      <div className="xlw-consent__panel">
        <div className="xlw-consent__copy">
          <h2 className="h5 mb-2" id="xlw-consent-title">
            {isZh ? "您的隐私选择" : "Your privacy choices"}
          </h2>
          <p className="fs-sm text-body-secondary mb-0">
            {isZh
              ? "我们使用必要技术保障网站运行。经您同意后，我们还会使用分析和广告技术来衡量网站及广告效果。"
              : "We use essential technology to operate this site. With your permission, analytics and advertising technologies help us measure website and campaign performance."}
            {" "}
            <a href={isZh ? "/zh/privacy-policy" : "/privacy-policy"}>
              {isZh ? "隐私政策" : "Privacy policy"}
            </a>
          </p>
        </div>

        {customizing && (
          <div className="xlw-consent__preferences">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" checked disabled id="consent-essential" />
              <label className="form-check-label" htmlFor="consent-essential">
                {isZh ? "必要技术（始终启用）" : "Essential technology (always active)"}
              </label>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                checked={analytics}
                onChange={(event) => setAnalytics(event.target.checked)}
                id="consent-analytics"
              />
              <label className="form-check-label" htmlFor="consent-analytics">
                {isZh ? "网站分析" : "Analytics"}
              </label>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                checked={advertising}
                onChange={(event) => setAdvertising(event.target.checked)}
                id="consent-advertising"
              />
              <label className="form-check-label" htmlFor="consent-advertising">
                {isZh ? "广告衡量与个性化" : "Advertising measurement and personalisation"}
              </label>
            </div>
          </div>
        )}

        <div className="xlw-consent__actions">
          {customizing ? (
            <button className="btn btn-primary" type="button" onClick={() => save(analytics, advertising)}>
              {isZh ? "保存选择" : "Save choices"}
            </button>
          ) : (
            <button className="btn btn-outline-secondary" type="button" onClick={() => setCustomizing(true)}>
              {isZh ? "自定义" : "Customise"}
            </button>
          )}
          <button className="btn btn-outline-secondary" type="button" onClick={() => save(false, false)}>
            {isZh ? "全部拒绝" : "Reject all"}
          </button>
          <button className="btn btn-primary" type="button" onClick={() => save(true, true)}>
            {isZh ? "全部接受" : "Accept all"}
          </button>
        </div>
      </div>
    </div>
  );
}
