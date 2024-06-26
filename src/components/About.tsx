import ExperienceCard from "./ExperienceCard";
import { ExperienceCards } from "../data";

export default function About({ id }: SectionProps) {
  return (
    <section data-section className="section-layout" id={id}>
      <h4 className="">👋 Welcome! I&apos;m Tommy. I&apos;m a...</h4>
      <h2 className="font-bold">
        Full stack web developer with 3 years experience delivering a variety of
        web app experiences
      </h2>
      <p className="subtext mb-8">React, Node, TypeScript</p>
      <h4 className="maintext mb-4">
        Back in 2020 I graduated from university with a bachelors degree in
        Chemistry and after completing my dissertation on the use of computer
        programming in Chemical analysis, I had the luxury of embarking on my
        programming journey with the help of{" "}
        <a href="https://schoolofcode.co.uk/">The School of Code</a>. A few
        years later and I&apos;m still loving building full stack applications
        both in industry and for fun!
      </h4>
      <h4 className="maintext mb-4">
        After spending some time working with the amazing team at{" "}
        <a href="https://www.gravit8.co/">Gravit8 Software</a> creating
        exhibition and live event software, I&apos;m spending my free time
        improving my portfolio and delving deeper into full stack development as
        a whole.
      </h4>
      <h4 className="maintext">
        If I&apos;m not sat at the computer (programming or indulging in the
        video game competitive scene) you might find me in the gym,
        producing/playing music or sat cross-legged digging into the science and
        mathematics of how the world around us works.
      </h4>
      <div className="grid auto-rows-min gap-4 mt-8">
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
