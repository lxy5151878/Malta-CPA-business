/* eslint-disable @next/next/no-html-link-for-pages */
import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCta";
import Footer from "@/components/Footer";
import { getSiteCopy, type Lang } from "@/lib/siteCopy";

export default function AboutUsPageView({ lang }: { lang: Lang }) {
  const copy = getSiteCopy(lang);
  const p = copy.pages.aboutUs;

  // ✅ keep images here (leave blank for now)
  const aboutHeroImage = "/assets/hero-bg.jpg";
  const getTeamImage = (name: string) => {
    const normalizedName = name.toLowerCase();

    if (normalizedName.includes("shawn")) return "/assets/generated/team-shawn.svg";
    if (normalizedName.includes("kanwal")) return "/assets/generated/team-kanwal.svg";
    if (normalizedName.includes("yixin")) return "/assets/generated/team-yixin.svg";
    if (normalizedName.includes("robert")) return "/assets/generated/team-robert.svg";
    if (normalizedName.includes("brad") || normalizedName.includes("jie")) return "/assets/generated/team-jie.svg";
    if (normalizedName.includes("albert")) return "/assets/generated/team-albert.svg";

    return "/assets/generated/team-yixin.svg";
  };

  return (
    <main className="page-wrapper">
      <Navbar lang={lang} copy={copy} />

      {/* Hero */}
      <section className="bg-dark position-relative py-5">
        <div
          className="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(255,255,255, .03)" }}
        />
        <div className="container position-relative z-2 py-5 mb-4 mb-sm-5" data-bs-theme="dark">
          <div className="row pb-4 pb-lg-5">
            <div className="col-lg-10 col-xl-9">
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

              <h1 className="display-2 pb-2 pb-sm-3">{p.hero.title}</h1>
              <p className="fs-xl text-body mb-0" style={{ maxWidth: 980 }}>
                {p.hero.lead}
              </p>

              <div className="d-flex flex-wrap gap-2 pt-4">
                {p.hero.tags.map((t) => (
                  <span key={t} className="badge bg-primary-subtle text-primary">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About + Image */}
      <section className="container position-relative z-3" style={{ marginTop: -135 }}>
        <div className="rounded-5 overflow-hidden bg-secondary">
          <div className="ratio ratio-16x9">
            <img
              src={aboutHeroImage}
              alt="About Malta Business Partners"
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="row pt-5 mt-n2 mt-sm-0 mt-md-2 mt-lg-4 mt-xl-5">
          <div className="col-md-6 col-lg-5">
            <div className="fs-sm text-uppercase mb-3">{p.about.kicker}</div>
            <h2 className="display-6">{p.about.title}</h2>
          </div>
          <div className="col-md-6 col-xl-5 offset-lg-1 offset-xl-2 pt-1 pt-sm-2 pt-md-5">
            {p.about.paragraphs.map((x) => (
              <p key={x} className="fs-xl">
                {x}
              </p>
            ))}

            <div className="bg-secondary rounded-4 p-4 mt-4">
              <div className="fs-sm text-uppercase text-primary fw-semibold mb-2">{copy.site.slogan}</div>
              <p className="mb-0">{copy.site.founderStatement}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="pt-5 mt-md-2 mt-xl-4 mt-xxl-5">
        <div className="container pt-2 pt-sm-4 pt-lg-5 mt-xxl-2">
          <div className="fs-sm text-uppercase mb-3">{p.mission.kicker}</div>
          <h2 className="display-6 pb-2 mb-0">{p.mission.title}</h2>
          <p className="text-body-secondary fs-lg mb-4">{p.mission.subtitle}</p>

          <div className="row g-4 g-lg-5 align-items-start">
            <div className="col-lg-7">
              <div className="card border-0 bg-secondary rounded-5 h-100">
                <div className="card-body p-4 p-lg-5">
                  <p className="fs-lg mb-0">{p.mission.body}</p>

                  <hr className="my-4" />

                  <div className="row row-cols-1 row-cols-sm-2 g-3">
                    {p.mission.bullets.map((b) => (
                      <div className="col" key={b}>
                        <div className="d-flex align-items-start">
                          <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                          <span>{b}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a className="btn btn-primary btn-lg" href={copy.navbar.cta.href}>
                      {copy.navbar.cta.label}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="card border-0 bg-secondary rounded-5">
                <div className="card-body p-4 p-lg-5">
                  <div className="d-flex align-items-start gap-3">
                    <div className="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none flex-shrink-0">
                      <i className="ai-globe" />
                    </div>
                    <div>
                      <h3 className="h4 mb-2">{p.mission.sideCard.title}</h3>
                      <p className="mb-0 text-body-secondary">{p.mission.sideCard.body}</p>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="row row-cols-2 g-3">
                    {p.mission.sideCard.stats.map((s) => (
                      <div className="col" key={s.label}>
                        <div className="h2 mb-0">{s.value}</div>
                        <div className="text-body-secondary">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container pt-5 mt-1 mt-sm-2 mt-xl-4 mt-xxl-5">
        <div className="pt-2 pt-sm-3 pt-md-4 pt-lg-5">
          <div className="fs-sm text-uppercase mb-3">{p.values.kicker}</div>
          <h2 className="display-6 pb-3 mb-lg-4">{p.values.title}</h2>

          <div className="row row-cols-1 row-cols-md-2 g-4">
            {p.values.items.map((v) => (
              <div className="col" key={v.title}>
                <div className="card border-0 bg-secondary rounded-5 h-100">
                  <div className="card-body p-4 p-lg-5">
                    <div className="d-flex align-items-start gap-3">
                      <div className="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none flex-shrink-0">
                        <i className={v.icon} />
                      </div>
                      <div>
                        <h3 className="h4 mb-2">{v.title}</h3>
                        <p className="mb-0">{v.body}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary py-5 mt-5">
        <div className="container py-3 py-sm-4 py-lg-5">
          <div className="fs-sm text-uppercase mb-3">{p.features.kicker}</div>
          <h2 className="h1 pb-3 mb-lg-4">{p.features.title}</h2>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
            {p.features.items.map((f) => (
              <div className="col" key={f.title}>
                <div className="card h-100 border-0 rounded-5">
                  <div className="card-body p-4">
                    <div className="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none mb-3">
                      <i className={f.icon} />
                    </div>
                    <h3 className="h5">{f.title}</h3>
                    <p className="mb-0 text-body-secondary">{f.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="pt-5 mt-2 mt-xl-4 mt-xxl-5">
        <div className="container pt-3 pt-sm-4 pt-lg-5">
          <div className="fs-sm text-uppercase mb-3">{p.team.kicker}</div>
          <h2 className="display-6 pb-3 mb-lg-4">{p.team.title}</h2>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {p.team.items.map((m) => (
              <div className="col" key={m.name}>
                <div className="card card-hover border-0 rounded-5 overflow-hidden h-100">
                  <img src={getTeamImage(m.name)} alt={m.name} />
                  <div className="card-body">
                    <h3 className="h5 mb-1">{m.name}</h3>
                    <p className="text-body-secondary mb-2">{m.role}</p>
                    <p className="mb-0">{m.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-body-secondary mt-4 mb-0">{p.team.note}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="container pt-5 mt-1 mt-sm-2 mt-xl-4 mt-xxl-5 pb-5">
        <div className="row align-items-start g-4">
          <div className="col-lg-5">
            <div className="fs-sm text-uppercase mb-3">{p.faq.kicker}</div>
            <h2 className="display-6 mb-2">{p.faq.title}</h2>
            <p className="text-body-secondary mb-0">{p.faq.subtitle}</p>
          </div>

          <div className="col-lg-7">
            <div className="accordion" id="aboutFaq">
              {p.faq.items.map((f, idx) => {
                const id = `aboutFaq-${idx}`;
                return (
                  <div className="accordion-item border-0 bg-secondary rounded-5 mb-3" key={f.q}>
                    <h3 className="accordion-header" id={`${id}-heading`}>
                      <button
                        className="accordion-button collapsed bg-transparent"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${id}-collapse`}
                        aria-expanded="false"
                        aria-controls={`${id}-collapse`}
                      >
                        {f.q}
                      </button>
                    </h3>
                    <div
                      id={`${id}-collapse`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`${id}-heading`}
                      data-bs-parent="#aboutFaq"
                    >
                      <div className="accordion-body pt-0">{f.a}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA copy={copy} />
      <Footer copy={copy} />
    </main>
  );
}
