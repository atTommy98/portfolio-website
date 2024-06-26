import ProjectCard from "./ProjectCard";
import { ProjectCards } from "../data";

export default function Projects({ id }: SectionProps) {
  return (
    <section data-section className="section-layout shadow-center dark:shadow-neutral-700" id={id}>
      <div className="grid grid-cols-1 auto-rows-fr gap-4">
        {ProjectCards.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              content={project.content}
              tags={project.tags}
              image={project.image}
              link={project.link}
              colour={project.colour}
            />
          );
        })}
      </div>
    </section>
  );
}
