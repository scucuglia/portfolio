import BackButton from "@/components/BackButton";
import Lightbox from "@/components/Lightbox";
import styles from "./page.module.css";

const uiGrid = [
  "/cases/owl-sensor/ui-1.png",
  "/cases/owl-sensor/ui-2.png",
  "/cases/owl-sensor/ui-3.png",
  "/cases/owl-sensor/ui-4.png",
  "/cases/owl-sensor/ui-5.png",
  "/cases/owl-sensor/ui-6.png",
];

export const metadata = {
  title: "OWL Sensor — Júlia Scucuglia",
  description: "Designing a sensor management app for electrical grid fault indicators in medium and high voltage networks.",
};

export default function OwlSensorPage() {
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
            <span className={styles.tag}>Mobile App</span>
            <span className={styles.tag}>Freelance</span>
          </div>
          <h1 className={styles.title}>OWL Sensor</h1>
          <p className={styles.subtitle}>
            Designing a sensor management app for electrical grid fault indicators —
            from discovery to handoff, solo, with no existing product team.
          </p>
        </header>

        {/* ── Cover ── */}
        <div className={styles.coverWrap}>
          <img src="/cases/owl-sensor/cover.png" alt="OWL Sensor" />
        </div>

        {/* ── Context ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>Context</div>
            <div className={styles.content}>
              <p>
                OWL Sensor is a hardware device — a current and voltage fault indicator
                sensor for medium and high voltage electrical grids. The client needed a
                mobile app to manage sensor installation, registration, and monitoring.
                An existing app was already in place, but it failed to meet users'
                needs and business goals.
              </p>
              <div className={styles.threeCol}>
                <div className={styles.infoCard}>
                  <p className={styles.infoLabel}>Context</p>
                  <p className={styles.infoText}>Freelance project, limited timeline, no product team structure</p>
                </div>
                <div className={styles.infoCard}>
                  <p className={styles.infoLabel}>My role</p>
                  <p className={styles.infoText}>Product Designer — sole designer across the entire project</p>
                </div>
                <div className={styles.infoCard}>
                  <p className={styles.infoLabel}>Scope</p>
                  <p className={styles.infoText}>Discovery, architecture & planning, solution design and handoff</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── Challenge ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>Challenge</div>
            <div className={styles.content}>
              <h2 className={styles.sectionTitle}>
                An app that existed — but didn't work
              </h2>
              <p>
                The previous application didn't serve its users or meet the business
                objectives. The engineering team had no product culture or design process,
                and there would be no post-launch review cycle. Everything had to be
                right before shipping.
              </p>
              <div className={styles.noteGrid}>
                <div className={styles.note}>
                  <span className={styles.noteIcon}>⚡</span>
                  <p>Freelance engagement with a tight deadline and no product team to rely on — I was the entire product function.</p>
                </div>
                <div className={styles.note}>
                  <span className={styles.noteIcon}>⚡</span>
                  <p>No design system existed. Had to build tokens and components from scratch while designing the product simultaneously.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── Discovery ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>Discovery</div>
            <div className={styles.content}>

              <div className={styles.designStep}>
                <div className={styles.processText}>
                  <p className={styles.processLabel}>01 — Service phase mapping</p>
                  <h2 className={styles.sectionTitle}>Understanding the full service journey</h2>
                  <p>
                    To understand the flow between physical hardware and the digital product,
                    I mapped actions and steps across pre-service, service, and post-service
                    phases — giving the team a shared picture of when and how the app was used.
                  </p>
                  <div className={styles.insightBox}>
                    <p className={styles.insightLabel}>Key insight</p>
                    <p>
                      The app is used in the field — outdoors, in sun or rain. It needs to be
                      easy to handle, high contrast, and free of complex layers or very dark colors
                      that could cause screen glare.
                    </p>
                  </div>
                </div>
                <div className={styles.designImgSmall}>
                  <img src="/cases/owl-sensor/discovery-service.png" alt="Service phase mapping" />
                </div>
              </div>

              <div className={styles.designStep}>
                <div className={styles.processText}>
                  <p className={styles.processLabel}>02 — Actor map</p>
                  <h2 className={styles.sectionTitle}>Three distinct users, three sets of needs</h2>
                  <p>
                    Through workshops with equipment users and stakeholders, I mapped the three
                    actors in the system and their permissions:
                  </p>
                  <ul className={styles.list}>
                    <li><strong>Eletricista</strong> — registers sensors on-site and monitors panels</li>
                    <li><strong>Supervisor</strong> — registers new users (supervisors or electricians) and configures sensor chips</li>
                    <li><strong>Administrador</strong> — registered by Nastek (hardware manufacturer), has full permissions and is the only role with access to Nastek support</li>
                  </ul>
                </div>
                <div className={styles.designImgSmall}>
                  <img src="/cases/owl-sensor/discovery-actors.png" alt="Actor map" />
                </div>
              </div>

              <div className={styles.designStep}>
                <div className={styles.processText}>
                  <p className={styles.processLabel}>03 — Journey map</p>
                  <h2 className={styles.sectionTitle}>Identifying common tasks and permissions</h2>
                  <p>
                    With all three actors mapped, I built a journey map to identify
                    which tasks were shared across roles and which required specific
                    permission scopes — the foundation for the app's navigation architecture.
                  </p>
                </div>
                <div className={styles.designImgSmall}>
                  <img src="/cases/owl-sensor/discovery-journey.png" alt="Journey map" />
                </div>
              </div>

            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── Architecture ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>Architecture</div>
            <div className={styles.content}>

              <div className={styles.designStep}>
                <div className={styles.processText}>
                  <p className={styles.processLabel}>01 — Flowchart</p>
                  <h2 className={styles.sectionTitle}>Mapping every path and permission gate</h2>
                  <p>
                    Translated the actor and journey maps into a detailed flowchart covering
                    all user paths, permission gates, and branching logic — used directly
                    with the engineering team to plan implementation.
                  </p>
                </div>
                <div className={styles.designImg}>
                  <img src="/cases/owl-sensor/arch-flowchart.png" alt="Flowchart" />
                </div>
              </div>

              <div className={styles.designStep}>
                <div className={styles.processText}>
                  <p className={styles.processLabel}>02 — Information architecture (To Be)</p>
                  <h2 className={styles.sectionTitle}>One map to align design, engineering, and data</h2>
                  <p>
                    Built a To Be information architecture map divided by user lines —
                    each line representing a distinct user belonging to a partner energy
                    company. This made the integrations between app, web, and hardware
                    clearer and easier to break into tasks, and served as a direct input
                    for database modeling.
                  </p>
                </div>
                <div className={styles.designImg}>
                  <img src="/cases/owl-sensor/arch-ia.png" alt="Information architecture" />
                </div>
              </div>

            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── Solution Design ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>Solution Design</div>
            <div className={styles.content}>

              <div className={styles.designStep}>
                <div className={styles.processText}>
                  <p className={styles.processLabel}>01 — Design tokens & style guide</p>
                  <h2 className={styles.sectionTitle}>Building the system before building the screens</h2>
                  <p>
                    Since the engineering team had no design system, I built one from scratch
                    using atomic design and design tokens — starting with color and typography
                    to gain velocity and ensure brand customization per energy concession partner.
                  </p>
                  <div className={styles.tokenGrid}>
                    <div className={styles.tokenItem}>
                      <span className={styles.tokenSwatch} style={{ background: "#0E2B41" }} />
                      <span className={styles.tokenName}>primary-500</span>
                      <span className={styles.tokenHex}>#0E2B41</span>
                    </div>
                    <div className={styles.tokenItem}>
                      <span className={styles.tokenSwatch} style={{ background: "#0F4F80" }} />
                      <span className={styles.tokenName}>primary-400</span>
                      <span className={styles.tokenHex}>#0F4F80</span>
                    </div>
                    <div className={styles.tokenItem}>
                      <span className={styles.tokenSwatch} style={{ background: "#116AAD" }} />
                      <span className={styles.tokenName}>primary-300</span>
                      <span className={styles.tokenHex}>#116AAD</span>
                    </div>
                    <div className={styles.tokenItem}>
                      <span className={styles.tokenSwatch} style={{ background: "#CDE3F3" }} />
                      <span className={styles.tokenName}>primary-100</span>
                      <span className={styles.tokenHex}>#CDE3F3</span>
                    </div>
                  </div>
                </div>
                <div className={styles.designImgHalf}>
                  <img src="/cases/owl-sensor/design-tokens.png" alt="Design tokens" />
                </div>
              </div>

              <div className={styles.designStep}>
                <div className={styles.processText}>
                  <p className={styles.processLabel}>02 — IxFlow</p>
                  <h2 className={styles.sectionTitle}>Specs that engineers could actually use</h2>
                  <p>
                    Built an IxFlow — Interface Experience Flow — documenting interaction
                    rules and business logic for each screen, based on use cases and rules
                    from the flowchart. Covered all critical flows:
                  </p>
                  <ul className={styles.list}>
                    <li>Login</li>
                    <li>Home dependencies</li>
                    <li>Sensor set registration</li>
                    <li>Sensor installation</li>
                    <li>Structure registration</li>
                    <li>Structure filter</li>
                    <li>Sensor chip configuration</li>
                    <li>User management menu</li>
                  </ul>
                </div>
                <div className={styles.designImg}>
                  <img src="/cases/owl-sensor/design-ixflow.png" alt="IxFlow" />
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
