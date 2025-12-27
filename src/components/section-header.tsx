type Props = {
  title: string
  description: string
}

export function SectionHeader({ title, description }: Props) {
  return (
    <div className='mb-10 space-y-3'>
      <p className='text-xs font-semibold tracking-[0.2em] text-white/70 uppercase'>
        {title}
      </p>
      <p className='max-w-3xl text-base text-white/80'>{description}</p>
    </div>
  )
}
