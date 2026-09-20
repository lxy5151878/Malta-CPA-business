// app/privacy-policy/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSiteCopy } from "@/lib/siteCopy";

export const metadata: Metadata = {
  title: "Privacy Policy | XLW Advisory",
  description:
    "Privacy Policy for XLW Advisory. Learn how we collect, use, protect, and retain personal data in accordance with GDPR.",
};

export default function PrivacyPolicyPage() {
  const copy = getSiteCopy("en");

  return (
    <main id="top" className="page-wrapper">
      <Navbar lang="en" copy={copy} />

      <section className="container pt-5 mt-4 mt-lg-5">
        {/* Header */}
        <div className="pt-3 pt-lg-4">
          <h1 className="display-6 mb-2">Privacy Policy</h1>
          <p className="text-body-secondary mb-4">Last updated: September 2026</p>
        </div>

        {/* Content */}
        <div className="row">
          <div className="col-lg-9">
            <section className="mb-4">
              <h2 className="h4">1. Introduction</h2>
              <p className="mb-0">
                XLW Advisory is a professional services firm providing accounting, audit &amp; assurance, tax, and
                advisory services. We are committed to safeguarding the confidentiality, integrity, and security of
                personal data processed through this website (“Website”).
              </p>
              <p className="mt-3 mb-0">
                All personal data is processed in accordance with the General Data Protection Regulation (EU) 2016/679
                (“GDPR”) and applicable professional and regulatory obligations.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4">2. Categories of Personal Data</h2>
              <p className="mb-2">
                Depending on your interaction with the Website, we may collect the following limited categories of
                personal data:
              </p>
              <ul className="mb-2">
                <li>
                  <strong>Technical data:</strong> IP address, browser type, date and time of access (for security, audit,
                  and system integrity purposes)
                </li>
                <li>
                  <strong>Contact data:</strong> name, email address, telephone number, and message content voluntarily
                  submitted via enquiry forms
                </li>
              </ul>
              <p className="mb-0">
                Client data submitted outside this Website in the course of professional engagements is governed by
                separate engagement letters and professional confidentiality obligations.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4">3. Purpose and Legal Basis of Processing</h2>
              <p className="mb-2">
                Personal data collected via this Website is processed strictly for the following purposes:
              </p>
              <ul className="mb-2">
                <li>Responding to enquiries and preliminary professional communications</li>
                <li>Assessing whether professional services may be provided</li>
                <li>Ensuring the security and proper functioning of the Website</li>
                <li>Meeting legal, regulatory, and professional compliance requirements</li>
              </ul>
              <p className="mb-0">
                Processing is carried out on the basis of consent, legitimate interests, or legal obligations, as applicable.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4">4. Professional Confidentiality</h2>
              <p className="mb-0">
                As a professional advisory firm, XLW Advisory is subject to strict professional confidentiality and ethical
                obligations. Any personal data received in the context of accounting, audit, tax, or advisory services is
                treated with enhanced confidentiality and processed solely for lawful professional purposes.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4">5. Data Retention</h2>
              <p className="mb-2">Personal data is retained only for as long as necessary to:</p>
              <ul className="mb-2">
                <li>Fulfil the purpose for which it was collected</li>
                <li>Comply with statutory, regulatory, or professional record-keeping obligations</li>
              </ul>
              <p className="mb-0">Where retention is no longer required, data is securely deleted or anonymised.</p>
            </section>

            <section className="mb-4">
              <h2 className="h4">6. Data Sharing and Transfers</h2>
              <p className="mb-2">XLW Advisory does not sell or commercially exploit personal data.</p>
              <p className="mb-2">Personal data may be disclosed only where:</p>
              <ul className="mb-2">
                <li>Required by law, court order, or regulatory authority</li>
                <li>Necessary to comply with professional obligations</li>
                <li>You have provided explicit consent</li>
              </ul>
              <p className="mb-0">
                We do not transfer personal data outside the European Economic Area unless appropriate safeguards are in
                place.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4">7. Website analytics, advertising and consent</h2>
              <p className="mb-2">
                Essential technologies are used to remember privacy choices and protect the enquiry form. With your
                permission, Google Analytics 4 may measure use of the Website and Google Ads may measure advertising
                performance. Analytics and advertising storage are denied by default until you make a choice.
              </p>
              <p className="mb-0">
                You can accept, reject, or customise these optional purposes and change your decision at any time using
                “Cookie settings” in the Website footer. Advertising click identifiers are retained only where the
                relevant advertising consent has been granted.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4">8. Service providers</h2>
              <p className="mb-0">
                We use service providers including Google Firebase for secure form processing and data hosting, Google
                Analytics and Google Ads where consent is granted, and an email delivery provider for enquiry
                notifications. Providers process data only for the relevant service and are subject to their contractual
                and legal safeguards.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4">9. Data Security Measures</h2>
              <p className="mb-0">
                We implement appropriate technical and organisational measures to protect personal data, including
                safeguards appropriate for financial and professional services information.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4">10. Data Subject Rights</h2>
              <p className="mb-2">Under GDPR, you have the right to:</p>
              <ul className="mb-2">
                <li>Access your personal data</li>
                <li>Request rectification or erasure</li>
                <li>Restrict or object to processing</li>
                <li>Withdraw consent where processing is consent-based</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
              <p className="mb-0">Requests may be submitted using the contact information provided on this Website.</p>
            </section>

            <section className="mb-4">
              <h2 className="h4">11. Third-Party Websites</h2>
              <p className="mb-0">
                This Website may contain links to external websites. XLW Advisory is not responsible for the content or
                privacy practices of third-party websites.
              </p>
            </section>

            <section className="mb-5">
              <h2 className="h4">12. Updates to This Policy</h2>
              <p className="mb-0">
                This Privacy Policy may be updated from time to time to reflect legal, regulatory, or operational changes.
                Any updates will be published on this page with a revised date.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer copy={copy} />
    </main>
  );
}
