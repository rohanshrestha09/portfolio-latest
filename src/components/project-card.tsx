import { useState } from 'react'

type Props = {
  index: number
  name: string
  description: string
  link: string
  tools: string[]
  image: string
}

export function ProjectCard({
  index,
  name,
  description,
  link,
  tools,
  image,
}: Props) {
  const [preview, setPreview] = useState<{
    top: number
    left: number
    image: string | null
  }>({
    top: 0,
    left: 0,
    image: null,
  })

  const handlePointerEnter = (image?: string) => (event: React.MouseEvent) => {
    if (!image) return
    setPreview({ image, top: event.clientY, left: event.clientX })
  }

  const handlePointerMove = (event: React.MouseEvent) => {
    if (!preview.image) return
    setPreview(prev => ({ ...prev, left: event.clientX, top: event.clientY }))
  }

  const hidePreview = () => setPreview(prev => ({ ...prev, image: null }))

  return (
    <>
      <a href={link} target='_blank' rel='noreferrer'>
        <article
          tabIndex={0}
          className={`group flex cursor-pointer flex-col gap-2 transition-colors ${index === 0 ? 'pt-0' : 'py-6'}`}
          onMouseEnter={handlePointerEnter(image)}
          onMouseMove={handlePointerMove}
          onMouseLeave={hidePreview}
        >
          <div className='flex flex-wrap items-baseline justify-between gap-3'>
            <h3 className='text-xl font-semibold'>{name}</h3>
            <p className='text-xs tracking-[0.2em] text-white/60 uppercase transition-colors group-hover:text-white/80'>
              {tools.join(' • ')}
            </p>
          </div>
          <p className='text-sm leading-relaxed text-white/70 transition-colors group-hover:text-white/80'>
            {description}
          </p>
        </article>
      </a>

      {preview.image && (
        <div
          className='pointer-events-none fixed z-50 hidden h-60 sm:block'
          style={{ top: `${preview.top}px`, left: `${preview.left}px` }}
        >
          <img
            className='size-full object-contain object-center'
            src={preview.image}
            alt=''
          />
        </div>
      )}
    </>
  )
}
