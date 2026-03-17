import { publications } from "@/data/publications";
import styles from "./PublicationsSection.module.css";

const TYPE_ICON: Record<string, string> = {
  article: "✍️",
  research: "🔬",
};

function getIcon(tag: string) {
  const key = tag.split("·")[0].trim().toLowerCase();
  return TYPE_ICON[key] ?? "📄";
}

export default function PublicationsSection() {
  return (
    <div className="wrap">
      <section className={styles.section} id="publications">
        <span className={styles.sectionLabel}>Publications &amp; Research</span>
        <div className={styles.list}>
          {publications.map((pub, i) => (
            <a
              key={i}
              href={pub.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              {/* Cover panel */}
              <div className={styles.cover}>
                <span className={styles.emoji}>{getIcon(pub.tag)}</span>
              </div>

              {/* Label bar */}
              <div className={styles.label}>
                <div className={styles.text}>
                  <span className={styles.title}>{pub.title}</span>
                  <span className={styles.tag}>{pub.tag}</span>
                </div>
                <div className={styles.chevron}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
