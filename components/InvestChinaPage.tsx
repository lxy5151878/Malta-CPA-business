/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getSiteCopy, type Lang } from "@/lib/siteCopy";

const content = {
  en: {
    eyebrow: "Invest in China",
    title: "Build and operate your business in China",
    lead: "From market-entry assessment and company formation to finance, industry coordination and local operations, we help international businesses establish a practical and compliant presence in China.",
    primaryCta: "Assess your China entry plan",
    secondaryCta: "Explore the first 100 days",
    snapshotTitle: "A market-entry decision, not just a registration task",
    snapshotBody: "China's nationwide foreign-investment negative list has applied since 1 November 2024. Outside listed restricted sectors, foreign investment is generally managed under the principle of equal treatment, while sector licences and local implementation still require case-specific review.",
    snapshotLink: "View the official negative list",
    routesTitle: "Choose an entry model around the real business",
    routes: [
      { title: "Foreign-invested enterprise", body: "For long-term operations, local contracts, employees, invoicing and an operating presence." },
      { title: "Joint venture", body: "Where local industrial resources, market access or a strategic operating partner adds genuine value." },
      { title: "Representative office", body: "For liaison and market research where direct revenue-generating activity is not required." },
      { title: "M&A or equity investment", body: "For acquiring an existing business, technology, production capability or distribution channel." },
      { title: "Distributor or partner model", body: "For testing demand before committing to a fully operational local entity." },
    ],
    citiesEyebrow: "Primary location choices",
    citiesTitle: "Shanghai, Beijing, Shenzhen and Hangzhou",
    citiesIntro: "These are our main starting points. The final location should follow customers, talent, supply chain, cost, licences and operating needs rather than city reputation alone.",
    cities: [
      { code: "SHA", name: "Shanghai", focus: "Regional management, trade and commercial operations", body: "A strong starting point for international headquarters functions, professional services, consumer markets and cross-border commercial activity." },
      { code: "BJS", name: "Beijing", focus: "Policy-facing, research and enterprise markets", body: "Suitable where regulatory engagement, national institutions, research talent or large enterprise clients are central to the business." },
      { code: "SZX", name: "Shenzhen", focus: "Technology, hardware and supply-chain execution", body: "Particularly relevant for technology products, advanced manufacturing, hardware ecosystems and Greater Bay Area operations." },
      { code: "HGH", name: "Hangzhou", focus: "Digital commerce and technology operations", body: "A practical base for e-commerce, digital platforms, consumer technology and data-driven operating teams." },
    ],
    specialTitle: "Special industries require a separate location study",
    specialBody: "Manufacturing, healthcare, education, telecommunications, finance, data-intensive services, chemicals, food and other regulated or site-dependent activities may need a different city, industrial park or free-trade-zone assessment. We compare the operating requirement first, then the location.",
    hundredTitle: "The first 100 days",
    hundredIntro: "A controlled route from initial intent to an operating business.",
    hundred: [
      { period: "Days 1-20", title: "Entry and sector review", body: "Business model, negative-list screening, licences, ownership, city and investment route." },
      { period: "Days 21-45", title: "Structure and establishment", body: "Entity documents, registration, capital plan, governance and adviser coordination." },
      { period: "Days 46-70", title: "Operating infrastructure", body: "Banking, tax, invoicing, accounting, payroll, employment and internal controls." },
      { period: "Days 71-100", title: "Launch and management", body: "Supplier onboarding, reporting, cash flow, compliance calendar and management dashboard." },
    ],
    operationsTitle: "Support that continues after incorporation",
    operations: [
      "China accounting, tax and management reporting",
      "Local team setup, payroll and finance operations",
      "Supply-chain, procurement and industrial coordination",
      "Distributor, supplier and partner due diligence",
      "Budgeting, cash-flow control and payment approvals",
      "Group reporting and overseas-parent-company coordination",
    ],
    faqTitle: "Questions investors ask first",
    faqs: [
      ["Can a foreign investor own 100% of a Chinese company?", "In many sectors, yes. The exact answer depends on the current foreign-investment negative list, market-access rules and sector-specific licensing."],
      ["Which of the four cities should we choose?", "We assess customers, talent, suppliers, logistics, cost, regulation and management access. Shanghai, Beijing, Shenzhen and Hangzhou are primary options, not automatic answers."],
      ["Is a Hong Kong holding company required?", "No. It can be useful in some structures, but ownership, tax, financing, treaty access, substance and exit plans must be reviewed before deciding."],
      ["Does company registration mean the business can operate immediately?", "Not necessarily. Banking, tax, invoicing, licences, employees, premises and sector approvals may determine the true launch date."],
    ],
    ctaTitle: "Start with the operating plan",
    ctaBody: "Tell us what you will sell, build, source or manage in China. We will map the entity, city, licences, people and financial controls needed to make it operational.",
    sourceTitle: "Official sources",
  },
  zh: {
    eyebrow: "投资中国",
    title: "帮助国际企业在中国落地并持续运营",
    lead: "从市场进入评估、公司设立，到财务体系、产业协调和本地运营，帮助外国投资者在中国建立务实、合规并可持续发展的业务。",
    primaryCta: "评估中国落地方案",
    secondaryCta: "查看前100天计划",
    snapshotTitle: "这是市场进入决策，不只是办理注册",
    snapshotBody: "全国外商投资准入负面清单自2024年11月1日起实施。负面清单以外领域原则上按照内外资一致管理，但具体行业许可和地方执行要求仍须按项目核查。",
    snapshotLink: "查看官方负面清单",
    routesTitle: "根据真实业务选择进入模式",
    routes: [
      { title: "外商投资企业", body: "适合长期经营、本地签约、雇用员工、开具发票及建立实际运营。" },
      { title: "合资企业", body: "适合确实需要本地产业资源、市场渠道或战略运营伙伴的项目。" },
      { title: "代表处", body: "适合市场联络和研究，但不需要直接开展收入业务的企业。" },
      { title: "并购或股权投资", body: "适合取得现有业务、技术、生产能力或销售渠道。" },
      { title: "经销商或合作伙伴模式", body: "适合在建立完整本地实体前测试市场需求。" },
    ],
    citiesEyebrow: "主要落地城市",
    citiesTitle: "上海、北京、深圳与杭州",
    citiesIntro: "这四个城市是我们的主要起点，但最终选址应根据客户、人才、供应链、成本、许可和运营需求决定，而不能只看城市知名度。",
    cities: [
      { code: "SHA", name: "上海", focus: "区域管理、贸易与商业运营", body: "适合国际总部职能、专业服务、消费市场以及跨境商业活动。" },
      { code: "BJS", name: "北京", focus: "政策沟通、科研及大型企业市场", body: "适合重视监管沟通、国家级机构、科研人才或大型企业客户的业务。" },
      { code: "SZX", name: "深圳", focus: "科技、硬件及供应链执行", body: "特别适合科技产品、先进制造、硬件生态以及粤港澳大湾区运营。" },
      { code: "HGH", name: "杭州", focus: "数字商业与科技运营", body: "适合电子商务、数字平台、消费科技及数据驱动型运营团队。" },
    ],
    specialTitle: "特别产业需要单独进行选址研究",
    specialBody: "制造、医疗、教育、电信、金融、数据密集型服务、化工、食品及其他受监管或依赖特定场地的行业，可能需要评估其他城市、产业园区或自由贸易试验区。我们先确定运营需求，再选择地点。",
    hundredTitle: "落地前100天",
    hundredIntro: "从投资意向到实际运营的受控路径。",
    hundred: [
      { period: "第1-20天", title: "准入与行业评估", body: "商业模式、负面清单、许可、持股、城市及投资路径评估。" },
      { period: "第21-45天", title: "结构与公司设立", body: "实体文件、登记、资本计划、公司治理及专业顾问协调。" },
      { period: "第46-70天", title: "运营基础设施", body: "银行、税务、开票、会计、薪资、用工和内部控制。" },
      { period: "第71-100天", title: "启动与管理", body: "供应商准入、管理报告、现金流、合规日历和经营仪表盘。" },
    ],
    operationsTitle: "公司设立后的持续支持",
    operations: [
      "中国会计、税务及管理报告",
      "本地团队搭建、薪资及财务运营",
      "供应链、采购及产业协调",
      "经销商、供应商及合作伙伴尽职调查",
      "预算、现金流控制及付款审批",
      "集团报告与海外母公司衔接",
    ],
    faqTitle: "投资人首先关注的问题",
    faqs: [
      ["外国投资者可以100%持有中国公司吗？", "许多行业可以。具体仍取决于现行外商投资准入负面清单、市场准入规则和行业许可。"],
      ["上海、北京、深圳和杭州应该选哪一个？", "我们根据客户、人才、供应商、物流、成本、监管及管理便利性判断。这四个城市是主要选择，但不是固定答案。"],
      ["是否必须通过香港公司持有中国公司？", "不是。香港架构在部分项目中可能有价值，但应先评估持股、税务、融资、协定待遇、经济实质和退出计划。"],
      ["完成公司注册后是否能马上运营？", "不一定。银行、税务、发票、许可、员工、经营场地及行业审批都会影响真正的启动时间。"],
    ],
    ctaTitle: "从运营计划开始",
    ctaBody: "告诉我们计划在中国销售、生产、采购或管理什么。我们将梳理实现运营所需的实体、城市、许可、人员和财务控制。",
    sourceTitle: "官方来源",
  },
};

const officialSources = [
  { label: "NDRC - Foreign Investment Negative List (2024)", href: "https://www.ndrc.gov.cn/xxgk/zcfb/fzggwl/202409/t20240907_1392875_ext.html" },
  { label: "MOFCOM - Foreign Investment Guide", href: "https://wzs.mofcom.gov.cn/ztxx/art/2024/art_ed0e85fac43441419b9eec06bd76910c.html" },
  { label: "Foreign Investment Law", href: "https://english.www.gov.cn/services/mvestment/202102/24/content_WS6035aa38c6d0719374af9609.html" },
];

export default function InvestChinaPage({ lang }: { lang: Lang }) {
  const copy = getSiteCopy(lang);
  const t = content[lang];
  const contact = lang === "zh" ? "/zh/contact" : "/contact";

  return (
    <main className="page-wrapper china-page">
      <Navbar lang={lang} copy={copy} />

      <section className="china-hero">
        <img src="/assets/generated/invest-china-hero.png" alt={lang === "zh" ? "国际团队在上海讨论中国业务运营计划" : "International and Chinese team planning business operations in Shanghai"} />
        <div className="china-hero-overlay" />
        <div className="container china-hero-content" data-bs-theme="dark">
          <div className="row"><div className="col-lg-8 col-xl-7">
            <div className="text-uppercase text-success fw-semibold fs-sm mb-3">{t.eyebrow}</div>
            <h1 className="display-3 text-white mb-4">{t.title}</h1>
            <p className="fs-xl text-white mb-4">{t.lead}</p>
            <div className="d-flex flex-column flex-sm-row gap-2">
              <a className="btn btn-success btn-lg" href={contact}>{t.primaryCta}</a>
              <a className="btn btn-outline-light btn-lg" href="#first-100-days">{t.secondaryCta}</a>
            </div>
          </div></div>
        </div>
      </section>

      <section className="container py-5">
        <div className="china-policy-band">
          <div><h2 className="h3 mb-2">{t.snapshotTitle}</h2><p className="mb-0 text-body-secondary">{t.snapshotBody}</p></div>
          <a href={officialSources[0].href} target="_blank" rel="noreferrer" className="btn btn-outline-primary flex-shrink-0">{t.snapshotLink}</a>
        </div>
      </section>

      <section className="container pb-5">
        <h2 className="display-6 mb-4">{t.routesTitle}</h2>
        <div className="china-route-grid">{t.routes.map((item, index) => <article className="china-route" key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3 className="h5">{item.title}</h3><p className="text-body-secondary mb-0">{item.body}</p></article>)}</div>
      </section>

      <section className="china-city-section py-5">
        <div className="container py-lg-4">
          <div className="row mb-4"><div className="col-lg-9"><div className="text-uppercase text-primary fw-semibold fs-sm mb-2">{t.citiesEyebrow}</div><h2 className="display-6 mb-3">{t.citiesTitle}</h2><p className="fs-lg text-body-secondary mb-0">{t.citiesIntro}</p></div></div>
          <div className="row row-cols-1 row-cols-md-2 g-3 mb-4">{t.cities.map((city) => <div className="col" key={city.code}><article className="china-city h-100"><span className="china-city-code">{city.code}</span><div><h3 className="h3 mb-1">{city.name}</h3><div className="fw-semibold text-primary mb-2">{city.focus}</div><p className="text-body-secondary mb-0">{city.body}</p></div></article></div>)}</div>
          <div className="growth-notice"><strong>{t.specialTitle}</strong><div className="mt-1">{t.specialBody}</div></div>
        </div>
      </section>

      <section className="container py-5" id="first-100-days">
        <h2 className="display-6 mb-2">{t.hundredTitle}</h2><p className="fs-lg text-body-secondary mb-4">{t.hundredIntro}</p>
        <div className="china-timeline">{t.hundred.map((item) => <article key={item.period}><span>{item.period}</span><h3 className="h5 mt-3">{item.title}</h3><p className="text-body-secondary mb-0">{item.body}</p></article>)}</div>
      </section>

      <section className="china-operations py-5"><div className="container py-lg-4"><div className="row g-4 align-items-start"><div className="col-lg-5"><h2 className="display-6 mb-0">{t.operationsTitle}</h2></div><div className="col-lg-7"><div className="row row-cols-1 row-cols-sm-2 g-3">{t.operations.map((item) => <div className="col d-flex gap-2" key={item}><i className="ai-check-alt text-success fs-4 flex-shrink-0" /><span>{item}</span></div>)}</div></div></div></div></section>

      <section className="container py-5">
        <h2 className="display-6 mb-4">{t.faqTitle}</h2>
        <div className="row row-cols-1 row-cols-lg-2 g-3">{t.faqs.map(([q, a]) => <div className="col" key={q}><article className="growth-panel h-100"><h3 className="h5">{q}</h3><p className="text-body-secondary mb-0">{a}</p></article></div>)}</div>
        <div className="international-cta mt-5"><div><h2 className="h2 mb-2">{t.ctaTitle}</h2><p className="text-body-secondary mb-0">{t.ctaBody}</p></div><a className="btn btn-primary btn-lg" href={contact}>{t.primaryCta}</a></div>
        <div className="border-top pt-4 mt-5"><div className="fw-semibold mb-2">{t.sourceTitle}</div><div className="d-flex flex-wrap gap-3">{officialSources.map((source) => <a href={source.href} key={source.href} target="_blank" rel="noreferrer">{source.label} <i className="ai-arrow-up-right" /></a>)}</div></div>
      </section>
      <Footer copy={copy} />
    </main>
  );
}
