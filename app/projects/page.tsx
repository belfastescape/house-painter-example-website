import type { Metadata } from "next";
import { PageHero } from "@/app/_components/PageHero";
import { ProjectsGrid } from "@/app/_components/ProjectsGrid";
import { CTABanner } from "@/app/_components/CTABanner";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "A selection of painting and decorating work across Stockport and Greater Manchester — homes refreshed, exteriors revived and businesses smartened up.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        heading="Our recent projects"
        subtext="A selection of painting and decorating work across Stockport and Greater Manchester — homes refreshed, exteriors revived and businesses smartened up."
      />
      <ProjectsGrid />
      <CTABanner
        heading="Want results like these?"
        subtext="Let's talk about your project. Free site visit, detailed quote in 48 hours, no obligation."
      />
    </>
  );
}
