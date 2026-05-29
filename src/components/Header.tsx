import { useState, useEffect } from "react";
import ThemeButton from "./ThemeButton";

export default function Header() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const links = [
    {
      id: 1,
      name: "About",
    },
    {
      id: 2,
      name: "Experience",
    },
    {
      id: 3,
      name: "Projects",
    },
  ];

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-section]"));
    const header = document.querySelector("#header");
    const headerHeight =
      header instanceof HTMLElement ? header.offsetHeight : 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id || null);
          }
        });
      },
      {
        // Account for the sticky header at the top, and only activate a
        // section once it has scrolled into the upper portion of the viewport.
        rootMargin: `-${headerHeight + 8}px 0px -55% 0px`,
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="h-[7.5vh] sticky top-0 w-full flex items-center justify-between px-2 md:px-14 shadow-md dark:shadow-neutral-700 z-[100] backdrop-blur-md"
      id="header">
      <div className="relative flex justify-center items-center">
        <h3 className="dark-text dark:light-text uppercase text-center font-bold text-xs md:text-base lg:text-xl">
          Tommy Holt
        </h3>
      </div>
      <nav className="h-full">
        <ul className="h-full flex justify-center items-stretch">
          {links.map((link) => (
            <li key={link.id} className="h-full">
              <button
                type="button"
                onClick={() =>
                  document.getElementById(link.name)?.scrollIntoView()
                }
                className={`group relative z-10 flex h-full items-center px-2 md:px-4 text-xs md:text-base lg:text-lg cursor-pointer transition-colors duration-300 ease-in hover:text-blue-500 ${
                  activeSection === link.name ? "text-blue-500" : ""
                }`}>
                <span className="relative">
                  {link.name}
                  <span
                    className={`pointer-events-none absolute -bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-blue-500 transition-all duration-300 ease-out ${
                      activeSection === link.name
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </span>
              </button>
            </li>
          ))}
          <li className="h-full">
            <ThemeButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}
