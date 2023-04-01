import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from 'components/Layout';

export default function Home() {
   const router = useRouter();

   return (
      <Layout>
         <Head>
            <title>Rohan Shrestha</title>
         </Head>

         <Layout.Content className='relative flex flex-col items-center justify-center gap-[48px]'>
            <p className='animated-text w-max text-8xl font-black'>
               I&apos;m Rohan Shrestha
            </p>

            <p className='text-7xl font-semibold'>Fullstack Developer</p>

            <button
               className='rounded-md border-[1.5px] border-white bg-white px-[16px] py-[10px] text-xl font-medium text-black transition-all duration-150 hover:bg-inherit hover:text-white'
               onClick={() => router.push('/#about')}
            >
               whoami?
            </button>

            <Layout.Navbar>
               {[
                  { name: 'About', target: 'about' },
                  { name: 'Tools', target: 'tools' },
                  { name: 'Projects', target: 'projects' },
                  { name: 'Contact', target: 'contact' },
               ]}
            </Layout.Navbar>
         </Layout.Content>
      </Layout>
   );
}
