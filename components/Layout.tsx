import { Space_Grotesk } from 'next/font/google';
import particlesConfig from 'particlesjs.config.json';
import { useEffect, useRef, useState } from 'react';
import Particle from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine, ISourceOptions } from 'tsparticles-engine';

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

      const isMobile = document.documentElement.clientWidth < 641;

      const MAX_SCROLL = document.documentElement.clientHeight;

      const MOBILE_RIGHT = 21.3803,
         DESKTOP_RIGHT = 34.9342;

      const MOBILE_DIV = MAX_SCROLL / MOBILE_RIGHT,
         DESKTOP_DIV = MAX_SCROLL / DESKTOP_RIGHT;

      window.onscroll = function () {
         if (!navbarRef.current) return;

         const currentScroll =
            document.documentElement.scrollTop || document.body.scrollTop;

         if (currentScroll > 100)
            navbarRef.current.classList.add(
               'bg-[rgba(27,27,27,0.1)]',
               'navbar'
            );
         else
            navbarRef.current.classList.remove(
               'bg-[rgba(27,27,27,0.1)]',
               'navbar'
            );

         if (currentScroll > 0 && lastScroll <= currentScroll) {
            lastScroll = currentScroll;

            if (currentScroll < MAX_SCROLL)
               navbarRef.current.style.right =
                  currentScroll / (isMobile ? MOBILE_DIV : DESKTOP_DIV) + '%';
            else
               navbarRef.current.style.right = isMobile
                  ? `${MOBILE_RIGHT}%`
                  : `${DESKTOP_RIGHT}%`;
         } else {
            lastScroll = currentScroll;

            if (currentScroll < MAX_SCROLL)
               navbarRef.current.style.right =
                  currentScroll / (isMobile ? MOBILE_DIV : DESKTOP_DIV) + '%';
         }

         switch (true) {
            case currentScroll >= 0 && currentScroll <= MAX_SCROLL:
               setPath('about');
               break;

            case currentScroll > MAX_SCROLL && currentScroll <= MAX_SCROLL * 2:
               navbarRef.current.classList.remove('text-[#D5EDE5]');
               setPath('tools');
               break;

            case currentScroll > MAX_SCROLL * 2 &&
               currentScroll <= MAX_SCROLL * (isMobile ? 5 : 6):
               navbarRef.current.classList.add('text-[#D5EDE5]');
               setPath('projects');
               break;

            case currentScroll > MAX_SCROLL * (isMobile ? 5 : 6) &&
               currentScroll <= MAX_SCROLL * (isMobile ? 6 : 7):
               setPath('contact');
               break;
         }
      };
   }, []);

   return (
      <nav
         className={`fixed right-0 top-[55px] z-50 mx-[2.45%] flex gap-[60px] rounded-full bg-transparent px-[55px] py-[35px] sm:top-[35px] sm:gap-[40px] sm:px-[35px] sm:py-[15px] ${
            className ?? ''
         }`}
         ref={navbarRef}
      >
         {items.map(({ name, target }) => (
            <a
               key={name}
               className={`relative cursor-pointer pb-[18px] text-5xl font-semibold after:absolute after:bottom-0 after:right-0 after:h-[6px] after:bg-white after:transition-all after:duration-200 after:content-[""] hover:after:w-3/4 sm:pb-[4px] sm:text-xl sm:after:h-[2.5px] ${
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
         className={`min-h-screen px-[100px] py-[310px] sm:px-[250px] sm:py-[180px] ${
            className ?? ''
         }`}
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
      <div className={`${spaceGrotesk.className} relative min-h-screen`}>
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
      </div>
   );
}

export default function Layout({ className, children }: Props['Layout']) {
   return (
      <main
         className={`${spaceGrotesk.className} text-white ${className ?? ''}`}
      >
         {children}
      </main>
   );
}

Layout.Navbar = Navbar;

Layout.Content = Content;

Layout.Particles = Particles;
