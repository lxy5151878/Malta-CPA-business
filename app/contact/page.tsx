import { getSiteCopy } from "@/lib/siteCopy";
import ContactPageView from "./ContactPageView";

export const metadata = getSiteCopy("en").pages.contact.meta;

export default function Page() {
  return <ContactPageView lang="en" />;
}