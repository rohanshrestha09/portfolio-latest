export type Blog = {
  slug: string
  title: string
  author?: {
    id: string
    name: string
  }
  readTime: number
  excerpt: string
  category: string
  likesCount: number
  viewsCount: number
  commentsCount: number
  publishedAt: string
}
