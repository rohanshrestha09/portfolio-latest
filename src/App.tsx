import { useEffect, useMemo, useRef, useState } from 'react'
import { FaFilePdf } from 'react-icons/fa6'
import { SiGmail, SiLinkedin, SiGithub } from 'react-icons/si'
import { calculateExperience, formatResponsibility } from '@/lib/utils'
import { ExperienceCard } from '@/components/experience-card'
import { SectionHeader } from '@/components/section-header'
import { ProjectCard } from '@/components/project-card'
import { SkillCard } from '@/components/skill-card'
import { BlogCard, BlogCardSkeleton } from '@/components/blog-card'
import content from '@/content.json'
import { fetchBlogs } from '@/lib/blog'
import type { Blog } from '@/types/blog'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [blogs, setBlogs] = useState<Partial<Blog>[]>([])

  const blogSectionRef = useRef<HTMLDivElement>(null)

  const projects = useMemo(() => content.projects, [])
  const experiences = useMemo(
    () =>
      content.experiences.map(experience => ({
        ...experience,
        responsibilities:
          experience.responsibilities?.map(formatResponsibility),
        endDate:
          experience.startYear && experience.startMonth
            ? `Present (${calculateExperience(experience.startYear, experience.startMonth)})`
            : experience.endDate,
      })),
    [],
  )
  const tools = useMemo(() => content.tools, [])
  const contacts = useMemo(() => content.contacts, [])

  useEffect(() => {
    fetchBlogs()
      .then(blogs => {
        setBlogs(blogs)
        setIsLoading(false)
        if (!blogs?.length) blogSectionRef.current?.classList.add('hidden')
      })
      .catch(() => {
        setIsLoading(false)
        blogSectionRef.current?.classList.add('hidden')
      })
  }, [])

  return (
    <main className='mx-auto max-w-5xl text-white antialiased sm:py-8'>
      <section className='px-6 py-12'>
        <h1 className='space-y-2 text-3xl leading-snug font-semibold text-white drop-shadow'>
          Hello, I’m Rohan Shrestha
        </h1>
        <p className='mt-3 text-base text-white/80'>
          Software Engineer with a proven track record of designing and operating scalable full-stack systems and AI driven solutions.
        </p>

        <div className='mt-6 flex items-center gap-3 text-lg text-white/70'>
          {contacts.map(channel => (
            <a
              key={channel.title}
              target='_blank'
              rel='noreferrer'
              href={channel.link}
              title={channel.title}
              className='inline-flex h-10 items-center justify-center rounded-md bg-white/5 px-3 transition-colors hover:bg-white/10 hover:text-white'
            >
              {channel.title === 'Gmail' && <SiGmail className='text-xl' />}
              {channel.title === 'Linkedin' && (
                <SiLinkedin className='text-xl' />
              )}
              {channel.title === 'Github' && <SiGithub className='text-xl' />}
              {channel.title === 'Resume' && (
                <span className='flex items-center gap-2 text-base'>
                  <FaFilePdf className='text-xl' /> Download CV
                </span>
              )}
            </a>
          ))}
        </div>
      </section>
      <section
        id='about'
        className='border-t border-white/15 px-6 py-12 first:border-t-0'
      >
        <SectionHeader
          title='Experience'
          description='A concise snapshot of the teams I have supported and the impact I focus on delivering.'
        />

        <div className='space-y-8'>
          {experiences.map(entry => (
            <ExperienceCard key={entry.title} {...entry} />
          ))}
        </div>
      </section>
      <section
        id='skills'
        className='border-t border-white/15 px-6 py-12 first:border-t-0'
      >
        <SectionHeader
          title='Skills'
          description='Tools I rely on every day plus the analytical habits that keep my work resilient.'
        />

        <div className='grid gap-8 sm:grid-cols-2'>
          {Object.entries(tools).map(([label, items]) => (
            <SkillCard key={label} label={label} items={items} />
          ))}
        </div>
      </section>

      <section
        id='projects'
        className='border-t border-white/15 px-6 py-12 first:border-t-0'
      >
        <SectionHeader
          title='Projects'
          description='Selected work showcasing my technical skills and problem-solving approach.'
        />

        <div className='divide-y divide-white/15'>
          {projects.map((project, index) => (
            <ProjectCard key={project.name} index={index} {...project} />
          ))}
        </div>
      </section>

      <section
        id='blogs'
        ref={blogSectionRef}
        className='border-y border-white/15 px-6 py-12'
      >
        <SectionHeader
          title='Blogs'
          description='Some of my recent blog posts.'
        />

        <div className='divide-y divide-white/15'>
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <BlogCardSkeleton key={index} />
              ))
            : blogs.map(blog => <BlogCard key={blog.slug} {...blog} />)}
        </div>
      </section>
    </main>
  )
}
