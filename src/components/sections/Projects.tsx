import ProjectCard from "../ProjectCard";
import Reveal from "../Reveal";
import { ProjectCards } from "../../data";

export default function Projects({ id }: SectionProps) {
  return (
    <section data-section className="mb-8" id={id}>
      <Reveal>
        <h2>Projects</h2>
      </Reveal>
      <div className="grid grid-cols-1 auto-rows-min gap-4">
        {ProjectCards.map((project, index) => {
          return (
            <Reveal key={project.id} delay={index * 100}>
              <ProjectCard
                title={project.title}
                content={project.content}
                tags={project.tags}
                image={project.image}
                link={project.link}
                colour={project.colour}
              />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
