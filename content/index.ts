import {
   SiExpress,
   SiFigma,
   SiFirebase,
   SiGithub,
   SiGmail,
   SiJquery,
   SiLinkedin,
   SiMongodb,
   SiMysql,
   SiNestjs,
   SiNextdotjs,
   SiNodedotjs,
   SiReact,
   SiRedux,
   SiTailwindcss,
   SiTypescript,
} from 'react-icons/si';

import { FaNode } from 'react-icons/fa';

import { TbBrandGolang } from 'react-icons/tb';

import BlogSansarImage from 'public/images/blogsansar.png';
import PatraImage from 'public/images/patra.png';
import BlogImage from 'public/images/blog.png';
import InstagramImage from 'public/images/insta.png';
import DiscordImage from 'public/images/discord.png';
import PortfolioImage from 'public/images/portfolio.png';

export const tools = [
   {
      Icon: SiTailwindcss,
      name: 'Tailwindcss',
      link: 'https://tailwindcss.com/',
   },
   {
      Icon: SiReact,
      name: 'ReactJS',
      link: 'https://react.dev/',
   },
   {
      Icon: SiNextdotjs,
      name: 'NextJS',
      link: 'https://nextjs.org/',
   },
   {
      Icon: SiRedux,
      name: 'Redux',
      link: 'https://redux.js.org/',
   },
   {
      Icon: SiTypescript,
      name: 'TypeScript',
      link: 'https://www.typescriptlang.org/',
   },
   {
      Icon: SiNodedotjs,
      name: 'NodeJS',
      link: 'https://nodejs.org/en',
   },
   {
      Icon: TbBrandGolang,
      name: 'Go',
      link: 'https://go.dev/',
   },
   {
      Icon: SiExpress,
      name: 'ExpressJS',
      link: 'https://expressjs.com/',
   },
   {
      Icon: SiNestjs,
      name: 'NestJS',
      link: 'https://nestjs.com/',
   },
   {
      Icon: SiMysql,
      name: 'MySQL',
      link: 'https://www.mysql.com/',
   },
   {
      Icon: SiMongodb,
      name: 'Mongodb',
      link: 'https://www.mongodb.com/',
   },
   {
      Icon: SiFirebase,
      name: 'Firebase',
      link: 'https://firebase.google.com/',
   },
];

export const projects = [
   {
      key: 'blogsansar',
      name: 'BlogSansar',
      description:
         'BlogSansar is a web platform that allows users to write their own blogs and easily share them with others.',
      link: 'https://blogsansar.live',
      github: 'https://github.com/rohanshrestha09/blog-express',
      images: [BlogSansarImage],
      icons: [
         SiMongodb,
         SiNextdotjs,
         SiRedux,
         SiTailwindcss,
         FaNode,
         SiExpress,
         SiFirebase,
         SiTypescript,
      ],
   },
   {
      key: 'patra',
      name: 'Patra',
      description:
         'A web application that enables instant messaging, allowing users to send and receive messages in real time.',
      link: 'https://patra.azurewebsites.net/',
      github: 'https://github.com/rohanshrestha09/patra',
      images: [PatraImage],
      icons: [
         SiMongodb,
         SiReact,
         SiTailwindcss,
         FaNode,
         SiExpress,
         SiTypescript,
      ],
   },
   {
      key: 'blogsansar-v1',
      name: 'BlogSansar v1',
      description: `A site that lets you read and create your own blogs.`,
      link: 'https://blog-nest.vercel.app/',
      github: 'https://github.com/rohanshrestha09/blog-v1',
      images: [BlogImage],
      icons: [
         SiMongodb,
         SiReact,
         SiTailwindcss,
         FaNode,
         SiNestjs,
         SiTypescript,
      ],
   },
   {
      key: 'instagram',
      name: 'Instagram Clone',
      description:
         'Responsive Instagram Clone made with Next, TypeScript, TailwindCSS',
      link: 'https://igt.vercel.app/',
      github: 'https://github.com/rohanshrestha09/instagram-next',
      images: [InstagramImage],
      icons: [SiNextdotjs, SiTailwindcss, SiTypescript],
   },
   {
      key: 'discord',
      name: 'Discord Clone',
      description: 'Discord Clone done with Figma, TailwindCSS and Jquery',
      github: 'https://github.com/rohanshrestha09/discord-jquery',
      link: 'https://discordcl.vercel.app/',
      images: [DiscordImage],
      icons: [SiFigma, SiTailwindcss, SiJquery],
   },
   {
      key: 'portfolio',
      name: 'Portfolio Website',
      description: 'My own portfolio website with Next, daisyui, & TailwindCSS',
      github: 'https://github.com/rohanshrestha09/portfolio-v2',
      link: 'https://rohanshrestha.vercel.app/',
      images: [PortfolioImage],
      icons: [SiNextdotjs, SiTailwindcss, SiTypescript],
   },
];

export const contacts = [
   {
      title: 'Gmail',
      link: 'mailto:rohanshrestha.dev@gmail.com',
      description: 'rohanshrestha.dev@gmail.com',
      Icon: SiGmail,
   },
   {
      title: 'Linkedin',
      link: 'https://www.linkedin.com/in/rohan-shrestha-9b5580232',
      description: 'Rohan Shrestha',
      Icon: SiLinkedin,
   },
   {
      title: 'Github',
      link: 'https://www.github.com/rohanshrestha09',
      description: 'rohanshrestha09',
      Icon: SiGithub,
   },
];

export const workExperiences = [
   {
      key: 'dallotech',
      description:
         'In my current role at Dallotech, I work as a full-time frontend developer. My responsibilities include developing interactive user interfaces and integrating complex functionality. I utilize a combination of technologies such as Next.js, Tailwind CSS, Ant Design, and Redux.',
      endDate: 'Present',
      link: 'https://dallotech.com',
      startDate: 'Sept 2022',
      subtitle: 'Dallotech Pvt. Ltd.',
      title: 'Frontend Developer',
   },
   {
      key: 'dallotech',
      description:
         'In my current job at Dallotech, I work as a backend developer. I am involved in designing the architectural pattern for the backend framework and creating backend services for our application. I use a bunch of special tools like NestJS, ExpressJS, Sequelize, and TypeORM.',
      endDate: 'Present',
      link: 'https://dallotech.com',
      startDate: 'Jun 2022',
      subtitle: 'Dallotech Pvt. Ltd.',
      title: 'Backend Developer',
   },
];

export const freelancingExperiences = [
   {
      key: 'rasan',
      description:
         'During my time as a freelance frontend developer, I developed the Rasan Admin Panel. This platform efficiently handles and organizes a large number of inventory, orders, and products. This project was built with React, Tailwind CSS, and React Query.',
      endDate: 'Sept 2022',
      link: 'https://admin.rasan.com.np',
      startDate: 'July 2022',
      subtitle: 'Rasan',
      title: 'Frontend Developer',
   },
];

export const educations = [
   {
      key: 'ncit',
      endDate: 'Present',
      startDate: 'Apr 2021',
      subtitle: 'Nepal College of Information Technology (NCIT)',
      title: 'University Level',
   },
   {
      key: 'omega',
      endDate: 'Mar 2020',
      startDate: 'June 2018',
      subtitle: "Omega Int'l College",
      title: 'High School',
   },
];
