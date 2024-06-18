import AboutCard from "./AboutCard";

export default function About() {
  return (
    <div className="w-full h-fit flex justify-center">
      <div className="w-[80%] max-w-[800px] py-12 px-6">
        <h4 className="">👋 Welcome! I&apos;m Tommy</h4>
        <h2 className="leading-snug font-bold">
          Full stack web developer with 3 years experience delivering a variety
          of web app experiences
        </h2>
        <h6 className="text-sm text-neutral-400">React, Node</h6>
        <div className="mt-12">
          <AboutCard />
          <AboutCard />
          <AboutCard />
        </div>
      </div>
    </div>
  );
}
