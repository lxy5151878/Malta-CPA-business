"use client";

import type { SiteCopy } from "@/lib/siteCopy";

export default function ContactCTA({ copy }: { copy: SiteCopy }) {
  const cta = copy.contactCta;

  return (
    <section className="position-relative mt-n5 mt-lg-0" id={cta.id}>
      <div
        className="bg-secondary position-absolute bottom-0 start-0 w-100"
        style={{ height: "calc(100% - 3rem)" }}
      />
      <div className="container position-relative z-2">
        <div className="row">
          {/* Left */}
          <div className="col-lg-6 py-5 pb-lg-0 mb-sm-2 mb-md-3 mb-lg-0 mt-3 mt-sm-4 mt-md-5">
            <h2 className="h1 text-center text-lg-start pt-3 mt-3 mb-4">
              {cta.left.title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < cta.left.title.split("\n").length - 1 ? <br className="d-none d-lg-inline" /> : null}
                </span>
              ))}
            </h2>

            <div className="d-flex justify-content-between mx-auto mx-lg-0" style={{ maxWidth: 370 }}>
              <ul className="ps-4 me-3">
                {cta.left.col1.map((x) => (
                  <li className="mt-2" key={x}>
                    {x}
                  </li>
                ))}
              </ul>
              <ul className="ps-4">
                {cta.left.col2.map((x) => (
                  <li className="mt-2" key={x}>
                    {x}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center text-lg-start pt-4">
              <a className="btn btn-outline-dark" href={cta.left.button.href}>
                {cta.left.button.label}
              </a>
            </div>

            {/* Decorative shapes */}
            <div className="d-none d-lg-flex justify-content-end mt-n4 me-n4">
              <svg className="text-danger me-3" width="117" height="117" viewBox="0 0 117 117" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M-2.51516e-06 58.5C-3.52666e-06 70.0702 3.43096 81.3806 9.85902 91.0008C16.2871 100.621 25.4235 108.119 36.113 112.547C46.8025 116.975 58.5649 118.133 69.9128 115.876C81.2607 113.619 91.6844 108.047 99.8657 99.8657C108.047 91.6844 113.619 81.2607 115.876 69.9128C118.133 58.5649 116.975 46.8025 112.547 36.113C108.119 25.4235 100.621 16.2871 91.0009 9.85903C81.3806 3.43096 70.0702 -4.24071e-06 58.5 -5.11423e-06L58.5 58.5L-2.51516e-06 58.5Z" />
              </svg>
              <svg className="text-info" width="117" height="117" viewBox="0 0 117 117" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <circle cx="58.5" cy="58.5" r="58.5" />
              </svg>
            </div>
          </div>

          {/* Right */}
          <div className="col-lg-6">
            <div className="bg-primary d-flex flex-column align-items-center justify-content-center position-relative h-100 rounded-1 rounded-bottom-0 p-5">
              <div className="position-relative z-2 py-sm-3 py-md-4" style={{ maxWidth: 360 }} data-bs-theme="dark">
                <h2 className="h1">{cta.right.title}</h2>
                <p className="text-body mb-0">{cta.right.subtitle}</p>

                <div className="d-flex flex-column flex-sm-row align-items-center pt-3 mt-3 mt-lg-4">
                <a className="btn btn-light w-100 w-sm-auto me-sm-4 mb-2 mb-sm-0" href={cta.right.button.href}>
                  {cta.right.button.label}
                </a>

                <div className="d-flex flex-column align-items-center align-items-sm-start">
                  <a className="d-inline-block text-white fw-medium p-2" href={cta.right.email.href}>
                    {cta.right.email.label}
                  </a>

                  <div className="d-inline-block text-white fw-medium p-2">
                    {cta.right.wechat.label}: {cta.right.wechat.href}
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}