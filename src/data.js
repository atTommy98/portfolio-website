import SCHUHXNIKE from "./assets/SchuhXNike.png";
import PORTFOLIO from "./assets/Portfolio.png";
import CASECOBRA from "./assets/CaseCobra.png";

const ExperienceCards = [
  {
    id: 1,
    title: "Software Engineer · Alt Design",
    subtitle: "July 2024 - Present",
    content: [
      "Primary engineer behind P3RFORM, a revenue-generating multi-platform product (web portal, mobile app and API) used by health and performance coaches to manage clients, training programmes and performance data.",
      "Own the full delivery lifecycle including feature development, infrastructure, deployments, DevOps and direct client liaison.",
      "Authored architecture and technical design documents addressing scalability, performance and maintainability, proactively advising on improvements beyond the initial brief.",
      "Also contribute to agency work, building brochure-style sites with Statamic and Laravel, and recently leveraging AI-assisted workflows across projects.",
    ],
  },
  {
    id: 2,
    title: "Career Break",
    subtitle: "March 2024 - June 2024",
    content: [
      "Took time out to travel independently through Southeast Asia and Japan.",
    ],
  },
  {
    id: 3,
    title: "Software Engineer · Gravit8 Software",
    subtitle: "February 2022 - March 2024",
    content: [
      "Delivered 30+ production applications for clients including Dyson, Formula 1, Nike, LEGO and Hasbro.",
      "Regularly worked as the sole developer, owning architecture decisions, tech stack selection, development, deployment and maintenance.",
      "Built complex cross-platform applications with custom APIs, dedicated databases and responsive UIs, primarily using React, Node.js and AWS.",
      "Reached for specialist tools such as Electron, Socket.io, Three.js and ML5 where unique design criteria demanded it, and refactored legacy apps using unfamiliar tech like Docker and DeepAR.",
    ],
  },
  {
    id: 4,
    title: "Junior Developer · Word360",
    subtitle: "April 2021 - October 2021",
    content: [
      "Joined a fast-paced team of 4 aiming for software release within 6 months, helping develop a high-traffic platform with microservice architecture and CI/CD pipelines.",
      "Upskilled in Angular, NestJS and MongoDB, and fixed critical post-launch issues around database integrity, server overload and front-end bugs.",
    ],
  },
  {
    id: 5,
    title: "Bootcamper · The School of Code",
    subtitle: "September 2020 - January 2021",
    content: [
      "An intense 16-week programming bootcamp from zero to hero, with a focus on teamwork, programming skills and confidence.",
      "Built a final group project solving a real business problem using MongoDB, React, Netlify, Auth0 and a custom Express.js API.",
    ],
  },
];

const ProjectCards = [
  {
    id: 4,
    title: 'P3RFORM',
    content: `A health and wellness platform that enables coaches to manage their clients fitness programmes while providing clients with an application to collect, track and visualise their health data`,
    tags: ['Next JS', 'React', 'React Native', 'AWS', 'Terraform', 'Express JS', 'Tailwind CSS'],
    image: '',
    link: 'https://p3rform.co.uk/',
    colour: '#2EE591'
  },
  {
    id: 5,
    title: 'SELECTA',
    content: `A passion project designed to help local DJs and music event promoters find each other and reduce the friction for music event networking and booking processes`,
    tags: ['Next JS', 'React', 'Tailwind CSS'],
    image: '',
    link: '',
    colour: '#2EE591'
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
