import GrowthServicePage from "@/components/GrowthServicePage";
import { getGrowthPage } from "@/lib/growthServices";

export const metadata = getGrowthPage("zh", "greeceGoldenVisa").meta;
export default function Page() { return <GrowthServicePage lang="zh" pageKey="greeceGoldenVisa" />; }
