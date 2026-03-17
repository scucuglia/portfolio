import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.footerInner}`}>
        <div>
          <p className={styles.ctaLabel}>Loved something here?</p>
          <p className={styles.cta}>Let&apos;s make something together.</p>
          <a href="mailto:julia@example.com" className={styles.btnFilled}>
            Say hello
            <span role="img" aria-label="waving hand">👋</span>
          </a>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copy}>© {year} Júlia Scucuglia</p>
        <p className={styles.copy}>Created with Claude AI</p>
      </div>
    </footer>
  );
}
