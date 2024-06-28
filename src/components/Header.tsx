import { useState, useEffect, useRef } from "react";
import ThemeButton from "./ThemeButton";

export default function Header() {
  const [activeSection, setActiveSection] = useState<string | null>("About");
  const sections = useRef<any>([]);

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

  const handleScroll = () => {
    sections.current.forEach((section: any) => {
      const header = document.querySelector("#header");
      let headerHeight;
      if (header !== null && header instanceof HTMLElement) {
        headerHeight = header.offsetHeight;
      }
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      let windowBottom;
      if (headerHeight) {
        windowBottom = window.scrollY + headerHeight + window.innerHeight;
        if (
          windowBottom > sectionOffsetTop &&
          windowBottom < sectionOffsetTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      }
    });
  };

  useEffect(() => {
    sections.current = document.querySelectorAll("[data-section]");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
        <ul className="h-full flex justify-center items-center">
          {links.map((link) => (
            <li key={link.id}>
              <h6
                className={`mx-[5px] md:mx-4 w-fit text-xs md:text-base lg:text-lg cursor-pointer transition-color duration-300 ease-in ${
                  activeSection === link.name ? "text-blue-500" : ""
                }`}
                onClick={() =>
                  document.getElementById(link.name)?.scrollIntoView()
                }>
                {link.name}
              </h6>
            </li>
          ))}
          <ThemeButton />
        </ul>
      </nav>
    </header>
  );
}
