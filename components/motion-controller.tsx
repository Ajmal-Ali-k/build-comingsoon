"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function MotionController() {
  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from("[data-reveal='header']", { y: -20, opacity: 0, duration: 0.7 })
        .from("[data-reveal='hero-copy'] > *", { y: 34, opacity: 0, duration: 0.85, stagger: 0.06 }, "-=0.35")
        .from("[data-reveal='hero-art']", { x: 42, scale: 0.9, opacity: 0, duration: 1.1 }, "-=0.8");

      gsap.utils.toArray<HTMLElement>("[data-reveal]:not([data-reveal='header']):not([data-reveal='hero-copy']):not([data-reveal='hero-art'])").forEach((element) => {
        gsap.from(element, {
          y: 44,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 86%", once: true },
        });
      });

      gsap.to(".marquee-track", { xPercent: -50, duration: 24, ease: "none", repeat: -1 });

    });

    media.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const benefitCards = gsap.utils.toArray<HTMLElement>(".benefit");
      const benefitTimeline = gsap.timeline({
        scrollTrigger: { trigger: ".benefit-list", start: "top 82%", once: true },
        defaults: { duration: 0.65, ease: "power3.out", clearProps: "transform,opacity" },
      });

      benefitTimeline
        .from(benefitCards[0], { y: 78, opacity: 0 })
        .from(benefitCards[1], { x: 68, y: -24, opacity: 0 }, "-=0.48")
        .from(benefitCards[2], { x: 68, y: 28, opacity: 0 }, "-=0.5");

      const cards = gsap.utils.toArray<HTMLElement>(".story-card");
      const words = gsap.utils.toArray<HTMLElement>(".reveal-word");
      const wordGroups = [words.slice(0, 5), words.slice(5, 10), words.slice(10)];

      gsap.set(cards, { position: "absolute", inset: 0, yPercent: -118, scale: 0.96, opacity: 0 });

      const storyTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".story-section",
          start: "top top",
          end: `+=${cards.length * 100}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      cards.forEach((card, index) => {
        const phase = `story-phase-${index + 1}`;
        storyTimeline.addLabel(phase);

        if (index > 0) {
          storyTimeline.to(cards[index - 1], { y: 22, scale: 0.94, opacity: 0.48, duration: 1, ease: "none" }, phase);
        }

        storyTimeline
          .to(card, { yPercent: 0, scale: 1, opacity: 1, duration: 1, ease: "none" }, phase)
          .to(wordGroups[index], { opacity: 1, stagger: 0.05, duration: 0.72, ease: "none" }, phase);
      });
    });

    media.add("(max-width: 767px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.from(".benefit", {
        y: 42,
        opacity: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: ".benefit-list", start: "top 86%", once: true },
      });

      gsap.to(".reveal-word", {
        opacity: 1,
        stagger: 0.08,
        ease: "none",
        scrollTrigger: { trigger: ".story-copy", start: "top 75%", end: "bottom 42%", scrub: 1 },
      });

      gsap.utils.toArray<HTMLElement>(".story-card").forEach((card) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 86%", once: true },
        });
      });
    });

    return () => media.revert();
  });

  return null;
}
