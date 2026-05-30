import type { Metadata } from "next";
import { PageHero } from "@/app/_components/PageHero";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Stockport Painting & Decorating.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero heading="Privacy Policy" />
      <section className={styles.content}>
        <div className="container container--narrow">
          <p>
            This privacy policy sets out how Stockport Painting &amp; Decorating uses and protects any information
            that you give us when you use this website.
          </p>
          <h2>What we collect</h2>
          <p>
            We may collect your name, email address, phone number and any details you provide via the contact form.
            This information is used solely to respond to your enquiry.
          </p>
          <h2>What we do with your information</h2>
          <p>
            We will not sell, distribute or lease your personal information to third parties. We may use your
            information to send you information about our services that we think you may find useful.
          </p>
          <h2>Contact</h2>
          <p>
            If you have any questions regarding this privacy policy, please contact us at{" "}
            <a href="mailto:hello@stockportpainting.co.uk">hello@stockportpainting.co.uk</a>.
          </p>
        </div>
      </section>
    </>
  );
}
