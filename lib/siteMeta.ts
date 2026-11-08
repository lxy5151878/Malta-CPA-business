export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://accountantsmalta.com";

export const companyMeta = {
  name: "XLOU & ASSOCIATES",
  legalName: "XLOU & ASSOCIATES",
  url: siteUrl,
  logo: `${siteUrl}/assets/xlou-associates-logo.png`,
  email: "info@accountantsmalta.com",
  phoneDisplay: "+356 9952 0938",
  phoneDigits: "35699520938",
  address: {
    streetAddress: "Triq San Massimiljanu Kolbe",
    addressLocality: "San Pawl il-Baħar",
    addressRegion: "Northern Region",
    postalCode: "SPB 1231",
    addressCountry: "MT",
  },
  geo: {
    latitude: 35.9483,
    longitude: 14.41866,
  },
  mapUrl: "https://maps.app.goo.gl/f1QCySsiUJJax13L6",
  mapEmbedUrl: "https://www.google.com/maps?q=35.948300,14.418660&z=18&output=embed",
};

export function absoluteUrl(path = "") {
  if (!path) return siteUrl;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyMeta.name,
    legalName: companyMeta.legalName,
    url: companyMeta.url,
    logo: companyMeta.logo,
    email: companyMeta.email,
    telephone: companyMeta.phoneDisplay,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyMeta.phoneDisplay,
      email: companyMeta.email,
      contactType: "customer support",
      areaServed: ["MT", "EU"],
      availableLanguage: ["English", "Chinese"],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: companyMeta.name,
    url: companyMeta.url,
    logo: companyMeta.logo,
    image: companyMeta.logo,
    email: companyMeta.email,
    telephone: companyMeta.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyMeta.address.streetAddress,
      addressLocality: companyMeta.address.addressLocality,
      addressRegion: companyMeta.address.addressRegion,
      postalCode: companyMeta.address.postalCode,
      addressCountry: companyMeta.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: companyMeta.geo.latitude,
      longitude: companyMeta.geo.longitude,
    },
    hasMap: companyMeta.mapUrl,
    areaServed: [
      { "@type": "Country", name: "Malta" },
      { "@type": "AdministrativeArea", name: "European Union" },
    ],
    knowsLanguage: ["en", "zh"],
    priceRange: "$$",
  };
}
