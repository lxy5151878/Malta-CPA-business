import type { Lang } from "@/lib/siteCopy";

const content = {
  en: {
    eyebrow: "Plan beyond compliance",
    title: "Business, residency and cross-border planning",
    intro: "Start with the right structure and a review-ready evidence file. We coordinate Malta work directly and work with appropriately qualified local professionals where another jurisdiction is involved.",
    cta: "Explore the service",
    items: [
      { title: "Malta company formation", body: "Configure incorporation, tax, accounting and operational support around the real business model.", href: "/company-formation", icon: "ai-building" },
      { title: "Malta MPRP", body: "Financial-document and due diligence preparation alongside an authorised MPRP Licensed Agent.", href: "/mprp", icon: "ai-map-pin" },
      { title: "Malta Nomad Residence Permit", body: "Eligibility, income-evidence and tax-readiness support for remote professionals whose work remains outside Malta.", href: "/nomad-residence", icon: "ai-laptop" },
      { title: "Greece Golden Visa", body: "Cross-border financial-file preparation coordinated with qualified Greek legal and property advisers.", href: "/greece-golden-visa", icon: "ai-home" },
      { title: "Due diligence", body: "CDD, ownership, source-of-wealth and source-of-funds evidence organised for review.", href: "/due-diligence", icon: "ai-shield" },
      { title: "International services", body: "Company formation and administration across Hong Kong, Singapore, BVI, Cayman and Cyprus, with family-wealth governance support.", href: "/international-services", icon: "ai-globe" },
    ],
  },
  zh: {
    eyebrow: "从合规走向长期规划",
    title: "企业、身份与跨境规划",
    intro: "从合适的结构和可审核的证据资料开始。马耳他业务由我们直接协调，涉及其他司法辖区时与当地具备相应资格的专业人士合作。",
    cta: "了解服务",
    items: [
      { title: "马耳他公司设立", body: "根据真实商业模式配置公司注册、税务、会计及运营支持。", href: "/zh/company-formation", icon: "ai-building" },
      { title: "马耳他 MPRP", body: "配合获授权的 MPRP Licensed Agent，准备财务资料和尽职调查文件。", href: "/zh/mprp", icon: "ai-map-pin" },
      { title: "马耳他数字游民居留", body: "为工作关系留在海外的远程专业人士提供资格、收入证据和税务准备支持。", href: "/zh/nomad-residence", icon: "ai-laptop" },
      { title: "希腊 Golden Visa", body: "与希腊法律及房产专业人士协调跨境财务资料和资金证据。", href: "/zh/greece-golden-visa", icon: "ai-home" },
      { title: "尽职调查与资料合规", body: "整理 CDD、持股结构、财富来源和资金来源证据，形成可审核资料包。", href: "/zh/due-diligence", icon: "ai-shield" },
      { title: "国际服务", body: "香港、新加坡、BVI、开曼及塞浦路斯公司注册管理，并提供家族财富治理支持。", href: "/zh/international-services", icon: "ai-globe" },
    ],
  },
};

export default function StrategicServices({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <section className="strategic-services py-5 mt-5">
      <div className="container py-lg-4">
        <div className="row align-items-end g-3 mb-4">
          <div className="col-lg-8">
            <div className="text-uppercase text-primary fw-semibold fs-sm mb-2">{t.eyebrow}</div>
            <h2 className="display-6 mb-3">{t.title}</h2>
            <p className="fs-lg text-body-secondary mb-0">{t.intro}</p>
          </div>
        </div>
        <div className="strategic-services-grid">
          {t.items.map((item) => (
            <a className="strategic-service-item" href={item.href} key={item.href}>
              <i className={`${item.icon} strategic-service-icon`} aria-hidden="true" />
              <div>
                <h3 className="h5 mb-2">{item.title}</h3>
                <p className="text-body-secondary mb-3">{item.body}</p>
                <span className="fw-semibold text-primary">{t.cta} <i className="ai-arrow-right ms-1" /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
