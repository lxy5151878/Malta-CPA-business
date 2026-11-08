import type { Metadata } from "next";
import ThankYouPage from "@/components/ThankYouPage";

export const metadata: Metadata = {
  title: "Thank you | XLOU & ASSOCIATES",
  description: "Your enquiry has been submitted to XLOU & ASSOCIATES.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ThankYouPage lang="en" />;
}

