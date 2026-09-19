import type { Lang } from "@/lib/siteCopy";

export type GrowthPageKey = "mprp" | "greeceGoldenVisa" | "dueDiligence";

type GrowthPage = {
  meta: { title: string; description: string };
  eyebrow: string;
  title: string;
  lead: string;
  notice: string;
  highlights: { value: string; label: string }[];
  sections: { title: string; body: string; items: string[] }[];
  processTitle: string;
  process: { title: string; body: string }[];
  ctaTitle: string;
  ctaBody: string;
  sourceLabel: string;
  sources: { label: string; href: string }[];
};

const en: Record<GrowthPageKey, GrowthPage> = {
  mprp: {
    meta: {
      title: "Malta Permanent Residence Programme (MPRP) | XLW Advisory",
      description: "MPRP readiness, financial-document coordination and due diligence support for eligible non-EU, non-EEA and non-Swiss applicants.",
    },
    eyebrow: "Malta residence planning",
    title: "Malta Permanent Residence Programme",
    lead: "A coordinated route from initial eligibility review to a complete, traceable financial and due diligence file, working alongside an authorised MPRP Licensed Agent.",
    notice: "MPRP applications must be submitted through a Licensed Agent. XLW Advisory provides accounting, financial-document and due diligence support and does not promise approval.",
    highlights: [
      { value: "Permanent", label: "residence status, subject to approval and ongoing conditions" },
      { value: "4 generations", label: "may be included where dependency rules are met" },
      { value: "5 years", label: "minimum qualifying-property holding period" },
    ],
    sections: [
      {
        title: "Current programme structure",
        body: "The official programme combines eligibility, capital, property, government-fee, contribution, donation, insurance and due diligence requirements.",
        items: [
          "Capital assets of at least EUR 500,000, including EUR 150,000 in financial assets; or EUR 650,000, including EUR 75,000 in financial assets",
          "Qualifying property: minimum EUR 14,000 annual rent or EUR 375,000 purchase, retained for at least five years",
          "EUR 60,000 non-refundable administration fee for the main applicant and EUR 37,000 government contribution",
          "EUR 2,000 donation to an eligible registered local NGO, plus applicable dependant and residence-card fees",
        ],
      },
      {
        title: "Where we add value",
        body: "We organise the financial story behind the application so that source-of-wealth evidence, business records and supporting schedules are consistent.",
        items: [
          "Financial profile and asset schedule preparation",
          "Source of wealth and source of funds evidence mapping",
          "Company, dividend, salary and investment document reconciliation",
          "Document-gap review before submission to the Licensed Agent",
        ],
      },
    ],
    processTitle: "A controlled preparation process",
    process: [
      { title: "Eligibility triage", body: "Identify applicant profile, dependants, nationality restrictions and potential red flags." },
      { title: "Evidence map", body: "Link every material asset and transaction to supporting records and explanations." },
      { title: "Licensed Agent handoff", body: "Coordinate a structured file for legal review and formal programme submission." },
      { title: "Queries and updates", body: "Support financial clarifications and keep the evidence set current during review." },
    ],
    ctaTitle: "Start with a confidential readiness review",
    ctaBody: "We will identify the workstreams, missing evidence and professional parties required before a formal application begins.",
    sourceLabel: "Official programme sources",
    sources: [
      { label: "Residency Malta Agency - MPRP", href: "https://residencymalta.gov.mt/legal-framework-mprp-2/" },
      { label: "MPRP Regulations (S.L. 217.26)", href: "https://residencymalta.gov.mt/wp-content/uploads/2025/08/S.L.217.26-Amended-by-LN-310-of-2024_-LN-146-of-2025.pdf" },
    ],
  },
  greeceGoldenVisa: {
    meta: {
      title: "Greece Golden Visa Advisory Support | XLW Advisory",
      description: "Financial readiness, investment-file coordination and due diligence support for Greece Golden Visa applicants.",
    },
    eyebrow: "Greece residence-by-investment",
    title: "Greece Golden Visa",
    lead: "Financial readiness and cross-border document coordination for investors pursuing a Greek residence permit through a qualifying investment route.",
    notice: "Greek immigration and property work must be handled by appropriately qualified Greek legal and property professionals. Thresholds and eligible routes can change; eligibility is assessed case by case.",
    highlights: [
      { value: "5 years", label: "renewable permit period while qualifying conditions continue" },
      { value: "EUR 800k", label: "property threshold in specified high-demand areas" },
      { value: "EUR 400k", label: "property threshold in other areas, subject to current rules" },
    ],
    sections: [
      {
        title: "Investment routes need careful classification",
        body: "For real-estate applications, current thresholds vary by location and property type. A EUR 250,000 route may apply to specified conversions or restoration of listed buildings, subject to detailed conditions.",
        items: [
          "Confirm the investment route and geographic threshold before committing funds",
          "Coordinate legal title, valuation, payment evidence and tax documentation",
          "Review ownership structure and family-member eligibility",
          "Plan for restrictions, including applicable property-use conditions",
        ],
      },
      {
        title: "Cross-border financial file",
        body: "Our role is to make the investor's financial evidence coherent across banks, companies, tax records and the transaction trail.",
        items: [
          "Source of wealth and source of funds memorandum",
          "Bank-transfer and transaction evidence schedule",
          "Corporate ownership and dividend-document review",
          "Coordination with Greek lawyer, notary, tax adviser and property professionals",
        ],
      },
    ],
    processTitle: "From intent to review-ready file",
    process: [
      { title: "Route screening", body: "Clarify investment type, location, family scope and intended timing." },
      { title: "Professional team", body: "Confirm the Greek legal, tax, notarial and property specialists required." },
      { title: "Funds trail", body: "Document ownership, accumulation and transfer of investment funds." },
      { title: "Application support", body: "Maintain an indexed evidence pack for adviser and authority queries." },
    ],
    ctaTitle: "Review the investment file before funds move",
    ctaBody: "Early document review can reveal ownership, banking and evidence issues while they are still manageable.",
    sourceLabel: "Official and public-sector sources",
    sources: [
      { label: "Greek Ministry of Migration and Asylum - Golden Visa", href: "https://migration.gov.gr/en/golden-visa/" },
      { label: "Enterprise Greece - current property thresholds", href: "https://newsletters.enterprisegreece.gov.gr/newsletter-articles/greece-adjusts-golden-visa-program-amid-rising-outlook-for-property-market/" },
    ],
  },
  dueDiligence: {
    meta: {
      title: "Due Diligence and Compliance File Service | XLW Advisory",
      description: "A structured CDD, source-of-wealth and document-readiness service for investors, founders, advisers and regulated onboarding.",
    },
    eyebrow: "Special service",
    title: "Due diligence, built around evidence",
    lead: "Turn scattered identity, ownership, business and financial records into a structured compliance file that advisers, banks and counterparties can review efficiently.",
    notice: "This service supports document readiness and risk review. It is not a guarantee of onboarding, regulatory acceptance or a substitute for legal advice or a subject person's own AML obligations.",
    highlights: [
      { value: "CDD", label: "identity, address, ownership and purpose evidence" },
      { value: "SoW / SoF", label: "source of wealth and source of funds mapping" },
      { value: "Audit trail", label: "indexed records, review notes and unresolved gaps" },
    ],
    sections: [
      {
        title: "A practical compliance file",
        body: "The deliverable is organised for review rather than presented as a loose upload folder.",
        items: [
          "Client and related-party identification checklist",
          "Ownership and control chart with UBO evidence",
          "Business purpose, expected activity and geographic-risk profile",
          "Source-of-wealth and source-of-funds narrative with evidence index",
        ],
      },
      {
        title: "Risk-led review",
        body: "The scope expands where ownership, geography, activity or transaction history creates higher risk or requires enhanced due diligence.",
        items: [
          "PEP, sanctions and adverse-media screening coordination",
          "Document consistency and expiry review",
          "Gap log and request-for-information tracker",
          "Enhanced evidence plan for complex or higher-risk cases",
        ],
      },
    ],
    processTitle: "A clear evidence workflow",
    process: [
      { title: "Scope", body: "Define the onboarding event, parties, jurisdictions and decision owner." },
      { title: "Collect", body: "Use a controlled checklist and secure channel for required documents." },
      { title: "Verify and map", body: "Check consistency and connect claims to evidence without hiding gaps." },
      { title: "Review pack", body: "Deliver an indexed file, findings summary and open-action register." },
    ],
    ctaTitle: "Use compliance readiness as the starting point",
    ctaBody: "Before incorporation, investment or residence work begins, establish what can be evidenced and what still needs attention.",
    sourceLabel: "Compliance reference",
    sources: [
      { label: "FIAU Malta - guidance and implementing procedures", href: "https://fiaumalta.org/" },
    ],
  },
};

const zh: Record<GrowthPageKey, GrowthPage> = {
  mprp: {
    ...en.mprp,
    meta: { title: "马耳他永久居留计划 MPRP | XLW Advisory", description: "为符合条件的非欧盟申请人提供 MPRP 财务资料、资金来源和尽职调查准备支持。" },
    eyebrow: "马耳他居留规划",
    title: "马耳他永久居留计划 MPRP",
    lead: "从初步条件判断，到建立完整、可追溯的财务与尽调资料包，并与获授权的 MPRP Licensed Agent 协同推进。",
    notice: "MPRP 必须通过获授权的 Licensed Agent 提交。XLW Advisory 提供会计、财务资料与尽调支持，不承诺申请结果。",
    highlights: [
      { value: "永久居留", label: "以获批并持续满足项目条件为前提" },
      { value: "四代家庭", label: "符合受养人规则时可纳入同一申请" },
      { value: "5 年", label: "合资格房产的最低持有期" },
    ],
    sections: [
      { title: "现行项目结构", body: "官方项目同时涉及申请资格、资产、房产、政府费用、捐款、保险与多层尽调。", items: ["资产不少于 50 万欧元，其中 15 万欧元为金融资产；或资产不少于 65 万欧元，其中 7.5 万欧元为金融资产", "合资格房产：年租金不少于 1.4 万欧元，或购房不少于 37.5 万欧元，并至少持有五年", "主申请人不可退还行政费 6 万欧元，政府贡献款 3.7 万欧元", "向合资格本地注册 NGO 捐赠 2,000 欧元，并支付适用的受养人和居留卡费用"] },
      { title: "我们的价值", body: "我们梳理申请背后的财务逻辑，确保财富来源、资金来源、公司记录及支持性明细能够相互印证。", items: ["财务画像与资产明细表", "财富来源及资金来源证据映射", "公司、分红、工资与投资资料核对", "提交 Licensed Agent 前的资料缺口检查"] },
    ],
    processTitle: "受控的准备流程",
    process: [
      { title: "资格初筛", body: "识别申请人、受养人、国籍限制及潜在风险点。" },
      { title: "证据地图", body: "把重要资产与交易逐项对应到资料和解释。" },
      { title: "交接持牌代理", body: "整理结构化文件，供法律审查及正式提交。" },
      { title: "问询与更新", body: "协助财务补充说明，并在审核期间保持资料更新。" },
    ],
    ctaTitle: "从保密的准备度评估开始",
    ctaBody: "正式申请前，先确认工作范围、缺失资料和需要参与的专业人士。",
    sourceLabel: "官方项目来源",
  },
  greeceGoldenVisa: {
    ...en.greeceGoldenVisa,
    meta: { title: "希腊 Golden Visa 支持 | XLW Advisory", description: "为希腊 Golden Visa 投资人提供财务准备、投资资料协调和尽职调查支持。" },
    eyebrow: "希腊投资居留",
    title: "希腊 Golden Visa",
    lead: "为通过合资格投资途径申请希腊居留许可的投资人，提供财务准备与跨境资料协调。",
    notice: "希腊移民与房产事项须由具备相应资格的希腊法律及房产专业人士处理。门槛和适用路径可能变化，须按个案复核。",
    highlights: [
      { value: "5 年", label: "持续符合条件时可续签的许可期限" },
      { value: "80 万欧元", label: "特定高需求地区的房产投资门槛" },
      { value: "40 万欧元", label: "其他地区房产门槛，以现行规则为准" },
    ],
    sections: [
      { title: "投资路径必须先准确分类", body: "房地产申请门槛会因地区与房产类型而异。特定用途转换或受保护建筑修复项目可能适用 25 万欧元路径，但须满足详细条件。", items: ["付款前确认投资路径与地区门槛", "协调产权、估值、付款证据及税务资料", "审查持有结构和家庭成员资格", "确认短租等房产使用限制"] },
      { title: "跨境财务资料包", body: "我们的角色是让银行、公司、税务记录和交易轨迹之间的投资人财务证据保持一致。", items: ["财富来源与资金来源说明", "银行转账及交易证据明细", "公司持股与分红资料核对", "协调希腊律师、公证人、税务和房产专业人士"] },
    ],
    processTitle: "从投资意向到可审核资料",
    process: [
      { title: "路径筛选", body: "确认投资类型、地点、家庭范围和计划时间。" },
      { title: "专业团队", body: "明确所需的希腊法律、税务、公证和房产专家。" },
      { title: "资金轨迹", body: "记录投资资金的所有权、积累过程与转移路径。" },
      { title: "申请支持", body: "维护带索引的证据包，以应对专业人士和主管机关问询。" },
    ],
    ctaTitle: "在资金转移前审查投资资料",
    ctaBody: "尽早审查可在问题仍可处理时发现持股、银行和证据缺口。",
    sourceLabel: "官方及公共部门来源",
  },
  dueDiligence: {
    ...en.dueDiligence,
    meta: { title: "尽职调查与资料合规服务 | XLW Advisory", description: "为投资人、创始人、专业顾问和受监管机构建立结构化 CDD、财富来源和资料准备服务。" },
    eyebrow: "特别服务",
    title: "以证据为核心的尽职调查",
    lead: "把分散的身份、持股、业务与财务记录，整理成专业顾问、银行和交易对手能够高效审核的合规资料包。",
    notice: "本服务支持资料准备和风险审查，不保证开户、审批或监管接纳，也不替代法律意见或受监管主体自身的反洗钱义务。",
    highlights: [
      { value: "CDD", label: "身份、地址、所有权与业务目的证据" },
      { value: "SoW / SoF", label: "财富来源与资金来源证据映射" },
      { value: "审计轨迹", label: "资料索引、审核记录和未解决缺口" },
    ],
    sections: [
      { title: "可实际审核的合规资料包", body: "交付成果按审核逻辑组织，而不是一个散乱的上传文件夹。", items: ["客户及关联方身份资料清单", "所有权和控制结构图及 UBO 证据", "业务目的、预计活动与地域风险画像", "财富来源和资金来源说明及证据索引"] },
      { title: "风险导向审查", body: "当持股、地域、业务或交易历史带来较高风险时，审查范围将升级至增强尽调。", items: ["PEP、制裁与负面新闻筛查协调", "文件一致性与有效期检查", "资料缺口和补件跟踪表", "复杂或高风险个案的增强证据计划"] },
    ],
    processTitle: "清晰的证据工作流",
    process: [
      { title: "确定范围", body: "明确业务场景、相关方、司法辖区和最终决策人。" },
      { title: "资料收集", body: "通过受控清单和安全渠道收集所需文件。" },
      { title: "核验与映射", body: "检查一致性，把事实与证据对应，并如实保留缺口。" },
      { title: "审核资料包", body: "交付索引文件、发现摘要和待办事项登记表。" },
    ],
    ctaTitle: "把合规准备作为项目起点",
    ctaBody: "在公司设立、投资或居留工作开始前，先确认哪些事实已有证据，哪些仍需补充。",
    sourceLabel: "合规参考",
  },
};

export function getGrowthPage(lang: Lang, key: GrowthPageKey) {
  return (lang === "zh" ? zh : en)[key];
}
