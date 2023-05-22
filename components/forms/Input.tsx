import classNames from 'classnames';
import { IconType } from 'react-icons';

interface Props {
   name: string;
   label: string;
   Icon?: IconType;
   placeholder?: string;
   type?: string;
   value?: string;
   // eslint-disable-next-line no-unused-vars
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
   name,
   label,
   placeholder,
   type,
   Icon,
   value,
   onChange,
}: Props) {
   return (
      <div>
         <label
            className={classNames(
               'mb-[30px] block text-6xl font-medium text-[#8FDCC2]',
               'sm:mb-[8px] sm:text-xl'
            )}
            htmlFor={name}
         >
            {label}
         </label>
         <div className='relative flex items-center'>
            {Icon && (
               <Icon
                  className={classNames(
                     'absolute left-[45px] text-6xl text-[#D5EDE5]',
                     'sm:left-[15px] sm:text-xl'
                  )}
               />
            )}
            <input
               autoComplete='off'
               className={classNames(
                  'block w-full rounded-2xl border border-[#D5EDE5] bg-[rgba(0,0,0,0.1)] p-[30px] text-6xl text-[#D5EDE5] outline-none backdrop-blur transition-colors',
                  'focus:border-[#8FDCC2] focus:ring-[#8FDCC2]',
                  'sm:rounded-lg sm:p-[10px] sm:text-xl',
                  Icon && 'pl-[140px] sm:pl-[50px]'
               )}
               id={name}
               name={name}
               placeholder={placeholder}
               type={type || 'text'}
               value={value}
               required
               onChange={typeof onChange === 'function' ? onChange : undefined}
            />
         </div>
      </div>
   );
}
