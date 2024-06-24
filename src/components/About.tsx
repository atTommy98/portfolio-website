import ExperienceCard from "./ExperienceCard";
import { Cards } from "../data";

export default function About() {
  return (
    <div className="w-full h-fit flex justify-center">
      <div className="w-[80%] max-w-[800px] py-12 px-6">
        <h4 className="">👋 Welcome! I&apos;m Tommy. I&apos;m a...</h4>
        <h2 className="leading-snug font-bold">
          Full stack web developer with 3 years experience delivering a variety
          of web app experiences
        </h2>
        <h6 className="text-sm grey-text">React, Node</h6>
        <h2></h2>
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
