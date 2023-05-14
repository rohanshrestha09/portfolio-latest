import Layout from 'components/Layout';
import Head from 'next/head';
import Image from 'next/image';

import { Fragment } from 'react';
import { IconType } from 'react-icons';
import { AiOutlineLink } from 'react-icons/ai';
import { SiGithub } from 'react-icons/si';

import { projects, tools } from 'content';

export default function Home() {
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

               <div className='grid grid-cols-3 flex-wrap justify-between gap-[150px] sm:flex sm:gap-[130px]'>
                  {tools.map(({ Icon, name }, index) => (
                     <div
                        className='flex flex-1 flex-col items-center gap-[30px] sm:gap-[10px]'
                        key={name}
                     >
                        <span
                           data-aos={index > 7 ? 'fade-down' : 'fade-up'}
                           data-aos-duration='800'
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

               {projects.map((project) => (
                  <div
                     key={project.key}
                     className='flex h-fit w-full flex-col gap-[90px] sm:justify-between sm:gap-[50px] sm:odd:flex-row sm:even:flex-row-reverse'
                  >
                     <div className='h-[920px] w-full overflow-hidden sm:h-[450px] sm:w-3/5'>
                        <Image
                           className='h-auto w-full -translate-y-0 cursor-pointer rounded-md object-cover hover:-translate-y-[83%]'
                           src={project.images[0]}
                           alt='blogsansar'
                           style={{
                              transition: 'transform 10s ease-in-out 0s',
                           }}
                        />
                     </div>

                     <div className='relative flex flex-1 flex-col gap-[60px] sm:gap-[20px]'>
                        <p className='text-8xl font-semibold text-[#8FDCC2] sm:text-4xl'>
                           {project.name}
                        </p>

                        <p className='text-6xl/[96px] text-[#D5EDE5] sm:text-2xl'>
                           {project.description}
                        </p>

                        <a
                           className='flex cursor-pointer items-center gap-[10px] text-5xl font-medium text-[#8FDCC2] transition-all hover:text-[#D5EDE5] sm:text-xl'
                           href={project.github}
                           target='_blank'
                        >
                           Check Repository{' '}
                           <SiGithub className='text-5xl sm:text-xl' />
                        </a>

                        <a
                           className='flex cursor-pointer items-center gap-[10px] text-5xl font-medium text-[#8FDCC2] transition-all hover:text-[#D5EDE5] sm:text-xl'
                           href={project.link}
                           target='_blank'
                        >
                           View Live{' '}
                           <AiOutlineLink className='text-5xl sm:text-xl' />
                        </a>

                        <div className='bottom-0 flex gap-[40px] sm:absolute sm:gap-[20px]'>
                           {project.icons.map((Icon: IconType, index) => (
                              <Icon
                                 key={index}
                                 className='text-6xl text-[#D5EDE5] sm:text-2xl'
                                 title={Icon.name.slice(2)}
                              />
                           ))}
                        </div>
                     </div>
                  </div>
               ))}
            </Layout.Content>

            <Layout.Content
               id='contact'
               className='flex flex-col gap-10 text-[#8FDCC2]'
            >
               <Layout.Header color='#8FDCC2'>Contact</Layout.Header>
            </Layout.Content>
         </Layout>
      </Fragment>
   );
}
