/* eslint-disable @typescript-eslint/no-explicit-any */
import type { SiteCopy } from "@/lib/siteCopy";

function ServiceIcon({ kind }: { kind: string }) {
  switch (kind) {
    case "icon1":
      return (
        <svg className="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <g className="text-info">
            <path
              d="M26.307 23.1116C26.307 28.3136 22.09 32.5307 16.888 32.5307C11.6859 32.5307 7.46891 28.3136 7.46891 23.1116C7.46891 17.9096 11.6859 13.6925 16.888 13.6925C17.1467 13.6925 17.4028 13.7038 17.6562 13.7243V6.24121C17.4016 6.22973 17.1455 6.22363 16.888 6.22363C7.56102 6.22363 0 13.7846 0 23.1116C0 32.4386 7.56102 39.9996 16.888 39.9996C26.2149 39.9996 33.7759 32.4386 33.7759 23.1116C33.7759 22.8541 33.7698 22.598 33.7584 22.3433H26.2753C26.2958 22.5968 26.307 22.8529 26.307 23.1116Z"
              fill="currentColor"
            />
          </g>
          <g className="text-primary">
            <path d="M40 20C40 8.9543 31.0457 0 20 0V20H40Z" fill="currentColor" />
          </g>
        </svg>
      );
    case "icon2":
      return (
        <svg className="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <g className="text-info">
            <path d="M25,25h15v15H25V25z" fill="currentColor" />
          </g>
          <g className="text-primary">
            <path
              d="M10,20c0-5.5,4.5-10,10-10s10,4.5,10,10h10C40,9,31,0,20,0S0,9,0,20s9,20,20,20V30C14.5,30,10,25.5,10,20z"
              fill="currentColor"
            />
          </g>
        </svg>
      );
    case "icon3":
      return (
        <svg className="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <g className="text-primary">
            <path
              d="M25.2791 12.7502C28.1954 9.83389 28.1954 5.10556 25.2791 2.18921C22.3627 -0.727136 17.6344 -0.727137 14.718 2.18921C11.8017 5.10556 11.8017 9.83389 14.718 12.7502C17.6344 15.6666 22.3627 15.6666 25.2791 12.7502Z"
              fill="currentColor"
            />
          </g>
          <g className="text-info">
            <path
              d="M14.6859 29.3056C15.6559 27.0123 16.9202 24.8838 18.4577 22.9467C13.8666 17.9802 7.29664 14.8701 0 14.8701V40.0004H12.5259C12.5259 36.2925 13.2527 32.6942 14.6859 29.3056Z"
              fill="currentColor"
            />
          </g>
          <g className="text-primary">
            <path
              d="M40.0014 40.0004V14.8701C26.1223 14.8701 14.8711 26.1214 14.8711 40.0004H40.0014Z"
              fill="currentColor"
            />
          </g>
        </svg>
      );
    case "icon4":
      return (
        <svg className="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <g className="text-info">
            <path
              d="M34.9811 16.2655C34.3635 26.3194 26.3194 34.3634 16.2656 34.981V40H40V16.2655H34.9811Z"
              fill="currentColor"
            />
          </g>
          <g className="text-info">
            <path
              d="M15.0195 30.0413C23.3152 30.0413 30.0403 23.3163 30.0403 15.0205H15.0195V30.0413Z"
              fill="currentColor"
            />
          </g>
          <g className="text-primary">
            <path
              d="M29.1953 10.0415C27.141 4.19328 21.571 0 15.0208 0C6.725 0 0 6.725 0 15.0208C0 21.571 4.19328 27.141 10.0415 29.1953V10.0415H29.1953Z"
              fill="currentColor"
            />
          </g>
        </svg>
      );
    case "icon5":
      return (
        <svg className="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <g className="text-primary">
            <path
              d="M19.9999 0C11.1313 0 3.61211 5.77313 0.992188 13.7659H39.0077C36.3877 5.77313 28.8686 0 19.9999 0Z"
              fill="currentColor"
            />
          </g>
          <g className="text-info">
            <path
              d="M7.29328 16.1094H0.379453C0.131328 17.368 0 18.6684 0 19.9998C0 26.9291 3.52437 33.0348 8.87797 36.6237L18.3427 27.1589L7.29328 16.1094Z"
              fill="currentColor"
            />
          </g>
          <g className="text-primary">
            <path
              d="M10.9688 37.848C13.6819 39.2238 16.7505 39.9998 20.0007 39.9998C31.0464 39.9998 40.0007 31.0455 40.0007 19.9998C40.0007 18.6684 39.8694 17.3679 39.6213 16.1094H32.7074L10.9688 37.848Z"
              fill="currentColor"
            />
          </g>
        </svg>
      );
    case "icon6":
    default:
      return (
        <svg className="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <g className="text-info">
            <path
              d="M20.0004 36.0226L10.982 21.3535C9.42594 23.3156 8.49609 25.7968 8.49609 28.4955C8.49609 34.8492 13.6467 39.9998 20.0004 39.9998C26.3541 39.9998 31.5047 34.8492 31.5047 28.4955C31.5047 25.7969 30.5749 23.3156 29.0188 21.3535L20.0004 36.0226Z"
              fill="currentColor"
            />
          </g>
          <g className="text-primary">
            <path
              d="M39.3962 0H0.605469L20.0009 31.5477L39.3962 0ZM25.7601 7.62359L20.0009 16.9914L14.2416 7.62359H25.7601Z"
              fill="currentColor"
            />
          </g>
        </svg>
      );
  }
}

export default function Services({ copy }: { copy: SiteCopy }) {
  const services = copy?.services;

  if (!services) {
    if (process.env.NODE_ENV !== "production") {
      console.error("[Services] Missing copy.services. copy =", copy);
    }
    return null;
  }

  return (
    <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5" id={services.id}>
      {/* Lift-on-hover style (scoped to this component) */}
      <style>{`
        .service-card-lift {
          transition: transform .18s ease, box-shadow .18s ease;
          will-change: transform;
        }
        .service-card-lift:hover,
        .service-card-lift:focus-visible {
          transform: translateY(-6px);
        }
      `}</style>

      <h2 className="h1 text-center pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2 mt-xl-1">{services.title}</h2>
      <p className="text-center pb-3 mb-3 mb-lg-4">{services.subtitle}</p>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        {services.items.map((item) => (
          <div className="col" key={item.title}>
            <a
              className="card h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden service-card-lift"
              href={item.href}
            >
              {/* ✅ Removed hover image overlay completely */}

              <div className="card-body pb-3">
                <ServiceIcon kind={item.icon} />
                <h3 className="h4">{item.title}</h3>
                <p className="mb-0">{item.description}</p>
              </div>

              <div className="card-footer border-0 pt-3 mb-3">
                <div className="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none">
                  <i className="ai-arrow-right" />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}