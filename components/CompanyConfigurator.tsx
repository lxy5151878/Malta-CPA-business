"use client";

import { useMemo, useState } from "react";
import type { Lang } from "@/lib/siteCopy";

type Choice = { id: string; label: string; note: string; weight?: number };

const content = {
  en: {
    steps: ["Business", "Structure", "Support", "Summary"],
    previous: "Previous",
    next: "Continue",
    title: "Build your Malta company setup brief",
    intro: "Choose what you know today. The result is an indicative scope for discussion, not a binding quote or approval decision.",
    businessTitle: "What will the company do?",
    businessHelp: "The activity affects licensing, banking and due diligence requirements.",
    activities: [
      { id: "consulting", label: "Consulting or professional services", note: "Advisory, agency, software or other service activity", weight: 0 },
      { id: "trading", label: "Trading or e-commerce", note: "Buying or selling goods, marketplaces or cross-border trade", weight: 1 },
      { id: "holding", label: "Holding or investment company", note: "Holding shares, investments or group assets", weight: 1 },
      { id: "regulated", label: "Potentially regulated activity", note: "Financial services, gaming, crypto, payments or another licensed sector", weight: 3 },
    ] as Choice[],
    structureTitle: "Proposed ownership and management",
    owners: "Number of shareholders / beneficial owners",
    directors: "Director profile",
    directorChoices: [
      { id: "malta", label: "Malta-resident director", note: "Local management profile", weight: 0 },
      { id: "eu", label: "EU / EEA resident director", note: "Cross-border EU management", weight: 1 },
      { id: "non-eu", label: "Non-EU resident director", note: "Additional substance, tax and banking review may be needed", weight: 2 },
    ] as Choice[],
    supportTitle: "Select the support you expect to need",
    supportChoices: [
      { id: "incorporation", label: "Company incorporation", note: "Formation documents and registry coordination" },
      { id: "office", label: "Registered office and company secretarial", note: "Ongoing statutory administration" },
      { id: "tax", label: "Tax and VAT registrations", note: "Registration scope reviewed against planned activity" },
      { id: "accounting", label: "Bookkeeping and annual accounts", note: "Recurring finance and reporting support" },
      { id: "payroll", label: "Payroll and employer setup", note: "For Malta-based employees or directors" },
      { id: "banking", label: "Bank or payment-account readiness", note: "Application pack and financial evidence preparation" },
    ] as Choice[],
    summaryTitle: "Your preliminary setup scope",
    complexity: "Review level",
    levels: ["Standard", "Extended", "Specialist review"],
    included: "Selected workstreams",
    compliance: "Likely compliance focus",
    complianceItems: ["Identity and address evidence", "Ownership and control", "Business purpose and expected activity", "Source of wealth and source of funds"],
    disclaimer: "Final scope, timing and fees are confirmed only after conflict checks, KYC/CDD review and assessment of licensing, tax and banking requirements.",
    email: "Email this brief to XLW Advisory",
    restart: "Start again",
    defaultSupport: "Company incorporation",
  },
  zh: {
    steps: ["业务", "结构", "支持", "总结"],
    previous: "上一步",
    next: "继续",
    title: "生成马耳他公司设立需求简报",
    intro: "根据目前已知信息进行选择。结果仅用于初步讨论，并非正式报价或审批结论。",
    businessTitle: "公司计划从事什么业务？",
    businessHelp: "业务活动会影响牌照、银行开户和尽职调查要求。",
    activities: [
      { id: "consulting", label: "咨询或专业服务", note: "顾问、代理、软件或其他服务业务", weight: 0 },
      { id: "trading", label: "贸易或电子商务", note: "商品买卖、平台或跨境贸易", weight: 1 },
      { id: "holding", label: "控股或投资公司", note: "持有股权、投资或集团资产", weight: 1 },
      { id: "regulated", label: "可能受监管的业务", note: "金融服务、博彩、加密资产、支付或其他持牌行业", weight: 3 },
    ] as Choice[],
    structureTitle: "拟定的持股与管理结构",
    owners: "股东／最终实益拥有人数量",
    directors: "董事情况",
    directorChoices: [
      { id: "malta", label: "马耳他居民董事", note: "本地管理配置", weight: 0 },
      { id: "eu", label: "欧盟／欧洲经济区居民董事", note: "欧盟跨境管理", weight: 1 },
      { id: "non-eu", label: "非欧盟居民董事", note: "可能需要额外评估实质、税务与银行要求", weight: 2 },
    ] as Choice[],
    supportTitle: "选择预计需要的服务",
    supportChoices: [
      { id: "incorporation", label: "公司注册设立", note: "设立文件与注册处协调" },
      { id: "office", label: "注册地址及公司秘书", note: "持续法定行政支持" },
      { id: "tax", label: "税务及 VAT 注册", note: "根据计划业务判断注册范围" },
      { id: "accounting", label: "簿记及年度财务报表", note: "持续财务与报告支持" },
      { id: "payroll", label: "薪资及雇主登记", note: "适用于马耳他雇员或董事" },
      { id: "banking", label: "银行或支付账户资料准备", note: "申请材料及财务证据准备" },
    ] as Choice[],
    summaryTitle: "初步公司设立范围",
    complexity: "审核级别",
    levels: ["标准审核", "扩展审核", "专业专项审核"],
    included: "已选工作范围",
    compliance: "预计合规重点",
    complianceItems: ["身份与地址证明", "所有权与控制关系", "业务目的与预计活动", "财富来源与资金来源"],
    disclaimer: "最终工作范围、时间和费用，须在利益冲突检查、KYC/CDD 审查以及牌照、税务和银行要求评估后确认。",
    email: "将简报发送给 XLW Advisory",
    restart: "重新开始",
    defaultSupport: "公司注册设立",
  },
};

function OptionCard({ option, selected, onClick }: { option: Choice; selected: boolean; onClick: () => void }) {
  return (
    <button type="button" className={`config-option text-start ${selected ? "is-selected" : ""}`} onClick={onClick} aria-pressed={selected}>
      <span className="config-check"><i className={selected ? "ai-check" : ""} /></span>
      <span><strong className="d-block mb-1">{option.label}</strong><small className="text-body-secondary">{option.note}</small></span>
    </button>
  );
}

export default function CompanyConfigurator({ lang }: { lang: Lang }) {
  const t = content[lang];
  const [step, setStep] = useState(0);
  const [activity, setActivity] = useState(t.activities[0].id);
  const [owners, setOwners] = useState(1);
  const [director, setDirector] = useState(t.directorChoices[0].id);
  const [support, setSupport] = useState<string[]>(["incorporation", "office", "accounting"]);

  const selectedActivity = t.activities.find((x) => x.id === activity)!;
  const selectedDirector = t.directorChoices.find((x) => x.id === director)!;
  const selectedSupport = t.supportChoices.filter((x) => support.includes(x.id));
  const score = (selectedActivity.weight || 0) + (selectedDirector.weight || 0) + (owners > 2 ? 1 : 0) + (owners > 5 ? 1 : 0);
  const level = score >= 4 ? 2 : score >= 2 ? 1 : 0;

  const mailto = useMemo(() => {
    const lines = [
      t.summaryTitle,
      `${t.businessTitle}: ${selectedActivity.label}`,
      `${t.owners}: ${owners}${owners === 6 ? "+" : ""}`,
      `${t.directors}: ${selectedDirector.label}`,
      `${t.included}: ${selectedSupport.map((x) => x.label).join(", ") || t.defaultSupport}`,
      `${t.complexity}: ${t.levels[level]}`,
    ];
    return `mailto:info@accountantsmalta.com?subject=${encodeURIComponent(t.summaryTitle)}&body=${encodeURIComponent(lines.join("\n"))}`;
  }, [level, owners, selectedActivity, selectedDirector, selectedSupport, t]);

  function toggleSupport(id: string) {
    setSupport((items) => items.includes(id) ? items.filter((item) => item !== id) : [...items, id]);
  }

  return (
    <div className="company-configurator">
      <div className="config-progress" aria-label="Progress">
        {t.steps.map((label, index) => (
          <button type="button" key={label} className={index === step ? "is-current" : index < step ? "is-complete" : ""} onClick={() => index <= step && setStep(index)}>
            <span>{index + 1}</span><small>{label}</small>
          </button>
        ))}
      </div>

      <div className="config-body">
        {step === 0 && <>
          <h2 className="h3">{t.businessTitle}</h2><p className="text-body-secondary mb-4">{t.businessHelp}</p>
          <div className="config-options">{t.activities.map((x) => <OptionCard key={x.id} option={x} selected={activity === x.id} onClick={() => setActivity(x.id)} />)}</div>
        </>}

        {step === 1 && <>
          <h2 className="h3 mb-4">{t.structureTitle}</h2>
          <label className="form-label fw-semibold" htmlFor="owner-count">{t.owners}</label>
          <div className="d-flex align-items-center gap-3 mb-5">
            <input id="owner-count" className="form-range flex-grow-1" type="range" min="1" max="6" value={owners} onChange={(e) => setOwners(Number(e.target.value))} />
            <output className="config-count">{owners}{owners === 6 ? "+" : ""}</output>
          </div>
          <div className="form-label fw-semibold">{t.directors}</div>
          <div className="config-options">{t.directorChoices.map((x) => <OptionCard key={x.id} option={x} selected={director === x.id} onClick={() => setDirector(x.id)} />)}</div>
        </>}

        {step === 2 && <>
          <h2 className="h3 mb-4">{t.supportTitle}</h2>
          <div className="config-options config-options-grid">{t.supportChoices.map((x) => <OptionCard key={x.id} option={x} selected={support.includes(x.id)} onClick={() => toggleSupport(x.id)} />)}</div>
        </>}

        {step === 3 && <>
          <div className="d-flex flex-wrap justify-content-between align-items-start gap-3 mb-4">
            <div><h2 className="h3 mb-1">{t.summaryTitle}</h2><div className="text-body-secondary">{selectedActivity.label} · {owners}{owners === 6 ? "+" : ""} {t.owners.toLowerCase()}</div></div>
            <span className={`config-level level-${level}`}>{t.complexity}: {t.levels[level]}</span>
          </div>
          <div className="row g-4">
            <div className="col-md-7"><h3 className="h6">{t.included}</h3><ul className="list-unstyled">{selectedSupport.map((x) => <li className="d-flex gap-2 mb-2" key={x.id}><i className="ai-check-alt text-primary" />{x.label}</li>)}</ul></div>
            <div className="col-md-5"><h3 className="h6">{t.compliance}</h3><ul className="list-unstyled">{t.complianceItems.map((x) => <li className="d-flex gap-2 mb-2" key={x}><i className="ai-shield text-primary" />{x}</li>)}</ul></div>
          </div>
          <div className="growth-notice mt-4">{t.disclaimer}</div>
          <a className="btn btn-primary btn-lg mt-4" href={mailto}><i className="ai-mail me-2" />{t.email}</a>
        </>}
      </div>

      <div className="config-actions">
        <button className="btn btn-outline-primary" type="button" disabled={step === 0} onClick={() => setStep((x) => Math.max(0, x - 1))}>{t.previous}</button>
        {step < 3 ? <button className="btn btn-primary" type="button" onClick={() => setStep((x) => Math.min(3, x + 1))}>{t.next}<i className="ai-arrow-right ms-2" /></button> : <button className="btn btn-link" type="button" onClick={() => setStep(0)}>{t.restart}</button>}
      </div>
    </div>
  );
}
