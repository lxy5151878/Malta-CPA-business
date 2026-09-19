/* eslint-disable @next/next/no-html-link-for-pages */
import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCta";
import Footer from "@/components/Footer";
import { getSiteCopy, type Lang } from "@/lib/siteCopy";

export default function AuditAndAssurancePageView({ lang }: { lang: Lang }) {
  const copy = getSiteCopy(lang);
  const p = copy.pages.auditAndAssurance;

  return (
    <main className="page-wrapper" id="top">
      <Navbar lang={lang} copy={copy} />

      {/* Breadcrumb + intro */}
      <section className="container py-5 mt-5 mb-md-3 mb-lg-4 mb-xxl-5">
        <nav aria-label="breadcrumb">
          <ol className="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
            <li className="breadcrumb-item">
              <a href={lang === "zh" ? "/zh" : "/"}>{p.breadcrumb.home}</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {p.breadcrumb.current}
            </li>
          </ol>
        </nav>

        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <h1 className="mb-3">{p.intro.pageTitle}</h1>
            <h2 className="h1 mb-3">{p.intro.headline}</h2>
            <p className="fs-lg mb-0" style={{ maxWidth: 760 }}>
              {p.intro.body}
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 pt-4">
              <a className="btn btn-primary btn-lg" href="#contact">
                <i className="ai-message fs-xl me-2 ms-n1" />
                {p.intro.ctaBook}
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
              style={{ backgroundImage: `url(/assets/19.jpg)` }}
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
          <h2 className="h1 mb-2">{p.solutions.title}</h2>
          <p className="text-body-secondary mb-0">{p.solutions.subtitle}</p>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          {p.solutions.items.map((s) => (
            <div className="col" key={s.title}>
              <div className="card bg-secondary border-0 h-100">
                <div className="card-body pb-0">
                  <div className="d-flex align-items-center mb-3">
                    <div className="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3">
                      <i className={s.icon} />
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

      {/* Expertise + Engagement quality */}
      <section className="container pb-5 mb-md-3 mb-lg-4 mb-xxl-5">
        <div className="row g-4 g-lg-5 align-items-stretch">
          <div className="col-lg-7">
            <div className="bg-secondary rounded-1 h-100 p-4 p-lg-5">
              <div className="text-body-secondary mb-2">{p.expertise.kicker}</div>
              <h2 className="h1 mb-3">{p.expertise.title}</h2>
              <p className="fs-lg mb-4">{p.expertise.p1}</p>
              <p className="mb-4">{p.expertise.p2}</p>

              <div className="d-flex align-items-center mb-2">
                <div className="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3">
                  <i className="ai-list" />
                </div>
                <div className="fw-semibold">{p.expertise.listLabel}</div>
              </div>

              <ul className="list-unstyled mb-0">
                {p.expertise.items.map((x) => (
                  <li className="d-flex pt-1 mt-2" key={x}>
                    <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="bg-secondary rounded-1 h-100 p-4 p-lg-5">
              <h3 className="h2 mb-3">{p.engagementQuality.title}</h3>
              <p className="mb-4">{p.engagementQuality.p1}</p>
              <p className="mb-4">{p.engagementQuality.p2}</p>

              <ul className="list-unstyled mb-0">
                {p.engagementQuality.items.map((x) => (
                  <li className="d-flex pt-1 mt-2" key={x}>
                    <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                    {x}
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <a className="btn btn-primary w-100" href="#contact">
                  {p.engagementQuality.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialists + Resources */}
      <section className="container pb-5 mb-md-3 mb-lg-4 mb-xxl-5">
        <div className="row g-4 g-lg-5 align-items-stretch">
          <div className="col-lg-6">
            <div className="bg-secondary rounded-1 h-100 p-4 p-lg-5">
              <div className="text-body-secondary mb-2">{p.specialists.kicker}</div>
              <h2 className="h1 mb-3">{p.specialists.title}</h2>
              <p className="fs-lg mb-0">{p.specialists.body}</p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="bg-secondary rounded-1 h-100 p-4 p-lg-5">
              <h3 className="h2 mb-4">{p.resources.title}</h3>

              <div className="row row-cols-1 row-cols-sm-2 g-3">
                {p.resources.items.map((r) => (
                  <div className="col" key={r.title}>
                    <div className="bg-white rounded-1 p-3 h-100 d-flex align-items-center">
                      <div className="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3">
                        <i className={r.icon} />
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
                  {p.resources.cta}
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
              <h2 className="h1 mb-3">{p.portal.title}</h2>
              <p className="fs-lg mb-4">{p.portal.body}</p>

              <div className="d-flex align-items-center mb-2">
                <div className="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3">
                  <i className="ai-lock" />
                </div>
                <div className="fw-semibold">{p.portal.featuresLabel}</div>
              </div>

              <ul className="list-unstyled mb-0">
                {p.portal.features.map((f) => (
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
                style={{ backgroundImage: `url(/assets/333.png)` }}
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
              style={{ backgroundImage: `url(/assets/17.jpg)` }}
            >
              <div className="d-none d-sm-block d-md-none" style={{ height: 450 }} />
              <div className="d-sm-none" style={{ height: 350 }} />
            </div>
          </div>

          <div className="col-md-6 col-xl-5 offset-xl-1">
            <div className="pt-4 pb-sm-4 ps-md-4 ps-xl-0">
              <h2 className="h1 pb-2 pb-sm-3 pb-xl-4">{p.benefits.title}</h2>
              <p className="mb-4">{p.benefits.body}</p>

              {p.benefits.items.map((b, i) => (
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
              <h2 className="h1 mb-3">{p.personalized.title}</h2>
              <p className="fs-lg mb-0">{p.personalized.body}</p>
            </div>

            <div className="col-lg-4">
              <div className="d-grid gap-2">
                <a className="btn btn-primary btn-lg" href="#contact">
                  <i className="ai-message fs-xl me-2 ms-n1" />
                  {p.personalized.ctaPrimary}
                </a>
                <a className="btn btn-outline-primary btn-lg" href={copy.hero.phone.href}>
                  <i className="ai-phone fs-xl me-2" />
                  {p.personalized.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container pb-5 mb-md-3 mb-lg-4 mb-xxl-5">
        <div className="text-center mb-4 mb-lg-5">
          <h2 className="h1 mb-2">{p.faq.title}</h2>
          <p className="text-body-secondary mb-0">{p.faq.subtitle}</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            <div className="accordion" id="auditFaq">
              {p.faq.items.map((f, idx) => {
                const headingId = `auditFaqH-${idx}`;
                const collapseId = `auditFaqC-${idx}`;
                const open = idx === 0;

                return (
                  <div className="accordion-item border-0 mb-3" key={f.q}>
                    <h3 className="accordion-header" id={headingId}>
                      <button
                        className={`accordion-button ${open ? "" : "collapsed"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded={open}
                        aria-controls={collapseId}
                      >
                        {f.q}
                      </button>
                    </h3>
                    <div
                      id={collapseId}
                      className={`accordion-collapse collapse ${open ? "show" : ""}`}
                      aria-labelledby={headingId}
                      data-bs-parent="#auditFaq"
                    >
                      <div className="accordion-body">{f.a}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center pt-3">
              <a className="btn btn-outline-primary" href="#contact">
                {p.faq.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <ContactCTA copy={copy} />
      </section>

      <Footer copy={copy} />
    </main>
  );
}