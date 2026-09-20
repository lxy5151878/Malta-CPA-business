import type { Metadata } from "next";
import Script from "next/script";
import ClientBoot from "@/components/ClientBoot";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import GoogleConsent from "@/components/GoogleConsent";
import { localBusinessJsonLd, organizationJsonLd, siteUrl } from "@/lib/siteMeta";

const GA_MEASUREMENT_ID = "G-6L6Z841W2D";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "XLW Advisory Malta",
  description:
    "Accounting, tax, audit, finance and digital services delivered by a team that keeps things clear, compliant and growth-ready.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "XLW Advisory Malta",
    description:
      "Accounting, tax, audit, finance and digital services delivered by a Malta-based advisory team.",
    siteName: "XLW Advisory",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  viewportFit: "cover" as const,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-bs-theme="light" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/assets/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/aos.css" />
        <link rel="stylesheet" href="/assets/around-icons.min.css" />
        <link rel="stylesheet" href="/assets/theme.min.css" />
        <link rel="stylesheet" href="/assets/site-overrides.css" />

        <Script src="/assets/theme-switcher.js" strategy="beforeInteractive" />
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500
            });
            gtag('set', 'ads_data_redaction', true);
            gtag('set', 'url_passthrough', true);
            try {
              var savedConsent = JSON.parse(localStorage.getItem('xlw_consent_v1') || 'null');
              if (savedConsent) {
                gtag('consent', 'update', {
                  analytics_storage: savedConsent.analytics ? 'granted' : 'denied',
                  ad_storage: savedConsent.advertising ? 'granted' : 'denied',
                  ad_user_data: savedConsent.advertising ? 'granted' : 'denied',
                  ad_personalization: savedConsent.advertising ? 'granted' : 'denied'
                });
              }
            } catch (error) {}
          `}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });
          `}
        </Script>
      </head>

      <body data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [organizationJsonLd(), localBusinessJsonLd()],
            }),
          }}
        />
        {children}
        <GoogleConsent />
        <FloatingWhatsApp
          phone={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "35699520938"}
          message="Hi! I'd like to book a free consultation."
        />

        <Script src="/assets/jarallax.min.js" strategy="afterInteractive" />
        <Script src="/assets/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/aos.js" strategy="afterInteractive" />

        {/* Init Bootstrap + AOS safely (no theme.min.js) */}
        <ClientBoot />

        {/* Keep this disabled */}
        {/* <Script src="/assets/theme.min.js" strategy="afterInteractive" /> */}
      </body>
    </html>
  );
}
