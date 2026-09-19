import PayrollPageView from "@/app/payroll/PayrollPageView";
import { getSiteCopy } from "@/lib/siteCopy";

export const metadata = getSiteCopy("zh").pages.payroll.meta;

export default function Page() {
  return <PayrollPageView lang="zh" />;
}