import { getSiteCopy } from "@/lib/siteCopy";
import AboutUsPageView from "./AboutUsPageView";

export const metadata = getSiteCopy("en").pages.aboutUs.meta;

export default function Page() {
  return <AboutUsPageView lang="en" />;
}