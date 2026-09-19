/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Lang, SiteCopy, NavItem } from "@/lib/siteCopy";
import LangSwitch from "@/components/LangSwitch";
import { Suspense } from "react";

export default function Navbar({ lang, copy }: { lang: Lang; copy: SiteCopy }) {
  const nav = copy.navbar;
  const navItems =
    lang === "zh" && !nav.items.some((item) => item.href === "/zh/knowledge")
      ? [
          ...nav.items.slice(0, 3),
          { label: "知识中心", href: "/zh/knowledge" },
          ...nav.items.slice(3),
        ]
      : nav.items;

  return (
    <header className="navbar navbar-expand-lg fixed-top bg-light navbar-stuck">
      <div className="container">
        {/* Brand */}
        {/* <a className="navbar-brand pe-sm-3" href={nav.brand.href}>
          <span className="text-primary flex-shrink-0 me-2">
            <svg width="35" height="32" viewBox="0 0 36 33" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="M35.6,29c-1.1,3.4-5.4,4.4-7.9,1.9c-2.3-2.2-6.1-3.7-9.4-3.7c-3.1,0-7.5,1.8-10,4.1c-2.2,2-5.8,1.5-7.3-1.1c-1-1.8-1.2-4.1,0-6.2l0.6-1.1l0,0c0.6-0.7,4.4-5.2,12.5-5.7c0.5,1.8,2,3.1,3.9,3.1c2.2,0,4.1-1.9,4.1-4.2s-1.8-4.2-4.1-4.2c-2,0-3.6,1.4-4,3.3H7.7c-0.8,0-1.3-0.9-0.9-1.6l5.6-9.8c2.5-4.5,8.8-4.5,11.3,0L35.1,24C36,25.7,36.1,27.5,35.6,29z"
              />
            </svg>
          </span>
          {nav.brand.label}
        </a> */}
        <a className="navbar-brand pe-sm-3 d-flex flex-column align-items-center py-1" href={nav.brand.href}>
          <img src="/assets/logo.png" alt={nav.brand.label} width={70} height={70} className="flex-shrink-0" />
          <span
            className="d-none d-sm-block text-primary fw-semibold text-uppercase"
            style={{ fontSize: 10, lineHeight: 1.1, whiteSpace: "nowrap" }}
          >
            {copy.site.slogan}
          </span>
          {/* <span>{nav.brand.label}</span> */}
        </a>

        {/* ✅ Mobile: language switch OUTSIDE hamburger, left of toggler */}
        <div className="d-lg-none d-flex align-items-center ms-auto me-2">
          <Suspense fallback={null}>
            <LangSwitch lang={lang} />
          </Suspense>
        </div>

        {/* Mobile menu toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Nav */}
        <nav className="collapse navbar-collapse" id="navbarNav">
          {/* ✅ Wrapper so we can center UL on desktop while keeping right controls */}
          <div className="w-100 d-lg-flex align-items-center">
            {/* ✅ Desktop center: mx-lg-auto centers this block between brand and right controls */}
            <ul
              className="navbar-nav navbar-nav-scroll mx-lg-auto"
              style={{ ["--ar-scroll-height" as any]: "520px" }}
            >
              {navItems.map((item: NavItem) => {
                if (item.children?.length) {
                  const id = `dd-${item.label.toLowerCase().replace(/\s+/g, "-")}`;
                  const isMega = item.label === "Services" || item.label === "服务";

                  return (
                    <li className="nav-item dropdown" key={item.label}>
                      <a
                        className="nav-link dropdown-toggle"
                        href={item.href}
                        id={id}
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {item.label}
                      </a>

                      {isMega ? (
                        <div className="dropdown-menu p-0 overflow-hidden" style={{ minWidth: 360, maxWidth: 520 }}>
                          <div className="p-2 p-lg-3">
                            <ul className="list-unstyled mb-0" style={{ maxHeight: "70vh", overflowY: "auto" }}>
                              {item.children.map((c) => (
                                <li key={c.label}>
                                  <a className="dropdown-item py-2" href={c.href}>
                                    {c.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <ul className="dropdown-menu" aria-labelledby={id}>
                          {item.children.map((c) => (
                            <li key={c.label}>
                              <a className="dropdown-item" href={c.href}>
                                {c.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                return (
                  <li className="nav-item" key={item.label}>
                    <a className="nav-link" href={item.href}>
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* ✅ Desktop right controls */}
            <div className="d-none d-lg-flex align-items-center me-3">
              <Suspense fallback={null}>
                <LangSwitch lang={lang} />
              </Suspense>
            </div>

            <a
              className="btn btn-outline-primary btn-sm fs-sm d-none d-lg-inline-flex me-2 navbar-action"
              href={nav.login.href}
              aria-label={nav.login.label}
              title={nav.login.label}
            >
              <i className="ai-login fs-xl me-2 ms-n1" aria-hidden="true" />
              <span className="navbar-action-label">{nav.login.label}</span>
            </a>

            <a
              className="btn btn-primary btn-sm fs-sm d-none d-lg-inline-flex navbar-action"
              href={nav.cta.href}
              aria-label={nav.cta.label}
              title={nav.cta.label}
            >
              <i className="ai-message fs-xl me-2 ms-n1" aria-hidden="true" />
              <span className="navbar-action-label">{nav.cta.label}</span>
            </a>
          </div>

          {/* ✅ Mobile-only: Contact button INSIDE hamburger (all <lg) */}
          <div className="d-lg-none d-grid gap-2 p-3 border-top mt-2">
            <a className="btn btn-outline-primary w-100" href={nav.login.href}>
              <i className="ai-login fs-xl me-2 ms-n1" aria-hidden="true" />
              {nav.login.label}
            </a>
            <a className="btn btn-primary w-100" href={nav.cta.href}>
              <i className="ai-message fs-xl me-2 ms-n1"></i>
              {nav.cta.label}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
