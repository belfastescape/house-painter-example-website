import Link from "next/link";
import { SITE } from "@/app/_data/site";
import { Icon } from "@/app/_components/Icon";
import styles from "@/app/_components/SiteFooter.module.css";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Brand column */}
        <div className={styles.brand}>
          <p className={styles.logo} data-biz-name>{SITE.name}</p>
          <p className={styles.tagline}>{SITE.tagline}</p>
          <div className={styles.social}>
            <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.socialLink}>
              <Icon name="facebook" size={18} />
            </a>
            <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialLink}>
              <Icon name="instagram" size={18} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Explore</h3>
          <ul className={styles.colLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Services</h3>
          <ul className={styles.colLinks}>
            <li><Link href="/services#interior-painting">Interior Painting</Link></li>
            <li><Link href="/services#exterior-painting">Exterior Painting</Link></li>
            <li><Link href="/services#wallpapering">Wallpapering</Link></li>
            <li><Link href="/services#fence-painting">Fence &amp; Gate</Link></li>
            <li><Link href="/services#commercial-painting">Commercial</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Contact</h3>
          <ul className={styles.contactList}>
            <li>
              <Icon name="map-pin" size={15} />
              <span>{SITE.address.street},<br />{SITE.address.city}, {SITE.address.postcode}</span>
            </li>
            <li>
              <Icon name="phone" size={15} />
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
            </li>
            <li>
              <Icon name="mail" size={15} />
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              <Icon name="clock" size={15} />
              <span>{SITE.hours.weekday}<br />{SITE.hours.saturday}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bar}>
        <div className={`container ${styles.barInner}`}>
          <p>© {year} <span data-biz-name>{SITE.name}</span>. All rights reserved.</p>
          <Link href="/privacy-policy" className={styles.privacyLink}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
