import type { Metadata } from "next";
import { PageHero } from "@/app/_components/PageHero";
import { ServiceCards } from "@/app/_components/ServiceCards";
import { ValuesSection } from "@/app/_components/ValuesSection";
import { BeforeAfter } from "@/app/_components/BeforeAfter";
import { CTABanner } from "@/app/_components/CTABanner";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "From interior and exterior painting to wallpapering, fence painting and commercial decorating — Stockport Painting & Decorating handles it all with the same care and finish on every job.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        heading="Our painting & decorating services"
        subtext="From a single room refresh to a full exterior repaint — we handle it all, with the same care and tidy finish on every job."
      />
      <ServiceCards />
      <ValuesSection />
      <BeforeAfter />
      <CTABanner
        heading="Like what you see?"
        subtext="Get in touch for a free site visit and a no-obligation quote within 48 hours."
      />
    </>
  );
}
