import type { SiteCopy } from "@/lib/siteCopy";

function SocialIcon({ kind }: { kind: string }) {
  return <i className={`ai-${kind}`} />;
}

export default function Team({ copy }: { copy: SiteCopy }) {
  const s = copy.team;

  return (
    <section className="container pt-5 mt-md-2 mt-lg-3 mt-xl-4 mt-xxl-5" id={s.id}>
      <div className="row g-4 pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2">
        <div className="col-lg-4 d-flex flex-column">
          <h2 className="display-2 d-none d-lg-block">{s.title}</h2>
          <h2 className="h1 d-lg-none text-center mb-0">{s.title}</h2>

          <div className="d-none d-lg-flex mt-auto mb-n3">
            <div data-aos="fade-left" data-aos-duration="700" data-aos-anchor-placement="bottom-bottom">
              <svg className="text-info" width="169" height="169" viewBox="0 0 169 169" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <circle cx="84.5" cy="84.5" r="84.5" />
              </svg>
            </div>
            <div data-aos="fade-right" data-aos-duration="700" data-aos-anchor-placement="bottom-bottom">
              <svg className="text-primary" width="169" height="169" viewBox="0 0 169 169" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M169 84.5C169 101.213 164.044 117.55 154.759 131.446C145.474 145.342 132.277 156.172 116.837 162.568C101.396 168.963 84.4063 170.637 68.0149 167.376C51.6235 164.116 36.567 156.068 24.7495 144.251C12.9319 132.433 4.88409 117.377 1.62364 100.985C-1.63681 84.5937 0.0365658 67.6036 6.43217 52.1632C12.8278 36.7229 23.6583 23.5258 37.5543 14.2408C51.4503 4.95583 67.7875 -6.12546e-06 84.5 -7.38722e-06L84.5 84.5L169 84.5Z" />
              </svg>
            </div>
          </div>
        </div>

        {s.members.slice(0, 3).map((m) => (
          <div className="col-sm-6 col-md-4" key={m.name}>
            <div className="card card-hover border-0 rounded-1 overflow-hidden">
              <img src={m.image} alt={m.name} />
              <div className="position-absolute top-0 start-0 w-100 h-100 opacity-0">
                <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
                <div className="card-body d-flex flex-column justify-content-end h-100 position-relative z-2 text-center" data-bs-theme="dark">
                  <h3 className="h5 mb-1">{m.name}</h3>
                  <p className="text-body mb-3">{m.role}</p>
                  <div className="d-flex justify-content-center">
                    {m.socials.map((s) => (
                      <a
                        key={s.kind}
                        className={`btn btn-icon btn-sm btn-light btn-${s.kind} rounded-circle mx-2`}
                        href={s.href}
                        aria-label={s.label}
                      >
                        <SocialIcon kind={s.kind} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="col-lg-4 d-none d-lg-flex flex-column justify-content-center text-center">
          <p className="lead px-3 mb-0">{s.intro}</p>
        </div>

        {s.members.slice(3, 6).map((m) => (
          <div className="col-sm-6 col-md-4" key={m.name}>
            <div className="card card-hover border-0 rounded-1 overflow-hidden">
              <img src={m.image} alt={m.name} />
              <div className="position-absolute top-0 start-0 w-100 h-100 opacity-0">
                <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
                <div className="card-body d-flex flex-column justify-content-end h-100 position-relative z-2 text-center" data-bs-theme="dark">
                  <h3 className="h5 mb-1">{m.name}</h3>
                  <p className="text-body mb-3">{m.role}</p>
                  <div className="d-flex justify-content-center">
                    {m.socials.map((s) => (
                      <a
                        key={s.kind}
                        className={`btn btn-icon btn-sm btn-light btn-${s.kind} rounded-circle mx-2`}
                        href={s.href}
                        aria-label={s.label}
                      >
                        <SocialIcon kind={s.kind} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="col-lg-4 d-flex flex-column justify-content-center text-center">
          <div className="mx-auto" style={{ maxWidth: 245 }}>
            <h3 className="h2 mb-4">{copy.team.cta.label === "About us" ? "Get to know our team better" : "更深入了解团队"}</h3>
            <a className="btn btn-outline-primary" href={s.cta.href}>
              {s.cta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}