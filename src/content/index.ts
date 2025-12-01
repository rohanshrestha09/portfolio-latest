import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

// import BlogSansarImage from '@/assets/images/blogsansar.png';
// import ExpennseImage from '@/assets/images/expennse.png';
// import PatraImage from '@/assets/images/patra.png';
// import BlogImage from 'public/images/blog.png';
// import InstagramImage from '@/assets/images/insta.png';
// import DiscordImage from '@/assets/images/discord.png';
// import PortfolioImage from '@/assets/images/portfolio.png';

export const tools = {
  languages: ["TypeScript", "Go", "Python", "SQL"],
  agents: ["Langchain", "Vercel AI SDK", "Google ADK", "pgvector"],
  frameworks: ["NextJS", "Tanstack Start", "NestJS", "Gin", "FastAPI"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase"],
  messaging: ["RabbitMQ", "Redis"],
  infrastructure: ["Docker", "Docker Compose"],
  observability: ["New Relic", "Jest", "Playwright"],
  cloud: ["Vercel", "Railway", "Netlify"],
  developerTools: ["Git", "Linux"],
  logicalThinking: ["Data Structures & Algorithms", "Systems design thinking"],
};

export const projects = [
  {
    key: "sagarmathalabs",
    name: "sagarmathalabs",
    description:
      "Sagarmatha Labs is a software development company that provides software development services to businesses.",
    link: "https://sagarmathalabs.com/",
    github: "https://github.com/rohanshrestha09/sagarmathalabs",
    tools: ["Tanstack Start", "Shadcn/UI", "Langchain", "Supabase"],
  },
  {
    key: "blogsansar",
    name: "BlogSansar",
    description:
      "BlogSansar is a web platform that allows users to write their own blogs and easily share them with others.",
    link: "https://blogsansar.vercel.app/",
    github: "https://github.com/rohanshrestha09/blog-next",
    tools: ["NextJS", "Shadcn/UI", "tRPC", "Supabase", "TypeScript"],
  },
  {
    key: "expennse",
    name: "expennse",
    description:
      "expennse is a mobile application build with expo and react native that allows user to track their expenses with attractive visualization charts.",
    link: "https://play.google.com/store/apps/details?id=com.rohanshrestha09.expennse",
    github:
      "https://www.linkedin.com/posts/rohan-shrestha-9b5580232_learningproject-appdevelopment-expennse-activity-7219586356618878977-EGrT",
    tools: ["Expo", "React Native", "Appwrite", "TypeScript"],
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
