import Image from "next/image";
import styles from "@/app/_components/ProcessSteps.module.css";

const STEPS = [
  {
    number: "01",
    title: "Free Site Visit",
    description:
      "We come to you, assess the job, take measurements and understand exactly what you want. No commitment, no cost.",
  },
  {
    number: "02",
    title: "Written Quote",
    description:
      "Detailed written quote within 48 hours. Fixed price, no hidden costs, no surprises when the invoice arrives.",
  },
  {
    number: "03",
    title: "We Get Painting",
    description:
      "Professional job done to schedule. We protect your home, keep the workspace tidy and update you throughout.",
  },
  {
    number: "04",
    title: "Final Walkthrough",
    description:
      "You inspect every inch before we sign off. We don't consider a job done until you're genuinely happy with it.",
  },
];

export function ProcessSteps() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        {/* Left — text */}
        <div className={styles.content}>
          <div className={styles.header} data-reveal>
            <span className="label-badge">Our process</span>
            <h2 className={styles.heading}>How we get the job done, on time</h2>
            <p className={styles.intro}>
              We run every project the same way — clear communication, careful prep and a tidy finish that keeps our customers coming back.
            </p>
          </div>

          <ol className={styles.steps} data-reveal-stagger>
            {STEPS.map((step) => (
              <li key={step.number} className={styles.step}>
                <div className={styles.stepNumber} aria-hidden="true">
                  {step.number}
                </div>
                <div className={styles.stepBody}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Right — image */}
        <div className={styles.imageWrap} data-reveal>
          <Image
            src="/images/painter-ladder-interior.webp"
            alt="Painter on a ladder working on an interior wall"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
