type Props = {
  title: string
  subtitle: string
  startDate: string
  endDate: string
  link?: string
  category: string
  responsibilities?: string[]
}

export function ExperienceCard({
  title,
  subtitle,
  startDate,
  endDate,
  link,
  category,
  responsibilities,
}: Props) {
  return (
    <article className='border-l border-white/20 pl-5'>
      <p className='text-xs tracking-[0.2em] text-white/60 uppercase'>
        {category}
      </p>
      <div className='mt-2 mb-0.5 flex flex-wrap items-baseline justify-between gap-2 text-sm font-semibold'>
        <p>{title}</p>
        <p className='text-white/70'>
          {startDate} – {endDate}
        </p>
      </div>
      <a
        href={link}
        target='_blank'
        rel='noreferrer'
        className='text-sm text-white/70 hover:underline'
      >
        <p>{subtitle}</p>
      </a>
      {responsibilities && (
        <ul className='mt-3 space-y-3 text-sm'>
          {responsibilities.map(responsibility => (
            <li
              key={responsibility}
              className='flex items-start gap-3 text-white/80'
            >
              <span className='mt-2 min-h-1.5 min-w-1.5 rounded-full bg-white'></span>
              <span dangerouslySetInnerHTML={{ __html: responsibility }} />
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
