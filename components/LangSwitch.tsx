"use client";

import type { Lang } from "@/lib/siteCopy";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import type { MouseEvent } from "react";

function toLangPath(pathname: string, lang: Lang) {
  const hasZh = pathname === "/zh" || pathname.startsWith("/zh/");
  if (lang === "zh") return hasZh ? pathname : `/zh${pathname === "/" ? "" : pathname}`;
  // lang === "en"
  return hasZh ? pathname.replace(/^\/zh(?=\/|$)/, "") || "/" : pathname;
}

export default function LangSwitch({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  function hrefFor(next: Lang) {
    const nextPath = toLangPath(pathname, next);
    const qs = searchParams.toString();
    return qs ? `${nextPath}?${qs}` : nextPath;
  }

  function keepHash(event: MouseEvent<HTMLAnchorElement>, next: Lang) {
    const hash = window.location.hash;
    if (!hash) return;
    event.preventDefault();
    router.push(`${hrefFor(next)}${hash}`);
  }

  return (
    <div className="btn-group btn-group-sm order-lg-2 me-3 me-lg-4 ms-auto" role="group" aria-label="Language switch">
      <Link
        className={`btn ${lang === "en" ? "btn-primary" : "btn-outline-primary"}`}
        href={hrefFor("en")}
        onClick={(event) => keepHash(event, "en")}
        aria-current={lang === "en" ? "page" : undefined}
      >
        Eng
      </Link>
      <Link
        className={`btn ${lang === "zh" ? "btn-primary" : "btn-outline-primary"}`}
        href={hrefFor("zh")}
        onClick={(event) => keepHash(event, "zh")}
        aria-current={lang === "zh" ? "page" : undefined}
      >
        中文
      </Link>
    </div>
  );
}
