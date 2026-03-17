import Image from "next/image";
import TiltCard from "./TiltCard";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.section} id="about">
      <div className="wrap">
        <span className={styles.label}>Behind the pixels</span>

        <div className={styles.grid}>

          {/* Photo with 3D tilt */}
          <div className={styles.photoWrap}>
            <TiltCard maxTilt={6} perspective={900} scale={1}>
              <div className={styles.photoFrame}>
                <Image
                  src="/about/julia.jpg"
                  alt="Júlia Scucuglia"
                  fill
                  className={styles.photo}
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
              {/* Tag inside TiltCard so it follows the 3D tilt */}
              <div className={styles.hoverTag}>
                Hey there! ✌️
              </div>
            </TiltCard>
          </div>

          {/* Text */}
          <div className={styles.content}>
            <h2 className={styles.title}>
              I'm Júlia — a product designer based in São Paulo.
            </h2>

            <p className={styles.body}>
              I've spent the last few years working across early-stage startups
              and scale-ups, shaping digital products from messy ideas to
              polished, shipped experiences. I care deeply about the details —
              the kind that users don't notice but immediately feel.
            </p>

            <p className={styles.body}>
              When I'm not designing, you'll find me reading about cognitive
              science, obsessing over typography, or hunting for the perfect
              cup of coffee in São Paulo.
            </p>

            <ul className={styles.tags}>
              {["Product Design", "Design Systems", "UX Research", "Prototyping", "Figma"].map((tag) => (
                <li key={tag} className={styles.tag}>{tag}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
