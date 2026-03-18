"use client";

import Link from "next/link";
import styles from "./BackButton.module.css";

export default function BackButton() {
  return (
    <Link href="/" className={styles.btn}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      Back
    </Link>
  );
}
