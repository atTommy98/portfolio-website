"use client";

import { KeyboardEvent, ReactNode, useState } from "react";

export type AboutTab = {
  id: string;
  label: string;
  content: ReactNode;
};

// Tab strip showing one panel at a time, with optional content opposite the tabs.
export default function AboutTabs({
  tabs,
  trailing,
}: {
  tabs: AboutTab[];
  trailing?: ReactNode;
}) {
  const [active, setActive] = useState(0);

  const current = tabs[active];

  return (
    <div className="mb-6">
      <div className="flex items-end justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800">
        <div
          role="tablist"
          aria-label="About me"
          className="relative grid w-full max-w-[15rem] grid-cols-3">
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
              className={`px-1 pb-3 text-xs font-bold uppercase tracking-wide transition-colors duration-200 md:text-sm ${
                active === index
                  ? "text-blue-500"
                  : "text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
              }`}>
              {tab.label}
            </button>
          ))}

          {/* Underline that slides across to sit beneath the active tab. */}
          <span
            aria-hidden="true"
            style={{ transform: `translateX(${active * 100}%)` }}
            className="absolute bottom-0 left-0 h-0.5 w-1/3 bg-blue-500 transition-transform duration-300 ease-out motion-reduce:transition-none"
          />
        </div>

        {trailing ? <div className="shrink-0 pb-3">{trailing}</div> : null}
      </div>
      {/* Panel for the active tab, remounted on each switch so its entrance replays. */}
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
