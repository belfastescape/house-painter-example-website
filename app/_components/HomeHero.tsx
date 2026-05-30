import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/app/_data/site";
import { Icon } from "@/app/_components/Icon";
import styles from "@/app/_components/HomeHero.module.css";

export function HomeHero() {
  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Decorative blobs */}
      <div className={styles.blobs} aria-hidden="true">
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.blob3} />
      </div>

      <div className={`container ${styles.inner}`}>
        {/* Left column */}
        <div className={styles.content}>
          <span className="label-badge">Stockport&#8217;s trusted painters</span>

          <h1 className={styles.heading}>
            Painting and Decorating Stockport<br />for the last 20 years — beautifully.
          </h1>

          <p className={styles.lead}>
            Transforming homes across Stockport and Greater Manchester since {SITE.founded}.
            Quality finishes, competitive prices, zero hassle.
          </p>

          <div className={styles.actions}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Get a Free Quote
            </Link>
            <Link href="/projects" className="btn btn-secondary btn-lg">
              See Our Work
            </Link>
          </div>

          <div className={styles.trust}>
            <Icon name="map-pin" size={16} />
            <span>Serving Stockport, Cheadle, Bramhall &amp; beyond</span>
          </div>
        </div>

        {/* Right column — hero image */}
        <div className={styles.imageWrap}>
          <div className={styles.imageFigure}>
            <Image
              src="/images/hero-image.webp"
              alt="Professional painter at work in Stockport"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className={styles.image}
            />
          </div>

          {/* Floating chip */}
          <div className={styles.chip}>
            <div className={styles.chipStat}>{SITE.yearsExperience}+</div>
            <div className={styles.chipLabel}>years decorating<br />Greater Manchester</div>
          </div>
        </div>
      </div>
    </section>
  );
}
