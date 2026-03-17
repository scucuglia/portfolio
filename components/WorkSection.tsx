import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import styles from "./WorkSection.module.css";

export default function WorkSection() {
  return (
    <div className="wrap">
      <section className={styles.section} id="work">
        <span className={styles.label}>Selected work</span>
        <div className={styles.grid}>
          {projects.map((project) => (
            <Link key={project.slug} href={project.href} className={styles.card}>
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className={styles.cover}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={styles.cardLabel}>
                <div className={styles.cardLabelRow}>
                  <div>
                    <span className={styles.cardTitle}>{project.title}</span>
                    <span className={styles.cardSub}>{project.subtitle}</span>
                  </div>
                  <div className={styles.chevron}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
