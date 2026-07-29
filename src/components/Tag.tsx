import { ReactNode } from "react";

/* Renders the li itself, so every list of pills keeps list semantics while
   each parent still owns its own spacing. */
export default function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[0.7rem] font-medium leading-5 text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300 md:text-[0.75rem]">
      {children}
    </li>
  );
}
