import Head from 'next/head';

import { Fragment, useEffect } from 'react';

import classNames from 'classnames';

import { MdSend } from 'react-icons/md';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Layout from 'components/Layout';
import Experience from 'components/ExperienceCard';
import ContactPill from 'components/ContactPill';
import ProjectCard from 'components/ProjectCard';
import ContactPopup from 'components/ContactPopup';
import {
   contacts,
   educations,
   freelancingExperiences,
   projects,
   tools,
   workExperiences,
} from 'content';

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
                  <p className='animated-gradient-text w-max text-11xl font-black sm:text-8xl'>
                     I&apos;m Rohan Shrestha
                  </p>
                  <p className='text-10xl font-semibold text-white sm:text-7xl'>
                     Fullstack Developer
                  </p>
                  <a
                     className='text-6xl sm:text-xl'
                     href='https://resume.io/r/MdTHcebSr'
                     target='_blank'
                  >
                     <button
                        className={classNames(
                           'rounded-xl border-[3px] border-white bg-white px-[46px] py-[40px] font-medium text-black transition-all duration-150',
                           'hover:bg-inherit hover:text-white',
                           'sm:rounded-md sm:border-[1.5px] sm:px-[16px] sm:py-[10px]'
                        )}
                     >
                        Download CV
                     </button>
                  </a>
               </Layout.Content>
            </Layout.Particles>

            <Layout.Content
               className='flex flex-col gap-[300px] sm:gap-[90px]'
               id='about'
            >
               <div
                  className='flex flex-col gap-[120px] sm:gap-[60px]'
                  data-aos='fade-up'
                  data-aos-duration='700'
               >
                  <Layout.Header centered={false}>
                     Work Experience
                  </Layout.Header>

                  <Experience>
                     {workExperiences.map((experience) => (
                        <Experience.Card {...experience} key={experience.key} />
                     ))}
                  </Experience>
               </div>

               <div
                  className='flex flex-col gap-[120px] sm:gap-[60px]'
                  data-aos='fade-up'
                  data-aos-duration='700'
               >
                  <Layout.Header centered={false}>
                     Freelancing Experience
                  </Layout.Header>

                  <Experience>
                     {freelancingExperiences.map((experience) => (
                        <Experience.Card {...experience} key={experience.key} />
                     ))}
                  </Experience>
               </div>

               <div
                  className='flex flex-col gap-[120px] sm:gap-[60px]'
                  data-aos='fade-up'
                  data-aos-duration='700'
               >
                  <Layout.Header centered={false}>Education</Layout.Header>

                  <Experience>
                     {educations.map((education) => (
                        <Experience.Card {...education} key={education.key} />
                     ))}
                  </Experience>
               </div>
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
                  {tools.map(
                     ({ Icon, name, link, visible }, index) =>
                        visible && (
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
                        )
                  )}
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
               className='relative flex flex-col gap-[190px] sm:gap-[100px]'
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
                     <div key={contact.title} className='grid-cols-3 sm:grid'>
                        <ContactPill
                           {...contact}
                           style={{ gridColumnStart: index + 1 }}
                        />
                     </div>
                  ))}
               </div>

               <ContactPopup
                  className='absolute bottom-[100px] right-[100px] z-[1000] sm:bottom-[60px] sm:right-[60px]'
                  data-aos='fade-right'
                  data-aos-duration='700'
               >
                  {(isPopupOpen, openPopup) => (
                     <button
                        className={classNames(
                           'rounded-full p-[60px] transition-colors',
                           'hover:bg-[#8FDCC2] hover:text-[#233831]',
                           'sm:p-[20px]',
                           isPopupOpen
                              ? 'bg-[#8FDCC2] text-[#233831]'
                              : 'bg-[#2C483E] text-[#D5EDE5]'
                        )}
                        onClick={openPopup}
                     >
                        <MdSend className='text-6xl sm:text-xl' />
                     </button>
                  )}
               </ContactPopup>
            </Layout.Content>
         </Layout>
      </Fragment>
   );
}
