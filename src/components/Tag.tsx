import { ReactNode } from "react";

// A single pill, rendered as a list item so its parent keeps list semantics.
export default function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[0.7rem] font-medium leading-5 text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300 md:text-[0.75rem]">
      {children}
    </li>
  );
}
