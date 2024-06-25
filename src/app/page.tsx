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
  const AboutRef = useRef<HTMLDivElement>(null);
  const ProjectsRef = useRef<HTMLDivElement>(null);
  const ContactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (AboutRef.current) {
      const aboutPos = AboutRef.current.offsetTop;
    }
    if (ProjectsRef.current) {
      const projectsPos = ProjectsRef.current.offsetTop;
    }
    if (ContactRef.current) {
      const contactPos = ContactRef.current.offsetTop;
    }
  }

  return (
    <ThemeProvider attribute="class">
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <About id="About" ref={AboutRef} />
        <Projects id="Projects" ref={ProjectsRef} />
        <Contact id="Contact" ref={ContactRef} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
