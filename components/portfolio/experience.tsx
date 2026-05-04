import { ArrowUpRight } from "lucide-react"

type Job = {
  period: string
  role: string
  company: string
  location: string
  description: string
  stack: string[]
}

const JOBS: Job[] = [
  {
    period: "May 2024 — Present",
    role: "Senior Software Developer",
    company: "Mandrill Tech Sdn. Bhd.",
    location: "Mutiara Damansara, Petaling Jaya",
    description:
      "Develop and maintain production features for two banking mobile applications using Flutter and Dart. Contribute across mobile app, web portal, and backend work, owning delivery from requirement clarification through implementation, testing support, bug fixing, and release preparation.",
    stack: ["Flutter", "Dart", "RESTful APIs", "JSON", "React", "Backend Development"],
  },
  {
    period: "Jan 2023 — Apr 2024",
    role: "Assistant Team Lead",
    company: "HAYAT Technologies Sdn. Bhd.",
    location: "Mid Valley, Kuala Lumpur",
    description:
      "Supported sprint planning, task coordination, progress tracking, developer support, and stakeholder collaboration. Worked closely with QA, backend teams, project managers, and stakeholders to keep delivery on track.",
    stack: ["Flutter", "Dart", "Sprint Planning", "Task Coordination", "Jira", "Git"],
  },
  {
    period: "Apr 2021 — Jan 2023",
    role: "Flutter Developer",
    company: "HAYAT Technologies Sdn. Bhd.",
    location: "Mid Valley, Kuala Lumpur",
    description:
      "Developed and maintained cross-platform mobile apps using Flutter and Dart, including SELANGKAH, a public healthcare platform used during the COVID-19 pandemic. Built features, integrated RESTful APIs, fixed bugs, and supported App Store and Play Store releases.",
    stack: ["Flutter", "Dart", "BLoC", "Provider", "App Store", "Play Store"],
  },
  {
    period: "Sep 2020 — Apr 2021",
    role: "Mobile App Programmer",
    company: "ASP Medical Group",
    location: "Masjid Jamek, Kuala Lumpur",
    description:
      "Developed, tested, and maintained mobile application features for iOS and Android platforms. Integrated RESTful APIs, supported app enhancements and bug fixes, and assisted with issue investigation and production support.",
    stack: ["iOS", "Android", "RESTful APIs", "Testing Support", "Production Support"],
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
            <article
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
                        </span>
                      </span>
                    </span>
                  </span>
                </h3>

                <p className="mt-1 font-mono text-xs text-muted-foreground">{job.location}</p>

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
            </article>
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
