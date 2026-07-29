"use client";

import { useEffect, useRef, useState } from "react";

/* The origin story only — where the Experience section picks up the rest.
   Four beats keep it scannable; any more and it competes with the timeline. */
const steps = [
  {
    year: "2020",
    title: "Chemistry BSc",
    detail: "Nottingham Trent University",
    icon: "flask",
  },
  {
    year: "2020",
    title: "Caught the bug",
    detail: "A dissertation on programming for chemical analysis",
  },
  {
    year: "2020",
    title: "The School of Code",
    detail: "16 weeks, zero to hero",
  },
  {
    year: "2021",
    title: "First dev role",
    detail: "And never looked back",
    icon: "code",
  },
];

function StepIcon({ name }: { name?: string }) {
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
      aria-hidden="true">
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

export default function OriginRoute() {
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDrawn(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <p className="subtext mb-6 uppercase tracking-wide">
        Chemistry <span className="text-blue-500">&rarr;</span> Code
      </p>

      <ol className="relative flex list-none flex-col gap-6 md:grid md:grid-cols-4 md:gap-0">
        {/* Connector: vertical on mobile, horizontal from the first dot centre
            to the last on md+. Scaling a line beats animating stroke-dashoffset
            here because it stays correct at every breakpoint for free. */}
        <span
          aria-hidden="true"
          className="absolute top-1.5 bottom-1.5 left-1.5 w-px origin-top -translate-x-1/2 bg-gradient-to-b from-zinc-300 to-blue-500 transition-transform duration-1000 ease-out motion-reduce:transition-none dark:from-zinc-700 md:hidden"
          style={{ transform: `translateX(-50%) scaleY(${drawn ? 1 : 0})` }}
        />
        <span
          aria-hidden="true"
          className="absolute top-1.5 left-[12.5%] right-[12.5%] hidden h-px origin-left -translate-y-1/2 bg-gradient-to-r from-zinc-300 to-blue-500 transition-transform duration-1000 ease-out motion-reduce:transition-none dark:from-zinc-700 md:block"
          style={{ transform: `translateY(-50%) scaleX(${drawn ? 1 : 0})` }}
        />

        {steps.map((step, index) => (
          <li
            key={step.title}
            style={{ transitionDelay: `${300 + index * 180}ms` }}
            className={`relative flex items-start gap-3 transition-all duration-700 ease-out motion-reduce:transition-none md:flex-col md:gap-0 md:pr-4 ${
              drawn ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}>
            <span
              aria-hidden="true"
              className={`mt-0.5 h-3 w-3 shrink-0 rounded-full border-2 transition-colors duration-500 md:mt-0 ${
                index === steps.length - 1
                  ? "border-blue-500 bg-blue-500"
                  : "border-zinc-300 bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-900"
              }`}
            />
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
