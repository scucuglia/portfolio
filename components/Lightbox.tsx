"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./Lightbox.module.css";

interface LightboxProps {
  images: string[];
}

export default function Lightbox({ images }: LightboxProps) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive(i => i !== null ? (i - 1 + images.length) % images.length : 0), [images.length]);
  const next = useCallback(() => setActive(i => i !== null ? (i + 1) % images.length : 0), [images.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, prev, next]);

  return (
    <>
      {/* Grid */}
      <div className={styles.grid}>
        {images.map((src, i) => (
          <button key={i} className={styles.cell} onClick={() => setActive(i)}>
            <img src={src} alt={`Screen ${i + 1}`} />
          </button>
        ))}
      </div>

      {/* Overlay */}
      {active !== null && (
        <div className={styles.overlay} onClick={close}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <img
              src={images[active]}
              alt={`Screen ${active + 1}`}
              className={styles.modalImg}
            />

            <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button className={styles.close} onClick={close} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <div className={styles.counter}>{active + 1} / {images.length}</div>
          </div>
        </div>
      )}
    </>
  );
}
