export default function ExperienceCard({
  title,
  content,
}: ExperienceCardProps) {
  return (
    <div className="rounded-xl bg-white/60 p-5 dark:bg-zinc-900/40">
      <h4 className="font-semibold">{title}</h4>
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
