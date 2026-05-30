import Link from "next/link";
import { SERVICES } from "@/app/_data/services";
import { Icon } from "@/app/_components/Icon";
import styles from "@/app/_components/ServicesOverview.module.css";

const SERVICE_ICONS: Record<string, Parameters<typeof Icon>[0]["name"]> = {
  "interior-painting":  "home",
  "exterior-painting":  "building",
  "wallpapering":       "layers",
  "fence-painting":     "fence",
  "decorating-finishing":"brush",
  "commercial-painting":"office",
};

export function ServicesOverview() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header} data-reveal>
          <span className="label-badge">Our services</span>
          <h2 className={styles.heading}>Everything your home needs</h2>
        </div>

        <div className={styles.grid} data-reveal-stagger>
          {SERVICES.map((service) => (
            <article key={service.id} className={styles.card}>
              <div className={styles.iconWrap}>
                <Icon name={SERVICE_ICONS[service.id]} size={22} />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.shortDescription}</p>
              <Link href={`/services#${service.id}`} className={styles.cardLink}>
                Learn more
                <Icon name="arrow-right" size={16} />
              </Link>
            </article>
          ))}
        </div>

        <div className={styles.cta} data-reveal>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
