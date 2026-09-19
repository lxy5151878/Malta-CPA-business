import GrowthServicePage from "@/components/GrowthServicePage";
import { getGrowthPage } from "@/lib/growthServices";

export const metadata = getGrowthPage("en", "greeceGoldenVisa").meta;
export default function Page() { return <GrowthServicePage lang="en" pageKey="greeceGoldenVisa" />; }
