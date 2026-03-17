"use client";

import styles from "./SnapshotsCard.module.css";

export default function SnapshotsCard() {
  return (
    <a
      href="/snapshots.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      {/* Cover panel — equivalent to the project card image */}
      <div className={styles.cover}>
        <span className={styles.emoji}>✨</span>
      </div>

      {/* Label bar — same glassmorphism treatment as project cards */}
      <div className={styles.label}>
        <div>
          <span className={styles.title}>Sneak peek of my work</span>
          <span className={styles.sub}>Selected highlights</span>
        </div>
        <div className={styles.chevron}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div>
    </a>
  );
}
