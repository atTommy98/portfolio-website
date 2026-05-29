import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import useSound from "use-sound";
import Image from "next/image";
import SUN from "../assets/SUN.svg";
import MOON from "../assets/MOON.svg";

export default function ThemeButton() {
  const [animate, setAnimate] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const [sound1] = useSound("/sounds/CLICK1.mp3", { volume: 0.25 });
  const [sound2] = useSound("/sounds/CLICK2.mp3", { volume: 0.25 });

  useEffect(() => setMounted(true), []);

  function handleThemeToggle() {
    setAnimate(true);
    if (resolvedTheme === "dark") {
      setTheme("light");
      sound1();
    } else {
      setTheme("dark");
      sound2();
    }
  }

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle light or dark theme"
      onClick={handleThemeToggle}
      className="group relative z-10 flex h-full items-center px-2 md:px-3 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
      <Image
        alt=""
        aria-hidden="true"
        className={`h-5 w-5 md:h-6 md:w-6 dark:invert transition-transform duration-300 ease-out group-hover:rotate-45 group-hover:scale-110 ${
          animate ? "animate-wiggle" : ""
        }`}
        width={100}
        height={100}
        src={isDark ? MOON : SUN}
        onAnimationEnd={() => setAnimate(false)}
      />
    </button>
  );
}
