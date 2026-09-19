import IndustriesPageView from "@/app/industries/IndustriesPageView";
import { getSiteCopy } from "@/lib/siteCopy";

export const metadata = getSiteCopy("zh").pages.industries.meta;

export default function Page() {
  return <IndustriesPageView lang="zh" />;
}