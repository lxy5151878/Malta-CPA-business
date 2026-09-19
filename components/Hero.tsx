"use client";

/* eslint-disable @next/next/no-img-element */
import { useState, type FormEvent } from "react";
import type { Lang, SiteCopy } from "@/lib/siteCopy";

type IntentKey = "company" | "accounting" | "residency" | "international" | "china" | "diligence" | "unsure";

type IntentOption = {
  chip: string;
  prompt: string;
  title: string;
  body: string;
  href: string;
  linkLabel: string;
  steps: readonly { title: string; body: string }[];
};

const intentCopy: Record<Lang, {
  eyebrow: string;
  question: string;
  submit: string;
  privacy: string;
  direct: string;
  recommended: string;
  whatsapp: string;
  trustThird: string;
  options: Record<IntentKey, IntentOption>;
}> = {
  en: {
    eyebrow: "Malta accounting · tax · cross-border advisory",
    question: "Tell us what you would like to achieve",
    submit: "Find the right service",
    privacy: "Please do not include passport, tax, banking or other confidential information.",
    direct: "Prefer to speak with us directly?",
    recommended: "Recommended starting point",
    whatsapp: "Start a guided conversation",
    trustThird: "Bilingual, compliance-led coordination",
    options: {
      company: {
        chip: "Set up a Malta company",
        prompt: "I want to establish and operate a company in Malta",
        title: "Malta company formation and operating readiness",
        body: "Start with ownership, activities, directors, capital and tax implications before moving into registration, banking, accounting and ongoing compliance.",
        href: "/company-formation",
        linkLabel: "Explore company formation",
        steps: [
          { title: "Confirm the business model", body: "Customers, revenue, people and operating location" },
          { title: "Choose the right structure", body: "Ownership, governance, tax and licences" },
          { title: "Build the operating base", body: "Banking, accounting, payroll and compliance calendar" },
        ],
      },
      accounting: {
        chip: "Accounting and tax",
        prompt: "I need accounting, tax or payroll support",
        title: "Accounting, tax and finance operations review",
        body: "We begin with your records, filing obligations, employees and reporting needs, then define urgent corrections and the right ongoing support.",
        href: "/accounting",
        linkLabel: "Explore accounting support",
        steps: [
          { title: "Review the current position", body: "Records, deadlines and unresolved obligations" },
          { title: "Prioritise the work", body: "Accounting, VAT, tax, payroll and reporting" },
          { title: "Establish a steady rhythm", body: "Close calendar, controls and management information" },
        ],
      },
      residency: {
        chip: "Residency planning",
        prompt: "I want to understand Malta or Greece residency planning",
        title: "Residency planning and financial-file preparation",
        body: "Cover Malta Nomad, MPRP and Greece Golden Visa routes by testing family goals, remote-work or investment facts, timing and eligibility before coordinating the required professionals and evidence.",
        href: "/mprp",
        linkLabel: "Explore residency planning",
        steps: [
          { title: "Clarify the objective", body: "Family, mobility, timing and jurisdiction" },
          { title: "Check the route", body: "Eligibility, advisers, costs and dependencies" },
          { title: "Prepare review-ready evidence", body: "Identity, ownership, wealth and funds documentation" },
        ],
      },
      international: {
        chip: "International structures",
        prompt: "I need an international company or family structure",
        title: "International structuring and family-governance review",
        body: "Start with assets, operations, tax residence, control and succession objectives before comparing Hong Kong, Singapore, BVI, Cayman or Cyprus.",
        href: "/international-services",
        linkLabel: "Explore international services",
        steps: [
          { title: "Map the commercial purpose", body: "Business, investment, holding or succession" },
          { title: "Compare jurisdictions", body: "Control, substance, reporting and professional support" },
          { title: "Plan administration", body: "Governance, accounting, banking and evidence" },
        ],
      },
      china: {
        chip: "Invest in China",
        prompt: "I want to establish and operate a business in China",
        title: "China market entry and operating plan",
        body: "Use the business model, industry, customers, supply chain and talent needs to compare Shanghai, Beijing, Shenzhen, Hangzhou and any specialist location requirements.",
        href: "/invest-china",
        linkLabel: "Explore investing in China",
        steps: [
          { title: "Review market access", body: "Sector, ownership, licences and entry model" },
          { title: "Select the location", body: "Customers, talent, supply chain and operating cost" },
          { title: "Prepare for launch", body: "Entity, banking, tax, people and controls" },
        ],
      },
      diligence: {
        chip: "Due diligence",
        prompt: "I need due diligence or compliance-document support",
        title: "Due diligence and evidence-file preparation",
        body: "Organise the entity, ultimate owners, source of wealth, source of funds and transaction background into a coherent file for professional review.",
        href: "/due-diligence",
        linkLabel: "Explore due diligence support",
        steps: [
          { title: "Define the review scope", body: "Parties, transaction, institution and purpose" },
          { title: "Map the evidence", body: "Ownership, wealth, funds and business activity" },
          { title: "Close gaps before submission", body: "Consistency, explanations and supporting records" },
        ],
      },
      unsure: {
        chip: "I am not sure",
        prompt: "I am not sure which service I need",
        title: "Initial needs assessment",
        body: "Tell us the outcome you need, the countries involved and your current stage. We will identify one practical starting point without asking you to choose professional terminology.",
        href: "/contact",
        linkLabel: "Book an initial conversation",
        steps: [
          { title: "Describe the outcome", body: "What you want to establish, change or resolve" },
          { title: "Confirm the context", body: "Jurisdiction, timing and current position" },
          { title: "Choose the starting point", body: "One lead service and any necessary specialists" },
        ],
      },
    },
  },
  zh: {
    eyebrow: "马耳他会计 · 税务 · 跨境咨询",
    question: "告诉我们您现在想完成什么",
    submit: "找到合适服务",
    privacy: "请勿在此填写护照、税号、银行资料或其他机密信息。",
    direct: "希望直接沟通？",
    recommended: "建议起点",
    whatsapp: "带着需求开始咨询",
    trustThird: "中英文双语、合规导向协调",
    options: {
      company: {
        chip: "在马耳他设立公司",
        prompt: "我想在马耳他成立并运营一家公司",
        title: "马耳他公司设立与运营准备",
        body: "先确认股权、业务活动、董事安排、资本计划和税务影响，再进入公司注册、银行、会计及持续合规流程。",
        href: "/zh/company-formation",
        linkLabel: "查看公司设立服务",
        steps: [
          { title: "确认业务模式", body: "客户、收入、人员和实际经营地点" },
          { title: "选择适当结构", body: "持股、治理、税务和许可" },
          { title: "建立运营基础", body: "银行、会计、工资和合规日历" },
        ],
      },
      accounting: {
        chip: "会计与税务",
        prompt: "我需要会计、税务或工资支持",
        title: "会计、税务与财务运营评估",
        body: "从当前账目、申报义务、员工和管理报告需求开始，确定需要立即处理的问题和持续服务范围。",
        href: "/zh/accounting",
        linkLabel: "查看会计服务",
        steps: [
          { title: "检查当前状况", body: "账目、期限和待处理义务" },
          { title: "安排工作优先级", body: "会计、VAT、税务、工资与报告" },
          { title: "建立稳定节奏", body: "关账日历、控制和管理信息" },
        ],
      },
      residency: {
        chip: "身份规划",
        prompt: "我想了解马耳他或希腊身份规划",
        title: "身份规划与财务资料准备",
        body: "覆盖马耳他数字游民、MPRP 与希腊 Golden Visa：先确认家庭目标、工作或投资事实、时间与资格边界，再协调所需专业人士及财务证据。",
        href: "/zh/mprp",
        linkLabel: "查看身份规划",
        steps: [
          { title: "确认家庭目标", body: "出行、居住、时间与司法辖区" },
          { title: "核查可行路径", body: "资格、专业顾问、成本与依赖条件" },
          { title: "准备可审核证据", body: "身份、持股、财富与资金资料" },
        ],
      },
      international: {
        chip: "国际公司与家族架构",
        prompt: "我需要国际公司或家族财富架构",
        title: "国际结构与家族治理初步评估",
        body: "从资产、业务、税务居民身份、控制权和传承目标开始，再评估香港、新加坡、BVI、开曼或塞浦路斯等司法辖区。",
        href: "/zh/international-services",
        linkLabel: "查看国际服务",
        steps: [
          { title: "梳理商业目的", body: "经营、投资、持股或传承" },
          { title: "比较司法辖区", body: "控制、实质、报告与专业支持" },
          { title: "规划持续管理", body: "治理、会计、银行和证据资料" },
        ],
      },
      china: {
        chip: "投资中国",
        prompt: "我想在中国成立并运营企业",
        title: "投资中国：市场进入与运营规划",
        body: "根据业务、行业、客户、供应链和人才需求，比较上海、北京、深圳、杭州及特别产业所需的其他城市或园区。",
        href: "/zh/invest-china",
        linkLabel: "查看投资中国服务",
        steps: [
          { title: "评估市场准入", body: "行业、持股、许可与进入模式" },
          { title: "选择落地地点", body: "客户、人才、供应链与运营成本" },
          { title: "准备实际运营", body: "实体、银行、税务、人员与控制" },
        ],
      },
      diligence: {
        chip: "尽职调查",
        prompt: "我需要尽职调查或资料合规支持",
        title: "尽职调查与证据资料整理",
        body: "梳理主体、最终受益人、财富来源、资金来源和交易背景，形成便于银行、机构或专业顾问审核的资料包。",
        href: "/zh/due-diligence",
        linkLabel: "查看尽职调查服务",
        steps: [
          { title: "明确审核范围", body: "相关方、交易、机构与目的" },
          { title: "建立证据清单", body: "持股、财富、资金与业务活动" },
          { title: "提交前补齐缺口", body: "一致性、解释及支持文件" },
        ],
      },
      unsure: {
        chip: "我不确定",
        prompt: "我不确定需要哪项服务",
        title: "首次需求评估",
        body: "告诉我们希望实现什么、涉及哪些国家以及目前所处阶段。您不需要先掌握专业术语，我们会帮助确定一个实际起点。",
        href: "/zh/contact",
        linkLabel: "预约首次沟通",
        steps: [
          { title: "说明希望实现的结果", body: "计划设立、改变或解决什么" },
          { title: "确认项目背景", body: "司法辖区、时间与当前状况" },
          { title: "确定服务起点", body: "一项主要服务及必要专业人士" },
        ],
      },
    },
  },
};

const intentOrder: readonly IntentKey[] = ["company", "accounting", "residency", "international", "china", "diligence"];

function matchIntent(value: string): IntentKey {
  const query = value.trim().toLowerCase();
  if (!query) return "unsure";
  if (/中国|china|shanghai|beijing|shenzhen|hangzhou/.test(query)) return "china";
  if (/身份|居留|移民|mprp|golden visa|residen/.test(query)) return "residency";
  if (/尽职|资金来源|财富来源|due diligence|source of funds|source of wealth|kyc|cdd/.test(query)) return "diligence";
  if (/国际|家族|传承|香港|新加坡|开曼|塞浦路斯|bvi|cayman|cyprus|singapore|hong kong|wealth|succession/.test(query)) return "international";
  if (/会计|税|工资|薪资|审计|簿记|account|tax|vat|payroll|audit|bookkeep/.test(query)) return "accounting";
  if (/公司|注册|设立|创业|company|incorpor|business|startup/.test(query)) return "company";
  return "unsure";
}

export default function Hero({ lang, copy }: { lang: Lang; copy: SiteCopy }) {
  const hero = copy.hero;
  const t = intentCopy[lang];
  const [activeKey, setActiveKey] = useState<IntentKey>("company");
  const [query, setQuery] = useState(t.options.company.prompt);
  const active = t.options[activeKey];

  const selectIntent = (key: IntentKey) => {
    setActiveKey(key);
    setQuery(t.options[key].prompt);
  };

  const submitIntent = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const key = matchIntent(query);
    setActiveKey(key);
    requestAnimationFrame(() => document.getElementById("home-intent-result")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  const whatsappMessage = lang === "zh"
    ? `您好，我想咨询：${query}`
    : `Hi, I would like help with: ${query}`;
  const whatsappHref = `https://wa.me/35699520938?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <section className="home-guided-hero">
        <img className="home-guided-hero-image" src={hero.backgroundImage} alt="XLW Advisory team supporting international businesses" />
        <div className="home-guided-hero-overlay" aria-hidden="true" />

        <div className="container home-guided-hero-inner">
          <div className="home-guided-hero-content">
            <div className="text-uppercase text-primary fw-semibold fs-sm mb-3">{t.eyebrow}</div>
            <h1 className="display-3 mb-4">{hero.title}</h1>
            <p className="fs-lg text-body-secondary mx-auto mb-4">{hero.subtitle}</p>

            <form className="home-intent-form" onSubmit={submitIntent}>
              <label className="form-label fw-semibold text-start d-block" htmlFor={`home-intent-${lang}`}>{t.question}</label>
              <div className="home-intent-search">
                <i className="ai-search text-primary fs-xl" aria-hidden="true" />
                <input
                  id={`home-intent-${lang}`}
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  autoComplete="off"
                />
                <button type="submit" className="btn btn-primary">
                  {t.submit}
                  <i className="ai-arrow-right ms-2" aria-hidden="true" />
                </button>
              </div>
              <div className="home-intent-privacy text-body-secondary text-start mt-2">
                <i className="ai-shield-check me-1" aria-hidden="true" />
                {t.privacy}
              </div>
            </form>

            <div className="home-intent-chips" role="group" aria-label={lang === "zh" ? "常见需求选项" : "Common needs"}>
              {intentOrder.map((key) => (
                <button
                  type="button"
                  className={`home-intent-chip${activeKey === key ? " is-selected" : ""}`}
                  aria-pressed={activeKey === key}
                  onClick={() => selectIntent(key)}
                  key={key}
                >
                  {t.options[key].chip}
                </button>
              ))}
            </div>

            <div className="home-direct-contact mt-4">
              <span>{t.direct}</span>
              <a href={hero.primaryCta.href}>{hero.primaryCta.label}</a>
              <a href={hero.phone.href}>{hero.phone.label}</a>
            </div>
          </div>
        </div>

        <div className="home-guided-trust">
          <div><i className="ai-check-alt" aria-hidden="true" /><span>{hero.bullets[0]}</span></div>
          <div><i className="ai-check-alt" aria-hidden="true" /><span>{hero.bullets[1]}</span></div>
          <div><i className="ai-check-alt" aria-hidden="true" /><span>{t.trustThird}</span></div>
        </div>
      </section>

      <section className="home-intent-result" id="home-intent-result" aria-live="polite">
        <div className="container">
          <div className="row align-items-start g-5">
            <div className="col-lg-7">
              <div className="text-uppercase text-primary fw-semibold fs-sm mb-2">{t.recommended}</div>
              <h2 className="display-6 text-white mb-3">{active.title}</h2>
              <p className="home-intent-result-copy mb-4">{active.body}</p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <a className="btn btn-primary" href={active.href}>
                  {active.linkLabel}
                  <i className="ai-arrow-right ms-2" aria-hidden="true" />
                </a>
                <a className="btn btn-outline-light" href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <i className="ai-whatsapp me-2" aria-hidden="true" />
                  {t.whatsapp}
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <ol className="home-intent-steps mb-0">
                {active.steps.map((step, index) => (
                  <li key={step.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div><strong>{step.title}</strong><small>{step.body}</small></div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
