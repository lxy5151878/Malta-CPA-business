// app/accounting/AccountingPageView.tsx
/* eslint-disable @next/next/no-html-link-for-pages */
import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCta";
import Footer from "@/components/Footer";
import { getSiteCopy, type Lang } from "@/lib/siteCopy";

export default function AccountingPageView({ lang }: { lang: Lang }) {
  const copy = getSiteCopy(lang);
  const t = copy.pages.accounting;

  const homeHref = lang === "zh" ? "/zh" : "/";

  // icons stay as UI config (not translated text)
  const solutionIcons = ["ai-percent", "ai-book", "ai-rocket", "ai-search"] as const;

  const resourceIcons = ["ai-grid", "ai-calculator", "ai-wallet", "ai-calculator"] as const;

  return (
    <main className="page-wrapper" id="top">
      <Navbar lang={lang} copy={copy} />

      {/* Breadcrumb + intro */}
      <section className="container py-5 mt-5 mb-md-3 mb-lg-4 mb-xxl-5">
        <nav aria-label="breadcrumb">
          <ol className="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
            <li className="breadcrumb-item">
              <a href={homeHref}>{t.breadcrumb.home}</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {t.breadcrumb.current}
            </li>
          </ol>
        </nav>

        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <h1 className="mb-3">{t.intro.pageTitle}</h1>
            <h2 className="h1 mb-3">{t.intro.headline}</h2>
            <p className="fs-lg mb-0" style={{ maxWidth: 760 }}>
              {t.intro.body}
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 pt-4">
              <a className="btn btn-primary btn-lg" href="#contact">
                <i className="ai-message fs-xl me-2 ms-n1" />
                {t.intro.ctaBook}
              </a>
              <a className="btn btn-outline-primary btn-lg" href={copy.hero.phone.href}>
                <i className="ai-phone fs-xl me-2" />
                {copy.hero.phone.label}
              </a>
            </div>
          </div>

          <div className="col-lg-5">
            <div
              className="card border-0 bg-size-cover bg-position-center rounded-1"
              style={{ backgroundImage: "url(/assets/01.jpg)" }}
            >
              <div className="d-none d-sm-block" style={{ height: 420 }} />
              <div className="d-sm-none" style={{ height: 300 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="container pb-5 mb-md-3 mb-lg-4 mb-xxl-5">
        <div className="text-center mb-4 mb-lg-5">
          <h2 className="h1 mb-2">{t.solutions.title}</h2>
          <p className="text-body-secondary mb-0">{t.solutions.subtitle}</p>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          {t.solutions.items.map((s, i) => (
            <div className="col" key={s.title}>
              <div className="card bg-secondary border-0 h-100 text-decoration-none">
                <div className="card-body pb-0">
                  <div className="d-flex align-items-center mb-3">
                    <div className="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3">
                      <i className={solutionIcons[i] ?? "ai-star"} />
                    </div>
                    <h3 className="h5 mb-0">{s.title}</h3>
                  </div>
                  <p className="mb-0">{s.body}</p>
                </div>
                <div className="card-footer border-0 py-3 my-3 mb-sm-4">
                  {/* <div className="btn btn-lg btn-icon btn-outline-primary rounded-circle pe-none">
                    <i className="ai-arrow-right" />
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specialists + Resources */}
      <section className="container pb-5 mb-md-3 mb-lg-4 mb-xxl-5">
        <div className="row g-4 g-lg-5 align-items-stretch">
          <div className="col-lg-6">
            <div className="bg-secondary rounded-1 h-100 p-4 p-lg-5">
              <h2 className="h1 mb-3">{t.specialists.kicker}</h2>
              <h3 className="h2 mb-3">{t.specialists.title}</h3>
              <p className="fs-lg mb-0">{t.specialists.body}</p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="bg-secondary rounded-1 h-100 p-4 p-lg-5">
              <h3 className="h2 mb-4">{t.resources.title}</h3>

              <div className="row row-cols-1 row-cols-sm-2 g-3">
                {t.resources.items.map((r, i) => (
                  <div className="col" key={r.title}>
                    <div className="bg-white rounded-1 p-3 h-100 d-flex align-items-center">
                      <div className="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3">
                        <i className={resourceIcons[i] ?? "ai-grid"} />
                      </div>
                      <div className="flex-grow-1">
                        <div className="fw-semibold">{r.title}</div>
                        <div className="text-body-secondary fs-sm">{r.note}</div>
                      </div>
                      <span className="badge text-bg-secondary">Soon</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a className="btn btn-outline-primary" href="#contact">
                  {t.resources.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portal */}
      {/* <section className="container pb-5 mb-md-3 mb-lg-4 mb-xxl-5">
        <div className="bg-secondary rounded-1 p-4 p-lg-5">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-7">
              <h2 className="h1 mb-3">{t.portal.title}</h2>
              <p className="fs-lg mb-4">{t.portal.body}</p>

              <div className="d-flex align-items-center mb-2">
                <div className="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3">
                  <i className="ai-lock" />
                </div>
                <div className="fw-semibold">{t.portal.featuresLabel}</div>
              </div>

              <ul className="list-unstyled mb-0">
                {t.portal.features.map((f) => (
                  <li className="d-flex pt-1 mt-2" key={f}>
                    <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-5">
              <div
                className="card border-0 bg-size-cover bg-position-center rounded-1"
                style={{ backgroundImage: "url(/assets/02.jpg)" }}
              >
                <div className="d-none d-sm-block" style={{ height: 360 }} />
                <div className="d-sm-none" style={{ height: 260 }} />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Benefits */}
      <section className="container pb-5 mb-md-3 mb-lg-4 mb-xxl-5">
        <div className="row pb-md-4 pb-xl-5">
          <div className="col-md-6 mb-2 mb-md-0">
            <div
              className="card border-0 h-100 bg-size-cover bg-position-center rounded-1"
              style={{ backgroundImage: "url(/assets/03.jpg)" }}
            >
              <div className="d-none d-sm-block d-md-none" style={{ height: 450 }} />
              <div className="d-sm-none" style={{ height: 350 }} />
            </div>
          </div>

          <div className="col-md-6 col-xl-5 offset-xl-1">
            <div className="pt-4 pb-sm-4 ps-md-4 ps-xl-0">
              <h2 className="h1 pb-2 pb-sm-3 pb-xl-4">{t.benefits.title}</h2>
              <p className="mb-4">{t.benefits.body}</p>

              {t.benefits.items.map((b, i) => (
                <div className="d-flex pb-3 mb-2" key={b}>
                  <div className="text-body-secondary pt-1">{String(i + 1).padStart(2, "0")}</div>
                  <div className="ps-3">
                    <h3 className="h5 mb-1">{b}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personalized */}
      <section className="container pb-5 mb-md-3 mb-lg-4 mb-xxl-5">
        <div className="bg-secondary rounded-1 p-4 p-lg-5">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-8">
              <h2 className="h1 mb-3">{t.personalized.title}</h2>
              <p className="fs-lg mb-0">{t.personalized.body}</p>
            </div>
            <div className="col-lg-4">
              <div className="d-grid gap-2">
                <a className="btn btn-primary btn-lg" href="#contact">
                  <i className="ai-message fs-xl me-2 ms-n1" />
                  {t.personalized.ctaPrimary}
                </a>
                <a className="btn btn-outline-primary btn-lg" href={copy.hero.phone.href}>
                  <i className="ai-phone fs-xl me-2" />
                  {t.personalized.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      {/* <section className="container pb-5 mb-md-3 mb-lg-4 mb-xxl-5">
        <div className="text-center mb-4 mb-lg-5">
          <div className="text-body-secondary mb-2">{t.otherServices.kicker}</div>
          <h2 className="h1 mb-2">{t.otherServices.title}</h2>
          <p className="text-body-secondary mb-0">{t.otherServices.subtitle}</p>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {t.otherServices.items.map((s, i) => (
            <div className="col" key={s.title}>
              <div className="card bg-secondary border-0 h-100">
                <div className="card-body pb-3">
                  <div className="d-flex align-items-center mb-3">
                    <div className="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3">
                      <i
                        className={
                          ["ai-percent", "ai-cpu", "ai-users", "ai-trending-up", "ai-notebook", "ai-shield-check"][i] ??
                          "ai-star"
                        }
                      />
                    </div>
                    <h3 className="h5 mb-0">{s.title}</h3>
                  </div>
                  <p className="mb-0">{s.body}</p>
                </div>
                <div className="card-footer border-0 pt-3 mb-3">
                  <a
                    className="btn btn-icon btn-lg btn-outline-primary rounded-circle stretched-link"
                    href="#contact"
                    aria-label="Learn more"
                  >
                    <i className="ai-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      <section id="contact">
        <ContactCTA copy={copy} />
      </section>

      <Footer copy={copy} />
    </main>
  );
}
