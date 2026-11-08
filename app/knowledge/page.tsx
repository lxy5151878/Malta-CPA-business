import type { Metadata } from "next";
import KnowledgeIndexView from "@/components/KnowledgeIndexView";
import { absoluteUrl } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: "Malta Knowledge Center | XLOU & ASSOCIATES",
  description:
    "AI-optimized Malta company, accounting, tax, VAT, payroll and cross-border services articles from XLOU & ASSOCIATES.",
  keywords: ["Malta accounting", "Malta tax", "Malta company compliance", "Malta Knowledge Center"],
  alternates: {
    canonical: absoluteUrl("/knowledge"),
    languages: {
      en: absoluteUrl("/knowledge"),
      "zh-CN": absoluteUrl("/zh/knowledge"),
    },
  },
};

export default function Page() {
  return <KnowledgeIndexView lang="en" />;
}
