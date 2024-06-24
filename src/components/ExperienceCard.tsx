function ExperienceCard({ title, subtitle, content }: ExperienceCardProps) {
  return (
    <div className="w-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] animate-border rounded-xl p-[3px] my-4">
      <div className="w-full h-full rounded-xl bg-zinc-50 dark:bg-zinc-900 px-4 py-2">
        <h1 className="card--title">{title}</h1>
        <h3 className="card--subtitle grey-text">{subtitle}</h3>
        <p className="card--text">{content}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;
