"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { SITE } from "@/app/_data/site";
import { Icon } from "@/app/_components/Icon";
import styles from "@/app/_components/SiteHeader.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <a href="#main-content" className="sr-only">Skip to main content</a>

      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
        {/* Utility bar */}
        <div className={styles.utility}>
          <div className={`container ${styles.utilityInner}`}>
            <div className={styles.utilityLeft}>
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className={styles.utilityLink}>
                <Icon name="phone" size={14} />
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className={styles.utilityLink}>
                <Icon name="mail" size={14} />
                {SITE.email}
              </a>
            </div>
            <div className={styles.utilityRight}>
              <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.socialLink}>
                <Icon name="facebook" size={16} />
              </a>
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialLink}>
                <Icon name="instagram" size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className={styles.nav}>
          <div className={`container ${styles.navInner}`}>
            <Link href="/" className={styles.logo} aria-label="Home">
              <span data-biz-name className={styles.logoText}>{SITE.name}</span>
            </Link>

            <nav className={styles.navLinks} aria-label="Main navigation">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`${styles.navLink} ${pathname === href ? styles.active : ""}`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className={styles.navCta}>
              <Link href="/contact" className="btn btn-primary btn-md">
                Get a Quote
              </Link>
            </div>

            <button
              className={styles.menuBtn}
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              <Icon name="menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {isOpen && (
        <div className={styles.scrim} onClick={() => setIsOpen(false)} aria-hidden="true" />
      )}
      <nav
        id="mobile-nav"
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <div className={styles.drawerHead}>
          <span className={styles.logoText} data-biz-name>{SITE.name}</span>
          <button
            className={styles.closeBtn}
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
          >
            <Icon name="close" size={24} />
          </button>
        </div>

        <div className={styles.drawerLinks}>
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.drawerLink} ${pathname === href ? styles.active : ""}`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className={styles.drawerFooter}>
          <Link href="/contact" className="btn btn-primary btn-lg" style={{ width: "100%", justifyContent: "center" }}>
            Get a Free Quote
          </Link>
          <div className={styles.drawerContact}>
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className={styles.utilityLink}>
              <Icon name="phone" size={16} />
              {SITE.phone}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
