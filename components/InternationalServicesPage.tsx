import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getSiteCopy, type Lang } from "@/lib/siteCopy";

const content = {
  en: {
    eyebrow: "International services",
    title: "Cross-border company administration and family wealth governance",
    lead: "Coordinated support for internationally mobile founders, high-net-worth clients and families who need legal entities, reporting and evidence to work together across jurisdictions.",
    notice: "Services outside Malta are delivered with appropriately qualified local corporate, legal, tax and fiduciary professionals. We do not provide investment management, custody or guaranteed asset-protection outcomes.",
    jurisdictionsTitle: "Company formation and administration",
    jurisdictionsIntro: "The right jurisdiction depends on commercial purpose, tax residence, ownership, banking, substance and reporting obligations, not on incorporation speed alone.",
    jurisdictions: [
      { name: "Hong Kong", body: "Company formation, company secretary coordination, registered office, accounting and annual compliance support." },
      { name: "Singapore", body: "Incorporation planning, local statutory support, accounting coordination and ongoing administration." },
      { name: "BVI", body: "Business-company formation and maintenance with ownership, economic-substance and compliance review." },
      { name: "Cayman Islands", body: "Entity setup and administration for appropriate holding, investment and family structures." },
      { name: "Cyprus", body: "EU company formation, tax and VAT coordination, accounting and corporate administration." },
    ],
    frameworkTitle: "A family wealth governance framework",
    frameworkLead: "Risk isolation is not achieved by adding entities. It requires clear ownership, lawful purpose, documented control and disciplined ongoing administration.",
    pillars: [
      { title: "Risk mapping", body: "Separate operating, investment and family risks and identify where liabilities, guarantees or control overlap." },
      { title: "Ownership governance", body: "Document beneficial ownership, decision rights, succession intentions and family governance responsibilities." },
      { title: "Compliance evidence", body: "Maintain tax-residence, source-of-wealth, source-of-funds and cross-border reporting records." },
      { title: "Succession coordination", body: "Work with legal and tax advisers on wills, trusts, foundations, holding vehicles and continuity planning where suitable." },
    ],
    processTitle: "How an engagement starts",
    process: ["Family and asset map", "Risk and jurisdiction assessment", "Professional-adviser coordination", "Implementation and annual compliance"],
    ctaTitle: "Begin with the family, assets and purpose",
    ctaBody: "We first understand what must be protected, controlled, reported and passed on before recommending any entity or jurisdiction.",
    cta: "Request a confidential review",
  },
  zh: {
    eyebrow: "国际服务",
    title: "跨境公司管理与家族财富治理",
    lead: "服务跨境经营的创始人、高净值客户与家庭，让法律实体、财务报告和合规证据在不同司法辖区之间保持一致。",
    notice: "马耳他以外的服务将与当地具备相应资格的公司、法律、税务及受托专业人士合作完成。我们不提供投资管理或资产托管，也不承诺绝对的资产保护结果。",
    jurisdictionsTitle: "公司注册与持续管理",
    jurisdictionsIntro: "选择司法辖区不能只看注册速度，还应评估商业目的、税务居民地、持股、银行、经济实质及申报义务。",
    jurisdictions: [
      { name: "香港", body: "公司注册、公司秘书协调、注册地址、会计和年度合规支持。" },
      { name: "新加坡", body: "公司设立规划、本地法定支持、会计协调和持续行政管理。" },
      { name: "英属维尔京群岛 BVI", body: "商业公司设立与维护，并审查所有权、经济实质和合规要求。" },
      { name: "开曼群岛 Cayman", body: "为适当的控股、投资及家族架构提供实体设立和行政管理支持。" },
      { name: "塞浦路斯 Cyprus", body: "欧盟公司设立、税务及 VAT 协调、会计与公司行政管理。" },
    ],
    frameworkTitle: "家族财富治理框架",
    frameworkLead: "风险隔离不是简单增加公司数量，而要建立清晰持股、合法目的、可证明的控制关系和持续规范的管理。",
    pillars: [
      { title: "风险地图", body: "区分经营、投资与家族风险，识别责任、担保及控制权的交叉点。" },
      { title: "所有权治理", body: "记录最终实益拥有人、决策权、传承意愿和家族治理责任。" },
      { title: "合规证据", body: "维护税务居民、财富来源、资金来源及跨境申报资料。" },
      { title: "传承协调", body: "在适合的情况下，与法律和税务顾问协调遗嘱、信托、基金会、控股工具及持续经营安排。" },
    ],
    processTitle: "合作如何开始",
    process: ["家族与资产地图", "风险及司法辖区评估", "协调各地专业顾问", "实施与年度合规维护"],
    ctaTitle: "从家庭、资产和目的出发",
    ctaBody: "在建议任何公司或司法辖区前，先明确哪些资产需要保护、如何控制、如何申报以及如何传承。",
    cta: "预约保密评估",
  },
};

export default function InternationalServicesPage({ lang }: { lang: Lang }) {
  const copy = getSiteCopy(lang);
  const t = content[lang];
  const contact = lang === "zh" ? "/zh/contact" : "/contact";
  return (
    <main className="page-wrapper growth-page">
      <Navbar lang={lang} copy={copy} />
      <section className="growth-hero pt-5"><div className="container pt-5 pb-5"><div className="row pt-5 pb-lg-4"><div className="col-xl-9"><div className="text-uppercase text-primary fw-semibold fs-sm mb-3">{t.eyebrow}</div><h1 className="display-3 mb-4">{t.title}</h1><p className="fs-xl mb-0" style={{ maxWidth: 900 }}>{t.lead}</p></div></div></div></section>
      <section className="container py-5">
        <div className="growth-notice mb-5">{t.notice}</div>
        <a className="china-feature-link mb-5" href={lang === "zh" ? "/zh/invest-china" : "/invest-china"}>
          <div>
            <div className="text-uppercase text-success fw-semibold fs-sm mb-2">{lang === "zh" ? "重点市场" : "Featured market"}</div>
            <h2 className="h2 mb-2">{lang === "zh" ? "投资中国：从企业落地到产业运营" : "Invest in China: from market entry to operations"}</h2>
            <p className="text-body-secondary mb-0">{lang === "zh" ? "以上海、北京、深圳和杭州为主要选择，并根据特殊产业需求进行专项选址与运营规划。" : "Explore Shanghai, Beijing, Shenzhen and Hangzhou as primary options, with separate location planning for specialised industries."}</p>
          </div>
          <span className="btn btn-primary flex-shrink-0">{lang === "zh" ? "查看中国服务" : "Explore China services"}</span>
        </a>
        <div className="row mb-4"><div className="col-lg-8"><h2 className="display-6 mb-3">{t.jurisdictionsTitle}</h2><p className="fs-lg text-body-secondary">{t.jurisdictionsIntro}</p></div></div>
        <div className="international-jurisdictions mb-5">{t.jurisdictions.map((item) => <article className="international-jurisdiction" key={item.name}><span className="international-jurisdiction-mark">{item.name.slice(0, 2).toUpperCase()}</span><h3 className="h4">{item.name}</h3><p className="text-body-secondary mb-0">{item.body}</p></article>)}</div>
      </section>
      <section className="growth-process py-5"><div className="container py-lg-4"><div className="row g-5"><div className="col-lg-5"><h2 className="display-6 mb-3">{t.frameworkTitle}</h2><p className="fs-lg text-body-secondary">{t.frameworkLead}</p></div><div className="col-lg-7"><div className="row row-cols-1 row-cols-sm-2 g-3">{t.pillars.map((item) => <div className="col" key={item.title}><div className="growth-step h-100"><h3 className="h5">{item.title}</h3><p className="text-body-secondary mb-0">{item.body}</p></div></div>)}</div></div></div></div></section>
      <section className="container py-5"><h2 className="display-6 mb-4">{t.processTitle}</h2><div className="row row-cols-1 row-cols-md-4 g-3 mb-5">{t.process.map((item, index) => <div className="col" key={item}><div className="growth-stat h-100"><span className="text-primary fw-bold">{String(index + 1).padStart(2, "0")}</span><h3 className="h5 mt-3 mb-0">{item}</h3></div></div>)}</div><div className="international-cta"><div><h2 className="h1 mb-2">{t.ctaTitle}</h2><p className="mb-0 text-body-secondary">{t.ctaBody}</p></div><a className="btn btn-primary btn-lg" href={contact}>{t.cta}</a></div></section>
      <Footer copy={copy} />
    </main>
  );
}
