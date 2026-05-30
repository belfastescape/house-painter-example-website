import type { Metadata } from "next";
import { HomeHero } from "@/app/_components/HomeHero";
import { ServicesOverview } from "@/app/_components/ServicesOverview";
import { StatBar } from "@/app/_components/StatBar";
import { Testimonials } from "@/app/_components/Testimonials";
import { ProcessSteps } from "@/app/_components/ProcessSteps";
import { CTABanner } from "@/app/_components/CTABanner";

export const metadata: Metadata = {
  title: "Stockport Painting & Decorating | Professional Painters in Stockport",
  description:
    "Your home. Done properly. Expert painting and decorating across Stockport, Cheadle, Bramhall and Greater Manchester. Free quotes, 16+ years experience.",
  openGraph: {
    title: "Stockport Painting & Decorating",
    description: "Expert painters and decorators in Stockport and Greater Manchester.",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ServicesOverview />
      <StatBar />
      <Testimonials />
      <ProcessSteps />
      <CTABanner />
    </>
  );
}
