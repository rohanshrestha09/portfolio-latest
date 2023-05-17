import { CSSProperties } from 'react';
import classNames from 'classnames';
import { IconType } from 'react-icons';

interface Props {
   style?: CSSProperties;
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
      <a
         data-aos='fade-down'
         data-aos-duration='700'
         href={link}
         style={style}
         target='_blank'
      >
         <div
            className={classNames(
               'flex cursor-pointer flex-col items-center gap-[60px] bg-[#2C483E] py-[100px] transition-transform duration-300',
               'hover:-translate-y-[6px] hover:scale-[1.02]',
               'sm:flex-row sm:gap-[25px] sm:rounded-full sm:px-[25px] sm:py-[15px]'
            )}
         >
            <Icon className='text-10xl text-[#D5EDE5] sm:text-5xl' />
            <div className='flex flex-col items-center gap-[15px] sm:items-start sm:gap-[2px]'>
               <p className='text-7xl text-[#D5EDE5] sm:text-2xl'>{title}</p>
               <p className='text-6xl font-medium text-[#8FDCC2] sm:text-xl'>
                  {description}
               </p>
            </div>
         </div>
      </a>
   );
}
