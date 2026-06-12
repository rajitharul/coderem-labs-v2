"use client";

import { useEffect, useRef } from "react";

/* Right-edge scroll progress bar (sohub-style), previously injected by
   assets/script.js. */
export default function ScrollProgress() {
  const fillRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (fillRef.current) {
        fillRef.current.style.height = `${(p * 100).toFixed(2)}%`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="scroll-progress">
      <span ref={fillRef}></span>
    </div>
  );
}
