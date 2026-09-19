import type { SiteCopy } from "@/lib/siteCopy";
import CurrentYear from "@/components/CurrentYear";

function SocialIcon({ kind }: { kind: string }) {
  // template uses around-icons (ai-*)
  return <i className={`ai-${kind}`} />;
}

export default function Footer({ copy }: { copy: SiteCopy }) {
  const f = copy.footer;
  const copyrightText = f.copyright.prefix.replace(/^[^\s]+\s*/, "");

  return (
    <footer className="footer bg-dark pb-3 pt-sm-3 py-md-4 py-lg-5" data-bs-theme="dark" id={f.id}>
      <div className="container pb-4 pt-5">
        <div className="row pb-4 mb-4 border-bottom border-light border-opacity-10">
          <div className="col-lg-8">
            <div className="fs-sm text-uppercase text-primary fw-semibold mb-2">{copy.site.slogan}</div>
            <p className="text-body-secondary mb-0" style={{ maxWidth: 860 }}>
              {copy.site.founderStatement}
            </p>
          </div>
        </div>

        <div className="row g-4 pb-4 mb-4 border-bottom border-light border-opacity-10">
          <div className="col-lg-3">
            <h2 className="h6 text-light mb-2">{f.officialLinks.title}</h2>
            <p className="fs-sm text-body-secondary mb-0">{f.officialLinks.description}</p>
          </div>
          <div className="col-lg-9">
            <nav className="row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-2" aria-label={f.officialLinks.title}>
              {f.officialLinks.items.map((link) => (
                <div className="col" key={link.href}>
                  <a
                    className="nav-link d-inline-flex align-items-start gap-2 px-0 py-1 text-body-secondary"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{link.label}</span>
                    <i className="ai-arrow-up-right fs-sm mt-1 flex-shrink-0" aria-hidden="true" />
                  </a>
                </div>
              ))}
            </nav>
          </div>
        </div>

        <div className="d-md-flex align-items-center justify-content-between pb-1 pb-md-0 mb-4 mb-md-5">
          <nav className="nav justify-content-center justify-content-md-start pb-sm-2 pb-md-0 mb-4 mb-md-0 ms-md-n3">
            {f.nav.map((x) => (
              <a key={x.label} className="nav-link py-1 px-0 mx-3" href={x.href}>
                {x.label}
              </a>
            ))}
          </nav>

          <div className="d-flex justify-content-center justify-content-md-start me-md-n2">
            {f.socials.map((s) => (
              <a
                key={s.kind}
                className={`btn btn-icon btn-sm btn-secondary btn-${s.kind} rounded-circle mx-2`}
                href={s.href}
                aria-label={s.label}
              >
                <SocialIcon kind={s.kind} />
              </a>
            ))}
          </div>
        </div>

        <div className="nav d-block d-md-flex align-items-center justify-content-between text-center text-md-start">
          <a className="nav-link d-inline-block text-body-secondary fs-sm text-decoration-none order-md-2 py-1 px-0 mb-3 mb-md-0" href={f.privacy.href}>
            {f.privacy.label}
          </a>

          <p className="fs-sm order-md-1 mb-0">
            <span className="text-body-secondary">
              {String.fromCharCode(169)} <CurrentYear /> {copyrightText}
            </span>
            <a className="nav-link d-inline fw-normal p-0 ms-1" href={f.copyright.linkHref}>
              {f.copyright.linkLabel}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
