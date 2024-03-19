/* typescript-eslint-disable */

import { useState } from "react";
import { useTheme } from "next-themes";
import useSound from "use-sound";
import CLICK1 from "../assets/sounds/CLICK1.mp3";
import CLICK2 from "../assets/sounds/CLICK2.mp3";
import Image from "next/image";
import SUN from "../assets/SUN.svg";
import MOON from "../assets/MOON.svg";

export default function ThemeButton() {
  const [animate, setAnimate] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  function handleThemeToggle() {
    setAnimate(true);
    if (theme === "dark") {
        setTheme("light")
        playClicked1()
    }
    if (theme === "light") {
        setTheme("dark")
        playClicked2()
    }
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }

  const [playClicked1] = useSound("/sounds/CLICK1.mp3", { volume: 0.25 });
  const [playClicked2] = useSound("/sounds/CLICK2.mp3", { volume: 0.25 });

  return (
    <div className="relative max-w-[30px] m-4">
      <Image
        alt="Moon or sun icon based on currently set theme"
        className={`w-full dark:invert ${animate && "animate-wiggle"} opacity-80`}
        src={theme === "dark" ? MOON : SUN}
        onClick={handleThemeToggle}
        onAnimationEnd={() => setAnimate(false)}
      />
    </div>
  );
}
