import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSiteCopy, type Lang } from "@/lib/siteCopy";

export default function ThankYouPage({ lang }: { lang: Lang }) {
  const copy = getSiteCopy(lang);
  const isZh = lang === "zh";

  return (
    <main id="top" className="page-wrapper">
      <Navbar lang={lang} copy={copy} />
      <section className="container d-flex align-items-center justify-content-center py-5" style={{ minHeight: "68vh" }}>
        <div className="text-center py-5" style={{ maxWidth: 700 }}>
          <div className="thank-you-check mx-auto mb-4" aria-hidden="true">
            <i className="ai-check" />
          </div>
          <h1 className="display-5 mb-3">{isZh ? "感谢您的咨询" : "Thank you for your enquiry"}</h1>
          <p className="fs-lg text-body-secondary mb-4">
            {isZh
              ? "您的信息已安全提交。我们的团队将在一个工作日内与您联系。"
              : "Your details have been submitted securely. Our team will contact you within one business day."}
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a className="btn btn-primary" href={isZh ? "/zh" : "/"}>
              {isZh ? "返回首页" : "Return home"}
            </a>
            <a className="btn btn-outline-primary" href="tel:+35699520938">
              <i className="ai-phone me-2" />
              {isZh ? "致电我们" : "Call us"}
            </a>
          </div>
        </div>
      </section>
      <Footer copy={copy} />
    </main>
  );
}

