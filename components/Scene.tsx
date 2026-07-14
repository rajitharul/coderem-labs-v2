"use client";

import { useEffect, useRef } from "react";

/* A looping motion graphic (rendered by Remotion — see remotion/ and
   `npm run render:remops`).

   Two behaviours that a bare <video autoplay loop> gets wrong:
     • it plays forever, even scrolled far offscreen, on every visitor's CPU.
       We play only while the clip is actually in view.
     • it ignores prefers-reduced-motion. We leave the poster frame up instead,
       which is a still of the scene at rest, so the page still reads correctly. */

type Props = {
  /* Basename under /portfolio/remops — e.g. "remops-thread" resolves to
     .webm, .mp4 and .jpg. */
  name: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  className?: string;
};

export default function Scene({ name, width, height, alt, caption, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.removeAttribute("autoplay");
      el.pause();
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void el.play().catch(() => {});
        else el.pause();
      },
      { rootMargin: "200px 0px", threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base = `/portfolio/remops/${name}`;

  return (
    <figure className={`scene${className ? ` ${className}` : ""}`}>
      <video
        ref={ref}
        className="scene-video"
        width={width}
        height={height}
        poster={`${base}.jpg`}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
      >
        <source src={`${base}.webm`} type="video/webm" />
        <source src={`${base}.mp4`} type="video/mp4" />
      </video>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
