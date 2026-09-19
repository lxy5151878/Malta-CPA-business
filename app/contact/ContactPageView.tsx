/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSiteCopy, type Lang } from "@/lib/siteCopy";

export default function ContactPageView({ lang }: { lang: Lang }) {
  const copy = getSiteCopy(lang);
  const p = copy.pages.contact;

  const phoneDigits = p.details.phone.digits; // "35699520938"
  const phoneDisplay = p.details.phone.display; // "+356 9952 0938"
  const phoneHref = `tel:+${phoneDigits}`;

  const email = p.details.email; // "xloucpa@hotmail.com"
  const emailHref = `mailto:${email}`;

  const whatsappHref = `https://wa.me/${phoneDigits}`;

  return (
    <main className="page-wrapper">
      <Navbar lang={lang} copy={copy} />

      {/* Contact details */}
      <section className="bg-secondary py-5">
        <div className="container pt-5 pb-lg-2 pb-xl-4 py-xxl-5">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
              <li className="breadcrumb-item">
                <a href={lang === "zh" ? "/zh" : "/"}>{p.breadcrumb.home}</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {p.breadcrumb.current}
              </li>
            </ol>
          </nav>

          {/* Page title */}
          <h1 className="display-2">{p.header.title}</h1>
          <p className="fs-lg pb-4 mb-2 mb-sm-3">{p.header.lead}</p>

          {/* Details cards */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-4 pb-2 pb-sm-4 pb-lg-5">
            {/* Address */}
            <div className="col">
              <div className="card border-0 h-100 rounded-5">
                <div className="card-body p-4 p-lg-5">
                  <h4 className="card-title mb-4">{p.cards.address.title}</h4>
                  <p className="fs-lg fw-medium pb-3 mb-3">
                    {p.details.address.line1}
                    <br />
                    {p.details.address.line2}
                  </p>
                  <a className="btn btn-sm btn-outline-primary" href="https://maps.app.goo.gl/ZuNG9cgLewXqKP5N8" target="_blank" rel="noopener noreferrer">
                    <i className="ai-map-pin me-1"></i>
                    {p.cards.address.ctaMap}
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="col">
              <div className="card border-0 h-100 rounded-5">
                <div className="card-body p-4 p-lg-5">
                  <h4 className="card-title mb-4">{p.cards.phone.title}</h4>
                  <ul className="list-unstyled mb-0">
                    <li className="pb-1 mb-2">
                      <span className="d-block fs-sm text-body-secondary mb-1">{p.cards.phone.mainOffice}</span>
                      <a className="nav-link fs-lg p-0" href={phoneHref}>
                        {phoneDisplay}
                      </a>
                    </li>
                    <li>
                      <span className="d-block fs-sm text-body-secondary mb-1">{p.cards.phone.whatsapp}</span>
                      <a className="nav-link fs-lg p-0" href={whatsappHref} target="_blank" rel="noopener">
                        {p.cards.phone.whatsappCta}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="col">
              <div className="card border-0 h-100 rounded-5">
                <div className="card-body p-4 p-lg-5">
                  <h4 className="card-title mb-4">{p.cards.schedule.title}</h4>
                  <ul className="list-unstyled mb-0">
                    <li className="pb-1 mb-2">
                      <span className="d-block fs-sm text-body-secondary mb-1">{p.cards.schedule.weekdaysLabel}</span>
                      <div className="d-flex align-items-center">
                        <span className="text-nav fs-lg fw-medium">{p.cards.schedule.weekdaysFrom}</span>
                        <span className="border-top mx-4" style={{ width: 36, height: 1 }}></span>
                        <span className="text-nav fs-lg fw-medium">{p.cards.schedule.weekdaysTo}</span>
                      </div>
                    </li>
                    <li>
                      <span className="d-block fs-sm text-body-secondary mb-1">{p.cards.schedule.weekendLabel}</span>
                      <div className="d-flex align-items-center">
                        <span className="text-nav fs-lg fw-medium">{p.cards.schedule.weekendValue}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="col">
              <div className="card border-0 h-100 rounded-5">
                <div className="card-body p-4 p-lg-5">
                  <h4 className="card-title mb-4">{p.cards.email.title}</h4>
                  <ul className="list-unstyled mb-0">
                    <li className="pb-1 mb-2">
                      <span className="d-block fs-sm text-body-secondary mb-1">{p.cards.email.generalLabel}</span>
                      <a className="nav-link fs-lg p-0" href={emailHref}>
                        {email}
                      </a>
                    </li>
                    <li>
                      <span className="d-block fs-sm text-body-secondary mb-1">{p.cards.email.quickCallLabel}</span>
                      <a className="nav-link fs-lg p-0" href={copy.navbar.cta.href}>
                        {p.cards.email.quickCallCta}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* spacer for overlap effect */}
        <div style={{ height: 250 }} />
      </section>

      {/* Contact form */}
      <section className="container" style={{ marginTop: -260 }} data-bs-theme="dark">
        <div className="card border-0 bg-primary position-relative py-lg-4 py-xl-5 rounded-5 overflow-hidden">
          {/* Decorative shapes (unchanged) */}
          <svg
            className="position-absolute end-0 mt-n2"
            width="242"
            height="331"
            viewBox="0 0 242 331"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M172.014 250.127C137.236 227.74 112.349 192.144 144.586 153.591C157.686 137.932 176.759 127.973 196.524 122.046C234.647 110.639 277.027 113.361 313.349 129.576C338.19 140.666 361.129 159.183 369.934 184.502C383.476 223.496 359.75 260.161 321.569 273.118C288.832 284.223 247.685 279.513 214.885 269.837C201.003 265.743 185.745 258.966 172.014 250.127Z"
              fill="#121519"
              fillOpacity=".07"
            />
            <path
              d="M20.3265 69.264C19.7064 43.0736 29.8071 17.1878 62.3851 19.8622C75.6229 20.9505 87.9525 27.2066 98.3563 35.3132C118.426 50.9253 132.424 73.896 136.952 98.6413C140.044 115.562 138.424 134.218 127.978 148C111.901 169.236 83.4531 170.283 62.5246 155.209C44.5807 142.281 32.0983 119.217 25.3391 98.6799C22.4836 89.9885 20.5616 79.6021 20.3265 69.264Z"
              fill="#121519"
              fillOpacity=".07"
            />
          </svg>

          <svg
            className="position-absolute start-0 bottom-0 ms-3"
            width="169"
            height="217"
            viewBox="0 0 169 217"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M34.2574 90.0177C29.666 97.6253 26.6254 106.591 24.9502 114.96C19.9522 140.043 26.4112 168.792 49.6162 181.885C66.0705 191.17 91.0017 189.904 108.062 183.692C125.725 177.266 135.045 168.04 142.29 150.389C151.409 128.174 150.912 99.6904 125.93 91.6429C115.423 88.254 104.723 86.5065 94.2249 82.5889C84.6622 79.0248 74.8545 72.1766 64.4411 71.6149C50.8011 70.8777 40.9122 79.0146 34.2574 90.0177Z"
              fill="#121519"
              fillOpacity="0.07"
            />
            <path
              d="M147.005 75.6331C152.135 70.7783 156.106 64.2374 159.153 57.9073C166.014 43.6372 174.127 22.1368 160.207 9.68505C152.924 3.17188 139.243 3.86644 130.324 5.29774C118.428 7.20428 107.295 8.85077 96.5031 14.783C85.8056 20.6599 79.0155 33.6997 77.0014 45.6686C75.4978 54.5776 79.63 63.6672 84.7391 70.7453C91.8208 80.5571 103.503 84.2003 114.817 84.3975C121.101 84.5081 127.716 84.0527 133.89 82.8121C138.932 81.7962 143.273 79.1597 147.005 75.6331Z"
              fill="#121519"
              fillOpacity="0.07"
            />
          </svg>

          <div className="card-body position-relative z-2 py-5">
            <form className="mx-auto" style={{ maxWidth: 800 }} action="#" method="post">
              <h2 className="h1 card-title text-center pb-4">{p.form.title}</h2>

              <div className="row g-4">
                <div className="col-sm-6">
                  <label className="form-label fs-base" htmlFor="name">
                    {p.form.fields.nameLabel}
                  </label>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder={p.form.fields.namePlaceholder}
                    required
                    id="name"
                    name="name"
                  />
                </div>

                <div className="col-sm-6">
                  <label className="form-label fs-base" htmlFor="company">
                    {p.form.fields.companyLabel}
                  </label>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder={p.form.fields.companyPlaceholder}
                    id="company"
                    name="company"
                  />
                </div>

                <div className="col-sm-6">
                  <label className="form-label fs-base" htmlFor="email">
                    {p.form.fields.emailLabel}
                  </label>
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder={p.form.fields.emailPlaceholder}
                    required
                    id="email"
                    name="email"
                  />
                </div>

                <div className="col-sm-6">
                  <label className="form-label fs-base" htmlFor="phone">
                    {p.form.fields.phoneLabel}
                  </label>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder={p.form.fields.phonePlaceholder}
                    id="phone"
                    name="phone"
                  />
                </div>

                <div className="col-sm-12">
                  <label className="form-label fs-base" htmlFor="service">
                    {p.form.fields.serviceLabel}
                  </label>
                  <select
                    className="form-select form-select-lg"
                    id="service"
                    name="service"
                    defaultValue={p.form.fields.serviceDefault}
                  >
                    {p.form.fields.serviceOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-sm-12">
                  <label className="form-label fs-base" htmlFor="message">
                    {p.form.fields.messageLabel}
                  </label>
                  <textarea
                    className="form-control form-control-lg"
                    rows={6}
                    placeholder={p.form.fields.messagePlaceholder}
                    required
                    id="message"
                    name="message"
                  />
                </div>

                <div className="col-sm-12">
                  <div className="d-flex flex-wrap gap-3">
                    {p.form.topics.map((t) => (
                      <div className="form-check" key={t.id}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={t.id}
                          name="topics"
                          value={t.value}
                          defaultChecked={t.defaultChecked}
                        />
                        <label className="form-check-label fs-base" htmlFor={t.id}>
                          {t.label}
                        </label>
                      </div>
                    ))}
                  </div>

                  <p className="fs-sm text-body mt-3 mb-0" style={{ opacity: 0.85 }}>
                    {p.form.disclaimer}
                  </p>
                </div>

                <div className="col-sm-12 text-center pt-4">
                  <button className="btn btn-lg btn-light" type="submit">
                    {p.form.submitLabel}
                  </button>

                  <div className="pt-3">
                    <a className="btn btn-link text-white text-decoration-none" href={emailHref}>
                      {p.form.orEmailPrefix} {email}
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

{/* Map / optional section */}
<section className="container pt-5 mt-4 mb-5" id="map">
  <div className="card border-0 bg-secondary rounded-5 overflow-hidden">
    <div className="card-body p-4 p-lg-5">
      <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3">
        <div>
          <h2 className="h3 mb-1">{p.map.title}</h2>
          <p className="text-body-secondary mb-0">{p.map.body}</p>
        </div>
        <a className="btn btn-outline-primary" href={phoneHref}>
          <i className="ai-phone me-2" />
          {p.map.ctaCall}
        </a>
      </div>

      <div className="ratio ratio-21x9 rounded-4 overflow-hidden mt-4 bg-light">
        <iframe
          src="https://www.google.com/maps?q=San+M.+Kolbe,+St.+Paul%27s+Bay,+Malta&output=embed"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-100 h-100"
          title="XLW Advisory at San M. Kolbe, St. Paul's Bay"
        />
      </div>
    </div>
  </div>
</section>

      <Footer copy={copy} />
    </main>
  );
}
