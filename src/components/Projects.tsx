import ProjectCard from "./ProjectCard";
import { ProjectCards } from "../data";

export default function Projects({ id }: SectionProps) {
  return (
    <section data-section className="section-layout" id={id}>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        {ProjectCards.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              subtitle={project.subtitle}
              content={project.content}
            />
          );
        })}
      </div>
    </section>
  );
}
