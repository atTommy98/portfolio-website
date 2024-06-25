export default function ProjectCard({title, subtitle, content}: ExperienceCardProps) {
  return (
    <div className="w-full h-full bg-gradient-to-r from-red-500 via-purple-500 to-[#3b82f6] bg-[length:400%_400%] animate-border rounded-xl p-[3px] my-2">
      <div className="w-full h-full rounded-xl bg-zinc-50 dark:bg-zinc-900 p-4 py-2">
        <h4 className="">{title}</h4>
        <h6 className="subtext mb-2">{subtitle}</h6>
        <p className="maintext">{content}</p>
      </div>
    </div>
  );
}
