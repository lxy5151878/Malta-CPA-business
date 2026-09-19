import LiquidationPageView from "./LiquidationPageView";
import { getSiteCopy } from "@/lib/siteCopy";

export const metadata = getSiteCopy("en").pages.liquidation.meta;

export default function Page() {
  return <LiquidationPageView lang="en" />;
}