import Link from "next/link";
import { SERVICES } from "@/app/_data/services";
import { Icon } from "@/app/_components/Icon";
import styles from "@/app/_components/ServiceCards.module.css";

const SERVICE_ICONS: Record<string, Parameters<typeof Icon>[0]["name"]> = {
  "interior-painting":   "home",
  "exterior-painting":   "building",
  "wallpapering":        "layers",
  "fence-painting":      "fence",
  "decorating-finishing":"brush",
  "commercial-painting": "office",
};

export function ServiceCards() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {SERVICES.map((service, i) => (
            <article
              key={service.id}
              id={service.id}
              className={styles.card}
            >
              <div className={styles.cardHead}>
                <div className={styles.iconWrap}>
                  <Icon name={SERVICE_ICONS[service.id]} size={24} />
                </div>
                <h2 className={styles.cardTitle}>{service.title}</h2>
              </div>
              <p className={styles.cardDesc}>{service.fullDescription}</p>
              <Link href="/contact" className={styles.cardCta}>
                Enquire about this service
                <Icon name="arrow-right" size={16} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
