import {
  SiAntdesign,
  SiAppwrite,
  SiExpo,
  SiExpress,
  SiFigma,
  SiGithub,
  SiGmail,
  SiJquery,
  SiLinkedin,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiPusher,
  SiReact,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { TbBrandGolang } from "react-icons/tb";

import { GrMysql } from "react-icons/gr";
// import BlogSansarImage from '@/assets/images/blogsansar.png';
// import ExpennseImage from '@/assets/images/expennse.png';
// import PatraImage from '@/assets/images/patra.png';
// import BlogImage from 'public/images/blog.png';
// import InstagramImage from '@/assets/images/insta.png';
// import DiscordImage from '@/assets/images/discord.png';
// import PortfolioImage from '@/assets/images/portfolio.png';

export const tools = [
  {
    Icon: SiExpo,
    name: "Expo",
    link: "https://expo.dev/",
    visible: false,
  },
  {
    Icon: SiAppwrite,
    name: "Appwrite",
    link: "https://appwrite.io/",
    visible: false,
  },
  {
    Icon: SiTailwindcss,
    name: "TailwindCSS",
    link: "https://tailwindcss.com/",
    visible: true,
  },
  {
    Icon: SiReact,
    name: "ReactJS",
    link: "https://react.dev/",
    visible: true,
  },
  {
    Icon: SiNextdotjs,
    name: "NextJS",
    link: "https://nextjs.org/",
    visible: true,
  },
  {
    Icon: SiExpo,
    name: "Expo",
    link: "https://expo.dev/",
    visible: true,
  },
  {
    Icon: SiRedux,
    name: "Redux",
    link: "https://redux.js.org/",
    visible: true,
  },
  {
    Icon: SiTypescript,
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
    visible: true,
  },
  {
    Icon: SiNodedotjs,
    name: "NodeJS",
    link: "https://nodejs.org/en",
    visible: true,
  },
  {
    Icon: TbBrandGolang,
    name: "Go",
    link: "https://go.dev/",
    visible: true,
  },
  {
    Icon: SiExpress,
    name: "ExpressJS",
    link: "https://expressjs.com/",
    visible: true,
  },
  {
    Icon: SiNestjs,
    name: "NestJS",
    link: "https://nestjs.com/",
    visible: true,
  },
  {
    Icon: GrMysql,
    name: "MySQL",
    link: "https://www.mysql.com/",
    visible: true,
  },
  {
    Icon: SiMongodb,
    name: "Mongodb",
    link: "https://www.mongodb.com/",
    visible: true,
  },
  {
    Icon: SiPrisma,
    name: "Prisma",
    link: "https://prisma.io/",
    visible: false,
  },
  {
    Icon: SiAntdesign,
    name: "Ant Design",
    link: "https://ant.design/",
    visible: false,
  },
  {
    Icon: SiSupabase,
    name: "Supabase",
    link: "https://supabase.com/",
    visible: false,
  },
  {
    Icon: SiPusher,
    name: "Pusher",
    link: "https://pusher.com",
    visible: false,
  },
  {
    Icon: SiFigma,
    name: "Figma",
    link: "https://figma.com",
    visible: false,
  },
  {
    Icon: SiJquery,
    name: "jQuery",
    link: "https://jquery.com",
    visible: false,
  },
];

export const projects = [
  {
    key: "sagarmathalabs",
    name: "sagarmathalabs",
    description:
      "Sagarmatha Labs is a software development company that provides software development services to businesses.",
    link: "https://sagarmathalabs.com/",
    github: "https://github.com/rohanshrestha09/sagarmathalabs",
    // images: [ExpennseImage],
    icons: [SiReact, SiTypescript],
  },
  {
    key: "expennse",
    name: "expennse",
    description:
      "expennse is a mobile application build with expo and react native that allows user to track their expenses with attractive visualization charts.",
    link: "https://play.google.com/store/apps/details?id=com.rohanshrestha09.expennse",
    github:
      "https://www.linkedin.com/posts/rohan-shrestha-9b5580232_learningproject-appdevelopment-expennse-activity-7219586356618878977-EGrT",
    // images: [ExpennseImage],
    icons: [SiExpo, SiReact, SiAppwrite, SiTypescript],
  },
  {
    key: "blogsansar",
    name: "BlogSansar",
    description:
      "BlogSansar is a web platform that allows users to write their own blogs and easily share them with others.",
    link: "https://blogsansar.vercel.app/",
    github: "https://github.com/rohanshrestha09/blog-next",
    // images: [BlogSansarImage],
    icons: [
      SiNextdotjs,
      SiAntdesign,
      SiTailwindcss,
      SiRedux,
      GrMysql,
      SiPrisma,
      SiSupabase,
      SiPusher,
      SiTypescript,
    ],
  },
];

export const contacts = [
  {
    title: "Gmail",
    link: "mailto:rohanshrestha.dev@gmail.com",
    description: "rohanshrestha.dev@gmail.com",
    Icon: SiGmail,
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/rohan-shrestha-9b5580232",
    description: "Rohan Shrestha",
    Icon: SiLinkedin,
  },
  {
    title: "Github",
    link: "https://www.github.com/rohanshrestha09",
    description: "rohanshrestha09",
    Icon: SiGithub,
  },
];

export const workExperiences = [
  {
    key: "dallotech",
    description:
      "In my current role at Dallotech, I work as a full-time frontend developer. My responsibilities include developing interactive user interfaces and integrating complex functionality. I utilize a combination of technologies such as Next.js, Tailwind CSS, Ant Design, and Redux.",
    endDate: "Present",
    link: "https://dallotech.com",
    startDate: "Sept 2022",
    subtitle: "Dallotech Pvt. Ltd.",
    title: "Frontend Developer",
  },
  {
    key: "dallotech",
    description:
      "In my current job at Dallotech, I work as a backend developer. I am involved in designing the architectural pattern for the backend framework and creating backend services for our application. I use a bunch of special tools like NestJS, ExpressJS, Sequelize, and TypeORM.",
    endDate: "Present",
    link: "https://dallotech.com",
    startDate: "Jun 2022",
    subtitle: "Dallotech Pvt. Ltd.",
    title: "Backend Developer",
  },
];

export const freelancingExperiences = [
  {
    key: "rasan",
    description:
      "During my time as a freelance frontend developer, I developed the Rasan Admin Panel. This platform efficiently handles and organizes a large number of inventory, orders, and products. This project was built with React, Tailwind CSS, and React Query.",
    endDate: "Sept 2022",
    link: "https://admin.rasan.com.np",
    startDate: "July 2022",
    subtitle: "Rasan",
    title: "Frontend Developer",
  },
];

export const educations = [
  {
    key: "ncit",
    endDate: "Present",
    startDate: "Apr 2021",
    subtitle: "Nepal College of Information Technology (NCIT)",
    title: "University Level",
  },
  {
    key: "omega",
    endDate: "Mar 2020",
    startDate: "June 2018",
    subtitle: "Omega Int'l College",
    title: "High School",
  },
];
