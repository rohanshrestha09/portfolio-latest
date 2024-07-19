import Image, { StaticImageData } from 'next/image';

import classNames from 'classnames';

import { SiGithub } from 'react-icons/si';
import { AiOutlineLink } from 'react-icons/ai';

import { IconType } from 'react-icons';
import { tools } from '@/content';

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
         className={classNames(
            'group flex h-fit w-full flex-col gap-[100px]',
            'sm:justify-between sm:gap-[50px] sm:odd:flex-row sm:even:flex-row-reverse'
         )}
         data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
         data-aos-duration='700'
      >
         <div className='h-[920px] w-full overflow-hidden sm:h-[450px] sm:w-[800px]'>
            <Image
               alt='blogsansar'
               className={classNames(
                  'h-auto w-full cursor-pointer rounded-md object-contain',
                  images[0].height > 1080 &&
                     '-translate-y-0 transition-transform delay-0 duration-[10s] ease-in-out hover:-translate-y-[85%]'
               )}
               priority={false}
               src={images[0]}
            />
         </div>

         <div className='relative flex flex-1 flex-col gap-[70px] sm:gap-[20px]'>
            <p className='text-9xl font-semibold text-[#8FDCC2] sm:text-4xl'>
               {name}
            </p>

            <p className='text-7xl/[96px] text-[#D5EDE5] sm:text-2xl'>
               {description}
            </p>

            <a
               className='flex cursor-pointer items-center gap-[20px] text-6xl font-medium text-[#8FDCC2] transition-all hover:text-[#D5EDE5] sm:gap-[10px] sm:text-xl'
               href={github}
               target='_blank'
            >
               Check Repository <SiGithub className='text-6xl sm:text-xl' />
            </a>

            <a
               className='flex cursor-pointer items-center gap-[20px] text-6xl font-medium text-[#8FDCC2] transition-all hover:text-[#D5EDE5] sm:gap-[10px] sm:text-xl'
               href={link}
               target='_blank'
            >
               View Live <AiOutlineLink className='text-6xl sm:text-xl' />
            </a>

            <div className='bottom-0 flex gap-[50px] sm:absolute sm:gap-[20px]'>
               {icons.map((Icon: IconType, index) => (
                  <a
                     key={index}
                     className='relative flex flex-col items-center'
                     href={tools.find((tool) => tool.Icon === Icon)?.link}
                     target='_blank'
                  >
                     <Icon className='peer relative text-7xl text-[#D5EDE5] transition-transform duration-300 hover:-translate-y-[6px] sm:text-2xl' />

                     <span className='invisible absolute -bottom-[45px] whitespace-nowrap rounded-full bg-black px-[10px] py-[6px] text-sm opacity-0 transition-all peer-hover:visible peer-hover:opacity-100'>
                        {tools.find((tool) => tool.Icon === Icon)?.name}
                     </span>
                  </a>
               ))}
            </div>
         </div>
      </div>
   );
}
