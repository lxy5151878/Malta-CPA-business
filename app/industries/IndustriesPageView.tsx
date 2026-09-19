/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSiteCopy, type Lang } from "@/lib/siteCopy";

export default function IndustriesPageView({ lang }: { lang: Lang }) {
  const copy = getSiteCopy(lang);
  const p = copy.pages.industries;

  const clientImages: Record<string, string> = {
    privateClients: "/assets/generated/client-private.svg",
    entrepreneurs: "/assets/generated/client-entrepreneurs.svg",
    professionalFirms: "/assets/generated/client-firms.svg",
  };

  const sectorImages: Record<string, string> = {
    yachting: "/assets/generated/industry-yachting.svg",
    startupTech: "/assets/generated/industry-startup-tech.svg",
    healthBeauty: "/assets/generated/industry-health-beauty.svg",
    realEstateHospitality: "/assets/generated/industry-real-estate-hospitality.svg",
    ecommerce: "/assets/generated/industry-ecommerce.svg",
    educationTraining: "/assets/generated/industry-education.svg",
    gaming: "/assets/generated/industry-gaming.svg",
  };

  return (
    <main className="page-wrapper">
      <Navbar lang={lang} copy={copy} />

      {/* Breadcrumb + Hero */}
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

        <div className="row align-items-stretch g-4">
          <div className="col-lg-7 d-flex">
            <div className="align-self-center">
              <h1 className="display-5 mb-3">{p.hero.title}</h1>
              <p className="fs-lg text-body-secondary mb-3" style={{ maxWidth: 760 }}>
                {p.hero.subtitle}
              </p>
              <p className="fs-lg mb-0" style={{ maxWidth: 760 }}>
                {p.hero.body}
              </p>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card border-0 bg-secondary rounded-5 h-100">
              <div className="card-body p-4 p-lg-5">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="text-body-secondary">{p.callout.kicker}</div>
                  <div className="badge bg-primary-subtle text-primary">{p.callout.badge}</div>
                </div>

                <div className="d-flex gap-3 align-items-start">
                  <div className="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none flex-shrink-0">
                    <i className="ai-shield-check" />
                  </div>
                  <div>
                    <div className="h5 mb-1">{p.callout.title}</div>
                    <p className="mb-0 text-body-secondary">{p.callout.body}</p>
                  </div>
                </div>

                <hr className="my-4" />

                <div className="d-flex flex-column flex-sm-row gap-2">
                  <a className="btn btn-primary btn-lg" href={copy.navbar.cta.href}>
                    <i className="ai-message fs-xl me-2 ms-n1" />
                    {copy.navbar.cta.label}
                  </a>
                  <a className="btn btn-outline-primary btn-lg" href={p.callout.phoneHref}>
                    <i className="ai-phone fs-xl me-2" />
                    {p.callout.phoneLabel}
                  </a>
                </div>

                <p className="fs-sm text-body-secondary mt-3 mb-0">
                  Prefer email?{" "}
                  <a className="text-decoration-none" href={p.callout.emailHref}>
                    {p.callout.emailLabel}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="container pb-5 mb-md-3 mb-lg-4 mb-xxl-5">
        <div className="row align-items-end mb-4">
          <div className="col-lg-8">
            <h2 className="h1 mb-2">{p.whoWeWorkWith.title}</h2>
            <p className="text-body-secondary mb-0">{p.whoWeWorkWith.subtitle}</p>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-lg-3 g-4">
          {p.whoWeWorkWith.items.map((i) => (
            <div className="col" key={i.id}>
              <div className="card border-0 bg-secondary rounded-5 h-100 overflow-hidden">
                <div className="ratio ratio-16x9">
                  <img
                    src={clientImages[i.id]}
                    alt={i.title}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                  />
                </div>

                <div className="card-body p-4 p-lg-5">
                  <div className="d-flex align-items-start gap-3 mb-3">
                    <div className="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none flex-shrink-0">
                      <i className={i.icon} />
                    </div>
                    <div>
                      <h3 className="h4 mb-2">{i.title}</h3>
                      <p className="mb-0">{i.body}</p>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <h4 className="h6 text-body-secondary mb-3">Common support</h4>
                  <ul className="list-unstyled mb-0">
                    {i.bullets.map((b) => (
                      <li className="d-flex align-items-start mb-2" key={b}>
                        <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-footer border-0 bg-transparent px-4 px-lg-5 pb-4 pb-lg-5 pt-0">
                  <a className="btn btn-outline-primary" href={copy.navbar.cta.href}>
                    {p.whoWeWorkWith.cta} <i className="ai-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Malta sectors */}
      <section className="container pb-5 mb-md-3 mb-lg-4 mb-xxl-5">
        <div className="row align-items-end mb-4">
          <div className="col-lg-8">
            <h2 className="h1 mb-2">{p.maltaSectors.title}</h2>
            <p className="text-body-secondary mb-0">{p.maltaSectors.subtitle}</p>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
          {p.maltaSectors.items.map((c) => (
            <div className="col" key={c.id}>
              <div className="card border-0 bg-secondary rounded-5 h-100 overflow-hidden">
                <div className="ratio ratio-16x9">
                  <img
                    src={sectorImages[c.id]}
                    alt={c.title}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                  />
                </div>

                <div className="card-body p-4 p-lg-5">
                  <div className="d-flex align-items-start gap-3">
                    <div className="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none flex-shrink-0">
                      <i className={c.icon} />
                    </div>
                    <div>
                      <h3 className="h4 mb-2">{c.title}</h3>
                      <p className="mb-0 text-body-secondary">{c.body}</p>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Personalized CTA */}
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
                <a className="btn btn-outline-light btn-lg" href={p.callout.emailHref}>
                  {p.personalized.ctaEmail}
                </a>
              </div>

              <div className="pt-3 text-body">
                <span className="me-3">
                  <i className="ai-phone fs-xl me-2" />
                  <a className="text-white text-decoration-none" href={p.callout.phoneHref}>
                    {p.callout.phoneLabel}
                  </a>
                </span>
                <span>
                  <i className="ai-mail fs-xl me-2" />
                  <a className="text-white text-decoration-none" href={p.callout.emailHref}>
                    {p.callout.emailLabel}
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
