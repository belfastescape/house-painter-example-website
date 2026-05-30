import { TESTIMONIALS } from "@/app/_data/testimonials";
import { Icon } from "@/app/_components/Icon";
import styles from "@/app/_components/Testimonials.module.css";

export function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header} data-reveal>
          <span className="label-badge">Testimonials</span>
          <h2 className={styles.heading}>What our customers say</h2>
        </div>

        <div className={styles.grid} data-reveal-stagger>
          {TESTIMONIALS.map((t) => (
            <article key={t.id} className={styles.card}>
              <div className={styles.quote} aria-hidden="true">
                <Icon name="quote" size={32} />
              </div>

              <div className={styles.stars} aria-label={`${t.stars} stars`}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Icon key={i} name="star" size={16} />
                ))}
              </div>

              <blockquote className={styles.text}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <footer className={styles.author}>
                <span className={styles.name}>{t.name}</span>
                <span className={styles.location}>{t.location}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
