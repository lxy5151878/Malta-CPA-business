"use client";

export default function CookieSettingsButton({ label }: { label: string }) {
  return (
    <button
      className="nav-link d-inline-block text-body-secondary fs-sm text-decoration-none border-0 bg-transparent py-1 px-0"
      type="button"
      onClick={() => window.xlwOpenCookieSettings?.()}
    >
      {label}
    </button>
  );
}

