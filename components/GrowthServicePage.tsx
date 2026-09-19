import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getGrowthPage, type GrowthPageKey } from "@/lib/growthServices";
import { getSiteCopy, type Lang } from "@/lib/siteCopy";

export default function GrowthServicePage({ lang, pageKey }: { lang: Lang; pageKey: GrowthPageKey }) {
  const copy = getSiteCopy(lang);
  const page = getGrowthPage(lang, pageKey);
  const home = lang === "zh" ? "/zh" : "/";
  const contact = lang === "zh" ? "/zh/contact" : "/contact";

  return (
    <main className="page-wrapper growth-page">
      <Navbar lang={lang} copy={copy} />

      <section className="growth-hero pt-5">
        <div className="container pt-5 pb-5">
          <nav aria-label="breadcrumb" className="pt-4">
            <ol className="breadcrumb mb-4">
              <li className="breadcrumb-item"><a href={home}>{lang === "zh" ? "首页" : "Home"}</a></li>
              <li className="breadcrumb-item active" aria-current="page">{page.title}</li>
            </ol>
          </nav>
          <div className="row align-items-end g-4 pb-lg-4">
            <div className="col-lg-8">
              <div className="text-uppercase text-primary fw-semibold fs-sm mb-3">{page.eyebrow}</div>
              <h1 className="display-3 mb-4">{page.title}</h1>
              <p className="fs-xl mb-0" style={{ maxWidth: 850 }}>{page.lead}</p>
            </div>
            <div className="col-lg-4">
              <a className="btn btn-primary btn-lg w-100" href={contact}>
                <i className="ai-message me-2" aria-hidden="true" />
                {lang === "zh" ? "预约保密咨询" : "Book a confidential review"}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="growth-notice mb-5" role="note"><i className="ai-circle-info me-2" aria-hidden="true" />{page.notice}</div>
        <div className="row row-cols-1 row-cols-md-3 g-3 mb-5">
          {page.highlights.map((item) => (
            <div className="col" key={item.value}>
              <div className="growth-stat h-100">
                <div className="h2 text-primary mb-2">{item.value}</div>
                <p className="mb-0 text-body-secondary">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4 mb-5">
          {page.sections.map((section) => (
            <div className="col-lg-6" key={section.title}>
              <article className="growth-panel h-100">
                <h2 className="h3 mb-3">{section.title}</h2>
                <p className="text-body-secondary">{section.body}</p>
                <ul className="list-unstyled mb-0 pt-2">
                  {section.items.map((item) => (
                    <li className="d-flex gap-2 mb-3" key={item}>
                      <i className="ai-check-alt text-primary fs-4 flex-shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section className="growth-process py-5">
        <div className="container py-lg-4">
          <div className="row align-items-end mb-4">
            <div className="col-lg-7"><h2 className="display-6 mb-0">{page.processTitle}</h2></div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
            {page.process.map((step, index) => (
              <div className="col" key={step.title}>
                <div className="growth-step h-100">
                  <span className="growth-step-number">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="h5 mt-4">{step.title}</h3>
                  <p className="mb-0 text-body-secondary">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="row g-4 align-items-center py-lg-4">
          <div className="col-lg-7">
            <h2 className="display-6 mb-3">{page.ctaTitle}</h2>
            <p className="fs-lg text-body-secondary mb-0">{page.ctaBody}</p>
          </div>
          <div className="col-lg-5 d-grid gap-2">
            <a className="btn btn-primary btn-lg" href={contact}>{lang === "zh" ? "联系我们" : "Discuss your case"}</a>
            <a className="btn btn-outline-primary btn-lg" href="mailto:info@accountantsmalta.com">info@accountantsmalta.com</a>
          </div>
        </div>
        <div className="border-top pt-4 mt-3">
          <div className="fw-semibold mb-2">{page.sourceLabel}</div>
          <div className="d-flex flex-wrap gap-3">
            {page.sources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer">{source.label} <i className="ai-arrow-up-right" /></a>)}
          </div>
        </div>
      </section>
      <Footer copy={copy} />
    </main>
  );
}
