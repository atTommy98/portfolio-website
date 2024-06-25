"use client";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("About");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {

  }

  return (
    <ThemeProvider attribute="class">
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <About id="About" />
        <Projects id="Projects"/>
        <Contact id="Contact"/>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
