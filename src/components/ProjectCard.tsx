"use client";

import Image from "next/image";
import Tag from "./Tag";

// Renders one project as a card with a preview image, blurb and tag pills.
export default function ProjectCard({
  title,
  content,
  tags,
  image,
  link,
  colour,
  fit = "cover",
}: ProjectCardProps) {
  // Opens the project in a new tab, ignoring cards that have no link.
  function handleClick(link: string) {
    if (!link) return;
    window.open(link, "_blank");
  }

  const hasLink = !!link;

  return (
    <div
      className={`group relative flex h-full w-full flex-col rounded-xl border border-zinc-200 bg-white/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:shadow-blue-500/5 ${
        hasLink ? "cursor-pointer" : ""
      }`}
      onClick={() => handleClick(link)}
    >
      {/* Arrow shown only on cards that lead somewhere. */}
      {hasLink && (
        <svg
          className="absolute top-1 right-2 h-4 w-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-500"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
            clipRule="evenodd"
          ></path>
        </svg>
      )}
      {/* Fixed-height row so every card's preview box is the same size. */}
      <div className="grid h-32 w-full grid-cols-10">
        <div className="col-span-2 flex items-center justify-center overflow-hidden border-2 border-neutral-500 rounded-md bg-zinc-900">
          {image ? (
            <Image
              alt={`${title} preview`}
              src={image}
              className={`h-full w-full ${
                fit === "contain" ? "object-contain p-3" : "object-cover"
              }`}
            />
          ) : (
            <span className="subtext text-neutral-400">No image yet</span>
          )}
        </div>
        <div className="col-span-7 overflow-hidden pl-4">
          <h4 className="font-bold group-hover:text-blue-500">{title}</h4>
          <p className="maintext">{content}</p>
        </div>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </ul>
    </div>
  );
}
