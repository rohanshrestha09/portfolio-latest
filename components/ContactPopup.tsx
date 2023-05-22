import { useState } from 'react';
import classNames from 'classnames';

import { MdSend } from 'react-icons/md';
import { SiGmail, SiMaildotru } from 'react-icons/si';
import { FaRegCommentAlt } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';

import Input from './forms/Input';
import TextArea from './forms/TextArea';

const Spinner = () => (
   <div role='status'>
      <svg
         aria-hidden='true'
         className='h-[24px] w-[24px] animate-spin fill-[#D5EDE5] text-[rgba(35,56,49,.8)]'
         fill='none'
         viewBox='0 0 100 101'
         xmlns='http://www.w3.org/2000/svg'
      >
         <path
            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
            fill='currentColor'
         />
         <path
            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
            fill='currentFill'
         />
      </svg>
   </div>
);

interface Props {
   className: string;
   // eslint-disable-next-line no-unused-vars
   children: (isOpen: boolean, openPopup: () => void) => React.ReactNode;
}

const initialForm = {
   name: '',
   email: '',
   subject: '',
   message: '',
};

export default function ContactPopup({ className, children }: Props) {
   const [isPopupOpen, setIsPopupOpen] = useState(false);

   const [isLoading, setIsLoading] = useState(false);

   const [form, setForm] = useState(initialForm);

   const { name, email, subject, message } = form;

   const onChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
   };

   const sendMessage = async (e: React.SyntheticEvent) => {
      e.preventDefault();

      setIsLoading(true);

      try {
         fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(form),
         });
         setIsLoading(false);
         setForm(initialForm);
      } catch (error) {
         setIsLoading(false);
      }
   };

   return (
      <div className={classNames(className)}>
         <div
            className={classNames(
               'absolute bottom-[120px] right-[120px] z-[100] flex w-4/5 flex-col gap-[100px] overflow-hidden rounded-2xl border-[2px] border-none bg-[rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-500',
               'sm:bottom-[80px] sm:right-[80px] sm:w-[580px] sm:gap-[35px] sm:rounded-lg',
               isPopupOpen ? 'visible h-[70%] sm:h-[770px]' : 'invisible h-0'
            )}
         >
            <div
               className={classNames(
                  'flex h-[190px] items-center justify-between rounded-t-md bg-[#8FDCC2] px-[80px]',
                  'sm:h-[70px] sm:px-[30px]'
               )}
            >
               <p className='text-7xl text-[#233831] sm:text-2xl'>Contact Me</p>

               <button onClick={() => setIsPopupOpen(false)}>
                  <IoCloseSharp className='text-7xl font-medium text-[#233831] sm:text-2xl' />
               </button>
            </div>

            <form
               className={classNames(
                  'flex flex-col gap-[100px] px-[80px]',
                  'sm:gap-[35px] sm:px-[30px]'
               )}
               onSubmit={sendMessage}
            >
               <Input
                  Icon={SiMaildotru}
                  label='Name'
                  name='name'
                  placeholder='Name'
                  value={name}
                  onChange={onChange}
               />

               <Input
                  Icon={SiGmail}
                  label='Email'
                  name='email'
                  placeholder='Email'
                  type='email'
                  value={email}
                  onChange={onChange}
               />

               <Input
                  Icon={FaRegCommentAlt}
                  label='Subject'
                  name='subject'
                  placeholder='Subject'
                  value={subject}
                  onChange={onChange}
               />

               <TextArea
                  label='Message'
                  name='message'
                  placeholder='Leave a message'
                  value={message}
                  onChange={onChange}
               />

               <button
                  className={classNames(
                     'flex w-full items-center justify-between rounded-2xl border border-[#8FDCC2] bg-[#8FDCC2] px-[70px] py-[60px] text-[#233831] transition-colors',
                     'hover:bg-[rgba(0,0,0,0.1)] hover:text-[#D5EDE5] hover:backdrop-blur-md',
                     'sm:rounded-lg sm:px-[30px] sm:py-[20px]',
                     isLoading &&
                        '!border-[rgba(143,220,194,.8)] !bg-[rgba(143,220,194,.8)] !text-[rgba(35,56,49,.8)]'
                  )}
                  disabled={isLoading}
                  type='submit'
               >
                  <p className='text-6xl sm:text-xl'>Send a message</p>

                  {isLoading ? (
                     <Spinner />
                  ) : (
                     <MdSend className='text-7xl sm:text-2xl' />
                  )}
               </button>
            </form>
         </div>
         {children(isPopupOpen, () => setIsPopupOpen(true))}
      </div>
   );
}
