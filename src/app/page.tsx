'use client'
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Header />
      </main>
    </ThemeProvider>
  );
}
