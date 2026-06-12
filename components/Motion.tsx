"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

/* CodeREM Labs motion system (port of the old assets/script.js):
   Lenis smooth scroll + GSAP ScrollTrigger — word reveals, stagger groups,
   pinned service/process decks, scrub-fill headline, oversized footer logo.
   Rendered from app/template.tsx so it remounts (and re-inits) on every
   route navigation, and tears everything down on unmount. */

function splitWords(el: Element) {
  const text = el.textContent ?? "";
  el.textContent = "";
  text.split(/(\s+)/).forEach((part) => {
    if (/^\s+$/.test(part)) {
      el.appendChild(document.createTextNode(part));
      return;
    }
    const outer = document.createElement("span");
    outer.className = "word";
    const inner = document.createElement("span");
    inner.className = "word-in";
    inner.textContent = part;
    outer.appendChild(inner);
    el.appendChild(outer);
  });
  return el.querySelectorAll(".word-in");
}

/* Pinned deck: cards stack and reveal one at a time on scroll (desktop only).
   axis "y" = "What we do" (vertical), axis "x" = process deck (horizontal).
   For the vertical deck, each card rests PEEK px lower than the previous one
   and covered cards fade in a compact number+title bar, so every previous
   card's heading stays visible under the stack. */
const PEEK = 60;

/* Scroll distance (in % of viewport height) needed to advance one card, and
   how much the animation lags behind the scrollbar. Lower = more sensitive. */
const STEP = 48;
const SCRUB = 0.4;

function pinnedDeck(root: Element, axis: "x" | "y") {
  const cards = gsap.utils.toArray<HTMLElement>(root.querySelectorAll("[data-card]"));
  if (cards.length < 2) return;
  gsap.matchMedia().add("(min-width: 981px)", () => {
    const deck = root.querySelector(".svc-deck");
    const stage = root.querySelector(".svc-pin-stage");

    // Compact peek headers, built from each card's own index + title.
    const peeks: HTMLElement[] = [];
    cards.forEach((card) => {
      const bar = document.createElement("div");
      bar.className = "svc-peek";
      const idx = document.createElement("span");
      idx.className = "svc-idx";
      idx.textContent = card.querySelector(".svc-idx")?.textContent ?? "";
      const title = document.createElement("b");
      title.textContent = card.querySelector("h3")?.textContent ?? "";
      bar.append(idx, title);
      card.appendChild(bar);
      peeks.push(bar);
    });

    const maxH = cards.reduce((m, c) => Math.max(m, c.offsetHeight), 0);
    gsap.set(deck, { height: maxH + PEEK * (cards.length - 1) });
    gsap.set(cards, {
      position: "absolute",
      top: (i: number) => i * PEEK,
      left: 0,
      width: "100%",
      transformOrigin: "top center",
      [axis === "y" ? "yPercent" : "xPercent"]: (i: number) => (i === 0 ? 0 : 100),
      zIndex: (i: number) => i + 1,
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stage,
        start: "top top",
        end: `+=${cards.length * STEP}%`,
        pin: true,
        scrub: SCRUB,
        anticipatePin: 1,
      },
    });
    for (let i = 1; i < cards.length; i++) {
      // origin top + no fade: the covered card's peek strip stays put
      tl.to(cards[i - 1], { scale: 0.97, ease: "none", duration: 1 }, i - 1)
        .to(
          cards[i],
          { [axis === "y" ? "yPercent" : "xPercent"]: 0, ease: "none", duration: 1 },
          i - 1
        )
        .to(peeks[i - 1], { opacity: 1, ease: "none", duration: 0.4 }, i - 1 + 0.4);
    }
    ScrollTrigger.refresh();
    return () => peeks.forEach((p) => p.remove());
  });
}

export default function Motion() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const intervals: number[] = [];

    // Contact form (get-started page) — simulated submit, as before.
    const form = document.getElementById("project-form") as HTMLFormElement | null;
    const onSubmit = (e: Event) => {
      e.preventDefault();
      if (!form) return;
      const btn = form.querySelector<HTMLButtonElement>("button[type=submit]");
      const note = document.getElementById("form-note");
      if (btn) {
        btn.disabled = true;
        btn.textContent = "Sending…";
      }
      window.setTimeout(() => {
        if (note) note.style.display = "block";
        form.reset();
        if (btn) {
          btn.disabled = false;
          btn.textContent = "Send Project Details";
        }
      }, 700);
    };
    form?.addEventListener("submit", onSubmit);

    // Rotating words (hero "precise / relentless / …")
    document.querySelectorAll<HTMLElement>("[data-rotate]").forEach((el) => {
      const words = (el.getAttribute("data-rotate") ?? "")
        .split(",")
        .map((w) => w.trim());
      if (words.length < 2) return;
      let i = 0;
      el.textContent = words[0];
      if (reduce) return;
      intervals.push(
        window.setInterval(() => {
          const next = (i + 1) % words.length;
          gsap.to(el, {
            yPercent: -110,
            opacity: 0,
            duration: 0.4,
            ease: "power3.in",
            onComplete: () => {
              el.textContent = words[next];
              gsap.fromTo(
                el,
                { yPercent: 110, opacity: 0 },
                { yPercent: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
              );
            },
          });
          i = next;
        }, 2200)
      );
    });

    if (reduce) {
      document
        .querySelectorAll(".reveal, [data-stagger] > *")
        .forEach((el) => el.classList.add("in"));
      return () => {
        intervals.forEach((id) => window.clearInterval(id));
        form?.removeEventListener("submit", onSubmit);
      };
    }

    // Lenis smooth scroll, driven by GSAP's ticker.
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true, lerp: 0.1 });
    const onLenisScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onLenisScroll);
    const raf = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      // Generic fade-up reveals with stagger.
      document.querySelectorAll("[data-stagger]").forEach((group) => {
        gsap.from(group.children, {
          scrollTrigger: { trigger: group, start: "top 82%" },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.09,
        });
      });
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 85%" },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: (parseFloat(el.getAttribute("data-delay") ?? "0") || 0) / 1000,
        });
      });

      // Scrub-fill headline — words brighten as you scroll.
      document.querySelectorAll("[data-scroll-fill]").forEach((el) => {
        const ins = splitWords(el);
        gsap.set(ins, { opacity: 0.18 });
        gsap.to(ins, {
          opacity: 1,
          stagger: 0.5,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 75%", end: "bottom 60%", scrub: 1 },
        });
      });

      // Pinned decks: "What we do" (vertical) + "The CodeREM process" (horizontal).
      const svcPin = document.querySelector("[data-svc-pin]");
      if (svcPin) pinnedDeck(svcPin, "y");
      const hdeck = document.querySelector("[data-hdeck]");
      if (hdeck) pinnedDeck(hdeck, "x");

      // Oversized footer logo scrubs up as you reach the bottom.
      const fl = document.querySelector("[data-footer-logo]");
      if (fl) {
        gsap.from(fl, {
          yPercent: 40,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".site-footer",
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1,
          },
        });
      }

      ScrollTrigger.refresh();
    });

    return () => {
      intervals.forEach((id) => window.clearInterval(id));
      form?.removeEventListener("submit", onSubmit);
      ctx.revert();
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
