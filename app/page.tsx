import Image from "next/image";
import { ArrowDownRight, CheckCircle, MagnifyingGlass, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { MotionController } from "../components/motion-controller";
import { WaitlistForm } from "../components/waitlist-form";

const benefits = [
  {
    icon: MagnifyingGlass,
    title: "Find the cards worth your time",
    text: "A practical shortlist based on your salary, spending, and priorities.",
  },
  {
    icon: CheckCircle,
    title: "Understand the real trade-offs",
    text: "See fees, rewards, and eligibility before you make a decision.",
  },
  {
    icon: ShieldCheck,
    title: "Choose with more confidence",
    text: "Clear guidance first. The final choice stays yours.",
  },
];

const marqueeItems = ["Eligibility", "Annual fees", "Rewards", "Salary fit", "Cashback", "Travel value"];

const storyCards = [
  {
    eyebrow: "Start with fit",
    title: "See what matches your profile.",
    text: "Salary requirements and key eligibility details come before the sales pitch.",
  },
  {
    eyebrow: "Count the cost",
    title: "Know what the card really costs.",
    text: "Annual fees, foreign exchange charges, and common conditions stay in view.",
  },
  {
    eyebrow: "Measure the value",
    title: "Put rewards in context.",
    text: "Compare the benefits that matter for how you actually spend in the UAE.",
  },
];

const revealSentence = "A credit card should fit your life before it asks you to change it.".split(" ");

export default function HomePage() {
  return (
    <main className="launch-page">
      <MotionController />
      <header className="header container" data-reveal="header">
        <a className="brand" href="#top" aria-label="Build home">
          <span className="brand-logo"><Image src="/images/build-logo-white.png" alt="" width={124} height={59} priority unoptimized /></span>
        </a>
        <div className="header-right">
          <a className="header-link" href="#why-build">Why Build</a>
          <span className="status">Coming soon</span>
        </div>
      </header>

      <section className="hero container" id="top" aria-labelledby="page-title">
        <div className="hero-copy" data-reveal="hero-copy">
          <p className="kicker">A clearer way to choose</p>
          <h1 id="page-title">Your next card, made <span>clear.</span></h1>
          <p className="intro">Build helps people in the UAE compare credit cards without getting lost in the fine print.</p>
          <a className="primary-action" href="#waitlist">
            Join the waitlist <ArrowDownRight weight="bold" aria-hidden="true" />
          </a>
        </div>
        <div className="hero-art" aria-hidden="true" data-reveal="hero-art">
          <div className="hero-model">
            <span className="hero-orbit" />
            <span className="hero-spark hero-spark-one" />
            <span className="hero-spark hero-spark-two" />
            <Image className="hero-main-image" src="/images/hero-card-globe.png" alt="" width={1254} height={1254} priority sizes="(max-width: 767px) 94vw, 48vw" />
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Compare the details that matter">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`} aria-hidden={index >= marqueeItems.length}>
              {item}<i />
            </span>
          ))}
        </div>
      </section>

      <section className="value-section" id="why-build" aria-labelledby="value-title">
        <div className="container">
          <div className="value-showcase" data-reveal="section-heading">
            <p className="section-kicker">Built for the decision ahead</p>
            <div className="value-heading-row">
              <h2 id="value-title" className="value-title">Less noise.<br /><span>Better choices.</span></h2>
              <div className="value-art" aria-hidden="true"><Image src="/images/decision-gateway.png" alt="" width={1190} height={1322} /></div>
            </div>
            <p className="value-intro">The details should help you decide, not make the decision harder.</p>
          </div>
        </div>
      </section>

      <section className="benefits-section" aria-label="Why Build is different">
        <div className="container benefits-inner">
          <div className="benefit-list">
            {benefits.map(({ icon: Icon, title, text }, index) => (
              <article className={`benefit benefit-${index + 1}`} key={title}>
                <Icon weight="duotone" aria-hidden="true" />
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>

          <div className="decision-accordion" data-reveal="accordion">
            {storyCards.map((card) => (
              <article className="decision-panel" key={card.eyebrow}>
                <p>{card.eyebrow}</p>
                <div><h3>{card.title}</h3><span>{card.text}</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="story-section" aria-labelledby="story-title">
        <div className="container story-grid">
          <div className="story-copy">
            <p className="section-kicker">Clarity, in the right order</p>
            <h2 id="story-title" className="sr-only">A card that fits your life</h2>
            <p className="story-statement" aria-label={revealSentence.join(" ")}>
              {revealSentence.map((word, index) => <span className="reveal-word" key={`${word}-${index}`} aria-hidden="true">{word} </span>)}
            </p>
          </div>
          <div className="story-stack">
            {storyCards.map((card, index) => (
              <article className={`story-card story-card-${index + 1}`} key={card.title}>
                <div className="story-card-top"><span>{card.eyebrow}</span><CheckCircle weight="duotone" aria-hidden="true" /></div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="waitlist" id="waitlist" aria-labelledby="waitlist-title">
        <div className="container waitlist-grid">
          <div data-reveal="waitlist-copy">
            <p className="section-kicker section-kicker-lime">Be first to know</p>
            <h2 id="waitlist-title">Get the launch email.</h2>
            <p>We&apos;re putting the finishing touches on a simpler way to compare UAE credit cards.</p>
          </div>
          <div className="form-panel" data-reveal="waitlist-form"><WaitlistForm /></div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <a className="footer-wordmark" href="#top" aria-label="Build home" data-reveal="footer-logo">
            <Image src="/images/build-logo-white.png" alt="Build" width={1821} height={864} unoptimized />
          </a>
          <div className="footer-meta" data-reveal="footer-meta">
            <p>© 2026 Build. All rights reserved.</p>
            <div className="footer-legal" aria-label="Legal information">
              <span>Privacy</span>
              <span>Data</span>
              <span>Terms</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
