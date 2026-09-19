/* eslint-disable @next/next/no-html-link-for-pages */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSiteCopy, type Lang } from "@/lib/siteCopy";

export default function BookKeepingPageView({ lang }: { lang: Lang }) {
  const copy = getSiteCopy(lang);
  const p = copy.pages.bookkeeping;
  return (
    <main className="page-wrapper">
      <Navbar lang={lang} copy={copy} />

      {/* Breadcrumb + Page header */}
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
            <h1 className="display-5 mb-3">{p.header.heading}</h1>
            <h2 className="h1 mb-3">{p.header.subheading}</h2>
            <p className="fs-lg mb-0" style={{ maxWidth: 760 }}>
              {p.header.intro}
            </p>
          </div>

          {/* Right callout card */}
          <div className="col-lg-5">
            <div className="card border-0 bg-secondary rounded-5 h-100">
              <div className="card-body p-4 p-lg-5">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="text-body-secondary">{p.header.callout.kicker}</div>
                  <div className="badge bg-primary-subtle text-primary">{p.header.callout.badge}</div>
                </div>

                <div className="d-flex gap-3 align-items-start">
                  <div className="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none flex-shrink-0">
                    <i className="ai-calculator" />
                  </div>
                  <div>
                    <div className="h5 mb-1">{p.header.callout.title}</div>
                    <p className="mb-0 text-body-secondary">{p.header.callout.body}</p>
                  </div>
                </div>

                <hr className="my-4" />

                <div className="d-flex flex-column flex-sm-row gap-2">
                  <a className="btn btn-primary btn-lg" href={copy.navbar.cta.href}>
                    <i className="ai-message fs-xl me-2 ms-n1" />
                    {copy.navbar.cta.label}
                  </a>
                  <a className="btn btn-outline-primary btn-lg" href={p.header.callout.phoneHref}>
                    <i className="ai-phone fs-xl me-2" />
                    {p.header.callout.phoneLabel}
                  </a>
                </div>

                <p className="fs-sm text-body-secondary mt-3 mb-0">
                  Prefer email?{" "}
                  <a href={p.header.callout.emailHref} className="text-decoration-none">
                    {p.header.callout.emailLabel}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="container pb-5 mb-md-3 mb-lg-4 mb-xxl-5">
        <div className="row align-items-end mb-4">
          <div className="col-lg-6">
            <h2 className="h1 mb-2">{p.solutions.title}</h2>
            <p className="text-body-secondary mb-0">{p.solutions.subtitle}</p>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          {p.solutions.items.map((s) => (
            <div className="col" key={s.title}>
              <div className="card border-0 bg-secondary rounded-5 h-100">
                <div className="card-body p-4 p-lg-5">
                  <div className="d-flex align-items-start gap-3">
                    <div className="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none flex-shrink-0">
                      <i className={s.icon} />
                    </div>
                    <div>
                      <h3 className="h4 mb-2">{s.title}</h3>
                      <p className="mb-0">{s.body}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 mb-0 text-body-secondary" style={{ maxWidth: 980 }}>
          {p.solutions.closingNote}
        </p>
      </section>

      {/* Industries + Resources */}
      <section className="container pb-5 mb-md-3 mb-lg-4 mb-xxl-5">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-7">
            <div className="card border-0 bg-secondary rounded-5 h-100">
              <div className="card-body p-4 p-lg-5">
                <h2 className="h1 mb-3">{p.industries.title}</h2>
                <h3 className="h4 mb-3">{p.industries.heading}</h3>
                <p className="mb-0">{p.industries.body}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card border-0 bg-secondary rounded-5 h-100">
              <div className="card-body p-4 p-lg-5">
                <h2 className="h1 mb-3">{p.resources.title}</h2>

                <ul className="list-unstyled mb-0">
                  {p.resources.items.map((r) => (
                    <li className="d-flex align-items-center justify-content-between py-2" key={r.title}>
                      <span className="d-flex align-items-center">
                        <i className={`${r.icon} text-primary fs-4 me-2`} />
                        {r.title}
                      </span>
                      <span className="badge bg-light text-body-secondary border">{r.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portal + Benefits */}
      {/* <section className="container pb-5 mb-md-3 mb-lg-4 mb-xxl-5">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-6">
            <div className="card border-0 bg-secondary rounded-5">
              <div className="card-body p-4 p-lg-5">
                <div className="d-flex align-items-start gap-3">
                  <div className="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none flex-shrink-0">
                    <i className="ai-shield" />
                  </div>
                  <div>
                    <h2 className="h1 mb-2">{p.portal.title}</h2>
                    <p className="mb-0">{p.portal.body}</p>
                  </div>
                </div>

                <hr className="my-4" />

                <h3 className="h5 mb-3">{p.portal.featuresTitle}</h3>
                <ul className="list-unstyled mb-0">
                  {p.portal.features.map((f) => (
                    <li className="d-flex align-items-start mb-2" key={f}>
                      <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="ps-lg-2">
              <h2 className="h1 mb-3">{p.benefits.title}</h2>
              <p className="text-body-secondary mb-4">{p.benefits.body}</p>

              <div className="row row-cols-1 row-cols-sm-2 g-3">
                {p.benefits.items.map((b) => (
                  <div className="col" key={b}>
                    <div className="d-flex align-items-start">
                      <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                      <span>{b}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Personalized solution CTA */}
      <section className="bg-primary py-5" data-bs-theme="dark">
        <div className="container py-4 py-lg-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <h2 className="display-5 mb-3">{p.personalized.title}</h2>
              <p className="fs-lg text-body mb-0">{p.personalized.body}</p>
            </div>
            <div className="col-lg-5">
              <div className="d-flex flex-column flex-sm-row gap-2 justify-content-lg-start">
                <a className="btn btn-light btn-lg" href={copy.navbar.cta.href}>
                  {copy.navbar.cta.label}
                </a>
                <a className="btn btn-outline-light btn-lg" href={p.header.callout.emailHref}>
                  {p.personalized.ctaEmail}
                </a>
              </div>

              <div className="pt-3 text-body">
                <span className="me-3">
                  <i className="ai-phone fs-xl me-2" />
                  <a className="text-white text-decoration-none" href={p.header.callout.phoneHref}>
                    {p.header.callout.phoneLabel}
                  </a>
                </span>
                <span>
                  <i className="ai-mail fs-xl me-2" />
                  <a className="text-white text-decoration-none" href={p.header.callout.emailHref}>
                    {p.header.callout.emailLabel}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer copy={copy} />
    </main>
  );
}
