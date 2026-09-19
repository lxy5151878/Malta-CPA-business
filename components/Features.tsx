// components/Features.tsx
import type { SiteCopy } from "@/lib/siteCopy";

export default function Features({ copy }: { copy: SiteCopy }) {
  const { features } = copy;

  const grow = features.blocks.find((b) => b.variant === "grow");
  const approach = features.blocks.find((b) => b.variant === "approach");
  const spectrum = features.blocks.find((b) => b.variant === "spectrum");

  if (!grow || !approach || !spectrum) return null;

  return (
    <section className="bg-secondary py-5" id={features.id}>
      <div className="container py-md-2 py-lg-4 my-xl-2 my-xxl-3">
        {/* Block 1 */}
        <div
          className="row align-items-center py-3 py-sm-4 py-lg-5 mb-3 my-sm-2 my-md-3 my-lg-0 my-xl-2 my-xxl-4"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-offset="280"
          data-disable-parallax-down="md"
        >
          <div className="col-md-6 col-xxl-5 offset-lg-1 offset-xl-2 offset-xxl-3 order-md-2 pb-1 pb-sm-2 pb-md-0 mb-4 mb-md-0">
            <div className="position-relative">
              <img className="d-block rounded-1" src={grow.image} alt="Feature image" />
              <div className="d-none d-lg-block position-absolute top-0 end-0 translate-middle-y w-auto pe-1 me-4">
                <div data-aos="fade-up" data-aos-duration="950" data-aos-offset="280">
                  <svg className="text-info" width="107" height="107" viewBox="0 0 107 107" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M106.192 53.0468C106.225 63.5385 103.146 73.8042 97.3443 82.5459C91.5426 91.2875 83.279 98.1125 73.5985 102.158C63.918 106.203 53.2553 107.287 42.9589 105.272C32.6624 103.257 23.1946 98.2343 15.7528 90.8387C8.31094 83.4431 3.22928 74.0068 1.15039 63.7231C-0.92849 53.4394 0.0887821 42.7702 4.07357 33.0647C8.05836 23.3591 14.8317 15.0531 23.537 9.19711C32.2424 3.34107 42.4887 0.197979 52.9804 0.16529L53.1457 53.2121L106.192 53.0468Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-5 col-xl-4 order-md-1"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-offset="180"
            data-disable-parallax-down="md"
          >
            <div className="pe-md-4 pe-lg-0">
              <h2 className="h1 pb-sm-2 pb-lg-3">{grow.title}</h2>
              <p className="fs-xl pb-3 mb-1 mb-sm-2 mb-md-3 mb-lg-4">{grow.body}</p>
              {/* <a className="d-inline-flex align-items-center fw-semibold text-decoration-none" href={grow.link.href}>
                {grow.link.label}
                <i className="ai-arrow-right fs-4 ms-2"></i>
              </a> */}
            </div>
          </div>
        </div>

        {/* Block 2 */}
        <div
          className="row align-items-center py-3 py-sm-4 py-lg-5 mb-3 my-sm-2 my-md-3 my-lg-0 my-xl-2 my-xxl-4"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-offset="280"
          data-disable-parallax-down="md"
        >
          <div className="col-md-6 col-xxl-5 offset-xl-1 offset-xxl-2 order-md-2 pb-1 pb-sm-2 pb-md-0 mb-4 mb-md-0">
            <div className="position-relative">
              <img className="d-block rounded-1 position-relative z-2" src={approach.image} alt="Feature image" />
              <div className="d-none d-lg-block position-absolute top-0 start-0 translate-middle-x w-auto pt-3 mt-5">
                <div data-aos="fade-up" data-aos-duration="950" data-aos-offset="280">
                  <svg className="text-primary" width="160" height="160" viewBox="0 0 160 160" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="80" cy="80" r="80"></circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-6 col-xl-5 order-md-1"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-offset="180"
            data-disable-parallax-down="md"
          >
            <div className="pe-md-4 pe-lg-0">
              <h2 className="h1 pb-3 mb-2 mb-lg-3 mb-xl-4">{approach.title}</h2>
              <div className="row row-cols-1 row-cols-sm-2 g-4">
                {approach.points.map((p) => (
                  <div className="col" key={p.no}>
                    <div className="text-body-secondary mb-2">{p.no}</div>
                    <h3 className="h5">{p.title}</h3>
                    <p className="mb-0">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Block 3 */}
        <div
          className="row align-items-center py-3 py-sm-4 py-lg-5 my-sm-2 my-md-3 my-lg-0 my-xl-2 my-xxl-4"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-offset="280"
          data-disable-parallax-down="md"
        >
          <div className="col-md-6 col-xxl-5 offset-lg-1 offset-xl-2 offset-xxl-3 order-md-2 pb-1 pb-sm-2 pb-md-0 mb-4 mb-md-0">
            <div className="position-relative">
              <img className="d-block rounded-1" src={spectrum.image} alt="Feature image" />
              <div className="d-none d-lg-block position-absolute top-0 start-50 translate-middle w-auto ms-2">
                <div data-aos="fade-up" data-aos-duration="950" data-aos-offset="280">
                  <svg className="text-danger" width="108" height="111" viewBox="0 0 108 111" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M68.9244 1.23484C69.1072 0.713703 69.6783 0.438641 70.1961 0.630706C78.5792 3.74012 86.1086 8.79818 92.1601 15.3932C98.4371 22.2339 102.93 30.5171 105.241 39.5091C107.552 48.501 107.61 57.9241 105.41 66.9438C103.209 75.9634 98.8179 84.3011 92.6254 91.2184C86.4328 98.1356 78.6299 103.419 69.9078 106.6C61.1857 109.782 51.8136 110.763 42.6217 109.457C33.4298 108.151 24.7018 104.598 17.2109 99.1136C9.98911 93.8259 4.13195 86.8998 0.117483 78.9106C-0.130486 78.4171 0.079957 77.8191 0.577752 77.5799L21.7446 67.4094C22.2425 67.1702 22.8384 67.3807 23.0936 67.8705C25.2883 72.084 28.4252 75.7403 32.2656 78.5522C36.3752 81.5612 41.1634 83.5102 46.2062 84.2266C51.2489 84.943 56.3905 84.4048 61.1756 82.6595C65.9606 80.9142 70.2414 78.0157 73.6387 74.2208C77.0359 70.426 79.4449 65.8518 80.6522 60.9036C81.8594 55.9553 81.8277 50.7857 80.5598 45.8526C79.2919 40.9196 76.827 36.3753 73.3834 32.6224C70.1654 29.1154 66.1855 26.4006 61.7558 24.6837C61.2409 24.4841 60.9659 23.9149 61.1488 23.3938L68.9244 1.23484Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-5 col-xl-4 order-md-1"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-offset="180"
            data-disable-parallax-down="md"
          >
            <div className="pe-md-4 pe-lg-0">
              <h2 className="h1 pb-sm-2 pb-lg-3">{spectrum.title}</h2>
              <p className="fs-xl mb-lg-4">{spectrum.body}</p>

              <ul className="list-unstyled pb-3 mb-3 mb-lg-4">
                {spectrum.bullets.map((b) => (
                  <li className="d-flex pt-1 mt-2 mx-2 mx-md-0" key={b}>
                    <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
                    {b}
                  </li>
                ))}
              </ul>

              <a className="btn btn-primary" href={spectrum.cta.href}>
                {spectrum.cta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}