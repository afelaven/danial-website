import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

type Project = {
  title: string
  description: string
  image: string
  imageAlt: string
  stack: string[]
}

const PROJECTS: Project[] = [
  {
    title: "Banking / Fintech Mobile Apps",
    description:
      "Production mobile app work across UOB Bank, Affin Bank, and MoneyX, focused on Flutter feature delivery, RESTful integrations, bug fixing, testing support, and release preparation.",
    image: "/project-helix.jpg",
    imageAlt: "Dashboard preview representing banking and fintech mobile delivery",
    stack: ["Flutter", "Dart", "RESTful APIs", "JSON", "App Releases"],
  },
  {
    title: "SELANGKAH",
    description:
      "Public healthcare platform used during the COVID-19 pandemic. Built and maintained cross-platform Flutter features, integrated APIs, fixed bugs, and supported store releases.",
    image: "/project-beacon.jpg",
    imageAlt: "Dashboard preview representing public healthcare app workflows",
    stack: ["Flutter", "Dart", "BLoC", "Provider", "App Store", "Play Store"],
  },
  {
    title: "Net7 Enterprise Platform",
    description:
      "Enterprise platform work spanning mobile app, web portal, and backend development, supporting end-to-end delivery for project requirements and sprint goals.",
    image: "/project-lattice.jpg",
    imageAlt: "Interface preview representing enterprise platform delivery",
    stack: ["React", "Backend Development", "Flutter", "Git", "Jira"],
  },
  {
    title: "ASP Medical Mobile Apps",
    description:
      "iOS and Android mobile application feature work for healthcare operations, including API integrations, app enhancements, bug fixes, testing, and production support.",
    image: "/project-edge.jpg",
    imageAlt: "Architecture preview representing healthcare mobile app support",
    stack: ["iOS", "Android", "RESTful APIs", "Testing Support"],
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      aria-label="Selected projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-foreground">
          Projects
        </h2>
      </div>

      <ul className="group/list">
        {PROJECTS.map((project) => (
          <li key={project.title} className="mb-12">
            <article
              className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
            >
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />

              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <span className="inline-flex items-baseline font-medium leading-tight text-foreground transition-colors group-hover:text-accent group-focus-visible:text-accent">
                    {project.title}
                  </span>
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies used">
                  {project.stack.map((tech) => (
                    <li key={tech}>
                      <span className="flex items-center rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-medium leading-5 text-accent">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="z-10 sm:order-1 sm:col-span-2 sm:translate-y-1">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.imageAlt}
                  width={200}
                  height={120}
                  className="rounded border border-border/60 transition group-hover:border-accent/50 sm:aspect-auto sm:h-20 sm:w-full sm:object-cover"
                />
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center font-medium leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition group-hover:border-accent group-focus-visible:border-accent">
            See More Project Context
          </span>
          <ArrowUpRight
            className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  )
}
