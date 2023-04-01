import { Space_Grotesk } from 'next/font/google';
import Router from 'next/router';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

interface Props {
   navbar: {
      children: { name: string; target: string }[];
      className?: string;
   };
   content: {
      children: React.ReactNode;
      className?: string;
   };
   layout: {
      children: React.ReactNode;
   };
}

function Navbar({ className, children }: Props['navbar']) {
   const { asPath } = Router;

   return (
      <nav
         className={`fixed right-[80px] top-[50px] flex gap-[40px] ${className}`}
      >
         {children.map(({ name, target }) => (
            <p
               key={name}
               className={`relative cursor-pointer pb-[4px] text-xl font-semibold after:absolute after:bottom-0 after:right-0 after:h-[2.5px] after:bg-white after:transition-all after:duration-200 after:content-[""] hover:after:w-3/4 ${
                  asPath === `/#${target}` ? 'after:w-3/4' : 'after:w-0'
               }`}
               onClick={() => Router.push(`#${target}`)}
            >
               {name}
            </p>
         ))}
      </nav>
   );
}

function Content({ className, children }: Props['content']) {
   return <section className={`min-h-screen ${className}`}>{children}</section>;
}

export default function Layout({ children }: Props['layout']) {
   return (
      <main className={`${spaceGrotesk.className} bg-[#000101] text-white`}>
         {children}
      </main>
   );
}

Layout.Navbar = Navbar;

Layout.Content = Content;
