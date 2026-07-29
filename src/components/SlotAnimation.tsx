"use client";

import "slot-text/style.css";
import { useEffect, useRef, useState } from "react";
import { SlotText } from "slot-text/react";
import type { SlotOptions } from "slot-text";

const POOL = "0123456789";

// Roll settings: only characters the scramble changed move, taking 900ms to land.
const OPTIONS: SlotOptions = {
  direction: "down",
  skipUnchanged: true,
  duration: 900,
  stagger: 140,
  exitOffset: 120,
};

// Replaces each digit with a different digit and leaves everything else alone.
function scramble(value: string): string {
  return Array.from(value)
    .map((char) => {
      if (!/[0-9]/.test(char)) return char;
      const options = POOL.replace(char, "");
      return options[Math.floor(Math.random() * options.length)];
    })
    .join("");
}

// Rolls a value's digits into place the first time it scrolls into view.
export default function SlotAnimation({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [rolling, setRolling] = useState(false);
  const [text, setText] = useState(value);

  // Scrambles the digits and starts the roll once the value scrolls into view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setText(scramble(value));
        setRolling(true);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  // Restores the real value a beat later, which is the change slot-text animates.
  useEffect(() => {
    if (!rolling || text === value) return;

    const timer = window.setTimeout(() => setText(value), 200);
    return () => window.clearTimeout(timer);
  }, [rolling, text, value]);

  if (!rolling) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <SlotText
      ref={ref}
      text={text}
      options={OPTIONS}
      aria-label={value}
      className={className}
    />
  );
}
