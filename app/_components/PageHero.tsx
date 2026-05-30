import styles from "@/app/_components/PageHero.module.css";

type Props = {
  eyebrow?: string;
  heading: string;
  subtext?: string;
};

export function PageHero({ eyebrow, heading, subtext }: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.blobs} aria-hidden="true">
        <div className={styles.blob1} />
        <div className={styles.blob2} />
      </div>
      <div className={`container ${styles.inner}`}>
        {eyebrow && (
          <span className={`label-badge ${styles.eyebrow}`}>{eyebrow}</span>
        )}
        <h1 className={styles.heading}>{heading}</h1>
        {subtext && <p className={styles.subtext}>{subtext}</p>}
      </div>
    </section>
  );
}
