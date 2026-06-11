/* CodeREM Labs — motion system rebuilt to match sohub.digital
   Lenis smooth scroll + GSAP ScrollTrigger (line reveals, stagger, pinned
   services, scrub-fill headline, oversized footer). Degrades gracefully
   if the CDN libs fail to load. */
(function () {
  "use strict";

  var hasGSAP = typeof window.gsap !== "undefined";
  var hasLenis = typeof window.Lenis !== "undefined";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Header / nav / footer year / form (always run) ---------- */
  var header = document.querySelector(".site-header");

  // right-edge scroll progress bar (sohub-style)
  var prog = document.createElement("div");
  prog.className = "scroll-progress";
  prog.innerHTML = "<span></span>";
  document.body.appendChild(prog);
  var progFill = prog.firstChild;

  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 20);
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var p = max > 0 ? window.scrollY / max : 0;
    progFill.style.height = (p * 100).toFixed(2) + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  // Menu button toggles the panel (sohub-style), with a click backdrop
  var menuBtn = document.querySelector(".menu-btn");
  var menuPanel = document.getElementById("site-menu");
  var backdrop = document.createElement("div");
  backdrop.className = "menu-backdrop";
  document.body.appendChild(backdrop);

  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    if (menuBtn) menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    if (menuPanel) menuPanel.setAttribute("aria-hidden", open ? "false" : "true");
  }
  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      setMenu(!document.body.classList.contains("menu-open"));
    });
  }
  backdrop.addEventListener("click", function () { setMenu(false); });
  if (menuPanel) {
    menuPanel.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  var form = document.getElementById("project-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector("button[type=submit]");
      var note = document.getElementById("form-note");
      if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }
      setTimeout(function () {
        if (note) note.style.display = "block";
        form.reset();
        if (btn) { btn.disabled = false; btn.textContent = "Send Project Details"; }
      }, 700);
    });
  }

  /* ---------- Rotating words (sohub hero "diligent") ---------- */
  document.querySelectorAll("[data-rotate]").forEach(function (el) {
    var words = (el.getAttribute("data-rotate") || "").split(",").map(function (w) { return w.trim(); });
    if (words.length < 2) return;
    var i = 0;
    el.textContent = words[0];
    if (reduce) return;
    setInterval(function () {
      var next = (i + 1) % words.length;
      if (hasGSAP) {
        window.gsap.to(el, { yPercent: -110, opacity: 0, duration: 0.4, ease: "power3.in", onComplete: function () {
          el.textContent = words[next];
          window.gsap.fromTo(el, { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.5, ease: "power3.out" });
        }});
      } else {
        el.textContent = words[next];
      }
      i = next;
    }, 2200);
  });

  /* ---------- Split helper: wrap each line/word for reveal ---------- */
  function splitWords(el) {
    var text = el.textContent;
    el.textContent = "";
    text.split(/(\s+)/).forEach(function (part) {
      if (/^\s+$/.test(part)) { el.appendChild(document.createTextNode(part)); return; }
      var outer = document.createElement("span");
      outer.className = "word";
      var inner = document.createElement("span");
      inner.className = "word-in";
      inner.textContent = part;
      outer.appendChild(inner);
      el.appendChild(outer);
    });
    return el.querySelectorAll(".word-in");
  }

  /* ====================  NO-GSAP FALLBACK  ==================== */
  if (!hasGSAP || reduce) {
    document.querySelectorAll(".reveal, [data-stagger] > *").forEach(function (el) { el.classList.add("in"); });
    if ("IntersectionObserver" in window && !reduce) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
      }, { threshold: 0.12 });
      document.querySelectorAll(".reveal").forEach(function (el) { el.classList.remove("in"); io.observe(el); });
    }
    return;
  }

  /* ====================  GSAP + LENIS  ==================== */
  var gsap = window.gsap;
  gsap.registerPlugin(window.ScrollTrigger);
  var ST = window.ScrollTrigger;

  // Lenis smooth scroll, driven by GSAP ticker (their setup)
  if (hasLenis) {
    var lenis = new window.Lenis({ duration: 1.1, smoothWheel: true, lerp: 0.1 });
    lenis.on("scroll", ST.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
    // anchor links go through lenis
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        if (id.length > 1 && document.querySelector(id)) { e.preventDefault(); lenis.scrollTo(id, { offset: -80 }); }
      });
    });
  }

  // Hero headline: line/word reveal on load (y:110%, stagger, power4.out)
  document.querySelectorAll("[data-reveal-words]").forEach(function (el) {
    var ins = splitWords(el);
    gsap.from(ins, { yPercent: 115, opacity: 0, duration: 1.2, ease: "power4.out", stagger: 0.08, delay: 0.15 });
  });

  // Generic fade-up reveals with stagger (whileInView equivalent)
  document.querySelectorAll("[data-stagger]").forEach(function (group) {
    gsap.from(group.children, {
      scrollTrigger: { trigger: group, start: "top 82%" },
      y: 60, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.09
    });
  });
  document.querySelectorAll(".reveal").forEach(function (el) {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: "top 85%" },
      y: 50, opacity: 0, duration: 1, ease: "power3.out",
      delay: (parseFloat(el.getAttribute("data-delay")) || 0) / 1000
    });
  });

  // "What we do" — pinned deck: cards stack and reveal one at a time on scroll.
  // (desktop only; on mobile the cards just stack in normal flow)
  var svcPin = document.querySelector("[data-svc-pin]");
  if (svcPin && typeof gsap.matchMedia === "function") {
    var svcCards = gsap.utils.toArray(svcPin.querySelectorAll("[data-card]"));
    if (svcCards.length > 1) {
      gsap.matchMedia().add("(min-width: 901px)", function () {
        var deck = svcPin.querySelector(".svc-deck");
        var stage = svcPin.querySelector(".svc-pin-stage");
        var maxH = svcCards.reduce(function (m, c) { return Math.max(m, c.offsetHeight); }, 0);
        gsap.set(deck, { height: maxH });
        gsap.set(svcCards, {
          position: "absolute", top: 0, left: 0, width: "100%",
          yPercent: function (i) { return i === 0 ? 0 : 100; },
          zIndex: function (i) { return i + 1; }
        });
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: stage, start: "top top",
            end: "+=" + (svcCards.length * 72) + "%",
            pin: true, scrub: 0.7, anticipatePin: 1
          }
        });
        for (var i = 1; i < svcCards.length; i++) {
          tl.to(svcCards[i - 1], { yPercent: -4, scale: 0.96, ease: "none", duration: 1 }, i - 1)
            .to(svcCards[i], { yPercent: 0, ease: "none", duration: 1 }, i - 1);
        }
        ST.refresh();
      });
    }
  }

  // Scrub-fill headline (.scroll-text) — words fill from muted to bright on scroll
  document.querySelectorAll("[data-scroll-fill]").forEach(function (el) {
    var ins = splitWords(el);
    gsap.set(ins, { opacity: 0.18 });
    gsap.to(ins, {
      opacity: 1,
      stagger: 0.5,
      ease: "none",
      scrollTrigger: { trigger: el, start: "top 75%", end: "bottom 60%", scrub: 1 }
    });
  });

  // PINNED services section (sohub signature: pin + scrub through panels)
  var pinWrap = document.querySelector("[data-pin]");
  if (pinWrap && window.innerWidth > 900) {
    var panels = gsap.utils.toArray("[data-panel]");
    if (panels.length) {
      gsap.set(panels, { yPercent: function (i) { return i === 0 ? 0 : 12; }, opacity: function (i) { return i === 0 ? 1 : 0; }, scale: function (i) { return i === 0 ? 1 : 0.95; } });
      var tl = gsap.timeline({
        scrollTrigger: { trigger: pinWrap, start: "top top", end: "+=" + (panels.length * 90) + "%", pin: true, scrub: 0.6, anticipatePin: 1 }
      });
      panels.forEach(function (panel, i) {
        if (i === 0) return;
        tl.to(panels[i - 1], { yPercent: -12, opacity: 0, scale: 0.95, duration: 1, ease: "power2.inOut" }, i)
          .to(panel, { yPercent: 0, opacity: 1, scale: 1, duration: 1, ease: "power2.out" }, i);
      });
      // progress dots
      var dots = document.querySelectorAll("[data-dot]");
      panels.forEach(function (panel, i) {
        ST.create({ trigger: pinWrap, start: "top top", end: "+=" + (panels.length * 90) + "%",
          onUpdate: function (self) {
            var idx = Math.min(panels.length - 1, Math.floor(self.progress * panels.length));
            dots.forEach(function (d, di) { d.classList.toggle("on", di === idx); });
          }});
      });
    }
  }

  // "The CodeREM process" — pinned deck, cards reveal one at a time sliding
  // in HORIZONTALLY (from the right). Same stacking idea as "What we do".
  var hdeck = document.querySelector("[data-hdeck]");
  if (hdeck && typeof gsap.matchMedia === "function") {
    var hCards = gsap.utils.toArray(hdeck.querySelectorAll("[data-card]"));
    if (hCards.length > 1) {
      gsap.matchMedia().add("(min-width: 901px)", function () {
        var deck = hdeck.querySelector(".svc-deck");
        var stage = hdeck.querySelector(".svc-pin-stage");
        var maxH = hCards.reduce(function (m, c) { return Math.max(m, c.offsetHeight); }, 0);
        gsap.set(deck, { height: maxH });
        gsap.set(hCards, {
          position: "absolute", top: 0, left: 0, width: "100%",
          xPercent: function (i) { return i === 0 ? 0 : 100; },
          zIndex: function (i) { return i + 1; }
        });
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: stage, start: "top top",
            end: "+=" + (hCards.length * 72) + "%",
            pin: true, scrub: 0.7, anticipatePin: 1
          }
        });
        for (var i = 1; i < hCards.length; i++) {
          tl.to(hCards[i - 1], { xPercent: -6, scale: 0.96, opacity: 0.4, ease: "none", duration: 1 }, i - 1)
            .to(hCards[i], { xPercent: 0, ease: "none", duration: 1 }, i - 1);
        }
        ST.refresh();
      });
    }
  }

  // Oversized footer logo scrubs up as you reach the bottom
  var fl = document.querySelector("[data-footer-logo]");
  if (fl) {
    gsap.from(fl, { yPercent: 40, opacity: 0, ease: "none",
      scrollTrigger: { trigger: ".site-footer", start: "top bottom", end: "bottom bottom", scrub: 1 } });
  }

  // Parallax marquee row tied to scroll velocity feel
  document.querySelectorAll("[data-parallax]").forEach(function (el) {
    gsap.to(el, { xPercent: -8, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1 } });
  });

  ST.refresh();
})();
