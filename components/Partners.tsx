// components/Partners.tsx
import type { SiteCopy } from "@/lib/siteCopy";

export default function Partners({ copy }: { copy: SiteCopy }) {
  const { partners } = copy;

  return (
    <section className="container py-5 my-lg-3 my-xl-4 my-xxl-5" id={partners.id}>
      <h2 className="h1 text-center pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2 mt-xl-1">
        {partners.title}
      </h2>
      <p className="text-center pb-2 pb-sm-3">{partners.subtitle}</p>

      <div className="row row-cols-3 row-cols-md-4 g-2 g-md-4 pb-2 pb-sm-3 pb-md-4 pb-xl-5">
        {partners.logos.map((logo) => (
          <div className="col" key={logo.alt}>
          <img className="d-block mx-auto" src={logo.src} width={logo.width ?? 220} alt={logo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}