// app/zh/privacy-policy/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSiteCopy } from "@/lib/siteCopy";

export const metadata: Metadata = {
  title: "隐私政策 | XLW Advisory",
  description: "XLW Advisory 隐私政策：了解我们如何依据 GDPR 收集、使用、保护与保存个人数据。",
};

export default function PrivacyPolicyZhPage() {
  const copy = getSiteCopy("zh");

  return (
    <main id="top" className="page-wrapper">
      <Navbar lang="zh" copy={copy} />

      <section className="container pt-5 mt-4 mt-lg-5">
        {/* Header */}
        <div className="pt-3 pt-lg-4">
          <h1 className="display-6 mb-2">隐私政策</h1>
          <p className="text-body-secondary mb-4">最后更新：2026 年 1 月</p>
        </div>

        {/* Content */}
        <div className="row">
          <div className="col-lg-9">
            <section className="mb-4">
              <h2 className="h4">1. 简介</h2>
              <p className="mb-0">
                XLW Advisory 是一家提供会计、审计与鉴证、税务及咨询服务的专业服务机构。我们致力于保护通过本网站（“网站”）处理的个人数据的机密性、完整性与安全性。
              </p>
              <p className="mt-3 mb-0">
                我们依据《通用数据保护条例》（欧盟）2016/679（“GDPR”）以及适用的专业与监管义务处理所有个人数据。
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4">2. 个人数据类别</h2>
              <p className="mb-2">根据您与本网站的互动方式，我们可能收集以下有限类别的个人数据：</p>
              <ul className="mb-2">
                <li>
                  <strong>技术数据：</strong>IP 地址、浏览器类型、访问日期与时间（用于安全、审计与系统完整性目的）
                </li>
                <li>
                  <strong>联系数据：</strong>通过咨询表单自愿提交的姓名、电子邮箱、电话号码及留言内容
                </li>
              </ul>
              <p className="mb-0">
                在本网站之外、于专业服务合作过程中提交的客户数据，将受单独的业务约定书与专业保密义务约束。
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4">3. 处理目的与法律依据</h2>
              <p className="mb-2">通过本网站收集的个人数据仅用于以下目的：</p>
              <ul className="mb-2">
                <li>回复咨询与开展初步专业沟通</li>
                <li>评估是否可以提供相关专业服务</li>
                <li>确保网站安全与正常运行</li>
                <li>履行法律、监管与专业合规要求</li>
              </ul>
              <p className="mb-0">处理将依据适用情况以同意、合法利益或法定义务为法律依据进行。</p>
            </section>

            <section className="mb-4">
              <h2 className="h4">4. 专业保密义务</h2>
              <p className="mb-0">
                作为专业咨询机构，XLW Advisory 受严格的职业道德与保密义务约束。在会计、审计、税务或咨询服务过程中收到的任何个人数据，均会以更高标准保密，并仅在合法的专业目的范围内进行处理。
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4">5. 数据保存期限</h2>
              <p className="mb-2">我们仅在必要期限内保存个人数据，以便：</p>
              <ul className="mb-2">
                <li>实现收集该数据的目的</li>
                <li>遵守法定、监管或专业记录保存义务</li>
              </ul>
              <p className="mb-0">当不再需要保存时，我们将安全删除或匿名化处理相关数据。</p>
            </section>

            <section className="mb-4">
              <h2 className="h4">6. 数据共享与跨境传输</h2>
              <p className="mb-2">XLW Advisory 不出售或以商业方式利用个人数据。</p>
              <p className="mb-2">仅在以下情况下才可能披露个人数据：</p>
              <ul className="mb-2">
                <li>法律、法院命令或监管机构要求</li>
                <li>为履行专业义务所必需</li>
                <li>您已明确同意</li>
              </ul>
              <p className="mb-0">
                除非已采取适当保障措施，否则我们不会将个人数据传输至欧洲经济区（EEA）以外。
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4">7. 数据安全措施</h2>
              <p className="mb-0">
                我们采取适当的技术与组织措施保护个人数据，包括适用于金融与专业服务信息的安全保障措施。
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4">8. 数据主体权利</h2>
              <p className="mb-2">根据 GDPR，您享有以下权利：</p>
              <ul className="mb-2">
                <li>访问您的个人数据</li>
                <li>请求更正或删除</li>
                <li>限制或反对处理</li>
                <li>在以同意为依据处理时，随时撤回同意</li>
                <li>向监管机构提出投诉</li>
              </ul>
              <p className="mb-0">您可使用本网站提供的联系信息提交相关请求。</p>
            </section>

            <section className="mb-4">
              <h2 className="h4">9. 第三方网站</h2>
              <p className="mb-0">
                本网站可能包含指向外部网站的链接。XLW Advisory 不对第三方网站的内容或其隐私实践负责。
              </p>
            </section>

            <section className="mb-5">
              <h2 className="h4">10. 本政策的更新</h2>
              <p className="mb-0">
                我们可能会不时更新本隐私政策，以反映法律、监管或运营变化。任何更新将发布在本页面，并更新相应日期。
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer copy={copy} />
    </main>
  );
}