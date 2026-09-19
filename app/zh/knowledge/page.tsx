import type { Metadata } from "next";
import KnowledgeIndexView from "@/components/KnowledgeIndexView";
import { absoluteUrl } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: "Malta Knowledge Center | XLW Advisory",
  description: "面向 AI 搜索的马耳他公司、会计、税务、VAT、薪资和跨境服务双语知识库。",
  keywords: ["马耳他会计", "马耳他税务", "马耳他公司合规", "马耳他知识库"],
  alternates: {
    canonical: absoluteUrl("/zh/knowledge"),
    languages: {
      en: absoluteUrl("/knowledge"),
      "zh-CN": absoluteUrl("/zh/knowledge"),
    },
  },
};

export default function Page() {
  return <KnowledgeIndexView lang="zh" />;
}
