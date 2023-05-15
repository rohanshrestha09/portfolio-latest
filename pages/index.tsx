import Head from 'next/head';

import { Fragment, useEffect } from 'react';

import { MdSend } from 'react-icons/md';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Layout from 'components/Layout';
import ContactPill from 'components/ContactPill';
import ProjectCard from 'components/ProjectCard';
import { contacts, projects, tools } from 'content';

export default function Home() {
   useEffect(() => {
      AOS.init();
   }, []);

   return (
      <Fragment>
         <Head>
            <title>Rohan Shrestha</title>
         </Head>

         <Layout>
            <Layout.Navbar
               items={[
                  { name: 'About', target: 'about' },
                  { name: 'Tools', target: 'tools' },
                  { name: 'Projects', target: 'projects' },
                  { name: 'Contact', target: 'contact' },
               ]}
            />

            <Layout.Particles>
               <Layout.Content className='absolute left-1/2 top-1/2 flex !h-fit !min-h-fit -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[80px] !p-0 sm:gap-[48px]'>
                  <p className='animated-text w-max text-11xl font-black sm:text-8xl'>
                     I&apos;m Rohan Shrestha
                  </p>
                  <p className='text-10xl font-semibold text-white sm:text-7xl'>
                     Fullstack Developer
                  </p>
                  <a className='text-6xl sm:text-xl' href='#about'>
                     <button className='rounded-xl border-[3px] border-white bg-white px-[36px] py-[30px] font-medium text-black transition-all duration-150 hover:bg-inherit hover:text-white sm:rounded-md sm:border-[1.5px] sm:px-[16px] sm:py-[10px]'>
                        whoami?
                     </button>
                  </a>
               </Layout.Content>
            </Layout.Particles>

            <Layout.Content className='flex flex-col gap-10' id='about'>
               <Layout.Header>About Me</Layout.Header>
            </Layout.Content>

            <Layout.Content
               className='flex flex-col gap-[190px] sm:gap-[120px]'
               id='tools'
            >
               <div className='flex flex-col gap-[50px] text-center sm:gap-[20px]'>
                  <Layout.Header color='#8FDCC2'>Tools</Layout.Header>

                  <Layout.SubHeader color='#D5EDE5'>
                     Some of the tools I use
                  </Layout.SubHeader>
               </div>

               <div className='grid grid-cols-3 flex-wrap justify-between gap-x-[150px] gap-y-[200px] sm:flex sm:gap-[130px]'>
                  {tools.map(({ Icon, name, link }, index) => (
                     <a
                        key={name}
                        className='flex flex-1 cursor-pointer flex-col items-center gap-[50px] transition-transform duration-300 hover:-translate-y-[6px] sm:gap-[10px]'
                        href={link}
                        target='_blank'
                     >
                        <span
                           data-aos={index >= 6 ? 'fade-down' : 'fade-up'}
                           data-aos-duration='700'
                        >
                           <Icon className='text-12xl sm:text-7xl' />
                        </span>

                        <p className='text-6xl font-medium text-[#D5EDE5] sm:text-xl'>
                           {name}
                        </p>
                     </a>
                  ))}
               </div>
            </Layout.Content>

            <Layout.Content
               className='flex flex-col gap-[190px] sm:gap-[120px]'
               id='projects'
            >
               <div className='flex flex-col gap-[50px] text-center sm:gap-[20px]'>
                  <Layout.Header color='#8FDCC2'>Projects</Layout.Header>

                  <Layout.SubHeader color='#D5EDE5'>
                     Some of the awesome projects I have worked on
                  </Layout.SubHeader>
               </div>

               {projects.map((project, index) => (
                  <ProjectCard {...project} key={project.key} index={index} />
               ))}
            </Layout.Content>

            <Layout.Content
               className='flex flex-col gap-[190px] !pb-0 sm:gap-[120px]'
               id='contact'
            >
               <div className='flex flex-col gap-[50px] text-center sm:gap-[20px]'>
                  <Layout.Header color='#8FDCC2'>Contact</Layout.Header>

                  <Layout.SubHeader color='#D5EDE5'>
                     Get in touch with me
                  </Layout.SubHeader>
               </div>

               <div className='flex flex-col gap-[80px] sm:gap-[40px]'>
                  {contacts.map((contact, index) => (
                     <div key={contact.title} className='grid grid-cols-3'>
                        <ContactPill
                           {...contact}
                           style={{ gridColumnStart: index + 1 }}
                        />
                     </div>
                  ))}

                  <div className='grid grid-cols-3'>
                     <div className='col-start-3 flex cursor-pointer items-center justify-between bg-[#2C483E] py-[100px] text-[#D5EDE5] transition-colors hover:bg-[#8FDCC2] hover:text-[hsla(158,23%,18%,1)] sm:rounded-full sm:px-[30px] sm:py-[20px]'>
                        <p className='text-6xl sm:text-2xl'>Send a message</p>

                        <MdSend className='text-7xl sm:text-3xl' />
                     </div>
                  </div>
               </div>
            </Layout.Content>
         </Layout>
      </Fragment>
   );
}
