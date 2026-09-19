import IndustriesPageView from "./IndustriesPageView";
import { getSiteCopy } from "@/lib/siteCopy";

export const metadata = getSiteCopy("en").pages.industries.meta;

export default function Page() {
  return <IndustriesPageView lang="en" />;
}