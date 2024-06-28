"use client";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/Footer";
import Image from "next/image";
import Intro from "@/components/sections/Intro";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <Image
        alt="Me absailing"
        src="/ME.png"
        className="absolute top-[10vh] max-w-[110px] md:block md:max-w-xs lg:max-w-sm -left-2 md:-left-8"
        width="916"
        height="1222"
      />
      <MaxWidthWrapper className="pt-28">
        <Intro id="Intro" />
        <About id="About" />
        <Experience id="Experience" />
        <Projects id="Projects" />
      </MaxWidthWrapper>
      <Footer />
    </ThemeProvider>
  );
}
