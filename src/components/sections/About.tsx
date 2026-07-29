import Reveal from "../Reveal";

/* Scan-level facts — the bit a recruiter actually reads before deciding
   whether to scroll. Every figure is drawn from ExperienceCards in data.js. */
const facts = [
  { value: "4+ yrs", label: "commercial experience" },
  { value: "30+", label: "production apps shipped" },
  { value: "Web · Mobile · Desktop", label: "platforms owned end to end" },
  { value: "Dyson · F1 · Nike · LEGO", label: "brands built for" },
];

export default function About({ id }: SectionProps) {
  return (
    <section data-section className="mb-8" id={id}>
      <Reveal>
        <h2>About Me</h2>
      </Reveal>

      <Reveal delay={100}>
        <p className="mb-6 max-w-2xl text-lg font-bold leading-snug md:text-xl lg:text-2xl">
          I ship production apps end to end — web, mobile and desktop — for
          teams that need one engineer to{" "}
          <span className="text-blue-500">own the whole thing</span>.
        </p>
      </Reveal>

      <Reveal delay={200}>
        <ul className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {facts.map((fact) => (
            <li
              key={fact.label}
              className="rounded-xl border border-zinc-200 bg-white/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
              <p className="text-sm font-bold md:text-base lg:text-lg">
                {fact.value}
              </p>
              <p className="subtext mt-2 leading-normal">{fact.label}</p>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={300}>
        <p className="maintext mb-4 text-xs md:text-sm lg:text-base">
          These days I&apos;m at <a href="https://alt-design.net">Alt Design</a>,
          where I&apos;m the primary engineer behind P3RFORM: a multi-platform
          product (web portal, mobile app and API) that health and performance
          coaches use to manage their clients and training data. Architecture,
          infrastructure, deployments and client conversations all sit with me.
        </p>
      </Reveal>

      <Reveal delay={400}>
        <p className="maintext mb-4 text-xs md:text-sm lg:text-base">
          My route into tech was a slightly unconventional one. Back in 2020 I
          graduated from Nottingham Trent University with a degree in Chemistry,
          and after a dissertation on using programming for chemical analysis I
          caught the bug and joined{" "}
          <a href="https://schoolofcode.co.uk/">The School of Code</a> to make
          the switch for good. A few years later and I&apos;m still loving
          building full stack applications, both in industry and for fun.
        </p>
      </Reveal>

      <Reveal delay={500}>
        <p className="maintext mb-6 text-xs md:text-sm lg:text-base">
          When I&apos;m not at the keyboard you&apos;ll usually find me in the
          gym, producing music, deep in the competitive gaming scene or off
          travelling, most recently having backpacked through Southeast Asia and
          Japan.
        </p>
      </Reveal>

      <Reveal delay={600}>
        <p className="subtext leading-normal">
          <a href="#Projects">See what I&apos;ve built</a> or{" "}
          <a href="mailto:tommy_holt@icloud.com">get in touch</a>.
        </p>
      </Reveal>
    </section>
  );
}
