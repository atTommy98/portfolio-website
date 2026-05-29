import ExperienceTimeline from "../ExperienceTimeline";
import Reveal from "../Reveal";

export default function Experience({ id }: SectionProps) {
  return (
    <section data-section className="mb-8" id={id}>
      <Reveal>
        <h2>Experience</h2>
      </Reveal>
      <ExperienceTimeline />
    </section>
  );
}
