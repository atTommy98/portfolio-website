import SCHUHXNIKE from "../assets/SchuhXNike.png";
import PORTFOLIO from "../assets/Portfolio.png";
import P3RFORM from "../assets/P3RFORM.svg";

const ProjectCards = [
  {
    id: 4,
    title: "P3RFORM",
    content: `A health and wellness platform that enables coaches to manage their clients fitness programmes while providing clients with an application to collect, track and visualise their health data`,
    tags: [
      "Next JS",
      "React",
      "React Native",
      "AWS",
      "Terraform",
      "Express JS",
      "Tailwind CSS",
    ],
    image: P3RFORM,
    fit: "contain",
    link: "https://p3rform.co.uk/",
    colour: "#2EE591",
  },
  {
    id: 5,
    title: "SELECTA (WIP)",
    content: `A passion project designed to help local DJs and music event promoters find each other and reduce the friction for music event networking and booking processes`,
    tags: ["Next JS", "React", "Tailwind CSS", "Node"],
    image: "",
    fit: "cover",
    link: "https://github.com/atTommy98/selecta-platform",
    colour: "#2EE591",
  },
  {
    id: 2,
    title: "Schuh X Nike Booth",
    content: `An interactive booth setup in the Schuh stores in London, this application was made to increase engagement and allows the user to create their own Nike shoe design and print a sticker`,
    tags: ["React", "Node", "Electron"],
    image: SCHUHXNIKE,
    fit: "cover",
    link: "https://www.gravit8.co/portfolio/schuh/",
    colour: "#a7bed3",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    content: `A portfolio website built with Next.js 14, Tailwind CSS and deployed with Vercel to showcase myself to the world!`,
    tags: ["React", "Next JS", "Tailwind CSS"],
    image: PORTFOLIO,
    fit: "cover",
    link: "https://tommyholt.dev",
    colour: "#a7bed3",
  },
];

export { ProjectCards };
