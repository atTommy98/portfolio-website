"use client";

import { useEffect, useRef, useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { ExperienceCards } from "../data";

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [fill, setFill] = useState(0);
  const [visible, setVisible] = useState<boolean[]>(
    ExperienceCards.map(() => false)
  );

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduce) {
      setVisible(ExperienceCards.map(() => true));
      setFill(containerRef.current?.offsetHeight ?? 0);
      return;
    }

    // Continuously grow the blue line as the section scrolls past an anchor
    // line at ~55% down the viewport.
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const anchor = window.innerHeight * 0.55;
      setFill(Math.max(0, Math.min(rect.height, anchor - rect.top)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Fade each row in (and light its dot) as it enters the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = rowRefs.current.indexOf(entry.target as HTMLDivElement);
          if (idx === -1) return;
          setVisible((prev) => {
            if (prev[idx]) return prev;
            const next = [...prev];
            next[idx] = true;
            return next;
          });
        });
      },
      { rootMargin: "0px 0px -45% 0px", threshold: 0 }
    );
    rowRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Track (faint full-length line) */}
      <span
        aria-hidden="true"
        className="absolute left-[11px] top-2 bottom-2 w-0.5 -translate-x-1/2 rounded-full bg-zinc-200 dark:bg-zinc-800 md:left-[15px]"
      />
      {/* Fill (grows with scroll) */}
      <span
        aria-hidden="true"
        style={{ height: `${fill}px` }}
        className="absolute left-[11px] top-2 w-0.5 -translate-x-1/2 rounded-full bg-blue-500 transition-[height] duration-150 ease-out md:left-[15px]"
      />

      <div className="flex flex-col gap-6">
        {ExperienceCards.map((card, i) => (
          <div
            key={card.id}
            ref={(el) => {
              rowRefs.current[i] = el;
            }}
            className={`relative pl-8 transition-all duration-700 ease-out md:pl-12 ${
              visible[i]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}>
            {/* Node dot */}
            <span
              aria-hidden="true"
              className={`absolute left-[11px] top-1 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 transition-colors duration-500 md:left-[15px] md:h-4 md:w-4 ${
                visible[i]
                  ? "border-blue-500 bg-blue-500"
                  : "border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900"
              }`}
            />
            {/* Date label on the timeline */}
            <p className="subtext mb-1 font-semibold uppercase tracking-wide text-blue-500/90">
              {card.subtitle}
            </p>
            <ExperienceCard title={card.title} content={card.content} />
          </div>
        ))}
      </div>
    </div>
  );
}
