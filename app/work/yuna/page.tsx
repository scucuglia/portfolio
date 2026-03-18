import BackButton from "@/components/BackButton";
import Lightbox from "@/components/Lightbox";
import styles from "./page.module.css";

const BADGE_PATH_BG = "M5.00623 29.7193C4.94393 32.3421 5.59804 34.2468 6.88133 35.9579C8.05249 37.5254 9.1925 39.1116 10.3387 40.704L10.6253 41.1099L10.9368 41.5408L11.0987 41.7656L11.2981 42.0466C12.7932 44.1262 14.2883 46.2057 15.7772 48.2852C18.9355 52.6879 22.0939 57.0905 25.2773 61.4681C27.6133 64.6842 30.3107 66.6951 34.6278 61.9615C39.3623 56.7533 43.5922 51.0829 47.006 44.8069C48.4014 42.2465 49.7034 39.6299 51.0054 37.0133L51.0116 36.9946C51.9024 35.196 52.7995 33.3975 53.7215 31.6177C55.8956 27.4399 55.3536 23.8804 51.6595 20.9203C45.6978 16.1367 39.6613 11.4594 33.575 6.85065C30.1612 4.26528 27.4389 4.40267 24.2307 7.17538C20.7421 10.1916 17.2473 13.2391 13.9457 16.474C12.027 18.3537 10.2827 20.4207 8.54463 22.494C8.08987 23.0373 7.63511 23.5744 7.18035 24.1114C5.73509 25.81 5 27.8521 5 29.7193H5.00623Z";

function PrincipleBadge({ n }: { n: 1 | 2 | 3 }) {
  const digits: Record<1|2|3, string> = {
    1: "M23.92 24.92C24.2187 24.856 24.6347 24.7067 25.168 24.472C25.7013 24.2373 26.2667 23.96 26.864 23.64C27.4613 23.32 28.0053 23 28.496 22.68C28.9867 22.36 29.3387 22.0933 29.552 21.88H32.304V40.024C32.304 41.048 32.3893 41.72 32.56 42.04C32.752 42.36 33.104 42.552 33.616 42.616C33.9147 42.6373 34.288 42.6693 34.736 42.712C35.2053 42.7333 35.5467 42.7333 35.76 42.712C35.76 43.352 35.7173 43.8213 35.632 44.12C35.568 44.3333 35.4507 44.44 35.28 44.44H25.456C25.2427 44.44 25.136 44.3333 25.136 44.12C25.136 44.0347 25.1573 43.8533 25.2 43.576C25.264 43.2773 25.3387 43.0533 25.424 42.904C25.5307 42.904 25.7013 42.8933 25.936 42.872C26.1707 42.8507 26.4907 42.8187 26.896 42.776C27.664 42.6693 28.24 42.4027 28.624 41.976C29.008 41.5493 29.2 40.8987 29.2 40.024V25.144C28.4747 25.4213 27.728 25.688 26.96 25.944C26.2133 26.1787 25.648 26.3173 25.264 26.36C24.9227 26.4027 24.688 26.3707 24.56 26.264C24.4533 26.1573 24.3467 25.9867 24.24 25.752L23.92 24.92Z",
    2: "M23.44 44.44V42.744C24.016 42.3813 24.6773 41.848 25.424 41.144C26.1707 40.44 26.9493 39.6507 27.76 38.776C28.5707 37.88 29.3707 36.952 30.16 35.992C30.9707 35.032 31.7067 34.1253 32.368 33.272C33.1787 32.248 33.7547 31.3307 34.096 30.52C34.4587 29.7093 34.64 28.7707 34.64 27.704C34.64 26.36 34.256 25.2827 33.488 24.472C32.7413 23.6613 31.7067 23.256 30.384 23.256C29.2747 23.256 28.4 23.5973 27.76 24.28C27.1413 24.9413 26.832 25.9013 26.832 27.16C26.832 27.5653 26.864 28.024 26.928 28.536C26.6507 28.6213 26.3307 28.6853 25.968 28.728C25.6053 28.7707 25.2747 28.792 24.976 28.792C24.4213 28.792 24.0267 28.6853 23.792 28.472C23.5573 28.2587 23.44 27.9173 23.44 27.448C23.44 26.872 23.6213 26.2533 23.984 25.592C24.3467 24.9093 24.8693 24.2693 25.552 23.672C26.256 23.0533 27.0987 22.552 28.08 22.168C29.0827 21.7627 30.2027 21.56 31.44 21.56C33.552 21.56 35.152 22.0827 36.24 23.128C37.3493 24.1733 37.904 25.592 37.904 27.384C37.904 28.3227 37.744 29.1867 37.424 29.976C37.1253 30.7653 36.688 31.544 36.112 32.312C35.5573 33.0587 34.8853 33.88 34.096 34.776C33.0293 35.992 31.92 37.24 30.768 38.52C29.616 39.7787 28.592 40.8987 27.696 41.88L34.608 41.72C35.824 41.6987 36.5387 41.24 36.752 40.344L37.104 38.808C37.168 38.5733 37.328 38.456 37.584 38.456C37.6907 38.456 37.8613 38.4773 38.096 38.52C38.3307 38.5627 38.512 38.616 38.64 38.68L38.096 43.672C38.032 44.184 37.7333 44.44 37.2 44.44H23.44Z",
    3: "M29.584 44.92C28.56 44.92 27.536 44.7707 26.512 44.472C25.5093 44.1733 24.6667 43.7893 23.984 43.32C23.7067 43.128 23.4933 42.968 23.344 42.84C23.1947 42.6907 23.12 42.52 23.12 42.328C23.12 42.072 23.216 41.7733 23.408 41.432C23.6 41.0907 23.824 40.76 24.08 40.44C24.3573 40.12 24.6133 39.8747 24.848 39.704C25.424 40.7707 26.2027 41.5813 27.184 42.136C28.1653 42.6907 29.1467 42.968 30.128 42.968C31.1947 42.968 32.08 42.7227 32.784 42.232C33.5093 41.72 34.0533 41.0693 34.416 40.28C34.7787 39.4693 34.96 38.6373 34.96 37.784C34.96 36.6533 34.6613 35.6187 34.064 34.68C33.488 33.72 32.624 33.144 31.472 32.952C30.8107 33.1227 30.1173 33.2293 29.392 33.272L27.632 33.368V31.704L29.488 31.608C30.8107 31.544 31.8987 31.096 32.752 30.264C33.6267 29.432 34.064 28.376 34.064 27.096C34.064 25.9013 33.744 24.9733 33.104 24.312C32.4853 23.6293 31.5253 23.288 30.224 23.288C29.1787 23.288 28.3893 23.576 27.856 24.152C27.344 24.7067 27.088 25.4213 27.088 26.296C27.088 26.3813 27.088 26.4773 27.088 26.584C27.088 26.6907 27.0987 26.7973 27.12 26.904C26.7147 26.9893 26.352 27.0533 26.032 27.096C25.7333 27.1387 25.456 27.16 25.2 27.16C24.7947 27.16 24.4853 27.096 24.272 26.968C24.08 26.8187 23.984 26.552 23.984 26.168C23.984 25.7627 24.144 25.304 24.464 24.792C24.8053 24.2587 25.2853 23.7467 25.904 23.256C26.5227 22.7653 27.2587 22.36 28.112 22.04C28.9867 21.72 29.9467 21.56 30.992 21.56C32.2507 21.56 33.3493 21.784 34.288 22.232C35.2267 22.6587 35.9627 23.2667 36.496 24.056C37.0293 24.8453 37.2853 25.7627 37.264 26.808C37.264 27.8747 36.9547 28.856 36.336 29.752C35.7387 30.6267 34.9387 31.3627 33.936 31.96C35.216 32.3013 36.24 32.9733 37.008 33.976C37.776 34.9573 38.16 36.1627 38.16 37.592C38.16 38.9787 37.776 40.2267 37.008 41.336C36.2613 42.4453 35.2373 43.32 33.936 43.96C32.656 44.6 31.2053 44.92 29.584 44.92Z",
  };
  return (
    <svg className={styles.principleBadge} width="60" height="70" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d={BADGE_PATH_BG} fill="#4D70A4"/>
      <path d={digits[n]} fill="#FFF6F0"/>
    </svg>
  );
}

function FeatureBadge({ n }: { n: 1 | 2 | 3 | 4 }) {
  return (
    <svg className={styles.featureBadge} width="52" height="61" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d={BADGE_PATH_BG} fill="#4D70A4"/>
      <text x="30" y="44" textAnchor="middle" fill="#FFF6F0" fontSize="23" fontFamily="'Libre Baskerville', Georgia, serif" fontWeight="400">{n}</text>
    </svg>
  );
}

function YunaBullet() {
  return (
    <svg className={styles.resultBullet} width="50" height="60" viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M0.00622957 24.7193C-0.0560661 27.3421 0.598039 29.2468 1.88133 30.9579C3.05249 32.5254 4.1925 34.1116 5.33874 35.704L5.6253 36.1099L5.93678 36.5408L6.09875 36.7656L6.2981 37.0466C7.79319 39.1262 9.28829 41.2057 10.7772 43.2852C13.9355 47.6879 17.0939 52.0905 20.2773 56.4681C22.6133 59.6842 25.3107 61.6951 29.6278 56.9615C34.3623 51.7533 38.5922 46.0829 42.006 39.8069C43.4014 37.2465 44.7034 34.6299 46.0054 32.0133L46.0116 31.9946C46.9024 30.196 47.7995 28.3975 48.7215 26.6177C50.8956 22.4399 50.3536 18.8804 46.6595 15.9203C40.6978 11.1367 34.6613 6.45935 28.575 1.85065C25.1612 -0.734718 22.4389 -0.597331 19.2307 2.17538C15.7421 5.19165 12.2473 8.23914 8.94566 11.474C7.02696 13.3537 5.28268 15.4207 3.54463 17.494C3.08987 18.0373 2.63511 18.5744 2.18035 19.1114C0.735089 20.81 0 22.8521 0 24.7193H0.00622957Z" fill="#A44D65"/>
    </svg>
  );
}

const TRADEOFF_EMOJI = {
  challenge: "⚡",
  decision:  "💡",
  tradeoff:  "⚖️",
  outcome:   "✨",
} as const;

function TradeoffIcon({ type }: { type: keyof typeof TRADEOFF_EMOJI }) {
  return <span className="tradeoffEmoji">{TRADEOFF_EMOJI[type]}</span>;
}

const uiGrid = [
  "/cases/yuna/ui-1.png",
  "/cases/yuna/ui-2.png",
  "/cases/yuna/ui-3.png",
  "/cases/yuna/ui-4.png",
  "/cases/yuna/ui-5.png",
  "/cases/yuna/ui-6.png",
];

export const metadata = {
  title: "Yuna — Júlia Scucuglia",
  description: "Designing a magical reading habit for kids — end-to-end from discovery to delivery.",
};

export default function YunaPage() {
  return (
    <main className={styles.main}>
      <div className="wrap">

        {/* ── Back ── */}
        <div className={styles.back}>
          <BackButton />
        </div>

        {/* ── Hero ── */}
        <header className={styles.hero}>
          <div className={styles.meta}>
            <span className={styles.tag}>Mobile App</span>
            <span className={styles.tag}>2023–2025</span>
          </div>
          <h1 className={styles.title}>Designing a Magical Reading Habit for Kids</h1>
          <div className={styles.heroCards}>
            <div className={styles.heroCard}>
              <p className={styles.heroCardLabel}>My role</p>
              <p className={styles.heroCardText}>Product Designer — end-to-end, from discovery to delivery and repeat.</p>
            </div>
            <div className={styles.heroCard}>
              <p className={styles.heroCardLabel}>Team</p>
              <p className={styles.heroCardText}>2 Product designers, PM, 4 Engineers, 2 Marketing, 1 Content and CEO.</p>
            </div>
            <div className={styles.heroCard}>
              <p className={styles.heroCardLabel}>Company</p>
              <p className={styles.heroCardText}>AI-powered personalized stories for kids and families.</p>
            </div>
          </div>
        </header>

      </div>

      {/* ── Cover ── */}
      <div className={styles.coverWrap}>
        <img src="/cases/yuna/cover.png" alt="Yuna" />
      </div>

      {/* ════════════════════════════════
          DELIVERY — shown first
      ════════════════════════════════ */}
      <div className={styles.deliveryWrap}>
        <div className="wrap">
          <p className={styles.chapterLabel}>Delivery</p>
          <h2 className={styles.chapterTitle}>Once upon a time…</h2>
          <p className={styles.chapterSubtitle}>A world where reading is always the first choice for children.</p>

          <div className={styles.featureCards}>

            {/* Feature 1 — Explore */}
            <div className={styles.featureCard} style={{ background: "#FFF6F0" }}>
              <div className={styles.featureInner}>
                <div className={styles.featureText}>
                  <p className={styles.featureLabel}>Explore</p>
                  <h3 className={styles.featureTitle}>Recommended stories</h3>
                  <p className={styles.featureDesc}>
                    Titles that speak the family's language. Visual cards with illustration
                    like book covers and short descriptions, so kids can help choose!
                  </p>
                </div>
                <div className={styles.featureVideo}>
                  <video src="/cases/yuna/feature-explore.mp4" autoPlay loop muted playsInline />
                </div>
              </div>
            </div>

            {/* Feature 2 — Create */}
            <div className={styles.featureCard} style={{ background: "#FFF6F0" }}>
              <div className={styles.featureInner}>
                <div className={styles.featureVideo}>
                  <video src="/cases/yuna/feature-create.mp4" autoPlay loop muted playsInline />
                </div>
                <div className={styles.featureText}>
                  <p className={styles.featureLabel}>Create Story</p>
                  <h3 className={styles.featureTitle}>Turning personalization into a playful moment</h3>
                  <p className={styles.featureDesc}>
                    Reduced the number of steps while keeping the most meaningful choices.
                    Micro-interactions to keep kids engaged while the story is being generated.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 — Read */}
            <div className={styles.featureCard} style={{ background: "#FFF6F0" }}>
              <div className={styles.featureInner}>
                <div className={styles.featureText}>
                  <p className={styles.featureLabel}>Read Story</p>
                  <h3 className={styles.featureTitle}>A calm, comfortable and <span style={{ whiteSpace: "nowrap" }}>magical reading environment</span></h3>
                  <p className={styles.featureDesc}>
                    Voice over, play/pause animation and font setup to keep the story
                    "alive" without distracting — so both adults and kids can read easily.
                  </p>
                </div>
                <div className={styles.featureVideo}>
                  <video src="/cases/yuna/feature-read.mp4" autoPlay loop muted playsInline />
                </div>
              </div>
            </div>

            {/* Feature 4 — Streak */}
            <div className={styles.featureCard} style={{ background: "#FFF6F0" }}>
              <div className={styles.featureInner}>
                <div className={styles.featureVideo}>
                  <video src="/cases/yuna/feature-streak.mp4" autoPlay loop muted playsInline />
                </div>
                <div className={styles.featureText}>
                  <p className={styles.featureLabel}>Daily streak</p>
                  <h3 className={styles.featureTitle}>Celebration screen with a gentle motivation after reading</h3>
                  <p className={styles.featureDesc}>
                    A simple, friendly calendar showing consecutive reading days.
                    Copy focused on celebration, not pressure. Forgiveness mechanics
                    so missing a day never feels like failure.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="wrap">

        {/* ── Context & Problem ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>Context & Problem</div>
            <div className={styles.content}>
              <h2 className={styles.sectionTitle}>
                Why don't families read with Yuna every day?
              </h2>
              <p>
                Parents loved the idea of personalized stories, but that didn't automatically
                turn into a consistent reading habit. Yuna creates personalized stories where
                kids get to become the heroes — but one question shaped the entire challenge:
                if families love the stories, why aren't they reading every day?
              </p>
              <p>
                Daily reading sounds simple, but real family routines are messy. Parents are
                tired, kids are excited, bedtime is unpredictable, and technology can either
                support that moment or add friction. My goal was to design an experience that
                feels light for parents, magical for kids, and sustainable for both.
              </p>
              <div className={styles.problemGrid}>
                <div className={styles.problemCard}>
                  <p className={styles.problemCardLabel}>Low repeat usage</p>
                  <p>Many families read only once or twice after activation.</p>
                </div>
                <div className={styles.problemCard}>
                  <p className={styles.problemCardLabel}>Drop-offs during creation</p>
                  <p>Parents felt the flow was "too many steps" or weren't sure what would come next.</p>
                </div>
                <div className={styles.problemCard}>
                  <p className={styles.problemCardLabel}>No clear habit loop</p>
                  <p>Reading needed to become part of the family routine, not just a one-off "wow" moment.</p>
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
              <h2 className={styles.sectionTitle}>Every choice needs to feel meaningful</h2>
              <p>
                Qualitative research (interviews, feedback), research on children's behavior,
                and quantitative data (analytics) to understand why families weren't forming a
                reading habit. COPPA compliance shaped how we collected and handled all children's data.
              </p>
              <div className={styles.insightGrid}>
                <div className={styles.insightCard}>
                  <p className={styles.insightCardText}>The reading experience drives everything. Comfort, typography, pacing, and simplicity matter more than any feature.</p>
                </div>
                <div className={styles.insightCard}>
                  <p className={styles.insightCardText}>Motivation must feel gentle, not gamified. The magic disappears when there are too many steps.</p>
                </div>
                <div className={styles.insightCard}>
                  <p className={styles.insightCardText}>Children want to interact more with Yuna. The experience needs to work without overwhelming parent or child.</p>
                </div>
                <div className={styles.insightCard}>
                  <p className={styles.insightCardText}>Families need clarity, speed, and a little bit of magic.</p>
                </div>
              </div>

              <h3 className={styles.subsectionTitle}>Three design principles</h3>
              <div className={styles.principleList}>
                <div className={styles.principle}>
                  <PrincipleBadge n={1} />
                  <div>
                    <p className={styles.principleTitle}>Clarify the journey</p>
                    <p>Parents don't have time for guesswork, kids don't have patience for friction. Reshaped the flow into a clean, predictable loop: Explore → Choose → Personalize → Read → Celebrate → Come back tomorrow. Predictability removes cognitive load and reduces drop-offs.</p>
                  </div>
                </div>
                <div className={styles.principle}>
                  <PrincipleBadge n={2} />
                  <div>
                    <p className={styles.principleTitle}>Design for co-use</p>
                    <p>A child tapping excitedly + a parent navigating quickly = chaos unless the UI is built for it. Big touch areas, simple expressive visuals, interactions stable under "enthusiastic tiny taps", flow length optimized for bedtime energy levels.</p>
                  </div>
                </div>
                <div className={styles.principle}>
                  <PrincipleBadge n={3} />
                  <div>
                    <p className={styles.principleTitle}>Motivate without pressure</p>
                    <p>Streaks should feel like a warm celebration, not a scoreboard. Gentle and encouraging copy, visuals that focus on today's joy, not tomorrow's obligation, and forgiveness mechanics for breaks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.sectionBreak}>
          <p className={styles.sectionBreakText}>Designing for families requires balancing competing needs</p>
        </div>

        {/* ── Challenges & Trade-offs ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>Challenges & Trade-offs</div>
            <div className={styles.content}>
              <div className={styles.tradeoffList}>

                <div className={styles.tradeoff}>
                  <h3 className={styles.tradeoffTitle}>Depth vs. Simplicity in personalization</h3>
                  <div className={styles.tradeoffGrid}>
                    <div className={styles.tradeoffCard} data-type="challenge">
                      <TradeoffIcon type="challenge" />
                      <p className={styles.tradeoffCardLabel}>Challenge</p>
                      <p>Too many steps slowed parents, too few diminished the magic for kids.</p>
                    </div>
                    <div className={styles.tradeoffCard} data-type="decision">
                      <TradeoffIcon type="decision" />
                      <p className={styles.tradeoffCardLabel}>Decision</p>
                      <p>Reduce fields to only the emotionally meaningful ones.</p>
                    </div>
                    <div className={styles.tradeoffCard} data-type="tradeoff">
                      <TradeoffIcon type="tradeoff" />
                      <p className={styles.tradeoffCardLabel}>Trade-off</p>
                      <p>Collaborated with content to preserve narrative diversity despite fewer inputs.</p>
                    </div>
                    <div className={styles.tradeoffCard} data-type="outcome">
                      <TradeoffIcon type="outcome" />
                      <p className={styles.tradeoffCardLabel}>Outcome</p>
                      <p>A faster flow that kept the "I'm the hero!" moment alive.</p>
                    </div>
                  </div>
                </div>

                <div className={styles.tradeoff}>
                  <h3 className={styles.tradeoffTitle}>Calm reading vs. Visual delight</h3>
                  <div className={styles.tradeoffGrid}>
                    <div className={styles.tradeoffCard} data-type="challenge">
                      <TradeoffIcon type="challenge" />
                      <p className={styles.tradeoffCardLabel}>Challenge</p>
                      <p>Kids love animations but parents need a calm, focused reading moment.</p>
                    </div>
                    <div className={styles.tradeoffCard} data-type="decision">
                      <TradeoffIcon type="decision" />
                      <p className={styles.tradeoffCardLabel}>Decision</p>
                      <p>Use soft, subtle animations that enhance without distracting.</p>
                    </div>
                    <div className={styles.tradeoffCard} data-type="tradeoff">
                      <TradeoffIcon type="tradeoff" />
                      <p className={styles.tradeoffCardLabel}>Trade-off</p>
                      <p>Balance visual charm with a soothing reading environment.</p>
                    </div>
                    <div className={styles.tradeoffCard} data-type="outcome">
                      <TradeoffIcon type="outcome" />
                      <p className={styles.tradeoffCardLabel}>Outcome</p>
                      <p>A calm space for parents, a magical world for kids.</p>
                    </div>
                  </div>
                </div>

                <div className={styles.tradeoff}>
                  <h3 className={styles.tradeoffTitle}>Motivation vs. Emotional pressure</h3>
                  <div className={styles.tradeoffGrid}>
                    <div className={styles.tradeoffCard} data-type="challenge">
                      <TradeoffIcon type="challenge" />
                      <p className={styles.tradeoffCardLabel}>Challenge</p>
                      <p>Streaks motivate kids but can create guilt for busy families.</p>
                    </div>
                    <div className={styles.tradeoffCard} data-type="decision">
                      <TradeoffIcon type="decision" />
                      <p className={styles.tradeoffCardLabel}>Decision</p>
                      <p>Use gentle, celebratory language — never punishment.</p>
                    </div>
                    <div className={styles.tradeoffCard} data-type="tradeoff">
                      <TradeoffIcon type="tradeoff" />
                      <p className={styles.tradeoffCardLabel}>Trade-off</p>
                      <p>Engage without pushing families beyond their real routines.</p>
                    </div>
                    <div className={styles.tradeoffCard} data-type="outcome">
                      <TradeoffIcon type="outcome" />
                      <p className={styles.tradeoffCardLabel}>Outcome</p>
                      <p>Little Stars! Healthy motivation that feels uplifting, not demanding.</p>
                    </div>
                  </div>
                </div>

                <div className={styles.tradeoff}>
                  <h3 className={styles.tradeoffTitle}>Ideal reading time vs. Real-life routines</h3>
                  <div className={styles.tradeoffGrid}>
                    <div className={styles.tradeoffCard} data-type="challenge">
                      <TradeoffIcon type="challenge" />
                      <p className={styles.tradeoffCardLabel}>Challenge</p>
                      <p>Bedtime is chaotic — parents are tired, kids unpredictable.</p>
                    </div>
                    <div className={styles.tradeoffCard} data-type="decision">
                      <TradeoffIcon type="decision" />
                      <p className={styles.tradeoffCardLabel}>Decision</p>
                      <p>Design a journey that works in just a few minutes.</p>
                    </div>
                    <div className={styles.tradeoffCard} data-type="tradeoff">
                      <TradeoffIcon type="tradeoff" />
                      <p className={styles.tradeoffCardLabel}>Trade-off</p>
                      <p>Shorter sessions with smart pacing to keep stories meaningful.</p>
                    </div>
                    <div className={styles.tradeoffCard} data-type="outcome">
                      <TradeoffIcon type="outcome" />
                      <p className={styles.tradeoffCardLabel}>Outcome</p>
                      <p>A reading ritual families can actually fit into daily life.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── Results ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>Results & Impact</div>
            <div className={styles.content}>
              <h2 className={styles.sectionTitle}>When clarity and magic work together, families keep reading</h2>
              <p>
                Although I can't share full internal metrics, early results after launch showed clear
                improvements in reading consistency.
              </p>
              <div className={styles.resultList}>
                <div className={styles.resultItem}>
                  <YunaBullet />
                  <p>More stories finished per session.</p>
                </div>
                <div className={styles.resultItem}>
                  <YunaBullet />
                  <p>Meaningful improvements in week-1 retention among users who saw the streak experience.</p>
                </div>
                <div className={styles.resultItem}>
                  <YunaBullet />
                  <p>Noticeable reduction in drop-offs during the personalization flow.</p>
                </div>
                <div className={styles.resultItem}>
                  <YunaBullet />
                  <p>Parents reported the experience felt "magical and lighter for everyday use".</p>
                </div>
                <div className={styles.resultItem}>
                  <YunaBullet />
                  <p>Children began initiating reading sessions by asking to check their streak.</p>
                </div>
                <div className={styles.resultItem}>
                  <YunaBullet />
                  <p>The new reading environment was described as "calmer and more comfortable".</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── Learnings ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>Learnings</div>
            <div className={styles.content}>
              <h2 className={styles.sectionTitle}>Lessons from building a habit, not just a feature</h2>
              <div className={styles.learningList}>
                <div className={styles.learning}>
                  <h3 className={styles.learningTitle}>Designing for kids means designing for adults too.</h3>
                  <p>Children rarely navigate the experience alone — their reading habit is mediated by a parent's time, energy, and emotional bandwidth. A design that works for kids but burdens adults will not sustain a long-term habit. The real challenge is creating moments that feel light and joyful for both, even at the end of a busy day.</p>
                </div>
                <div className={styles.learning}>
                  <h3 className={styles.learningTitle}>Motivation must be ethical and emotionally safe.</h3>
                  <p>Streaks are a powerful behavioral mechanic, especially for children who love collecting and celebrating progress. But they must respect the natural rhythms of family life. Healthy motivation celebrates presence without punishing absence, supports autonomy, and avoids guilt-based loops. Designing for children carries an added layer of responsibility — the product must uplift, not pressure.</p>
                </div>
                <div className={styles.learning}>
                  <h3 className={styles.learningTitle}>End-to-end thinking is what builds habits, not isolated features.</h3>
                  <p>A reading habit isn't created on a single screen; it emerges from the seamless orchestration of small moments across the journey: how quickly families find a story, how magical personalization feels, how calm the reading environment is, and how they are welcomed back the next day. Every touchpoint either reinforces or breaks the habit.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── My Role ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sideLabel}>My Role</div>
            <div className={styles.content}>
              <h2 className={styles.sectionTitle}>Great design only happens when product, engineering, and content build together</h2>
              <p>
                I was the Product Designer responsible for leading the end-to-end experience,
                working closely with a cross-functional team. While I drove the vision, UX strategy,
                and design execution, this project was a deeply collaborative effort.
              </p>
              <div className={styles.roleGrid}>
                <div className={styles.roleCard}>
                  <p className={styles.roleCardLabel}>Research & Strategy</p>
                  <ul className={styles.roleList}>
                    <li>Led interviews with 12 families to understand routines, barriers, and motivations</li>
                    <li>Collaborated with Data to interpret behavioral patterns and identify habit-formation opportunities</li>
                    <li>Defined the strategic question: "What prevents families from reading on Yuna every day?"</li>
                    <li>Conducted an in-depth study on child cognitive development and children learning phases</li>
                  </ul>
                </div>
                <div className={styles.roleCard}>
                  <p className={styles.roleCardLabel}>Experience Design</p>
                  <ul className={styles.roleList}>
                    <li>Designed the full journey: Choose → Personalize → Read → Celebrate → Return tomorrow</li>
                    <li>Co-created personalization logic with the writing/content team</li>
                    <li>Defined the streak experience including behavioral logic, microcopy, and ethical motivation principles</li>
                  </ul>
                </div>
                <div className={styles.roleCard}>
                  <p className={styles.roleCardLabel}>UI & Design System</p>
                  <ul className={styles.roleList}>
                    <li>Redesigned the reading interface with emphasis on comfort and rhythm</li>
                    <li>Refined typography, spacing, and visual hierarchy for adult–child co-reading</li>
                    <li>Built reusable components and documented states, edge cases, and rules</li>
                    <li>Built variables structure on Figma to enable Tablet view</li>
                  </ul>
                </div>
                <div className={styles.roleCard}>
                  <p className={styles.roleCardLabel}>Validation & Delivery</p>
                  <ul className={styles.roleList}>
                    <li>Facilitated usability tests with families alongside PM</li>
                    <li>Conducted perception tests about the feeling of magic on the app</li>
                    <li>Delivered detailed specs and implementation guidance</li>
                    <li>Feature launch with A/B testing and satisfaction metrics tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── Screens ── */}
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
