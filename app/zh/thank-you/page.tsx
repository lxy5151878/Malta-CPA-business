import type { Metadata } from "next";
import ThankYouPage from "@/components/ThankYouPage";

export const metadata: Metadata = {
  title: "感谢您的咨询 | XLW Advisory",
  description: "您的咨询已经提交给 XLW Advisory。",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ThankYouPage lang="zh" />;
}

