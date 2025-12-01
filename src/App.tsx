import { useEffect } from "react";

import {
  PreviewLinkCard,
  PreviewLinkCardContent,
  PreviewLinkCardImage,
  PreviewLinkCardTrigger,
} from "@/components/animate-ui/components/radix/preview-link-card";
import {
  contacts,
  //   educations,
  freelancingExperiences,
  projects,
  tools,
  workExperiences,
} from "@/content";
import { cn } from "@/lib/utils";

const thinkingSkills = [
  "Data Structures & Algorithms",
  "Systems design thinking",
  "Product-first problem solving",
];

const visibleFrameworks = Array.from(
  new Set(tools.filter((tool) => tool.visible).map((tool) => tool.name))
);

const contactChannels = contacts.filter((contact) =>
  ["Gmail", "Linkedin", "Github"].includes(contact.title)
);

type TimelineEntry = {
  key: string;
  title: string;
  subtitle: string;
  description?: string;
  link?: string;
  startDate: string;
  endDate: string;
  category: "Full-time" | "Freelance" | "Education";
};

const experienceTimeline: TimelineEntry[] = [
  ...workExperiences.map((entry) => ({
    category: "Full-time" as const,
    key: entry.key,
    title: entry.title,
    subtitle: entry.subtitle,
    description: entry.description,
    link: entry.link,
    startDate: entry.startDate,
    endDate: entry.endDate,
  })),
  ...freelancingExperiences.map((entry) => ({
    category: "Freelance" as const,
    key: entry.key,
    title: entry.title,
    subtitle: entry.subtitle,
    description: entry.description,
    link: entry.link,
    startDate: entry.startDate,
    endDate: entry.endDate,
  })),
  //   ...educations.map((entry) => ({
  //     category: "Education" as const,
  //     key: entry.key,
  //     title: entry.title,
  //     subtitle: entry.subtitle,
  //     startDate: entry.startDate,
  //     endDate: entry.endDate,
  //   })),
];

const toolMap = new Map(tools.map((tool) => [tool.Icon, tool.name]));

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    return () => document.documentElement.classList.remove("dark");
  }, []);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 text-white antialiased">
      <Section bordered={false}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
          Rohan Shrestha
        </p>
        <h1 className="mt-4 text-3xl font-semibold">
          Full-stack engineer crafting resilient, human-centered web products.
        </h1>
        <p className="mt-4 max-w-3xl text-base text-white/70">
          I translate complex requirements into simple product surfaces. My focus is on building
          fast, accessible interfaces and pairing them with reliable APIs so teams can ship
          confidently.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
          <ResumeLink href="/assets/Rohan-Shrestha-Resume.pdf">Download CV</ResumeLink>
          <ResumeLink href="#contact" intent="ghost">
            Contact me
          </ResumeLink>
        </div>
      </Section>

      <Section id="about">
        <SectionHeader
          eyebrow="Experience"
          description="A concise snapshot of the teams I have supported and the impact I focus on delivering."
        />

        <div className="space-y-8">
          {experienceTimeline.map((entry) => (
            <article
              key={`${entry.key}-${entry.category}-${entry.title}`}
              className="border-l border-white/20 pl-5"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">{entry.category}</p>
              <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2 text-sm font-semibold">
                <span>{entry.title}</span>
                <span className="text-white/70">
                  {entry.startDate} – {entry.endDate}
                </span>
              </div>
              <p className="text-sm text-white/70">{entry.subtitle}</p>
              {"description" in entry && entry.description && (
                <p className="mt-3 text-sm text-white/80">{entry.description}</p>
              )}
              {entry.link && (
                <a
                  className="mt-2 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-white underline-offset-4 hover:underline"
                  href={entry.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  Reference
                </a>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section id="skills">
        <SectionHeader
          eyebrow="Skills"
          description="Tools I rely on every day plus the analytical habits that keep my work resilient."
        />

        <div className="grid grid-cols-2 gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Frameworks & Tools
            </p>
            <ul className="mt-4 flex flex-wrap gap-3 text-sm">
              {visibleFrameworks.map((framework) => (
                <li
                  key={framework}
                  className="rounded-full border border-white/40 px-4 py-1 text-white/90"
                >
                  {framework}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Thinking & Practice
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {thinkingSkills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-start gap-3 border-b border-dotted border-white/25 pb-3 last:border-0 last:pb-0"
                >
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="projects">
        <SectionHeader
          eyebrow="Projects"
          description="Selected work. Hover to preview the interface in-line. Screenshots remain hidden otherwise to keep things distraction-free."
        />

        <div className="space-y-6">
          {projects.map((project) => (
            <PreviewLinkCard key={project.key} href={project.link} openDelay={80}>
              <PreviewLinkCardTrigger asChild>
                <article
                  className="border-white/15 flex cursor-pointer flex-col gap-4 rounded-2xl border bg-black/40 p-6 transition-colors hover:bg-white/10 "
                  tabIndex={0}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-lg font-semibold">{project.name}</h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                      {project.icons
                        .map((Icon) => toolMap.get(Icon))
                        .filter(Boolean)
                        .slice(0, 3)
                        .join(" • ")}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-white/80">{project.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm font-semibold">
                    <a
                      className="underline-offset-4 hover:underline"
                      href={project.github}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Repository
                    </a>
                    <a
                      className="underline-offset-4 hover:underline"
                      href={project.link}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Live Preview
                    </a>
                  </div>
                </article>
              </PreviewLinkCardTrigger>

              <PreviewLinkCardContent>
                <PreviewLinkCardImage alt={project.name} />
              </PreviewLinkCardContent>
            </PreviewLinkCard>
          ))}
        </div>
      </Section>

      <Section id="contact">
        <SectionHeader
          eyebrow="Contact"
          description="Reach out for collaborations, freelance briefs, or a quick chat about engineering craft."
        />

        <div className="grid grid-cols-3 gap-6">
          {contactChannels.map((channel) => (
            <a
              key={channel.title}
              className="flex items-center justify-between rounded-2xl border border-white/20 px-5 py-4 text-sm transition-colors hover:bg-white/10"
              href={channel.link}
              rel="noreferrer"
              target="_blank"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">{channel.title}</p>
                <p className="mt-1 font-semibold">{channel.description}</p>
              </div>
              <channel.Icon className="text-2xl text-white" />
            </a>
          ))}
        </div>
      </Section>
    </main>
  );
}

type SectionProps = {
  id?: string;
  bordered?: boolean;
  className?: string;
  children: React.ReactNode;
};

function Section({ id, bordered = true, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "px-6 py-12",
        bordered && "border-white/15 border-t first:border-t-0",
        className
      )}
    >
      {children}
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  description: string;
};

function SectionHeader({ eyebrow, description }: SectionHeaderProps) {
  return (
    <div className="mb-10 space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">{eyebrow}</p>
      <p className="max-w-3xl text-base text-white/80">{description}</p>
    </div>
  );
}

type ResumeLinkProps = {
  href: string;
  children: React.ReactNode;
  intent?: "solid" | "ghost";
};

function ResumeLink({ href, children, intent = "solid" }: ResumeLinkProps) {
  const base =
    "inline-flex items-center rounded-full px-6 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white";
  const variants = {
    solid: "border border-white bg-white text-black hover:bg-transparent hover:text-white",
    ghost: "border border-white text-white hover:bg-white hover:text-black",
  } as const;

  const isAnchor = href.startsWith("#");

  return (
    <a
      className={cn(base, variants[intent])}
      href={href}
      target={isAnchor ? undefined : "_blank"}
      rel={isAnchor ? undefined : "noreferrer"}
    >
      {children}
    </a>
  );
}
