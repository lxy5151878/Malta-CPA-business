import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSiteCopy } from "@/lib/siteCopy";
import {
  knowledgeArticles,
  knowledgeCategories,
  localSourceArchiveSummary,
  sourceIntakeSummary,
  type Lang,
} from "@/lib/knowledge";

export default function KnowledgeIndexView({ lang }: { lang: Lang }) {
  const copy = getSiteCopy(lang);
  const base = lang === "zh" ? "/zh/knowledge" : "/knowledge";
  const publishedCount = knowledgeArticles.filter((article) => article.status === "published").length;
  const sourceReviewCount = knowledgeArticles.filter((article) => article.status !== "published").length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: lang === "zh" ? "Malta Knowledge Center" : "Malta Knowledge Center",
    description:
      lang === "zh"
        ? "面向 AI 搜索和国际客户的马耳他公司、会计、税务、VAT、薪资与跨境服务知识库。"
        : "A Malta company, accounting, tax, VAT, payroll, and cross-border services knowledge base built for AI search and international clients.",
    inLanguage: lang === "zh" ? "zh-CN" : "en",
  };

  return (
    <main className="page-wrapper">
      <Navbar lang={lang} copy={copy} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="container py-5 mt-5">
        <div className="row align-items-end g-4 pt-lg-4">
          <div className="col-lg-8">
            <div className="fs-sm text-uppercase text-primary fw-semibold mb-3">
              {lang === "zh" ? "AI-Optimized Knowledge Articles" : "AI-Optimized Knowledge Articles"}
            </div>
            <h1 className="display-4 mb-3">Malta Knowledge Center</h1>
            <p className="fs-lg text-body-secondary mb-0">
              {lang === "zh"
                ? "围绕马耳他公司注册、会计审计、税务、VAT、薪资和跨境架构建设的双语知识库。内容目标是可读、可核验、可被 Google 和 AI 搜索理解引用。"
                : "A bilingual knowledge base for Malta company formation, accounting, audit, tax, VAT, payroll, and cross-border structuring. The content is designed to be readable, verifiable, and easy for Google and AI search systems to understand."}
            </p>
          </div>
          <div className="col-lg-4">
            <div className="card border-0 bg-secondary rounded-1">
              <div className="card-body p-4">
                <div className="row g-3">
                  {[
                    {
                      value: publishedCount,
                      label: lang === "zh" ? "已发布文章" : "Published articles",
                    },
                    {
                      value: sourceReviewCount,
                      label: lang === "zh" ? "待复核文章" : "Source-review articles",
                    },
                    {
                      value: localSourceArchiveSummary.markdownFiles,
                      label: lang === "zh" ? "本地 Markdown 原文" : "Local Markdown sources",
                    },
                    {
                      value: localSourceArchiveSummary.canonicalTopicCandidates,
                      label: lang === "zh" ? "主候选主题" : "Canonical topic candidates",
                    },
                  ].map((stat) => (
                    <div className="col-6" key={stat.label}>
                      <div className="h3 mb-1">{stat.value}</div>
                      <div className="small text-body-secondary">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="border-top mt-4 pt-3 small text-body-secondary">
                  {lang === "zh"
                    ? `微信 URL 队列 ${sourceIntakeSummary.total} 条；本地原文已收到，仍需官方来源核验后重写。`
                    : `${sourceIntakeSummary.total} WeChat URLs remain in the intake queue; local sources are available but still need official-source verification and rewriting.`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
          {knowledgeCategories.map((category) => (
            <div className="col" key={category.slug}>
              <div className="card h-100 border-0 bg-secondary rounded-1">
                <div className="card-body p-4">
                  <h2 className="h4">{lang === "zh" ? category.labelZh : category.label}</h2>
                  <p className="mb-0">{lang === "zh" ? category.descriptionZh : category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container pb-5">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-4">
          <div>
            <h2 className="h1 mb-2">{lang === "zh" ? "已上线文章" : "Published Articles"}</h2>
            <p className="text-body-secondary mb-0">
              {lang === "zh"
                ? "第一批文章先建立结构和引用标准。微信来源正文需要通过可访问导出后继续整理。"
                : "The first articles establish the structure and source policy. WeChat source articles need accessible exports before full rewriting."}
            </p>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-lg-2 g-4">
          {knowledgeArticles.map((article) => {
            const category = knowledgeCategories.find((item) => item.slug === article.category);
            return (
              <article className="col" key={article.slug}>
                <a className="card h-100 border-0 rounded-1 text-decoration-none bg-secondary" href={`${base}/${article.slug}`}>
                  <div className="card-body p-4 p-lg-5">
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      <span className="badge text-bg-light border">
                        {lang === "zh" ? category?.labelZh : category?.label}
                      </span>
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
                    <h3 className="h2">{lang === "zh" ? article.titleZh : article.title}</h3>
                    <p className="mb-4">{lang === "zh" ? article.summaryZh : article.summary}</p>
                    <div className="d-flex align-items-center fw-semibold">
                      {lang === "zh" ? "阅读文章" : "Read article"}
                      <i className="ai-arrow-right fs-4 ms-2" />
                    </div>
                  </div>
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container pb-5 mb-4">
        <div className="bg-secondary rounded-1 p-4 p-lg-5">
          <h2 className="h1 mb-3">{lang === "zh" ? "编辑标准" : "Editorial Standard"}</h2>
          <div className="row g-4">
            {[
              lang === "zh" ? "保留官方原意，不改变法律含义。" : "Preserve official meaning and do not change legal substance.",
              lang === "zh" ? "区分法律要求和实务建议。" : "Separate legal requirements from best-practice guidance.",
              lang === "zh" ? "使用 H1/H2/H3、FAQ、示例和官方引用。" : "Use H1/H2/H3, FAQ, examples, and official references.",
              lang === "zh" ? "双语重写，不做机械逐句翻译。" : "Rewrite bilingually instead of translating sentence by sentence.",
            ].map((item, index) => (
              <div className="col-md-6" key={item}>
                <div className="d-flex">
                  <div className="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="fs-lg mb-0">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer copy={copy} />
    </main>
  );
}
