"use client";

import { KeyboardEvent, ReactNode, useState } from "react";

export type AboutTab = {
  id: string;
  label: string;
  content: ReactNode;
};

export default function AboutTabs({ tabs }: { tabs: AboutTab[] }) {
  const [active, setActive] = useState(0);

  /* Arrow keys move between tabs, per the WAI-ARIA tabs pattern. Only the
     selected tab stays in the tab order so keyboard users aren't forced
     through every label to reach the panel. */
  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const last = tabs.length - 1;
    let next: number | null = null;

    if (event.key === "ArrowRight") next = active === last ? 0 : active + 1;
    if (event.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;

    if (next === null) return;
    event.preventDefault();
    setActive(next);
    document.getElementById(`tab-${tabs[next].id}`)?.focus();
  }

  const current = tabs[active];

  return (
    <div className="mb-6">
      <div
        role="tablist"
        aria-label="About me"
        className="relative grid max-w-xs grid-cols-3 border-b border-zinc-200 dark:border-zinc-800">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            role="tab"
            type="button"
            aria-selected={active === index}
            aria-controls={`panel-${tab.id}`}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={handleKeyDown}
            className={`px-1 pb-3 text-xs font-bold uppercase tracking-wide transition-colors duration-200 md:text-sm ${
              active === index
                ? "text-blue-500"
                : "text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
            }`}>
            {tab.label}
          </button>
        ))}

        {/* Equal-width tabs mean the indicator can slide by index alone,
            with no measuring or resize handling. */}
        <span
          aria-hidden="true"
          style={{ transform: `translateX(${active * 100}%)` }}
          className="absolute bottom-0 left-0 h-0.5 w-1/3 bg-blue-500 transition-transform duration-300 ease-out motion-reduce:transition-none"
        />
      </div>

      {/* Keyed on the tab id so the panel remounts and replays its entrance,
          which also restarts the route animation each time it's opened. */}
      <div
        key={current.id}
        id={`panel-${current.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${current.id}`}
        tabIndex={0}
        className="fade-up min-h-[11rem] pt-6 md:min-h-[9rem]">
        {current.content}
      </div>
    </div>
  );
}
