import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import ExpennseImage from "/images/expennse.png";
import SagarmathaLabsImage from "/images/sagarmathalabs.jpeg";

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
    name: "sagarmathalabs",
    description:
      "A knowledge-base reactive agent that pairs Notebook-style RAG search with AI-generated dashboards so teams can interrogate their documents and spin up interactive visuals without writing code.",
    link: "https://sagarmathalabs.com/",
    github: "https://github.com/rohanshrestha09/sagarmathalabs",
    tools: ["Tanstack Start", "Shadcn/UI", "Langchain", "Supabase"],
    image: SagarmathaLabsImage,
  },
  {
    name: "BlogSansar",
    description:
      "BlogSansar is a web platform that allows users to write their own blogs and easily share them with others.",
    link: "https://blogsansar.vercel.app/",
    github: "https://github.com/rohanshrestha09/blog-next",
    tools: ["NextJS", "Shadcn/UI", "tRPC", "Supabase", "TypeScript"],
  },
  {
    name: "expennse",
    description:
      "expennse is a mobile application build with expo and react native that allows user to track their expenses with attractive visualization charts.",
    link: "https://play.google.com/store/apps/details?id=com.rohanshrestha09.expennse",
    github:
      "https://www.linkedin.com/posts/rohan-shrestha-9b5580232_learningproject-appdevelopment-expennse-activity-7219586356618878977-EGrT",
    tools: ["Expo", "React Native", "Appwrite", "TypeScript"],
    image: ExpennseImage,
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

const calculateExperience = (startYear: number, startMonth: number) => {
  const now = new Date();
  let years = now.getFullYear() - startYear;
  let months = now.getMonth() + 1 - startMonth;
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return `${years > 0 ? `${years} ${years > 1 ? "years" : "year"}` : ""}${
    months > 0 ? ` ${months} ${months > 1 ? "months" : "month"}` : ""
  }`;
};

export const workExperiences = [
  {
    title: "Software Engineer",
    subtitle: "PortPro",
    startDate: "August 2024",
    endDate: `Present (${calculateExperience(2024, 8)})`,
    link: "https://portpro.io",
    responsibilities: [
      "Built an EDI mapping agent that transforms complex EDI formats into PortPro’s standard JSON schema using Next.js, Vercel AI SDK, pgvector, and a Monaco-based editor.",
      "Developed complex EDI solutions handling broker tenders, including the highest revenue-generating features in the product.",
      "Involved in designing and shipping multiple agents that automate billing, tender workflows, and document validation.",
      "Worked on an Appointment System to streamline scheduling and operational coordination.",
      "Contributed to a rate engine capable of handling complex, dynamic rate calculations.",
    ],
  },
  {
    title: "Full Stack Developer",
    subtitle: "Dallotech Pvt. Ltd.",
    startDate: "June 2022",
    link: "https://dallotech.com",
    endDate: "August 2024 (2 years 3 months)",
    responsibilities: [
      "Built full-stack portfolio websites and web applications for clients from concept to deployment.",
      "Developed interactive user interfaces and integrated complex functionality using Next.js, Tailwind CSS, Ant Design, NestJS, and TypeORM.",
      "Collaborated with cross-functional teams to design and implement scalable architectural patterns.",
      "Led development efforts on various government projects, ensuring compliance and quality standards.",
      "Mentored junior developers and contributed to technical decision-making processes.",
    ],
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
