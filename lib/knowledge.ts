export type Lang = "en" | "zh";

export type KnowledgeCategory = {
  slug: string;
  label: string;
  labelZh: string;
  description: string;
  descriptionZh: string;
};

export type KnowledgeArticle = {
  slug: string;
  category: string;
  title: string;
  titleZh: string;
  seoTitle: string;
  seoTitleZh: string;
  metaDescription: string;
  metaDescriptionZh: string;
  keywords: string[];
  keywordsZh: string[];
  summary: string;
  summaryZh: string;
  updated: string;
  readTime: string;
  status: "published" | "source-review";
  sections: {
    heading: string;
    headingZh: string;
    body: string[];
    bodyZh: string[];
  }[];
  faqs: {
    q: string;
    qZh: string;
    a: string;
    aZh: string;
  }[];
  references: {
    label: string;
    href: string;
    type: "Primary source" | "Source intake";
  }[];
};

export type SourceIntakeItem = {
  id: string;
  href: string;
  status: "source-blocked" | "ready-for-rewrite";
  note: string;
  nextAction: string;
};

export const knowledgeCategories: KnowledgeCategory[] = [
  {
    slug: "company-formation",
    label: "Company Formation",
    labelZh: "公司注册",
    description: "Malta company setup, annual obligations, MBR filings, and governance basics.",
    descriptionZh: "马耳他公司设立、年度义务、MBR 申报和公司治理基础。",
  },
  {
    slug: "accounting-audit",
    label: "Accounting & Audit",
    labelZh: "会计与审计",
    description: "Accounting records, financial statements, audit preparation, and reporting routines.",
    descriptionZh: "会计记录、财务报表、审计准备和定期报告流程。",
  },
  {
    slug: "taxation",
    label: "Taxation",
    labelZh: "税务",
    description: "Corporate tax, income tax, tax return preparation, and practical compliance notes.",
    descriptionZh: "企业税、所得税、税表准备和实务合规说明。",
  },
  {
    slug: "vat-eu-trade",
    label: "VAT & EU Trade",
    labelZh: "VAT 与欧盟贸易",
    description: "VAT registration, VAT returns, EU trade, and common documentation risks.",
    descriptionZh: "VAT 注册、VAT 申报、欧盟贸易和常见凭证风险。",
  },
  {
    slug: "payroll-employment",
    label: "Payroll & Employment",
    labelZh: "薪资与劳动法",
    description: "Payroll setup, employer reporting, employee onboarding, and recurring controls.",
    descriptionZh: "薪资设置、雇主申报、员工入职和持续内控。",
  },
  {
    slug: "china-outbound",
    label: "China Outbound Investment",
    labelZh: "中国企业出海",
    description: "Cross-border structuring and Malta operations for Chinese and Hong Kong businesses.",
    descriptionZh: "面向中国和香港企业的跨境架构与马耳他运营。",
  },
  {
    slug: "residency-immigration",
    label: "Residency & Immigration",
    labelZh: "身份规划",
    description: "Residency, relocation, and immigration-related planning topics connected to Malta structures.",
    descriptionZh: "与马耳他架构相关的居留、迁移和身份规划主题。",
  },
  {
    slug: "trust-wealth-management",
    label: "Trust & Wealth Management",
    labelZh: "家族信托与财富管理",
    description: "Trust, family wealth, succession, and private client structuring topics.",
    descriptionZh: "信托、家族财富、传承和私人客户架构主题。",
  },
  {
    slug: "international-structuring",
    label: "International Structuring",
    labelZh: "国际架构",
    description: "Cross-border holding, operating, and compliance structures for international businesses.",
    descriptionZh: "面向国际业务的跨境控股、运营和合规架构。",
  },
  {
    slug: "hong-kong-malta",
    label: "Hong Kong & Malta Cross-border Services",
    labelZh: "香港与马耳他跨境服务",
    description: "Tax, company, accounting, and operating links between Hong Kong and Malta structures.",
    descriptionZh: "香港与马耳他架构之间的税务、公司、会计和运营衔接。",
  },
  {
    slug: "industry-insights",
    label: "Industry Insights",
    labelZh: "行业洞察",
    description: "Regulated and growth-sector topics where Malta company, tax, compliance, and licensing rules intersect.",
    descriptionZh: "聚焦马耳他公司、税务、合规与牌照规则交叉的受监管行业和增长行业主题。",
  },
  {
    slug: "malta-market-context",
    label: "Malta Market Context",
    labelZh: "马耳他市场环境",
    description: "Political, economic, regulatory, and market context for Malta business and investment decisions.",
    descriptionZh: "面向马耳他商业和投资决策的政治、经济、监管和市场环境分析。",
  },
];

export const sourceIntakeUrls = [
  "https://mp.weixin.qq.com/s/Olcta6M0l8xXAdi8MB5q0A",
  "https://mp.weixin.qq.com/s/T1W_BIXFDO5jk7pRqQZuWQ",
  "https://mp.weixin.qq.com/s/sZYqnQ44RG74Y_lzFGOU9Q",
  "https://mp.weixin.qq.com/s/J2DEfMtZmfg7WXdLKBisjA",
  "https://mp.weixin.qq.com/s/_6D_jOFX_ZqI1wYzgllqHw",
  "https://mp.weixin.qq.com/s/jGXsndkMLnAs6SH8nZfNTg",
  "https://mp.weixin.qq.com/s/u8oQRm6rVCCYEFc4w6YJ-g",
  "https://mp.weixin.qq.com/s/TzVPPrDcpMVUjYKbohsGJQ",
  "https://mp.weixin.qq.com/s/ZTDZnJdVRxckuK-xXxkowg",
  "https://mp.weixin.qq.com/s/_EVThbsLfthqno_cUO5JBA",
  "https://mp.weixin.qq.com/s/ajfiEX0iVD_hIOXV28kNwQ",
  "https://mp.weixin.qq.com/s/5AlUJesEPwwbjNeUV-NRhw",
  "https://mp.weixin.qq.com/s/-wp-1wVcnTX1eZhx9nysUA",
  "https://mp.weixin.qq.com/s/1RGw63pamsg9jCN1ybXeaA",
  "https://mp.weixin.qq.com/s/grTVzDU2b8cgVhAaA9vPAg",
  "https://mp.weixin.qq.com/s/pD6uONMURtyH1-1qRibaoA",
  "https://mp.weixin.qq.com/s/-1Y_8V9EFm1XEhygHFoWYA",
  "https://mp.weixin.qq.com/s/tp7-vWuvpAPZVk1VUPMiKw",
  "https://mp.weixin.qq.com/s/gE_1F8Bo7YAhKi9msyI6nw",
  "https://mp.weixin.qq.com/s/uwMefdozvslRwC-ACfQENA",
  "https://mp.weixin.qq.com/s/UEa83rN6XqPQ_LsSfeqIbA",
  "https://mp.weixin.qq.com/s/cb7Xl2ZWLWKBecQF5IvfUw",
  "https://mp.weixin.qq.com/s/Bhnyekp1jEC0RtDpRdpKhA",
  "https://mp.weixin.qq.com/s/Cvo2B_CYIEBxIYXOOwccKA",
  "https://mp.weixin.qq.com/s/FEgTg6WcfcryL5V80gaCMg",
  "https://mp.weixin.qq.com/s/tGzeMKSciesmtElrsb-vxQ",
  "https://mp.weixin.qq.com/s/iGyKXhSUIea62ETJX1n8dQ",
  "https://mp.weixin.qq.com/s/coCf9GS1yc3btVhNP5fRcw",
  "https://mp.weixin.qq.com/s/bbLH56od5O6a-rKnpBcsAg",
  "https://mp.weixin.qq.com/s/1Wn6WQCDuuDm8VPKz9Y1ZQ",
  "https://mp.weixin.qq.com/s/H19pahnVgNicL8fUKkZUig",
  "https://mp.weixin.qq.com/s/GvkT6JFYeve0e3AMahbxwQ",
  "https://mp.weixin.qq.com/s/e4y6g0opydQ4LjrHw-UXcQ",
  "https://mp.weixin.qq.com/s/1Nv996wLV5HJMEfUtu_nkA",
  "https://mp.weixin.qq.com/s/LtGJOqPiSO8IX-Br1FAroA",
] as const;

export const sourceIntakeItems: SourceIntakeItem[] = sourceIntakeUrls.map((href, index) => ({
  id: `wechat-source-${String(index + 1).padStart(2, "0")}`,
  href,
  status: "source-blocked",
  note: "WeChat verification blocks direct retrieval; source text export is required before rewriting.",
  nextAction: "Export the original article text, then rewrite against official Malta sources before publishing.",
}));

export const sourceIntakeSummary = {
  total: sourceIntakeItems.length,
  blocked: sourceIntakeItems.filter((item) => item.status === "source-blocked").length,
  ready: sourceIntakeItems.filter((item) => item.status === "ready-for-rewrite").length,
};

export const localSourceArchiveSummary = {
  directory: "../马耳他公众号文章",
  markdownFiles: 31,
  canonicalTopicCandidates: 13,
  status: "Local Markdown sources have been grouped into 13 canonical topics and rewritten as bilingual Knowledge Center articles with official-source references.",
};

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    slug: "malta-annual-return-guide",
    category: "company-formation",
    title: "Malta Annual Return Guide: Filing Duties, Risks and Practical Controls",
    titleZh: "马耳他 Annual Return 指南：申报义务、风险与实务控制",
    seoTitle: "Malta Annual Return Guide: Filing Requirements, Risks and Practical Tips",
    seoTitleZh: "马耳他 Annual Return 指南：申报要求、风险与实务建议",
    metaDescription:
      "Understand what a Malta Annual Return is, how it differs from financial statements, and how companies can manage MBR filing obligations responsibly.",
    metaDescriptionZh:
      "了解马耳他 Annual Return 是什么、它与财务报表有何不同，以及公司如何负责任地管理 MBR 申报义务。",
    keywords: ["Malta Annual Return", "Malta company compliance", "MBR filing", "Malta corporate services"],
    keywordsZh: ["马耳他年度申报", "马耳他公司合规", "MBR 申报", "马耳他公司服务"],
    summary:
      "The Annual Return is a recurring corporate filing obligation. It should be managed separately from accounting records, financial statements, and tax filings.",
    summaryZh:
      "Annual Return 是公司持续合规中的一项定期公司法申报义务，应与会计记录、财务报表和税务申报分开管理。",
    updated: "2026-06-25",
    readTime: "6 min read",
    status: "published",
    sections: [
      {
        heading: "What is a Malta Annual Return?",
        headingZh: "什么是马耳他 Annual Return？",
        body: [
          "A Malta Annual Return is a company law filing made to the Malta Business Registry. It records key company information and helps keep the public company register current.",
          "It is not the same document as financial statements, tax returns, or VAT returns. Those obligations have different purposes, filing routes, and supporting records.",
        ],
        bodyZh: [
          "马耳他 Annual Return 是向 Malta Business Registry 提交的公司法申报文件，用于更新公司登记册中的关键信息。",
          "它并不等同于财务报表、所得税申报或 VAT 申报。这些义务的法律目的、提交路径和支持文件均不同。",
        ],
      },
      {
        heading: "Legal requirement vs best practice",
        headingZh: "法律要求与实务建议的区别",
        body: [
          "Legal requirement: directors must ensure that statutory company filings are made according to the Companies Act and current MBR procedures.",
          "Best practice: maintain a compliance calendar, keep beneficial ownership and officer details current, and review filing data before the annual deadline cycle starts.",
        ],
        bodyZh: [
          "法律要求：董事需要确保公司法定申报符合《Companies Act》和 MBR 当前程序要求。",
          "实务建议：建立合规日历，及时维护受益所有人和公司人员信息，并在年度截止周期开始前复核申报数据。",
        ],
      },
      {
        heading: "Common mistakes",
        headingZh: "常见误区",
        body: [
          "Treating the Annual Return as an accounting report is a common error. It belongs to corporate registry compliance, while financial statements belong to accounting and audit compliance.",
          "Another risk is assuming that no activity means no filing work. Dormant or low-activity companies may still have company registry obligations.",
        ],
        bodyZh: [
          "把 Annual Return 当成会计报表是常见错误。Annual Return 属于公司登记合规，财务报表则属于会计和审计合规。",
          "另一个风险是认为公司没有经营就没有申报工作。休眠或低活动公司仍可能存在公司登记义务。",
        ],
      },
      {
        heading: "Professional insight",
        headingZh: "专业实务建议",
        body: [
          "For owner-managed and foreign-owned Malta companies, the practical control is to connect registry filings with bookkeeping, tax, and audit calendars. The workstreams are separate, but missing one can affect the reliability of the others.",
          "Before filing, confirm the current legal deadline, form requirements, fees, and penalty position against official MBR or legislation sources.",
        ],
        bodyZh: [
          "对于股东管理型公司和外资马耳他公司，实务控制重点是把公司登记申报、簿记、税务和审计日历连接起来。它们是不同工作流，但其中一项遗漏会影响整体合规可靠性。",
          "申报前，应以 MBR 或马耳他法律官方来源确认最新截止日期、表格要求、费用和罚款规则。",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the Annual Return the same as financial statements?",
        qZh: "Annual Return 和财务报表一样吗？",
        a: "No. The Annual Return is a company registry filing. Financial statements are accounting records prepared under separate accounting and audit requirements.",
        aZh: "不一样。Annual Return 是公司登记申报文件；财务报表则是在独立的会计和审计要求下编制的会计文件。",
      },
      {
        q: "Can a company ignore the Annual Return if it had no trading activity?",
        qZh: "公司没有经营活动，可以不管 Annual Return 吗？",
        a: "Do not assume that no trading activity removes registry obligations. Confirm the current filing position against MBR requirements before deciding.",
        aZh: "不要假设没有经营活动就没有登记申报义务。作出判断前，应按 MBR 当前要求确认公司申报状态。",
      },
      {
        q: "Who should manage the filing calendar?",
        qZh: "谁应该管理申报日历？",
        a: "Directors remain responsible for compliance, but many companies use an accountant, company service provider, or internal finance owner to coordinate deadlines.",
        aZh: "董事仍对合规负责，但很多公司会由会计师、公司服务提供商或内部财务负责人协调截止日期。",
      },
    ],
    references: [
      { label: "Malta Business Registry", href: "https://mbr.mt/", type: "Primary source" },
      { label: "Companies Act, Chapter 386", href: "https://legislation.mt/eli/cap/386/eng", type: "Primary source" },
    ],
  },
  {
    slug: "malta-vat-registration-guide",
    category: "vat-eu-trade",
    title: "Malta VAT Registration Guide: Article 10, Article 11 and Article 12 Explained",
    titleZh: "马耳他 VAT 注册指南：Article 10、Article 11 与 Article 12 的区别",
    seoTitle: "Malta VAT Registration Guide: Article 10, Article 11, Article 12, Rates and Records",
    seoTitleZh: "马耳他 VAT 注册指南：Article 10、Article 11、Article 12、税率与记录保存",
    metaDescription:
      "A practical Malta VAT registration guide covering Article 10, Article 11, Article 12, VAT rates, filing routines, records, and common compliance risks.",
    metaDescriptionZh:
      "实务角度解释马耳他 VAT 注册，包括 Article 10、Article 11、Article 12、VAT 税率、申报节奏、记录保存和常见合规风险。",
    keywords: [
      "Malta VAT registration",
      "Article 10 VAT Malta",
      "Article 11 VAT Malta",
      "Article 12 VAT Malta",
      "Malta VAT compliance",
    ],
    keywordsZh: ["马耳他 VAT 注册", "马耳他 Article 10 VAT", "马耳他 Article 11 VAT", "马耳他 Article 12 VAT", "马耳他 VAT 合规"],
    summary:
      "Malta VAT registration depends on the type of activity, place of supply, turnover position, and EU trade exposure. Companies should confirm the registration type before issuing invoices or recovering input VAT.",
    summaryZh:
      "马耳他 VAT 注册取决于业务活动类型、供应地点、营业额情况和欧盟贸易安排。企业在开具发票或抵扣进项 VAT 前，应先确认适用的注册类型。",
    updated: "2026-06-25",
    readTime: "8 min read",
    status: "published",
    sections: [
      {
        heading: "Direct answer",
        headingZh: "直接答案",
        body: [
          "A person carrying on an economic activity may need Malta VAT registration when supplies, acquisitions, or services fall within the scope of Maltese VAT rules.",
          "Article 10, Article 11 and Article 12 registrations serve different purposes. Selecting the wrong registration type can affect invoicing, input VAT recovery, EU trade reporting, and later de-registration.",
        ],
        bodyZh: [
          "从事经济活动的人士或企业，如果其供应、采购或服务落入马耳他 VAT 规则范围，可能需要在马耳他进行 VAT 注册。",
          "Article 10、Article 11 和 Article 12 注册目的不同。选错注册类型，可能影响开票、进项 VAT 抵扣、欧盟贸易申报以及后续注销。",
        ],
      },
      {
        heading: "Legal requirement vs best practice",
        headingZh: "法律要求与实务建议",
        body: [
          "Legal requirement: Malta VAT obligations should be checked against the Value Added Tax Act, MTCA registration guidance, and the taxpayer's actual transaction pattern.",
          "Best practice: map expected sales, purchases, EU transactions, invoice flow, and input VAT recovery before applying for a VAT number.",
        ],
        bodyZh: [
          "法律要求：马耳他 VAT 义务应根据《Value Added Tax Act》、MTCA 注册说明以及纳税人的真实交易模式判断。",
          "实务建议：申请 VAT 号码前，应先梳理预计销售、采购、欧盟交易、发票流程和进项 VAT 抵扣需求。",
        ],
      },
      {
        heading: "Article 10 VAT registration",
        headingZh: "Article 10 VAT 注册",
        body: [
          "MTCA's registrations FAQ explains that a taxable person established in Malta must register under Article 10 if making a supply for consideration in Malta, unless the supply is exempt without credit.",
          "The same FAQ states that Article 10 registration is the VAT registration type that provides the option to recover input VAT, subject to the activity carrying a right of VAT recovery.",
          "An Article 10 registrant is generally required to charge VAT on taxable supplies taking place in Malta and submit periodic VAT returns electronically.",
        ],
        bodyZh: [
          "MTCA 的注册 FAQ 说明，在马耳他设立的 taxable person 如在马耳他作出有偿供应，除非该供应属于 exempt without credit，通常须按 Article 10 注册。",
          "同一 FAQ 也说明，Article 10 注册是可提供进项 VAT 抵扣选项的 VAT 注册类型，但前提是相关业务活动本身享有抵扣权。",
          "Article 10 注册人通常需要就发生在马耳他的应税供应收取 VAT，并以电子方式提交周期性 VAT 申报。",
        ],
      },
      {
        heading: "Article 11 and small enterprise treatment",
        headingZh: "Article 11 与小企业待遇",
        body: [
          "If expected annual domestic turnover does not exceed the domestic threshold, MTCA's FAQ states that a person may opt for Article 11 registration as an exempt small enterprise.",
          "Under this registration, the FAQ explains that the person does not charge VAT on supplies and cannot recover VAT incurred on purchases in the course of the economic activity.",
          "This can be useful for small local activities, but it may be unsuitable where the business needs input VAT recovery or valid VAT numbers for intra-Community trade.",
        ],
        bodyZh: [
          "如果预计年度本地营业额不超过本地门槛，MTCA 的 FAQ 说明，可选择按 Article 11 注册为 exempt small enterprise。",
          "在这种注册下，FAQ 说明纳税人不就其供应收取 VAT，也不能抵扣经营活动中采购产生的 VAT。",
          "这对小规模本地业务可能合适，但如果企业需要抵扣进项 VAT，或需要用于欧盟内部贸易的有效 VAT 号码，则未必适合。",
        ],
      },
      {
        heading: "Article 12 and EU trade exposure",
        headingZh: "Article 12 与欧盟贸易风险",
        body: [
          "Article 12 may become relevant where a person is not registered under Article 10 but has intra-community acquisitions of goods or receives services for which Maltese VAT is due under place-of-supply rules.",
          "MTCA's FAQ states that for certain services there is no threshold, so even a one-off imported service can create an Article 12 registration issue if the conditions are met.",
          "Companies receiving software, professional, marketing, or digital services from outside Malta should review this point before assuming that no VAT work is required.",
        ],
        bodyZh: [
          "如果企业未按 Article 10 注册，但存在欧盟内部货物采购，或接收按供应地点规则应由其承担马耳他 VAT 的服务，则 Article 12 可能适用。",
          "MTCA 的 FAQ 说明，对于某些服务并无门槛，因此即使是一次性进口服务，在条件满足时也可能触发 Article 12 注册问题。",
          "从马耳他境外采购软件、专业服务、市场营销服务或数字服务的企业，不应简单假设没有 VAT 工作。",
        ],
      },
      {
        heading: "Rates, returns and records",
        headingZh: "税率、申报与记录保存",
        body: [
          "MTCA's VAT rates page states that supplies of goods and services taking place in Malta are by default taxable at the standard VAT rate of 18%, unless a reduced rate or exemption specifically applies.",
          "MTCA also lists reduced rates of 12%, 7%, 5% or 0% for specifically defined goods and services. Rate analysis should be checked product by product or service by service.",
          "MTCA's VAT records page states that VAT records are generally retained for at least six years from the end of the relevant year, with specific longer or adjusted periods in some cases.",
        ],
        bodyZh: [
          "MTCA 的 VAT rates 页面说明，在马耳他发生的货物和服务供应，默认适用 18% 标准 VAT 税率，除非明确适用降低税率或豁免。",
          "MTCA 同时列出 12%、7%、5% 或 0% 的降低税率，适用于特定定义的货物和服务。税率判断应按具体产品或服务逐项确认。",
          "MTCA 的 VAT records 页面说明，VAT 记录通常至少保存至相关年度结束后六年；部分情形可能适用更长或调整后的保存期间。",
        ],
      },
      {
        heading: "Professional insight",
        headingZh: "专业实务建议",
        body: [
          "For foreign-owned Malta companies, VAT review should happen before the first invoice, not after the first VAT question arrives from a client or supplier.",
          "The practical control is to maintain a VAT decision file: expected transactions, registration type, rate position, invoice format, return cycle, and record retention basis.",
        ],
        bodyZh: [
          "对于外资马耳他公司，VAT 复核应在开出第一张发票前完成，而不是等客户或供应商提出 VAT 问题后再处理。",
          "实务控制上，建议建立 VAT decision file：记录预计交易、注册类型、税率判断、发票格式、申报周期和记录保存依据。",
        ],
      },
    ],
    faqs: [
      {
        q: "Is every Malta company required to register for VAT?",
        qZh: "每一家马耳他公司都必须注册 VAT 吗？",
        a: "No. VAT registration depends on the activity, supplies, exemptions, turnover position, and EU or cross-border transactions. The position should be checked against the VAT Act and MTCA guidance.",
        aZh: "不是。VAT 注册取决于业务活动、供应类型、豁免情况、营业额以及欧盟或跨境交易安排，应结合 VAT Act 和 MTCA 指引判断。",
      },
      {
        q: "What is the practical difference between Article 10 and Article 11?",
        qZh: "Article 10 和 Article 11 的实务区别是什么？",
        a: "Article 10 generally involves charging VAT on taxable supplies and may allow input VAT recovery. Article 11 small enterprise registration does not involve charging VAT on supplies and does not allow input VAT recovery.",
        aZh: "Article 10 通常涉及对应税供应收取 VAT，并可能允许进项 VAT 抵扣；Article 11 小企业注册通常不收取 VAT，也不能抵扣进项 VAT。",
      },
      {
        q: "Can imported services create a VAT issue?",
        qZh: "从境外购买服务会产生 VAT 问题吗？",
        a: "Yes. MTCA's FAQ notes that Article 12 can apply to services received by a Malta-established taxable person where Maltese VAT is due under place-of-supply rules, and that no threshold applies to such services.",
        aZh: "会。MTCA 的 FAQ 说明，如果马耳他设立的 taxable person 接收按供应地点规则应在马耳他缴纳 VAT 的服务，Article 12 可能适用，且此类服务没有门槛。",
      },
      {
        q: "How long should VAT records be kept?",
        qZh: "VAT 记录应保存多久？",
        a: "MTCA's VAT records page states that records are generally retained for at least six years from the end of the year to which they relate, with special rules for some cases.",
        aZh: "MTCA 的 VAT records 页面说明，记录通常至少保存至相关年度结束后六年；部分情形适用特殊规则。",
      },
    ],
    references: [
      {
        label: "MTCA VAT Registration",
        href: "https://mtca.gov.mt/business-tax/vat1/vat-compliance/vat-registration/vat-registration",
        type: "Primary source",
      },
      {
        label: "MTCA Registrations & De-Registrations FAQ",
        href: "https://mtca.gov.mt/docs/default-source/documents/business-tax/vat/faqs/registrations-de-registrations-faqs.pdf?sfvrsn=7f879b9a_4",
        type: "Primary source",
      },
      {
        label: "MTCA VAT Rates",
        href: "https://mtca.gov.mt/business-tax/vat1/vat-compliance/vat-rates/vat-rates",
        type: "Primary source",
      },
      {
        label: "MTCA VAT Records",
        href: "https://mtca.gov.mt/business-tax/vat1/vat-compliance/vat-records/vat-records",
        type: "Primary source",
      },
      { label: "Value Added Tax Act, Chapter 406", href: "https://legislation.mt/eli/cap/406/eng", type: "Primary source" },
    ],
  },
  {
    slug: "malta-accounting-audit-compliance-guide",
    category: "accounting-audit",
    title: "Malta Accounting and Audit Compliance Guide: Records, Financial Statements and Practical Controls",
    titleZh: "马耳他会计与审计合规指南：会计记录、财务报表与实务控制",
    seoTitle: "Malta Accounting and Audit Compliance Guide: Records, Financial Statements and Audit Readiness",
    seoTitleZh: "马耳他会计与审计合规指南：会计记录、财务报表与审计准备",
    metaDescription:
      "A practical guide to Malta company accounting and audit compliance, including bookkeeping records, financial statements, audit readiness, official references and common risks.",
    metaDescriptionZh:
      "从实务角度解释马耳他公司的会计与审计合规，包括簿记记录、财务报表、审计准备、官方依据和常见风险。",
    keywords: [
      "Malta accounting requirements",
      "Malta audit requirements",
      "Malta financial statements",
      "Malta bookkeeping",
      "Companies Act Malta",
    ],
    keywordsZh: ["马耳他会计要求", "马耳他审计要求", "马耳他财务报表", "马耳他簿记", "马耳他 Companies Act"],
    summary:
      "Malta accounting compliance is not only bookkeeping. A company should maintain reliable accounting records, prepare financial statements, assess audit requirements, and coordinate filing work with tax and registry obligations.",
    summaryZh:
      "马耳他会计合规不只是日常记账。公司应维护可靠会计记录、编制财务报表、评估审计要求，并把税务和公司登记义务一起纳入合规日历。",
    updated: "2026-06-25",
    readTime: "7 min read",
    status: "published",
    sections: [
      {
        heading: "Direct answer",
        headingZh: "直接答案",
        body: [
          "A Malta company should keep accounting records that support its financial position and transactions, prepare financial statements where required, and assess whether audit work is required under the applicable company law and professional framework.",
          "Bookkeeping, financial statements, audit work, tax returns, VAT returns, and MBR filings are connected but separate compliance workflows. Managing them as one calendar reduces missed deadlines and inconsistent information.",
        ],
        bodyZh: [
          "马耳他公司应保存能够支持其财务状况和交易记录的会计资料，在适用情形下编制财务报表，并根据公司法和专业监管框架评估是否需要审计。",
          "簿记、财务报表、审计、所得税申报、VAT 申报和 MBR 文件提交相互关联，但属于不同合规流程。把它们放入同一个合规日历管理，可以降低遗漏截止日期和信息不一致的风险。",
        ],
      },
      {
        heading: "Legal requirement vs best practice",
        headingZh: "法律要求与实务建议",
        body: [
          "Legal requirement: accounting and audit obligations should be checked against the Companies Act, the Accountancy Profession Act, MBR requirements, and the company's own facts.",
          "Best practice: maintain monthly bookkeeping, reconcile bank and payment accounts, keep invoice and payroll support, and prepare an audit-ready file before year-end work begins.",
        ],
        bodyZh: [
          "法律要求：会计与审计义务应结合《Companies Act》、《Accountancy Profession Act》、MBR 要求以及公司自身事实判断。",
          "实务建议：保持月度记账，核对银行和支付账户，保存发票与薪资支持文件，并在年末工作开始前准备审计资料包。",
        ],
      },
      {
        heading: "Bookkeeping records",
        headingZh: "簿记与会计记录",
        body: [
          "Bookkeeping is the evidence base for later compliance work. It should capture sales, purchases, bank movements, payroll, shareholder or director balances, loans, assets, and VAT-relevant transactions.",
          "For cross-border companies, the accounting file should also preserve contracts, invoices, proof of service delivery, payment trail, and the business reason for material transactions.",
        ],
        bodyZh: [
          "簿记是后续合规工作的证据基础，应覆盖销售、采购、银行流水、薪资、股东或董事往来、贷款、资产以及与 VAT 相关的交易。",
          "对于跨境公司，会计档案还应保存合同、发票、服务交付证明、付款路径以及重大交易的商业理由。",
        ],
      },
      {
        heading: "Financial statements and audit readiness",
        headingZh: "财务报表与审计准备",
        body: [
          "Financial statements are not the same as the Annual Return. Financial statements summarise accounting performance and position, while the Annual Return is a company registry filing.",
          "Audit readiness means more than sending a ledger at year end. The company should be able to support balances, explain unusual movements, and provide third-party documents where requested.",
        ],
        bodyZh: [
          "财务报表不等同于 Annual Return。财务报表反映公司的会计业绩和财务状况；Annual Return 则是公司登记层面的申报文件。",
          "审计准备并不只是年末发送一份总账。公司应能够支持各项余额，解释异常变动，并在需要时提供第三方文件。",
        ],
      },
      {
        heading: "Common mistakes",
        headingZh: "常见错误",
        body: [
          "A common mistake is treating bookkeeping as an internal admin task with no legal or tax impact. In practice, weak accounting records can affect tax filings, VAT reporting, audit timing, and investor or bank due diligence.",
          "Another mistake is waiting until the statutory filing season before asking for missing bank statements, invoices, or payroll documents. Late evidence collection usually increases cost and risk.",
        ],
        bodyZh: [
          "常见错误之一，是把簿记当成没有法律或税务影响的内部行政工作。实际上，薄弱的会计记录会影响税务申报、VAT 报告、审计进度以及投资人或银行尽调。",
          "另一个错误，是等到法定申报季才开始追补银行对账单、发票或薪资文件。资料收集越晚，通常成本和风险越高。",
        ],
      },
      {
        heading: "Professional insight",
        headingZh: "专业实务建议",
        body: [
          "For foreign-owned Malta companies, the practical control is to close the books every month and review tax, VAT, payroll, and company registry points together.",
          "If the business operates through Malta and Hong Kong, China, or other jurisdictions, keep intercompany agreements and transfer-pricing style support aligned with the accounting records.",
        ],
        bodyZh: [
          "对于外资马耳他公司，实务控制重点是每月关账，并把税务、VAT、薪资和公司登记事项一起复核。",
          "如果业务同时涉及马耳他、香港、中国内地或其他司法辖区，应让关联交易协议和类似转让定价支持文件与会计记录保持一致。",
        ],
      },
    ],
    faqs: [
      {
        q: "Is bookkeeping enough for Malta company compliance?",
        qZh: "只做簿记就足够完成马耳他公司合规吗？",
        a: "No. Bookkeeping is the starting point. The company may also need financial statements, audit work, tax returns, VAT returns, payroll filings, and company registry filings depending on its facts.",
        aZh: "不够。簿记只是起点。根据公司实际情况，还可能需要财务报表、审计、所得税申报、VAT 申报、薪资申报和公司登记文件提交。",
      },
      {
        q: "Are financial statements the same as the Annual Return?",
        qZh: "财务报表和 Annual Return 是同一件事吗？",
        a: "No. Financial statements are accounting reports. The Annual Return is a company registry filing. They support different compliance purposes and should be managed separately.",
        aZh: "不是。财务报表是会计报告，Annual Return 是公司登记申报文件。两者服务于不同合规目的，应分开管理。",
      },
      {
        q: "When should audit preparation start?",
        qZh: "审计准备应什么时候开始？",
        a: "Audit preparation should begin during the year through clean bookkeeping, reconciliations, supporting documents, and timely review of unusual transactions.",
        aZh: "审计准备应在年度内开始，通过清晰簿记、账户核对、支持文件保存和异常交易及时复核来完成。",
      },
      {
        q: "What records should a cross-border company keep?",
        qZh: "跨境公司应保存哪些资料？",
        a: "In addition to normal accounting records, keep contracts, invoices, payment evidence, service delivery records, intercompany support, and correspondence explaining material business decisions.",
        aZh: "除普通会计记录外，还应保存合同、发票、付款证据、服务交付记录、关联交易支持文件，以及能解释重大商业决策的往来记录。",
      },
    ],
    references: [
      { label: "Companies Act, Chapter 386", href: "https://legislation.mt/eli/cap/386/eng", type: "Primary source" },
      { label: "Accountancy Profession Act, Chapter 281", href: "https://legislation.mt/eli/cap/281/eng", type: "Primary source" },
      { label: "Malta Business Registry", href: "https://mbr.mt/", type: "Primary source" },
      { label: "MBR BAROS online registry system", href: "https://mbr.mt/baros/", type: "Primary source" },
    ],
  },
  {
    slug: "malta-payroll-employment-compliance-guide",
    category: "payroll-employment",
    title: "Malta Payroll and Employment Compliance Guide: Employer Setup, Records and Risk Controls",
    titleZh: "马耳他薪资与雇佣合规指南：雇主设置、员工记录与风险控制",
    seoTitle: "Malta Payroll and Employment Compliance Guide: Employer Duties, Records, FSS and Jobsplus",
    seoTitleZh: "马耳他薪资与雇佣合规指南：雇主义务、员工记录、FSS 与 Jobsplus",
    metaDescription:
      "A practical Malta payroll and employment compliance guide covering employer setup, employee onboarding, payroll records, tax withholding, Jobsplus filings, leave and termination controls.",
    metaDescriptionZh:
      "实务角度解释马耳他薪资与雇佣合规，包括雇主设置、员工入职、薪资记录、税款扣缴、Jobsplus 文件、假期和离职控制。",
    keywords: [
      "Malta payroll compliance",
      "Malta employment law",
      "Malta employer obligations",
      "Jobsplus Malta",
      "Malta FSS payroll",
    ],
    keywordsZh: ["马耳他薪资合规", "马耳他劳动法", "马耳他雇主义务", "Jobsplus Malta", "马耳他 FSS 薪资"],
    summary:
      "Payroll compliance in Malta connects employment law, tax withholding, social security administration, employee records, and onboarding or termination filings. It should be managed before the first employee starts work.",
    summaryZh:
      "马耳他薪资合规连接劳动法、税款扣缴、社保管理、员工记录以及入职/离职文件。企业应在第一名员工开始工作前建立薪资合规流程。",
    updated: "2026-06-25",
    readTime: "7 min read",
    status: "published",
    sections: [
      {
        heading: "Direct answer",
        headingZh: "直接答案",
        body: [
          "A Malta employer should set up a payroll process before hiring or engaging employees. The process should cover employment terms, employee registration or notification workflows, payroll calculation, tax withholding, social security handling, payslips, leave records, and termination controls.",
          "Payroll is not only a payment task. It is a recurring compliance workflow involving employment law, tax administration, social security records, and evidence that employment conditions were handled correctly.",
        ],
        bodyZh: [
          "马耳他雇主在招聘或雇佣员工前，应先建立薪资流程。流程应覆盖雇佣条款、员工登记或通知、薪资计算、税款扣缴、社保处理、工资单、假期记录和离职控制。",
          "薪资不只是付款任务，而是一项持续合规流程，涉及劳动法、税务管理、社保记录，以及证明雇佣条件被正确处理的证据。",
        ],
      },
      {
        heading: "Legal requirement vs best practice",
        headingZh: "法律要求与实务建议",
        body: [
          "Legal requirement: employment conditions should be checked against the Employment and Industrial Relations Act, applicable wage or leave rules, CFR employer tax requirements, Jobsplus workflows, and the employee's actual contract facts.",
          "Best practice: create a payroll checklist covering onboarding, monthly payroll, leave and absence records, year-end tax forms, and termination documentation.",
        ],
        bodyZh: [
          "法律要求：雇佣条件应结合《Employment and Industrial Relations Act》、适用工资或假期规则、CFR 雇主税务要求、Jobsplus 流程以及员工真实合同事实判断。",
          "实务建议：建立薪资检查清单，覆盖入职、月度薪资、假期和缺勤记录、年终税务表格以及离职文件。",
        ],
      },
      {
        heading: "Employer setup and onboarding",
        headingZh: "雇主设置与员工入职",
        body: [
          "Before an employee starts work, the employer should confirm the employment relationship, job role, agreed pay, hours, leave position, probation or notice terms, and any registration or notification steps required for employment administration.",
          "For foreign-owned companies, onboarding should also confirm whether the individual has the right to work in Malta and whether immigration, residence, or work-permit support is needed before payroll begins.",
        ],
        bodyZh: [
          "员工开始工作前，雇主应确认雇佣关系、岗位、约定薪酬、工作时间、假期安排、试用期或通知期，以及雇佣管理所需的登记或通知步骤。",
          "对于外资公司，入职流程还应确认个人是否有权在马耳他工作，以及在薪资开始前是否需要移民、居留或工作许可支持。",
        ],
      },
      {
        heading: "Payroll tax, FSS and social security controls",
        headingZh: "薪资税、FSS 与社保控制",
        body: [
          "Payroll should be calculated from reliable employee data and current tax or contribution settings. Employers should not rely on informal net-pay agreements without supporting gross-pay, tax, and contribution records.",
          "CFR's employer framework and Final Settlement System materials should be used to confirm current tax withholding and reporting steps. Social security treatment should be reviewed together with the employment status and employee profile.",
        ],
        bodyZh: [
          "薪资应基于可靠员工资料和当前税务或缴费设置计算。雇主不应只依赖非正式的净工资约定，而缺少总工资、税款和缴费支持记录。",
          "CFR 的雇主框架和 Final Settlement System 资料应用于确认当前扣缴和报告步骤。社保处理应结合雇佣状态和员工情况一起复核。",
        ],
      },
      {
        heading: "Leave, absence and employee records",
        headingZh: "假期、缺勤与员工记录",
        body: [
          "Employee records should support wages paid, hours or work pattern, leave taken, sick leave or absence, reimbursements, benefits, and any changes to employment terms.",
          "Weak records usually become a problem during termination, employee disputes, tax reviews, due diligence, or when a company tries to reconcile payroll costs with accounting records.",
        ],
        bodyZh: [
          "员工记录应能够支持已支付工资、工时或工作模式、已休假期、病假或缺勤、报销、福利以及雇佣条款变更。",
          "记录薄弱通常会在离职、员工争议、税务复核、尽职调查，或公司需要把薪资成本与会计记录核对时变成问题。",
        ],
      },
      {
        heading: "Termination and change controls",
        headingZh: "离职与变更控制",
        body: [
          "Termination should be handled as a documented process, not only as the final salary payment. Notice, unused leave, final payroll, benefits, equipment return, and required filings should be reviewed before closing the employee record.",
          "Changes to pay, hours, role, workplace, or employment status should also be documented. Payroll and accounting records should reflect the same effective dates and amounts.",
        ],
        bodyZh: [
          "离职应作为有文件支持的流程处理，而不只是支付最后一笔工资。关闭员工记录前，应复核通知期、未休假期、最终薪资、福利、设备归还和必要文件提交。",
          "薪酬、工时、岗位、工作地点或雇佣状态变化也应留档。薪资记录和会计记录应反映相同的生效日期和金额。",
        ],
      },
      {
        heading: "Professional insight",
        headingZh: "专业实务建议",
        body: [
          "For small Malta employers, the practical control is to run payroll from a single monthly evidence pack: approved timesheets or fixed salary data, leave movements, benefit changes, reimbursement support, and updated employee details.",
          "For China or Hong Kong owned groups, avoid mixing contractor, director, and employee payments without a documented classification review. The payroll, tax, and accounting treatment may differ.",
        ],
        bodyZh: [
          "对于小型马耳他雇主，实务控制重点是使用一个月度证据包运行薪资：已批准工时或固定工资资料、假期变动、福利变更、报销支持文件和最新员工信息。",
          "对于中国或香港背景集团，不应在没有分类复核文件的情况下混合处理承包商、董事和员工付款。薪资、税务和会计处理可能不同。",
        ],
      },
    ],
    faqs: [
      {
        q: "When should a Malta employer set up payroll?",
        qZh: "马耳他雇主应什么时候设置薪资流程？",
        a: "Before the first employee starts work. Payroll setup should be ready before salary payments, employee notifications, tax withholding, and social security records become due.",
        aZh: "应在第一名员工开始工作前完成。薪资设置应早于工资支付、员工通知、税款扣缴和社保记录义务。",
      },
      {
        q: "Is payroll only a monthly payment process?",
        qZh: "薪资只是每月付款流程吗？",
        a: "No. Payroll also involves employment records, tax withholding, social security handling, payslips, leave records, year-end documents, and termination controls.",
        aZh: "不是。薪资还涉及雇佣记录、税款扣缴、社保处理、工资单、假期记录、年终文件和离职控制。",
      },
      {
        q: "Can foreign-owned companies use net-pay agreements only?",
        qZh: "外资公司可以只约定净工资吗？",
        a: "Avoid relying only on informal net-pay terms. The company should keep gross pay, tax, social security, benefit, and reimbursement records that can be reconciled to payroll and accounting.",
        aZh: "不建议只依赖非正式净工资约定。公司应保存总工资、税款、社保、福利和报销记录，并能与薪资和会计记录核对。",
      },
      {
        q: "What should be checked when an employee leaves?",
        qZh: "员工离职时应检查什么？",
        a: "Review notice, unused leave, final pay, benefits, tax or social security records, equipment return, and any Jobsplus or employer filing workflow before closing the employee file.",
        aZh: "关闭员工档案前，应复核通知期、未休假期、最终工资、福利、税务或社保记录、设备归还，以及 Jobsplus 或雇主文件流程。",
      },
    ],
    references: [
      { label: "Employment and Industrial Relations Act, Chapter 452", href: "https://legislation.mt/eli/cap/452/eng", type: "Primary source" },
      { label: "Commissioner for Revenue - Employers", href: "https://cfr.gov.mt/en/Employers/Pages/default.aspx", type: "Primary source" },
      { label: "Commissioner for Revenue - Final Settlement System", href: "https://cfr.gov.mt/en/Employers/Pages/Final-Settlement-System.aspx", type: "Primary source" },
      { label: "Jobsplus - Engagement and Termination Forms", href: "https://jobsplus.gov.mt/employers-mt-MT-en-GB/employing-persons/engagement-and-termination-forms", type: "Primary source" },
      { label: "Department of Industrial and Employment Relations", href: "https://dier.gov.mt/", type: "Primary source" },
    ],
  },
  {
    slug: "malta-tax-filing-calendar-guide",
    category: "taxation",
    title: "Malta Tax Filing Calendar Guide: VAT, Payroll, Corporate Tax and Annual Compliance",
    titleZh: "马耳他税务申报时间指南：VAT、薪资、公司税与年度合规",
    seoTitle: "Malta Tax Filing Calendar Guide: VAT, Payroll, Corporate Tax and Annual Compliance",
    seoTitleZh: "马耳他税务申报时间指南：VAT、薪资、公司税与年度合规",
    metaDescription:
      "A practical Malta tax filing calendar guide for companies covering VAT, payroll, corporate income tax, annual returns, audited accounts, source verification and compliance controls.",
    metaDescriptionZh:
      "面向马耳他公司的实务税务申报时间指南，涵盖 VAT、薪资、公司所得税、年报、审计财报、官方来源核验和合规控制。",
    keywords: [
      "Malta tax filing calendar",
      "Malta VAT return deadline",
      "Malta corporate tax return",
      "Malta payroll FSS",
      "Malta annual return",
      "Malta company compliance calendar",
    ],
    keywordsZh: [
      "马耳他税务申报时间",
      "马耳他 VAT 申报",
      "马耳他公司税申报",
      "马耳他薪资 FSS",
      "马耳他公司年报",
      "马耳他公司合规日历",
    ],
    summary:
      "Malta company compliance should be managed as a calendar of recurring obligations, not as isolated filings. VAT, payroll, income tax, audited accounts and the annual return each follow different rules and should be checked against current official portals before filing.",
    summaryZh:
      "马耳他公司合规应作为一套持续日历管理，而不是把每项申报孤立处理。VAT、薪资、公司所得税、审计财报和公司年报各有不同规则，提交前应结合官方门户和公司事实复核。",
    updated: "2026-06-25",
    readTime: "8 min read",
    status: "published",
    sections: [
      {
        heading: "Direct answer",
        headingZh: "直接答案",
        body: [
          "A Malta company should maintain a compliance calendar covering VAT returns, payroll and FSS obligations where it has employees or paid directors, corporate income tax work, audited financial statements where required, and the annual return filed with the Malta Business Registry.",
          "The practical deadline for each item should be confirmed from the company's own tax registration, accounting year end, VAT period, payroll facts, official MTCA systems and MBR records. Do not rely only on a generic online timetable.",
        ],
        bodyZh: [
          "马耳他公司应建立合规日历，覆盖 VAT 申报、有员工或董事薪酬时的薪资和 FSS 义务、公司所得税工作、适用时的审计财务报表，以及向 Malta Business Registry 提交的公司年报。",
          "每一项具体截止日期都应结合公司的税务登记、财年结束日、VAT 申报周期、薪资事实、MTCA 官方系统和 MBR 记录确认。不要只依赖网上通用时间表。",
        ],
      },
      {
        heading: "Legal requirement vs best practice",
        headingZh: "法律要求与实务建议",
        body: [
          "Legal requirement: each filing position should be checked against the relevant law, official tax authority material, registry records and current portal notices. VAT, income tax, payroll and company registry obligations are not interchangeable.",
          "Best practice: build a rolling calendar with internal preparation dates that are earlier than official filing dates. The calendar should assign an owner, required documents, review steps and evidence of submission.",
        ],
        bodyZh: [
          "法律要求：每项申报应结合相关法律、官方税务资料、公司登记记录和当前门户通知确认。VAT、所得税、薪资和公司登记义务不能互相替代。",
          "实务建议：建立滚动合规日历，并把内部准备日期设置得早于官方申报日期。日历应明确负责人、所需资料、复核步骤和提交证明。",
        ],
      },
      {
        heading: "VAT return calendar",
        headingZh: "VAT 申报日历",
        body: [
          "VAT is usually a recurring compliance item for companies that are VAT registered or should review whether VAT registration is required. The VAT return cycle depends on the company's registration position and the period assigned by the tax authority.",
          "For practical control, a company should reconcile sales invoices, purchase invoices, import or intra-EU documentation, reverse-charge positions and bank movements before the VAT return is submitted.",
        ],
        bodyZh: [
          "对于已注册 VAT 或需要评估是否应注册 VAT 的公司，VAT 通常是一项重复性合规事项。VAT 申报周期取决于公司的登记状态以及税务机关分配的申报期间。",
          "实务控制上，公司应在提交 VAT 申报前核对销售发票、采购发票、进口或欧盟内部交易文件、反向征税处理和银行流水。",
        ],
      },
      {
        heading: "Payroll, FSS and social security calendar",
        headingZh: "薪资、FSS 与社保日历",
        body: [
          "If a Malta company has employees, paid directors or employment-like arrangements, payroll should be treated as a recurring tax and employment compliance workflow rather than only a bank payment.",
          "The monthly payroll file should normally include gross pay, tax withholding, social security treatment, leave or benefit movements, payslips, employer submissions and evidence that accounting records match payroll records.",
        ],
        bodyZh: [
          "如果马耳他公司有员工、领取薪酬的董事或类似雇佣安排，薪资应被视为持续性的税务和雇佣合规流程，而不只是银行付款。",
          "月度薪资资料包通常应包括总工资、税款扣缴、社保处理、假期或福利变动、工资单、雇主申报以及会计记录与薪资记录一致的证据。",
        ],
      },
      {
        heading: "Corporate income tax and year-end accounts",
        headingZh: "公司所得税与年末账目",
        body: [
          "Corporate income tax work should start before year end. Bookkeeping, bank reconciliations, VAT reconciliations, payroll records, related-party balances and supporting documents should be prepared early enough for accounting, audit and tax review.",
          "Where audited financial statements are required, the tax timeline should be planned together with the audit timeline. Waiting until the filing period is almost closed increases the risk of missing documents, delayed audit completion and inconsistent tax positions.",
        ],
        bodyZh: [
          "公司所得税工作不应等到年末之后才开始。簿记、银行核对、VAT 核对、薪资记录、关联方余额和支持文件应提前整理，便于会计、审计和税务复核。",
          "如果公司需要审计财务报表，税务时间表应与审计时间表一起规划。等到申报期接近结束才开始，会增加资料缺失、审计延迟和税务立场不一致的风险。",
        ],
      },
      {
        heading: "Annual return and registry compliance",
        headingZh: "公司年报与登记合规",
        body: [
          "The Malta annual return is a company registry filing and should not be confused with the tax return or financial statements. It is linked to the company's registry record and annual company information.",
          "A practical calendar should separately track the MBR annual return, annual registry fee, changes in directors, shareholders, registered office, share capital and beneficial ownership records where relevant.",
        ],
        bodyZh: [
          "马耳他公司年报是公司登记层面的申报，不应与税表或财务报表混淆。它与公司的登记记录和年度公司信息相关。",
          "实务日历应单独跟踪 MBR 年报、年度注册费，以及董事、股东、注册地址、股本和适用时的实益拥有人记录变更。",
        ],
      },
      {
        heading: "Example compliance calendar",
        headingZh: "示例合规日历",
        body: [
          "Monthly: update bookkeeping, reconcile bank accounts, review payroll facts and collect tax invoices.",
          "Quarterly or periodic: prepare VAT working papers where VAT reporting applies, review intra-EU or import documents, and check whether provisional tax or other tax notices require action.",
          "Year end: prepare management accounts, audit file, tax computation support, related-party schedules, director or shareholder balance explanations and filing evidence.",
          "Annual registry cycle: review the company's MBR record, annual return position, registry fee and any corporate changes that should be filed separately.",
        ],
        bodyZh: [
          "每月：更新簿记、核对银行账户、复核薪资事实并收集税务发票。",
          "每季或按周期：在适用 VAT 申报时准备 VAT 工作底稿，复核欧盟内部交易或进口文件，并检查是否有预缴税或其他税务通知需要处理。",
          "年末：准备管理账、审计资料包、税务计算支持、关联方明细、董事或股东往来解释和申报证据。",
          "年度登记周期：复核公司的 MBR 记录、年报状态、注册费，以及是否有需要另行申报的公司变更。",
        ],
      },
      {
        heading: "Common mistakes",
        headingZh: "常见错误",
        body: [
          "One common mistake is assuming that VAT, tax returns, audited accounts and annual returns all have the same deadline. They do not.",
          "Another common mistake is treating nil activity as nil compliance. A company with little activity may still need accounting records, registry filings, tax review, VAT-status review or payroll confirmation.",
          "A third mistake is filing based on last year's timetable without checking whether the tax authority, registry, company year end or registration status has changed.",
        ],
        bodyZh: [
          "常见错误之一，是以为 VAT、税表、审计财报和公司年报都使用同一个截止日期。事实并非如此。",
          "另一个常见错误，是把零活动理解成零合规。低活动量公司仍可能需要会计记录、公司登记申报、税务复核、VAT 状态复核或薪资确认。",
          "第三个错误，是沿用去年的时间表申报，而没有检查税务机关、公司登记、财年结束日或登记状态是否发生变化。",
        ],
      },
      {
        heading: "Professional insight",
        headingZh: "专业实务建议",
        body: [
          "For China and Hong Kong owned Malta companies, the most useful tool is a bilingual compliance calendar that links Malta filings with group reporting, bank compliance, audit requests and shareholder information needs.",
          "The calendar should be evidence-based: every deadline should have a source, every filing should have a responsible person, and every submission should leave an acknowledgement or proof of filing.",
        ],
        bodyZh: [
          "对于中国和香港背景的马耳他公司，最有用的工具是一个双语合规日历，把马耳他申报与集团报表、银行合规、审计要求和股东信息需求连接起来。",
          "这份日历应以证据为基础：每个截止日期应有来源，每项申报应有负责人，每次提交应保留回执或申报证明。",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the Malta VAT return deadline the same for every company?",
        qZh: "所有马耳他公司的 VAT 申报截止日期都一样吗？",
        a: "No. The filing cycle depends on the company's VAT registration position and official tax authority records. Confirm the period and deadline through the MTCA portal or current official notice before filing.",
        aZh: "不一定。申报周期取决于公司的 VAT 登记状态和官方税务记录。提交前应通过 MTCA 门户或当前官方通知确认申报期间和截止日期。",
      },
      {
        q: "Is the Malta annual return the same as a tax return?",
        qZh: "马耳他公司年报和税表是一回事吗？",
        a: "No. The annual return is a company registry filing with the Malta Business Registry. A tax return is a tax authority filing. They should be tracked separately.",
        aZh: "不是。公司年报是向 Malta Business Registry 提交的公司登记申报；税表是向税务机关提交的税务申报。两者应分开跟踪。",
      },
      {
        q: "Can a company wait until year end to organise tax documents?",
        qZh: "公司可以等到年末才整理税务资料吗？",
        a: "That is not recommended. VAT, payroll, related-party transactions and bank records should be reviewed during the year so that audit and tax return work does not start with missing evidence.",
        aZh: "不建议。VAT、薪资、关联方交易和银行记录应在年度内持续复核，避免审计和税表工作开始时才发现证据缺失。",
      },
      {
        q: "What should be included in a Malta company compliance calendar?",
        qZh: "马耳他公司合规日历应包括什么？",
        a: "At minimum, include VAT, payroll/FSS where relevant, corporate income tax, accounting records, audited financial statements where required, annual return, registry changes, document owners and proof-of-filing records.",
        aZh: "至少应包括 VAT、适用时的薪资/FSS、公司所得税、会计记录、适用时的审计财报、公司年报、公司登记变更、资料负责人和申报证明。",
      },
    ],
    references: [
      { label: "Malta Tax and Customs Administration", href: "https://mtca.gov.mt/", type: "Primary source" },
      { label: "Income Tax Act, Chapter 123", href: "https://legislation.mt/eli/cap/123/eng", type: "Primary source" },
      { label: "Income Tax Management Act, Chapter 372", href: "https://legislation.mt/eli/cap/372/eng", type: "Primary source" },
      { label: "Value Added Tax Act, Chapter 406", href: "https://legislation.mt/eli/cap/406/eng", type: "Primary source" },
      { label: "Companies Act, Chapter 386", href: "https://legislation.mt/eli/cap/386/eng", type: "Primary source" },
      { label: "Malta Business Registry", href: "https://mbr.mt/", type: "Primary source" },
      {
        label: "Source intake: 一文看懂马耳他的税种与申报时间",
        href: "https://mp.weixin.qq.com/s/H19pahnVgNicL8fUKkZUig",
        type: "Source intake",
      },
    ],
  },
  {
    slug: "malta-corporate-tax-compliance-guide",
    category: "taxation",
    title: "Malta Corporate Tax Compliance Guide: Tax Returns, Records and Practical Controls",
    titleZh: "马耳他公司税务合规指南：税表、记录与实务控制",
    seoTitle: "Malta Corporate Tax Compliance Guide: Income Tax, Tax Returns, Records and Risk Controls",
    seoTitleZh: "马耳他公司税务合规指南：所得税、税表、记录与风险控制",
    metaDescription:
      "A practical Malta corporate tax compliance guide covering income tax records, company tax returns, accounting alignment, official references and common risk controls.",
    metaDescriptionZh:
      "实务角度解释马耳他公司税务合规，包括所得税记录、公司税表、会计协同、官方依据和常见风险控制。",
    keywords: [
      "Malta corporate tax",
      "Malta company tax return",
      "Malta income tax",
      "Income Tax Act Malta",
      "Malta tax compliance",
    ],
    keywordsZh: ["马耳他公司税", "马耳他公司税表", "马耳他所得税", "马耳他 Income Tax Act", "马耳他税务合规"],
    summary:
      "Corporate tax compliance in Malta should connect accounting records, tax analysis, supporting documents, statutory filing work and director-level controls. It should not be treated as a year-end form-filling exercise only.",
    summaryZh:
      "马耳他公司税务合规应连接会计记录、税务分析、支持文件、法定申报和董事层面的控制，不应只被视为年末填表工作。",
    updated: "2026-06-25",
    readTime: "7 min read",
    status: "published",
    sections: [
      {
        heading: "Direct answer",
        headingZh: "直接答案",
        body: [
          "A Malta company should maintain accounting and tax records that support its income, expenses, assets, liabilities, shareholder movements and cross-border transactions.",
          "The company tax return should be prepared from reliable accounts and reviewed against the Income Tax Act, the Income Tax Management Act, current MTCA guidance and the company's real transaction pattern.",
        ],
        bodyZh: [
          "马耳他公司应保存能够支持收入、费用、资产、负债、股东往来和跨境交易的会计与税务记录。",
          "公司税表应基于可靠账目编制，并结合《Income Tax Act》、《Income Tax Management Act》、MTCA 当前指引和公司的真实交易模式进行复核。",
        ],
      },
      {
        heading: "Legal requirement vs best practice",
        headingZh: "法律要求与实务建议",
        body: [
          "Legal requirement: tax positions should be checked against the Income Tax Act, the Income Tax Management Act, official tax authority guidance and any facts specific to the company.",
          "Best practice: keep a tax working file that reconciles accounting profit, tax adjustments, related-party balances, withholding-tax questions, foreign income and supporting documents.",
        ],
        bodyZh: [
          "法律要求：税务判断应结合《Income Tax Act》、《Income Tax Management Act》、官方税务机关指引以及公司自身事实。",
          "实务建议：建立 tax working file，用于核对会计利润、税务调整、关联方余额、预提税问题、境外收入和支持文件。",
        ],
      },
      {
        heading: "Accounting records and tax return preparation",
        headingZh: "会计记录与税表准备",
        body: [
          "Corporate tax work starts with accounting records. If bookkeeping is incomplete, the tax return is unlikely to be reliable.",
          "Before preparing the return, the company should reconcile bank accounts, sales, cost of sales, payroll, VAT, loans, director or shareholder balances and material accruals.",
        ],
        bodyZh: [
          "公司税工作从会计记录开始。如果簿记不完整，税表通常也难以可靠。",
          "准备税表前，公司应核对银行账户、销售、销售成本、薪资、VAT、贷款、董事或股东往来以及重大预提项目。",
        ],
      },
      {
        heading: "Cross-border and related-party issues",
        headingZh: "跨境与关联方问题",
        body: [
          "Foreign-owned Malta companies often have cross-border service fees, management charges, shareholder loans, intellectual property arrangements or group recharges.",
          "These items should be documented with contracts, invoices, payment evidence and business rationale. The accounting treatment and tax analysis should tell the same story.",
        ],
        bodyZh: [
          "外资马耳他公司经常涉及跨境服务费、管理费、股东贷款、知识产权安排或集团内部分摊。",
          "这些项目应通过合同、发票、付款证据和商业理由留档。会计处理和税务分析应保持一致。",
        ],
      },
      {
        heading: "Common mistakes",
        headingZh: "常见错误",
        body: [
          "A common mistake is starting tax analysis only after the financial year has closed. By then, missing contracts, unclear invoices or poorly classified payments may be harder to fix.",
          "Another mistake is assuming that a Malta company with little local activity has no tax compliance work. Low activity does not automatically remove accounting, tax, registry or VAT review obligations.",
        ],
        bodyZh: [
          "常见错误之一，是在财年结束后才开始税务分析。到那时，缺失合同、不清晰发票或分类错误的付款通常更难补救。",
          "另一个错误，是认为马耳他公司本地活动较少就没有税务合规工作。低活动量并不自动消除会计、税务、公司登记或 VAT 复核义务。",
        ],
      },
      {
        heading: "Practical control calendar",
        headingZh: "实务控制日历",
        body: [
          "A practical tax calendar should connect monthly bookkeeping, VAT review, payroll review, year-end accounts, audit work where applicable, tax computation and tax return submission.",
          "Directors should receive enough information to understand the tax position before filings are made, especially where the company has foreign owners, group transactions or financing flows.",
        ],
        bodyZh: [
          "实务税务日历应连接月度记账、VAT 复核、薪资复核、年末账目、适用时的审计、税务计算和税表提交。",
          "在提交申报前，董事应获得足够信息理解税务状况，尤其是公司存在外资股东、集团交易或融资流时。",
        ],
      },
      {
        heading: "Professional insight",
        headingZh: "专业实务建议",
        body: [
          "For China or Hong Kong owned Malta companies, tax compliance should be designed together with accounting, VAT, payroll and corporate registry work. Treating each filing in isolation increases inconsistency risk.",
          "The most useful control is a single year-end file containing accounts, tax computation, legal agreements, related-party support, VAT reconciliations and management explanations for unusual movements.",
        ],
        bodyZh: [
          "对于中国或香港背景的马耳他公司，税务合规应与会计、VAT、薪资和公司登记工作一起设计。把每项申报孤立处理，会增加信息不一致风险。",
          "最有用的控制，是建立一个统一年末资料包，包含账目、税务计算、法律协议、关联方支持、VAT 核对和异常变动的管理层解释。",
        ],
      },
    ],
    faqs: [
      {
        q: "Is bookkeeping enough to prepare a Malta company tax return?",
        qZh: "只做簿记就足够准备马耳他公司税表吗？",
        a: "No. Bookkeeping is the base. The tax return also requires tax analysis, reconciliations, supporting documents, and review of company-specific transactions.",
        aZh: "不够。簿记是基础。税表还需要税务分析、账户核对、支持文件，以及对公司具体交易的复核。",
      },
      {
        q: "Should tax review wait until year end?",
        qZh: "税务复核应等到年末才开始吗？",
        a: "No. Material transactions, related-party charges, financing, payroll and VAT issues should be reviewed during the year where possible.",
        aZh: "不应如此。重大交易、关联方收费、融资、薪资和 VAT 问题应尽量在年度内及时复核。",
      },
      {
        q: "Does a low-activity Malta company still need tax review?",
        qZh: "低活动量的马耳他公司仍需要税务复核吗？",
        a: "Yes. Low activity does not automatically remove accounting, tax, registry or VAT review obligations. The filing position should be checked against official requirements.",
        aZh: "需要。低活动量并不自动消除会计、税务、公司登记或 VAT 复核义务。申报状态应结合官方要求确认。",
      },
      {
        q: "What documents support cross-border tax positions?",
        qZh: "哪些文件可以支持跨境税务判断？",
        a: "Contracts, invoices, payment evidence, board or management explanations, service delivery evidence, group recharge schedules and accounting reconciliations are commonly relevant.",
        aZh: "合同、发票、付款证据、董事会或管理层说明、服务交付证明、集团分摊表和会计核对资料通常都相关。",
      },
    ],
    references: [
      { label: "Income Tax Act, Chapter 123", href: "https://legislation.mt/eli/cap/123/eng", type: "Primary source" },
      { label: "Income Tax Management Act, Chapter 372", href: "https://legislation.mt/eli/cap/372/eng", type: "Primary source" },
      { label: "Malta Tax and Customs Administration", href: "https://mtca.gov.mt/", type: "Primary source" },
      { label: "Companies Act, Chapter 386", href: "https://legislation.mt/eli/cap/386/eng", type: "Primary source" },
    ],
  },
  {
    slug: "eu-company-due-diligence-malta-guide",
    category: "international-structuring",
    title: "EU Company Due Diligence Guide from Malta: Registers, VAT, EUID and Risk Checks",
    titleZh: "马耳他视角的欧盟公司尽调指南：注册处、VAT、EUID 与风险核查",
    seoTitle: "EU Company Due Diligence from Malta: Business Registers, VAT, EUID and Counterparty Risk",
    seoTitleZh: "马耳他视角的欧盟公司尽调：商业登记、VAT、EUID 与交易对手风险",
    metaDescription:
      "A practical EU company due diligence guide for Malta businesses: how to check company identity, registry status, VAT, regulated activity, documents, substance and risk signals.",
    metaDescriptionZh:
      "面向马耳他企业和跨境交易团队的欧盟公司尽调指南：核查公司身份、登记状态、VAT、受监管业务、文件、实质和风险信号。",
    keywords: [
      "EU company due diligence",
      "Malta counterparty due diligence",
      "European business register",
      "EUID company check",
      "VIES VAT validation",
      "Malta Business Registry",
      "MFSA register",
    ],
    keywordsZh: [
      "欧盟公司尽调",
      "马耳他交易对手尽调",
      "欧洲商业登记",
      "EUID 公司核查",
      "VIES VAT 验证",
      "Malta Business Registry",
      "MFSA 注册查询",
    ],
    summary:
      "For EU counterparties, the first due diligence step is not a long report. It is an official-source identity check: company register, legal status, VAT position, regulated permissions where relevant, and whether the documents support the transaction size.",
    summaryZh:
      "核查欧盟交易对手时，第一步不一定是完整尽调报告，而是基于官方来源的身份核查：公司登记、法律状态、VAT 状态、涉及监管业务时的牌照信息，以及文件是否支撑交易规模。",
    updated: "2026-06-26",
    readTime: "8 min read",
    status: "published",
    sections: [
      {
        heading: "Direct answer",
        headingZh: "直接答案",
        body: [
          "A Malta business checking an EU counterparty should start with official registers: confirm the exact legal name, registration number, country, legal form, registered office and current status. Then test the VAT number, regulated permissions, ownership and filing evidence against the proposed transaction.",
          "The European e-Justice business-register search is a useful official entry point, but availability and document detail vary by Member State. It should be treated as an initial verification route, not as a substitute for legal, tax, AML or sector-specific due diligence.",
        ],
        bodyZh: [
          "马耳他企业核查欧盟交易对手时，应先使用官方登记来源确认对方的完整法律名称、注册号、注册国家、法律形式、注册地址和当前状态，再结合交易内容核查 VAT 号码、受监管许可、所有权和申报文件。",
          "European e-Justice 的商业登记查询是有用的官方入口，但不同成员国开放的数据和文件细节并不完全一致。它适合作为初步核验渠道，不能替代法律、税务、AML 或行业监管尽调。",
        ],
      },
      {
        heading: "Legal requirement vs best practice",
        headingZh: "法律要求与实务建议",
        body: [
          "Legal requirement: the mandatory due diligence standard depends on the transaction. AML, sanctions, tax, VAT, licensing, accounting and sector rules may apply differently to a simple supplier check, a regulated financial service, an iGaming relationship or an acquisition.",
          "Best practice: keep an evidence file for each material counterparty. It should include registry extracts or screenshots, VAT or EORI checks where relevant, contract details, invoices, payment evidence, beneficial ownership information where available, and a dated risk note explaining the conclusion.",
        ],
        bodyZh: [
          "法律要求：强制尽调标准取决于具体交易。AML、制裁、税务、VAT、牌照、会计和行业监管规则，可能会因普通供应商、金融服务、iGaming 关系或收购交易而不同。",
          "实务建议：对重要交易对手建立证据档案。档案应包括登记摘录或截图、相关情况下的 VAT 或 EORI 核查、合同信息、发票、付款证据、可取得的受益所有权信息，以及注明日期的风险判断说明。",
        ],
      },
      {
        heading: "Five official-source checks",
        headingZh: "五步官方来源核查",
        body: [
          "1. Confirm the legal identity. Use the relevant business register or the European e-Justice entry point to verify the company name, registration number, country, legal form, address and status.",
          "2. Check the EUID or register identifier where shown. The European Unique Identifier helps connect company information across EU business-register systems, but it should still be matched to the company name and registration jurisdiction.",
          "3. Validate VAT where the transaction involves EU supplies. Use the European Commission VIES service for VAT number validation and keep evidence of the date and result.",
          "4. Check regulated permissions. For Malta financial-services counterparties, review the MFSA Financial Services Register. For non-Malta entities, check the equivalent national regulator where the activity is regulated.",
          "5. Review documents and substance. Paid or official documents may include current extracts, constitutive documents, changes and officer information depending on the jurisdiction. Compare those documents with the contract value, payment route and claimed business activity.",
        ],
        bodyZh: [
          "1. 确认法律身份。使用相关国家商业登记处或 European e-Justice 入口，核查公司名称、注册号、注册国家、法律形式、地址和状态。",
          "2. 核查 EUID 或登记识别号。European Unique Identifier 可帮助跨欧盟商业登记系统识别公司，但仍需与公司名称和注册司法辖区相互匹配。",
          "3. 涉及欧盟供应时验证 VAT。使用 European Commission VIES 服务验证 VAT 号码，并保存查询日期和结果。",
          "4. 核查受监管许可。若交易对手为马耳他金融服务机构，应查看 MFSA Financial Services Register；若为其他国家实体，应查看该业务对应的本地监管机构。",
          "5. 审阅文件和实质。视司法辖区而定，官方或付费文件可能包括当前摘录、章程、变更记录和管理人员信息。应将这些文件与合同金额、付款路径和对方声称的业务活动相互比对。",
        ],
      },
      {
        heading: "Malta-specific checks",
        headingZh: "马耳他相关核查",
        body: [
          "For a Malta company, the Malta Business Registry is the primary company-register reference. The due diligence file should normally reconcile the company name, company number, registered office, officers, filings and any available registry documents with the contract and invoice details.",
          "If the activity involves financial services, investment services, insurance, trustees, company service providers or other regulated work, the MFSA register or the relevant regulator should be checked before relying on the counterparty's marketing material.",
          "If the relationship involves EU goods movement or customs activity, consider whether EORI validation is relevant. EORI is not a general proof of company solvency; it is a customs identification control.",
        ],
        bodyZh: [
          "对于马耳他公司，Malta Business Registry 是主要的公司登记核查来源。尽调档案通常应将公司名称、公司编号、注册地址、管理人员、申报文件和可取得的登记文件，与合同和发票信息相互核对。",
          "如果业务涉及金融服务、投资服务、保险、信托、公司服务提供商或其他受监管活动，应先查询 MFSA 或相应监管机构，而不是仅依赖对方宣传材料。",
          "若交易涉及欧盟货物流动或海关事项，可考虑是否需要 EORI 验证。EORI 并不是公司偿付能力证明，而是海关识别控制。",
        ],
      },
      {
        heading: "Common mistakes",
        headingZh: "常见错误",
        body: [
          "A common mistake is checking only that the company name exists. The more important question is whether the exact company is active, registered in the claimed country and legally capable of doing what the contract says.",
          "Another mistake is treating a registered address as proof of operating substance. Many EU companies use registered-office providers. Substance should be assessed through people, contracts, delivery evidence, invoices, accounts and business correspondence.",
          "A third mistake is ignoring scale. A counterparty claiming large turnover or complex regulated activity should be able to provide documents consistent with that claim. Thin accounts, unrelated activity or unclear payment routes are risk signals.",
        ],
        bodyZh: [
          "常见错误之一，是只确认公司名称存在。更重要的问题是：这是否正是合同中的公司、是否仍处于有效状态、是否注册在其声称的国家，以及是否有能力从事合同所述业务。",
          "第二个错误，是把注册地址当成实质经营证明。欧盟公司大量使用注册地址服务。实质应通过人员、合同、交付证据、发票、账目和商业往来判断。",
          "第三个错误，是忽略业务规模。若交易对手声称有大额营业额或复杂受监管业务，应能提供与该说法相匹配的文件。薄弱财报、业务不相关或付款路径不清晰，都是风险信号。",
        ],
      },
      {
        heading: "Professional insight",
        headingZh: "专业实务建议",
        body: [
          "For low-value routine suppliers, a dated registry and VAT check may be enough. For material contracts, regulated services, acquisitions, high-risk jurisdictions, unusual payment routes or related-party transactions, the file should move from a light check to a formal due diligence memo.",
          "The practical control is to separate proof of existence from proof of reliability. A company can be real but still unsuitable for the transaction because of licensing gaps, tax risk, sanctions exposure, weak accounts or lack of commercial substance.",
        ],
        bodyZh: [
          "对于低金额常规供应商，保存带日期的公司登记和 VAT 核查记录可能已经足够。对于重大合同、受监管服务、收购、高风险司法辖区、异常付款路径或关联交易，应从轻量核查升级为正式尽调备忘录。",
          "核心控制点是区分“公司真实存在”和“公司适合交易”。一家公司可以真实存在，但仍可能因为牌照缺口、税务风险、制裁风险、账目薄弱或缺乏商业实质而不适合交易。",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the European e-Justice business-register search enough for full due diligence?",
        qZh: "European e-Justice 商业登记查询是否足够完成完整尽调？",
        a: "No. It is a useful official starting point, but document availability varies by Member State and it does not replace tax, legal, AML, sanctions, licensing or financial review.",
        aZh: "不够。它是有用的官方起点，但不同成员国可取得的文件不同，不能替代税务、法律、AML、制裁、牌照或财务审阅。",
      },
      {
        q: "What is the first thing to check on an EU company?",
        qZh: "核查欧盟公司时第一步应看什么？",
        a: "Confirm the exact legal identity: company name, registration number, country, legal form, registered office and current status. Do not rely on a trading name alone.",
        aZh: "先确认完整法律身份：公司名称、注册号、注册国家、法律形式、注册地址和当前状态。不要只依赖商业名称或品牌名称。",
      },
      {
        q: "When should VAT be checked?",
        qZh: "什么时候需要核查 VAT？",
        a: "VAT should be checked when the transaction involves EU supplies, cross-border services, intra-EU goods movement or VAT-sensitive invoicing. VIES validation evidence should be dated and retained.",
        aZh: "当交易涉及欧盟供应、跨境服务、欧盟内货物流动或对 VAT 发票敏感时，应核查 VAT。VIES 验证证据应注明日期并留档。",
      },
      {
        q: "Does a registered office prove real operations?",
        qZh: "注册地址是否证明真实经营？",
        a: "No. A registered office is a legal contact point. Real operations should be assessed through staff, contracts, delivery evidence, accounts, invoices and correspondence.",
        aZh: "不能。注册地址是法律联系地址。真实经营应结合员工、合同、交付证据、账目、发票和商业往来判断。",
      },
      {
        q: "When should local professionals be engaged?",
        qZh: "什么时候应委托本地专业机构？",
        a: "Engage local professionals where the contract is material, regulated activity is involved, ownership is complex, public documents are unclear, or the due diligence result will be used for board, bank, audit or legal purposes.",
        aZh: "当合同金额重大、涉及受监管业务、所有权复杂、公开文件不清晰，或尽调结果将用于董事会、银行、审计或法律用途时，应委托本地专业机构。",
      },
    ],
    references: [
      {
        label: "European e-Justice Portal - Business registers search",
        href: "https://e-justice.europa.eu/topics/registers-business-insolvency-land/business-registers-search-company-eu_en",
        type: "Primary source",
      },
      { label: "Malta Business Registry", href: "https://mbr.mt/", type: "Primary source" },
      { label: "MFSA Financial Services Register", href: "https://www.mfsa.mt/financial-services-register/", type: "Primary source" },
      { label: "European Commission - VIES VAT validation", href: "https://ec.europa.eu/taxation_customs/vies/#/vat-validation", type: "Primary source" },
      {
        label: "European Commission - EORI number validation",
        href: "https://ec.europa.eu/taxation_customs/dds2/eos/eori_validation.jsp",
        type: "Primary source",
      },
      {
        label: "Source intake: 马耳他-欧盟公司尽调5步核查方法",
        href: "https://mp.weixin.qq.com/s/bbLH56od5O6a-rKnpBcsAg",
        type: "Source intake",
      },
    ],
  },
  {
    slug: "malta-political-economic-context-business-guide",
    category: "malta-market-context",
    title: "Malta Political and Economic Context Guide: Elections, Growth, Tax and Compliance Signals",
    titleZh: "马耳他政治经济环境指南：选举、增长、税务与合规信号",
    seoTitle: "Malta Political and Economic Context Guide: Election Results, GDP Growth, Tax and Compliance",
    seoTitleZh: "马耳他政治经济环境指南：选举结果、GDP 增长、税务与合规",
    metaDescription:
      "A practical Malta market-context guide for business and investors, covering election-result interpretation, economic forecasts, tax structure, compliance pressure, housing and operational risks.",
    metaDescriptionZh:
      "面向企业和投资者的马耳他市场环境指南，涵盖选举结果解读、经济预测、税务结构、合规压力、住房和运营风险。",
    keywords: [
      "Malta political context",
      "Malta economic forecast",
      "Malta business environment",
      "Malta Labour Party",
      "Malta company tax",
      "Malta investor compliance",
      "Malta market risk",
    ],
    keywordsZh: ["马耳他政治环境", "马耳他经济预测", "马耳他商业环境", "马耳他工党", "马耳他公司税", "马耳他投资合规", "马耳他市场风险"],
    summary:
      "Malta's political and economic context matters for company setup, tax planning, residence planning and investment structuring. The practical question is not which party headline looks favourable, but whether policy continuity, growth, labour supply, housing pressure, tax rules and compliance requirements support the intended business model.",
    summaryZh:
      "马耳他的政治和经济环境会影响公司设立、税务规划、身份规划和投资架构。实务问题不是哪一个政党标题更有利，而是政策连续性、经济增长、劳动力、住房压力、税务规则和合规要求是否支持拟定商业模式。",
    updated: "2026-06-26",
    readTime: "8 min read",
    status: "published",
    sections: [
      {
        heading: "Direct answer",
        headingZh: "直接答案",
        body: [
          "A Malta election result should be treated as one input in business planning, not as a standalone investment thesis. Official election results, European Commission forecasts, legislation and regulator guidance should be used before drawing conclusions about stability, tax, labour or compliance.",
          "The source article frames Labour's continued electoral strength as a signal of policy continuity and economic pressure. A defensible business reading is narrower: Malta remains a service-led, open EU economy, but companies should stress-test tax substance, banking evidence, labour cost, housing, infrastructure and regulatory scrutiny.",
        ],
        bodyZh: [
          "马耳他选举结果应作为商业规划的一个输入，而不是独立投资论点。判断稳定性、税务、劳动力或合规前，应使用官方选举结果、欧盟经济预测、法律和监管指引。",
          "原文把工党持续胜选解读为政策连续性和经济压力并存的信号。更稳健的商业解读应更窄：马耳他仍是以服务业为核心、开放的欧盟经济体，但企业应压力测试税务实质、银行证据、劳动力成本、住房、基础设施和监管审查。",
        ],
      },
      {
        heading: "Legal requirement vs best practice",
        headingZh: "法律要求与实务建议",
        body: [
          "Legal requirement: business decisions should be checked against current Maltese law, including company law, income tax, VAT, employment, beneficial ownership and sector-specific regulation where relevant.",
          "Best practice: keep political analysis separate from compliance analysis. Even where policy continuity appears likely, a Malta structure still needs proper governance, accounting, tax filing, VAT review, payroll control, banking evidence and real commercial purpose.",
        ],
        bodyZh: [
          "法律要求：商业决策应按当前马耳他法律复核，包括公司法、所得税、VAT、雇佣、受益所有权以及适用的行业监管规则。",
          "实务建议：政治分析应与合规分析分开。即使政策连续性看起来较强，马耳他架构仍需要公司治理、会计、税务申报、VAT 复核、薪酬控制、银行证据和真实商业目的。",
        ],
      },
      {
        heading: "How to read election and growth signals",
        headingZh: "如何解读选举和增长信号",
        body: [
          "The Malta Electoral Commission should be the source for vote totals, seats and official election-result data. Media summaries and campaign articles are useful context, but they should not be the final source for numerical claims.",
          "European Commission economic forecasts are a useful baseline for Malta's GDP growth, labour-market position, inflation and fiscal outlook. Strong forecast numbers can support confidence, but they do not remove sector-specific risk.",
          "A company should test whether its plan depends on skilled labour, office space, housing for staff, transport, energy costs, bank onboarding, local directors, licences or tax rulings. National growth does not automatically solve those operating constraints.",
        ],
        bodyZh: [
          "票数、议席和官方选举结果应以 Malta Electoral Commission 为来源。媒体总结和竞选文章可以提供背景，但不应作为数字结论的最终依据。",
          "European Commission 的经济预测可作为判断马耳他 GDP 增长、劳动力市场、通胀和财政前景的基础资料。较强预测可以增强信心，但不能消除行业层面的风险。",
          "公司应测试自身计划是否依赖技术劳动力、办公室、员工住房、交通、能源成本、银行开户、本地董事、牌照或税务确认。全国层面的增长并不会自动解决这些运营约束。",
        ],
      },
      {
        heading: "Tax, residence and compliance pressure",
        headingZh: "税务、身份与合规压力",
        body: [
          "Malta company tax planning should not be marketed as a simple headline rate. The legal starting point, shareholder position, refund mechanics, residence, management and control, substance, anti-abuse rules, withholding, VAT and reporting obligations all matter.",
          "Investor migration should not be the core business thesis for Malta. The Court of Justice of the European Union ruled in 2025 that Malta's investor citizenship scheme was contrary to EU law, which shows why residence and citizenship claims need current legal review.",
          "As Malta remains connected to EU financial, tax, AML and beneficial-ownership frameworks, low-substance structures face increasing practical friction. Banks, auditors, tax authorities and regulators will look for coherent documents, real activity and source-of-funds evidence.",
        ],
        bodyZh: [
          "马耳他公司税务规划不应被宣传成单一标题税率。法律起点、股东身份、退税机制、居民身份、管理与控制、实质、反滥用规则、预扣、VAT 和申报义务都很重要。",
          "投资移民不应成为马耳他商业判断的核心叙事。欧洲联盟法院在 2025 年裁定马耳他投资入籍机制违反欧盟法，这说明身份和入籍相关说法必须做当前法律复核。",
          "马耳他处在欧盟金融、税务、反洗钱和受益所有权透明框架内，低实质架构会遇到越来越多实务阻力。银行、审计师、税务机关和监管机构会要求文件逻辑一致、真实活动和资金来源证据。",
        ],
      },
      {
        heading: "Professional insight",
        headingZh: "专业实务建议",
        body: [
          "Before setting up a Malta company or moving a structure to Malta, prepare a market-context memo with five sections: policy continuity, economic assumptions, tax and VAT position, operating constraints, and compliance evidence.",
          "If the memo only says Malta is stable, pro-business or tax-efficient, it is not enough. It should identify what must be true for the structure to work and which official sources or documents prove those assumptions.",
        ],
        bodyZh: [
          "在设立马耳他公司或把架构迁移至马耳他前，建议准备一份市场环境备忘录，至少包括五部分：政策连续性、经济假设、税务和 VAT 位置、运营约束、合规证据。",
          "如果备忘录只写马耳他稳定、亲商业或税务高效，是不够的。它应列明架构成立需要哪些前提为真，以及哪些官方来源或文件能够证明这些前提。",
        ],
      },
    ],
    faqs: [
      {
        q: "Should investors rely on media summaries of Malta election results?",
        qZh: "投资者是否应依赖媒体对马耳他选举结果的总结？",
        a: "No. Media summaries can provide context, but vote totals, seats and official results should be checked against the Malta Electoral Commission.",
        aZh: "不应只依赖媒体总结。媒体可以提供背景，但票数、议席和官方结果应以 Malta Electoral Commission 为准。",
      },
      {
        q: "Does political continuity mean a Malta structure is automatically safe?",
        qZh: "政策连续性是否意味着马耳他架构自动安全？",
        a: "No. Political continuity is only one factor. The structure still needs legal, tax, VAT, substance, banking, accounting and reporting review.",
        aZh: "不是。政策连续性只是一个因素。架构仍需法律、税务、VAT、实质、银行、会计和申报复核。",
      },
      {
        q: "Is Malta company tax simply a 5% tax system?",
        qZh: "马耳他公司税是否可以简单理解为 5%？",
        a: "No. Malta tax analysis starts from the law and facts. Shareholder refunds, residence, substance, anti-abuse rules, VAT and reporting obligations must be analysed together.",
        aZh: "不能。马耳他税务分析应从法律和事实出发。股东退税、居民身份、实质、反滥用规则、VAT 和申报义务必须一起分析。",
      },
      {
        q: "Does Malta still offer investor citizenship?",
        qZh: "马耳他是否仍可按旧方式办理投资入籍？",
        a: "Investor citizenship claims require current legal review. The Court of Justice of the European Union ruled in 2025 that Malta's investor citizenship scheme was contrary to EU law.",
        aZh: "投资入籍相关说法必须按当前法律复核。欧洲联盟法院在 2025 年裁定马耳他投资入籍机制违反欧盟法。",
      },
      {
        q: "What should a business check before entering Malta?",
        qZh: "企业进入马耳他前应先检查什么？",
        a: "Check company role, tax and VAT position, staffing, housing and office constraints, banking, licences, payroll, accounting owner, beneficial ownership evidence and source-of-funds documentation.",
        aZh: "应检查公司角色、税务和 VAT、人员、住房和办公约束、银行、牌照、薪酬、会计负责人、受益所有权证据和资金来源文件。",
      },
    ],
    references: [
      { label: "Malta Electoral Commission - General Election Results", href: "https://electoral.gov.mt/ElectionResults/General", type: "Primary source" },
      { label: "European Commission - Economic forecast for Malta", href: "https://economy-finance.ec.europa.eu/economic-surveillance-eu-economies/malta/economic-forecast-malta_en", type: "Primary source" },
      { label: "Court of Justice of the European Union - Press release on Malta investor citizenship scheme", href: "https://curia.europa.eu/jcms/upload/docs/application/pdf/2025-04/cp250052en.pdf", type: "Primary source" },
      { label: "Companies Act, Chapter 386", href: "https://legislation.mt/eli/cap/386/eng", type: "Primary source" },
      { label: "Income Tax Act, Chapter 123", href: "https://legislation.mt/eli/cap/123/eng", type: "Primary source" },
      { label: "Value Added Tax Act, Chapter 406", href: "https://legislation.mt/eli/cap/406/eng", type: "Primary source" },
      {
        label: "Source intake: 马耳他工党四连胜：胜在经济，压力也从这里开始",
        href: "https://mp.weixin.qq.com/s/Cvo2B_CYIEBxIYXOOwccKA",
        type: "Source intake",
      },
    ],
  },
  {
    slug: "malta-film-cash-rebate-production-incentive-guide",
    category: "industry-insights",
    title: "Malta Film Cash Rebate Guide: Production Incentives, Eligible Costs, Tax and Audit Controls",
    titleZh: "马耳他影视现金返还指南：制作激励、合格成本、税务与审计控制",
    seoTitle: "Malta Film Cash Rebate Guide: 40% Incentive, Eligible Expenditure and Production Controls",
    seoTitleZh: "马耳他影视现金返还指南：40% 激励、合格支出与制作合规控制",
    metaDescription:
      "A practical Malta film cash rebate guide covering Screen Malta incentives, eligible expenditure, production service companies, permits, audit evidence, VAT, tax and cash-flow controls.",
    metaDescriptionZh:
      "马耳他影视现金返还实务指南，涵盖 Screen Malta 激励、合格支出、制作服务公司、许可、审计证据、VAT、税务与现金流控制。",
    keywords: [
      "Malta film cash rebate",
      "Screen Malta cash rebate",
      "Malta film production incentive",
      "Malta production service company",
      "Malta film tax",
      "Malta VAT film production",
      "Malta audiovisual production",
    ],
    keywordsZh: [
      "马耳他电影现金返还",
      "Screen Malta 现金返还",
      "马耳他影视制作激励",
      "马耳他制作服务公司",
      "马耳他影视税务",
      "马耳他影视 VAT",
      "马耳他影视制作",
    ],
    summary:
      "Malta's film cash rebate can materially reduce production cost, but it is not automatic funding. Productions need to check eligibility, qualifying expenditure, local production structure, permits, audit evidence, tax and VAT treatment, payroll, supplier contracts and cash-flow timing before relying on the rebate in a budget.",
    summaryZh:
      "马耳他影视现金返还可以显著降低制作成本，但并不是自动到账的补贴。项目在预算中依赖返还前，应核查资格、合格支出、本地制作结构、许可、审计证据、税务和 VAT、薪酬、供应商合同以及现金流时间。",
    updated: "2026-06-26",
    readTime: "8 min read",
    status: "published",
    sections: [
      {
        heading: "Direct answer",
        headingZh: "直接答案",
        body: [
          "Screen Malta states that Malta offers a cash rebate for eligible productions, with the maximum rebate described as up to 40% of eligible Malta expenditure. The scheme is currently presented by Screen Malta as open until 31 December 2028.",
          "A production should not treat the percentage as guaranteed. The practical result depends on whether the project qualifies, which expenditure is eligible, whether the application and evidence are accepted, and whether the production passes the required financial and cultural checks.",
        ],
        bodyZh: [
          "Screen Malta 表示，马耳他为符合条件的影视制作提供现金返还，最高可达合格马耳他支出的 40%。Screen Malta 当前公开资料显示，该计划开放至 2028 年 12 月 31 日。",
          "制作方不应把百分比视为保证到账。实际结果取决于项目是否符合资格、哪些支出被认定为合格支出、申请和证据是否被接受，以及项目是否通过所需的财务和文化测试。",
        ],
      },
      {
        heading: "Legal requirement vs best practice",
        headingZh: "法律要求与实务建议",
        body: [
          "Legal requirement: producers should follow Screen Malta's current cash rebate rules, application process, eligibility conditions, permit requirements and any employment, tax, VAT and accounting obligations that apply to the production.",
          "Best practice: prepare a rebate-readiness file before the first material spend. It should connect the script, budget, shooting schedule, Malta suppliers, payroll, production service company, permits, invoices, payment evidence, audit trail and tax treatment.",
        ],
        bodyZh: [
          "法律要求：制作方应遵守 Screen Malta 当前现金返还规则、申请流程、资格条件、许可要求，以及适用于该制作项目的雇佣、税务、VAT 和会计义务。",
          "实务建议：在发生重大支出前建立返还准备档案，把剧本、预算、拍摄计划、马耳他供应商、薪酬、本地制作服务公司、许可、发票、付款证据、审计轨迹和税务处理连成闭环。",
        ],
      },
      {
        heading: "What the Malta cash rebate is",
        headingZh: "马耳他现金返还是什么",
        body: [
          "The rebate is a screen-production incentive administered through Screen Malta. It is designed to attract qualifying audiovisual productions to Malta and to support local economic activity connected with production.",
          "The incentive should be analysed as a receivable subject to conditions, not as immediate cash. Producers need enough working capital to pay costs, keep evidence and wait for assessment and payment timing.",
        ],
        bodyZh: [
          "该返还是由 Screen Malta 管理的影视制作激励，目的是吸引符合条件的影视项目到马耳他，并支持与制作相关的本地经济活动。",
          "该激励应被视为附条件的应收款，而不是即时现金。制作方需要有足够营运资金支付成本、保存证据，并等待评估和付款流程。",
        ],
      },
      {
        heading: "Eligible expenditure and budget control",
        headingZh: "合格支出与预算控制",
        body: [
          "The key budgeting question is not total production spend, but eligible expenditure accepted under the scheme. Location fees, accommodation, transport, equipment, crew, post-production and related costs should be mapped against the current Screen Malta guidance.",
          "The budget should distinguish Malta spend, non-Malta spend, above-the-line costs, below-the-line costs, related-party charges, supplier VAT, payroll, withholding, reimbursable costs and non-eligible costs.",
        ],
        bodyZh: [
          "预算核算的关键不是总制作成本，而是可被该计划接受的合格支出。场地、住宿、交通、设备、剧组、后期制作和相关费用都应按当前 Screen Malta 指引逐项映射。",
          "预算应区分马耳他支出、非马耳他支出、线上成本、线下成本、关联方收费、供应商 VAT、薪酬、预扣、可报销成本和非合格成本。",
        ],
      },
      {
        heading: "Production service company and local compliance",
        headingZh: "制作服务公司与本地合规",
        body: [
          "International producers commonly work with a Malta production service company or local production partner. The commercial contract should state who is responsible for rebate application support, permits, local suppliers, payroll, VAT records, invoices and audit evidence.",
          "If a Malta company is used, it should be assessed like any other operating company: beneficial ownership, directors, accounting records, bank account, contracts, payroll, VAT status and tax filings should match the production role.",
        ],
        bodyZh: [
          "国际制作方通常会与马耳他制作服务公司或本地制作伙伴合作。商业合同应明确谁负责返还申请支持、许可、本地供应商、薪酬、VAT 记录、发票和审计证据。",
          "如使用马耳他公司，应像审查其他运营公司一样审查：受益所有权、董事、会计记录、银行账户、合同、薪酬、VAT 状态和税务申报应与该公司的制作角色一致。",
        ],
      },
      {
        heading: "Permits, crew and employment points",
        headingZh: "许可、剧组与雇佣要点",
        body: [
          "Screen Malta's public FAQ notes that production companies should contact Screen Malta for shooting permits and that non-EU or non-EEA crew may require employment licences. These items should be planned before crew travel and supplier commitments.",
          "Payroll and contractor classification should be reviewed early. The tax and social-security outcome can differ depending on whether a person is an employee, freelancer, foreign crew member, performer, director or contractor through a company.",
        ],
        bodyZh: [
          "Screen Malta 公开 FAQ 提到，制作公司应联系 Screen Malta 处理拍摄许可，非 EU 或非 EEA 剧组成员可能需要就业许可。这些事项应在剧组出行和供应商承诺前规划。",
          "薪酬和承包商分类应提前复核。员工、自由职业者、外籍剧组、演员、导演或通过公司提供服务的承包商，在税务和社保处理上可能不同。",
        ],
      },
      {
        heading: "Audit, tax and VAT evidence",
        headingZh: "审计、税务与 VAT 证据",
        body: [
          "The rebate file should be built as an audit file from day one. Common evidence includes contracts, supplier onboarding, invoices, proof of payment, timesheets, payroll records, call sheets, location records, customs or transport documents and bank statements.",
          "VAT and income tax should be analysed separately from rebate eligibility. A cost may be commercially necessary but not eligible for the rebate, and a cost may be rebate-eligible while still requiring separate VAT, withholding, payroll or corporate-tax treatment.",
        ],
        bodyZh: [
          "返还资料应从第一天起按审计档案建立。常见证据包括合同、供应商准入资料、发票、付款证明、工时记录、薪酬记录、通告单、场地记录、海关或运输文件和银行流水。",
          "VAT 和所得税应与返还资格分开分析。某项成本可能商业上必要但不属于合格支出，也可能符合返还资格但仍需要单独处理 VAT、预扣、薪酬或企业税。",
        ],
      },
      {
        heading: "Cash-flow and financing risk",
        headingZh: "现金流与融资风险",
        body: [
          "The headline rebate percentage does not remove cash-flow risk. Producers should model when expenditure is paid, when evidence is final, when assessment is expected, whether bridge financing is needed and what happens if some costs are rejected.",
          "A conservative model should include a lower-rebate scenario, delayed-payment scenario, exchange-rate risk, budget overruns, supplier disputes, reshoots, insurance deductibles and audit adjustments.",
        ],
        bodyZh: [
          "表面返还比例不能消除现金流风险。制作方应测算支出何时支付、证据何时完整、评估何时完成、是否需要过桥融资，以及部分成本被拒绝时如何处理。",
          "保守模型应包括较低返还情景、延迟付款情景、汇率风险、预算超支、供应商争议、补拍、保险免赔额和审计调整。",
        ],
      },
      {
        heading: "Professional insight",
        headingZh: "专业实务建议",
        body: [
          "Before announcing Malta as the production base, prepare a one-page incentive control memo: project type, producer, Malta partner, eligible spend model, application timeline, permit timeline, payroll model, VAT treatment, audit owner and cash-flow bridge.",
          "If the production budget only works when every cost receives the maximum rebate and payment arrives on the earliest possible date, the plan is not yet bankable.",
        ],
        bodyZh: [
          "在宣布以马耳他作为制作基地前，建议先准备一页激励控制备忘录：项目类型、制作方、马耳他合作方、合格支出模型、申请时间表、许可时间表、薪酬模型、VAT 处理、审计负责人和现金流过桥安排。",
          "如果预算只有在所有成本都拿到最高返还且款项最早到账时才成立，说明项目融资和现金流方案还不够稳健。",
        ],
      },
    ],
    faqs: [
      {
        q: "Does Malta guarantee a 40% cash rebate for every film project?",
        qZh: "马耳他是否保证每个影视项目都能拿到 40% 现金返还？",
        a: "No. Screen Malta presents the maximum as up to 40% of eligible Malta expenditure. Eligibility, accepted expenditure, application evidence and assessment results determine the actual outcome.",
        aZh: "不是。Screen Malta 把最高比例表述为合格马耳他支出最高 40%。实际结果取决于资格、被接受的支出、申请证据和评估结果。",
      },
      {
        q: "Is total production budget the same as eligible expenditure?",
        qZh: "总制作预算是否等于合格支出？",
        a: "No. Eligible expenditure is narrower than total budget and must be checked against the current Screen Malta rules and evidence requirements.",
        aZh: "不是。合格支出通常小于总预算，必须按照当前 Screen Malta 规则和证据要求核查。",
      },
      {
        q: "Does a foreign production need a Malta production service company?",
        qZh: "外国制作方是否需要马耳他制作服务公司？",
        a: "Many productions use a local production service company or local partner. The contract should define responsibility for rebate support, permits, suppliers, payroll, VAT records and audit evidence.",
        aZh: "很多项目会使用本地制作服务公司或本地合作方。合同应明确返还支持、许可、供应商、薪酬、VAT 记录和审计证据的责任。",
      },
      {
        q: "Are non-EU or non-EEA crew permits relevant?",
        qZh: "非 EU 或非 EEA 剧组成员许可是否重要？",
        a: "Yes. Screen Malta's FAQ notes that non-EU or non-EEA crew may require employment licences. This should be checked before travel and contracting.",
        aZh: "重要。Screen Malta FAQ 提到，非 EU 或非 EEA 剧组成员可能需要就业许可。应在出行和签约前核查。",
      },
      {
        q: "Should tax and VAT be reviewed if the rebate is approved?",
        qZh: "如果返还获批，是否还需要复核税务和 VAT？",
        a: "Yes. Rebate eligibility does not automatically resolve VAT, income tax, payroll, withholding, social security or corporate filing obligations.",
        aZh: "需要。返还资格不会自动解决 VAT、所得税、薪酬、预扣、社保或公司申报义务。",
      },
    ],
    references: [
      { label: "Screen Malta - Cash Rebates", href: "https://screenmalta.com/cash-rebates/", type: "Primary source" },
      { label: "Screen Malta - Frequently Asked Questions", href: "https://screenmalta.com/faq/", type: "Primary source" },
      { label: "Screen Malta - Filming in Malta", href: "https://screenmalta.com/filming-in-malta/", type: "Primary source" },
      { label: "Screen Malta - Opportunities", href: "https://screenmalta.com/opportunities/", type: "Primary source" },
      { label: "Income Tax Act, Chapter 123", href: "https://legislation.mt/eli/cap/123/eng", type: "Primary source" },
      { label: "Value Added Tax Act, Chapter 406", href: "https://legislation.mt/eli/cap/406/eng", type: "Primary source" },
      {
        label: "Source intake: 好莱坞大片扎堆马耳他：40%现金返还商业逻辑",
        href: "https://mp.weixin.qq.com/s/1Nv996wLV5HJMEfUtu_nkA",
        type: "Source intake",
      },
    ],
  },
  {
    slug: "malta-igaming-licence-application-guide",
    category: "industry-insights",
    title: "Malta iGaming Licence Application Guide: B2C, B2B, MGA Compliance and Common Pitfalls",
    titleZh: "马耳他 iGaming 牌照申请指南：B2C、B2B、MGA 合规与常见误区",
    seoTitle: "Malta iGaming Licence Guide: MGA B2C/B2B Applications, Compliance, AML and Costs",
    seoTitleZh: "马耳他 iGaming 牌照指南：MGA B2C/B2B 申请、合规、AML 与成本风险",
    metaDescription:
      "A practical Malta iGaming licence guide covering MGA B2C and B2B authorisations, Licensee Portal applications, key functions, AML, audits, tax, fees and applicant risk controls.",
    metaDescriptionZh:
      "面向 iGaming 申请人的马耳他牌照实务指南，涵盖 MGA B2C 与 B2B 授权、Licensee Portal 申请、关键职能、AML、审计、税务、费用和申请风险控制。",
    keywords: [
      "Malta iGaming licence",
      "MGA B2C licence",
      "MGA B2B licence",
      "Malta Gaming Authority",
      "gaming authorisation Malta",
      "iGaming AML Malta",
      "MGA compliance audit",
    ],
    keywordsZh: [
      "马耳他 iGaming 牌照",
      "MGA B2C 牌照",
      "MGA B2B 牌照",
      "马耳他博彩管理局",
      "马耳他博彩授权",
      "马耳他 iGaming AML",
      "MGA 合规审计",
    ],
    summary:
      "A Malta iGaming licence is not a generic company-registration product. The first decision is whether the business needs a B2C licence, a B2B licence, a permit, a recognition notice, or no MGA licence at all. The answer affects compliance, systems, AML, tax, staffing and cost.",
    summaryZh:
      "马耳他 iGaming 牌照不是普通公司注册产品。第一步是判断业务需要 B2C 牌照、B2B 牌照、permit、recognition notice，还是根本不需要 MGA 牌照。这个判断会影响合规、系统、AML、税务、人员和成本。",
    updated: "2026-06-26",
    readTime: "9 min read",
    status: "published",
    sections: [
      {
        heading: "Direct answer",
        headingZh: "直接答案",
        body: [
          "The Malta Gaming Authority distinguishes between B2C and B2B licence routes and also lists permits, individual applications, recognition notices and audit service provider approvals in its official Applications area.",
          "For an applicant, the practical risk is choosing the wrong authorisation route. A B2B supplier authorisation does not by itself make the business a consumer-facing B2C operator, and a Recognition Notice is not the same thing as a new Malta licence.",
        ],
        bodyZh: [
          "Malta Gaming Authority 在官方 Applications 区域中区分 B2C 与 B2B 牌照路径，并同时列出 permits、individual applications、recognition notices 和 audit service provider approvals。",
          "对申请人而言，实务风险首先是选错授权路径。B2B 供应商授权本身并不等于可以直接面向玩家开展 B2C 运营；Recognition Notice 也不等于重新取得一张马耳他新牌照。",
        ],
      },
      {
        heading: "Legal requirement vs best practice",
        headingZh: "法律要求与实务建议",
        body: [
          "Legal requirement: the licensing position should be checked against the Gaming Act, Gaming Authorisations Regulations, Gaming Licence Fees Regulations, Gaming Tax Regulations and applicable MGA directives, including the Gaming Authorisations and Compliance Directive.",
          "Best practice: prepare a licensing route memo before spending on company setup, technology, payment processing or marketing. The memo should identify the exact activity, customer type, jurisdictions, game verticals, service providers, key persons, systems and AML exposure.",
        ],
        bodyZh: [
          "法律要求：牌照判断应结合《Gaming Act》、Gaming Authorisations Regulations、Gaming Licence Fees Regulations、Gaming Tax Regulations 以及适用 MGA 指令，包括 Gaming Authorisations and Compliance Directive。",
          "实务建议：在投入公司设立、技术系统、支付通道或市场推广成本前，应先准备牌照路径备忘录。备忘录应明确业务活动、客户类型、目标司法辖区、游戏类型、服务商、关键人员、系统和 AML 风险。",
        ],
      },
      {
        heading: "B2C, B2B and recognition notice",
        headingZh: "B2C、B2B 与 Recognition Notice",
        body: [
          "B2C licences are relevant where the operator provides gaming services to players. MGA's B2C area includes remote gaming services and other consumer-facing licence categories.",
          "B2B licences are relevant where the business supplies gaming-related services or systems to other operators. MGA's B2B area includes game providers and back-office categories.",
          "A Recognition Notice is a separate route where an authorisation issued by another eligible jurisdiction may be recognised for providing a gaming service or gaming supply in or from Malta, subject to MGA's process.",
        ],
        bodyZh: [
          "B2C 牌照通常适用于直接向玩家提供 gaming services 的运营商。MGA 的 B2C 区域包括 remote gaming services 及其他面向消费者的类别。",
          "B2B 牌照通常适用于向其他运营商提供游戏相关服务或系统的企业。MGA 的 B2B 区域包括 game providers 和 back-office 类别。",
          "Recognition Notice 是另一条路径：由其他合资格司法辖区颁发的授权，在符合 MGA 流程时，可被认可用于在马耳他境内或从马耳他提供 gaming service 或 gaming supply。",
        ],
      },
      {
        heading: "Application readiness checklist",
        headingZh: "申请前准备清单",
        body: [
          "The applicant should align the Malta company, shareholder structure, beneficial ownership, directors, key functions, business plan, financial forecast, games or supply model, technology stack, outsourcing arrangements and AML framework before submission.",
          "MGA's FAQ states that licence applications are submitted through the Licensee Portal and that the portal gives applicants a timeline to follow request status. A submission that is incomplete at face value can delay the authorisation process before substantive review even starts.",
          "Key function holders and other relevant persons should be assessed early. MGA FAQ material describes key functions as important roles connected with a gaming service or gaming supply and refers applicants to Directive 3 of 2018 for the full list.",
        ],
        bodyZh: [
          "申请人应在提交前统一马耳他公司、股权结构、受益所有权、董事、关键职能、商业计划、财务预测、游戏或供应模式、技术系统、外包安排和 AML 框架。",
          "MGA FAQ 说明，牌照申请通过 Licensee Portal 提交，portal 会提供 timeline 以跟进申请状态。若提交材料在表面完整性上就存在缺口，可能在实质审查开始前已经拖慢授权流程。",
          "关键职能人员及其他相关人员应提前评估。MGA FAQ 将 key functions 描述为与 gaming service 或 gaming supply 相关的重要职能、角色或任务，并指向 Directive 3 of 2018 中的完整清单。",
        ],
      },
      {
        heading: "Compliance, AML, audit and tax",
        headingZh: "合规、AML、审计与税务",
        body: [
          "A Malta gaming project should budget for continuing compliance, not only the application. Depending on the authorisation, controls may include AML/CFT policies, player protection, reporting, compliance reviews, system controls, approved auditors, tax and gaming tax analysis, and data-protection coordination.",
          "MGA FAQ material states that the Authority may require licensees to undergo compliance audits on a regular or ad hoc basis and that only audits carried out by auditors approved by the Authority are recognised.",
          "Tax analysis should be separate from licensing analysis. A gaming licence does not by itself answer corporate income tax, VAT, gaming tax, payroll, transfer pricing, payment-flow or withholding-tax questions.",
        ],
        bodyZh: [
          "马耳他 gaming 项目应预算持续合规成本，而不是只计算申请成本。视授权类型而定，控制事项可能包括 AML/CFT 政策、玩家保护、报告义务、合规复核、系统控制、认可审计机构、税务和 gaming tax 分析，以及数据保护协同。",
          "MGA FAQ 说明，监管机构可要求持牌人定期或临时接受 compliance audit，且只有由 MGA 认可审计机构执行的审计才会被认可。",
          "税务分析应与牌照分析分开。取得 gaming 牌照本身并不解决企业所得税、VAT、gaming tax、薪资、转让定价、付款路径或预提税问题。",
        ],
      },
      {
        heading: "Common mistakes",
        headingZh: "常见误区",
        body: [
          "Mistake 1: choosing B2B when the commercial plan is B2C. The licence route must match the actual customer-facing or supplier-facing activity.",
          "Mistake 2: treating AML, key functions and technology evidence as paperwork to be filled later. For MGA-facing work, those points are core readiness evidence, not administrative decoration.",
          "Mistake 3: using headline tax rates or Malta's gaming reputation as the business case. The real case depends on market access, player location, payment rails, systems, people, compliance costs and ongoing reporting.",
          "Mistake 4: assuming licence grant equals operational readiness. Banking, payment processors, local substance, accounting, payroll, data protection and ongoing regulator reporting all need separate workstreams.",
        ],
        bodyZh: [
          "误区 1：商业计划实际是 B2C，却选择 B2B 路径。牌照路径必须与实际面向玩家或面向运营商的业务活动相匹配。",
          "误区 2：把 AML、关键职能和技术证据当成后续补文件。对 MGA 申请而言，这些是核心准备证据，不是行政装饰。",
          "误区 3：只用表面税率或马耳他 gaming 声誉作为商业理由。真实商业判断取决于市场准入、玩家所在地、支付通道、系统、人员、合规成本和持续报告。",
          "误区 4：认为取得牌照就等于可运营。银行、支付机构、本地实质、会计、薪资、数据保护和持续监管报告，都需要单独工作流。",
        ],
      },
      {
        heading: "Professional insight",
        headingZh: "专业实务建议",
        body: [
          "Before applying, build a licence-readiness matrix with five columns: authorisation route, legal entity and UBO chain, key persons, technology and service providers, and ongoing compliance budget.",
          "For Chinese, Hong Kong or other non-EU founders, the matrix should also cover source of funds, offshore holding companies, bankability, tax residence, group recharge arrangements and whether the Malta entity will have enough operating substance to support its role.",
        ],
        bodyZh: [
          "申请前建议建立一张牌照准备矩阵，至少包含五列：授权路径、法律实体和 UBO 链条、关键人员、技术与服务商、持续合规预算。",
          "对于中国、香港或其他非欧盟创始人，还应覆盖资金来源、离岸控股公司、银行开户可行性、税务居民身份、集团分摊安排，以及马耳他实体是否有足够经营实质支撑其角色。",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a Malta B2B gaming licence the same as a B2C licence?",
        qZh: "马耳他 B2B gaming 牌照和 B2C 牌照一样吗？",
        a: "No. B2C is relevant to operators providing gaming services to players, while B2B is relevant to businesses supplying gaming-related services or systems to other operators.",
        aZh: "不一样。B2C 通常适用于直接向玩家提供 gaming services 的运营商；B2B 通常适用于向其他运营商提供游戏相关服务或系统的企业。",
      },
      {
        q: "Where are MGA licence applications submitted?",
        qZh: "MGA 牌照申请在哪里提交？",
        a: "MGA FAQ states that licence applications can be submitted through the Licensee Portal, which provides a timeline for applicants to follow request status.",
        aZh: "MGA FAQ 说明，牌照申请可通过 Licensee Portal 提交，portal 会提供 timeline 方便申请人跟进申请状态。",
      },
      {
        q: "Does an iGaming support business always need an MGA licence?",
        qZh: "iGaming 周边服务是否一定需要 MGA 牌照？",
        a: "Not always. The answer depends on the exact service, whether it is a gaming service or gaming supply, the jurisdictions involved, and whether another authorisation or recognition route applies.",
        aZh: "不一定。是否需要牌照取决于具体服务、是否构成 gaming service 或 gaming supply、涉及司法辖区，以及是否适用其他授权或 recognition 路径。",
      },
      {
        q: "Are compliance audits part of ongoing MGA supervision?",
        qZh: "合规审计是否属于 MGA 持续监管的一部分？",
        a: "Yes. MGA FAQ material states that the Authority may require licensees to undergo compliance audits on a regular or ad hoc basis, and recognised audits must be carried out by approved auditors.",
        aZh: "是。MGA FAQ 说明，监管机构可要求持牌人定期或临时接受 compliance audit，且被认可的审计须由认可审计机构执行。",
      },
      {
        q: "What should be checked before paying advisers or intermediaries?",
        qZh: "支付顾问或中介费用前应先核查什么？",
        a: "Confirm the intended authorisation route, the scope of services, official MGA fees versus adviser fees, evidence needed for UBOs and key persons, technology readiness, AML readiness and ongoing compliance budget.",
        aZh: "应先确认拟申请授权路径、服务范围、官方 MGA 费用与顾问费用的区别、UBO 和关键人员证据、技术准备、AML 准备和持续合规预算。",
      },
    ],
    references: [
      { label: "Malta Gaming Authority - Applications", href: "https://www.mga.org.mt/licensee-hub/applications/", type: "Primary source" },
      { label: "Malta Gaming Authority - B2C Licences", href: "https://www.mga.org.mt/licensee-hub/applications/b2c-licences/", type: "Primary source" },
      { label: "Malta Gaming Authority - B2B Licences", href: "https://www.mga.org.mt/licensee-hub/applications/b2b-licences/", type: "Primary source" },
      { label: "Malta Gaming Authority - Compliance", href: "https://www.mga.org.mt/licensee-hub/compliance/", type: "Primary source" },
      { label: "Malta Gaming Authority - FAQs", href: "https://www.mga.org.mt/faqs/", type: "Primary source" },
      { label: "Malta Gaming Authority - Licensee Register", href: "https://www.mga.org.mt/licensee-hub/licensee-register/", type: "Primary source" },
      { label: "Gaming Act, Chapter 583", href: "https://legislation.mt/eli/cap/583/eng/pdf", type: "Primary source" },
      { label: "Gaming Authorisations Regulations", href: "https://legislation.mt/eli/sl/583.5/eng/pdf", type: "Primary source" },
      { label: "Gaming Licence Fees Regulations", href: "https://legislation.mt/eli/sl/583.3/eng/pdf", type: "Primary source" },
      { label: "Gaming Tax Regulations", href: "https://legislation.mt/eli/sl/583.10/eng/pdf", type: "Primary source" },
      {
        label: "Directive 3 of 2018 - Gaming Authorisations and Compliance Directive",
        href: "https://www.mga.org.mt/app/uploads/Directive-3-of-2018-Gaming-Authorisations-and-Compliance-Directive.pdf",
        type: "Primary source",
      },
      {
        label: "Source intake: 马耳他iGaming牌照申请：90%的人都踩过的4个坑",
        href: "https://mp.weixin.qq.com/s/LtGJOqPiSO8IX-Br1FAroA",
        type: "Source intake",
      },
    ],
  },
  {
    slug: "malta-international-structuring-guide",
    category: "international-structuring",
    title: "Malta International Structuring Guide: Company, Tax, VAT and Substance Controls",
    titleZh: "马耳他国际架构指南：公司、税务、VAT 与实质控制",
    seoTitle: "Malta International Structuring Guide: Company Setup, Tax, VAT, Substance and Compliance",
    seoTitleZh: "马耳他国际架构指南：公司设立、税务、VAT、实质与合规",
    metaDescription:
      "A practical Malta international structuring guide covering company setup, tax residence, VAT, substance, cross-border payments, governance and compliance controls.",
    metaDescriptionZh:
      "实务角度解释马耳他国际架构，包括公司设立、税务居民、VAT、实质、跨境付款、治理和合规控制。",
    keywords: [
      "Malta international structuring",
      "Malta holding company",
      "Malta substance",
      "Malta cross-border tax",
      "Malta company structure",
    ],
    keywordsZh: ["马耳他国际架构", "马耳他控股公司", "马耳他实质要求", "马耳他跨境税务", "马耳他公司架构"],
    summary:
      "A Malta structure should be designed around real activity, governance, tax analysis, VAT position, accounting evidence and cross-border documentation. Incorporation alone does not create a reliable international structure.",
    summaryZh:
      "马耳他架构应围绕真实业务、治理、税务分析、VAT 状态、会计证据和跨境文件设计。单纯注册公司并不能形成可靠的国际架构。",
    updated: "2026-06-25",
    readTime: "8 min read",
    status: "published",
    sections: [
      {
        heading: "Direct answer",
        headingZh: "直接答案",
        body: [
          "Malta can be used in international business structures, but the legal and tax result depends on the company's actual activities, management, contracts, counterparties, VAT position, accounting records and applicable treaty or domestic rules.",
          "A structure should not be assessed only by incorporation cost or headline tax outcomes. It should be tested against company law, income tax, VAT, accounting, substance and governance evidence.",
        ],
        bodyZh: [
          "马耳他可以用于国际商业架构，但法律和税务结果取决于公司的真实活动、管理、合同、交易对手、VAT 状态、会计记录以及适用的协定或本地规则。",
          "评估架构时不应只看注册成本或表面税务结果，而应结合公司法、所得税、VAT、会计、实质和治理证据进行测试。",
        ],
      },
      {
        heading: "Legal requirement vs best practice",
        headingZh: "法律要求与实务建议",
        body: [
          "Legal requirement: each structure should be checked against the Companies Act, Income Tax Act, Income Tax Management Act, VAT Act and any sector-specific rules that apply to the activity.",
          "Best practice: prepare a structure memo before implementation, covering business purpose, ownership, management, contracts, flow of funds, VAT treatment, accounting records and filing calendar.",
        ],
        bodyZh: [
          "法律要求：每个架构都应结合《Companies Act》、《Income Tax Act》、《Income Tax Management Act》、《VAT Act》以及适用于具体业务的行业规则进行核查。",
          "实务建议：实施前准备结构备忘录，覆盖商业目的、所有权、管理、合同、资金流、VAT 处理、会计记录和申报日历。",
        ],
      },
      {
        heading: "Company setup and governance",
        headingZh: "公司设立与治理",
        body: [
          "Company formation is only the starting point. Directors, shareholders, beneficial ownership records, registered office, accounting routines and annual registry filings should be aligned with the intended structure.",
          "If decision-making happens outside Malta while contracts or bank flows are booked in Malta, the company should document where management decisions are made and why the Malta company is commercially relevant.",
        ],
        bodyZh: [
          "公司注册只是起点。董事、股东、受益所有人记录、注册地址、会计流程和年度登记申报都应与拟定架构保持一致。",
          "如果管理决策发生在马耳他以外，但合同或银行流水记在马耳他公司名下，公司应记录管理决策地点，以及马耳他公司的商业相关性。",
        ],
      },
      {
        heading: "Tax and VAT review",
        headingZh: "税务与 VAT 复核",
        body: [
          "Income tax analysis should consider the type of income, place of management, payer and recipient, related-party arrangements, financing flows and available supporting evidence.",
          "VAT analysis should be separate from income tax analysis. A company may have no immediate profit but still need to review VAT registration, place of supply, imported services, invoices and record retention.",
        ],
        bodyZh: [
          "所得税分析应考虑收入类型、管理地点、付款方和收款方、关联方安排、融资流以及可用支持证据。",
          "VAT 分析应与所得税分析分开。公司即使暂时没有利润，也可能需要复核 VAT 注册、供应地点、进口服务、发票和记录保存。",
        ],
      },
      {
        heading: "Substance and evidence",
        headingZh: "实质与证据",
        body: [
          "Substance is not a single document. It is a pattern of evidence: contracts, board records, bank activity, people, service delivery, invoices, accounting records and business correspondence.",
          "For groups using Malta with Hong Kong, China, EU or other jurisdictions, the evidence should explain what the Malta company actually does and why it earns the relevant income or bears the relevant cost.",
        ],
        bodyZh: [
          "实质不是单一文件，而是一组证据：合同、董事会记录、银行活动、人员、服务交付、发票、会计记录和商业往来。",
          "对于同时使用马耳他、香港、中国内地、欧盟或其他司法辖区的集团，证据应说明马耳他公司实际做什么，以及为何取得相关收入或承担相关成本。",
        ],
      },
      {
        heading: "Common mistakes",
        headingZh: "常见错误",
        body: [
          "A common mistake is using a template structure without checking whether the operating facts match the legal and tax assumptions.",
          "Another mistake is separating advisors by task so that company formation, accounting, tax, VAT and payroll are handled without one shared structure file.",
        ],
        bodyZh: [
          "常见错误之一，是套用模板架构，却没有核查实际运营事实是否匹配法律和税务假设。",
          "另一个错误，是把顾问按任务割裂：公司注册、会计、税务、VAT 和薪资分别处理，却没有一个共同的架构资料包。",
        ],
      },
      {
        heading: "Professional insight",
        headingZh: "专业实务建议",
        body: [
          "Before implementing a Malta structure, build a one-page control map: entity role, owners, directors, bank accounts, contracts, income flows, cost flows, VAT status, accounting owner and filing deadlines.",
          "This map should be reviewed whenever the group adds a new country, bank account, major customer, financing arrangement, employee or related-party contract.",
        ],
        bodyZh: [
          "实施马耳他架构前，建议先建立一页控制图：实体角色、所有人、董事、银行账户、合同、收入流、成本流、VAT 状态、会计负责人和申报截止日。",
          "当集团新增国家、银行账户、重要客户、融资安排、员工或关联方合同时，都应复核这张控制图。",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a Malta company enough to create an international structure?",
        qZh: "注册一家马耳他公司就足以形成国际架构吗？",
        a: "No. Incorporation is only one step. The structure also needs governance, contracts, accounting records, tax review, VAT review and evidence of real commercial purpose.",
        aZh: "不够。注册只是其中一步。架构还需要治理、合同、会计记录、税务复核、VAT 复核以及真实商业目的证据。",
      },
      {
        q: "Should VAT be reviewed even for holding or service companies?",
        qZh: "控股或服务公司也需要复核 VAT 吗？",
        a: "Yes. VAT should be reviewed separately because imported services, cross-border supplies, invoicing and record retention can create obligations even when income tax analysis looks straightforward.",
        aZh: "需要。VAT 应单独复核，因为进口服务、跨境供应、开票和记录保存可能产生义务，即使所得税分析看起来较简单。",
      },
      {
        q: "What documents support a Malta structure?",
        qZh: "哪些文件可以支持马耳他架构？",
        a: "Common support includes incorporation records, beneficial ownership records, board minutes, contracts, invoices, bank statements, accounting records, tax working papers and business correspondence.",
        aZh: "常见支持文件包括注册文件、受益所有人记录、董事会记录、合同、发票、银行流水、会计记录、税务工作底稿和商业往来。",
      },
      {
        q: "When should the structure be reviewed?",
        qZh: "什么时候应复核架构？",
        a: "Review the structure before launch and whenever ownership, business activity, country exposure, financing, employees, customers or related-party transactions change materially.",
        aZh: "应在实施前复核，并在所有权、业务活动、国家风险、融资、员工、客户或关联交易发生重大变化时复核。",
      },
    ],
    references: [
      { label: "Companies Act, Chapter 386", href: "https://legislation.mt/eli/cap/386/eng", type: "Primary source" },
      { label: "Income Tax Act, Chapter 123", href: "https://legislation.mt/eli/cap/123/eng", type: "Primary source" },
      { label: "Income Tax Management Act, Chapter 372", href: "https://legislation.mt/eli/cap/372/eng", type: "Primary source" },
      { label: "Value Added Tax Act, Chapter 406", href: "https://legislation.mt/eli/cap/406/eng", type: "Primary source" },
      { label: "Malta Business Registry", href: "https://mbr.mt/", type: "Primary source" },
    ],
  },
  {
    slug: "identity-planning-overseas-investment-compliance-guide",
    category: "china-outbound",
    title: "Identity Planning and Overseas Investment Compliance Guide: Source of Funds, CRS and Tax Residence",
    titleZh: "身份规划与海外投资合规指南：资金来源、CRS 与税务居民闭环",
    seoTitle: "Identity Planning and Overseas Investment Compliance: CRS, Source of Funds and Tax Residence",
    seoTitleZh: "身份规划与海外投资合规：CRS、资金来源、税务居民与文件闭环",
    metaDescription:
      "A practical compliance guide for overseas investment and identity planning, covering source of funds, source of wealth, CRS, tax residence, bank KYC, beneficial ownership and document evidence.",
    metaDescriptionZh:
      "面向海外投资与身份规划的合规指南，涵盖资金来源、财富来源、CRS、税务居民、银行 KYC、受益所有权和文件证据闭环。",
    keywords: [
      "identity planning compliance",
      "overseas investment compliance",
      "source of funds",
      "source of wealth",
      "CRS self certification",
      "tax residence",
      "China outbound investment",
      "Malta residence tax planning",
    ],
    keywordsZh: [
      "身份规划合规",
      "海外投资合规",
      "资金来源",
      "财富来源",
      "CRS 自我证明",
      "税务居民",
      "中国企业出海",
      "马耳他身份税务规划",
    ],
    summary:
      "Modern identity planning and overseas investment should start with compliance evidence, not product selection. Banks, tax authorities and reporting frameworks increasingly ask the same questions: who owns the money, where it came from, where it is going, and where tax residence and reporting sit.",
    summaryZh:
      "现代身份规划和海外投资应从合规证据开始，而不是先选产品。银行、税务机关和信息交换框架越来越关注同一组问题：谁拥有资金、资金从哪里来、资金去哪里、税务居民和申报义务在哪里。",
    updated: "2026-06-26",
    readTime: "8 min read",
    status: "published",
    sections: [
      {
        heading: "Direct answer",
        headingZh: "直接答案",
        body: [
          "The first principle of overseas investment and identity planning is compliance by design. Before opening accounts, buying assets, subscribing to funds or applying for residence, the investor should be able to explain identity, source of wealth, source of funds, tax residence, account purpose, investment route and exit route.",
          "A residence permit, offshore company or overseas bank account does not automatically solve tax, CRS, AML or capital-control issues. Each part of the structure must be supported by documents that match the facts.",
        ],
        bodyZh: [
          "海外投资和身份规划的第一原则，是提前设计合规。开户、买资产、认购基金或申请居留前，投资人应能解释身份、财富来源、资金来源、税务居民、账户用途、投资路径和退出路径。",
          "居留卡、离岸公司或海外银行账户本身，并不会自动解决税务、CRS、AML 或资金出境问题。架构中的每一环都需要与事实相匹配的文件支持。",
        ],
      },
      {
        heading: "Legal requirement vs best practice",
        headingZh: "法律要求与实务建议",
        body: [
          "Legal requirement: the applicable rules depend on the jurisdictions and activities involved. CRS reporting, bank AML/KYC duties, beneficial ownership transparency, tax residence, exchange-control rules and securities eligibility may all apply at the same time.",
          "Best practice: build a compliance file before the transaction. It should connect the person, money, entity, account, investment, tax position and reporting obligations in one evidence trail.",
        ],
        bodyZh: [
          "法律要求：适用规则取决于相关司法辖区和具体活动。CRS 报告、银行 AML/KYC、受益所有权透明度、税务居民、外汇管理和证券投资资格，可能同时适用。",
          "实务建议：交易前先建立合规档案，把人、钱、实体、账户、投资、税务位置和申报义务串成一条证据链。",
        ],
      },
      {
        heading: "The five-layer compliance file",
        headingZh: "五层合规文件体系",
        body: [
          "Identity evidence: passports, national IDs, residence permits, proof of address, tax identification numbers, visas and family relationship evidence where relevant.",
          "Source-of-wealth evidence: salary records, dividends, business sale agreements, audited accounts, tax assessments, property sale contracts, inheritance documents and historical investment records.",
          "Source-of-funds evidence: bank statements, remittance records, foreign-exchange records, transfer instructions, loan agreements, dividend payments and payment-purpose explanations.",
          "Investment evidence: subscription agreements, fund documents, share purchase documents, property contracts, custody records, broker statements and exit documents.",
          "Tax and reporting evidence: tax-residence analysis, annual tax filings, CRS self-certifications, overseas income explanations, beneficial ownership records and professional tax opinions where needed.",
        ],
        bodyZh: [
          "身份文件：护照、身份证、居留许可、地址证明、税号、签证，以及必要时的家庭关系证明。",
          "财富来源文件：工资记录、分红、企业出售协议、审计报告、税单、房产出售合同、继承文件和历史投资记录。",
          "资金来源文件：银行流水、汇款记录、换汇记录、转账指令、借款协议、分红付款和付款用途说明。",
          "投资文件：认购协议、基金文件、股权购买文件、房产合同、托管记录、券商结单和退出文件。",
          "税务与申报文件：税务居民分析、年度税务申报、CRS 自我证明、境外收入说明、受益所有权记录，以及必要时的专业税务意见。",
        ],
      },
      {
        heading: "CRS and tax residence",
        headingZh: "CRS 与税务居民",
        body: [
          "CRS is an automatic exchange framework for financial account information. The practical risk is not the mere existence of an overseas account; it is inconsistent information across tax residence, account holder data, controlling-person data, self-certifications and tax filings.",
          "Tax residence is fact-sensitive. For Malta planning, residence, domicile and remittance-basis issues should be reviewed against Maltese income tax rules and the person's actual facts, not assumed from a residence card alone.",
        ],
        bodyZh: [
          "CRS 是金融账户信息自动交换框架。实务风险不是单纯拥有海外账户，而是税务居民、账户持有人资料、控制人资料、自我证明和税务申报之间信息不一致。",
          "税务居民判断高度依赖事实。涉及马耳他规划时，居住、住所、汇入制等问题应结合马耳他所得税规则和个人真实事实审阅，不能仅凭一张居留卡推定。",
        ],
      },
      {
        heading: "Bank KYC and investment access",
        headingZh: "银行 KYC 与投资准入",
        body: [
          "Banks and investment platforms commonly ask for source of wealth, source of funds, account purpose, expected activity, beneficial ownership and tax residence information. These checks protect the institution and determine whether the account or investment can be accepted.",
          "For cross-border investors, the key question is not only whether an account can be opened, but whether money can enter, remain invested, generate reportable income, exit and be explained to tax authorities later.",
        ],
        bodyZh: [
          "银行和投资平台通常会要求财富来源、资金来源、账户用途、预期交易、受益所有权和税务居民信息。这些核查既是机构自我保护，也决定账户或投资是否能被接受。",
          "对跨境投资人而言，关键问题不只是账户能否开立，而是资金能否进入、能否持有、收益如何申报、如何退出，以及未来能否向税务机关解释清楚。",
        ],
      },
      {
        heading: "Common mistakes",
        headingZh: "常见误区",
        body: [
          "Mistake 1: treating identity planning as tax avoidance. A residence or citizenship route should be coordinated with tax residence, family life, business role, asset location and reporting obligations.",
          "Mistake 2: opening accounts before designing the evidence trail. This can create later inconsistency between account purpose, incoming funds, investment activity and CRS self-certification.",
          "Mistake 3: using an offshore company without documenting beneficial ownership and commercial purpose. Shell structures can create more questions than they solve if banking, tax and substance evidence is weak.",
          "Mistake 4: focusing only on entry. A mature plan also needs an exit route, annual reporting routine, succession logic and document retention plan.",
        ],
        bodyZh: [
          "误区 1：把身份规划当成避税工具。居留或身份路径应与税务居民、家庭生活、企业角色、资产所在地和申报义务协同。",
          "误区 2：先开户，后设计证据链。这可能造成账户用途、入账资金、投资活动和 CRS 自我证明之间后续不一致。",
          "误区 3：使用离岸公司却不记录受益所有权和商业目的。如果银行、税务和实质证据薄弱，空壳结构会制造更多问题。",
          "误区 4：只关注进入路径。成熟方案还应包括退出路径、年度申报流程、传承逻辑和文件留存计划。",
        ],
      },
      {
        heading: "Professional insight",
        headingZh: "专业实务建议",
        body: [
          "Before moving money, prepare a one-page compliance map: person, tax residence, source of wealth, source of funds, sending account, receiving account, investment target, beneficial owner, reporting jurisdiction and exit route.",
          "For China, Hong Kong and Malta-connected planning, review the map annually. Changes in family residence, company ownership, bank accounts, investment products, dividend flows or tax residence can change the compliance answer.",
        ],
        bodyZh: [
          "资金流动前，建议先准备一页合规地图：个人身份、税务居民、财富来源、资金来源、付款账户、收款账户、投资标的、受益所有人、申报司法辖区和退出路径。",
          "涉及中国、香港和马耳他的规划，应每年复核这张地图。家庭居住地、公司股权、银行账户、投资产品、分红流或税务居民变化，都可能改变合规结论。",
        ],
      },
    ],
    faqs: [
      {
        q: "Is overseas investment mainly about finding the highest return?",
        qZh: "海外投资主要是找最高收益吗？",
        a: "No. Return matters, but the investor also needs account acceptance, source-of-funds evidence, tax reporting, CRS consistency, investment eligibility and an exit route.",
        aZh: "不是。收益重要，但投资人还需要账户可接受性、资金来源证据、税务申报、CRS 一致性、投资资格和退出路径。",
      },
      {
        q: "Does a residence permit automatically change tax residence?",
        qZh: "取得居留许可是否自动改变税务居民身份？",
        a: "No. Tax residence depends on the rules and facts of the relevant jurisdictions. A residence permit is relevant evidence, but it is not the whole tax-residence analysis.",
        aZh: "不会自动改变。税务居民取决于相关司法辖区规则和事实。居留许可是相关证据，但不是完整税务居民分析。",
      },
      {
        q: "What is the difference between source of funds and source of wealth?",
        qZh: "资金来源和财富来源有什么区别？",
        a: "Source of funds explains the specific money used in a transaction. Source of wealth explains how the person accumulated wealth over time.",
        aZh: "资金来源解释某一笔交易使用的具体资金从哪里来。财富来源解释个人长期如何积累财富。",
      },
      {
        q: "Why does CRS matter for identity planning?",
        qZh: "为什么身份规划需要考虑 CRS？",
        a: "Because financial institutions collect tax-residence and controlling-person information. Inconsistent self-certifications, account data and tax filings can create avoidable risk.",
        aZh: "因为金融机构会收集税务居民和控制人信息。自我证明、账户资料和税务申报不一致，会产生可避免风险。",
      },
      {
        q: "When should professional advice be obtained?",
        qZh: "什么时候应取得专业意见？",
        a: "Before moving substantial funds, changing tax residence, using companies or trusts, opening investment accounts, buying regulated products, or making cross-border family succession arrangements.",
        aZh: "在大额资金流动、改变税务居民、使用公司或信托、开立投资账户、购买受监管产品，或安排跨境家族传承前，应取得专业意见。",
      },
    ],
    references: [
      { label: "OECD - Common Reporting Standard", href: "https://www.oecd.org/tax/automatic-exchange/common-reporting-standard/", type: "Primary source" },
      { label: "FATF Recommendations", href: "https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Fatf-recommendations.html", type: "Primary source" },
      {
        label: "Hong Kong Monetary Authority - Anti-Money Laundering and Counter-Financing of Terrorism",
        href: "https://www.hkma.gov.hk/eng/key-functions/banking/anti-money-laundering-and-counter-financing-of-terrorism/",
        type: "Primary source",
      },
      { label: "Income Tax Act, Chapter 123", href: "https://legislation.mt/eli/cap/123/eng", type: "Primary source" },
      { label: "State Administration of Foreign Exchange", href: "https://www.safe.gov.cn/", type: "Primary source" },
      { label: "National Development and Reform Commission", href: "https://www.ndrc.gov.cn/", type: "Primary source" },
      { label: "Ministry of Commerce of the People's Republic of China", href: "https://www.mofcom.gov.cn/", type: "Primary source" },
      {
        label: "Source intake: 别让你的钱裸奔：2026年身份规划和海外投资第一原则是合规",
        href: "https://mp.weixin.qq.com/s/tGzeMKSciesmtElrsb-vxQ",
        type: "Source intake",
      },
    ],
  },
  {
    slug: "china-outbound-investment-malta-guide",
    category: "china-outbound",
    title: "China Outbound Investment via Malta: Company, ODI, Tax and Compliance Controls",
    titleZh: "中国企业经马耳他出海指南：公司、ODI、税务与合规控制",
    seoTitle: "China Outbound Investment via Malta: ODI, Company Setup, Tax, VAT and Compliance Guide",
    seoTitleZh: "中国企业经马耳他出海指南：ODI、公司设立、税务、VAT 与合规",
    metaDescription:
      "A practical guide for Chinese companies considering Malta structures, covering ODI coordination, company setup, tax, VAT, accounting records, substance and cross-border controls.",
    metaDescriptionZh:
      "面向中国企业的马耳他出海架构实务指南，覆盖 ODI 协同、公司设立、税务、VAT、会计记录、实质和跨境控制。",
    keywords: [
      "China outbound investment Malta",
      "Malta company for Chinese investors",
      "China ODI Malta",
      "Malta cross-border structuring",
      "Chinese company Malta",
    ],
    keywordsZh: ["中国企业出海马耳他", "中国投资者马耳他公司", "中国 ODI 马耳他", "马耳他跨境架构", "中国公司马耳他"],
    summary:
      "Chinese groups considering Malta should coordinate China-side outbound investment controls with Malta company, tax, VAT, accounting and substance requirements. The structure should be documented before funds, contracts or employees move.",
    summaryZh:
      "中国集团考虑使用马耳他架构时，应把中国侧境外投资控制与马耳他公司、税务、VAT、会计和实质要求协同设计。资金、合同或员工发生变化前，应先形成架构文件。",
    updated: "2026-06-25",
    readTime: "8 min read",
    status: "published",
    sections: [
      {
        heading: "Direct answer",
        headingZh: "直接答案",
        body: [
          "A Malta company can be part of a China outbound investment structure, but it should not be set up before the China-side regulatory, foreign exchange, tax, accounting and commercial rationale has been mapped.",
          "The practical question is not only whether a Malta company can be incorporated. The group should also ask how ownership, funding, contracts, tax, VAT, accounting, governance and reporting will work across China, Malta and any intermediate jurisdictions.",
        ],
        bodyZh: [
          "马耳他公司可以成为中国企业出海架构的一部分，但不应在中国侧监管、外汇、税务、会计和商业理由尚未梳理前直接设立。",
          "实务问题不只是能否注册马耳他公司。集团还应判断所有权、资金、合同、税务、VAT、会计、治理和报告如何在中国、马耳他及任何中间司法辖区之间运行。",
        ],
      },
      {
        heading: "Legal requirement vs best practice",
        headingZh: "法律要求与实务建议",
        body: [
          "Legal requirement: China-side outbound investment, foreign exchange and tax points should be checked with the relevant China authorities and professional advisers. Malta-side points should be checked against Malta company, tax, VAT and accounting rules.",
          "Best practice: prepare one bilingual structure memo before implementation. It should explain business purpose, ownership, funding, cash flow, contracts, Malta substance, tax and VAT assumptions, accounting owner and filing timetable.",
        ],
        bodyZh: [
          "法律要求：中国侧境外投资、外汇和税务事项应结合相关中国主管机关要求和专业顾问意见核查；马耳他侧事项应结合马耳他公司、税务、VAT 和会计规则核查。",
          "实务建议：实施前准备一份双语架构备忘录，说明商业目的、所有权、资金、现金流、合同、马耳他实质、税务和 VAT 假设、会计负责人和申报时间表。",
        ],
      },
      {
        heading: "China-side outbound controls",
        headingZh: "中国侧出海控制",
        body: [
          "For a China outbound structure, the group should confirm whether project approvals, filings, foreign exchange registration, tax reporting, board approvals or group internal controls are relevant before funds are remitted or contracts signed.",
          "Do not assume that a Malta incorporation automatically solves China-side requirements. The China-side compliance file should support why the overseas entity exists and how the investment is funded and controlled.",
        ],
        bodyZh: [
          "对于中国企业出海架构，集团应在资金汇出或合同签署前，确认是否涉及项目核准或备案、外汇登记、税务报告、董事会批准或集团内部控制。",
          "不应假设注册马耳他公司会自动解决中国侧要求。中国侧合规资料应能够说明境外实体为何存在，以及投资如何出资和控制。",
        ],
      },
      {
        heading: "Malta company, tax and VAT setup",
        headingZh: "马耳他公司、税务与 VAT 设置",
        body: [
          "On the Malta side, the structure should define the company's role: holding, trading, service delivery, IP management, EU operations, payroll, or another clearly documented function.",
          "Tax and VAT should be analysed separately. Income tax treatment, VAT registration, imported services, invoicing, payroll and accounting records may all point to different compliance actions.",
        ],
        bodyZh: [
          "在马耳他侧，架构应定义公司的角色：控股、贸易、服务交付、知识产权管理、欧盟运营、薪资雇佣或其他明确记录的功能。",
          "税务和 VAT 应分开分析。所得税处理、VAT 注册、进口服务、开票、薪资和会计记录可能分别触发不同合规动作。",
        ],
      },
      {
        heading: "Substance and documentation",
        headingZh: "实质与文件",
        body: [
          "A China-owned Malta company should keep evidence of board decisions, contracts, service delivery, invoices, payment flow, accounting records and management review.",
          "If decisions are made in China while the Malta company signs contracts or receives income, the group should document the role of each entity and the reason for the Malta company participating in the transaction.",
        ],
        bodyZh: [
          "中国背景的马耳他公司应保存董事决策、合同、服务交付、发票、付款流、会计记录和管理层复核证据。",
          "如果决策在中国作出，而马耳他公司签署合同或取得收入，集团应记录各实体角色，以及马耳他公司参与交易的原因。",
        ],
      },
      {
        heading: "Common mistakes",
        headingZh: "常见错误",
        body: [
          "A common mistake is registering the overseas entity before mapping approvals, bank requirements, accounting flows and tax positions.",
          "Another mistake is using the Malta company for contracts, invoices or payments before VAT, payroll and accounting workflows are ready.",
        ],
        bodyZh: [
          "常见错误之一，是在尚未梳理审批、银行要求、会计流和税务判断前先注册境外实体。",
          "另一个错误，是在 VAT、薪资和会计流程尚未准备好前，就使用马耳他公司签合同、开票或收付款。",
        ],
      },
      {
        heading: "Professional insight",
        headingZh: "专业实务建议",
        body: [
          "For China outbound projects, build a control matrix with two sides: China-side approvals, funding and reporting; Malta-side company, tax, VAT, accounting and payroll controls.",
          "Review the matrix whenever ownership changes, funds move, a new contract is signed, an employee is hired, a bank account opens, or the Malta company begins a new business activity.",
        ],
        bodyZh: [
          "对于中国企业出海项目，建议建立双边控制矩阵：一边是中国侧审批、资金和报告；另一边是马耳他侧公司、税务、VAT、会计和薪资控制。",
          "当所有权变化、资金流动、新合同签署、雇佣员工、开立银行账户，或马耳他公司开始新业务活动时，都应复核该矩阵。",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a Chinese company simply register a Malta company first?",
        qZh: "中国企业可以先直接注册马耳他公司吗？",
        a: "It may be possible to incorporate, but it is not good practice to do so before checking China-side outbound investment, foreign exchange, tax, bank and internal approval requirements.",
        aZh: "技术上可能可以注册，但在核查中国侧境外投资、外汇、税务、银行和内部审批要求前，不建议先行设立。",
      },
      {
        q: "Does a Malta company automatically create tax benefits?",
        qZh: "马耳他公司会自动产生税务优势吗？",
        a: "No. Tax outcomes depend on the facts, transactions, residence, source, substance, documentation and applicable law. A structure should not be promoted on headline tax assumptions only.",
        aZh: "不会。税务结果取决于事实、交易、居民身份、来源、实质、文件和适用法律。架构不应只基于表面税务假设宣传。",
      },
      {
        q: "What should be documented before funds move offshore?",
        qZh: "资金出境前应准备哪些文件？",
        a: "Common controls include board approvals, investment rationale, ownership chart, funding plan, contracts, bank requirements, tax memo, VAT review and accounting workflow.",
        aZh: "常见控制包括董事会批准、投资理由、所有权结构图、资金计划、合同、银行要求、税务备忘录、VAT 复核和会计流程。",
      },
      {
        q: "Should Hong Kong be reviewed together with Malta?",
        qZh: "香港是否应与马耳他一起复核？",
        a: "Yes, if a Hong Kong company sits between China and Malta or handles contracts, banking, services or IP. Each entity's role should be documented separately.",
        aZh: "如果香港公司位于中国与马耳他之间，或处理合同、银行、服务或知识产权，应一起复核，并分别记录各实体角色。",
      },
    ],
    references: [
      { label: "National Development and Reform Commission", href: "https://www.ndrc.gov.cn/", type: "Primary source" },
      { label: "Ministry of Commerce of the People's Republic of China", href: "https://www.mofcom.gov.cn/", type: "Primary source" },
      { label: "State Administration of Foreign Exchange", href: "https://www.safe.gov.cn/", type: "Primary source" },
      { label: "Companies Act, Chapter 386", href: "https://legislation.mt/eli/cap/386/eng", type: "Primary source" },
      { label: "Income Tax Act, Chapter 123", href: "https://legislation.mt/eli/cap/123/eng", type: "Primary source" },
      { label: "Value Added Tax Act, Chapter 406", href: "https://legislation.mt/eli/cap/406/eng", type: "Primary source" },
    ],
  },
  {
    slug: "hong-kong-crs-aeoi-2027-compliance-guide",
    category: "hong-kong-malta",
    title: "Hong Kong CRS and AEOI 2027 Guide: Registration, Records and Cross-border Risk",
    titleZh: "香港 CRS 与 AEOI 2027 指南：登记、留档与跨境风险",
    seoTitle: "Hong Kong CRS and AEOI 2027 Guide: RFI Registration, Six-Year Records and Risk Controls",
    seoTitleZh: "香港 CRS 与 AEOI 2027 指南：RFI 登记、六年留档与风险控制",
    metaDescription:
      "A practical Hong Kong CRS and AEOI guide covering the 2026 AEOI amendment bill, 2027 RFI registration, six-year records, penalties, self-certification, CARF and amended CRS planning.",
    metaDescriptionZh:
      "实务角度解释香港 CRS 与 AEOI，包括 2026 AEOI 修例、2027 申报财务机构登记、六年留档、罚则、自证、CARF 和 amended CRS 规划。",
    keywords: [
      "Hong Kong CRS 2027",
      "Hong Kong AEOI",
      "reporting financial institution Hong Kong",
      "BIR80 records",
      "CRS self-certification",
      "Hong Kong CARF amended CRS",
    ],
    keywordsZh: ["香港 CRS 2027", "香港 AEOI", "香港申报财务机构", "BIR80 留档", "CRS 自证", "香港 CARF amended CRS"],
    summary:
      "Hong Kong's 2026 AEOI amendment bill strengthens the CRS administrative framework from 1 January 2027, including mandatory RFI registration, six-year record keeping after BIR80 due dates and enhanced sanctions. This is an administrative compliance change, not a new personal tax by itself.",
    summaryZh:
      "香港 2026 年 AEOI 修例将自 2027 年 1 月 1 日起强化 CRS 行政框架，包括申报财务机构强制登记、BIR80 到期后六年留档和强化罚则。这是行政合规变化，本身并不是新增个人税种。",
    updated: "2026-06-26",
    readTime: "9 min read",
    status: "published",
    sections: [
      {
        heading: "Direct answer",
        headingZh: "直接答案",
        body: [
          "Hong Kong's 2026 AEOI amendment bill is aimed at strengthening the CRS administrative framework. It does not, by itself, create a new tax on individuals or automatically make every Hong Kong company a reporting financial institution.",
          "The practical risk is evidence consistency: whether a trust, fund, family office vehicle, investment entity or offshore company is classified correctly, whether CRS self-certifications match the facts, and whether records can be produced when reviewed.",
        ],
        bodyZh: [
          "香港 2026 年 AEOI 修例的目标，是强化 CRS 行政框架。它本身并不新增个人税种，也不会自动使所有香港公司都成为申报财务机构。",
          "实务风险在于证据一致性：信托、基金、家办工具、投资实体或离岸公司是否分类正确，CRS 自证是否与事实一致，以及被复核时能否提供记录。",
        ],
      },
      {
        heading: "Legal requirement vs best practice",
        headingZh: "法律要求与实务建议",
        body: [
          "Legal requirement: CRS and AEOI obligations should be checked against the Inland Revenue Ordinance, IRD's AEOI guidance, the 2026 amendment bills and OECD CRS materials. Entity classification should be based on facts, not labels.",
          "Best practice: prepare an AEOI control file before 2027 covering entity classification, RFI registration status, BIR80 filing, nil reporting where relevant, self-certification, controlling persons and record retention.",
        ],
        bodyZh: [
          "法律要求：CRS 与 AEOI 义务应结合《Inland Revenue Ordinance》、IRD AEOI 指引、2026 年修例草案和 OECD CRS 资料核查。实体分类应基于事实，而不是名称。",
          "实务建议：在 2027 年前准备 AEOI 控制资料包，覆盖实体分类、RFI 登记状态、BIR80 申报、适用时的零申报、自证、控制人和记录留存。",
        ],
      },
      {
        heading: "What changes from 1 January 2027",
        headingZh: "2027 年 1 月 1 日起变化",
        body: [
          "IRD's AEOI page states that the Inland Revenue (Amendment) (Automatic Exchange of Information) Bill 2026 was gazetted on 27 March 2026 and aims to strengthen the existing administrative framework for CRS from 1 January 2027, subject to passage.",
          "The key changes described by IRD are mandatory registration for all Hong Kong reporting financial institutions, enhanced record keeping requirements and enhanced sanctions for non-compliance.",
        ],
        bodyZh: [
          "IRD 的 AEOI 页面说明，《2026 年税务（修订）（自动交换资料）条例草案》于 2026 年 3 月 27 日刊宪，目标是在草案通过的前提下，自 2027 年 1 月 1 日起强化现有 CRS 行政框架。",
          "IRD 说明的关键变化包括：所有香港申报财务机构强制登记、强化记录保存要求，以及强化不合规制裁。",
        ],
      },
      {
        heading: "Mandatory RFI registration",
        headingZh: "申报财务机构强制登记",
        body: [
          "IRD states that all reporting financial institutions in Hong Kong are required to register in the AEOI Portal for CRS reporting purposes, irrespective of whether they have information to report.",
          "Existing RFIs that remain unregistered are required to register by 31 March 2027. Financial institutions becoming RFIs since 1 January 2027 are generally required to register by 31 January of the year following the calendar year in which they first become RFIs.",
        ],
        bodyZh: [
          "IRD 表示，所有香港申报财务机构都需要在 AEOI Portal 登记，以进行 CRS 报告，无论其是否有资料需要向税务局报告。",
          "现有但尚未登记的 RFI，需在 2027 年 3 月 31 日前登记。自 2027 年 1 月 1 日起成为 RFI 的财务机构，通常需在其首次成为 RFI 的公历年翌年 1 月 31 日前登记。",
        ],
      },
      {
        heading: "Six-year record keeping",
        headingZh: "六年留档要求",
        body: [
          "IRD states that RFIs are required to keep sufficient records for six years after the due date of the Financial Account Information Return, BIR80, regardless of whether the RFI has ceased to be an RFI or has been dissolved.",
          "For a dissolved RFI, the persons who were directors immediately before dissolution, or trustees or responsible managers where there was no director, must ensure records are kept until the retention period ends.",
        ],
        bodyZh: [
          "IRD 表示，RFI 需要在 Financial Account Information Return，即 BIR80，到期日后保留足够记录六年，无论该 RFI 是否已不再属于 RFI 或已经解散。",
          "对于已解散 RFI，解散前的董事，或没有董事时的受托人或负责管理人员，需确保记录保存至留档期结束。",
        ],
      },
      {
        heading: "Enhanced sanctions are about process failures",
        headingZh: "强化罚则针对流程失败",
        body: [
          "IRD states that the amendment bill introduces new sanctions for RFI non-compliance without reasonable excuse, including failure to register and provision of incorrect or incomplete information.",
          "It also introduces penalties calculated by reference to the number of financial accounts involved for certain offences, including failure to carry out due diligence procedures, and an administrative penalty mechanism as an alternative to prosecution.",
        ],
        bodyZh: [
          "IRD 表示，修例草案针对 RFI 无合理辩解的不合规行为引入新制裁，包括未登记、提供不正确或不完整资料等。",
          "对某些罪行，例如未执行尽职审查程序，罚款可按涉及金融账户数量计算；同时引入行政罚则机制，作为检控的替代方式。",
        ],
      },
      {
        heading: "Entity classification: FI, active NFE or passive NFE",
        headingZh: "实体分类：FI、主动 NFE 或消极 NFE",
        body: [
          "A company, trust, fund or family office vehicle should not be classified by name alone. The analysis should consider whether it is a custodial institution, depository institution, investment entity, specified insurance company, active non-financial entity or passive non-financial entity.",
          "If an entity is not an RFI, it may still be reviewed by a bank or other RFI as an account holder. Passive non-financial entities can require look-through to controlling persons and their tax residence.",
        ],
        bodyZh: [
          "公司、信托、基金或家办工具不应只按名称分类。分析应判断其是否属于托管机构、存款机构、投资实体、指明保险公司、主动非金融实体或消极非金融实体。",
          "即使某实体不是 RFI，也可能作为账户持有人被银行或其他 RFI 审查。消极非金融实体可能需要穿透识别控制人及其税务居民身份。",
        ],
      },
      {
        heading: "Personal account risk: CRS is not a tax charge",
        headingZh: "个人账户风险：CRS 不是征税规则",
        body: [
          "CRS is an information exchange and reporting framework. It does not decide whether a person owes tax on a bank balance, securities account, dividend, interest or share gain.",
          "However, exchanged information can create a review trail. If tax residence, address, TIN, controlling-person information and account activity do not match the underlying facts, tax authorities or financial institutions may ask further questions.",
        ],
        bodyZh: [
          "CRS 是信息交换和报告框架，不决定个人是否因银行余额、证券账户、股息、利息或股票收益而纳税。",
          "但被交换的信息会形成复核线索。如果税务居民、地址、税号、控制人信息和账户活动与底层事实不一致，税务机关或金融机构可能进一步询问。",
        ],
      },
      {
        heading: "CARF and amended CRS timeline",
        headingZh: "CARF 与 amended CRS 时间线",
        body: [
          "IRD separately states that the Inland Revenue (Amendment) (Crypto-Asset Reporting Framework and Amended Common Reporting Standard) Bill 2026 was gazetted on 22 May 2026.",
          "Subject to passage, legislative amendments concerning CARF and amended CRS are expected to be implemented from 1 January 2027 and 1 January 2028 respectively. The amended CRS materials refer to new digital financial products, additional reporting requirements and refined due diligence requirements.",
        ],
        bodyZh: [
          "IRD 另行说明，《2026 年税务（修订）（加密资产申报框架及经修订共同汇报标准）条例草案》于 2026 年 5 月 22 日刊宪。",
          "在草案通过的前提下，CARF 和 amended CRS 相关修订预计分别自 2027 年 1 月 1 日和 2028 年 1 月 1 日起实施。amended CRS 资料提到新增数字金融产品、额外报告要求和尽职调查要求细化。",
        ],
      },
      {
        heading: "Common mistakes",
        headingZh: "常见错误",
        body: [
          "A common mistake is assuming every Hong Kong company must register. The registration requirement targets reporting financial institutions, so entity classification comes first.",
          "Another mistake is assuming a non-RFI has no CRS exposure. Passive NFEs and controlling-person reporting can still bring the entity into a bank's due diligence workflow.",
          "A third mistake is treating CRS exchange as automatic tax liability. CRS provides information; the tax result still depends on the relevant jurisdiction's tax law and facts.",
        ],
        bodyZh: [
          "常见错误之一，是认为所有香港公司都必须登记。登记要求针对申报财务机构，因此第一步是实体分类。",
          "另一个错误，是认为非 RFI 就没有 CRS 风险。消极 NFE 和控制人报告仍可能使实体进入银行尽职调查流程。",
          "第三个错误，是把 CRS 信息交换等同于自动产生税负。CRS 提供信息，税务结果仍取决于相关司法辖区税法和事实。",
        ],
      },
      {
        heading: "Professional insight",
        headingZh: "专业实务建议",
        body: [
          "For families or groups with Hong Kong entities, offshore companies, trusts, funds or Malta residence planning, create a cross-border AEOI matrix before 2027.",
          "The matrix should include entity classification, account holders, controlling persons, tax residences, TINs, addresses, RFI registration status, BIR80 filing position, nil reporting logic and record-retention owner.",
        ],
        bodyZh: [
          "对于同时存在香港实体、离岸公司、信托、基金或马耳他居留规划的家庭或集团，建议在 2027 年前建立跨境 AEOI 矩阵。",
          "矩阵应包括实体分类、账户持有人、控制人、税务居民、税号、地址、RFI 登记状态、BIR80 申报状态、零申报逻辑和留档负责人。",
        ],
      },
    ],
    faqs: [
      {
        q: "Does Hong Kong's 2027 AEOI change make every company register?",
        qZh: "香港 2027 AEOI 变化是否要求所有公司登记？",
        a: "No. IRD describes mandatory registration for reporting financial institutions. Ordinary operating companies still need entity classification before any conclusion is reached.",
        aZh: "不是。IRD 描述的是申报财务机构强制登记。普通经营公司仍需先做实体分类，才能得出结论。",
      },
      {
        q: "What is the 31 March 2027 date?",
        qZh: "2027 年 3 月 31 日是什么日期？",
        a: "IRD states that existing reporting financial institutions in Hong Kong that remain unregistered are required to register in the AEOI Portal by 31 March 2027.",
        aZh: "IRD 表示，香港现有但尚未登记的申报财务机构，需要在 2027 年 3 月 31 日前于 AEOI Portal 登记。",
      },
      {
        q: "How long should RFIs keep AEOI records?",
        qZh: "RFI 应保留 AEOI 记录多久？",
        a: "IRD states that sufficient records should be kept for six years after the due date of BIR80, even if the RFI later ceases to be an RFI or is dissolved.",
        aZh: "IRD 表示，应在 BIR80 到期日后保留足够记录六年，即使该 RFI 后来不再属于 RFI 或已经解散。",
      },
      {
        q: "Does CRS information exchange automatically mean tax is due?",
        qZh: "CRS 信息交换是否自动意味着需要补税？",
        a: "No. CRS is an information reporting framework. Whether tax is due depends on the tax law and facts of the relevant jurisdiction.",
        aZh: "不是。CRS 是信息报告框架。是否产生税款，取决于相关司法辖区的税法和事实。",
      },
      {
        q: "Why should Malta planning care about Hong Kong CRS?",
        qZh: "马耳他规划为什么需要关注香港 CRS？",
        a: "Because Hong Kong entities, bank accounts, trusts, investment vehicles and controlling persons may connect to Malta residence, tax-residence and CRS self-certification narratives. The evidence should be consistent.",
        aZh: "因为香港实体、银行账户、信托、投资工具和控制人，可能与马耳他居留、税务居民和 CRS 自证叙事相连接。证据应保持一致。",
      },
    ],
    references: [
      { label: "Hong Kong IRD - Automatic Exchange of Financial Account Information", href: "https://www.ird.gov.hk/eng/tax/dta_aeoi.htm", type: "Primary source" },
      {
        label: "Hong Kong IRD - Inland Revenue (Amendment) (Automatic Exchange of Information) Bill 2026",
        href: "https://www.ird.gov.hk/eng/tax/aeoi/bill_2026.htm",
        type: "Primary source",
      },
      {
        label: "Hong Kong IRD - Crypto-Asset Reporting Framework and Amended Common Reporting Standard Bill 2026",
        href: "https://www.ird.gov.hk/eng/tax/aeoi/crs_bill_2026.htm",
        type: "Primary source",
      },
      { label: "Hong Kong Inland Revenue Ordinance, Cap. 112", href: "https://www.elegislation.gov.hk/hk/cap112", type: "Primary source" },
      { label: "OECD - Common Reporting Standard", href: "https://www.oecd.org/tax/automatic-exchange/common-reporting-standard/", type: "Primary source" },
      {
        label: "Source intake: 香港CRS修例落地：2027年3类合规风险升级",
        href: "https://mp.weixin.qq.com/s/coCf9GS1yc3btVhNP5fRcw",
        type: "Source intake",
      },
    ],
  },
  {
    slug: "hong-kong-malta-mprp-tax-residence-guide",
    category: "hong-kong-malta",
    title: "Hong Kong, Malta MPRP and Tax Residence: Stock Gains, CRS and Evidence Controls",
    titleZh: "香港、马耳他 MPRP 与税务居民：股票收益、CRS 与证据控制",
    seoTitle: "Hong Kong and Malta MPRP Tax Residence Guide: Stock Gains, CRS and Tie-Breaker Risks",
    seoTitleZh: "香港与马耳他 MPRP 税务居民指南：股票收益、CRS 与居民冲突风险",
    metaDescription:
      "A practical guide for Hong Kong and Malta MPRP planning covering tax residence, stock gains, CRS self-certification, Malta tax residence, China connections and evidence controls.",
    metaDescriptionZh:
      "面向香港与马耳他 MPRP 规划的实务指南，涵盖税务居民、股票收益、CRS 自证、马耳他税务居民、中国关联和证据控制。",
    keywords: [
      "Hong Kong Malta tax residence",
      "MPRP tax residence",
      "Hong Kong stock gains tax",
      "CRS self certification",
      "Malta tax residence",
      "China Hong Kong Malta tax",
    ],
    keywordsZh: ["香港马耳他税务居民", "MPRP 税务居民", "香港股票收益税", "CRS 自证", "马耳他税务居民", "中国香港马耳他税务"],
    summary:
      "A Hong Kong identity, Malta MPRP status or Malta tax number does not by itself decide tax residence. Stock-gain planning should start from actual facts: where the person lives, where investment decisions are made, where accounts are held, how CRS self-certifications are completed and whether more than one jurisdiction can claim residence.",
    summaryZh:
      "香港身份、马耳他 MPRP 身份或马耳他税号，本身都不能单独决定税务居民身份。股票收益规划应从真实事实开始：人在何处生活、投资决策在哪里作出、账户在哪里持有、CRS 自证如何填写，以及是否有多个司法辖区可能主张居民身份。",
    updated: "2026-06-25",
    readTime: "9 min read",
    status: "published",
    sections: [
      {
        heading: "Direct answer",
        headingZh: "直接答案",
        body: [
          "For a new Hong Kong resident who also holds or applies for Malta MPRP, tax residence cannot be decided by the residence card, tax number or bank account alone.",
          "The practical analysis should compare Hong Kong, Malta and any China-side facts separately, then check CRS self-certification, double-tax-treaty residence conflict rules and evidence consistency before taking a position on stock gains.",
        ],
        bodyZh: [
          "对于同时拥有香港身份并申请或持有马耳他 MPRP 的人士，税务居民不能只凭居留卡、税号或银行账户判断。",
          "实务分析应分别比较香港、马耳他以及任何中国侧事实，再复核 CRS 自证、税收协定居民冲突规则和证据一致性，之后才能判断股票收益相关立场。",
        ],
      },
      {
        heading: "Legal requirement vs best practice",
        headingZh: "法律要求与实务建议",
        body: [
          "Legal requirement: tax residence and taxation of investment income should be checked under the domestic law of each relevant jurisdiction, applicable tax treaties and CRS reporting rules. A Malta immigration status is not the same as a Malta tax-residence conclusion.",
          "Best practice: prepare one residence-evidence matrix covering days of presence, home, family, employment or business control, investment decision location, bank accounts, CRS self-certifications, tax numbers and tax filings.",
        ],
        bodyZh: [
          "法律要求：税务居民和投资收益征税，应结合每个相关司法辖区的国内法、适用税收协定和 CRS 报告规则核查。马耳他移民身份不等于马耳他税务居民结论。",
          "实务建议：准备一份居民身份证据矩阵，覆盖停留天数、住所、家庭、雇佣或业务控制、投资决策地点、银行账户、CRS 自证、税号和税务申报。",
        ],
      },
      {
        heading: "Hong Kong: stock gains and residence are separate questions",
        headingZh: "香港：股票收益与居民身份是不同问题",
        body: [
          "Hong Kong applies a territorial tax system. Capital gains are generally outside profits tax, but gains that are in substance trading profits may be treated differently depending on facts.",
          "A person seeking Hong Kong residence support should not rely only on an identity document. The facts around ordinary residence, days in Hong Kong, business activity, investment decision-making and tax filings should be consistent.",
        ],
        bodyZh: [
          "香港采用地域来源税制。资本收益通常不属于利得税范围，但如果收益实质上属于证券买卖业务利润，则可能根据事实被不同处理。",
          "希望以香港居民身份支持税务立场的人士，不应只依赖身份证明。通常居住、在港天数、业务活动、投资决策和税务申报等事实应保持一致。",
        ],
      },
      {
        heading: "Malta: MPRP is not a tax-residence shortcut",
        headingZh: "马耳他：MPRP 不是税务居民捷径",
        body: [
          "MPRP is an immigration residence programme. It can be relevant evidence for a Malta connection, but it does not automatically make a person Malta tax resident and does not automatically determine the taxation of foreign investment gains.",
          "Malta tax analysis should separately consider residence, domicile, remittance, source of income, capital gains, days of presence, family facts, banking and whether income or gains are brought into Malta.",
        ],
        bodyZh: [
          "MPRP 是移民居留计划。它可以成为马耳他联系的相关证据，但不会自动使个人成为马耳他税务居民，也不会自动决定境外投资收益如何征税。",
          "马耳他税务分析应单独考虑居民身份、domicile、汇入、收入来源、资本收益、停留天数、家庭事实、银行安排，以及收入或收益是否汇入马耳他。",
        ],
      },
      {
        heading: "China-side residence risk cannot be ignored",
        headingZh: "中国侧税务居民风险不能忽视",
        body: [
          "Where the individual still has strong China-side ties, such as habitual abode, family, business management, assets or economic interests, China-side tax residence analysis may remain relevant.",
          "A Hong Kong account, Malta tax number or foreign residence card does not by itself settle whether another jurisdiction will treat the person as tax resident under its own rules.",
        ],
        bodyZh: [
          "如果个人仍有强中国侧联系，例如惯常居所、家庭、业务管理、资产或经济利益，中国侧税务居民分析仍可能相关。",
          "香港账户、马耳他税号或境外居留卡，本身不能决定其他司法辖区是否会按照自身规则认定该人为税务居民。",
        ],
      },
      {
        heading: "CRS self-certification is an evidence trail",
        headingZh: "CRS 自证是一条证据链",
        body: [
          "Under CRS, financial institutions collect self-certifications about tax residence, tax identification numbers, address and controlling persons, then report relevant financial account information through the applicable exchange framework.",
          "The risk is not simply that information is exchanged. The risk is inconsistent self-certification: one story for the bank, another for a tax authority and a third story for immigration or residence planning.",
        ],
        bodyZh: [
          "在 CRS 下，金融机构会收集关于税务居民、税号、地址和控制人的自证信息，并通过适用交换框架报告相关金融账户信息。",
          "风险不只是信息会被交换。真正风险是不一致自证：向银行说一套，向税务机关说另一套，移民或居留规划又是第三套。",
        ],
      },
      {
        heading: "Treaty tie-breaker is not a choice menu",
        headingZh: "协定居民冲突规则不是自由选择菜单",
        body: [
          "If more than one jurisdiction treats the individual as tax resident, a tax treaty may contain tie-breaker rules such as permanent home, centre of vital interests, habitual abode, nationality and mutual agreement procedure.",
          "These rules are fact-based conflict rules. They are not a tool for choosing the lowest-tax location after the fact.",
        ],
        bodyZh: [
          "如果多个司法辖区都认定个人为税务居民，税收协定可能包含居民冲突规则，例如永久性住所、重要利益中心、习惯性居所、国籍和主管当局协商程序。",
          "这些规则是基于事实的冲突规则，不是事后选择最低税地的工具。",
        ],
      },
      {
        heading: "Stock gains: questions to document",
        headingZh: "股票收益：应记录的问题",
        body: [
          "For stock gains, the evidence file should record whether gains are passive capital gains or trading-style income, where the investment decisions are made, who controls the account, where funds originate and where proceeds are remitted.",
          "It should also record whether dividends, interest, derivative income, carried interest, employment-related equity or company share disposals are involved, because each item may have a different tax analysis.",
        ],
        bodyZh: [
          "对于股票收益，证据资料包应记录收益是被动资本收益还是类似交易业务收入、投资决策在哪里作出、账户由谁控制、资金来源在哪里以及收益汇入何处。",
          "还应记录是否涉及股息、利息、衍生品收入、与雇佣相关的股权收益或公司股权转让，因为每项收入可能有不同税务分析。",
        ],
      },
      {
        heading: "Common mistakes",
        headingZh: "常见错误",
        body: [
          "A common mistake is assuming that a tax identification number proves tax residence. It usually proves registration or reporting identity, not the full residence conclusion.",
          "Another mistake is using MPRP as the main tax answer. MPRP may support a residence story only if the real living, family, banking and tax facts support it.",
          "A third mistake is ignoring investment behaviour. Frequent, organised and financed share dealing may be analysed differently from long-term passive investing.",
        ],
        bodyZh: [
          "常见错误之一，是认为税号证明税务居民身份。税号通常证明登记或报告身份，不等于完整居民结论。",
          "另一个错误，是把 MPRP 当成主要税务答案。只有真实生活、家庭、银行和税务事实支持时，MPRP 才可能支持居民叙事。",
          "第三个错误，是忽略投资行为本身。频繁、有组织、带融资的证券买卖，可能与长期被动投资有不同分析。",
        ],
      },
      {
        heading: "Professional insight",
        headingZh: "专业实务建议",
        body: [
          "For Hong Kong and Malta planning, start with a 12-month and 24-month fact calendar: days, homes, family, board or investment decisions, bank accounts, remittances, tax filings and CRS self-certifications.",
          "Only after the facts are mapped should the adviser compare Hong Kong, Malta and China-side tax positions for stock gains. A low-tax story without evidence is fragile under CRS.",
        ],
        bodyZh: [
          "做香港与马耳他规划时，应先建立 12 个月和 24 个月事实日历：停留天数、住所、家庭、董事会或投资决策、银行账户、汇入、税务申报和 CRS 自证。",
          "只有事实梳理后，顾问才应比较香港、马耳他和中国侧关于股票收益的税务位置。没有证据支持的低税故事，在 CRS 下很脆弱。",
        ],
      },
    ],
    faqs: [
      {
        q: "Does a Malta MPRP card make someone Malta tax resident?",
        qZh: "马耳他 MPRP 卡会让个人自动成为马耳他税务居民吗？",
        a: "No. MPRP is an immigration residence status. Malta tax residence requires separate analysis of facts such as presence, residence, domicile, remittance and economic connections.",
        aZh: "不会。MPRP 是移民居留身份。马耳他税务居民需要根据停留、居住、domicile、汇入和经济联系等事实单独分析。",
      },
      {
        q: "Does a Hong Kong identity document prove Hong Kong tax residence?",
        qZh: "香港身份证明是否证明香港税务居民身份？",
        a: "Not by itself. Hong Kong tax residence support depends on facts such as ordinary residence, days of presence, business or employment activity and the relevant tax context.",
        aZh: "单独不能证明。香港税务居民支持取决于通常居住、停留天数、业务或雇佣活动以及相关税务背景等事实。",
      },
      {
        q: "Are stock gains always tax-free in Hong Kong?",
        qZh: "股票收益在香港是否一定免税？",
        a: "No. Capital gains are generally outside profits tax, but gains that amount to trading profits may be analysed differently based on the facts.",
        aZh: "不一定。资本收益通常不属于利得税范围，但如果收益实质上构成交易业务利润，可能会根据事实被不同分析。",
      },
      {
        q: "Can CRS be solved by choosing one tax residence on a form?",
        qZh: "CRS 能通过表格上选择一个税务居民地解决吗？",
        a: "No. CRS self-certification should match the underlying facts. Inconsistent forms, addresses, TINs and account evidence create review risk.",
        aZh: "不能。CRS 自证应与底层事实一致。表格、地址、税号和账户证据不一致，会产生复核风险。",
      },
      {
        q: "What should be reviewed before deciding between Hong Kong and Malta?",
        qZh: "在香港和马耳他之间判断前应复核什么？",
        a: "Review days of presence, home, family, investment decision location, account ownership, source of funds, remittances, tax filings, CRS forms and any China-side residence risk.",
        aZh: "应复核停留天数、住所、家庭、投资决策地点、账户所有权、资金来源、汇入、税务申报、CRS 表格以及任何中国侧税务居民风险。",
      },
    ],
    references: [
      { label: "Hong Kong Inland Revenue Department - Individual Tax", href: "https://www.ird.gov.hk/eng/tax/ind.htm", type: "Primary source" },
      { label: "Hong Kong Inland Revenue Department - Profits Tax", href: "https://www.ird.gov.hk/eng/tax/bus_pft.htm", type: "Primary source" },
      { label: "Hong Kong Inland Revenue Ordinance, Cap. 112", href: "https://www.elegislation.gov.hk/hk/cap112", type: "Primary source" },
      { label: "OECD - Common Reporting Standard", href: "https://www.oecd.org/tax/automatic-exchange/common-reporting-standard/", type: "Primary source" },
      { label: "Income Tax Act, Chapter 123", href: "https://legislation.mt/eli/cap/123/eng", type: "Primary source" },
      { label: "Residency Malta Agency - Malta Permanent Residence Programme", href: "https://residencymalta.gov.mt/legal-framework-mprp-2/", type: "Primary source" },
      {
        label: "Source intake: 新香港人+MPRP：股票收益税务居民怎么判",
        href: "https://mp.weixin.qq.com/s/iGyKXhSUIea62ETJX1n8dQ",
        type: "Source intake",
      },
    ],
  },
  {
    slug: "hong-kong-malta-cross-border-services-guide",
    category: "hong-kong-malta",
    title: "Hong Kong and Malta Cross-border Services Guide: Company, Tax, VAT and Accounting Controls",
    titleZh: "香港与马耳他跨境服务指南：公司、税务、VAT 与会计控制",
    seoTitle: "Hong Kong and Malta Cross-border Services Guide: Company Setup, Tax, VAT and Accounting",
    seoTitleZh: "香港与马耳他跨境服务指南：公司设立、税务、VAT 与会计",
    metaDescription:
      "A practical Hong Kong and Malta cross-border services guide covering company roles, tax review, VAT, accounting records, banking, contracts and governance controls.",
    metaDescriptionZh:
      "实务角度解释香港与马耳他跨境服务安排，包括公司角色、税务复核、VAT、会计记录、银行、合同和治理控制。",
    keywords: [
      "Hong Kong Malta company services",
      "Hong Kong Malta tax",
      "Malta company Hong Kong",
      "cross-border accounting Malta Hong Kong",
      "Hong Kong Malta structuring",
    ],
    keywordsZh: ["香港马耳他公司服务", "香港马耳他税务", "马耳他公司香港", "香港马耳他跨境会计", "香港马耳他架构"],
    summary:
      "Hong Kong and Malta structures should clearly define each entity's role, tax position, accounting evidence, VAT exposure, contract flow, bank flow and governance responsibilities.",
    summaryZh:
      "香港与马耳他架构应清楚定义每个实体的角色、税务位置、会计证据、VAT 风险、合同流、银行流和治理责任。",
    updated: "2026-06-25",
    readTime: "8 min read",
    status: "published",
    sections: [
      {
        heading: "Direct answer",
        headingZh: "直接答案",
        body: [
          "Hong Kong and Malta can appear in the same cross-border structure, but each company must have a documented commercial role. A Hong Kong company, a Malta company and any China-side entity should not be treated as interchangeable invoicing vehicles.",
          "The practical review should cover company law, profits or income tax, VAT, accounting records, bank requirements, contracts, management decisions and any group recharge or service flow.",
        ],
        bodyZh: [
          "香港和马耳他可以出现在同一个跨境架构中，但每家公司都必须有记录清楚的商业角色。香港公司、马耳他公司和中国侧实体不应被当成可随意互换的开票工具。",
          "实务复核应覆盖公司法、利得税或所得税、VAT、会计记录、银行要求、合同、管理决策，以及任何集团分摊或服务流。",
        ],
      },
      {
        heading: "Legal requirement vs best practice",
        headingZh: "法律要求与实务建议",
        body: [
          "Legal requirement: Hong Kong obligations should be checked against the Companies Ordinance, Inland Revenue Department guidance and company-specific facts. Malta obligations should be checked against Companies Act, Income Tax Act, VAT Act and MBR or MTCA requirements.",
          "Best practice: maintain one cross-border structure file that shows entity roles, contracts, invoice flow, bank flow, tax assumptions, accounting owners and annual filing obligations in both jurisdictions.",
        ],
        bodyZh: [
          "法律要求：香港义务应结合《Companies Ordinance》、香港税务局指引和公司具体事实核查；马耳他义务应结合《Companies Act》、《Income Tax Act》、《VAT Act》以及 MBR 或 MTCA 要求核查。",
          "实务建议：维护一份跨境架构资料包，说明两地实体角色、合同、发票流、银行流、税务假设、会计负责人和年度申报义务。",
        ],
      },
      {
        heading: "Entity role and contract flow",
        headingZh: "实体角色与合同流",
        body: [
          "Start by defining what each entity does. For example, Hong Kong may handle regional sales, banking or shareholder coordination, while Malta may handle EU operations, services, holding activity, payroll or VAT-relevant transactions.",
          "Contracts should match the actual service delivery, people, decision-making and payment flow. If one entity signs contracts while another performs the work, the arrangement should be documented and priced consistently.",
        ],
        bodyZh: [
          "首先定义每个实体实际做什么。例如，香港可能处理区域销售、银行或股东协调；马耳他可能处理欧盟运营、服务、控股、薪资或与 VAT 相关的交易。",
          "合同应匹配实际服务交付、人员、决策和付款流。如果一个实体签合同，另一个实体执行工作，该安排应留档并保持定价一致。",
        ],
      },
      {
        heading: "Tax, VAT and accounting review",
        headingZh: "税务、VAT 与会计复核",
        body: [
          "Hong Kong profits tax and Malta income tax should be reviewed separately because each jurisdiction applies its own rules to source, residence, deductions, related-party transactions and records.",
          "VAT is usually a Malta and EU question, not a Hong Kong profits tax question. A Hong Kong-facing contract may still create Malta VAT analysis if the Malta entity provides or receives services.",
        ],
        bodyZh: [
          "香港利得税和马耳他所得税应分别复核，因为两地分别按照自身规则判断来源、居民身份、扣除、关联交易和记录。",
          "VAT 通常是马耳他和欧盟问题，不是香港利得税问题。即使合同面向香港，如果马耳他实体提供或接收服务，仍可能触发马耳他 VAT 分析。",
        ],
      },
      {
        heading: "Banking, payments and evidence",
        headingZh: "银行、付款与证据",
        body: [
          "Banks may ask why a Hong Kong company, Malta company or China-side entity is involved in a transaction. The group should be able to explain the ownership chain, business activity, source of funds and expected payment flow.",
          "Keep contracts, invoices, bank statements, board approvals, service evidence, accounting reconciliations and management explanations for unusual movements.",
        ],
        bodyZh: [
          "银行可能询问香港公司、马耳他公司或中国侧实体为何参与某项交易。集团应能够解释所有权链条、业务活动、资金来源和预期付款流。",
          "应保存合同、发票、银行流水、董事会批准、服务证据、会计核对和异常变动的管理层解释。",
        ],
      },
      {
        heading: "Common mistakes",
        headingZh: "常见错误",
        body: [
          "A common mistake is choosing between Hong Kong and Malta only by tax headline, without checking contract flow, VAT, accounting evidence, banking and substance.",
          "Another mistake is moving revenue between entities without updating contracts, invoices, transfer pricing support, VAT analysis and accounting records.",
        ],
        bodyZh: [
          "常见错误之一，是只根据表面税务结果选择香港或马耳他，却没有复核合同流、VAT、会计证据、银行和实质。",
          "另一个错误，是在没有同步更新合同、发票、转让定价支持、VAT 分析和会计记录的情况下，在实体之间移动收入。",
        ],
      },
      {
        heading: "Professional insight",
        headingZh: "专业实务建议",
        body: [
          "For groups using both Hong Kong and Malta, prepare a jurisdiction matrix with one row per entity and columns for role, directors, bank accounts, contracts, customers, suppliers, employees, VAT status, tax filings and accounting owner.",
          "This matrix should be reviewed whenever the group adds a new market, changes invoicing, hires staff, changes bank accounts or shifts functions between entities.",
        ],
        bodyZh: [
          "对于同时使用香港和马耳他的集团，建议准备一份司法辖区矩阵：每个实体一行，列明角色、董事、银行账户、合同、客户、供应商、员工、VAT 状态、税务申报和会计负责人。",
          "当集团新增市场、改变开票方式、雇佣员工、变更银行账户或在实体之间转移功能时，都应复核该矩阵。",
        ],
      },
    ],
    faqs: [
      {
        q: "Should a group use Hong Kong or Malta for invoicing?",
        qZh: "集团应使用香港还是马耳他开票？",
        a: "The answer depends on contract terms, service delivery, customer location, VAT exposure, bank flow, tax analysis and accounting evidence. It should not be decided only by convenience.",
        aZh: "答案取决于合同条款、服务交付、客户所在地、VAT 风险、银行流、税务分析和会计证据，不应只按便利性决定。",
      },
      {
        q: "Does Hong Kong tax analysis replace Malta VAT review?",
        qZh: "香港税务分析可以替代马耳他 VAT 复核吗？",
        a: "No. Hong Kong profits tax and Malta VAT are separate questions. A transaction can require review in both jurisdictions.",
        aZh: "不能。香港利得税和马耳他 VAT 是不同问题，同一交易可能需要在两个司法辖区分别复核。",
      },
      {
        q: "What records support a Hong Kong and Malta structure?",
        qZh: "哪些记录可以支持香港与马耳他架构？",
        a: "Common records include ownership charts, board minutes, contracts, invoices, payment evidence, service delivery proof, accounting reconciliations and tax working papers.",
        aZh: "常见记录包括所有权结构图、董事会记录、合同、发票、付款证据、服务交付证明、会计核对和税务工作底稿。",
      },
      {
        q: "When should the structure be reviewed?",
        qZh: "什么时候应复核架构？",
        a: "Review it before launch and whenever contracts, payment flows, staff, customers, suppliers, functions or ownership change materially.",
        aZh: "应在实施前复核，并在合同、付款流、员工、客户、供应商、功能或所有权发生重大变化时复核。",
      },
    ],
    references: [
      { label: "Hong Kong Companies Registry", href: "https://www.cr.gov.hk/", type: "Primary source" },
      { label: "Hong Kong Companies Ordinance, Cap. 622", href: "https://www.elegislation.gov.hk/hk/cap622", type: "Primary source" },
      { label: "Hong Kong Inland Revenue Department - Businesses", href: "https://www.ird.gov.hk/eng/tax/bus.htm", type: "Primary source" },
      { label: "Companies Act, Chapter 386", href: "https://legislation.mt/eli/cap/386/eng", type: "Primary source" },
      { label: "Income Tax Act, Chapter 123", href: "https://legislation.mt/eli/cap/123/eng", type: "Primary source" },
      { label: "Value Added Tax Act, Chapter 406", href: "https://legislation.mt/eli/cap/406/eng", type: "Primary source" },
    ],
  },
  {
    slug: "malta-nomad-residence-permit-guide",
    category: "residency-immigration",
    title: "Malta Nomad Residence Permit Guide: Eligibility, Tax, CRS and Planning Risks",
    titleZh: "马耳他数字游民居留许可指南：资格、税务、CRS 与规划风险",
    seoTitle: "Malta Nomad Residence Permit Guide: Eligibility, Income, Tax Rules and CRS Risks",
    seoTitleZh: "马耳他数字游民居留许可指南：资格、收入、税务规则与 CRS 风险",
    metaDescription:
      "A practical Malta Nomad Residence Permit guide covering eligibility, remote-work income, application evidence, tax treatment, CRS risk and comparison with MPRP.",
    metaDescriptionZh:
      "实务角度解释马耳他数字游民居留许可，包括资格、远程工作收入、申请证据、税务处理、CRS 风险以及与 MPRP 的区别。",
    keywords: [
      "Malta Nomad Residence Permit",
      "Malta NRP",
      "Malta digital nomad visa",
      "Malta remote worker residence",
      "Malta nomad tax",
      "CRS Malta nomad",
    ],
    keywordsZh: ["马耳他数字游民签证", "马耳他 NRP", "马耳他 Nomad Residence Permit", "马耳他远程工作居留", "马耳他数字游民税务", "CRS 马耳他"],
    summary:
      "Malta's Nomad Residence Permit is a temporary residence route for eligible third-country nationals who can work remotely for clients or employers outside Malta. It should not be marketed as permanent residence, tax migration or a CRS solution without separate legal and tax review.",
    summaryZh:
      "马耳他 Nomad Residence Permit 是面向符合条件、可为马耳他境外雇主或客户远程工作的第三国国民的临时居留路径。它不应被宣传成永久居留、税务迁移或 CRS 解决方案，除非另行完成法律和税务复核。",
    updated: "2026-06-25",
    readTime: "9 min read",
    status: "published",
    sections: [
      {
        heading: "Direct answer",
        headingZh: "直接答案",
        body: [
          "The Malta Nomad Residence Permit allows eligible third-country nationals to reside in Malta while working remotely for employers, businesses or clients established outside Malta.",
          "It is not the same as the Malta Permanent Residence Programme. NRP is a temporary remote-work residence route, while MPRP is a separate permanent-residence programme with property, contribution, asset and due-diligence requirements.",
        ],
        bodyZh: [
          "马耳他 Nomad Residence Permit 允许符合条件的第三国国民在马耳他居住，同时为设立在马耳他境外的雇主、业务或客户远程工作。",
          "它不等同于 Malta Permanent Residence Programme。NRP 是临时远程工作居留路径；MPRP 是独立永久居留计划，涉及房产、贡献金、资产和尽职调查要求。",
        ],
      },
      {
        heading: "Legal requirement vs best practice",
        headingZh: "法律要求与实务建议",
        body: [
          "Legal requirement: eligibility should be checked against Residency Malta's Nomad Residence Permit guidance, the official checklist and applicable tax rules such as S.L. 123.210 where relevant.",
          "Best practice: prepare one evidence file covering remote-work contracts, overseas clients or employer, income proof, health insurance, accommodation, police certificate where required, travel documents and tax-residence assumptions.",
        ],
        bodyZh: [
          "法律要求：资格应结合 Residency Malta 的 Nomad Residence Permit 指引、官方 checklist，以及适用时的 S.L. 123.210 等税务规则核查。",
          "实务建议：准备一个证据资料包，覆盖远程工作合同、境外客户或雇主、收入证明、健康保险、住宿、适用时的无犯罪记录、旅行证件和税务居民假设。",
        ],
      },
      {
        heading: "Who the NRP is designed for",
        headingZh: "NRP 面向哪些人",
        body: [
          "Residency Malta presents the NRP for people who can work remotely using telecommunications technology and who are not nationals of the EU, EEA or Switzerland.",
          "The applicant must generally show that the work is performed for an employer registered outside Malta, a company or business activity registered outside Malta, or freelance or consulting clients mainly outside Malta.",
        ],
        bodyZh: [
          "Residency Malta 将 NRP 定位为面向能够使用通信技术远程工作，且不是欧盟、欧洲经济区或瑞士国民的人士。",
          "申请人通常需要证明其工作是为注册在马耳他境外的雇主、注册在马耳他境外的公司或业务，或主要位于马耳他境外的自由职业/顾问客户提供。",
        ],
      },
      {
        heading: "Income and document evidence",
        headingZh: "收入与文件证据",
        body: [
          "Residency Malta's official materials state a gross annual income requirement of EUR 42,000. This should be evidenced through reliable income records rather than only a bank balance.",
          "The practical file should reconcile contracts, invoices, payslips or business records, bank statements and tax records. If the income pattern is irregular, the explanation should be prepared before filing.",
        ],
        bodyZh: [
          "Residency Malta 官方资料显示，总年收入要求为 42,000 欧元。该要求应通过可靠收入记录证明，而不是只展示银行余额。",
          "实务资料包应核对合同、发票、工资单或业务记录、银行流水和税务记录。如果收入模式不稳定，应在递交前准备解释。",
        ],
      },
      {
        heading: "NRP vs MPRP",
        headingZh: "NRP 与 MPRP 的区别",
        body: [
          "NRP is generally useful for remote workers who need a Malta residence base while continuing overseas work. MPRP is designed for eligible families seeking permanent residence subject to investment, property and due-diligence requirements.",
          "Residency Malta notes that NRP does not lead to MPRP, long-term residence or citizenship. A person may assess another route later, but that should be treated as a separate application and eligibility review.",
        ],
        bodyZh: [
          "NRP 通常适合需要马耳他居住基地、同时继续从事境外远程工作的人士。MPRP 则面向符合条件、希望取得永久居留且满足投资、房产和尽职调查要求的家庭。",
          "Residency Malta 明确 NRP 不通向 MPRP、长期居留或国籍。个人未来可以评估其他路径，但应作为独立申请和资格复核处理。",
        ],
      },
      {
        heading: "Tax treatment should not be oversimplified",
        headingZh: "税务处理不能简单化",
        body: [
          "Malta has specific rules for qualifying employment income from authorised work under the Nomad Residence Permit framework. However, the tax outcome is not a generic automatic tax holiday for all income.",
          "Applicants should separately review whether S.L. 123.210 applies, whether income is authorised work, whether other income exists, and how tax residence or reporting obligations arise in Malta and other jurisdictions.",
        ],
        bodyZh: [
          "马耳他对 Nomad Residence Permit 框架下的合资格授权工作收入设有特定规则。但税务结果并不是所有收入自动享受通用免税期。",
          "申请人应单独复核 S.L. 123.210 是否适用、收入是否属于授权工作、是否存在其他收入，以及马耳他和其他司法辖区如何产生税务居民或报告义务。",
        ],
      },
      {
        heading: "CRS and original tax residence risk",
        headingZh: "CRS 与原税务居民风险",
        body: [
          "Holding an NRP, obtaining a Malta address or opening a Malta bank account does not automatically remove tax residence in another country.",
          "For China or Hong Kong connected applicants, CRS and tax-residence analysis should review family location, habitual abode, days of presence, business control, bank accounts, company ownership and investment income.",
        ],
        bodyZh: [
          "持有 NRP、取得马耳他地址或开设马耳他银行账户，并不会自动消除其他国家或地区的税务居民身份。",
          "对于与中国或香港有关联的申请人，CRS 和税务居民分析应复核家庭所在地、惯常居所、停留天数、业务控制、银行账户、公司所有权和投资收入。",
        ],
      },
      {
        heading: "Application process and timing",
        headingZh: "申请流程与时间安排",
        body: [
          "A realistic process starts with eligibility screening, then document preparation, online application, Agency review, approval-stage requirements such as accommodation or insurance where applicable, and residence-card formalities.",
          "Do not build the timetable only around a target travel date. Build it around document readiness, income evidence, police or civil documents, accommodation planning, insurance and tax advice.",
        ],
        bodyZh: [
          "现实流程通常从资格预筛开始，然后是文件准备、线上申请、Agency 复核、适用时的住宿或保险等批准阶段要求，以及居留卡手续。",
          "不要只围绕目标出行日期安排时间表。应围绕文件准备、收入证据、无犯罪或民事文件、住宿安排、保险和税务建议安排。",
        ],
      },
      {
        heading: "Common mistakes",
        headingZh: "常见错误",
        body: [
          "A common mistake is describing NRP as a low-cost EU identity route. It is a temporary Malta residence permit for remote work, not an EU passport, permanent residence or tax-residence guarantee.",
          "Another mistake is using only account balance to prove income. The Agency needs to understand the work activity and income source.",
          "A third mistake is assuming Malta tax registration solves CRS issues. CRS and tax residence require separate analysis based on all relevant jurisdictions.",
        ],
        bodyZh: [
          "常见错误之一，是把 NRP 描述成低成本欧洲身份路径。它是面向远程工作的马耳他临时居留许可，不是欧盟护照、永久居留或税务居民保证。",
          "另一个错误，是只用账户余额证明收入。Agency 需要理解工作活动和收入来源。",
          "第三个错误，是认为马耳他税务登记可以解决 CRS 问题。CRS 和税务居民需要结合所有相关司法辖区单独分析。",
        ],
      },
      {
        heading: "Professional insight",
        headingZh: "专业实务建议",
        body: [
          "For remote entrepreneurs, consultants and cross-border professionals, the NRP decision should be documented in a short memo: work model, client geography, income proof, Malta living plan, tax assumptions and CRS exposure.",
          "If the applicant may later consider MPRP, keep the NRP file clean and consistent. Source-of-funds, family records, tax explanations and bank evidence may later become relevant to a separate permanent-residence review.",
        ],
        bodyZh: [
          "对于远程创业者、顾问和跨境专业人士，NRP 决策应写成简短备忘录：工作模式、客户所在地、收入证明、马耳他生活计划、税务假设和 CRS 风险。",
          "如果申请人未来可能考虑 MPRP，应保持 NRP 资料清晰一致。资金来源、家庭记录、税务解释和银行证据，日后可能会影响独立的永久居留评估。",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the Malta Nomad Residence Permit?",
        qZh: "什么是马耳他 Nomad Residence Permit？",
        a: "It is a temporary residence route for eligible third-country nationals who can live in Malta while working remotely for employers, businesses or clients outside Malta.",
        aZh: "它是面向符合条件的第三国国民的临时居留路径，允许其在马耳他居住，同时为马耳他境外雇主、业务或客户远程工作。",
      },
      {
        q: "Does NRP lead to permanent residence or citizenship?",
        qZh: "NRP 会通向永久居留或国籍吗？",
        a: "No. Residency Malta states that NRP does not lead to MPRP, long-term residence or citizenship. Other routes require separate assessment.",
        aZh: "不会。Residency Malta 表示 NRP 不通向 MPRP、长期居留或国籍。其他路径需要单独评估。",
      },
      {
        q: "Is EUR 42,000 the current income figure?",
        qZh: "42,000 欧元是当前收入要求吗？",
        a: "Residency Malta's official NRP materials state a EUR 42,000 gross annual income requirement. Applicants should verify the current checklist before filing.",
        aZh: "Residency Malta 官方 NRP 资料显示总年收入要求为 42,000 欧元。申请人应在递交前复核当前 checklist。",
      },
      {
        q: "Does NRP automatically create a 10% tax outcome?",
        qZh: "NRP 会自动产生 10% 税务结果吗？",
        a: "No. Malta has specific rules for qualifying authorised work, but tax treatment depends on the facts, income type, S.L. 123.210 and tax residence analysis.",
        aZh: "不会自动产生。马耳他对合资格授权工作设有特定规则，但税务处理取决于事实、收入类型、S.L. 123.210 和税务居民分析。",
      },
      {
        q: "Can NRP solve CRS reporting issues?",
        qZh: "NRP 能解决 CRS 申报问题吗？",
        a: "No. A Malta residence permit or bank account does not automatically remove tax residence elsewhere. CRS should be reviewed separately.",
        aZh: "不能。马耳他居留许可或银行账户不会自动消除其他地区的税务居民身份。CRS 应单独复核。",
      },
    ],
    references: [
      { label: "Residency Malta Agency - Nomad Residence Permit", href: "https://nomad.residencymalta.gov.mt/", type: "Primary source" },
      { label: "Residency Malta Agency - Nomad Residence Permit Eligibility", href: "https://nomad.residencymalta.gov.mt/eligibility/", type: "Primary source" },
      { label: "Residency Malta Agency - Nomad Residence Permit FAQs", href: "https://nomad.residencymalta.gov.mt/new-faqs/", type: "Primary source" },
      { label: "Nomad Residence Permits (Income Tax) Rules, S.L. 123.210", href: "https://legislation.mt/eli/sl/123.210/eng", type: "Primary source" },
      { label: "Immigration Act, Chapter 217", href: "https://legislation.mt/eli/cap/217/eng", type: "Primary source" },
      {
        label: "Source intake: 降维打击！马耳他数字游民签证(NRP)全解",
        href: "https://mp.weixin.qq.com/s/cb7Xl2ZWLWKBecQF5IvfUw",
        type: "Source intake",
      },
    ],
  },
  {
    slug: "malta-mrvp-to-mprp-evolution-guide",
    category: "residency-immigration",
    title: "Malta MRVP to MPRP Guide: Policy Evolution, Current Rules and Applicant Risk",
    titleZh: "马耳他从 MRVP 到 MPRP 指南：政策演变、现行规则与申请风险",
    seoTitle: "Malta MRVP to MPRP: Policy Evolution, 2025 Rules, Due Diligence and Planning Risks",
    seoTitleZh: "马耳他从 MRVP 到 MPRP：政策演变、2025 规则、尽职调查与规划风险",
    metaDescription:
      "A practical guide comparing Malta's MRVP-era residence framework with the current MPRP rules, covering policy evolution, 2025 requirements, due diligence and applicant risk controls.",
    metaDescriptionZh:
      "实务角度比较马耳他 MRVP 时代居留框架与当前 MPRP 规则，涵盖政策演变、2025 要求、尽职调查和申请人风险控制。",
    keywords: [
      "Malta MRVP",
      "Malta MPRP",
      "MRVP to MPRP",
      "Malta permanent residence programme",
      "MPRP 2025 rules",
      "Malta residency policy",
    ],
    keywordsZh: ["马耳他 MRVP", "马耳他 MPRP", "MRVP 到 MPRP", "马耳他永久居留计划", "MPRP 2025 规则", "马耳他居留政策"],
    summary:
      "Malta's residence-by-investment framework has moved from MRVP-era assumptions to the current MPRP model. The practical issue for applicants is not whether the door is open in general, but whether they can meet today's evidence, property, contribution, asset and due-diligence standards.",
    summaryZh:
      "马耳他投资居留框架已经从 MRVP 时代的假设，发展到当前 MPRP 模式。对申请人而言，实务问题不是笼统地说门是否还开着，而是能否满足今天的证据、房产、贡献金、资产和尽职调查标准。",
    updated: "2026-06-25",
    readTime: "9 min read",
    status: "published",
    sections: [
      {
        heading: "Direct answer",
        headingZh: "直接答案",
        body: [
          "MRVP and MPRP should not be treated as the same programme with a different name. MRVP belongs to an earlier Malta residence framework, while current applicants should assess the Malta Permanent Residence Programme under the current S.L. 217.26 rules and Residency Malta guidance.",
          "The key policy direction is more precise screening: applicants must demonstrate eligibility, lawful wealth, qualifying property, required fees and contributions, reliable family evidence and continuing compliance after approval.",
        ],
        bodyZh: [
          "MRVP 和 MPRP 不应被视为同一项目换了名称。MRVP 属于较早期的马耳他居留框架，而当前申请人应按照现行 S.L. 217.26 规则和 Residency Malta 指引评估 Malta Permanent Residence Programme。",
          "核心政策方向是更精细的筛选：申请人必须证明资格、合法财富、合资格房产、所需费用和贡献金、可靠家庭证据，以及获批后的持续合规。",
        ],
      },
      {
        heading: "Legal requirement vs best practice",
        headingZh: "法律要求与实务建议",
        body: [
          "Legal requirement: current applications should be checked against the Malta Permanent Residence Programme Regulations, S.L. 217.26, as amended, and the latest Residency Malta Agency requirements. Historical MRVP materials should not be used as current application rules.",
          "Best practice: use MRVP history only to understand policy direction. For a real application, prepare a current-law checklist covering eligibility, dependants, property, fees, asset tests, due diligence and post-approval monitoring.",
        ],
        bodyZh: [
          "法律要求：当前申请应结合经修订的《Malta Permanent Residence Programme Regulations, S.L. 217.26》和 Residency Malta Agency 最新要求核查。历史 MRVP 资料不应作为当前申请规则使用。",
          "实务建议：MRVP 历史只能用于理解政策方向。真实申请应准备现行法清单，覆盖资格、家属、房产、费用、资产测试、尽职调查和获批后监控。",
        ],
      },
      {
        heading: "What changed from MRVP-era thinking",
        headingZh: "MRVP 时代思路发生了什么变化",
        body: [
          "The MRVP-era narrative often focused on a relatively simple investment route. Current MPRP analysis is broader: it combines property, contribution, administration fees, donation, eligibility, dependants and multi-layer due diligence.",
          "For applicants, this means the question is no longer only whether the budget is available. The Agency must also be satisfied with identity, background, source of wealth, source of funds, family dependency and public-interest factors.",
        ],
        bodyZh: [
          "MRVP 时代的叙事通常更偏向相对简单的投资路径。当前 MPRP 分析更广，结合房产、贡献金、行政费、捐款、资格、家属和多层尽职调查。",
          "对申请人而言，问题不再只是预算是否足够。Agency 还需要对身份、背景、财富来源、资金来源、家庭依赖关系和公共利益因素满意。",
        ],
      },
      {
        heading: "Current MPRP cost and property framework",
        headingZh: "当前 MPRP 成本与房产框架",
        body: [
          "Under the 2025 amended MPRP rules, the qualifying owned property threshold is EUR 375,000 and the qualifying rented property threshold is EUR 14,000 per annum for property in Malta or Gozo.",
          "The current framework states a EUR 60,000 non-refundable administration fee for the main applicant, a EUR 37,000 contribution for the main applicant, and a EUR 2,000 donation before certificate issuance. Certain dependants may trigger additional administration fees.",
          "These figures show why older MRVP or early MPRP cost comparisons need updating before any client-facing advice is given.",
        ],
        bodyZh: [
          "根据 2025 年修订后的 MPRP 规则，位于马耳他或戈佐的合资格购置房产门槛为 375,000 欧元，合资格租赁房产年租金门槛为 14,000 欧元。",
          "当前框架规定主申请人不可退还行政费为 60,000 欧元，主申请人贡献金为 37,000 欧元，并需在证书签发前完成 2,000 欧元捐款。某些家属可能触发额外行政费。",
          "这些数字说明，在向客户提供建议前，旧 MRVP 或早期 MPRP 成本比较必须更新。",
        ],
      },
      {
        heading: "From price threshold to evidence threshold",
        headingZh: "从价格门槛到证据门槛",
        body: [
          "The current programme contains an explicit asset test and a due-diligence framework. Applicants should expect questions about how wealth was built, how funds move, whether records are consistent and whether any adverse information exists.",
          "The practical threshold is therefore not only financial. A high-net-worth applicant with weak records may face more difficulty than a well-documented applicant with a clearer family and wealth profile.",
        ],
        bodyZh: [
          "当前计划包含明确资产测试和尽职调查框架。申请人应预期需要解释财富如何形成、资金如何流动、记录是否一致，以及是否存在不利信息。",
          "因此，实务门槛不只是资金门槛。记录薄弱的高净值申请人，可能比家庭和财富画像清晰、文件完整的申请人面临更大困难。",
        ],
      },
      {
        heading: "Family inclusion is not only a counting exercise",
        headingZh: "家属纳入不是简单加人数",
        body: [
          "MPRP can include dependants, but family inclusion should be documented carefully. Dependency, age, relationship, civil status and supporting records may all matter.",
          "Where parents, grandparents or adult children are included, the file should explain why they qualify and how financial dependency is evidenced. A broad family plan without supporting documents is a risk.",
        ],
        bodyZh: [
          "MPRP 可以纳入家属，但家属纳入应谨慎留档。经济依赖、年龄、关系、婚姻状态和支持文件都可能重要。",
          "如果纳入父母、祖父母或成年子女，资料包应解释他们为何符合条件，以及如何证明经济依赖。没有支持文件的宽泛家庭方案存在风险。",
        ],
      },
      {
        heading: "Policy pressure and what can be said safely",
        headingZh: "政策压力与可稳妥表达的结论",
        body: [
          "It is reasonable to say that residence-by-investment programmes across Europe face more public, policy and due-diligence scrutiny than before. It is not responsible to promise that any future change will happen on a specific timetable.",
          "A defensible advisory position is to act on current law, keep evidence ready, avoid exaggerated urgency claims and review official notices before every application decision.",
        ],
        bodyZh: [
          "可以稳妥地说，欧洲投资居留项目比过去面临更多公共政策和尽职调查审视。但不应承诺未来某项变化会在特定时间发生。",
          "稳健的顾问立场，是基于当前法律行动，提前准备证据，避免夸大紧迫性，并在每次申请决策前复核官方通知。",
        ],
      },
      {
        heading: "Tax residence remains a separate question",
        headingZh: "税务居民仍是单独问题",
        body: [
          "The move from MRVP to MPRP does not change a basic principle: immigration residence and tax residence are separate analyses.",
          "A family using MPRP for mobility, education or contingency planning should separately review days of presence, domicile, remittance, business management, foreign companies, CRS reporting and bank explanations.",
        ],
        bodyZh: [
          "从 MRVP 到 MPRP 的变化，并不改变一个基本原则：移民居留和税务居民是不同分析。",
          "使用 MPRP 做出行、教育或备用规划的家庭，应单独复核停留天数、domicile、汇入、业务管理、境外公司、CRS 报告和银行解释。",
        ],
      },
      {
        heading: "Common mistakes",
        headingZh: "常见错误",
        body: [
          "A common mistake is comparing old MRVP figures with current MPRP requirements without updating legal sources.",
          "Another mistake is assuming a programme is easier because one number looks lower. A lower headline number may be offset by stricter evidence, property, dependant or monitoring requirements.",
          "A third mistake is treating policy commentary as legal advice. Forecasts about tightening should be separated from current statutory requirements.",
        ],
        bodyZh: [
          "常见错误之一，是用旧 MRVP 数字与当前 MPRP 要求比较，却没有更新法律来源。",
          "另一个错误，是因为某个表面数字较低，就认为项目更容易。较低的表面数字可能被更严格的证据、房产、家属或监控要求抵消。",
          "第三个错误，是把政策评论当成法律建议。关于收紧趋势的判断，应与当前法定要求分开。",
        ],
      },
      {
        heading: "Professional insight",
        headingZh: "专业实务建议",
        body: [
          "The most useful way to explain MRVP to MPRP is with a current-law decision file: current eligibility, official costs, property route, family inclusion, evidence gaps, tax assumptions, banking questions and post-approval compliance.",
          "For China and Hong Kong families, the file should also show how the Malta residence plan fits with wealth documentation, overseas investment, bank due diligence, CRS exposure and family education or relocation plans.",
        ],
        bodyZh: [
          "解释 MRVP 到 MPRP 的最有效方式，是建立一份现行法决策资料包：当前资格、官方成本、房产路径、家属纳入、证据缺口、税务假设、银行问题和获批后合规。",
          "对于中国和香港家庭，该资料包还应说明马耳他居留计划如何与财富文件、海外投资、银行尽职调查、CRS 风险以及家庭教育或搬迁计划衔接。",
        ],
      },
    ],
    faqs: [
      {
        q: "Is MRVP still the rule for new Malta permanent residence applications?",
        qZh: "新申请马耳他永居还适用 MRVP 规则吗？",
        a: "No. New applicants should assess the current Malta Permanent Residence Programme under S.L. 217.26 and Residency Malta guidance, not older MRVP-era materials.",
        aZh: "不应如此。新申请人应按照当前 S.L. 217.26 和 Residency Malta 指引评估 Malta Permanent Residence Programme，而不是使用旧 MRVP 时代资料。",
      },
      {
        q: "Did MPRP become easier or harder than MRVP?",
        qZh: "MPRP 比 MRVP 更容易还是更难？",
        a: "It is not a simple easier-or-harder comparison. Some cost structures changed, but current MPRP analysis places more emphasis on evidence, due diligence, property and ongoing compliance.",
        aZh: "不能简单说更容易或更难。某些成本结构发生变化，但当前 MPRP 分析更强调证据、尽职调查、房产和持续合规。",
      },
      {
        q: "Can old MRVP articles be used for current planning?",
        qZh: "旧 MRVP 文章可以用于当前规划吗？",
        a: "Only as background. Current planning should rely on Residency Malta, S.L. 217.26, current legal notices and the applicant's actual facts.",
        aZh: "只能作为背景。当前规划应以 Residency Malta、S.L. 217.26、当前法律公告和申请人的实际事实为依据。",
      },
      {
        q: "What is the main lesson from MRVP to MPRP?",
        qZh: "从 MRVP 到 MPRP 的主要启示是什么？",
        a: "The main lesson is that Malta residence planning should be evidence-led. Applicants should document wealth, family dependency, property, tax assumptions and post-approval compliance before applying.",
        aZh: "主要启示是马耳他居留规划应以证据为核心。申请前应整理财富、家庭依赖、房产、税务假设和获批后合规资料。",
      },
      {
        q: "Does MPRP give Maltese citizenship?",
        qZh: "MPRP 会给马耳他国籍吗？",
        a: "No. MPRP is a permanent residence programme. Citizenship, tax residence and immigration residence are separate legal questions.",
        aZh: "不会。MPRP 是永久居留计划。国籍、税务居民和移民居留是不同法律问题。",
      },
    ],
    references: [
      { label: "Residency Malta Agency - Malta Permanent Residence Programme", href: "https://residencymalta.gov.mt/legal-framework-mprp-2/", type: "Primary source" },
      {
        label: "Malta Permanent Residence Programme Regulations, S.L. 217.26, as amended by L.N. 310 of 2024 and L.N. 146 of 2025",
        href: "https://residencymalta.gov.mt/wp-content/uploads/2025/08/S.L.217.26-Amended-by-LN-310-of-2024_-LN-146-of-2025.pdf",
        type: "Primary source",
      },
      { label: "Malta Residence and Visa Programme Regulations, S.L. 217.18", href: "https://legislation.mt/eli/sl/217.18/eng", type: "Primary source" },
      { label: "Immigration Act, Chapter 217", href: "https://legislation.mt/eli/cap/217/eng", type: "Primary source" },
      {
        label: "Source intake: 马耳他永居十年变局：从MRVP到MPRP",
        href: "https://mp.weixin.qq.com/s/FEgTg6WcfcryL5V80gaCMg",
        type: "Source intake",
      },
    ],
  },
  {
    slug: "malta-mprp-2025-changes-guide",
    category: "residency-immigration",
    title: "Malta MPRP 2025 Changes Guide: Fees, Property Thresholds and Planning Risks",
    titleZh: "马耳他 MPRP 2025 政策变化指南：费用、房产门槛与规划风险",
    seoTitle: "Malta MPRP 2025 Changes: Fees, Property Thresholds, Assets and Planning Risks",
    seoTitleZh: "马耳他 MPRP 2025 政策变化：费用、房产门槛、资产要求与规划风险",
    metaDescription:
      "A practical guide to the 2025 Malta MPRP changes covering official fees, property thresholds, asset tests, family planning, tax assumptions and compliance risks.",
    metaDescriptionZh:
      "实务角度解释 2025 年马耳他 MPRP 政策变化，包括官方费用、房产门槛、资产测试、家庭规划、税务假设和合规风险。",
    keywords: [
      "Malta MPRP 2025 changes",
      "MPRP fees 2025",
      "Malta permanent residence costs",
      "MPRP property threshold",
      "Malta residency planning",
      "Residency Malta 2025",
    ],
    keywordsZh: ["马耳他 MPRP 2025", "MPRP 费用", "马耳他永居费用", "MPRP 房产门槛", "马耳他身份规划", "Residency Malta 2025"],
    summary:
      "The 2025 MPRP amendments changed the economics of Malta permanent residence planning. The key issue is not whether the programme is still attractive in general, but whether a family can satisfy the current official requirements, document source of wealth and manage tax, banking and post-approval obligations.",
    summaryZh:
      "2025 年 MPRP 修订改变了马耳他永居规划的成本结构。关键问题不是笼统地说项目是否仍有吸引力，而是家庭能否满足当前官方要求，证明财富来源，并管理税务、银行和获批后的持续义务。",
    updated: "2026-06-25",
    readTime: "9 min read",
    status: "published",
    sections: [
      {
        heading: "Direct answer",
        headingZh: "直接答案",
        body: [
          "The 2025 MPRP changes should be analysed as a compliance and family-planning question, not only as a price increase. The current rules increased or reset important numbers around property, administration fees, contribution and asset evidence.",
          "For a family considering Malta permanent residence, the practical decision is whether the programme fits the family's mobility, education, asset-holding, banking, tax and long-term residence strategy after official fees and evidence requirements are fully costed.",
        ],
        bodyZh: [
          "2025 年 MPRP 变化应作为合规和家庭规划问题分析，而不只是“涨价”问题。当前规则对房产、行政费、贡献金和资产证明等关键数字进行了提高或重设。",
          "对于考虑马耳他永居的家庭，实务决策在于：在完整计算官方费用和证据要求后，该计划是否符合家庭的出行、教育、资产持有、银行、税务和长期居住策略。",
        ],
      },
      {
        heading: "Legal requirement vs best practice",
        headingZh: "法律要求与实务建议",
        body: [
          "Legal requirement: the current MPRP position should be checked against Residency Malta Agency guidance and the Malta Permanent Residence Programme Regulations, S.L. 217.26, as amended by Legal Notices 310 of 2024 and 146 of 2025.",
          "Best practice: treat cost comparisons as an advisory tool only. Before committing, prepare a written plan covering eligibility, family members, source of funds, asset evidence, property choice, tax assumptions, bank compliance and post-approval monitoring.",
        ],
        bodyZh: [
          "法律要求：当前 MPRP 状态应结合 Residency Malta Agency 指引，以及经 Legal Notices 310 of 2024 和 146 of 2025 修订的《Malta Permanent Residence Programme Regulations, S.L. 217.26》核查。",
          "实务建议：成本比较只能作为顾问工具。决定前，应准备书面方案，覆盖资格、家庭成员、资金来源、资产证明、房产选择、税务假设、银行合规和获批后监控。",
        ],
      },
      {
        heading: "What changed in 2025",
        headingZh: "2025 年改变了什么",
        body: [
          "The 2025 amended regulations show a single qualifying owned property threshold of EUR 375,000 for property in Malta or Gozo, and a qualifying rented property threshold of EUR 14,000 per annum.",
          "The current First Schedule sets a EUR 60,000 non-refundable administration fee for the main applicant, with EUR 15,000 payable within one month from submission and the remaining EUR 45,000 payable within two months from the Letter of Approval in Principle.",
          "The current contribution requirement is EUR 37,000 for the main applicant whether the qualifying property is owned or rented. The regulations also keep a EUR 2,000 donation requirement before certificate issuance.",
        ],
        bodyZh: [
          "2025 年修订后的法规显示，位于马耳他或戈佐的合资格购置房产统一门槛为 375,000 欧元，合资格租赁房产年租金门槛为 14,000 欧元。",
          "当前 First Schedule 规定，主申请人不可退还行政费为 60,000 欧元，其中 15,000 欧元需在提交后一个月内支付，其余 45,000 欧元需在原则批准函后两个月内支付。",
          "当前主申请人贡献金为 37,000 欧元，无论合资格房产是购置还是租赁。法规也保留证书签发前 2,000 欧元捐款要求。",
        ],
      },
      {
        heading: "Asset tests and evidence burden",
        headingZh: "资产测试与证据压力",
        body: [
          "The 2025 framework gives two asset-test routes: at least EUR 500,000 in assets with at least EUR 150,000 in financial assets, or at least EUR 650,000 in assets with at least EUR 75,000 in financial assets.",
          "This change matters because many families have wealth in property, operating businesses or private investments rather than only bankable financial assets. The question is whether the evidence is clear enough for Agency review, not only whether the headline value is sufficient.",
        ],
        bodyZh: [
          "2025 框架提供两种资产测试路径：至少 500,000 欧元资产且其中至少 150,000 欧元为金融资产；或至少 650,000 欧元资产且其中至少 75,000 欧元为金融资产。",
          "这项变化重要，是因为很多家庭财富集中在房产、经营企业或私募投资，而不只是银行或证券类金融资产。问题不只是名义价值是否足够，还包括证据是否足以通过 Agency 复核。",
        ],
      },
      {
        heading: "Purchase route vs rental route",
        headingZh: "购房路径与租房路径",
        body: [
          "The purchase route may appeal to families that want a long-term Malta base, a tangible asset and more control over housing. It also ties up capital and requires property selection, valuation, maintenance, tax and resale planning.",
          "The rental route may reduce real-estate concentration risk and preserve flexibility, but the family should model recurring rent, renewal uncertainty, landlord dependence and the need to maintain a qualifying property position.",
          "A simple 'purchase is better' or 'rent is cheaper' statement is not reliable without comparing the family's time horizon, liquidity, currency position, tax profile and actual use of Malta.",
        ],
        bodyZh: [
          "购房路径可能适合希望长期拥有马耳他基地、持有实物资产并更能控制住房安排的家庭。但它也会占用资本，并涉及选房、估值、维护、税务和转售规划。",
          "租房路径可能降低房地产集中风险并保留灵活性，但家庭应测算持续租金、续租不确定性、房东依赖以及维持合资格房产状态的要求。",
          "在没有比较家庭时间周期、流动性、币种、税务状况和实际使用马耳他的情况下，简单说“购房更好”或“租房更便宜”都不可靠。",
        ],
      },
      {
        heading: "Do not oversell tax residence",
        headingZh: "不要过度宣传税务居民",
        body: [
          "MPRP is an immigration residence programme. It does not automatically create Malta tax residence, remove tax residence elsewhere, or solve CRS reporting issues.",
          "Tax residence should be reviewed separately by reference to days of presence, family and economic ties, business management, investment income, company ownership and the tax rules of every relevant jurisdiction.",
        ],
        bodyZh: [
          "MPRP 是移民居留计划。它不会自动产生马耳他税务居民身份，也不会自动消除其他司法辖区的税务居民身份或解决 CRS 报告问题。",
          "税务居民应单独复核，考虑停留天数、家庭和经济联系、业务管理、投资收入、公司所有权以及所有相关司法辖区的税法规则。",
        ],
      },
      {
        heading: "Who may still find MPRP useful",
        headingZh: "哪些家庭可能仍然适合 MPRP",
        body: [
          "MPRP may still be useful for families seeking an EU permanent-residence option, Schengen mobility, a Malta base, education planning, international asset documentation and a stable residence alternative.",
          "It is less suitable where the family cannot document source of wealth, has unresolved adverse information, expects a guaranteed approval, or wants immigration residence to replace tax and banking advice.",
        ],
        bodyZh: [
          "MPRP 仍可能适合希望获得欧盟永久居留选择、申根通行便利、马耳他基地、教育规划、国际资产文件化和稳定居住备选的家庭。",
          "如果家庭无法证明财富来源、存在未解决不利信息、期待保证获批，或希望用移民居留替代税务和银行建议，则不适合轻率推进。",
        ],
      },
      {
        heading: "Common mistakes",
        headingZh: "常见错误",
        body: [
          "A common mistake is calculating only the government amounts while ignoring professional fees, translation, certification, property costs, insurance, bank evidence, tax advice and ongoing compliance.",
          "Another mistake is presenting MPRP as a tax shortcut. A residence card and tax-residence analysis are different matters.",
          "A third mistake is relying on urgency marketing. Policy risk is real, but the decision should be based on current law, family facts and evidence readiness rather than pressure alone.",
        ],
        bodyZh: [
          "常见错误之一，是只计算政府相关金额，却忽略专业费、翻译、公证认证、房产成本、保险、银行证明、税务建议和持续合规。",
          "另一个错误，是把 MPRP 宣传成税务捷径。居留卡和税务居民分析是不同事项。",
          "第三个错误，是依赖紧迫感营销。政策风险确实存在，但决策应基于当前法律、家庭事实和证据准备程度，而不是只基于压力。",
        ],
      },
      {
        heading: "Professional insight",
        headingZh: "专业实务建议",
        body: [
          "The best way to evaluate the 2025 MPRP changes is to prepare two scenarios: purchase and rental. Each scenario should include official costs, property cash flow, evidence burden, tax assumptions, banking documents, family use and exit planning.",
          "For China and Hong Kong families, the planning memo should also address CRS reporting, foreign bank account explanations, education timeline, company ownership, investment income and whether Malta will become a real centre of life or only a contingency residence.",
        ],
        bodyZh: [
          "评估 2025 MPRP 变化的最好方法，是准备购房和租房两个场景。每个场景都应包括官方成本、房产现金流、证据压力、税务假设、银行文件、家庭使用方式和退出规划。",
          "对于中国和香港家庭，规划备忘录还应处理 CRS 报告、境外银行账户解释、教育时间线、公司所有权、投资收入，以及马耳他是否会成为真实生活中心或只是备用居留地。",
        ],
      },
    ],
    faqs: [
      {
        q: "Did the Malta MPRP become more expensive in 2025?",
        qZh: "马耳他 MPRP 在 2025 年是否变贵了？",
        a: "Yes, key official figures changed under the amended regulations, including property thresholds and administration-fee mechanics. Applicants should use the current Residency Malta and S.L. 217.26 figures rather than older articles.",
        aZh: "是的。修订法规改变了关键官方数字，包括房产门槛和行政费安排。申请人应使用当前 Residency Malta 和 S.L. 217.26 数字，而不是旧文章。",
      },
      {
        q: "Is the purchase route always better than the rental route?",
        qZh: "购房路径一定比租房路径好吗？",
        a: "No. Purchase and rental routes should be compared based on time horizon, liquidity, property risk, actual Malta use, tax profile, banking evidence and exit planning.",
        aZh: "不一定。购房和租房应根据时间周期、流动性、房产风险、实际使用马耳他的程度、税务情况、银行证据和退出规划比较。",
      },
      {
        q: "Does MPRP solve CRS or tax residence issues?",
        qZh: "MPRP 能解决 CRS 或税务居民问题吗？",
        a: "No. MPRP is an immigration residence programme. CRS reporting and tax residence need separate advice based on facts and the rules of all relevant jurisdictions.",
        aZh: "不能。MPRP 是移民居留计划。CRS 报告和税务居民需要结合事实和所有相关司法辖区规则单独分析。",
      },
      {
        q: "What should a family prepare before applying?",
        qZh: "家庭申请前应准备什么？",
        a: "Prepare a source-of-wealth file, asset evidence, family documents, residence history, police certificates where required, property scenario, tax assumptions, bank explanations and a post-approval compliance calendar.",
        aZh: "应准备财富来源资料、资产证明、家庭文件、居住历史、适用时的无犯罪记录、房产方案、税务假设、银行解释和获批后合规日历。",
      },
      {
        q: "Can approval be guaranteed if the budget is available?",
        qZh: "预算足够是否就能保证获批？",
        a: "No. The programme includes due diligence and Agency discretion. Budget is only one part of the application; evidence quality and eligibility facts are central.",
        aZh: "不能。该计划包含尽职调查和 Agency 裁量。预算只是申请的一部分，证据质量和资格事实才是核心。",
      },
    ],
    references: [
      { label: "Residency Malta Agency - Malta Permanent Residence Programme", href: "https://residencymalta.gov.mt/legal-framework-mprp-2/", type: "Primary source" },
      {
        label: "Malta Permanent Residence Programme Regulations, S.L. 217.26, as amended by L.N. 310 of 2024 and L.N. 146 of 2025",
        href: "https://residencymalta.gov.mt/wp-content/uploads/2025/08/S.L.217.26-Amended-by-LN-310-of-2024_-LN-146-of-2025.pdf",
        type: "Primary source",
      },
      { label: "Immigration Act, Chapter 217", href: "https://legislation.mt/eli/cap/217/eng", type: "Primary source" },
      {
        label: "Source intake: 马耳他永居MPRP：2025政策涨价后仍是欧洲性价比最高之选",
        href: "https://mp.weixin.qq.com/s/e4y6g0opydQ4LjrHw-UXcQ",
        type: "Source intake",
      },
    ],
  },
  {
    slug: "malta-real-estate-market-residency-investment-guide",
    category: "residency-immigration",
    title: "Malta Real Estate, Residency and Investment Guide: Property, Rental, AIP and Tax Checks",
    titleZh: "马耳他房产、身份与投资指南：购房、租赁、AIP 与税务核查",
    seoTitle: "Malta Real Estate Guide: Residency Property, Rental Yield, AIP Permit and Tax Checks",
    seoTitleZh: "马耳他房产投资指南：身份规划、租金回报、AIP 许可与税务核查",
    metaDescription:
      "A practical Malta real estate guide for residency and investment planning, covering NSO market data, MPRP property use, AIP permits, rental licensing, tax checks and due diligence.",
    metaDescriptionZh:
      "面向身份规划与投资决策的马耳他房产实务指南，涵盖 NSO 市场数据、MPRP 房产安排、AIP 许可、出租许可、税务核查与尽职调查。",
    keywords: [
      "Malta real estate",
      "Malta property investment",
      "Malta MPRP property",
      "Malta AIP permit",
      "Malta rental yield",
      "Malta property tax",
      "Malta property due diligence",
    ],
    keywordsZh: [
      "马耳他房产",
      "马耳他房产投资",
      "马耳他 MPRP 房产",
      "马耳他 AIP 许可",
      "马耳他租金回报",
      "马耳他房产税务",
      "马耳他房产尽职调查",
    ],
    summary:
      "Malta property can support lifestyle, residency and investment planning, but it should not be evaluated only through headline price growth or gross rental yield. A defensible decision needs official market data, legal-acquisition checks, rental licensing review, tax analysis, financing assumptions and an exit plan.",
    summaryZh:
      "马耳他房产可以服务生活、身份和投资规划，但不能只看涨幅标题或毛租金回报率。稳健决策需要结合官方市场数据、购房资格、出租许可、税务处理、融资假设和退出路径。",
    updated: "2026-06-26",
    readTime: "8 min read",
    status: "published",
    sections: [
      {
        heading: "Direct answer",
        headingZh: "直接答案",
        body: [
          "A Malta property decision should start with purpose: family use, MPRP or other residence planning, long-let income, short-let hospitality use, capital preservation, or operating-base support for a Malta company.",
          "The original market article highlights price growth and rental yield. Those ideas are useful as investor questions, but they should be converted into checks: official market data, net yield after costs, AIP status, title risk, rental licence position, tax and duty treatment, financing, vacancy and exit.",
        ],
        bodyZh: [
          "马耳他房产决策应先明确目的：家庭自用、MPRP 或其他居留规划、长期出租、短租旅游住宿、资产配置，还是配合马耳他公司运营基地。",
          "原文强调涨幅和租金回报，这些可以作为投资者问题，但不能直接写成确定收益。更稳健的做法是转化为核查清单：官方市场数据、扣除成本后的净回报、AIP 状态、产权风险、出租许可、税费处理、融资、空置和退出安排。",
        ],
      },
      {
        heading: "Legal requirement vs best practice",
        headingZh: "法律要求与实务建议",
        body: [
          "Legal requirement: non-resident buyers may need to review the Immovable Property (Acquisition by Non-Residents) Act, AIP permit rules, programme-specific residence requirements and applicable tax or duty rules before signing.",
          "Best practice: separate the immigration decision from the investment decision. A property can satisfy a residence programme requirement and still be a weak investment if the title, location, rental licence, cash flow or exit assumptions are poor.",
        ],
        bodyZh: [
          "法律要求：非居民买家在签约前应复核《Immovable Property (Acquisition by Non-Residents) Act》、AIP 许可规则、相关身份项目的房产要求，以及适用的税费规则。",
          "实务建议：身份决策和投资决策应分开判断。某套房产可能满足居留项目要求，但如果产权、位置、出租许可、现金流或退出假设较弱，仍然可能不是好投资。",
        ],
      },
      {
        heading: "Use official market data, not only marketing numbers",
        headingZh: "使用官方市场数据，而不是只看销售数字",
        body: [
          "The National Statistics Office publishes residential property transaction and price-index releases. These are useful indicators of transaction volume, registered value, locality activity and price movement, but they are not a guarantee that a specific property will appreciate.",
          "When a brochure says a market has risen or a yield is above a certain level, the investor should ask which data source, time period, property type, locality, tax assumptions and cost deductions were used.",
        ],
        bodyZh: [
          "National Statistics Office 发布住宅房产交易和价格指数资料，可用于观察成交量、登记金额、区域活跃度和价格变化，但这些数据并不保证某一套具体房产一定升值。",
          "当宣传材料声称市场上涨或租金回报超过某一水平时，投资者应追问数据来源、统计期间、房产类型、所在区域、税务假设和成本扣除口径。",
        ],
      },
      {
        heading: "Residency property is not the same as investment property",
        headingZh: "身份项目房产不等于投资房产",
        body: [
          "For MPRP and other Malta residence planning, the property route should be checked against the current official legal framework and programme guidance. Older articles may contain outdated thresholds or assumptions.",
          "A family should compare purchase and rental routes based on liquidity, expected Malta use, holding period, family needs, school or relocation plans, future sale risk and whether the property must be retained for programme compliance.",
        ],
        bodyZh: [
          "涉及 MPRP 或其他马耳他居留规划时，房产路径应以当前官方法律框架和项目指引为准。旧文章中的门槛或费用假设可能已经过时。",
          "家庭应从流动性、实际使用马耳他的程度、持有周期、家庭需求、教育或搬迁计划、未来出售风险，以及项目是否要求持续持有或租赁房产等角度比较购房和租房路径。",
        ],
      },
      {
        heading: "AIP, title and notarial due diligence",
        headingZh: "AIP、产权与公证尽职调查",
        body: [
          "Non-residents should check whether an AIP permit is required and whether any special designated area or exemption logic applies. This should be verified before relying on a sales agent's statement.",
          "A property file should include promise of sale terms, notarial searches, title history, planning permits, debts or hypothecs, ground rent, condominium obligations, utilities, access, defects, furniture list and completion timetable.",
        ],
        bodyZh: [
          "非居民应核查是否需要 AIP 许可，以及是否适用 special designated area 或其他例外安排。不能只依赖销售中介的口头说法。",
          "房产档案应包括预售协议条款、公证产权检索、产权历史、规划许可、债务或抵押、地租、共管义务、水电、通行权、瑕疵、家具清单和交割时间表。",
        ],
      },
      {
        heading: "Rental yield must be stress-tested",
        headingZh: "租金回报必须做压力测试",
        body: [
          "Gross rental yield is not net return. The model should deduct vacancy, maintenance, insurance, condominium costs, management fees, letting fees, financing costs, tax, compliance costs and possible licence expenses.",
          "Short-let and tourism accommodation use should be reviewed separately from long-let residential use. The Malta Tourism Authority licensing position and local rules can affect whether the expected rental strategy is lawful and practical.",
        ],
        bodyZh: [
          "毛租金回报不等于净收益。模型应扣除空置、维修、保险、共管费用、管理费、招租费、融资成本、税费、合规成本和可能的许可费用。",
          "短租和旅游住宿用途应与长期住宅出租分开核查。Malta Tourism Authority 的许可要求和本地规则，会影响预期出租策略是否合法、可执行。",
        ],
      },
      {
        heading: "Tax, duty and holding structure",
        headingZh: "税务、印花税与持有结构",
        body: [
          "Malta property tax treatment should not be reduced to a single headline rate. Disposal, rental income, duty on documents and transfers, company ownership, personal ownership, financing and cross-border reporting may all change the answer.",
          "For China or Hong Kong connected families, the property-holding structure should also be checked against source-of-funds evidence, CRS self-certification, beneficial ownership records, bank KYC and tax residence analysis.",
        ],
        bodyZh: [
          "马耳他房产税务不能简化成单一税率标题。出售、租金收入、文件和转让税、公司持有、个人持有、融资和跨境申报，都可能影响结论。",
          "对于与中国或香港相关的家庭，房产持有结构还应结合资金来源证据、CRS 自我证明、受益所有权记录、银行 KYC 和税务居民分析一起复核。",
        ],
      },
      {
        heading: "Professional insight",
        headingZh: "专业实务建议",
        body: [
          "Before signing a promise of sale, prepare a one-page property decision memo. It should state the purpose, buyer status, AIP position, residence-programme relevance, official data relied on, gross and net yield model, tax assumptions, licence needs, financing and exit plan.",
          "If the memo cannot explain why this property is suitable without using broad phrases such as high growth, scarce supply or guaranteed return, the investment case is probably not ready.",
        ],
        bodyZh: [
          "签署预售协议前，建议准备一页房产决策备忘录，说明购房目的、买方身份、AIP 状态、是否服务身份项目、采用的官方数据、毛回报和净回报模型、税务假设、许可需求、融资和退出计划。",
          "如果这份备忘录必须依赖“高增长”“稀缺”“稳收益”等宽泛表述才能成立，而无法用事实和数字解释为什么适合购买，说明投资论证还不充分。",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Malta real estate a guaranteed investment return?",
        qZh: "马耳他房产是否保证投资回报？",
        a: "No. Official market data can show transaction and price trends, but it does not guarantee appreciation or rental income for a specific property.",
        aZh: "不是。官方市场数据可以反映成交和价格趋势，但不能保证某一套房产升值或产生固定租金收入。",
      },
      {
        q: "Can MPRP applicants use any Malta property?",
        qZh: "MPRP 申请人是否可以使用任何马耳他房产？",
        a: "No. The property arrangement must be checked against the current Residency Malta legal framework and programme rules, including purchase or rental requirements and ongoing compliance.",
        aZh: "不能。房产安排必须按照当前 Residency Malta 法律框架和项目规则核查，包括购房或租房要求以及持续合规义务。",
      },
      {
        q: "Does a non-resident buyer need an AIP permit?",
        qZh: "非居民买家是否需要 AIP 许可？",
        a: "It depends on the buyer, property and exemption position. The Immovable Property (Acquisition by Non-Residents) Act and related procedure should be reviewed before signing.",
        aZh: "取决于买方身份、房产类型和是否适用例外。签约前应复核《Immovable Property (Acquisition by Non-Residents) Act》及相关流程。",
      },
      {
        q: "Is a 5% gross rental yield the same as net yield?",
        qZh: "5% 毛租金回报是否等于净回报？",
        a: "No. Net yield should deduct vacancy, maintenance, management, insurance, financing, tax, licence and other compliance costs.",
        aZh: "不是。净回报应扣除空置、维修、管理、保险、融资、税费、许可和其他合规成本。",
      },
      {
        q: "Should a property be held personally or through a company?",
        qZh: "房产应由个人持有还是公司持有？",
        a: "The answer depends on tax, financing, succession, beneficial ownership, accounting, CRS and exit considerations. The structure should be reviewed before acquisition.",
        aZh: "取决于税务、融资、传承、受益所有权、会计、CRS 和退出安排。持有结构应在购买前完成复核。",
      },
    ],
    references: [
      { label: "National Statistics Office Malta - Residential Property Transactions: May 2026", href: "https://nso.gov.mt/residential-property-transactions-may-2026/", type: "Primary source" },
      { label: "National Statistics Office Malta - Residential Property Price Index: Q4/2025", href: "https://nso.gov.mt/residential-property-price-index-q4-2025/", type: "Primary source" },
      { label: "Residency Malta Agency - Malta Permanent Residence Programme", href: "https://residencymalta.gov.mt/legal-framework-mprp-2/", type: "Primary source" },
      { label: "Immovable Property (Acquisition by Non-Residents) Act, Chapter 246", href: "https://legislation.mt/eli/cap/246/eng", type: "Primary source" },
      { label: "Income Tax Act, Chapter 123", href: "https://legislation.mt/eli/cap/123/eng", type: "Primary source" },
      { label: "Duty on Documents and Transfers Act, Chapter 364", href: "https://legislation.mt/eli/cap/364/eng", type: "Primary source" },
      { label: "Malta Tourism Authority - Licenses", href: "https://mta.com.mt/", type: "Primary source" },
      {
        label: "Source intake: 马耳他房产市场：五年涨7.4万欧租金回报5%+",
        href: "https://mp.weixin.qq.com/s/GvkT6JFYeve0e3AMahbxwQ",
        type: "Source intake",
      },
    ],
  },
  {
    slug: "malta-mprp-permanent-residence-guide",
    category: "residency-immigration",
    title: "Malta MPRP Guide: Permanent Residence Requirements, Costs and Compliance Controls",
    titleZh: "马耳他 MPRP 永居指南：申请要求、费用与合规控制",
    seoTitle: "Malta MPRP Guide: Permanent Residence Requirements, Costs, Property and Due Diligence",
    seoTitleZh: "马耳他 MPRP 永居指南：申请要求、费用、房产与尽职调查",
    metaDescription:
      "A practical Malta Permanent Residence Programme guide covering MPRP eligibility, 2025 official requirements, property, contribution, administration fees, due diligence and risk controls.",
    metaDescriptionZh:
      "实务角度解释马耳他永久居留计划 MPRP，包括资格、2025 官方要求、房产、贡献金、行政费、尽职调查和风险控制。",
    keywords: [
      "Malta MPRP",
      "Malta Permanent Residence Programme",
      "Malta permanent residence",
      "Residency Malta Agency",
      "Malta residency by investment",
      "MPRP requirements",
    ],
    keywordsZh: ["马耳他 MPRP", "马耳他永居", "马耳他永久居留计划", "Residency Malta Agency", "马耳他投资居留", "MPRP 申请要求"],
    summary:
      "The Malta Permanent Residence Programme is a residence-by-investment route for eligible non-EU, non-EEA and non-Swiss nationals. Because the MPRP rules were amended in 2024 and 2025, applicants should verify current requirements against Residency Malta and S.L. 217.26 before relying on older fee tables.",
    summaryZh:
      "马耳他永久居留计划 MPRP 是面向符合条件的非欧盟、非欧洲经济区、非瑞士国民的投资居留路径。由于 MPRP 规则已在 2024 和 2025 年修订，申请人不应依赖旧费用表，应以 Residency Malta 和 S.L. 217.26 当前版本为准。",
    updated: "2026-06-25",
    readTime: "9 min read",
    status: "published",
    sections: [
      {
        heading: "Direct answer",
        headingZh: "直接答案",
        body: [
          "The Malta Permanent Residence Programme, or MPRP, is managed by Residency Malta Agency and is designed for nationals of non-EU, non-EEA and non-Swiss countries seeking permanent residence in Malta.",
          "A practical MPRP assessment should cover eligibility, source of wealth, asset evidence, dependant structure, property route, contribution and administration fees, donation, health insurance, due diligence and long-term compliance after approval.",
        ],
        bodyZh: [
          "马耳他永久居留计划 MPRP 由 Residency Malta Agency 管理，面向希望取得马耳他永久居留的非欧盟、非欧洲经济区、非瑞士国民。",
          "实务上的 MPRP 评估应覆盖资格、财富来源、资产证明、家庭成员结构、房产路径、贡献金和行政费、捐款、健康保险、尽职调查以及获批后的长期合规。",
        ],
      },
      {
        heading: "Legal requirement vs best practice",
        headingZh: "法律要求与实务建议",
        body: [
          "Legal requirement: MPRP eligibility, fees, property and dependant treatment should be checked against Residency Malta Agency guidance and the Malta Permanent Residence Programme Regulations, S.L. 217.26, as amended.",
          "Best practice: prepare a bilingual pre-application file before engaging the process. It should reconcile family members, passports, residence history, police certificates, source of funds, asset evidence, property route and expected tax-residence questions.",
        ],
        bodyZh: [
          "法律要求：MPRP 的资格、费用、房产和随行家属处理，应结合 Residency Malta Agency 指引和经修订的《Malta Permanent Residence Programme Regulations, S.L. 217.26》核查。",
          "实务建议：启动前准备一份双语预评估资料包，核对家庭成员、护照、居住历史、无犯罪记录、资金来源、资产证明、房产路径和潜在税务居民问题。",
        ],
      },
      {
        heading: "What the official programme covers",
        headingZh: "官方计划覆盖什么",
        body: [
          "Residency Malta describes the MPRP as a residency-by-investment programme with four key components: property investment, a government contribution, a donation to an NGO and an administrative fee.",
          "The programme is not a simple real-estate purchase. It is an immigration and due-diligence process, and all included individuals are subject to checks before permanent residence rights are granted.",
        ],
        bodyZh: [
          "Residency Malta 将 MPRP 描述为投资居留计划，包含四个核心组成部分：房产安排、政府贡献金、向 NGO 捐款和行政费。",
          "该计划并不是简单买房项目，而是移民和尽职调查流程；所有纳入申请的人士都需要接受审查，才可能取得永久居留权。",
        ],
      },
      {
        heading: "Current official cost and asset points",
        headingZh: "当前官方费用与资产要点",
        body: [
          "Under the 2025 amended regulations, the qualifying owned property threshold is EUR 375,000 and the qualifying rented property threshold is EUR 14,000 per annum for property situated in Malta or Gozo.",
          "The regulations also provide an asset test: either at least EUR 500,000 in assets with at least EUR 150,000 in financial assets, or at least EUR 650,000 in assets with at least EUR 75,000 in financial assets, subject to the Agency's assessment.",
          "The current First Schedule states a EUR 60,000 non-refundable administration fee for the main applicant, a EUR 7,500 administration fee for certain dependants, and a EUR 37,000 contribution whether the qualifying property is owned or rented. A EUR 2,000 donation is also required before certificate issuance.",
        ],
        bodyZh: [
          "根据 2025 年修订后的法规，合资格购置房产门槛为 375,000 欧元；位于马耳他或戈佐的合资格租赁房产年租金门槛为 14,000 欧元。",
          "法规还规定资产测试：申请人需证明至少 500,000 欧元资产且其中至少 150,000 欧元为金融资产；或至少 650,000 欧元资产且其中至少 75,000 欧元为金融资产，具体由 Agency 评估。",
          "当前 First Schedule 规定主申请人不可退还行政费为 60,000 欧元，某些家属行政费为 7,500 欧元；无论购房或租房，主申请人贡献金均为 37,000 欧元。证书签发前还需完成 2,000 欧元捐款。",
        ],
      },
      {
        heading: "Application through a licensed agent",
        headingZh: "通过持牌代理提交申请",
        body: [
          "MPRP applications must be submitted through a licensed agent. The applicant should check the agent's status through the official Residency Malta register rather than relying only on marketing materials.",
          "A licensed agent requirement does not remove the applicant's responsibility to provide accurate documents, disclose relevant facts and respond to Agency requests.",
        ],
        bodyZh: [
          "MPRP 申请必须通过持牌代理提交。申请人应通过 Residency Malta 官方代理名册核查代理状态，而不应只依赖宣传材料。",
          "持牌代理要求并不免除申请人提供准确文件、披露相关事实和回应 Agency 要求的责任。",
        ],
      },
      {
        heading: "Due diligence and eligibility risks",
        headingZh: "尽职调查与资格风险",
        body: [
          "Residency Malta states that applications undergo a rigorous multi-tier due diligence process. The regulations also allow checks on the main applicant and dependants and include public-interest, sanctions, criminal-record and security-related eligibility criteria.",
          "Applicants should treat source-of-funds and source-of-wealth documentation as core evidence. Weak explanations, incomplete residence history, inconsistent family records or unresolved adverse information can delay or undermine an application.",
        ],
        bodyZh: [
          "Residency Malta 明确申请会经过严格的多层尽职调查。法规还允许对主申请人和家属进行审查，并包括公共利益、制裁、犯罪记录和安全相关资格标准。",
          "申请人应把资金来源和财富来源文件视为核心证据。解释薄弱、居住历史不完整、家庭记录不一致或不利信息未解决，都可能拖延或影响申请。",
        ],
      },
      {
        heading: "Rights and ongoing obligations",
        headingZh: "权利与持续义务",
        body: [
          "A certificate issued under the regulations gives the beneficiary and approved dependants the right to reside, settle or stay indefinitely in Malta, provided they continue to comply with programme obligations.",
          "The regulations also provide that the Agency monitors adherence annually for the first five years and may require further information. Property and capital requirements should therefore be managed after approval, not only during application.",
        ],
        bodyZh: [
          "根据法规签发的证书，使受益人和获批家属在持续遵守计划义务的前提下，有权在马耳他居住、定居或无限期停留。",
          "法规还规定 Agency 会在前五年每年监督合规情况，并可要求进一步资料。因此，房产和资产要求不只是申请阶段事项，获批后也需要管理。",
        ],
      },
      {
        heading: "Tax and business planning should be separate",
        headingZh: "税务与商业规划应单独判断",
        body: [
          "MPRP status does not automatically decide tax residence, company tax, VAT, payroll or foreign reporting issues. Immigration residence and tax residence are separate analyses.",
          "For China or Hong Kong families, pre-application planning should review days of presence, family location, investment income, company ownership, CRS reporting, bank compliance and any Malta company or property structure.",
        ],
        bodyZh: [
          "MPRP 身份不会自动决定税务居民身份、公司税、VAT、薪资或境外申报问题。移民居留和税务居民是不同分析。",
          "对于中国或香港家庭，申请前规划应复核停留天数、家庭所在地、投资收入、公司所有权、CRS 报告、银行合规，以及任何马耳他公司或房产架构。",
        ],
      },
      {
        heading: "Common mistakes",
        headingZh: "常见错误",
        body: [
          "A common mistake is relying on old MPRP fee tables. The programme was amended by legal notices in 2024 and 2025, so older articles may show outdated property thresholds or contribution figures.",
          "Another mistake is treating approval as guaranteed once the investment budget is available. Due diligence, document quality, eligibility facts and Agency discretion remain central.",
          "A third mistake is ignoring post-approval compliance. Property, capital, insurance, address and information requests should be tracked after the certificate is issued.",
        ],
        bodyZh: [
          "常见错误之一，是依赖旧版 MPRP 费用表。该计划已在 2024 和 2025 年通过法律公告修订，旧文章可能显示过时的房产门槛或贡献金额。",
          "另一个错误，是认为预算充足就等于必然获批。尽职调查、文件质量、资格事实和 Agency 裁量仍然是核心。",
          "第三个错误，是忽视获批后的合规。证书签发后，房产、资产、保险、地址和资料请求仍应持续跟踪。",
        ],
      },
      {
        heading: "Professional insight",
        headingZh: "专业实务建议",
        body: [
          "For high-net-worth families, MPRP should be reviewed together with tax residence, investment holding, family governance, banking, insurance, school or relocation plans and document retention.",
          "A defensible MPRP file should show not only that the applicant can pay the required amounts, but also that the wealth, family structure, property route and long-term compliance plan are coherent and supported by evidence.",
        ],
        bodyZh: [
          "对于高净值家庭，MPRP 应与税务居民、投资持有、家族治理、银行、保险、子女教育或搬迁计划和文件留存一起复核。",
          "一份稳健的 MPRP 资料包，不仅要证明申请人能支付相关金额，还要证明财富、家庭结构、房产路径和长期合规计划逻辑一致且有证据支持。",
        ],
      },
    ],
    faqs: [
      {
        q: "Who is the Malta MPRP designed for?",
        qZh: "马耳他 MPRP 面向哪些人？",
        a: "It is designed for eligible non-EU, non-EEA and non-Swiss nationals seeking permanent residence in Malta, subject to the official programme rules and due diligence.",
        aZh: "它面向希望取得马耳他永久居留且符合条件的非欧盟、非欧洲经济区、非瑞士国民，前提是满足官方计划规则和尽职调查要求。",
      },
      {
        q: "Are old MPRP cost figures still reliable?",
        qZh: "旧版 MPRP 费用数字还能直接相信吗？",
        a: "No. Older articles may be outdated. The current position should be checked against Residency Malta and S.L. 217.26 as amended by the latest legal notices.",
        aZh: "不能直接相信。旧文章可能已过时。当前要求应以 Residency Malta 和经最新法律公告修订的 S.L. 217.26 为准。",
      },
      {
        q: "Does MPRP automatically make someone tax resident in Malta?",
        qZh: "取得 MPRP 是否自动成为马耳他税务居民？",
        a: "No. Immigration residence and tax residence are separate analyses. Days of presence, family facts, income, business control and other circumstances may need tax review.",
        aZh: "不会自动等同。移民居留和税务居民是不同分析，停留天数、家庭事实、收入、业务控制和其他情况可能都需要税务复核。",
      },
      {
        q: "Can an applicant submit MPRP directly?",
        qZh: "申请人可以自行直接提交 MPRP 吗？",
        a: "The official framework requires applications to be submitted through a licensed agent. Applicants should verify the agent through the official Residency Malta register.",
        aZh: "官方框架要求通过持牌代理提交申请。申请人应通过 Residency Malta 官方名册核查代理资格。",
      },
      {
        q: "What is the main practical risk in an MPRP application?",
        qZh: "MPRP 申请中最主要的实务风险是什么？",
        a: "The main risk is weak evidence: unclear source of wealth, incomplete family or residence history, inconsistent documents, sanctions or adverse information, or a property plan that does not satisfy the current rules.",
        aZh: "主要风险是证据不足：财富来源不清、家庭或居住历史不完整、文件不一致、制裁或不利信息，或房产方案不符合当前规则。",
      },
    ],
    references: [
      { label: "Residency Malta Agency - Malta Permanent Residence Programme", href: "https://residencymalta.gov.mt/legal-framework-mprp-2/", type: "Primary source" },
      {
        label: "Malta Permanent Residence Programme Regulations, S.L. 217.26, as amended by L.N. 310 of 2024 and L.N. 146 of 2025",
        href: "https://residencymalta.gov.mt/wp-content/uploads/2025/08/S.L.217.26-Amended-by-LN-310-of-2024_-LN-146-of-2025.pdf",
        type: "Primary source",
      },
      { label: "Immigration Act, Chapter 217", href: "https://legislation.mt/eli/cap/217/eng", type: "Primary source" },
      {
        label: "Source intake: 马耳他永居MPRP",
        href: "https://mp.weixin.qq.com/s/UEa83rN6XqPQ_LsSfeqIbA",
        type: "Source intake",
      },
    ],
  },
  {
    slug: "malta-residency-immigration-planning-guide",
    category: "residency-immigration",
    title: "Malta Residency and Immigration Planning Guide: Permits, Business Setup and Compliance Controls",
    titleZh: "马耳他居留与身份规划指南：许可、商业设置与合规控制",
    seoTitle: "Malta Residency and Immigration Planning Guide: Residence Permits, Business, Tax and Compliance",
    seoTitleZh: "马耳他居留与身份规划指南：居留许可、商业、税务与合规",
    metaDescription:
      "A practical Malta residency and immigration planning guide covering residence documents, business setup, tax, payroll, evidence, renewals and risk controls.",
    metaDescriptionZh:
      "实务角度解释马耳他居留与身份规划，包括居留文件、商业设置、税务、薪资、证据、续签和风险控制。",
    keywords: [
      "Malta residency planning",
      "Malta immigration compliance",
      "Malta residence permit",
      "Malta business relocation",
      "Malta residency tax planning",
    ],
    keywordsZh: ["马耳他居留规划", "马耳他移民合规", "马耳他居留许可", "马耳他商业迁移", "马耳他身份税务规划"],
    summary:
      "Residency planning in Malta should connect immigration eligibility, residence documents, business activity, tax residence, payroll, housing, family records and renewal evidence. It should not be treated as a form-only process.",
    summaryZh:
      "马耳他居留规划应连接移民资格、居留文件、商业活动、税务居民、薪资、住房、家庭记录和续签证据，不应只被视为填表流程。",
    updated: "2026-06-25",
    readTime: "7 min read",
    status: "published",
    sections: [
      {
        heading: "Direct answer",
        headingZh: "直接答案",
        body: [
          "A Malta residence route should be selected only after checking the applicant's nationality, intended stay, employment or business activity, family situation, tax position and renewal requirements.",
          "For business owners, immigration planning should be coordinated with company formation, payroll, tax, accounting, housing and banking. A residence permit does not automatically solve tax or company compliance questions.",
        ],
        bodyZh: [
          "马耳他居留路径应在核查申请人国籍、计划停留、雇佣或商业活动、家庭情况、税务位置和续签要求后再选择。",
          "对于企业主，身份规划应与公司设立、薪资、税务、会计、住房和银行安排协同。居留许可不会自动解决税务或公司合规问题。",
        ],
      },
      {
        heading: "Legal requirement vs best practice",
        headingZh: "法律要求与实务建议",
        body: [
          "Legal requirement: residence and immigration positions should be checked against Identità or Residency Malta guidance, the Immigration Act and the specific programme or permit rules.",
          "Best practice: prepare a residency control file covering eligibility, source of funds where relevant, address evidence, employment or business role, family documents, tax assumptions and renewal calendar.",
        ],
        bodyZh: [
          "法律要求：居留和移民判断应结合 Identità 或 Residency Malta 指引、《Immigration Act》以及具体项目或许可规则核查。",
          "实务建议：准备居留控制资料包，覆盖资格、适用时的资金来源、住址证明、雇佣或商业角色、家庭文件、税务假设和续签日历。",
        ],
      },
      {
        heading: "Which authority is relevant?",
        headingZh: "哪些官方机构相关？",
        body: [
          "Identità states that its Expatriates Unit issues residence documents to EU nationals and residence permits to third-country nationals, and is responsible for implementing migration policies.",
          "Residency Malta Agency manages programmes such as the Malta Permanent Residence Programme and presents other residence routes such as the Nomad Residence Permit and Startup Residence Programme.",
        ],
        bodyZh: [
          "Identità 说明，其 Expatriates Unit 向欧盟国民签发居留文件，并向第三国国民签发居留许可，同时负责执行移民政策。",
          "Residency Malta Agency 管理 Malta Permanent Residence Programme，并提供 Nomad Residence Permit、Startup Residence Programme 等其他居留路径信息。",
        ],
      },
      {
        heading: "Business owners and company setup",
        headingZh: "企业主与公司设置",
        body: [
          "If the applicant owns or manages a Malta company, the business file should explain the company's activity, directors, shareholders, bank accounts, contracts, payroll and tax position.",
          "Immigration evidence and company evidence should be consistent. For example, a founder's stated role should match board records, payroll records, contracts and the company's real operating activity.",
        ],
        bodyZh: [
          "如果申请人拥有或管理马耳他公司，商业资料应说明公司活动、董事、股东、银行账户、合同、薪资和税务位置。",
          "移民证据和公司证据应保持一致。例如，创始人申报的角色应与董事会记录、薪资记录、合同和公司真实经营活动一致。",
        ],
      },
      {
        heading: "Tax, payroll and residence risk",
        headingZh: "税务、薪资与居民风险",
        body: [
          "Residence for immigration purposes and tax residence are not automatically the same analysis. Days of presence, employment, business control, family facts and income flows may all be relevant to tax review.",
          "If the applicant works for a Malta company, payroll, social security, employment documentation and work-authorisation points should be reviewed before payments begin.",
        ],
        bodyZh: [
          "移民意义上的居留和税务居民身份并不自动等同。停留天数、雇佣、业务控制、家庭事实和收入流都可能与税务复核相关。",
          "如果申请人为马耳他公司工作，应在付款前复核薪资、社保、雇佣文件和工作授权事项。",
        ],
      },
      {
        heading: "Renewal and evidence controls",
        headingZh: "续签与证据控制",
        body: [
          "Residency planning should include a renewal calendar. Evidence may include passport and identity records, address documents, employment or business records, tax documents, insurance and family documents where relevant.",
          "The file should be updated when the applicant changes address, role, employer, company ownership, family status, travel pattern or income source.",
        ],
        bodyZh: [
          "居留规划应包括续签日历。证据可能包括护照和身份记录、住址文件、雇佣或商业记录、税务文件、保险以及适用时的家庭文件。",
          "当申请人变更住址、角色、雇主、公司所有权、家庭状态、旅行模式或收入来源时，应更新资料包。",
        ],
      },
      {
        heading: "Professional insight",
        headingZh: "专业实务建议",
        body: [
          "For entrepreneurs relocating to Malta, create one combined file for immigration, company, tax, payroll, banking and housing. Fragmented records increase renewal and due-diligence risk.",
          "Do not advertise a residence route as guaranteed. Eligibility, due diligence, timing and documentation should always be confirmed against current official requirements.",
        ],
        bodyZh: [
          "对于迁居马耳他的企业家，建议建立一个合并资料包，覆盖移民、公司、税务、薪资、银行和住房。资料割裂会增加续签和尽调风险。",
          "不应把任何居留路径宣传为保证获批。资格、尽调、时间和文件应始终根据当前官方要求确认。",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a Malta residence permit the same as tax residence?",
        qZh: "马耳他居留许可等同于税务居民吗？",
        a: "No. Immigration residence and tax residence are separate analyses. Tax review should consider actual facts such as days, income, business control and family or economic ties.",
        aZh: "不是。移民居留和税务居民是不同分析。税务复核应考虑停留天数、收入、业务控制、家庭或经济联系等实际事实。",
      },
      {
        q: "Can company formation support residency planning?",
        qZh: "公司设立可以支持身份规划吗？",
        a: "It can be relevant, but the company must have a documented commercial role, accounting records, tax position and payroll or management evidence where applicable.",
        aZh: "可能相关，但公司必须有记录清楚的商业角色、会计记录、税务位置，以及适用时的薪资或管理证据。",
      },
      {
        q: "Which Malta authorities should be checked?",
        qZh: "应核查哪些马耳他官方机构？",
        a: "Depending on the route, check Identità, Residency Malta Agency, applicable legislation and any programme-specific guidance before relying on a conclusion.",
        aZh: "根据路径不同，应在作出判断前核查 Identità、Residency Malta Agency、适用法规和具体项目指引。",
      },
      {
        q: "What should be monitored after approval?",
        qZh: "获批后应持续监控什么？",
        a: "Monitor renewal deadlines, address changes, travel patterns, employment or business changes, family records, tax position and document validity.",
        aZh: "应持续监控续签日期、住址变化、旅行模式、雇佣或业务变化、家庭记录、税务位置和文件有效期。",
      },
    ],
    references: [
      { label: "Identità", href: "https://identita.gov.mt/", type: "Primary source" },
      { label: "Residency Malta Agency", href: "https://residencymalta.gov.mt/", type: "Primary source" },
      { label: "Immigration Act, Chapter 217", href: "https://legislation.mt/eli/cap/217/eng", type: "Primary source" },
      { label: "Companies Act, Chapter 386", href: "https://legislation.mt/eli/cap/386/eng", type: "Primary source" },
      { label: "Income Tax Act, Chapter 123", href: "https://legislation.mt/eli/cap/123/eng", type: "Primary source" },
    ],
  },
  {
    slug: "malta-trust-wealth-management-guide",
    category: "trust-wealth-management",
    title: "Malta Trust and Wealth Management Guide: Trustee, Asset and Succession Controls",
    titleZh: "马耳他信托与财富管理指南：受托人、资产与传承控制",
    seoTitle: "Malta Trust and Wealth Management Guide: Trusts, Trustees, Assets, Tax and Compliance",
    seoTitleZh: "马耳他信托与财富管理指南：信托、受托人、资产、税务与合规",
    metaDescription:
      "A practical Malta trust and wealth management guide covering trustee roles, asset records, family governance, tax, AML evidence, succession and compliance controls.",
    metaDescriptionZh:
      "实务角度解释马耳他信托与财富管理，包括受托人角色、资产记录、家族治理、税务、反洗钱证据、传承和合规控制。",
    keywords: [
      "Malta trust",
      "Malta trustees",
      "Malta wealth management",
      "family wealth Malta",
      "Trusts and Trustees Act Malta",
    ],
    keywordsZh: ["马耳他信托", "马耳他受托人", "马耳他财富管理", "马耳他家族财富", "马耳他 Trusts and Trustees Act"],
    summary:
      "Trust and wealth structures in Malta should be documented around legal purpose, trustee roles, assets, family governance, tax review, AML evidence, accounting records and succession controls.",
    summaryZh:
      "马耳他信托与财富架构应围绕法律目的、受托人角色、资产、家族治理、税务复核、反洗钱证据、会计记录和传承控制进行记录。",
    updated: "2026-06-25",
    readTime: "8 min read",
    status: "published",
    sections: [
      {
        heading: "Direct answer",
        headingZh: "直接答案",
        body: [
          "A Malta trust or wealth structure should be considered only after the family or owner has documented the assets, beneficiaries, control expectations, tax position, reporting duties and professional service providers involved.",
          "A trust is not a generic tax shortcut. The legal result depends on the trust deed, trustee role, asset ownership, beneficiaries, residence facts, applicable law and ongoing administration.",
        ],
        bodyZh: [
          "马耳他信托或财富架构应在家族或资产所有人记录清楚资产、受益人、控制预期、税务位置、报告义务和参与专业服务方后再考虑。",
          "信托不是通用的税务捷径。法律结果取决于信托契约、受托人角色、资产所有权、受益人、居民事实、适用法律和持续管理。",
        ],
      },
      {
        heading: "Legal requirement vs best practice",
        headingZh: "法律要求与实务建议",
        body: [
          "Legal requirement: trust and trustee arrangements should be checked against the Trusts and Trustees Act, MFSA regulatory expectations where relevant, tax law, AML rules and the facts of the parties involved.",
          "Best practice: prepare a wealth structure file before implementation, covering purpose, settlor, trustee, beneficiaries, assets, powers, tax assumptions, reporting calendar, banking and source-of-funds evidence.",
        ],
        bodyZh: [
          "法律要求：信托和受托人安排应结合《Trusts and Trustees Act》、适用时的 MFSA 监管要求、税法、反洗钱规则以及各方事实核查。",
          "实务建议：实施前准备财富架构资料包，覆盖目的、委托人、受托人、受益人、资产、权力、税务假设、报告日历、银行和资金来源证据。",
        ],
      },
      {
        heading: "Trustee role and governance",
        headingZh: "受托人角色与治理",
        body: [
          "The trustee role should be clearly documented. The file should explain who controls decisions, what powers exist, how distributions may be made and what records must be maintained.",
          "Family governance should be consistent with the legal structure. Informal family instructions should not contradict the trust deed, trustee duties or asset ownership records.",
        ],
        bodyZh: [
          "受托人角色应清楚记录。资料包应说明谁控制决策、存在哪些权力、如何分配，以及必须维护哪些记录。",
          "家族治理应与法律架构一致。非正式家族指示不应与信托契约、受托人职责或资产所有权记录相矛盾。",
        ],
      },
      {
        heading: "Assets, banking and evidence",
        headingZh: "资产、银行与证据",
        body: [
          "Asset records should identify what is settled into the structure, how the asset was acquired, who previously owned it, how it is valued and how income or expenses will be recorded.",
          "Banks and professional service providers may require source-of-funds, source-of-wealth, beneficial ownership, tax residence and family relationship evidence.",
        ],
        bodyZh: [
          "资产记录应说明哪些资产进入架构、资产如何取得、此前由谁拥有、如何估值，以及收入或费用如何记录。",
          "银行和专业服务方可能要求资金来源、财富来源、受益所有权、税务居民和家庭关系证据。",
        ],
      },
      {
        heading: "Tax, reporting and succession review",
        headingZh: "税务、报告与传承复核",
        body: [
          "Tax review should consider the residence of the settlor, trustee and beneficiaries, the type and location of assets, income flows, distributions and any connected companies.",
          "Succession planning should be aligned with family objectives, legal documentation, company ownership, banking mandates and cross-border inheritance or reporting considerations.",
        ],
        bodyZh: [
          "税务复核应考虑委托人、受托人和受益人的居民身份、资产类型和所在地、收入流、分配以及任何关联公司。",
          "传承规划应与家族目标、法律文件、公司所有权、银行授权以及跨境继承或报告事项保持一致。",
        ],
      },
      {
        heading: "Common mistakes",
        headingZh: "常见错误",
        body: [
          "A common mistake is setting up a structure before agreeing the family governance, asset list, tax review and banking evidence.",
          "Another mistake is assuming that a trust removes the need for accounting, tax, AML or beneficial ownership records. In practice, documentation usually becomes more important.",
        ],
        bodyZh: [
          "常见错误之一，是在尚未确定家族治理、资产清单、税务复核和银行证据前先设立架构。",
          "另一个错误，是认为信托会消除会计、税务、反洗钱或受益所有权记录需求。实际上，文件记录通常更重要。",
        ],
      },
      {
        heading: "Professional insight",
        headingZh: "专业实务建议",
        body: [
          "For international families, build a control map showing family members, tax residence, entities, trusts, bank accounts, asset ownership, advisers and reporting deadlines.",
          "Review the map whenever a family member relocates, a company is added, assets are transferred, distributions are made, or tax residence facts change.",
        ],
        bodyZh: [
          "对于国际家庭，建议建立控制图，列明家庭成员、税务居民、实体、信托、银行账户、资产所有权、顾问和报告截止日。",
          "当家庭成员迁居、新增公司、转移资产、进行分配或税务居民事实变化时，应复核该控制图。",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a Malta trust mainly a tax planning tool?",
        qZh: "马耳他信托主要是税务规划工具吗？",
        a: "No. A trust should be assessed as a legal, governance, asset-holding and succession structure. Tax treatment depends on the facts and should be reviewed separately.",
        aZh: "不是。信托应作为法律、治理、资产持有和传承架构评估。税务处理取决于事实，应单独复核。",
      },
      {
        q: "What evidence is usually important?",
        qZh: "通常哪些证据重要？",
        a: "Trust deed, asset records, ownership history, source-of-funds and source-of-wealth evidence, beneficiary details, tax residence information and trustee records are commonly important.",
        aZh: "信托契约、资产记录、所有权历史、资金来源和财富来源证据、受益人资料、税务居民信息和受托人记录通常都重要。",
      },
      {
        q: "Can a trust hold company shares?",
        qZh: "信托可以持有公司股份吗？",
        a: "It may be possible depending on the structure, documents and applicable law. Company, tax, beneficial ownership, banking and reporting implications should be reviewed before implementation.",
        aZh: "视架构、文件和适用法律而定，可能可以。实施前应复核公司、税务、受益所有权、银行和报告影响。",
      },
      {
        q: "When should the structure be reviewed?",
        qZh: "什么时候应复核信托或财富架构？",
        a: "Review it when family members relocate, assets change, beneficiaries change, companies are added, distributions are made or tax residence facts change.",
        aZh: "当家庭成员迁居、资产变化、受益人变化、新增公司、进行分配或税务居民事实变化时，应复核。",
      },
    ],
    references: [
      { label: "Trusts and Trustees Act, Chapter 331", href: "https://legislation.mt/eli/cap/331/eng", type: "Primary source" },
      { label: "Malta Financial Services Authority", href: "https://www.mfsa.mt/", type: "Primary source" },
      { label: "Income Tax Act, Chapter 123", href: "https://legislation.mt/eli/cap/123/eng", type: "Primary source" },
      { label: "Companies Act, Chapter 386", href: "https://legislation.mt/eli/cap/386/eng", type: "Primary source" },
      { label: "Prevention of Money Laundering Act, Chapter 373", href: "https://legislation.mt/eli/cap/373/eng", type: "Primary source" },
    ],
  },
  {
    slug: "source-intake-and-editorial-standard",
    category: "company-formation",
    title: "Editorial Standard for Malta Knowledge Center Articles",
    titleZh: "Malta Knowledge Center 文章编辑标准",
    seoTitle: "AI-Optimized Malta Compliance Articles: Editorial Standard and Source Policy",
    seoTitleZh: "AI 优化马耳他合规文章：编辑标准与来源政策",
    metaDescription:
      "The editorial standard used by XLW Advisory to convert source material into bilingual, AI-search-friendly Malta compliance knowledge articles.",
    metaDescriptionZh:
      "XLW Advisory 将来源材料整理为双语、适合 AI 搜索引用的马耳他合规知识文章时采用的编辑标准。",
    keywords: ["Malta Knowledge Center", "AI SEO", "GEO search", "bilingual compliance articles"],
    keywordsZh: ["马耳他知识库", "AI SEO", "GEO 搜索", "双语合规文章"],
    summary:
      "Every article should preserve legal meaning, cite official references, distinguish legal requirements from best practice, and answer practical client questions.",
    summaryZh:
      "每篇文章都应保留法律含义、引用官方来源、区分法律要求和实务建议，并回答客户的真实操作问题。",
    updated: "2026-06-25",
    readTime: "5 min read",
    status: "source-review",
    sections: [
      {
        heading: "Required article structure",
        headingZh: "统一文章结构",
        body: [
          "Each article should use a clear H1, concise introduction, H2 sections for What, Why, When, How, Risk, Best Practice, FAQ, and Official References.",
          "The English version should be written for international clients. The Chinese version should be written for Chinese-speaking founders and operators. They do not need to be sentence-by-sentence translations.",
        ],
        bodyZh: [
          "每篇文章应包含清晰 H1、简洁导语，并用 H2 组织 What、Why、When、How、Risk、Best Practice、FAQ 和 Official References。",
          "英文版面向国际客户重写；中文版面向中文创始人和经营者重写。两者不需要逐句对应翻译。",
        ],
      },
      {
        heading: "Source policy",
        headingZh: "来源政策",
        body: [
          "Primary sources include legislation, regulators, government departments, and official registry or tax authority guidance.",
          "Source intake articles, including WeChat articles, should be treated as drafting inputs until the legal points are checked against primary sources.",
        ],
        bodyZh: [
          "官方来源包括法律法规、监管机构、政府部门，以及公司登记或税务机关发布的官方指引。",
          "微信公众号等来源文章只能作为整理输入，在法律要点经官方来源核对前，不应直接作为确定结论发布。",
        ],
      },
      {
        heading: "GEO and AI-search requirements",
        headingZh: "GEO 与 AI 搜索要求",
        body: [
          "Use direct answer paragraphs, descriptive headings, FAQ, examples, and official references so AI systems can extract answerable passages.",
          "Avoid vague marketing claims. Prefer specific service context, jurisdiction, obligation, deadline type, risk, and practical control.",
        ],
        bodyZh: [
          "使用直接回答段落、描述性标题、FAQ、示例和官方引用，便于 AI 系统提取可回答内容。",
          "避免空泛营销表述。优先写清服务场景、司法辖区、义务类型、截止日期类型、风险和实务控制。",
        ],
      },
    ],
    faqs: [
      {
        q: "Can source articles be translated directly?",
        qZh: "来源文章可以直接翻译吗？",
        a: "No. They should be rewritten into knowledge articles while preserving legal meaning and checking legal claims against official sources.",
        aZh: "不建议直接翻译。应在保留法律含义的基础上重构为知识库文章，并用官方来源核对法律结论。",
      },
      {
        q: "What makes an article AI-search friendly?",
        qZh: "什么样的文章更适合 AI 搜索？",
        a: "Clear headings, direct answers, jurisdiction-specific facts, FAQ, source citations, and practical examples make content easier to understand and cite.",
        aZh: "清晰标题、直接答案、司法辖区事实、FAQ、来源引用和实务示例，会让内容更容易被理解和引用。",
      },
    ],
    references: sourceIntakeItems.map((item) => ({
      label: `${item.id}: ${item.status}`,
      href: item.href,
      type: "Source intake" as const,
    })),
  },
];

export function getKnowledgeArticle(slug: string) {
  return knowledgeArticles.find((article) => article.slug === slug);
}

export function getCategory(slug: string) {
  return knowledgeCategories.find((category) => category.slug === slug);
}

export function localizedArticle(article: KnowledgeArticle, lang: Lang) {
  return {
    title: lang === "zh" ? article.titleZh : article.title,
    seoTitle: lang === "zh" ? article.seoTitleZh : article.seoTitle,
    metaDescription: lang === "zh" ? article.metaDescriptionZh : article.metaDescription,
    keywords: lang === "zh" ? article.keywordsZh : article.keywords,
    summary: lang === "zh" ? article.summaryZh : article.summary,
  };
}
