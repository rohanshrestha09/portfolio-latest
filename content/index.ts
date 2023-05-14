import {
   SiGithub,
   SiExpress,
   SiFirebase,
   SiMongodb,
   SiNextdotjs,
   SiRedux,
   SiTailwindcss,
   SiTypescript,
   SiReact,
   SiNestjs,
   SiFigma,
   SiJquery,
   SiNodedotjs,
   SiMysql,
   SiPrisma,
   SiDocker,
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
   { Icon: SiTailwindcss, name: 'Tailwindcss' },
   { Icon: SiReact, name: 'React' },
   { Icon: SiNextdotjs, name: 'Next' },
   { Icon: SiRedux, name: 'Redux' },
   { Icon: SiTypescript, name: 'TypeScript' },
   { Icon: SiNodedotjs, name: 'Nodejs' },
   { Icon: TbBrandGolang, name: 'Go' },
   { Icon: SiExpress, name: 'Express' },
   { Icon: SiMongodb, name: 'Mongodb' },
   { Icon: SiMysql, name: 'MySQL' },
   { Icon: SiPrisma, name: 'Prisma' },
   { Icon: SiDocker, name: 'Docker' },
];

export const projects = [
   {
      key: 'blogsansar',
      name: 'BlogSansar',
      description:
         'BlogSansar is a web platform which allows users to write their own blogs and share it with others.',
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
         'A realtime messaging web application to send and receive messages in real time.',
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
