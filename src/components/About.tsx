import ExperienceCard from "./ExperienceCard";
import { Cards } from "../data";

export default function About() {
  return (
    <div className="w-full h-fit flex justify-center">
      <div className="w-[80%] max-w-[800px] py-12 px-6">
        <h4 className="">👋 Welcome! I&apos;m Tommy. I&apos;m a...</h4>
        <h2 className="font-bold">
          Full stack web developer with 3 years experience delivering a variety
          of web app experiences
        </h2>
        <p className="subtext mb-4">React, Node, TypeScript</p>
        <h4 className="maintext mb-4">
          Back in 2020 I graduated from university with a Bachelors degree in
          Chemistry and after completing my dissertation on the use of computer
          programming in Chemical analysis, I had the luxury of embarking on my
          programming journey with the help of{" "}
          <a href="https://schoolofcode.co.uk/">The School of Code</a>.
        </h4>
        <h4 className="maintext mb-4">
          Back in 2020 I graduated from university with a Bachelors degree in
          Chemistry and after completing my dissertation on the use of computer
          programming in Chemical analysis, I had the luxury of embarking on my
          programming journey with the help of{" "}
          <a href="https://schoolofcode.co.uk/">The School of Code</a>.
        </h4>
        <h4 className="maintext ">
          Back in 2020 I graduated from university with a Bachelors degree in
          Chemistry and after completing my dissertation on the use of computer
          programming in Chemical analysis, I had the luxury of embarking on my
          programming journey with the help of{" "}
          <a href="https://schoolofcode.co.uk/">The School of Code</a>.
        </h4>
        <div className="mt-12">
          {Cards.map((card) => {
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
      </div>
    </div>
  );
}
