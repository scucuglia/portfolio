"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AnimatedStar from "./AnimatedStar";
import styles from "./Nav.module.css";

const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Resume", href: "/resume" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayVisible : ""}`}
        onClick={close}
      />

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <div className={styles.mobileMenuTop}>
          <Link href="/" className={styles.logo} onClick={close}>
            <span className={styles.logoName}>Júlia Scucuglia</span>
          </Link>
          <button className={styles.closeBtn} onClick={close} aria-label="Close menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <ul className={styles.mobileLinks}>
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <Link href={l.href} onClick={close}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <a href="https://www.linkedin.com/in/juliascucuglia/" target="_blank" rel="noopener noreferrer" className={styles.mobileCta} onClick={close}>
          Let&apos;s chat
        </a>
      </div>

      {/* Desktop nav */}
      <nav className={styles.nav}>
        <div className="wrap">
        <div className={styles.navInner}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoStar}>
              <AnimatedStar size={16} />
            </div>
            <span className={styles.logoName}>Júlia Scucuglia</span>
          </Link>

          <ul className={styles.navLinks}>
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className={styles.navText}>{l.label}</Link>
              </li>
            ))}
            <li>
              <a href="https://www.linkedin.com/in/juliascucuglia/" target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>
                Let&apos;s chat
              </a>
            </li>
          </ul>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </button>
        </div>
        </div>
      </nav>
    </>
  );
}
