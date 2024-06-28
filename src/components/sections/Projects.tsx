import ProjectCard from "../ProjectCard";
import { ProjectCards } from "../../data";

export default function Projects({ id }: SectionProps) {
  return (
    <section data-section className="mb-8" id={id}>
      <h2 className="mb-2">Some Projects I&apos;ve Worked On</h2>
      <div className="grid grid-cols-1 auto-rows-fr gap-4 shadow-center dark:shadow-neutral-700 p-4">
        {ProjectCards.map((project, index) => {
          return (
            <>
              <ProjectCard
                key={project.id}
                title={project.title}
                content={project.content}
                tags={project.tags}
                image={project.image}
                link={project.link}
                colour={project.colour}
              />
            </>
          );
        })}
      </div>
    </section>
  );
}
