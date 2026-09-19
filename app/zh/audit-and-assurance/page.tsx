import type { Metadata } from "next";
import AuditAndAssurancePageView from "@/app/audit-and-assurance/AuditAndAssurancePageView";
import { getSiteCopy } from "@/lib/siteCopy";

export function generateMetadata(): Metadata {
  const copy = getSiteCopy("zh");
  const meta = copy.pages.auditAndAssurance.meta;
  return { title: meta.title, description: meta.description };
}

export default function Page() {
  return <AuditAndAssurancePageView lang="zh" />;
}