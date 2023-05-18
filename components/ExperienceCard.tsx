import classNames from 'classnames';
import { BsArrowRightShort } from 'react-icons/bs';

interface Props {
   startDate: string;
   endDate: string;
   title: string;
   subtitle: string;
   description?: string;
   link?: string;
}

export default function Experience({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <ol className='relative border-l-[6px] border-[#8FDCC2] sm:border-l'>
         {children}
      </ol>
   );
}

function Card({
   startDate,
   endDate,
   title,
   subtitle,
   description,
   link,
}: Props) {
   return (
      <li
         className='mb-[160px] last:mb-0 sm:mb-[50px]'
         data-aos='fade-up'
         data-aos-duration='700'
      >
         <div className='ml-[80px] flex flex-col gap-[60px] sm:ml-[20px] sm:gap-[15px]'>
            <div className='absolute -left-[20px] mt-[20px] h-[38px] w-[38px] rounded-full border border-[#8FDCC2] bg-[#8FDCC2] sm:-left-[6px] sm:mt-[6px] sm:h-[12px] sm:w-[12px]'></div>
            <time className='mt-[20px] text-6xl font-normal leading-none text-[#8FDCC2] sm:mt-0 sm:text-lg'>
               {startDate} - {endDate}
            </time>

            <h3
               className={classNames(
                  'flex flex-col gap-[50px] text-9xl font-semibold sm:flex-row sm:gap-[10px]',
                  'sm:text-4xl'
               )}
            >
               {title} <p className='text-[#8FDCC2]'>- {subtitle}</p>
            </h3>

            {description && (
               <p className='text-7xl/[110px] text-[#D5EDE5] sm:text-2xl/[40px]'>
                  {description}
               </p>
            )}

            {link && (
               <a
                  className='flex w-fit cursor-pointer items-center gap-[20px] text-6xl text-[#8FDCC2] transition-all hover:text-[#D5EDE5] sm:gap-[5px] sm:text-lg'
                  href={link}
                  target='_blank'
               >
                  Visit <BsArrowRightShort className='text-6xl sm:text-xl' />
               </a>
            )}
         </div>
      </li>
   );
}

Experience.Card = Card;
