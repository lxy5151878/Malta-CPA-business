import { getSiteCopy } from "@/lib/siteCopy";
import AboutUsPageView from "@/app/about-us/AboutUsPageView";

export const metadata = getSiteCopy("zh").pages.aboutUs.meta;

export default function Page() {
  return <AboutUsPageView lang="zh" />;
}