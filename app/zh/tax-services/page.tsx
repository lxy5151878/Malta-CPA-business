import type { Metadata } from "next";
import TaxServicesPageView from "@/app/tax-services/TaxServicesPageView";
import { getSiteCopy } from "@/lib/siteCopy";

export function generateMetadata(): Metadata {
  const copy = getSiteCopy("zh");
  const meta = copy.pages.taxServices.meta;
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function Page() {
  return <TaxServicesPageView lang="zh" />;
}