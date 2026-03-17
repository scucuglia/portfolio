"use client";

import StarIcon from "./StarIcon";
import SnapshotsCard from "./SnapshotsCard";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className="wrap">
      <section className={styles.hero} id="hero">

        <div className={styles.graphic}>
          <StarIcon size={56} />
        </div>

        <p className={styles.greeting}>Hi, I'm Júlia</p>

        <h1 className={styles.title}>
          Product designer who <span className={styles.nowrap}>makes things make sense</span>
        </h1>

        <p className={styles.subtitle}>
          Crafting coherent and satisfying experiences from start to finish.
        </p>

        <SnapshotsCard />
      </section>
    </div>
  );
}
