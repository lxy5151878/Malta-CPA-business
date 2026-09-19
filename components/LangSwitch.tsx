"use client";

import type { Lang } from "@/lib/siteCopy";
import { usePathname, useSearchParams } from "next/navigation";

function toLangPath(pathname: string, lang: Lang) {
  const hasZh = pathname === "/zh" || pathname.startsWith("/zh/");
  if (lang === "zh") return hasZh ? pathname : `/zh${pathname === "/" ? "" : pathname}`;
  // lang === "en"
  return hasZh ? pathname.replace(/^\/zh(?=\/|$)/, "") || "/" : pathname;
}

export default function LangSwitch({ lang }: { lang: Lang }) {
  const checked = lang === "zh";
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function go(next: Lang) {
    const nextPath = toLangPath(pathname, next);

    // keep any query string (optional but nice)
    const qs = searchParams.toString();
    const href = qs ? `${nextPath}?${qs}` : nextPath;

    window.location.assign(href);
  }

  return (
    <div className="form-check form-switch mode-switch order-lg-2 me-3 me-lg-4 ms-auto">
      <input
        className="form-check-input"
        type="checkbox"
        id="lang-switch"
        checked={checked}
        onChange={(e) => go(e.target.checked ? "zh" : "en")}
        aria-label="Language switch"
      />
      <label className="form-check-label" htmlFor="lang-switch">
        <span className="fs-sm fw-semibold">Eng</span>
      </label>
      <label className="form-check-label" htmlFor="lang-switch">
        <span className="fs-sm fw-semibold">中文</span>
      </label>
    </div>
  );
}