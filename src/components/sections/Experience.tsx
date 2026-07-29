import ExperienceTimeline from "../ExperienceTimeline";
import Reveal from "../Reveal";

// Experience section wrapping the scroll-driven timeline of past roles.
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
