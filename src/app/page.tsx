"use client";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <main className="relative flex min-h-screen flex-col items-center justify-between">
        <Intro id="Intro" />
        <About id="About" />
        <Experience id="Experience" />
        <Projects id="Projects" />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
