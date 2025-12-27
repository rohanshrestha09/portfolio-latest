import type { Blog } from '@/types/blog'

export function BlogCard({
  slug,
  title,
  author,
  readTime,
  excerpt,
  category,
  likesCount,
  viewsCount,
  commentsCount,
  publishedAt,
}: Partial<Blog>) {
  return (
    <article className='py-6 first:pt-0'>
      <div className='flex items-start gap-4'>
        <div className='flex-1 flex flex-col gap-1'>
          <div className='mb-2 flex items-center gap-2 text-sm text-white/60'>
            <a
              href={`${import.meta.env.VITE_BLOG_URL}/profile/${author?.id}`}
              target='_blank'
              rel='noreferrer'
              className='font-medium text-white/80'
            >
              {author?.name}
            </a>
            <span>·</span>
            <span>
              {new Date(publishedAt || '').toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span>·</span>
            <span>{readTime} min read</span>
          </div>

          <a href={`${import.meta.env.VITE_BLOG_URL}/blog/${slug}`} target='_blank' rel='noreferrer'>
            <h2 className='mb-2 cursor-pointer font-serif text-xl font-bold'>
              {title}
            </h2>
          </a>

          <p className='mb-3 line-clamp-3 text-pretty text-white/70 leading-relaxed'>
            {excerpt}
          </p>

          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <span className='rounded-md bg-white/5 px-2 py-1 text-sm text-white/70'>
                {category}
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='text-sm text-white/60'>
                {viewsCount} views
              </div>
              <div className='text-sm text-white/60'>
                {likesCount} likes
              </div>
              <div className='text-sm text-white/60'>
                {commentsCount} comments
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='skeleton'
      className={`animate-pulse rounded-md bg-white/10 ${className || ''}`}
      {...props}
    />
  )
}

export function BlogCardSkeleton() {
  return (
    <article className='border-border border-b pb-6'>
      <div className='flex items-start gap-4'>
        <div className='flex-1'>
          <div className='mb-2 flex items-center gap-2'>
            <Skeleton className='h-4 w-24' />
            <Skeleton className='h-4 w-1' />
            <Skeleton className='h-4 w-28' />
            <Skeleton className='h-4 w-1' />
            <Skeleton className='h-4 w-16' />
          </div>

          <Skeleton className='mb-2 h-7 w-full' />
          <Skeleton className='mb-2 h-7 w-3/4' />

          <Skeleton className='mb-3 h-4 w-full' />
          <Skeleton className='mb-3 h-4 w-2/3' />

          <div className='flex items-center justify-between'>
            <Skeleton className='h-6 w-20' />
            <div className='flex items-center gap-2'>
              <Skeleton className='h-4 w-16' />
              <Skeleton className='h-4 w-20' />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
