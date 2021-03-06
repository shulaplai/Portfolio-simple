import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> ",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop   REST API using <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "A problem solver in <b>Leet Code</b> ",
  },
  
  {
    Icon: RiComputerLine,
    title: "A Learner",
    about:
      "Learn new things every day!",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  
  {
    Icon: BsCircleFill,
    name: " Python",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },

  {
    Icon: BsCircleFill,
    name: "Tailwind",
    level: "70",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Communication",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Time Management",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Critical Thinking",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Cooperation",
    level: "65",
  },
];

export const projects: IProject[] = [
  {
    name: "Next-js-blog",
    description: "This blog is developed by next-js and strapi",
    image_path: "/images/blog.png",
    deployed_url: "https://roastedtea.click/",
    github_url: "https://github.com/shulaplai/next-blog-frontend",
    category: ["react"],
    key_techs: ["React", "Next-js", "Material UI"],
  },
  {
    name: "A Detective Game",
    image_path: "/images/detective.png",
    deployed_url: "https://detective-game.netlify.app/",
    github_url: "https://github.com/shulaplai/nextjs-detective-game",
    category: ["react", "tailwind"],
    description: "This is a simple detective game",
    key_techs: ["React", "Next-js", "Tailwind"],
  },

  {
    name: "Recommend a book",
    image_path: "/images/book.png",
    deployed_url: "https://random-recommend-book.netlify.app/",
    github_url: "https://github.com/shulaplai/recommend-a-book",
    category: ["react", "tailwind"],
    description: "This will recommend a book to visitor",
    key_techs: ["React", "Material Ui"],
  },

  {
    name: "Simple portfolio",
    image_path: "/images/profoilo.png",
    deployed_url: "https://2021-portfolio-simple.vercel.app/",
    github_url: "https://github.com/shulaplai/profoilo-simple",
    category: ["react", "tailwind"],
    description: "You are looking it!",
    key_techs: ["React", "Tailwind"],
  },
  {
    name: "Flappy bird",
    image_path: "/images/bird.png",
    deployed_url: "https://distracted-benz-16c80d.netlify.app",
    github_url: "https://github.com/shulaplai/flappy-bird",
    category: ["react"],
    description: "Flappy in very low resolution",
    key_techs: ["React"],
  },
  {
    name: "Spotify-clone",
    image_path: "/images/spotify.png",
    deployed_url: "https://profoilo-simple.vercel.app/",
    github_url: "https://github.com/shulaplai/spotify-remaster",
    category: ["react", "tailwind"],
    description: "spotify clone",
    key_techs: ["React", "Tailwind"],
  },
  // {
  //   name: "js-30",
  //   image_path: "/images/profoilo.png",
  //   deployed_url: "https://profoilo-simple.vercel.app/",
  //   github_url: "https://github.com/shulaplai/profoilo-simple",
  //   category: ["react", "tailwind"],
  //   description: "You are looking it!",
  //   key_techs: ["React", "Tailwind"],
  // },

  // {
  //   name: "Max scherzer website",
  //   image_path: "",
  //   deployed_url: "",
  //   github_url: "",
  //   category: ["react"],
  //   description: "This is for my favorite baseball player Max scherzer",
  //   key_techs: ["React"],
  // },
];
