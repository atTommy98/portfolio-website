import ThemeButton from "./ThemeButton";

export default function Header() {
  const links = [
    {
      id: 1,
      name: "About",
    },
    {
      id: 2,
      name: "Projects",
    },
    {
      id: 3,
      name: "Contact",
    },
  ];

  return (
    <header className="h-[7.5vh] min-h-fit w-full flex items-center justify-between px-2 md:px-8 bg-sky-400 dark:bg-sky-700 shadow-md text-sm md:text-xl">
      <div className="relative flex justify-center items-center overflow-hidden">
        <h1 className="dark-text dark:light-text uppercase text-center font-bold absolute animate-swap1">
          Developer
        </h1>
        <h1 className="dark-text dark:light-text uppercase text-center font-bold relative animate-swap2">
          Tommy Holt
        </h1>
        <h1 className="dark-text dark:light-text uppercase text-center font-bold absolute animate-swap3">
          Adventurer
        </h1>
      </div>
      <nav className="flex justify-center items-center">
        {links.map((link) => (
          <a
            key={link.id}
            className="dark-text dark:light-text mx-2 md:mx-4 w-fit">
            {link.name}
          </a>
        ))}
        <ThemeButton />
      </nav>
    </header>
  );
}
