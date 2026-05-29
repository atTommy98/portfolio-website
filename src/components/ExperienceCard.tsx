export default function ExperienceCard({
  title,
  content,
}: ExperienceCardProps) {
  return (
    <div className="group rounded-xl border border-zinc-200 bg-white/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:shadow-blue-500/5">
      <h4 className="font-semibold transition-colors group-hover:text-blue-500">
        {title}
      </h4>
      <ul className="mt-3 flex flex-col gap-2">
        {content.map((point, i) => (
          <li
            key={i}
            className="maintext flex gap-2.5 text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem]">
            <span className="mt-[0.5em] h-1 w-1 shrink-0 rounded-full bg-blue-500" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
