import CompanyConfigurator from "@/components/CompanyConfigurator";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getSiteCopy, type Lang } from "@/lib/siteCopy";

const page = {
  en: {
    eyebrow: "Malta business setup",
    title: "Form a company in Malta with the compliance work built in",
    lead: "Configure the initial scope, understand the evidence likely to be required, and turn your plan into a review-ready brief for our team.",
    title2: "What a Malta setup normally involves",
    items: [
      ["Structure", "Shareholders, directors, beneficial ownership, governance and intended tax residence."],
      ["Incorporation", "Name, constitutional documents, registered office and Malta Business Registry filing."],
      ["Registrations", "Tax, VAT, employer and other registrations according to the actual business model."],
      ["Operations", "Banking readiness, bookkeeping, annual accounts, returns and ongoing company secretarial work."],
    ],
    note: "The tool does not take payment or form a company automatically. It prepares an initial scope; acceptance remains subject to conflict checks, CDD and regulatory assessment.",
  },
  zh: {
    eyebrow: "马耳他企业设立",
    title: "在马耳他成立公司，从一开始就纳入合规准备",
    lead: "配置初步服务范围，了解可能需要的证据，并把商业计划整理成可供团队审核的需求简报。",
    title2: "马耳他公司设立通常包括",
    items: [
      ["结构设计", "股东、董事、最终实益拥有人、治理安排及计划税务居民地。"],
      ["公司注册", "公司名称、章程文件、注册地址及马耳他商业注册局申报。"],
      ["税务登记", "根据实际商业模式办理税务、VAT、雇主及其他登记。"],
      ["持续运营", "银行资料准备、簿记、年度财务报表、申报及公司秘书工作。"],
    ],
    note: "本工具不收款，也不会自动成立公司。它仅生成初步工作范围；是否接受委托仍取决于利益冲突检查、CDD 及监管评估。",
  },
};

export default function CompanyFormationPage({ lang }: { lang: Lang }) {
  const copy = getSiteCopy(lang);
  const t = page[lang];
  return (
    <main className="page-wrapper growth-page">
      <Navbar lang={lang} copy={copy} />
      <section className="growth-hero pt-5"><div className="container pt-5 pb-5"><div className="row pt-5 pb-lg-4"><div className="col-xl-9"><div className="text-uppercase text-primary fw-semibold fs-sm mb-3">{t.eyebrow}</div><h1 className="display-3 mb-4">{t.title}</h1><p className="fs-xl mb-0" style={{ maxWidth: 850 }}>{t.lead}</p></div></div></div></section>
      <section className="container py-5"><CompanyConfigurator lang={lang} /></section>
      <section className="growth-process py-5"><div className="container py-lg-4"><h2 className="display-6 mb-4">{t.title2}</h2><div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">{t.items.map(([title, body], index) => <div className="col" key={title}><div className="growth-step h-100"><span className="growth-step-number">{String(index + 1).padStart(2, "0")}</span><h3 className="h5 mt-4">{title}</h3><p className="text-body-secondary mb-0">{body}</p></div></div>)}</div><div className="growth-notice mt-5">{t.note}</div></div></section>
      <Footer copy={copy} />
    </main>
  );
}
