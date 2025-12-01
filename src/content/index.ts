import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

// import BlogSansarImage from '@/assets/images/blogsansar.png';
// import ExpennseImage from '@/assets/images/expennse.png';
// import PatraImage from '@/assets/images/patra.png';
// import BlogImage from 'public/images/blog.png';
// import InstagramImage from '@/assets/images/insta.png';
// import DiscordImage from '@/assets/images/discord.png';
// import PortfolioImage from '@/assets/images/portfolio.png';

export const tools = {
  Languages: ["TypeScript", "Go", "Python", "SQL"],
  "Agentic Development": ["Langchain", "Vercel AI SDK", "Google AI SDK", "pgvector"],
  "Frameworks & Runtimes": ["Next.js", "TanStack Start", "NestJS", "Gin", "FastAPI"],
  "Databases & Storages": ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase"],
  "Message Queues": ["RabbitMQ", "Redis Pub/Sub"],
  "DevOps & Containerization": ["Docker", "Docker Compose"],
  "Testing & Monitoring": ["New Relic", "Jest", "Playwright"],
  "Cloud Platforms": ["Vercel", "Railway", "Netlify"],
  "Development Tools": ["Git", "Linux"],
  "Logical Thinking": ["Data Structures & Algorithms", "System Design"],
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
    responsibilities: [
      "Built full-stack portfolio websites and web applications for clients from concept to deployment.",
      "Developed interactive user interfaces and integrated complex functionality using Next.js, Tailwind CSS, Ant Design, NestJS, and TypeORM.",
      "Collaborated with cross-functional teams to design and implement scalable architectural patterns.",
      "Led development efforts on various government projects, ensuring compliance and quality standards.",
      "Mentored junior developers and contributed to technical decision-making processes.",
    ],
    link: "https://dallotech.com",
    endDate: "August 2024 (2 years 3 months)",
    startDate: "June 2022",
    subtitle: "Dallotech Pvt. Ltd.",
    title: "Full Stack Developer",
  },
];

export const educations = [
  {
    title: "Nepal College of Information Technology",
    subtitle: "Bachelor of Computer Application",
    startDate: "April 2021",
    endDate: "June 2025",
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
