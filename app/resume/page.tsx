import BackButton from "@/components/BackButton";
import styles from "./page.module.css";

export const metadata = {
  title: "Resume — Júlia Scucuglia",
  description: "Senior Product Designer focused on AI-powered and complex digital products.",
};

export default function ResumePage() {
  return (
    <main className={styles.main}>
      <div className="wrap">

        <div className={styles.back}>
          <BackButton />
        </div>

        {/* ── Header ── */}
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h1 className={styles.name}>Júlia Palmeira Scucuglia</h1>
            <p className={styles.role}>Senior Product Designer</p>
            <p className={styles.contact}>
              São Paulo, Brazil
              <span className={styles.dot}>·</span>
              <a href="https://juliascucuglia.com" target="_blank" rel="noopener noreferrer">juliascucuglia.com</a>
              <span className={styles.dot}>·</span>
              <a href="mailto:jpalmeirascucuglia@gmail.com">jpalmeirascucuglia@gmail.com</a>
            </p>
          </div>
          <a
            href="/JuliaScucuglia_Resume.pdf"
            download
            className={styles.downloadBtn}
          >
            Download PDF
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>
        </header>

        <hr className={styles.divider} />

        {/* ── Summary ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionLabel}>Summary</h2>
            <div className={styles.sectionContent}>
              <p className={styles.summary}>
                Product Designer focused on AI-powered and complex digital products. With a background
                in Computer Science and specialization in Neuroscience &amp; Behavior, I design experiences
                that reduce cognitive load, improve decision-making, and drive measurable business impact.
              </p>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── Skills ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionLabel}>Skills</h2>
            <div className={styles.sectionContent}>
              <div className={styles.skillsGrid}>
                <div>
                  <p className={styles.skillGroupLabel}>Core Skills</p>
                  <p className={styles.skillList}>Product Strategy · Behavioral UX · UX Research · Gamification · Systems Thinking · AI Workflows · Interaction Design · Analytics</p>
                </div>
                <div>
                  <p className={styles.skillGroupLabel}>Tools</p>
                  <p className={styles.skillList}>Figma · Miro · Notion · Maze · UXCam · Vertex AI · GPT-based tools</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── Experience ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionLabel}>Experience</h2>
            <div className={styles.sectionContent}>

              <div className={styles.role}>
                <div className={styles.roleHeader}>
                  <div>
                    <h3 className={styles.roleTitle}>Senior Product Designer &amp; Founding Team — Yuna</h3>
                    <p className={styles.roleCompany}>AI-powered personalized storytelling platform for children (100k+ MAU)</p>
                  </div>
                  <span className={styles.rolePeriod}>2023 – Present</span>
                </div>
                <ul className={styles.roleList}>
                  <li>Led product strategy and end-to-end design for Yuna's reading ecosystem, serving 100k monthly users globally.</li>
                  <li>Designed the entire app and gamification systems (streaks, badges, mysteries), driving engagement in children aged 4–8.</li>
                  <li>Created neuroscience-informed onboarding redesign increasing completion by <strong>18 p.p</strong> and first book read by <strong>16 p.p</strong>.</li>
                  <li>Built AI-based research and generation tools, reducing drop-off in story creation by <strong>8 p.p</strong>.</li>
                  <li>Created flows and patterns, doubling user time in-app and increasing interactions by <strong>20 p.p</strong>.</li>
                </ul>
              </div>

              <div className={styles.role}>
                <div className={styles.roleHeader}>
                  <div>
                    <h3 className={styles.roleTitle}>Senior Product Designer — Daki &amp; Jokr</h3>
                    <p className={styles.roleCompany}>On-demand grocery delivery platform (unicorn valuation US$1.2B)</p>
                  </div>
                  <span className={styles.rolePeriod}>2021 – 2023</span>
                </div>
                <ul className={styles.roleList}>
                  <li>Designed the core mobile customer experience in the year Daki achieved its US$1.2B unicorn valuation.</li>
                  <li>Led global platform migration, improving add-to-cart <strong>4 p.p</strong> and AOV by <strong>3 p.p</strong>.</li>
                  <li>Created the first version of the Daki web platform.</li>
                  <li>Elevated design maturity through rituals, mentoring, and alignment with product and engineering.</li>
                  <li>Led the initiative to standardize Experience and Business Events across the Customer App, working closely with Data and Engineering to establish a unified event structure.</li>
                </ul>
              </div>

              <div className={styles.role}>
                <div className={styles.roleHeader}>
                  <div>
                    <h3 className={styles.roleTitle}>Product Designer — SAS</h3>
                    <p className={styles.roleCompany}>EdTech platform providing digital learning content and educational tools for schools.</p>
                  </div>
                  <span className={styles.rolePeriod}>2020 – 2021</span>
                </div>
                <ul className={styles.roleList}>
                  <li>Designed content library architecture (ebooks, videos, documents) across mobile and web.</li>
                  <li>Built internal digital book-creation platform enabling editing and workflow customization.</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── Education ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionLabel}>Education</h2>
            <div className={styles.sectionContent}>
              <div className={styles.eduList}>
                <div className={styles.edu}>
                  <div>
                    <p className={styles.eduDegree}>Postgraduate Degree — Neuroscience &amp; Behavior</p>
                    <p className={styles.eduSchool}>PUCRS</p>
                  </div>
                  <span className={styles.eduPeriod}>2024 – 2025</span>
                </div>
                <div className={styles.edu}>
                  <div>
                    <p className={styles.eduDegree}>Bachelor's Degree — Computer Science</p>
                    <p className={styles.eduSchool}>UNIFESP</p>
                  </div>
                  <span className={styles.eduPeriod}>2019 – 2020</span>
                </div>
                <div className={styles.edu}>
                  <div>
                    <p className={styles.eduDegree}>Bachelor's Degree — Science &amp; Technology</p>
                    <p className={styles.eduSchool}>UNIFESP</p>
                  </div>
                  <span className={styles.eduPeriod}>2015 – 2018</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
