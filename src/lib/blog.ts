import type { Blog } from '@/types/blog'

const input = {
  json: {
    cursor: 1,
    size: 4,
    sort: '-createdAt',
    direction: 'forward',
    userId: import.meta.env.VITE_BLOG_USER_ID,
  },
} as const

export const fetchBlogs = async (): Promise<Partial<Blog>[]> => {
  const response = await fetch(
    `${import.meta.env.VITE_BLOG_URL}/api/trpc/blog.public.getBlogs?input=${JSON.stringify(input)}`,
  )
  const data = await response.json()
  const blogs = data.result.data.json.data
  if (!Array.isArray(blogs)) return []
  return blogs.filter(blog => blog?.slug)
}
