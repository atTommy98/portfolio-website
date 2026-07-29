import AboutTabs, { AboutTab } from "../AboutTabs";
import LastShipped, { getLastPush } from "../LastShipped";
import OriginRoute from "../OriginRoute";
import Reveal from "../Reveal";
import SlotAnimation from "../SlotAnimation";
import Tag from "../Tag";
import { technologies } from "../../constants/technologies";

/* roll marks the tiles whose figures are the point. The other two contain
   digits too (F1, P3RFORM), and those are names rather than numbers. */
const facts = [
  { value: "4+ yrs", label: "commercial experience", roll: true },
  { value: "30+", label: "production apps shipped", roll: true },
  {
    value: "Web + Mobile + Desktop",
    label: "platforms owned end to end",
    roll: false,
  },
  {
    value: "Dyson, F1, Nike, LEGO, P3RFORM",
    label: "brands built for",
    roll: false,
  },
];

export default async function About({ id }: SectionProps) {
  const lastPush = await getLastPush();

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
          infrastructure, deployments and client conversations mostly sit with
          me. I also dabble in Laravel & Statamic projects such as <a href="https://www.bandk.co.uk/" className='text-black hover:text-blue-500'>Bowmer + Kirkland</a>.
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
          Away from the keyboard you&apos;ll usually find me in the{" "}
          <span className="text-blue-500">gym</span>,
          <span className="text-blue-500"> producing music</span>, deep in the{" "}
          <span className="text-blue-500">competitive gaming scene</span> or off
          <span className="text-blue-500"> travelling</span> having most
          recently having backpacked through Southeast Asia and Japan.
        </p>
      ),
    },
  ];

  return (
    <section data-section className="mb-4" id={id}>
      <Reveal>
        <h2>About Me</h2>
      </Reveal>

      <Reveal delay={100}>
        <p className="mb-6 text-lg font-bold leading-snug md:text-xl lg:text-2xl">
          I ship full-stack production apps on the web, mobile{" "}
          <span className="text-blue-500 uppercase">and</span> desktop.
        </p>
      </Reveal>

      <Reveal delay={200}>
        <ul className="mb-8 grid grid-cols-2 gap-2 md:grid-cols-4 overflow-clip">
          {facts.map((fact) => (
            <li
              key={fact.label}
              className="rounded-xl border border-zinc-200 bg-white/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/40"
            >
              <p className="text-sm font-bold md:text-base lg:text-lg">
                {fact.roll ? <SlotAnimation value={fact.value} /> : fact.value}
              </p>
              <p className="subtext mt-2 leading-normal text-blue-500 dark:text-blue-500">
                {fact.label}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={250}>
        <p className="subtext mb-3 uppercase tracking-wide">Technologies</p>
        <div className="mb-8 flex flex-col gap-3">
          {technologies.map(({ group, items }) => (
            <div key={group} className="md:flex md:items-start md:gap-4">
              <p className="subtext mb-2 font-semibold leading-normal md:mb-0 md:w-36 md:shrink-0 md:pt-1">
                {group}
              </p>
              <ul className="flex flex-wrap gap-2">
                {items.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={300}>
        <AboutTabs tabs={tabs} trailing={<LastShipped lastPush={lastPush} />} />
      </Reveal>
    </section>
  );
}
