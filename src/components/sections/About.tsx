import AboutTabs, { AboutTab } from "../AboutTabs";
import LastShipped, { getLastPush } from "../LastShipped";
import OriginRoute from "../OriginRoute";
import Reveal from "../Reveal";
import SlotText from "../SlotText";

/* Scan-level facts — the bit a recruiter actually reads before deciding
   whether to scroll. Every figure is drawn from ExperienceCards in data.js. */
const facts = [
  { value: "4+ yrs", label: "commercial experience" },
  { value: "30+", label: "production apps shipped" },
  { value: "Web · Mobile · Desktop", label: "platforms owned end to end" },
  { value: "Dyson · F1 · Nike · LEGO", label: "brands built for" },
];

export default async function About({ id }: SectionProps) {
  const lastPush = await getLastPush();

  /* One panel at a time, so the detail is available without any of it
     reading as a wall. The origin story is told by the route rather than
     repeated as prose. */
  const tabs: AboutTab[] = [
    {
      id: "now",
      label: "Now",
      content: (
        <p className="maintext text-xs md:text-sm lg:text-base">
          I&apos;m at <a href="https://alt-design.net">Alt Design</a>, where
          I&apos;m the primary engineer behind P3RFORM: a multi-platform product
          (web portal, mobile app and API) that health and performance coaches
          use to manage their clients and training data. Architecture,
          infrastructure, deployments and client conversations all sit with me.
        </p>
      ),
    },
    {
      id: "route",
      label: "Route",
      content: <OriginRoute />,
    },
    {
      id: "life",
      label: "Life",
      content: (
        <p className="maintext text-xs md:text-sm lg:text-base">
          Away from the keyboard you&apos;ll usually find me in the gym,
          producing music, deep in the competitive gaming scene or off
          travelling — most recently having backpacked through Southeast Asia
          and Japan.
        </p>
      ),
    },
  ];

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
                <SlotText value={fact.value} />
              </p>
              <p className="subtext mt-2 leading-normal text-blue-500 dark:text-blue-500">
                {fact.label}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={300}>
        <AboutTabs tabs={tabs} trailing={<LastShipped lastPush={lastPush} />} />
      </Reveal>

      <Reveal delay={400}>
        <p className="subtext leading-normal">
          <a href="#Projects">See what I&apos;ve built</a> or{" "}
          <a href="mailto:tommy_holt@icloud.com">get in touch</a>.
        </p>
      </Reveal>
    </section>
  );
}
