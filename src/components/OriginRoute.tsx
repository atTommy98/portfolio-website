"use client";

import { useEffect, useRef, useState } from "react";
import { originSteps } from "../constants/originSteps";

// Draws the flask or code-bracket glyph for a step, or nothing when it has neither.
function StepIcon({ name }: { name?: string | null }) {
  if (!name) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-1.5 inline-block h-3.5 w-3.5 shrink-0 text-blue-500"
      aria-hidden="true"
    >
      {name === "flask" ? (
        <>
          <path d="M10 2v6.5L4.5 18A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-3L14 8.5V2" />
          <path d="M8.5 2h7" />
          <path d="M6.8 15h10.4" />
        </>
      ) : (
        <>
          <path d="M9 18l-6-6 6-6" />
          <path d="M15 6l6 6-6 6" />
        </>
      )}
    </svg>
  );
}

// Lists the steps from chemistry degree to first dev role, staggered in on scroll.
export default function OriginRoute() {
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Show the finished state straight away when reduced motion is requested.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDrawn(true);
      return;
    }

    // Start the stagger once the route scrolls into view.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <p className="subtext mb-2 uppercase tracking-wide">
        <span className="text-red-500">Chemistry</span>{" "}
        <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
          &rarr;&nbsp;
        </span>
        <span className="text-blue-500">
          Code
        </span>
      </p>

      <ol className="relative flex list-none flex-col gap-6 md:grid md:grid-cols-4 md:gap-0">
        {originSteps.map((step, index) => (
          <li
            key={step.title}
            style={{ transitionDelay: `${300 + index * 180}ms` }}
            className={`relative flex items-start gap-3 transition-all duration-700 ease-out motion-reduce:transition-none md:flex-col md:gap-0 md:pr-4 ${
              drawn ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <div className="md:mt-3">
              <p className="subtext leading-normal">{step.year}</p>
              <p className="mt-1 flex items-center text-xs font-bold md:text-sm">
                <StepIcon name={step.icon} />
                {step.title}
              </p>
              <p className="maintext mt-1 text-xs leading-normal">
                {step.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
