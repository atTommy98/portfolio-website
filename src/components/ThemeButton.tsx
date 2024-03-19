import { useState } from "react";
import { useTheme } from "next-themes";
import useSound from "use-sound";
import Image from "next/image";
import SUN from "../assets/SUN.svg";
import MOON from "../assets/MOON.svg";

export default function ThemeButton() {
  const [animate, setAnimate] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [sound1] = useSound("/sounds/CLICK1.mp3", { volume: 0.25 });
  const [sound2] = useSound("/sounds/CLICK2.mp3", { volume: 0.25 });

  function handleThemeToggle() {
    setAnimate(true);
    if (theme === "dark") {
      setTheme("light");
      sound1();
    }
    if (theme === "light") {
      setTheme("dark");
      sound2();
    }
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }

  return (
    <div className="relative max-w-[25px] md:max-w-[35px] m-[2px] sm:m-2 md:m-4 cursor-pointer">
      <Image
        alt="Moon or sun icon based on currently set theme"
        className={`w-full dark:invert ${
          animate && "animate-wiggle"
        } opacity-80`}
        src={theme === "dark" ? MOON : SUN}
        onClick={handleThemeToggle}
        onAnimationEnd={() => setAnimate(false)}
      />
    </div>
  );
}
