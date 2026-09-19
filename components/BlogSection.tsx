import type { SiteCopy } from "@/lib/siteCopy";

export default function BlogSection({ copy }: { copy: SiteCopy }) {
  const b = copy.blog;

  return (
    <section className="container py-5 mb-sm-2 mb-md-0 my-lg-3 my-xl-4 my-xxl-5" id={b.id}>
      <h2 className="h1 text-center text-sm-start pb-3 pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2 mb-3 mb-lg-4">
        {b.title}
      </h2>

      <div className="row">
        <div className="col-lg-6 pb-3 mb-2 mb-sm-3">
          <a
            className="card h-100 border-0 rounded-1 overflow-hidden text-decoration-none bg-size-cover bg-position-center"
            href={b.featured.href}
            style={{
              maxWidth: 600,
              minHeight: 300,
              backgroundImage: `url(${b.featured.image})`,
            }}
          >
            <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
            <div className="card-body d-flex flex-column justify-content-end h-100 position-relative z-2" data-bs-theme="dark">
              <h3>{b.featured.title}</h3>
              <p className="text-body mb-0">{b.featured.excerpt}</p>
            </div>
          </a>
        </div>

        <div className="col-lg-6">
          <div className="row row-cols-1 row-cols-sm-2 g-4">
            {b.items.map((it) => (
              <article className="col" key={it.title}>
                <div className="pb-4 pt-2 pt-xl-3 ms-md-3 border-bottom">
                  <h3 className="h4">
                    <a href={it.href}>{it.title}</a>
                  </h3>
                  <p className="mb-4">{it.excerpt}</p>
                  <div className="d-flex align-items-center">
                    <span className="fs-sm text-body-secondary">{it.date}</span>
                    <span className="fs-xs opacity-20 mx-3">|</span>
                    <a className="badge text-nav fs-xs border" href={it.href}>
                      {it.tag}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="text-end pb-md-4 pt-3 mt-2 mt-sm-3 mt-lg-4">
        <a className="d-inline-flex align-items-center fw-semibold text-decoration-none" href={b.all.href}>
          {b.all.label}
          <i className="ai-arrow-right fs-4 ms-2" />
        </a>
      </div>
    </section>
  );
}