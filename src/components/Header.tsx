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
    <header className="h-[10vh] w-full flex items-center justify-between px-12">
      <div className="flex justify-center items-center">
        <h1 className="dark-text dark:light-text">Tommy Holt</h1>
      </div>
      <div className="flex justify-center items-center">
        {links.map((link) => (
          <a key={link.id} className="dark-text dark:light-text mx-4">
            {link.name}
          </a>
        ))}
        <ThemeButton />
      </div>
    </header>
  );
}
