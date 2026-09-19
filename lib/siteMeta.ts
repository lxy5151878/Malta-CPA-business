export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://accountantsmalta.com";

export const companyMeta = {
  name: "XLW Advisory",
  legalName: "XLW Advisory",
  url: siteUrl,
  logo: `${siteUrl}/assets/logo.png`,
  email: "info@accountantsmalta.com",
  phoneDisplay: "+356 9952 0938",
  phoneDigits: "35699520938",
  address: {
    streetAddress: "San M. Kolbe",
    addressLocality: "St. Paul's Bay",
    postalCode: "",
    addressCountry: "MT",
  },
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
      postalCode: companyMeta.address.postalCode,
      addressCountry: companyMeta.address.addressCountry,
    },
    areaServed: [
      { "@type": "Country", name: "Malta" },
      { "@type": "AdministrativeArea", name: "European Union" },
    ],
    knowsLanguage: ["en", "zh"],
    priceRange: "$$",
  };
}
