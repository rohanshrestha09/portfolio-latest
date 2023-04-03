import { Space_Grotesk } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';
import { loadFull } from 'tsparticles';
import type { Engine, ISourceOptions } from 'tsparticles-engine';
import Particle from 'react-tsparticles';
import particlesConfig from 'particlesjs.config.json';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

interface Props {
   Navbar: {
      className?: string;
      items: { name: string; target: string }[];
   };
   Content: {
      id?: string;
      className?: string;
      children: React.ReactNode;
   };
   Particles: {
      children: React.ReactNode;
   };
   Layout: {
      className?: string;
      children: React.ReactNode;
   };
}

function Navbar({ className, items }: Props['Navbar']) {
   const [path, setPath] = useState('about');

   const navbarRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      let lastScroll = 0;

      const MAX_SCROLL = 984;

      window.onscroll = function () {
         if (!navbarRef.current) return;

         const currentScroll =
            document.documentElement.scrollTop || document.body.scrollTop;

         if (currentScroll > 100)
            navbarRef.current?.classList.add('bg-[rgba(27,27,27,0.1)]');
         else navbarRef.current?.classList.remove('bg-[rgba(27,27,27,0.1)]');

         if (currentScroll > 0 && lastScroll <= currentScroll) {
            lastScroll = currentScroll;

            if (currentScroll < MAX_SCROLL)
               navbarRef.current.style.right = currentScroll / 28.11 + '%';
            else navbarRef.current.style.right = '34.9342%';
         } else {
            lastScroll = currentScroll;

            if (currentScroll < MAX_SCROLL)
               navbarRef.current.style.right = currentScroll / 28.11 + '%';
         }

         switch (true) {
            case currentScroll >= 0 && currentScroll <= MAX_SCROLL:
               setPath('about');
               break;

            case currentScroll > MAX_SCROLL && currentScroll <= MAX_SCROLL * 2:
               setPath('tools');
               break;

            case currentScroll > MAX_SCROLL * 2 &&
               currentScroll <= MAX_SCROLL * 3:
               setPath('projects');
               break;

            case currentScroll > MAX_SCROLL * 3 &&
               currentScroll <= MAX_SCROLL * 4:
               setPath('contact');
               break;
         }
      };
   }, []);

   return (
      <nav
         className={`navbar fixed right-0 top-[35px] z-50 mx-[2.45%] flex gap-[40px] rounded-full px-[35px] py-[15px] ${
            className ?? ''
         }`}
         ref={navbarRef}
      >
         {items.map(({ name, target }) => (
            <a
               key={name}
               className={`relative cursor-pointer pb-[4px] text-xl font-semibold after:absolute after:bottom-0 after:right-0 after:h-[2.5px] after:bg-white after:transition-all after:duration-200 after:content-[""] hover:after:w-3/4 ${
                  path === target ? 'after:w-3/4' : 'after:w-0'
               }`}
               href={`#${target}`}
            >
               {name}
            </a>
         ))}
      </nav>
   );
}

function Content({ className, children, ...props }: Props['Content']) {
   return (
      <section
         className={`min-h-screen py-[50px] ${className ?? ''}`}
         {...props}
      >
         {children}
      </section>
   );
}

function Particles({ children }: Props['Particles']) {
   const particlesInit = async (main: Engine) => {
      await loadFull(main);
   };

   return (
      <main
         className={`${spaceGrotesk.className} relative min-h-screen bg-[#000101]`}
      >
         <Particle
            id='tsparticles'
            className='h-screen w-full'
            init={particlesInit}
            options={
               {
                  ...particlesConfig,
                  fullScreen: {
                     enable: false,
                  },
               } as ISourceOptions
            }
         />

         {children}
      </main>
   );
}

export default function Layout({ className, children }: Props['Layout']) {
   return (
      <main
         className={`${
            spaceGrotesk.className
         } bg-[#000101] px-[250px] text-white ${className ?? ''}`}
      >
         {children}
      </main>
   );
}

Layout.Navbar = Navbar;

Layout.Content = Content;

Layout.Particles = Particles;
