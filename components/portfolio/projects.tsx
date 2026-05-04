import Image from "next/image"
import { ArrowUpRight, Star, GitFork } from "lucide-react"

type Project = {
  title: string
  description: string
  url: string
  image: string
  imageAlt: string
  stack: string[]
  stars?: number
  forks?: number
}

const PROJECTS: Project[] = [
  {
    title: "Helix Query Engine",
    description:
      "An open-source distributed query engine written in Rust. Powers analytical workloads across petabyte-scale datasets with sub-second query times.",
    url: "https://example.com",
    image: "/project-helix.jpg",
    imageAlt: "Screenshot of the Helix Query Engine dashboard with terminal output",
    stack: ["Rust", "Apache Arrow", "DataFusion", "WebAssembly"],
    stars: 4823,
    forks: 312,
  },
  {
    title: "Beacon Observability",
    description:
      "Self-hosted observability stack combining metrics, traces, and logs into a single queryable timeline. Used internally by three Fortune 500 companies.",
    url: "https://example.com",
    image: "/project-beacon.jpg",
    imageAlt: "Beacon dashboard showing real-time service traces and metrics",
    stack: ["Go", "ClickHouse", "OpenTelemetry", "React"],
    stars: 1402,
    forks: 98,
  },
  {
    title: "Lattice UI",
    description:
      "Headless React component library with a focus on accessibility and composable APIs. Battle-tested in production at scale across multiple SaaS products.",
    url: "https://example.com",
    image: "/project-lattice.jpg",
    imageAlt: "Component showcase of the Lattice UI library on a dark interface",
    stack: ["TypeScript", "React", "Radix", "Tailwind"],
    stars: 2618,
    forks: 184,
  },
  {
    title: "Edge Cache Proxy",
    description:
      "Lightweight HTTP caching proxy designed for the edge. Pluggable backends, stale-while-revalidate semantics, and a 200KB binary footprint.",
    url: "https://example.com",
    image: "/project-edge.jpg",
    imageAlt: "Architecture diagram of the Edge Cache Proxy with request flow",
    stack: ["Go", "Redis", "Cloudflare Workers"],
    stars: 967,
    forks: 64,
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
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
            >
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />

              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <span className="inline-flex items-baseline font-medium leading-tight text-foreground transition-colors group-hover:text-accent group-focus-visible:text-accent">
                    {project.title}
                    <ArrowUpRight
                      className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {(project.stars !== undefined || project.forks !== undefined) && (
                  <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                    {project.stars !== undefined && (
                      <span className="inline-flex items-center gap-1">
                        <Star className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{project.stars.toLocaleString()}</span>
                        <span className="sr-only">stars</span>
                      </span>
                    )}
                    {project.forks !== undefined && (
                      <span className="inline-flex items-center gap-1">
                        <GitFork className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{project.forks.toLocaleString()}</span>
                        <span className="sr-only">forks</span>
                      </span>
                    )}
                  </div>
                )}

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
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center font-medium leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition group-hover:border-accent group-focus-visible:border-accent">
            View Full Project Archive
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
