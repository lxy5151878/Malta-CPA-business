import PayrollPageView from "./PayrollPageView";
import { getSiteCopy } from "@/lib/siteCopy";

export const metadata = getSiteCopy("en").pages.payroll.meta;

export default function Page() {
  return <PayrollPageView lang="en" />;
}