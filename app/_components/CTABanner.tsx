import Link from "next/link";
import { SITE } from "@/app/_data/site";
import styles from "@/app/_components/CTABanner.module.css";

type Props = {
  heading?: string;
  subtext?: string;
};

export function CTABanner({
  heading = "Ready to transform your home?",
  subtext = "Get a no-obligation quote in 48 hours — friendly advice, fair pricing and a finish you'll be proud of.",
}: Props) {
  return (
    <section className={styles.banner} aria-label="Call to action">
      <div className={styles.blobs} aria-hidden="true">
        <div className={styles.blob1} />
        <div className={styles.blob2} />
      </div>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content} data-reveal>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.subtext}>{subtext}</p>
          <div className={styles.actions}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Contact Us Today
            </Link>
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="btn btn-outline-white btn-lg">
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
