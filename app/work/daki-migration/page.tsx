import BackButton from "@/components/BackButton";
import Lightbox from "@/components/Lightbox";
import styles from "./page.module.css";

const uiGrid = [
  "/cases/daki-migration/ui-1.png",
  "/cases/daki-migration/ui-2.png",
  "/cases/daki-migration/ui-3.png",
  "/cases/daki-migration/ui-4.png",
  "/cases/daki-migration/ui-5.png",
  "/cases/daki-migration/ui-6.png",
];

export const metadata = {
  title: "Daki & Jokr Migration — Júlia Scucuglia",
  description: "How we migrated 100% of the user base in 16 weeks without compromising core metrics.",
};

export default function DakiMigrationPage() {
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
            <span className={styles.tag}>Customer App</span>
            <span className={styles.tag}>2022–2023</span>
          </div>
          <h1 className={styles.title}>Daki & Jokr Migration</h1>
          <p className={styles.subtitle}>
            How we migrated 100% of the user base in 16 weeks
            without compromising core metrics.
          </p>
        </header>

        {/* ── Hero Image ── */}
        <div className={styles.coverWrap}>
          <img
            src="/cases/daki-migration/cover.png"
            alt="Daki Migration"
          />
        </div>

        {/* ── Overview ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>Overview</div>
            <div className={styles.content}>
              <p>
                In 2022, Daki and Jokr joined forces, consolidating into one company.
                We had two live apps, two tech stacks, two design systems — and three hard goals:
              </p>
              <div className={styles.goalGrid}>
                <div className={styles.goalCard}>
                  <span className={styles.goalIcon}>🎯</span>
                  <span>Move Daki users to Jokr&apos;s tech foundation</span>
                </div>
                <div className={styles.goalCard}>
                  <span className={styles.goalIcon}>📈</span>
                  <span>Preserve revenue-critical metrics</span>
                </div>
                <div className={styles.goalCard}>
                  <span className={styles.goalIcon}>🗓️</span>
                  <span>Deliver in 16 weeks</span>
                </div>
              </div>
              <p className={styles.callout}>
                This was not a redesign. It was a business-critical migration.<br/>
                The challenge was not visual alignment — it was behavioral continuity.
              </p>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── My Role ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>My role</div>
            <div className={styles.content}>
              <div className={styles.chips}>
                <span className={styles.chip}>Senior Product Designer</span>
                <span className={styles.chip}>Design Systems</span>
                <span className={styles.chip}>User Research</span>
                <span className={styles.chip}>Prioritization</span>
                <span className={styles.chip}>Architecture</span>
              </div>
              <p>
                I was responsible for defining migration principles, prioritizing
                critical flows, aligning trade-offs, and creating the new Daki app
                experience — working alongside 5 Daki engineers, 32 Jokr consultants,
                3 VPs and 2 CTOs.
              </p>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── Timeline ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>Timeline</div>
            <div className={styles.content}>
              <p>
                We worked in weekly milestones instead of sprints to maintain decision velocity.
              </p>
              <div className={styles.timeline}>
                {[
                  { label: "Architecture", weeks: "2 weeks" },
                  { label: "Discovery", weeks: "2 weeks" },
                  { label: "Design System", weeks: "2.5 weeks" },
                  { label: "MLP Definition", weeks: "3 weeks" },
                  { label: "Iterative Validation", weeks: "3 weeks" },
                  { label: "Post-Acquisition", weeks: "3 weeks" },
                ].map((item) => (
                  <div key={item.label} className={styles.timelineItem}>
                    <span className={styles.timelineLabel}>{item.label}</span>
                    <span className={styles.timelineWeeks}>{item.weeks}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── HMW ── */}
        <section className={styles.hmwSection}>
          <div className="wrap">
            <p className={styles.hmwLabel}>How might we</p>
            <p className={styles.hmw}>
              Converge two active ecosystems without breaking
              the behaviors that drove revenue?
            </p>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── Decision 1 ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>Decision #1</div>
            <div className={styles.content}>
              <h2 className={styles.sectionTitle}>Protect Revenue-Critical Flows First</h2>
              <p>
                We mapped both apps flow by flow, built a customer hierarchy tree,
                and created a critical vs. trivial prioritization matrix.
              </p>
              <div className={styles.twoCol}>
                <div className={styles.twoColBox}>
                  <p className={styles.twoColLabel}>Critical flows</p>
                  <ul className={styles.list}>
                    <li>Explore</li>
                    <li>Product Details</li>
                    <li>Cart</li>
                    <li>Coupons</li>
                  </ul>
                </div>
                <div className={styles.twoColBox}>
                  <p className={styles.twoColLabel}>Trivial flows</p>
                  <ul className={styles.list}>
                    <li>Onboarding</li>
                    <li>Menu</li>
                    <li>Settings</li>
                  </ul>
                </div>
              </div>
              <p>
                This allowed us to focus engineering capacity where revenue was
                generated, reduce risk exposure, and sequence delivery strategically.
              </p>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── Decision 2 ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>Decision #2</div>
            <div className={styles.content}>
              <h2 className={styles.sectionTitle}>Preserve Familiar Patterns When Trust Was at Risk</h2>
              <p>
                Jokr had stronger personalization. Daki had stronger purchase clarity.
                Rather than picking a winner, we chose to:
              </p>
              <ul className={styles.list}>
                <li>Maintain Daki&apos;s explore architecture</li>
                <li>Keep predictable navigation patterns, including coupon insertion at multiple journey points</li>
                <li>Restructure revenue-critical flows like cart and checkout</li>
              </ul>
              <p className={styles.callout}>
                Trade-off: We prioritized familiarity over innovation.
              </p>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── Decision 3 ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>Decision #3</div>
            <div className={styles.content}>
              <h2 className={styles.sectionTitle}>Optimize for Two High-Value User Segments</h2>
              <p>
                Instead of designing for the average user, we optimized for users
                who generated the majority of revenue.
              </p>
              <div className={styles.twoCol}>
                <div className={styles.twoColBox}>
                  <p className={styles.twoColLabel}>High Value Price Seekers</p>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-muted)", fontWeight: 300 }}>
                    Heavily driven by coupons and promotions
                  </p>
                </div>
                <div className={styles.twoColBox}>
                  <p className={styles.twoColLabel}>High Value Users</p>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-muted)", fontWeight: 300 }}>
                    Frequent, high-AOV orders
                  </p>
                </div>
              </div>
              <p>
                This shaped coupon logic, cart clarity, promotion visibility, and
                personalization structure — as well as our usability testing approach.
                We conducted moderated tests with heavy users from these segments,
                achieving a satisfactory Cronbach&apos;s Alpha for reliable perception data.
              </p>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── Decision 4 ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>Decision #4</div>
            <div className={styles.content}>
              <h2 className={styles.sectionTitle}>Visual Identity Convergence</h2>
              <p>
                We performed a full color palette analysis and alias token definition
                aligned with usage guidelines, creating new components to address
                evolving product needs — without fully adopting Jokr&apos;s visual system.
              </p>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── MLP ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>The MLP</div>
            <div className={styles.content}>
              <h2 className={styles.sectionTitle}>The new Daki app experience</h2>
              <ul className={styles.list}>
                <li>Home is now the core experience</li>
                <li>Jokr&apos;s seasonal personalization integrated</li>
                <li>New coupon system</li>
                <li>New floating tab bar with emphasis on the cart</li>
                <li>Restructured navigation hierarchy and app-level information architecture</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── Results ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>Results</div>
            <div className={styles.content}>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>100%</span>
                  <span className={styles.statLabel}>User base migrated in 16 weeks</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>+3%</span>
                  <span className={styles.statLabel}>Average Order Value</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>4→5</span>
                  <span className={styles.statLabel}>CSAT score</span>
                </div>
              </div>
              <p>
                Checkout conversion was preserved throughout the migration.
                Add-to-cart rate increased significantly.
                The migration was completed without revenue disruption.
              </p>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── Trade-offs ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>Trade-offs</div>
            <div className={styles.content}>
              <h2 className={styles.sectionTitle}>What we chose not to do</h2>
              <ul className={styles.list}>
                <li>We did not fully adopt Jokr&apos;s visual system</li>
                <li>We postponed non-revenue features</li>
                <li>We limited experimentation during the migration phase</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── Learnings ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>Learnings</div>
            <div className={styles.content}>
              <div className={styles.learnings}>
                <div className={styles.learning}>
                  <p className={styles.learningTitle}>Design impact is about organizing decisions</p>
                </div>
                <div className={styles.learning}>
                  <p className={styles.learningTitle}>Alignment reduces risk more than aesthetics</p>
                </div>
                <div className={styles.learning}>
                  <p className={styles.learningTitle}>Speed requires clarity, not shortcuts</p>
                </div>
              </div>
              <p>
                This project strengthened my ability to balance metrics and user experience,
                influence cross-functional stakeholders, make trade-offs under constraint,
                and protect business performance during change.
              </p>
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
