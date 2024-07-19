import { Space_Grotesk } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import Particle from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine, ISourceOptions } from 'tsparticles-engine';
import particlesConfig from 'particlesjs.config.json';

const spaceGrotesk = Space_Grotesk({
   subsets: ['latin'],
   weight: ['300', '400', '500', '600', '700'],
});

interface Props {
   Navbar: {
      className?: string;
      items: { name: string; target: string }[];
   };
   Header: {
      color?: string;
      centered?: boolean;
      children: React.ReactNode;
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

      const RIGHT = 34.9342;

      const DIV = MAX_SCROLL / RIGHT;

      const handleScroll = () => {
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

         if (!isMobile) {
            if (currentScroll > 0 && lastScroll <= currentScroll) {
               lastScroll = currentScroll;

               if (currentScroll < MAX_SCROLL)
                  navbarRef.current.style.right = currentScroll / DIV + '%';
               else navbarRef.current.style.right = `${RIGHT}%`;
            } else {
               lastScroll = currentScroll;

               if (currentScroll < MAX_SCROLL)
                  navbarRef.current.style.right = currentScroll / DIV + '%';
            }
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   useEffect(() => {
      const handleScroll = () => {
         const scrollPosition = window.scrollY + 5;

         const sections = document.querySelectorAll('section');

         sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (
               scrollPosition >= sectionTop &&
               scrollPosition < sectionTop + sectionHeight
            )
               setPath(section.id);
         });
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <nav
         ref={navbarRef}
         className={classNames(
            'sticky top-[85px] z-50 mx-auto my-0 flex w-fit gap-[90px] rounded-full bg-transparent px-[65px] py-[45px]',
            'sm:fixed sm:right-0 sm:top-[35px] sm:mx-[2.45%] sm:gap-[40px] sm:px-[35px] sm:py-[15px]',
            className
         )}
      >
         {items.map(({ name, target }) => (
            <a
               key={name}
               className={classNames(
                  'relative cursor-pointer pb-[24px] text-6xl font-semibold',
                  'after:absolute after:bottom-0 after:right-0 after:h-[10px] after:bg-white after:transition-all after:duration-200 after:content-[""]',
                  'sm:pb-[4px] sm:text-xl sm:after:h-[2.5px]',
                  'hover:after:w-3/4',
                  path === target ? 'after:w-3/4' : 'after:w-0'
               )}
               href={`#${target}`}
            >
               {name}
            </a>
         ))}
      </nav>
   );
}

function Header({ color, centered = true, children }: Props['Header']) {
   return (
      <p
         className={classNames(
            'text-10xl font-semibold',
            'sm:text-5xl',
            color && `text-[${color}]`,
            centered && 'text-center'
         )}
      >
         {children}
      </p>
   );
}

function SubHeader({ color, children, ...props }: Props['Header']) {
   return (
      <p
         {...props}
         className={classNames(
            'text-7xl text-[#D5EDE5]',
            'sm:text-2xl',
            color && `text-[${color}]`
         )}
      >
         {children}
      </p>
   );
}

function Content({ className, children, ...props }: Props['Content']) {
   return (
      <section
         className={classNames(
            'min-h-screen px-[100px] pb-[30px] pt-[400px]',
            'sm:px-[250px] sm:pb-[10px] sm:pt-[180px]',
            className
         )}
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
            className='hidden h-screen w-full sm:block'
            id='tsparticles'
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

Layout.Header = Header;

Layout.SubHeader = SubHeader;

Layout.Content = Content;

Layout.Particles = Particles;
