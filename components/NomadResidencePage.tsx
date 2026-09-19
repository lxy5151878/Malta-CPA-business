/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getSiteCopy, type Lang } from "@/lib/siteCopy";

const sources = [
  ["Eligibility", "https://nomad.residencymalta.gov.mt/nomad-eligibility/"],
  ["Application process", "https://nomad.residencymalta.gov.mt/topic/application-process/"],
  ["Document checklist", "https://nomad.residencymalta.gov.mt/checklist/"],
  ["Renewals", "https://nomad.residencymalta.gov.mt/topic/permit-renewals/"],
  ["Tax guidance", "https://nomad.residencymalta.gov.mt/topic/tax/"],
  ["Official FAQ", "https://nomad.residencymalta.gov.mt/new-faqs/"],
] as const;

const content = {
  en: {
    checked: "Policy references checked: September 2026",
    breadcrumb: "Malta Nomad Residence Permit",
    eyebrow: "Residency planning for remote professionals",
    title: "Live in Malta. Keep your work genuinely abroad.",
    lead: "A practical readiness service for third-country remote employees, overseas company owners and freelancers who need a coherent income, contract, insurance and residence file.",
    primaryCta: "Assess my case",
    secondaryCta: "See practical scenarios",
    heroAlt: "Remote professional working from a bright Maltese coastal workspace",
    snapshot: [
      ["EUR 42,000", "current minimum gross annual income for the main applicant"],
      ["1 year", "initial permit, subject to approval and continuing eligibility"],
      ["Up to 4 years", "initial permit plus up to three discretionary renewals"],
    ],
    notice: "The permit is discretionary and rules can change. XLW Advisory supports eligibility review, financial evidence, tax coordination and document readiness; it does not promise approval or replace immigration or legal advice.",
    fitEyebrow: "Start with the work relationship",
    fitTitle: "Three qualifying remote-work patterns",
    fitIntro: "The decisive question is not whether you can work online. It is who your employer, company or clients are, where they are established and how the income reaches you.",
    pathways: [
      ["ai-briefcase", "Overseas employee", "You hold an employment contract with an employer registered outside Malta and perform the work remotely."],
      ["ai-building", "Overseas company owner", "You are a partner or shareholder conducting business activity for a company registered outside Malta."],
      ["ai-laptop", "Freelancer or consultant", "You contract with clients whose permanent establishments are outside Malta and deliver the work remotely."],
    ],
    notFitTitle: "Cases that need an early stop or closer review",
    notFit: [
      "Direct or indirect services to Malta-based companies or individuals",
      "A foreign employer assigning you to serve its Maltese subsidiary",
      "Income that is forecast but not contractually guaranteed or visible in your own account",
      "Travel insurance instead of the required comprehensive health cover",
      "A short, informal or unsuitable accommodation arrangement",
      "Nationality, sanctions, visa or immigration-history issues that have not been checked against the current official rules",
    ],
    processEyebrow: "Application control",
    processTitle: "A six-stage evidence workflow",
    process: [
      ["Eligibility triage", "Confirm nationality, age, work category, Malta-facing activity, dependants and any immigration risks."],
      ["Income proof", "Reconcile contracts, company records and bank credits. Current guidance requires guaranteed qualifying income for at least five cumulative months from the application date."],
      ["Online application", "Prepare the N4 forms, letter of intent, full passport copies, CV, police conduct evidence and three months of official unmasked bank statements."],
      ["Fee and review", "The non-refundable administrative fee is EUR 300 per applicant. The published expected review period is 30 working days after funds are received."],
      ["Approval in principle", "Within the stated deadline, provide qualifying accommodation for the full permit period and comprehensive health insurance; travel insurance is not accepted."],
      ["Visa, biometrics and card", "Where required, complete the visa step before travelling for biometrics. The official guidance says the residence card usually follows in three to four weeks."],
    ],
    evidenceEyebrow: "Document readiness",
    evidenceTitle: "What a review-ready file should explain",
    evidenceIntro: "A checklist is only the start. Each document should answer a specific eligibility question and agree with the rest of the file.",
    evidenceHeaders: ["Question", "Core evidence", "Control point"],
    evidence: [
      ["Who pays you?", "Employment or client contracts, employer letter, invoices", "Counterparties and their permanent establishments must be outside Malta"],
      ["Is the income sufficient and guaranteed?", "Three months of official bank statements, payslips, service agreements", "Income should be credited to the main applicant's own account and remain traceable"],
      ["If you own the company, is the role real?", "Registry extract, shareholder evidence, accounts, operating-role explanation", "Separate salary, dividends and company revenue; do not count them as if they were the same"],
      ["Can the family reside together?", "Marriage and birth records, custody consent where relevant, dependant forms", "Add dependants at the correct stage and resolve custody issues before filing"],
      ["Can you complete approval conditions?", "Twelve-month accommodation evidence and comprehensive health insurance", "Current FAQ states at least EUR 100,000 cover for the EU, including Malta, and the UK; verify the live requirement before purchase"],
      ["Can you renew?", "Bank statements showing Malta transactions and continuing work/income evidence", "Renewal guidance requires at least five cumulative months in Malta during the preceding twelve months"],
    ],
    casesEyebrow: "Practical casework",
    casesTitle: "Illustrative scenarios, with the real pressure points",
    casesIntro: "These are constructed examples, not client outcomes or approval predictions. They show how the official rules may affect common profiles.",
    cases: [
      { tag: "Likely workable", title: "Remote employee of a German software company", profile: "Annual gross salary EUR 60,000; indefinite employment contract; employer has no Malta entity; applicant wants to move with a spouse.", issue: "The remote-work location is not expressly permitted in the original contract, and the spouse should be included from the outset.", evidence: "Employer confirmation permitting remote work from Malta, payroll and bank-credit trail, marriage evidence, suitable family accommodation and insurance for both applicants.", next: "Proceed to a full eligibility and tax-residence review before filing." },
      { tag: "Evidence design", title: "Founder of a UK SaaS company", profile: "Sole shareholder and director; draws EUR 3,000 monthly salary plus irregular dividends; company has overseas customers.", issue: "The salary alone is below the threshold, while dividends depend on profits and may not be guaranteed for the required period.", evidence: "Company registry records, accounts, board-approved remuneration, dividend records, business contracts and a bank trail showing what the applicant personally receives.", next: "Recalculate qualifying personal income conservatively. Do not treat company turnover as personal income." },
      { tag: "Variable income", title: "Freelance designer with UK and UAE clients", profile: "Twelve-month billed income is EUR 50,000 across four clients, with uneven monthly collections.", issue: "Past invoices show performance, but the application must also demonstrate contracted and guaranteed qualifying income for the relevant period.", evidence: "Signed client agreements, client establishment details, invoices, bank receipts and a monthly reconciliation matching each payment to a contract.", next: "Identify the guaranteed contract value first; use historic invoices as corroboration, not a substitute." },
      { tag: "Not eligible on these facts", title: "Consultant serving Maltese businesses", profile: "A non-EU consultant earns EUR 70,000 remotely, but most clients are Malta companies and individuals.", issue: "The income exceeds the threshold, but direct or indirect services to Malta-based entities conflict with the official eligibility rules.", evidence: "No amount of document polish changes the underlying client-location problem.", next: "Stop the Nomad route assessment and obtain advice on a genuinely applicable work or residence route." },
      { tag: "Family planning", title: "Parent applying with a child from a previous relationship", profile: "Eligible remote employee wishes to include a minor child; custody is shared with the other parent abroad.", issue: "Family eligibility may be viable, but custody and consent must be documented and the Agency reviews these cases individually.", evidence: "Birth certificate, custody order, notarised consent where required, dependant forms, family-appropriate accommodation and full insurance cover.", next: "Resolve consent and document formalities before submission; do not rely on informal messages between parents." },
      { tag: "Renewal risk", title: "Permit holder who spent only four months in Malta", profile: "Employment and income still qualify, but travel records and bank activity show about four months of Malta presence in the last year.", issue: "Current renewal guidance asks for at least five cumulative months of residence in Malta during the preceding twelve months.", evidence: "Bank statements showing Malta transactions, travel timeline, continuing contract and income proof, plus any explanation of exceptional facts.", next: "Treat renewal as at risk and obtain case-specific advice rather than assuming the valid first-year card guarantees renewal." },
    ],
    caseLabels: ["Profile", "Pressure point", "Evidence response", "Practical next step"],
    taxTitle: "Residence permission and tax treatment are separate questions",
    taxBody: "Holding the Nomad Residence Permit does not automatically determine whether, where or how your employment, business, dividends or other income is taxed. Physical presence, domicile, source, treaty position, payroll obligations and company management can all matter. Tax analysis should be completed before or alongside the move, not after the first filing deadline.",
    faqTitle: "Questions to settle before applying",
    faqs: [
      ["Can I work for Malta clients?", "The current official FAQ says direct or indirect services to Malta-based companies or individuals are not eligible under this route."],
      ["Does earning more than EUR 42,000 guarantee approval?", "No. Income is only one condition. Work structure, documents, background checks, insurance, accommodation and the Agency's discretionary assessment also matter."],
      ["Can I add family members later?", "Current guidance generally expects dependants to be included at application or renewal, with a newborn exception. Confirm timing before submitting."],
      ["When should renewal start?", "Official guidance recommends submitting two to three months before expiry and proving continuing eligibility plus the required Malta residence period."],
      ["Do documents need to be in English?", "The official checklist requires non-English documents to be accompanied by an English translation and submitted in PDF format."],
    ],
    sourcesTitle: "Official sources used for this page",
    sourcesNote: "Always re-check the live official pages before application, insurance purchase or renewal.",
    guideEyebrow: "Knowledge centre",
    guideTitle: "Read the detailed Nomad Residence Permit guide",
    guideBody: "Go deeper into eligibility, tax treatment, CRS exposure and the planning differences between the Nomad route and MPRP.",
    guideButton: "Open the detailed guide",
    ctaTitle: "Start with the work and income facts",
    ctaBody: "We will map your employer, company or client relationships, test the income trail and identify immigration, tax and document questions that need specialist input.",
    ctaButton: "Request a confidential review",
  },
  zh: {
    checked: "政策资料核对时间：2026 年 9 月",
    breadcrumb: "马耳他数字游民居留",
    eyebrow: "远程工作者身份规划",
    title: "居住在马耳他，工作关系真实留在海外",
    lead: "面向第三国远程雇员、海外公司股东和自由职业者的实操准备服务，重点梳理收入、合同、保险、住所及家庭资料之间的一致性。",
    primaryCta: "评估我的情况",
    secondaryCta: "查看实操案例",
    heroAlt: "远程专业人士在马耳他海滨工作空间办公",
    snapshot: [["42,000 欧元", "主申请人目前最低年毛收入门槛"], ["1 年", "首次许可期限，以获批并持续符合条件为前提"], ["最长 4 年", "首次许可加最多三次酌情续签"]],
    notice: "该许可由主管机关酌情决定，规则也可能调整。XLW Advisory 提供资格梳理、财务证据、税务协调和资料准备支持，不承诺审批结果，也不替代移民或法律意见。",
    fitEyebrow: "先看工作关系",
    fitTitle: "三类可能符合要求的远程工作模式",
    fitIntro: "关键不只是能否在线工作，而是谁向你支付收入、雇主或客户在哪里设立、收入如何进入你本人账户。",
    pathways: [["ai-briefcase", "海外雇主远程雇员", "与马耳他境外注册的雇主签有劳动合同，并通过通信技术远程履行工作。"], ["ai-building", "海外公司股东或合伙人", "作为股东或合伙人为马耳他境外注册公司开展业务活动。"], ["ai-laptop", "自由职业者或顾问", "与常设机构位于马耳他境外的客户签约，并远程交付服务。"]],
    notFitTitle: "应尽早停止或重点复核的情形",
    notFit: ["直接或间接向马耳他公司或个人提供服务", "由海外雇主派驻并实际服务其马耳他子公司", "收入只是预测，未在合同中得到保证，或无法在本人账户形成清晰轨迹", "以旅游保险代替要求的综合医疗保险", "住所期限过短、安排不正式，或不适合家庭成员共同居住", "未按最新官方规则核查国籍、制裁、签证或过往移民记录问题"],
    processEyebrow: "申请控制",
    processTitle: "六阶段证据工作流",
    process: [["资格初筛", "确认国籍、年龄、工作类别、是否服务马耳他市场、受养人和移民历史风险。"], ["收入证据", "核对合同、公司资料和银行入账。现行指引要求从申请日起至少累计五个月具备有保证的合资格收入。"], ["在线申请", "准备 N4 表、意向书、整本护照扫描、履历、无犯罪记录和最近三个月官方未遮挡银行流水。"], ["缴费与审核", "不可退还行政费为每位申请人 300 欧元。官网公布的预计审核时间为收到款项后 30 个工作日。"], ["原则性批准", "在规定期限内提交覆盖整个许可期的合资格住所和综合医疗保险；旅游保险不被接受。"], ["签证、生物信息与居留卡", "如需签证，应先完成签证步骤，再赴马耳他采集生物信息。官方指引称居留卡通常在其后三至四周完成。"]],
    evidenceEyebrow: "资料准备",
    evidenceTitle: "一套可审核资料应解释什么",
    evidenceIntro: "清单只是起点。每份文件都应回答一个资格问题，并与整套资料中的其他事实相互印证。",
    evidenceHeaders: ["需要回答的问题", "核心证据", "审核控制点"],
    evidence: [["谁向你付款？", "劳动或客户合同、雇主确认函、发票", "交易对方及其常设机构应在马耳他境外"], ["收入是否足额且有保证？", "三个月官方银行流水、工资单、服务协议", "收入应进入主申请人本人账户，并能追溯到合同"], ["如果持有公司，角色是否真实？", "公司注册摘录、持股证据、财务报表、运营职责说明", "区分工资、分红和公司营业收入，不能把三者重复计算"], ["家庭能否共同居住？", "结婚和出生证明、适用时的监护同意、受养人表格", "在正确阶段加入受养人，并在递交前解决监护问题"], ["能否完成原则性批准条件？", "覆盖 12 个月的住所证明及综合医疗保险", "现行 FAQ 说明保险至少覆盖欧盟（含马耳他）及英国、保额 10 万欧元；购买前应复核实时要求"], ["能否顺利续签？", "显示马耳他本地交易的银行流水、持续工作及收入证据", "续签指引要求此前 12 个月内至少累计 5 个月居住在马耳他"]],
    casesEyebrow: "实操案例",
    casesTitle: "把常见情况拆到真正的压力点",
    casesIntro: "以下均为构造的示例情景，不是真实客户成果，也不预测审批结果；用途是说明官方规则如何影响常见申请人。",
    cases: [
      { tag: "初步可行", title: "德国软件公司的远程雇员", profile: "年毛工资 6 万欧元；无固定期限劳动合同；雇主在马耳他没有实体；计划与配偶共同迁居。", issue: "原劳动合同没有明确允许在马耳他远程办公，配偶也应从申请起始阶段纳入规划。", evidence: "雇主出具允许从马耳他远程工作的确认函，工资与银行入账轨迹，婚姻证明，适合两人居住的住所及双方保险。", next: "递交前完成完整资格评估和个人税务居民分析。" },
      { tag: "证据设计", title: "英国 SaaS 公司的创始人", profile: "唯一股东兼董事；每月领取 3,000 欧元工资，另有不定期分红；公司客户均在海外。", issue: "工资本身低于门槛，而分红取决于公司利润，未必能满足相关期间的“有保证收入”要求。", evidence: "公司注册和持股资料、财务报表、董事会批准的薪酬、分红记录、业务合同及本人实际收款的银行轨迹。", next: "保守重算合资格个人收入，不能把公司营业额当作个人收入。" },
      { tag: "收入波动", title: "服务英国与阿联酋客户的自由设计师", profile: "过去 12 个月开票收入 5 万欧元，来自四名客户，但每月收款不均匀。", issue: "历史发票能够证明业务表现，但申请还需证明相关期间已有合同支持、且符合要求的收入具有保证。", evidence: "已签署的客户协议、客户设立地资料、发票、银行收款，以及逐笔把付款对应至合同的月度对账表。", next: "先确定合同中真正有保证的金额，历史发票只能补强，不能取代合同承诺。" },
      { tag: "按现有事实不符合", title: "主要服务马耳他企业的顾问", profile: "非欧盟顾问年收入 7 万欧元，虽然远程工作，但大部分客户是马耳他公司和个人。", issue: "收入超过门槛，但向马耳他主体直接或间接提供服务，与官方资格规则冲突。", evidence: "再完整的资料也无法改变客户所在地这一基础事实。", next: "停止数字游民路径评估，针对真实工作活动咨询适用的工作或居留方案。" },
      { tag: "家庭规划", title: "携前段关系所生子女申请的父母", profile: "主申请人是合资格远程雇员，希望带未成年子女申请；另一位父母在海外共同享有监护权。", issue: "家庭成员资格可能成立，但监护权和同意必须有正式文件，主管机关也会逐案审查。", evidence: "出生证明、监护裁定、适用时的公证同意、受养人表格、适合家庭的住所及完整保险。", next: "递交前解决同意和文件形式问题，不能只依赖父母之间的聊天记录。" },
      { tag: "续签风险", title: "过去一年只在马耳他居住四个月", profile: "工作和收入仍符合条件，但旅行记录和银行活动显示过去一年在马耳他约四个月。", issue: "现行续签指引要求此前 12 个月内至少累计 5 个月居住在马耳他。", evidence: "显示马耳他交易的银行流水、完整旅行时间线、持续合同与收入证明，以及任何特殊事实的说明。", next: "把续签视为有风险个案并取得专项意见，不能认为首年居留卡有效就必然续签。" },
    ],
    caseLabels: ["人物情况", "压力点", "证据处理", "实操下一步"],
    taxTitle: "居留许可与税务处理是两个不同问题",
    taxBody: "持有数字游民居留许可，并不会自动决定工资、经营、分红或其他收入是否、在哪里以及如何纳税。实际停留天数、住所、收入来源、税收协定、工资税义务和公司实际管理地都可能产生影响。税务分析应在迁居前或同时完成，而不是等到第一次申报期限后再处理。",
    faqTitle: "申请前应解决的问题",
    faqs: [["可以为马耳他客户工作吗？", "现行官方 FAQ 说明，本路径不接受向马耳他公司或个人直接或间接提供服务的情况。"], ["年收入超过 42,000 欧元就一定获批吗？", "不是。收入只是其中一个条件，工作结构、文件、背景审查、保险、住所及主管机关酌情判断同样重要。"], ["家庭成员可以以后再加入吗？", "现行指引通常要求在初次申请或续签时加入受养人，新生儿属于例外。提交前应先确认时间安排。"], ["何时开始续签？", "官方建议在到期前两至三个月提交，并证明持续符合资格及达到要求的马耳他居住时间。"], ["非英文文件如何处理？", "官方清单要求非英文文件附英文翻译，并以 PDF 格式提交。"]],
    sourcesTitle: "本页面使用的官方来源",
    sourcesNote: "正式申请、购买保险或续签前，应再次核对官方实时页面。",
    guideEyebrow: "知识中心",
    guideTitle: "继续阅读数字游民居留深度指南",
    guideBody: "进一步了解资格、税务处理、CRS 信息交换风险，以及数字游民路径与 MPRP 的规划差异。",
    guideButton: "打开深度指南",
    ctaTitle: "先从工作关系和收入事实开始",
    ctaBody: "我们将梳理你的雇主、公司或客户关系，核验收入轨迹，并标出需要移民、法律及税务专业人士进一步确认的问题。",
    ctaButton: "申请保密评估",
  },
} as const;

export default function NomadResidencePage({ lang }: { lang: Lang }) {
  const t = content[lang];
  const copy = getSiteCopy(lang);
  const home = lang === "zh" ? "/zh" : "/";
  const contact = lang === "zh" ? "/zh/contact" : "/contact";
  return (
    <main className="page-wrapper nomad-page">
      <Navbar lang={lang} copy={copy} />
      <section className="nomad-hero">
        <img className="nomad-hero-image" src="/assets/generated/nomad-residence-hero.webp" alt={t.heroAlt} />
        <div className="nomad-hero-shade" aria-hidden="true" />
        <div className="container nomad-hero-content">
          <nav aria-label="breadcrumb"><ol className="breadcrumb nomad-breadcrumb mb-4"><li className="breadcrumb-item"><a href={home}>{lang === "zh" ? "首页" : "Home"}</a></li><li className="breadcrumb-item active" aria-current="page">{t.breadcrumb}</li></ol></nav>
          <div className="row"><div className="col-lg-8 col-xl-7">
            <div className="text-uppercase fw-semibold fs-sm mb-3 nomad-eyebrow">{t.eyebrow}</div>
            <h1 className="display-2 text-white mb-4">{t.title}</h1>
            <p className="fs-xl text-white mb-4 nomad-lead">{t.lead}</p>
            <div className="d-flex flex-wrap gap-3"><a className="btn btn-primary btn-lg" href={contact}>{t.primaryCta}</a><a className="btn btn-light btn-lg" href="#nomad-cases">{t.secondaryCta}</a></div>
            <div className="nomad-meta mt-4">{t.checked}</div>
          </div></div>
        </div>
      </section>
      <section className="nomad-snapshot"><div className="container"><div className="row g-0">{t.snapshot.map(([value, label]) => <div className="col-md-4" key={value}><div className="nomad-stat"><strong>{value}</strong><span>{label}</span></div></div>)}</div></div></section>
      <section className="container py-5"><div className="nomad-notice" role="note"><i className="ai-circle-info" aria-hidden="true" /><span>{t.notice}</span></div></section>
      <section className="container pb-5"><div className="row g-5 align-items-start">
        <div className="col-lg-7"><div className="text-uppercase text-primary fw-semibold fs-sm mb-2">{t.fitEyebrow}</div><h2 className="display-5 mb-3">{t.fitTitle}</h2><p className="fs-lg text-body-secondary mb-4">{t.fitIntro}</p><div className="nomad-pathways">{t.pathways.map(([icon, title, body]) => <article className="nomad-pathway" key={title}><i className={icon} aria-hidden="true" /><div><h3 className="h5 mb-2">{title}</h3><p className="mb-0 text-body-secondary">{body}</p></div></article>)}</div></div>
        <aside className="col-lg-5"><div className="nomad-stop-list"><h2 className="h4 mb-4">{t.notFitTitle}</h2><ul className="list-unstyled mb-0">{t.notFit.map((item) => <li key={item}><i className="ai-circle-minus" aria-hidden="true" /><span>{item}</span></li>)}</ul></div></aside>
      </div></section>
      <section className="nomad-process py-5"><div className="container py-lg-4"><div className="text-uppercase text-primary fw-semibold fs-sm mb-2">{t.processEyebrow}</div><h2 className="display-5 mb-5">{t.processTitle}</h2><div className="nomad-process-grid">{t.process.map(([title, body], index) => <article className="nomad-process-step" key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3 className="h5">{title}</h3><p className="mb-0 text-body-secondary">{body}</p></article>)}</div></div></section>
      <section className="container py-5"><div className="row mb-4"><div className="col-lg-8"><div className="text-uppercase text-primary fw-semibold fs-sm mb-2">{t.evidenceEyebrow}</div><h2 className="display-5 mb-3">{t.evidenceTitle}</h2><p className="fs-lg text-body-secondary mb-0">{t.evidenceIntro}</p></div></div><div className="table-responsive nomad-evidence-wrap"><table className="table nomad-evidence-table mb-0"><thead><tr>{t.evidenceHeaders.map((h) => <th scope="col" key={h}>{h}</th>)}</tr></thead><tbody>{t.evidence.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div></section>
      <section className="nomad-cases py-5" id="nomad-cases"><div className="container py-lg-4"><div className="row mb-4"><div className="col-lg-9"><div className="text-uppercase text-primary fw-semibold fs-sm mb-2">{t.casesEyebrow}</div><h2 className="display-5 mb-3">{t.casesTitle}</h2><p className="fs-lg text-body-secondary mb-0">{t.casesIntro}</p></div></div><div className="nomad-case-grid">{t.cases.map((item, index) => <article className="nomad-case" key={item.title}><div className="nomad-case-head"><span className="nomad-case-number">{String(index + 1).padStart(2, "0")}</span><span className="nomad-case-tag">{item.tag}</span></div><h3 className="h4 mt-3 mb-4">{item.title}</h3><dl className="mb-0"><dt>{t.caseLabels[0]}</dt><dd>{item.profile}</dd><dt>{t.caseLabels[1]}</dt><dd>{item.issue}</dd><dt>{t.caseLabels[2]}</dt><dd>{item.evidence}</dd><dt>{t.caseLabels[3]}</dt><dd className="nomad-next">{item.next}</dd></dl></article>)}</div></div></section>
      <section className="nomad-tax py-5"><div className="container py-lg-3"><div className="row g-4 align-items-start"><div className="col-lg-4"><h2 className="h2 mb-0">{t.taxTitle}</h2></div><div className="col-lg-8"><p className="fs-lg mb-0">{t.taxBody}</p></div></div></div></section>
      <section className="container py-5"><div className="row g-5"><div className="col-lg-5"><h2 className="display-6 mb-0">{t.faqTitle}</h2></div><div className="col-lg-7 nomad-faq">{t.faqs.map(([q, a], i) => <details key={q} open={i === 0}><summary>{q}<i className="ai-chevron-down" aria-hidden="true" /></summary><p>{a}</p></details>)}</div></div></section>
      <section className="container pb-5"><a className="nomad-guide-link" href={lang === "zh" ? "/zh/knowledge/malta-nomad-residence-permit-guide" : "/knowledge/malta-nomad-residence-permit-guide"}><span><span className="text-uppercase fw-semibold fs-sm">{t.guideEyebrow}</span><strong>{t.guideTitle}</strong><small>{t.guideBody}</small></span><span className="nomad-guide-action">{t.guideButton}<i className="ai-arrow-right" aria-hidden="true" /></span></a></section>
      <section className="nomad-sources py-5"><div className="container"><div className="row g-4 align-items-start"><div className="col-lg-4"><h2 className="h3 mb-2">{t.sourcesTitle}</h2><p className="text-body-secondary mb-0">{t.sourcesNote}</p></div><div className="col-lg-8 nomad-source-links">{sources.map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={href}>{label}<i className="ai-arrow-up-right" aria-hidden="true" /></a>)}</div></div></div></section>
      <section className="container py-5"><div className="nomad-cta"><div><h2 className="display-6 mb-3">{t.ctaTitle}</h2><p className="fs-lg mb-0">{t.ctaBody}</p></div><a className="btn btn-light btn-lg flex-shrink-0" href={contact}>{t.ctaButton}<i className="ai-arrow-right ms-2" aria-hidden="true" /></a></div></section>
      <Footer copy={copy} />
    </main>
  );
}
