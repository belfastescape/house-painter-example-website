import { Icon } from "@/app/_components/Icon";
import styles from "@/app/_components/ValuesSection.module.css";

const VALUES = [
  {
    icon: "star" as const,
    title: "Quality Finishes",
    description:
      "Premium paints, meticulous preparation and an eye for detail. We don’t cut corners — we cut in cleanly.",
  },
  {
    icon: "clock" as const,
    title: "Always on Time",
    description:
      "We respect your schedule, turn up when we say we will and stick to the agreed timeline — no excuses.",
  },
  {
    icon: "brush" as const,
    title: "Tidy & Respectful",
    description:
      "We protect your home, clear up every evening and leave every room cleaner than we found it.",
  },
  {
    icon: "shield" as const,
    title: "Fully Insured",
    description:
      "Public liability insurance up to £2 million and a 2-year workmanship guarantee on every job.",
  },
];

export function ValuesSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header} data-reveal>
          <span className="label-badge">Why choose us</span>
          <h2 className={styles.heading}>What sets us apart</h2>
        </div>

        <div className={styles.grid} data-reveal-stagger>
          {VALUES.map((value) => (
            <div key={value.title} className={styles.card}>
              <div className={styles.iconWrap}>
                <Icon name={value.icon} size={22} />
              </div>
              <h3 className={styles.cardTitle}>{value.title}</h3>
              <p className={styles.cardDesc}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
