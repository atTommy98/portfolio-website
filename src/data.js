import SCHUHXNIKE from "./assets/SchuhXNike.png";
import PORTFOLIO from "./assets/Portfolio.png";
import CASECOBRA from "./assets/CaseCobra.png";

const ExperienceCards = [
  {
    id: 1,
    title: "Junior Software Engineer · Gravit8 Software",
    subtitle: "February, 2022 - March, 2024",
    content: `Developed, deployed and maintained (Sometimes single handedly) over 30 applications for clients such as Dyson, Formula 1, Hasbro, Nike and LEGO. Some of the applications were complex builds requiring custom APIs, dedicated databases and robust user interfaces with responsive design, while others were simple React applications designed to display basic touch content on a screen of defined dimensions. Projects tended to utilise React, Node and AWS, but some required specific technologies such as Electron, ML5, Socket.io or ThreeJS to match unique design criteria.`,
  },
  {
    id: 2,
    title: "Junior Developer · Word360",
    subtitle: "April, 2021 - October, 2021",
    content: `Joined a team of 4 moving at a fast pace ready for software release within 6 months. Managed and developed a high traffic software platform with microservice architecture while upskilling in new tecnhologies (Angular, NestJS and MongoDB). Assisted in fixing critical issues post-launch such as database typing, server overload and front-end visual bugs.`,
  },
  {
    id: 3,
    title: "Bootcamper · The School of Code",
    subtitle: "September, 2020 - January, 2021",
    content: `An intense 16-week programming boot-camp from zero to hero. An exciting opportunity to begin my journey into technology. With a particular focus on teamwork, programming skills and confidence, SoC provided all the skills necessary to begin work in the technology industry.`,
  },
];

const ProjectCards = [
  {
    id: 1,
    title: "CaseCobra Clone (WIP)",
    content: `A clone of the 'CaseCobra' ecommerce site. Includes auth, file uploads, secure payments, admin priveleges and a clean, modern UI.`,
    tags: ["React", "Next JS", "Tailwind CSS", "Postgres"],
    image: CASECOBRA,
    link: "https://github.com/atTommy98/casecobra-clone",
    colour: "#a7bed3",
  },
  {
    id: 2,
    title: "Schuh X Nike Booth",
    content: `An interactive booth setup in the Schuh stores in London, this application was made to increase engagement and allows the user to create their own Nike shoe design and print a sticker`,
    tags: ["React", "Node", "Electron"],
    image: SCHUHXNIKE,
    link: "https://www.gravit8.co/portfolio/schuh/",
    colour: "#a7bed3",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    content: `A portfolio website built with Next.js 14, Tailwind CSS and deployed with Vercel to showcase myself to the world!`,
    tags: ["React", "Next JS", "Tailwind CSS"],
    image: PORTFOLIO,
    link: "https://tommyholt.dev",
    colour: "#a7bed3",
  },
];

export { ExperienceCards, ProjectCards };
