import { Space_Grotesk } from 'next/font/google';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

interface Props {
   navbar: {
      className?: string;
      items: { name: string; target: string }[];
   };
   content: {
      id?: string;
      className?: string;
      children: React.ReactNode;
   };
   layout: {
      className?: string;
      children: React.ReactNode;
   };
}

function Navbar({ className, items }: Props['navbar']) {
   const { asPath } = useRouter();

   const [path, setPath] = useState('');

   const navbarRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      setPath(asPath === '/' ? 'about' : asPath.replaceAll('/#', ''));
   }, [asPath]);

   useEffect(() => {
      let lastScroll = 0;

      let MAX_SCROLL = 984;

      window.onscroll = function () {
         let currentScroll =
            document.documentElement.scrollTop || document.body.scrollTop;

         if (currentScroll > 100)
            navbarRef.current?.classList.add('bg-[rgba(27,27,27,0.1)]');
         else navbarRef.current?.classList.remove('bg-[rgba(27,27,27,0.1)]');

         if (currentScroll > 0 && lastScroll <= currentScroll) {
            lastScroll = currentScroll;

            if (navbarRef.current && currentScroll < MAX_SCROLL)
               navbarRef.current.style.right = currentScroll / 28.11 + '%';
         } else {
            lastScroll = currentScroll;

            if (navbarRef.current && currentScroll < MAX_SCROLL)
               navbarRef.current.style.right = currentScroll / 28.11 + '%';
         }
      };
   }, []);

   return (
      <nav
         className={`navbar fixed right-0 top-[35px] mx-[2.45%] flex gap-[40px] rounded-full px-[35px] py-[15px] ${
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
               onClick={() => setPath(target)}
            >
               {name}
            </a>
         ))}
      </nav>
   );
}

function Content({ className, children, ...props }: Props['content']) {
   return (
      <section
         className={`min-h-screen py-[50px] ${className ?? ''}`}
         {...props}
      >
         {children}
      </section>
   );
}

export default function Layout({ className, children }: Props['layout']) {
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
