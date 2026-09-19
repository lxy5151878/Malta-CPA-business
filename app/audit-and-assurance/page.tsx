import type { Metadata } from "next";
import AuditAndAssurancePageView from "./AuditAndAssurancePageView";
import { getSiteCopy } from "@/lib/siteCopy";

export function generateMetadata(): Metadata {
  const copy = getSiteCopy("en");
  const meta = copy.pages.auditAndAssurance.meta;
  return { title: meta.title, description: meta.description };
}

export default function Page() {
  return <AuditAndAssurancePageView lang="en" />;
}