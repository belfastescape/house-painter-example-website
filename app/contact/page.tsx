import type { Metadata } from "next";
import { PageHero } from "@/app/_components/PageHero";
import { ContactForm } from "@/app/_components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Stockport Painting & Decorating for a free quote. We respond within 24 hours and offer a free site visit across Stockport and Greater Manchester.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        heading="Let's talk about your project"
        subtext="Fill in the form and we'll get back to you within 24 hours — or call us directly for a friendly chat."
      />
      <ContactForm />
    </>
  );
}
