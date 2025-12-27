type Props = {
  label: string
  items: string[]
}

export function SkillCard({ label, items }: Props) {
  return (
    <div>
      <p className='text-xs font-semibold tracking-[0.2em] text-white/70 uppercase'>
        {label}
      </p>
      <ul className='mt-4 space-y-3 text-sm'>
        <li className='flex items-center gap-3 text-white/80'>
          <span className='min-h-1.5 min-w-1.5 rounded-full bg-white'></span>
          <p>{items.join(', ')}</p>
        </li>
      </ul>
    </div>
  )
}
