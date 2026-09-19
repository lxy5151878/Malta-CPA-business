import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSiteCopy } from "@/lib/siteCopy";
import { getCategory, localizedArticle, type KnowledgeArticle, type Lang } from "@/lib/knowledge";
import { absoluteUrl, companyMeta } from "@/lib/siteMeta";

export default function KnowledgeArticleView({ article, lang }: { article: KnowledgeArticle; lang: Lang }) {
  const copy = getSiteCopy(lang);
  const local = localizedArticle(article, lang);
  const category = getCategory(article.category);
  const homeHref = lang === "zh" ? "/zh" : "/";
  const knowledgeHref = lang === "zh" ? "/zh/knowledge" : "/knowledge";

  const pagePath = `${knowledgeHref}/${article.slug}`;
  const pageUrl = absoluteUrl(pagePath);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: local.title,
        description: local.metaDescription,
        dateModified: article.updated,
        datePublished: article.updated,
        author: {
          "@type": "Organization",
          name: companyMeta.name,
        },
        publisher: {
          "@type": "Organization",
          name: companyMeta.name,
          logo: {
            "@type": "ImageObject",
            url: companyMeta.logo,
          },
        },
        mainEntityOfPage: pageUrl,
        inLanguage: lang === "zh" ? "zh-CN" : "en",
        keywords: local.keywords.join(", "),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: lang === "zh" ? faq.qZh : faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: lang === "zh" ? faq.aZh : faq.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: lang === "zh" ? "首页" : "Home",
            item: absoluteUrl(homeHref),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: lang === "zh" ? "知识中心" : "Knowledge Center",
            item: absoluteUrl(knowledgeHref),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: local.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="page-wrapper">
      <Navbar lang={lang} copy={copy} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="container py-5 mt-5">
        <nav aria-label="breadcrumb">
          <ol className="pt-lg-3 pb-2 breadcrumb">
            <li className="breadcrumb-item">
              <a href={homeHref}>{lang === "zh" ? "首页" : "Home"}</a>
            </li>
            <li className="breadcrumb-item">
              <a href={knowledgeHref}>{lang === "zh" ? "知识中心" : "Knowledge Center"}</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {local.title}
            </li>
          </ol>
        </nav>

        <div className="row g-5">
          <div className="col-lg-8">
            <div className="d-flex flex-wrap gap-2 mb-3">
              <span className="badge text-bg-secondary">{lang === "zh" ? category?.labelZh : category?.label}</span>
              <span className="badge text-bg-light border">{article.readTime}</span>
              <span className="badge text-bg-light border">
                {article.status === "published"
                  ? lang === "zh"
                    ? "已发布"
                    : "Published"
                  : lang === "zh"
                    ? "来源复核中"
                    : "Source review"}
              </span>
            </div>

            <h1 className="display-5 mb-3">{local.title}</h1>
            <p className="fs-lg text-body-secondary mb-4">{local.summary}</p>

            <div className="border rounded-1 p-4 mb-5 bg-secondary">
              <h2 className="h5 mb-3">{lang === "zh" ? "SEO / AI 摘要" : "SEO / AI Summary"}</h2>
              <dl className="row mb-0">
                <dt className="col-sm-3">{lang === "zh" ? "标题" : "Title"}</dt>
                <dd className="col-sm-9">{local.seoTitle}</dd>
                <dt className="col-sm-3">{lang === "zh" ? "描述" : "Description"}</dt>
                <dd className="col-sm-9">{local.metaDescription}</dd>
                <dt className="col-sm-3">{lang === "zh" ? "关键词" : "Keywords"}</dt>
                <dd className="col-sm-9">{local.keywords.join(", ")}</dd>
              </dl>
            </div>

            {article.sections.map((section) => (
              <section className="mb-5" key={section.heading}>
                <h2 className="h1 mb-3">{lang === "zh" ? section.headingZh : section.heading}</h2>
                {(lang === "zh" ? section.bodyZh : section.body).map((paragraph) => (
                  <p className="fs-lg" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <section className="mb-5">
              <h2 className="h1 mb-4">{lang === "zh" ? "常见问题" : "Frequently Asked Questions"}</h2>
              <div className="accordion" id="knowledge-faq">
                {article.faqs.map((faq, index) => {
                  const id = `faq-${index}`;
                  return (
                    <div className="accordion-item" key={faq.q}>
                      <h3 className="accordion-header" id={`${id}-heading`}>
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${id}`}
                          aria-expanded="false"
                          aria-controls={id}
                        >
                          {lang === "zh" ? faq.qZh : faq.q}
                        </button>
                      </h3>
                      <div id={id} className="accordion-collapse collapse" aria-labelledby={`${id}-heading`}>
                        <div className="accordion-body">{lang === "zh" ? faq.aZh : faq.a}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="mb-5">
              <h2 className="h1 mb-3">{lang === "zh" ? "官方引用与来源" : "Official References and Sources"}</h2>
              <p className="text-body-secondary">
                {lang === "zh"
                  ? "法律结论应以官方来源为准。来源复核中的微信文章仅作为选题和整理输入。"
                  : "Legal conclusions should be checked against official sources. Source-intake WeChat articles are drafting inputs only until reviewed."}
              </p>
              <ul className="list-unstyled mb-0">
                {article.references.map((reference) => (
                  <li className="mb-2" key={reference.href}>
                    <span className="badge text-bg-light border me-2">{reference.type}</span>
                    <a href={reference.href} target="_blank" rel="noopener noreferrer">
                      {reference.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="col-lg-4">
            <div className="position-sticky" style={{ top: 110 }}>
              <div className="card border-0 bg-secondary rounded-1">
                <div className="card-body p-4">
                  <h2 className="h4">{lang === "zh" ? "需要合规支持？" : "Need compliance support?"}</h2>
                  <p>
                    {lang === "zh"
                      ? "我们可以协助把公司登记、会计、税务和薪资事项整理成可执行的合规日历。"
                      : "We can help turn registry, accounting, tax, and payroll duties into a practical compliance calendar."}
                  </p>
                  <a className="btn btn-primary w-100" href={lang === "zh" ? "/zh/contact" : "/contact"}>
                    {lang === "zh" ? "联系我们" : "Contact us"}
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <Footer copy={copy} />
    </main>
  );
}
