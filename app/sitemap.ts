import type { MetadataRoute } from "next";
import { knowledgeArticles } from "@/lib/knowledge";
import { absoluteUrl } from "@/lib/siteMeta";

export const dynamic = "force-static";

const staticRoutes = [
  "",
  "/about-us",
  "/accounting",
  "/audit-and-assurance",
  "/bookkeeping",
  "/contact",
  "/industries",
  "/liquidation",
  "/payroll",
  "/privacy-policy",
  "/tax-services",
  "/knowledge",
  "/company-formation",
  "/mprp",
  "/nomad-residence",
  "/greece-golden-visa",
  "/due-diligence",
  "/international-services",
  "/invest-china",
  "/zh",
  "/zh/about-us",
  "/zh/accounting",
  "/zh/audit-and-assurance",
  "/zh/bookkeeping",
  "/zh/contact",
  "/zh/industries",
  "/zh/liquidation",
  "/zh/payroll",
  "/zh/privacy-policy",
  "/zh/tax-services",
  "/zh/knowledge",
  "/zh/company-formation",
  "/zh/mprp",
  "/zh/nomad-residence",
  "/zh/greece-golden-visa",
  "/zh/due-diligence",
  "/zh/international-services",
  "/zh/invest-china",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const knowledgeRoutes = knowledgeArticles.flatMap((article) => [
    `/knowledge/${article.slug}`,
    `/zh/knowledge/${article.slug}`,
  ]);

  return [...staticRoutes, ...knowledgeRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route.includes("knowledge") ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("knowledge") ? 0.8 : 0.7,
  }));
}
