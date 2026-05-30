import styles from "@/app/_components/StatBar.module.css";

const STATS = [
  { value: "16+",    label: "Years experience" },
  { value: "500+",   label: "Homes painted" },
  { value: "100%",   label: "5-star reviews" },
  { value: "2-year", label: "Workmanship guarantee" },
];

export function StatBar() {
  return (
    <section className={styles.bar} aria-label="Key statistics">
      <div className={`container ${styles.inner}`} data-reveal-stagger>
        {STATS.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
