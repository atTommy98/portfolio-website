import ExperienceCard from "./ExperienceCard";
import { ExperienceCards } from "../data";

export default function Experience({ id }: SectionProps) {
  return (
    <section data-section className="section-layout" id={id}>
      <h2 className="mb-2">My Experience</h2>
      <div className="grid auto-rows-min gap-4">
        {ExperienceCards.map((card) => {
          return (
            <ExperienceCard
              key={card.id}
              title={card.title}
              subtitle={card.subtitle}
              content={card.content}
            />
          );
        })}
      </div>
    </section>
  );
}
