"use client";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/Footer";
import Intro from "@/components/sections/Intro";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Header />
      <MaxWidthWrapper className="">
        <Intro id="Intro" />
        <About id="About" />
        <Experience id="Experience" />
        <Projects id="Projects" />
      </MaxWidthWrapper>
      <Footer />
    </ThemeProvider>
  );
}
