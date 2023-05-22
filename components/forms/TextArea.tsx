import classNames from 'classnames';

interface Props {
   name: string;
   label: string;
   placeholder?: string;
   value?: string;
   // eslint-disable-next-line no-unused-vars
   onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({
   name,
   label,
   placeholder,
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
         <textarea
            className={classNames(
               'block w-full rounded-2xl border border-[#D5EDE5] bg-[rgba(0,0,0,0.1)] p-[40px] text-6xl text-[#D5EDE5] outline-none backdrop-blur transition-colors',
               'focus:border-[#8FDCC2] focus:ring-[#8FDCC2]',
               'sm:rounded-lg sm:p-[10px] sm:text-xl'
            )}
            id={name}
            name={name}
            placeholder={placeholder}
            rows={3}
            value={value}
            required
            onChange={typeof onChange === 'function' ? onChange : undefined}
         />
      </div>
   );
}
