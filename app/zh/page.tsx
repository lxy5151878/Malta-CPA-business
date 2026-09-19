// app/zh/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import StrategicServices from "@/components/StrategicServices";
import Partners from "@/components/Partners";
import Features from "@/components/Features";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import BlogSection from "@/components/BlogSection";
import ContactCTA from "@/components/ContactCta";
import Footer from "@/components/Footer";

import { getSiteCopy } from "@/lib/siteCopy";

export default function ZhPage() {
  const copy = getSiteCopy("zh");

  return (
    <main id="top" className="page-wrapper">
      <Navbar lang="zh" copy={copy} />
      <Hero lang="zh" copy={copy} />
      <Services copy={copy} />
      <StrategicServices lang="zh" />
      <Partners copy={copy} />
      <Features copy={copy} />
      <Industries copy={copy} />
      <Testimonials copy={copy} />
      <Team copy={copy} />
      <BlogSection copy={copy} />
      <ContactCTA copy={copy} />
      <Footer copy={copy} />
    </main>
  );
}
