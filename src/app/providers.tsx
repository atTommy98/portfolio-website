"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

/* next-themes needs a client boundary, but marking the whole page as a client
   component drags every section across with it — including async ones. Keeping
   the boundary here means children stay server components. */
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}
