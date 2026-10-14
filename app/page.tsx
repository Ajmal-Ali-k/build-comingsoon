import { ArrowDown, ArrowUpRight, ArrowUp } from "@phosphor-icons/react/dist/ssr";
import { BilldLogo, BilldMark } from "../components/billd-logo";
import { CardAnatomy, CardSculpture } from "../components/card-sculpture";
import { MotionController } from "../components/motion-controller";
import { RevealLine } from "../components/reveal-line";
import { WaitlistForm } from "../components/waitlist-form";

const comparisons = [
  {
    label: "Eligibility",
    title: "Start with you.",
    description: "See salary requirements and who can apply.",
    detail: "Employment and residency can also affect eligibility. The bank makes the final decision.",
  },
  {
    label: "Fees",
    title: "Count the whole cost.",
    description: "Compare annual fees, charges abroad and the terms behind fee waivers.",
    detail: "A fee waiver may depend on how much you spend. Charges abroad can add to the cost.",
  },
  {
    label: "Rewards",
    title: "Make the perks count.",
    description: "Understand cashback, miles and perks based on how you spend.",
    detail: "Reward limits, excluded purchases and redemption rules can change what a benefit is worth.",
  },
];

export default function HomePage() {
  return (
    <MotionController>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header container" id="top" data-entrance="header">
        <a className="brand" href="#top" aria-label="Billd home"><BilldLogo className="brand-logo" wordmarkClassName="brand-wordmark" /></a>
        <span className="launch-location"><span className="status-dot" />Launching in the UAE</span>
        <nav aria-label="Main"><a className="nav-action" href="#waitlist" data-magnetic>Join the waitlist <ArrowUpRight weight="bold" aria-hidden="true" /></a></nav>
      </header>
      <main id="main-content" tabIndex={-1}>
        <section className="hero container" aria-labelledby="page-title">
          <div className="hero-copy">
            <p className="eyebrow" data-entrance="kicker">UAE credit cards, decoded.</p>
            <h1 id="page-title" aria-label="Find your kind of card."><RevealLine text="Find your" /><RevealLine text="kind of card." className="hero-accent" /></h1>
            <div className="hero-intro" data-entrance="signup">
              <p>See who can apply, what you’ll pay and what you get back. Find a UAE credit card that fits your life.</p>
              <div className="hero-signup"><WaitlistForm /></div>
            </div>
          </div>
          <div className="hero-art" data-entrance="art"><CardSculpture /></div>
          <a className="hero-scroll" href="#comparison"><span>See the whole card</span><ArrowDown weight="bold" aria-hidden="true" /></a>
        </section>

        <section className="story-section" id="comparison" aria-labelledby="comparison-title">
          <div className="container story-heading" data-enter>
            <span className="section-index" aria-hidden="true">01 — A closer look</span>
            <h2 id="comparison-title">One card.<br /><span>The whole picture.</span></h2>
          </div>
          <div className="container story-layout">
            <div className="story-visual"><div className="story-stage"><CardAnatomy /></div></div>
            <div className="story-steps">
              {comparisons.map((item, index) => (
                <article className="story-step" key={item.label} data-story-step={index}>
                  <div className="step-kicker"><span className="step-number">0{index + 1}</span><span>{item.label}</span><span className="step-rule" aria-hidden="true" /></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <details className="card-detail"><summary>Why it matters <span aria-hidden="true" /></summary><p>{item.detail}</p></details>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="belief-section container" aria-labelledby="belief-title">
          <div className="belief-top" data-enter><span className="section-index">02 — Our point of view</span><BilldMark className="belief-mark" /></div>
          <h2 id="belief-title" data-enter>Clarity.<br /><span>Not a sales pitch.</span></h2>
          <div className="belief-bottom" data-enter><span className="belief-line" aria-hidden="true" /><p>Built to clarify the decision,<br />not sell you a card.</p></div>
        </section>

        <section className="closing-section" id="waitlist" aria-labelledby="waitlist-title">
          <div className="container closing-layout">
            <div className="closing-heading" data-enter><p className="eyebrow"><span className="status-dot" />Coming soon</p><h2 id="waitlist-title">Your next card.<br /><span>A clearer choice.</span></h2></div>
            <div className="closing-signup" data-enter><p>Be first to know when Billd launches.</p><WaitlistForm /></div>
          </div>
        </section>
      </main>

      <footer className="site-footer container">
        <div className="footer-colophon"><span>UAE · © {new Date().getFullYear()} Billd</span><a href="#top">Back to top <ArrowUp weight="bold" aria-hidden="true" /></a></div>
        <BilldLogo className="footer-logo" wordmarkClassName="footer-wordmark" />
      </footer>
    </MotionController>
  );
}
