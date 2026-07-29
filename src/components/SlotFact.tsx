"use client";

import "slot-text/style.css";
import { useEffect, useRef, useState } from "react";
import { SlotText } from "slot-text/react";
import type { SlotOptions } from "slot-text";

const POOL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

/* skipUnchanged off so every glyph rolls even where the scramble happens to
   land on the right character. */
const OPTIONS: SlotOptions = {
  direction: "down",
  skipUnchanged: false,
};

function scramble(value: string): string {
  return Array.from(value)
    .map((char) =>
      /[a-z0-9]/i.test(char)
        ? POOL[Math.floor(Math.random() * POOL.length)]
        : char
    )
    .join("");
}

/* slot-text only animates when `text` changes after mount, so a roll on scroll
   means mounting with a scramble and flipping to the real value a beat later.
   Until then this stays plain text, which keeps the server output and the
   no-JS fallback honest. */
export default function SlotFact({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [rolling, setRolling] = useState(false);
  const [text, setText] = useState(value);

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
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  useEffect(() => {
    if (!rolling || text === value) return;

    const timer = window.setTimeout(() => setText(value), 80);
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
