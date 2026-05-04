import { ArrowUpRight } from "lucide-react"

type Job = {
  period: string
  role: string
  company: string
  url: string
  description: string
  stack: string[]
}

const JOBS: Job[] = [
  {
    period: "2023 — Present",
    role: "Senior Software Engineer · Platform",
    company: "Northwind Labs",
    url: "https://example.com",
    description:
      "Lead the platform team building a real-time event pipeline processing 4B+ events daily. Drove a migration from Kafka to Redpanda, cutting infra costs by 38% and p99 latency by half. Mentor four engineers and own the on-call quality bar.",
    stack: ["Go", "Rust", "Kubernetes", "Redpanda", "Postgres", "Terraform"],
  },
  {
    period: "2020 — 2023",
    role: "Staff Engineer · Infrastructure",
    company: "Helios Systems",
    url: "https://example.com",
    description:
      "Designed the multi-region control plane that became the backbone of the company's SaaS offering. Authored the internal RFC process and led the migration from a Rails monolith to a service-oriented architecture across 12 teams.",
    stack: ["TypeScript", "Node.js", "gRPC", "AWS", "PostgreSQL", "Redis"],
  },
  {
    period: "2018 — 2020",
    role: "Senior Full-Stack Engineer",
    company: "Cobalt & Co.",
    url: "https://example.com",
    description:
      "Built the core dashboard product from zero to a $30M ARR business. Owned end-to-end delivery from design reviews through production rollouts. Established the company's frontend architecture and component library still in use today.",
    stack: ["React", "TypeScript", "Next.js", "GraphQL", "Postgres"],
  },
  {
    period: "2015 — 2018",
    role: "Software Engineer",
    company: "Meridian Technologies",
    url: "https://example.com",
    description:
      "Shipped consumer features for a top-100 iOS app with 12M monthly active users. Led the rewrite of the offline sync engine, reducing crash rate by 72% and tripling the average session length on poor network conditions.",
    stack: ["Swift", "Objective-C", "Python", "Django"],
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Work experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-foreground">
          Experience
        </h2>
      </div>

      <ol className="group/list">
        {JOBS.map((job, idx) => (
          <li key={idx} className="mb-12">
            <a
              href={job.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
            >
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />

              <header
                className="z-10 mb-2 mt-1 font-mono text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2"
                aria-label={job.period}
              >
                {job.period}
              </header>

              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-foreground">
                  <span>
                    <span className="inline-flex items-baseline font-medium leading-tight text-foreground transition-colors group-hover:text-accent group-focus-visible:text-accent">
                      <span>
                        {job.role} ·{" "}
                        <span className="inline-block">
                          {job.company}
                          <ArrowUpRight
                            className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
                            aria-hidden="true"
                          />
                        </span>
                      </span>
                    </span>
                  </span>
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {job.description}
                </p>

                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies used">
                  {job.stack.map((tech) => (
                    <li key={tech}>
                      <span className="flex items-center rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-medium leading-5 text-accent">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </li>
        ))}
      </ol>

      <div className="mt-12">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center font-medium leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition group-hover:border-accent group-focus-visible:border-accent">
            View Full Résumé
          </span>
          <ArrowUpRight
            className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  )
}
