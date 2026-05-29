import Reveal from "../Reveal";

export default function About({ id }: SectionProps) {
  return (
    <section data-section className="mb-8" id={id}>
      <Reveal>
        <h2>About Me</h2>
      </Reveal>
      <Reveal delay={100}>
        <h4 className="maintext mb-4">
          I&apos;m a software engineer with around four years of commercial
          experience building production web, desktop and mobile applications
          for global brands like Dyson, Formula 1, Nike and LEGO. These days
          I&apos;m at <a href="https://alt-design.net">Alt Design</a>, where
          I&apos;m the primary engineer behind P3RFORM which is a multi-platform
          product (web portal, mobile app and API) that health and performance
          coaches use to manage their clients and training data. I tend to own
          the whole picture, from architecture and infrastructure through to
          deployment and talking directly with clients.
        </h4>
      </Reveal>
      <Reveal delay={200}>
        <h4 className="maintext mb-4">
          My route into tech was a slightly unconventional one. Back in 2020 I
          graduated from Nottingham Trent University with a degree in Chemistry,
          and after a dissertation on using programming for chemical analysis I
          caught the bug and joined{" "}
          <a href="https://schoolofcode.co.uk/">The School of Code</a> to make
          the switch for good. A few years later and I&apos;m still loving
          building full stack applications, both in industry and for fun.
        </h4>
      </Reveal>
      <Reveal delay={300}>
        <h4 className="maintext">
          When I&apos;m not at the keyboard you&apos;ll usually find me in the
          gym, producing music, deep in the competitive gaming scene or off
          travelling, most recently having backpacked through Southeast Asia
          and Japan.
        </h4>
      </Reveal>
    </section>
  );
}
