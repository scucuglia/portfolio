import BackButton from "@/components/BackButton";
import Lightbox from "@/components/Lightbox";
import styles from "./page.module.css";

const uiGrid = [
  "/cases/daki-web/ui-1.png",
  "/cases/daki-web/ui-2.png",
  "/cases/daki-web/ui-3.png",
  "/cases/daki-web/ui-4.png",
  "/cases/daki-web/ui-5.png",
  "/cases/daki-web/ui-6.png",
];

export const metadata = {
  title: "Daki Web — Júlia Scucuglia",
  description: "Creating a web shopping experience that converts online leads into app purchases.",
};

export default function DakiWebPage() {
  return (
    <main className={styles.main}>
      <div className="wrap">

        {/* ── Back ── */}
        <div className={styles.back}>
          <BackButton />
        </div>

        {/* ── Case Hero ── */}
        <header className={styles.hero}>
          <div className={styles.meta}>
            <span className={styles.tag}>Website & Brand</span>
            <span className={styles.tag}>2021–2023</span>
          </div>
          <h1 className={styles.title}>Daki Web</h1>
          <p className={styles.subtitle}>
            The only product designer across the entire customer row at Daki —
            creating a web shopping experience that converts online leads into app purchases.
          </p>
        </header>

        {/* ── Cover ── */}
        <div className={styles.coverWrap}>
          <img src="/cases/daki-web/cover.png" alt="Daki Web" />
        </div>

        {/* ── Context ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>Context</div>
            <div className={styles.content}>
              <p>
                Daki is a mobile-first ultra-fast delivery platform in Brazil. In 2022,
                Daki joined JOKR and both apps were consolidated into a single platform.
                While the core business overlapped, the apps differed in architecture,
                user journeys, and market-specific features.
              </p>
              <div className={styles.threeCol}>
                <div className={styles.infoCard}>
                  <p className={styles.infoLabel}>Team</p>
                  <p className={styles.infoText}>Product lead Brazil, Engineers, Jokr and Daki CTOs and VPs</p>
                </div>
                <div className={styles.infoCard}>
                  <p className={styles.infoLabel}>My role</p>
                  <p className={styles.infoText}>Senior Product Designer — sole PD on the project</p>
                </div>
                <div className={styles.infoCard}>
                  <p className={styles.infoLabel}>Responsibility</p>
                  <p className={styles.infoText}>Create an experience of choosing products via web and checking out via app</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── Problem ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>Problem</div>
            <div className={styles.content}>
              <h2 className={styles.sectionTitle}>
                Could we convert online leads into real purchases?
              </h2>
              <p>
                We needed to create a test shopping experience via the Daki website
                to see if it was possible to convert online leads via the website into
                product purchases.
              </p>
              <div className={styles.noteGrid}>
                <div className={styles.note}>
                  <span className={styles.noteIcon}>🗒️</span>
                  <p>Operated as the only Product Designer at times, partnering with a newly forming leadership and an engineering squad from an external consultancy.</p>
                </div>
                <div className={styles.note}>
                  <span className={styles.noteIcon}>🗒️</span>
                  <p>First feature with a completely new engineering team.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── Constraints ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>Constraints</div>
            <div className={styles.content}>
              <h2 className={styles.sectionTitle}>Hard limits from day one</h2>
              <ul className={styles.list}>
                <li>Do not reduce existing revenue and engagement in the app</li>
                <li>Checkout must be completed via the app, not the web</li>
                <li>Identify checkouts made in the app coming from the web to track success metrics</li>
                <li>Daki had no Design Tokens for web applications — needed to build from scratch</li>
                <li>Two-week deadline for ideation, construction, handoff, and implementation</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── Process ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>Process</div>
            <div className={styles.content}>

              <div className={styles.processStep}>
                <div className={styles.processImg}>
                  <img src="/cases/daki-web/process-1.png" alt="Web architecture" />
                </div>
                <div className={styles.processText}>
                  <p className={styles.processLabel}>01 — Web architecture</p>
                  <h2 className={styles.sectionTitle}>Mapping the full navigation structure</h2>
                  <p>
                    Mapped the full navigation structure, defined context segmentation,
                    and documented each feature behavior — establishing the foundation
                    before a single component was designed.
                  </p>
                </div>
              </div>

              <div className={styles.processStep}>
                <div className={styles.processImg}>
                  <img src="/cases/daki-web/process-2.png" alt="Benchmark" />
                </div>
                <div className={styles.processText}>
                  <p className={styles.processLabel}>02 — Benchmark</p>
                  <h2 className={styles.sectionTitle}>Learning from cross-platform patterns</h2>
                  <p>
                    Mapped web applications whose primary functionality exists in mobile apps
                    to understand established cross-platform patterns and user expectations
                    when bridging web discovery with app checkout.
                  </p>
                </div>
              </div>

              <div className={styles.processStep}>
                <div className={styles.processImg}>
                  <img src="/cases/daki-web/process-3.png" alt="Web Design Tokens" />
                </div>
                <div className={styles.processText}>
                  <p className={styles.processLabel}>03 — Web Design Tokens</p>
                  <h2 className={styles.sectionTitle}>Building the token system from zero</h2>
                  <p>
                    Tokenized colors, spacing, and typography to fit desktop devices.
                    Created a component parity checklist across device types and built
                    new components specific to the web context — all while keeping
                    alignment with the existing mobile design system.
                  </p>
                </div>
              </div>

              <div className={styles.processStep}>
                <div className={styles.processImg}>
                  <img src="/cases/daki-web/process-4.png" alt="Live handoff" />
                </div>
                <div className={styles.processText}>
                  <p className={styles.processLabel}>04 — Live handoff</p>
                  <h2 className={styles.sectionTitle}>Designing and shipping simultaneously</h2>
                  <p>
                    As each component was completed, the engineering team immediately
                    picked it up for implementation. Handoff happened during alignment
                    sessions, where we also refined details as needed to accelerate delivery
                    without creating bottlenecks.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── Outcomes ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>Outcomes</div>
            <div className={styles.content}>
              <h2 className={styles.sectionTitle}>Hypothesis validated — with a surprise</h2>
              <div className={styles.outcomeList}>
                <div className={styles.outcomeItem}>
                  <span className={styles.outcomeIcon}>📈</span>
                  <p>Validated the hypothesis that users navigating the web flow could be converted into purchases.</p>
                </div>
                <div className={styles.outcomeItem}>
                  <span className={styles.outcomeIcon}>📈</span>
                  <p>Since checkout was completed in the app, the conversion rate on the web was not as high as expected — but there were still meaningful conversions.</p>
                </div>
                <div className={styles.outcomeItem}>
                  <span className={styles.outcomeIcon}>📈</span>
                  <p>Unexpectedly, web purchases tended to have a higher order volume than those made through the app.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── UI Grid ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>Screens</div>
            <div className={styles.content}>
              <Lightbox images={uiGrid} />
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
