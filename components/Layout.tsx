import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

interface Props {
  content: {
    children: React.ReactNode;
    className?: string;
  };
  layout: {
    children: React.ReactNode;
  };
}

function Content({ className, children }: Props["content"]) {
  return <section className={`min-h-screen ${className}`}>{children}</section>;
}

export default function Layout({ children }: Props["layout"]) {
  return (
    <main className={`${spaceGrotesk.className} bg-[#000101] text-white`}>
      {children}
    </main>
  );
}

Layout.Content = Content;
