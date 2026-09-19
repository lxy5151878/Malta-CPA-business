import { getSiteCopy } from "@/lib/siteCopy";
import ContactPageView from "../../contact/ContactPageView";

export const metadata = getSiteCopy("zh").pages.contact.meta;

export default function Page() {
  return <ContactPageView lang="zh" />;
}