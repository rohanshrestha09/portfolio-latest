import Layout from 'components/Layout';
import Head from 'next/head';

import { Fragment, useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

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
            <Layout.Particles>
               <Layout.Content className='absolute left-1/2 top-1/2 flex !h-fit !min-h-fit -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[80px] !p-0 sm:gap-[48px]'>
                  <p className='animated-text w-max text-11xl font-black sm:text-8xl'>
                     I&apos;m Rohan Shrestha
                  </p>
                  <p className='text-10xl font-semibold text-white sm:text-7xl'>
                     Fullstack Developer
                  </p>
                  <a href='#about' className='text-5xl sm:text-xl'>
                     <button className='rounded-xl border-[3px] border-white bg-white px-[36px] py-[30px] font-medium text-black transition-all duration-150 hover:bg-inherit hover:text-white sm:rounded-md sm:border-[1.5px] sm:px-[16px] sm:py-[10px]'>
                        whoami?
                     </button>
                  </a>
               </Layout.Content>
            </Layout.Particles>

            <Layout.Navbar
               items={[
                  { name: 'About', target: 'about' },
                  { name: 'Tools', target: 'tools' },
                  { name: 'Projects', target: 'projects' },
                  { name: 'Contact', target: 'contact' },
               ]}
            />

            <Layout.Content id='about' className='flex flex-col gap-10'>
               <Layout.Header>About Me</Layout.Header>
            </Layout.Content>

            <Layout.Content
               id='tools'
               className='flex flex-col gap-[180px] sm:gap-[120px]'
            >
               <div className='flex flex-col gap-[40px] text-center sm:gap-[20px]'>
                  <Layout.Header color='#8FDCC2'>Tools</Layout.Header>

                  <p className='font-sans text-6xl text-[#D5EDE5] sm:text-2xl'>
                     Some of the tools I use
                  </p>
               </div>

               <div className='grid grid-cols-3 flex-wrap justify-between gap-x-[150px] gap-y-[200px] sm:flex sm:gap-[130px]'>
                  {tools.map(({ Icon, name }, index) => (
                     <div
                        className='flex flex-1 flex-col items-center gap-[30px] sm:gap-[10px]'
                        key={name}
                     >
                        <span
                           data-aos={index >= 6 ? 'fade-down' : 'fade-up'}
                           data-aos-duration='700'
                        >
                           <Icon className='text-11xl sm:text-7xl' />
                        </span>

                        <p className='text-5xl font-medium text-[#D5EDE5] sm:text-xl'>
                           {name}
                        </p>
                     </div>
                  ))}
               </div>
            </Layout.Content>

            <Layout.Content
               id='projects'
               className='flex flex-col gap-[180px] sm:gap-[120px]'
            >
               <div className='flex flex-col gap-[40px] text-center sm:gap-[20px]'>
                  <Layout.Header color='#8FDCC2'>Projects</Layout.Header>

                  <p className='font-sans text-6xl text-[#D5EDE5] sm:text-2xl'>
                     Some of the awesome projects I have worked on
                  </p>
               </div>

               {projects.map((project, index) => (
                  <ProjectCard {...project} key={project.key} index={index} />
               ))}
            </Layout.Content>

            <Layout.Content
               id='contact'
               className='flex flex-col gap-[180px] sm:gap-[120px]'
            >
               <div className='flex flex-col gap-[40px] text-center sm:gap-[20px]'>
                  <Layout.Header color='#8FDCC2'>Contact</Layout.Header>

                  <p className='font-sans text-6xl text-[#D5EDE5] sm:text-2xl'>
                     Get in touch with me
                  </p>
               </div>

               <div className='flex flex-col gap-[40px]'>
                  {contacts.map((contact, index) => (
                     <div key={contact.title} className='grid grid-cols-3'>
                        <ContactPill
                           {...contact}
                           style={{ gridColumnStart: index + 1 }}
                        />
                     </div>
                  ))}
               </div>
            </Layout.Content>
         </Layout>
      </Fragment>
   );
}
