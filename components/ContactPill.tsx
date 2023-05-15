import { CSSProperties } from 'react';
import { IconType } from 'react-icons';

interface Props {
   style: CSSProperties;
   title: string;
   link: string;
   description: string;
   Icon: IconType;
}

export default function ContactPill({
   style,
   title,
   link,
   description,
   Icon,
}: Props) {
   return (
      <div
         data-aos='fade-down'
         data-aos-duration='700'
         className='flex items-center gap-[25px] rounded-full bg-[#2C483E] px-[25px] py-[15px]'
         style={style}
      >
         <Icon className='text-9xl text-[#D5EDE5] sm:text-5xl' />
         <div className='flex flex-col gap-[2px]'>
            <p className='text-6xl text-[#D5EDE5] sm:text-2xl'>{title}</p>
            <a
               href={link}
               target='_blank'
               className='text-5xl font-medium text-[#8FDCC2] transition-all hover:text-[#D5EDE5] sm:text-xl'
            >
               {description}
            </a>
         </div>
      </div>
   );
}
