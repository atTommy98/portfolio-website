"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

// Holds the client boundary for theme switching so its children stay server components.
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}
