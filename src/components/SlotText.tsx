"use client";

import { Fragment, useEffect, useRef, useState } from "react";

const DIGITS = "0123456789";
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const REEL_LENGTH = 6;

/* Deterministic rather than random: the reel is built during render, so
   Math.random() here would produce a different strip on the server than on
   the client and break hydration. */
function buildReel(char: string, seed: number): string[] {
  const pool = /[0-9]/.test(char) ? DIGITS : /[a-z]/.test(char) ? LOWER : UPPER;
  const reel: string[] = [];

  for (let i = 0; i < REEL_LENGTH; i++) {
    reel.push(pool[(seed * 7 + i * 13 + i * i * 3) % pool.length]);
  }

  reel.push(char);
  return reel;
}

export default function SlotText({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  /* Plain text until mounted, so the server output and the no-JS fallback
     are both the real value rather than a frozen row of random characters. */
  const [mounted, setMounted] = useState(false);
  const [rolled, setRolled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setMounted(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRolled(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!mounted) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className} aria-label={value}>
      {Array.from(value).map((char, index) => {
        /* Spaces stay as bare text nodes. Wrapping them would make the whole
           string one unbreakable run of inline-blocks, and these values have
           to wrap inside a quarter-width tile. */
        if (char === " ") return <Fragment key={index}> </Fragment>;

        if (!/[a-z0-9]/i.test(char)) {
          return (
            <span
              key={index}
              aria-hidden="true"
              className="inline-block h-[1.25em] align-bottom leading-[1.25em]">
              {char}
            </span>
          );
        }

        const reel = buildReel(char, index);
        const offset = rolled ? ((reel.length - 1) / reel.length) * 100 : 0;

        return (
          <span
            key={index}
            aria-hidden="true"
            className="inline-block h-[1.25em] overflow-hidden align-bottom">
            <span
              className="flex flex-col transition-transform duration-700 ease-out motion-reduce:transition-none"
              style={{
                transitionDelay: `${index * 45}ms`,
                transform: `translateY(-${offset}%)`,
              }}>
              {reel.map((reelChar, position) => (
                <span key={position} className="h-[1.25em] leading-[1.25em]">
                  {reelChar}
                </span>
              ))}
            </span>
          </span>
        );
      })}
    </span>
  );
}
