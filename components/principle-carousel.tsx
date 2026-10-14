"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const principles = [
  { label: "Billd principle", quote: "Start with fit, not the biggest welcome offer.", note: "Eligibility before persuasion" },
  { label: "Billd principle", quote: "A fee belongs inside the reward calculation.", note: "The full cost stays visible" },
  { label: "Billd principle", quote: "The final choice should always stay yours.", note: "Guidance without the pressure" },
];

export function PrincipleCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = principles[activeIndex];

  function move(direction: -1 | 1) {
    setActiveIndex((current) => (current + direction + principles.length) % principles.length);
  }

  return (
    <section className="principle-section" aria-labelledby="principle-title">
      <div className="container principle-grid">
        <div className="principle-art" aria-hidden="true">
          <span className="principle-disc principle-disc-one" />
          <span className="principle-disc principle-disc-two" />
          <span className="principle-disc principle-disc-three" />
        </div>
        <div className="principle-carousel">
          <p id="principle-title">{active.label}</p>
          <blockquote aria-live="polite">“{active.quote}”</blockquote>
          <div className="principle-controls">
            <span>{active.note}</span>
            <div>
              <button type="button" onClick={() => move(-1)} aria-label="Previous principle"><ArrowLeft weight="bold" /></button>
              <button type="button" onClick={() => move(1)} aria-label="Next principle"><ArrowRight weight="bold" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
