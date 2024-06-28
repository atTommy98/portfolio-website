import ExperienceCard from "../ExperienceCard";
import { ExperienceCards } from "../../data";

export default function Experience({ id }: SectionProps) {
  return (
    <section data-section className="mb-8" id={id}>
      <h2 className="mb-2">My Experience</h2>
      <div className="grid auto-rows-min gap-y-4">
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
