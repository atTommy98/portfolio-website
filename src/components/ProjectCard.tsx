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
    window.open(link, "_blank");
  }

  return (
    <div
      className="relative w-full h-full p-4 col-span-1 flex flex-col rounded-sm bg-zinc-100 dark:bg-zinc-900 group hover:scale-[1.025] cursor-pointer transition-all"
      onClick={() => handleClick(link)}>
      <svg
        className="absolute top-1 right-2 h-4 w-4 group-hover:text-blue-500"
        fill="currentColor">
        <path
          fillRule="evenodd"
          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
          clipRule="evenodd"></path>
      </svg>
      <div className="w-full flex">
        <div className="h-full w-[30%] flex items-center">
          <Image
            alt="Project image"
            src={image}
            className="border-2 border-neutral-300 object-cover"
          />
        </div>
        <div className="w-[70%] pl-4">
          <h4 className="font-bold group-hover:text-blue-500">{title}</h4>
          <p className="maintext">{content}</p>
        </div>
      </div>
      <ul className="mt-2 flex flex-wrap">
        {tags.map((tag) => {
          return (
            <li key={tag} className="mr-1.5 mt-2">
              <div className="flex subtext items-center rounded-full bg-blue-500 px-3 py-1 font-medium leading-5 text-zinc-50 shadow-md">
                {tag}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
