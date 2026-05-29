import Image from "next/image";

export default function ProjectCard({
  title,
  content,
  tags,
  image,
  link,
  colour,
}: ProjectCardProps) {
  function handleClick(link: string) {
    if (!link) return;
    window.open(link, "_blank");
  }

  const hasLink = !!link

  return (
    <div
      className={`group relative flex h-full w-full flex-col rounded-xl border border-zinc-200 bg-white/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:shadow-blue-500/5 ${
        hasLink ? "cursor-pointer" : ""
      }`}
      onClick={() => handleClick(link)}>
      {hasLink && (
        <svg
          className="absolute top-1 right-2 h-4 w-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-500"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
            clipRule="evenodd"></path>
        </svg>
      )}
      <div className="w-full flex">
        {image && (
          <div className="h-full w-[30%] flex items-center">
            <Image
              alt={`${title} preview`}
              src={image}
              className="border-2 border-neutral-300 object-cover"
            />
          </div>
        )}
        <div className={image ? "w-[70%] pl-4" : "w-full"}>
          <h4 className="font-bold group-hover:text-blue-500">{title}</h4>
          <p className="maintext">{content}</p>
        </div>
      </div>
      <ul className="mt-2 flex flex-wrap">
        {tags.map((tag) => {
          return (
            <li key={tag} className="mr-2 mt-2">
              <div className="flex subtext items-center rounded-full bg-blue-700/70 dark:bg-blue-700/50 px-4 py-1 font-medium leading-5 text-cyan-400 dark:text-cyan-300">
                {tag}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
