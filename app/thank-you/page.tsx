import type { Metadata } from "next";
import ThankYouPage from "@/components/ThankYouPage";

export const metadata: Metadata = {
  title: "Thank you | XLW Advisory",
  description: "Your enquiry has been submitted to XLW Advisory.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ThankYouPage lang="en" />;
}

