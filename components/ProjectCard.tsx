import Image, { StaticImageData } from 'next/image';

import { SiGithub } from 'react-icons/si';
import { AiOutlineLink } from 'react-icons/ai';

import { IconType } from 'react-icons';

interface Props {
   index: number;
   name: string;
   description: string;
   github: string;
   link: string;
   images: StaticImageData[];
   icons: IconType[];
}

export default function ProjectCard({
   index,
   name,
   description,
   github,
   link,
   images,
   icons,
}: Props) {
   return (
      <div
         data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
         data-aos-duration='700'
         className='flex h-fit w-full flex-col gap-[90px] sm:justify-between sm:gap-[50px] sm:odd:flex-row sm:even:flex-row-reverse'
      >
         <div className='h-[920px] w-full overflow-hidden sm:h-[450px] sm:w-3/5'>
            <Image
               className='h-auto w-full -translate-y-0 cursor-pointer rounded-md object-cover hover:-translate-y-[83%]'
               src={images[0]}
               alt='blogsansar'
               style={{
                  transition: 'transform 10s ease-in-out 0s',
               }}
            />
         </div>

         <div className='relative flex flex-1 flex-col gap-[60px] sm:gap-[20px]'>
            <p className='text-8xl font-semibold text-[#8FDCC2] sm:text-4xl'>
               {name}
            </p>

            <p className='text-6xl/[96px] text-[#D5EDE5] sm:text-2xl'>
               {description}
            </p>

            <a
               className='flex cursor-pointer items-center gap-[10px] text-5xl font-medium text-[#8FDCC2] transition-all hover:text-[#D5EDE5] sm:text-xl'
               href={github}
               target='_blank'
            >
               Check Repository <SiGithub className='text-5xl sm:text-xl' />
            </a>

            <a
               className='flex cursor-pointer items-center gap-[10px] text-5xl font-medium text-[#8FDCC2] transition-all hover:text-[#D5EDE5] sm:text-xl'
               href={link}
               target='_blank'
            >
               View Live <AiOutlineLink className='text-5xl sm:text-xl' />
            </a>

            <div className='bottom-0 flex gap-[40px] sm:absolute sm:gap-[20px]'>
               {icons.map((Icon: IconType, index) => (
                  <Icon
                     key={index}
                     className='text-6xl text-[#D5EDE5] sm:text-2xl'
                     title={Icon.name.slice(2)}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}
