"use client";

import "slot-text/style.css";
import { useEffect, useRef, useState } from "react";
import { SlotText } from "slot-text/react";
import type { SlotOptions } from "slot-text";

const POOL = "0123456789";

// How many faces flick past, and how long each one is held, before the value lands.
const ROLL_STEPS = 8;
const STEP_MS = 130;

// Roll settings: only characters the scramble changed move, and each face lands
// inside a single step so the faces read as one continuous reel.
const OPTIONS: SlotOptions = {
  direction: "down",
  skipUnchanged: true,
  duration: 260,
  stagger: 40,
  exitOffset: 30,
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

  // Steps through fresh digits on a timer, then lands on the real value.
  useEffect(() => {
    if (!rolling) return;

    let count = 0;
    const timer = window.setInterval(() => {
      count += 1;

      if (count >= ROLL_STEPS) {
        window.clearInterval(timer);
        setText(value);
      } else if (count === ROLL_STEPS - 1) {
        // Scrambled from the value, so every digit still has to move to land.
        setText(scramble(value));
      } else {
        setText((previous) => scramble(previous));
      }
    }, STEP_MS);

    return () => window.clearInterval(timer);
  }, [rolling, value]);

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
