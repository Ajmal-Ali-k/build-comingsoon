"use client";

import { ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function MotionController({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement | null>(null);
  useGSAP((_context, contextSafe) => {
    const root = scope.current;
    if (!root || !contextSafe) return;
    const select = gsap.utils.selector(root);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.timeline({ defaults: { ease: "power3.out", clearProps: "transform,opacity,visibility" } })
        .from(select("[data-entrance='header']"), { y: -10, duration: .4 }, 0)
        .from(select("[data-entrance='kicker']"), { y: 12, autoAlpha: 0, duration: .4 }, .1)
        .from(select(".reveal-character"), { yPercent: 105, autoAlpha: 0, rotation: 3, duration: .65, stagger: { amount: .3 } }, .15)
        .from(select("[data-entrance='art']"), { y: 36, scale: .94, autoAlpha: 0, duration: .85 }, .3)
        .from(select("[data-entrance='signup']"), { y: 16, duration: .55 }, .4);

      root.querySelectorAll<HTMLElement>("[data-enter]").forEach((element) => {
        gsap.from(element, { y: 24, duration: .65, ease: "power3.out", clearProps: "transform", scrollTrigger: { trigger: element, start: "top 90%", once: true } });
      });

      const steps = root.querySelectorAll<HTMLElement>(".story-step");
      steps.forEach((step) => {
        gsap.from(step.querySelectorAll("h3, .step-kicker, :scope > p"), { y: 18, duration: .55, stagger: .06, ease: "power3.out", clearProps: "transform", scrollTrigger: { trigger: step, start: "top 85%", once: true } });
        gsap.from(step.querySelector(".step-rule"), { scaleX: 0, duration: .7, ease: "power3.out", scrollTrigger: { trigger: step, start: "top 80%", once: true } });
      });
    }, root);

    media.add("(min-width: 801px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)", () => {
      const layout = root.querySelector<HTMLElement>(".story-layout");
      const stage = root.querySelector<HTMLElement>(".story-stage");
      if (!layout || !stage) return;
      gsap.to(select(".sculpture-parallax"), { y: -40, rotation: 3, ease: "none", scrollTrigger: { trigger: root.querySelector(".hero"), start: "top top", end: "bottom top", scrub: .6 } });
      ScrollTrigger.create({ trigger: stage, pin: stage, pinSpacing: false, start: "top top+=64", endTrigger: layout, end: () => `bottom top+=${stage.offsetHeight + 64}`, invalidateOnRefresh: true });
      gsap.timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: layout, start: "top center", end: "bottom 65%", scrub: .65, invalidateOnRefresh: true } })
        .from(select(".anatomy-layer--fit"), { y: -15, rotation: 0, duration: .7 }, 0)
        .from(select(".anatomy-layer--fees"), { y: 20, rotation: -5, duration: .7 }, .2)
        .from(select(".anatomy-layer--rewards"), { y: 55, rotation: -9, duration: .7 }, .4);
      const layers = root.querySelectorAll<HTMLElement>(".anatomy-layer .layer-face");
      root.querySelectorAll<HTMLElement>(".story-step").forEach((step, index) => {
        gsap.from(layers[index], { scale: .98, duration: .4, ease: "power2.out", scrollTrigger: { trigger: step, start: "top center", once: true } });
      });
    }, root);

    media.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      const cleanups: (() => void)[] = [];
      root.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((element) => {
        const xTo = gsap.quickTo(element, "x", { duration: .3, ease: "power3.out" });
        const yTo = gsap.quickTo(element, "y", { duration: .3, ease: "power3.out" });
        let rect = element.getBoundingClientRect();
        const enter = () => { rect = element.getBoundingClientRect(); };
        const move = (event: PointerEvent) => { xTo((event.clientX - rect.left - rect.width / 2) * .1); yTo((event.clientY - rect.top - rect.height / 2) * .12); };
        const leave = () => { xTo(0); yTo(0); };
        element.addEventListener("pointerenter", enter);
        element.addEventListener("pointermove", move);
        element.addEventListener("pointerleave", leave);
        cleanups.push(() => { element.removeEventListener("pointerenter", enter); element.removeEventListener("pointermove", move); element.removeEventListener("pointerleave", leave); });
      });
      const art = root.querySelector<HTMLElement>(".hero-art");
      const face = root.querySelector<HTMLElement>(".sculpture-face");
      if (art && face) {
        const rotateTo = gsap.quickTo(face, "rotation", { duration: .65, ease: "power3.out" });
        let rect = art.getBoundingClientRect();
        const enter = () => { rect = art.getBoundingClientRect(); };
        const move = (event: PointerEvent) => { rotateTo((event.clientX - rect.left - rect.width / 2) / rect.width * 5); };
        const leave = () => { rotateTo(0); };
        art.addEventListener("pointerenter", enter);
        art.addEventListener("pointermove", move);
        art.addEventListener("pointerleave", leave);
        cleanups.push(() => { art.removeEventListener("pointerenter", enter); art.removeEventListener("pointermove", move); art.removeEventListener("pointerleave", leave); });
      }
      return () => cleanups.forEach((cleanup) => cleanup());
    }, root);

    const refresh = contextSafe(() => ScrollTrigger.refresh());
    let active = true;
    void document.fonts.ready.then(() => { if (active) refresh(); });
    root.addEventListener("toggle", refresh, true);
    return () => { active = false; root.removeEventListener("toggle", refresh, true); media.revert(); };
  }, { scope });
  return <div className="billd-site" ref={scope}>{children}</div>;
}
