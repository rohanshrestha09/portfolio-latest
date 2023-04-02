import Head from 'next/head';
import Layout from 'components/Layout';

export default function Home() {
   return (
      <Layout>
         <Head>
            <title>Rohan Shrestha</title>
         </Head>

         <Layout.Navbar
            items={[
               { name: 'About', target: 'about' },
               { name: 'Tools', target: 'tools' },
               { name: 'Projects', target: 'projects' },
               { name: 'Contact', target: 'contact' },
            ]}
         />

         <Layout.Content className='flex flex-col items-center justify-center gap-[48px]'>
            <p className='animated-text w-max text-8xl font-black'>
               I&apos;m Rohan Shrestha
            </p>

            <p className='text-7xl font-semibold'>Fullstack Developer</p>

            <a href='#about' className='text-xl'>
               <button className='rounded-md border-[1.5px] border-white bg-white px-[16px] py-[10px] font-medium text-black transition-all duration-150 hover:bg-inherit hover:text-white'>
                  whoami?
               </button>
            </a>
         </Layout.Content>

         <Layout.Content
            id='about'
            className='flex flex-col justify-end gap-10'
         >
            <p className='w-fit text-5xl font-semibold'>About Me</p>
         </Layout.Content>
      </Layout>
   );
}
