import LiquidationPageView from "@/app/liquidation/LiquidationPageView";
import { getSiteCopy } from "@/lib/siteCopy";

export const metadata = getSiteCopy("zh").pages.liquidation.meta;

export default function Page() {
  return <LiquidationPageView lang="zh" />;
}