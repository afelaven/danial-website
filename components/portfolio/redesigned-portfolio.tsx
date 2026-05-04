"use client"

import type { CSSProperties } from "react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Database,
  Download,
  FileText,
  Folder,
  GitBranch,
  Github,
  Linkedin,
  Mail,
  Phone,
  Smartphone,
  TerminalSquare,
  Users,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useReveal } from "@/hooks/use-reveal"

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const

const ROLES = ["Mobile Team Lead.", "Flutter Developer.", "Senior Software Developer."]

const STATS = [
  { value: 5, suffix: "+", label: "Years experience" },
  { value: 5, suffix: "", label: "Production apps" },
  { value: 2, suffix: "", label: "Banking clients" },
  { value: 3, suffix: "", label: "Industries shipped" },
]

const NOW_ITEMS = [
  { key: "building", value: "Banking flows at Mandrill Tech" },
  { key: "learning", value: "Riverpod 3.0 and Dart 3 patterns" },
  { key: "reading", value: "Designing Data-Intensive Applications" },
  { key: "exploring", value: "Server-driven UI and Flutter web" },
]

const EXPERIENCE = [
  {
    company: "Mandrill Tech",
    role: "Senior Software Developer",
    location: "Petaling Jaya, MY",
    period: "May 2024 - Present",
    bullets: [
      "Develop and maintain production features for two banking mobile applications using Flutter and Dart.",
      "Contribute across mobile, web portal, and backend work for enterprise delivery.",
      "Own features from requirement clarification through implementation, QA support, bug fixing, and release prep.",
      "Integrate RESTful APIs, JSON data handling, and third-party services for core app flows.",
      "Investigate production issues, regression bugs, and practical technical improvements.",
    ],
  },
  {
    company: "HAYAT Technologies",
    role: "Assistant Team Lead / Flutter Developer",
    location: "Mid Valley, KL",
    period: "Apr 2021 - Apr 2024",
    bullets: [
      "Worked on SELANGKAH, a public healthcare platform used during the COVID-19 pandemic.",
      "Built features, integrated RESTful APIs, fixed bugs, and supported App Store and Play Store releases.",
      "Used BLoC and Provider for state management across Flutter modules.",
      "Supported sprint planning, task coordination, progress tracking, and developer support.",
      "Collaborated with QA, backend, project, and stakeholder teams to keep delivery moving.",
    ],
  },
  {
    company: "ASP Medical Group",
    role: "Mobile App Programmer",
    location: "Masjid Jamek, KL",
    period: "Sep 2020 - Apr 2021",
    bullets: [
      "Developed, tested, and maintained iOS and Android mobile app features.",
      "Integrated RESTful APIs and supported enhancements, bug fixes, and maintenance tasks.",
      "Collaborated with designers, product managers, QA engineers, and developers to deliver updates.",
      "Assisted with testing, issue investigation, and production support.",
    ],
  },
]

const SKILLS = [
  { title: "Mobile", icon: Smartphone, items: ["Flutter", "Dart", "Android", "iOS"] },
  { title: "State", icon: Cpu, items: ["BLoC", "Cubit", "Provider", "Riverpod"] },
  { title: "Frontend", icon: Code2, items: ["React", "JavaScript", "Next.js", "Tailwind"] },
  { title: "API and Data", icon: Database, items: ["RESTful APIs", "JSON", "3rd-party Integrations"] },
  { title: "Tools", icon: GitBranch, items: ["Git", "Jira", "App Store", "Play Store"] },
  { title: "Leadership", icon: Users, items: ["Sprint Planning", "Task Coordination", "Stakeholder Collab"] },
]

const MILESTONES = [
  { title: "B.CS (Hons.)", org: "Universiti Teknologi MARA", year: "2018 - 2020" },
  { title: "SELANGKAH delivery", org: "National COVID-19 platform", year: "2021" },
  { title: "Assistant Team Lead", org: "HAYAT Technologies", year: "2023" },
  { title: "Senior Developer track", org: "Mandrill Tech", year: "2024" },
]

const PROJECTS = [
  {
    domain: "Banking",
    title: "UOB Bank",
    description:
      "Production banking mobile app work: feature delivery, API integration, regression fixes, and release support across iOS and Android.",
    stack: ["Flutter", "Dart", "REST"],
    accent: "#22d3ee",
    label: "UOB",
    image: "/project-helix.jpg",
  },
  {
    domain: "Banking",
    title: "Affin Bank",
    description:
      "Mobile banking application contributions across customer flows, sprint releases, QA support, and production issue triage.",
    stack: ["Flutter", "BLoC", "REST"],
    accent: "#4ade80",
    label: "AFFIN",
    image: "/project-lattice.jpg",
  },
  {
    domain: "Fintech",
    title: "MoneyX",
    description:
      "Fintech mobile experience covering core money flows, third-party service integration, JSON handling, and bug triage.",
    stack: ["Flutter", "Dart", "JSON"],
    accent: "#fbbf24",
    label: "$X",
    image: "/project-edge.jpg",
  },
  {
    domain: "Healthcare",
    title: "SELANGKAH",
    description:
      "Public healthcare platform used during the COVID-19 pandemic with cross-platform delivery and store release support.",
    stack: ["Flutter", "Provider", "REST"],
    accent: "#f472b6",
    label: "SLK",
    image: "/project-beacon.jpg",
  },
  {
    domain: "Enterprise",
    title: "Net7",
    description:
      "Enterprise platform work spanning mobile, web portal, and backend contributions for end-to-end requirements delivery.",
    stack: ["Flutter", "React", "Backend"],
    accent: "#a78bfa",
    label: "N7",
    image: "/project-lattice.jpg",
  },
]

type HistoryItem = {
  type: "system" | "command" | "output" | "error"
  text: string
}

export function RedesignedPortfolio() {
  const activeSection = useActiveSection()
  const role = useTypewriter(ROLES)
  const [activeJob, setActiveJob] = useState(0)
  useReveal()

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        scrollToSection("contact")
      }
    }

    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <div className="portfolio-shell relative isolate min-h-screen overflow-hidden bg-background text-foreground">
      <CodeRain />
      <div className="portfolio-grid-bg" aria-hidden="true" />
      <div className="portfolio-vignette" aria-hidden="true" />

      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:font-bold focus:text-accent-foreground"
      >
        Skip to content
      </a>

      <SiteNav activeSection={activeSection} />

      <main id="top" className="relative z-10 mx-auto max-w-6xl px-5 pt-20 sm:px-8 lg:px-10">
        <section className="flex min-h-[86svh] flex-col justify-center py-16 lg:py-20">
          <div>
            <p className="reveal mb-6 font-mono text-sm text-accent">$ echo &quot;Hello, world.&quot;</p>
            <h1 className="reveal max-w-4xl text-5xl font-bold leading-none text-foreground sm:text-6xl lg:text-7xl" data-reveal-delay="1">
              Danial Haikal.
            </h1>
            <h2 className="reveal mt-4 min-h-[4.5rem] text-3xl font-semibold leading-tight text-muted-foreground sm:text-5xl" data-reveal-delay="2">
              <span>{role}</span>
              <span className="typing-caret" aria-hidden="true" />
            </h2>
            <p className="reveal mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg" data-reveal-delay="3">
              Senior Software Developer with 5+ years shipping production Flutter apps across
              banking, fintech, healthcare, and enterprise platforms. Currently focused on
              cross-functional delivery and mobile leadership at{" "}
              <span className="font-medium text-foreground">Mandrill Tech</span>.
            </p>

            <div className="reveal mt-9 flex flex-wrap gap-3" data-reveal-delay="4">
              <a href="#projects" onClick={(event) => handleAnchorClick(event, "projects")} className="portfolio-button bg-accent text-accent-foreground">
                <Folder className="h-4 w-4" aria-hidden="true" />
                View Projects
              </a>
              <a href="/danial-resume.pdf" target="_blank" rel="noreferrer noopener" className="portfolio-button border border-accent/50 text-accent hover:bg-accent/10">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
            </div>

            <dl className="reveal mt-12 grid max-w-3xl grid-cols-2 gap-4 border-t border-border/70 pt-7 sm:grid-cols-4" data-reveal-delay="5">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="mt-2 font-mono text-[11px] uppercase text-muted-foreground">{stat.label}</dt>
                  <dd className="font-mono text-3xl font-semibold text-accent">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="about" className="section-block">
          <SectionHeading number="01" title="About" />
          <div className="grid gap-10 lg:grid-cols-[1.55fr_0.95fr]">
            <div className="reveal space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                I write mobile applications for a living, mostly in Flutter and Dart, and I have
                spent the last 5+ years putting them in front of real users in regulated industries.
              </p>
              <p>
                I started with iOS and Android maintenance work at{" "}
                <span className="font-medium text-foreground">ASP Medical</span>, moved into
                cross-platform Flutter development at{" "}
                <span className="font-medium text-foreground">HAYAT Technologies</span>, then into
                banking app delivery at <span className="font-medium text-foreground">Mandrill Tech</span>.
              </p>
              <p>
                I am strongest where mobile craft meets delivery discipline: clean state management,
                reliable API integrations, release support, testing coordination, and steady
                communication with product, QA, backend, design, and stakeholder teams.
              </p>
            </div>

            <div className="reveal portfolio-card p-5 font-mono text-sm" data-reveal-delay="2">
              <div className="mb-5 flex items-center gap-3 text-accent">
                <span className="status-dot" aria-hidden="true" />
                <span>// currently</span>
              </div>
              <div className="space-y-3">
                {NOW_ITEMS.map((item) => (
                  <div key={item.key} className="grid grid-cols-[6.5rem_1fr] gap-3 border-t border-dashed border-border/70 pt-3 first:border-t-0 first:pt-0">
                    <span className="text-accent">{item.key}</span>
                    <span className="text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section-block">
          <SectionHeading number="02" title="Where I have worked" />
          <div className="reveal grid gap-6 lg:grid-cols-[15rem_1fr]">
            <div className="flex overflow-x-auto border-b border-border lg:block lg:overflow-visible lg:border-b-0 lg:border-l">
              {EXPERIENCE.map((job, index) => (
                <button
                  key={job.company}
                  type="button"
                  role="tab"
                  aria-selected={activeJob === index}
                  onClick={() => setActiveJob(index)}
                  className={cn(
                    "min-w-max border-b-2 border-transparent px-5 py-4 text-left font-mono text-sm text-muted-foreground transition lg:block lg:w-full lg:border-b-0 lg:border-l-2",
                    activeJob === index
                      ? "border-accent bg-accent/10 text-accent lg:-ml-px"
                      : "hover:bg-accent/5 hover:text-accent",
                  )}
                >
                  {job.company}
                </button>
              ))}
            </div>

            <article className="min-h-[25rem]">
              <h3 className="text-2xl font-semibold text-foreground">
                {EXPERIENCE[activeJob].role}{" "}
                <span className="text-accent">@ {EXPERIENCE[activeJob].company}</span>
              </h3>
              <p className="mt-2 font-mono text-xs uppercase text-muted-foreground">
                {EXPERIENCE[activeJob].period} / {EXPERIENCE[activeJob].location}
              </p>
              <ul className="mt-7 space-y-4">
                {EXPERIENCE[activeJob].bullets.map((bullet) => (
                  <li key={bullet} className="grid grid-cols-[1rem_1fr] gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                    <span className="pt-1 font-mono text-accent">&gt;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="skills" className="section-block">
          <SectionHeading number="03" title="Tech and tools" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((skill, index) => {
              const Icon = skill.icon
              return (
                <article
                  key={skill.title}
                  className="reveal portfolio-card group p-5 transition hover:-translate-y-1 hover:border-accent/60"
                  data-reveal-delay={String(Math.min(index, 4))}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-md border border-accent/40 text-accent">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="font-mono text-sm text-accent">// {skill.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="rounded border border-border bg-background/55 px-3 py-1 font-mono text-xs text-muted-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="section-block">
          <SectionHeading number="04" title="Milestones" />
          <ol className="reveal border-l border-accent/35 pl-6">
            {MILESTONES.map((milestone) => (
              <li key={`${milestone.title}-${milestone.year}`} className="relative grid gap-2 pb-9 last:pb-0 sm:grid-cols-[10rem_1fr] sm:gap-8">
                <span className="absolute -left-[1.9rem] top-1 h-3 w-3 rounded-full border-2 border-accent bg-background shadow-[0_0_18px_rgba(34,211,238,0.45)]" />
                <span className="font-mono text-sm text-accent">{milestone.year}</span>
                <span>
                  <strong className="block text-foreground">{milestone.title}</strong>
                  <span className="text-sm text-muted-foreground">{milestone.org}</span>
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section id="projects" className="section-block">
          <SectionHeading number="05" title="Selected projects" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, index) => (
              <article
                key={project.title}
                className="reveal portfolio-card overflow-hidden transition hover:-translate-y-1 hover:border-accent/55"
                data-reveal-delay={String(Math.min(index, 4))}
              >
                <ProjectMockup project={project} />
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div className="grid h-9 w-9 place-items-center rounded-md border border-accent/40 text-accent">
                      <Folder className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-[11px] uppercase text-muted-foreground">{project.domain}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground">
                    {project.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-block pb-20 text-center">
          <p className="reveal font-mono text-sm text-accent">$ ./contact.sh</p>
          <h2 className="reveal mt-4 text-4xl font-bold text-foreground sm:text-6xl" data-reveal-delay="1">Let&apos;s build something.</h2>
          <p className="reveal mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground" data-reveal-delay="2">
            Open to interesting mobile or full-stack work across banking, healthcare, fintech, and
            enterprise products. Reach me directly or use the terminal.
          </p>

          <div className="reveal mx-auto mt-9 max-w-2xl" data-reveal-delay="3">
            <ContactTerminal />
          </div>

          <div className="reveal mt-8 flex flex-wrap justify-center gap-3" data-reveal-delay="4">
            <a href="mailto:danhaikalwork@gmail.com" className="portfolio-button bg-accent text-accent-foreground">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email
            </a>
            <a href="tel:+60177565622" className="portfolio-button border border-border text-muted-foreground hover:border-accent hover:text-accent">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call
            </a>
            <a href="/danial-resume.pdf" target="_blank" rel="noreferrer noopener" className="portfolio-button border border-border text-muted-foreground hover:border-accent hover:text-accent">
              <FileText className="h-4 w-4" aria-hidden="true" />
              Resume
            </a>
          </div>
        </section>
      </main>

      <aside className="side-rail left-rail" aria-label="Social links">
        <a href="https://github.com/danhaikal" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
          <Github className="h-5 w-5" />
        </a>
        <a href="https://linkedin.com/in/danial-haikal" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
          <Linkedin className="h-5 w-5" />
        </a>
        <a href="mailto:danhaikalwork@gmail.com" aria-label="Email">
          <Mail className="h-5 w-5" />
        </a>
      </aside>
      <aside className="side-rail right-rail" aria-label="Email">
        <a href="mailto:danhaikalwork@gmail.com">danhaikalwork@gmail.com</a>
      </aside>

      <footer className="relative z-10 mx-auto max-w-6xl border-t border-border/70 px-5 py-8 text-center font-mono text-xs text-muted-foreground sm:px-8 lg:px-10">
        <p>Designed and built by Danial Haikal. 2026.</p>
        <div className="mt-3 flex justify-center gap-5">
          <a href="https://github.com/danhaikal" target="_blank" rel="noreferrer noopener" className="hover:text-accent">
            GitHub
          </a>
          <a href="https://linkedin.com/in/danial-haikal" target="_blank" rel="noreferrer noopener" className="hover:text-accent">
            LinkedIn
          </a>
          <a href="/danial-resume.pdf" target="_blank" rel="noreferrer noopener" className="hover:text-accent">
            Resume
          </a>
        </div>
      </footer>
    </div>
  )
}

function SiteNav({ activeSection }: { activeSection: string }) {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl" aria-label="Primary navigation">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5 sm:px-8 lg:px-10">
        <a
          href="#top"
          onClick={(event) => handleAnchorClick(event, "top")}
          className="flex shrink-0 items-center gap-2 font-mono text-sm text-foreground"
        >
          <span className="text-accent">&lt;/&gt;</span>
          <span>danial.dev</span>
        </a>

        <div className="ml-auto flex min-w-0 items-center gap-2 overflow-x-auto">
          {NAV.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => handleAnchorClick(event, item.id)}
              aria-current={activeSection === item.id ? "page" : undefined}
              className={cn(
                "shrink-0 rounded-md px-2.5 py-2 font-mono text-xs transition sm:px-3",
                activeSection === item.id ? "bg-accent/10 text-accent" : "text-muted-foreground hover:text-accent",
              )}
            >
              <span className="hidden text-accent sm:inline">{String(index + 1).padStart(2, "0")}.</span>{" "}
              {item.label}
            </a>
          ))}
          <a
            href="/danial-resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="ml-1 grid h-9 w-9 shrink-0 place-items-center rounded-md border border-accent/50 text-accent transition hover:bg-accent/10"
            aria-label="Open resume"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </nav>
  )
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="reveal mb-10 flex items-center gap-5">
      <span className="font-mono text-sm text-accent">{number}.</span>
      <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">{title}</h2>
      <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" aria-hidden="true" />
    </div>
  )
}

function ContactTerminal() {
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: "system", text: "danial@portfolio ready. run help." },
  ])
  const [input, setInput] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [history])

  function runCommand(command: string) {
    const cmd = command.trim().toLowerCase()
    const output: HistoryItem[] = [{ type: "command", text: command }]

    if (!cmd) {
      setHistory((items) => [...items, ...output])
      return
    }

    if (cmd === "help") {
      output.push({ type: "output", text: "commands: whoami, contact, resume, projects, social, clear" })
    } else if (cmd === "whoami") {
      output.push({
        type: "output",
        text: "Danial Haikal - Senior Software Developer focused on Flutter, Dart, React, and delivery.",
      })
    } else if (cmd === "contact") {
      output.push({ type: "output", text: "email: danhaikalwork@gmail.com" })
      output.push({ type: "output", text: "phone: +60 17-756 5622" })
    } else if (cmd === "resume") {
      output.push({ type: "output", text: "opening /danial-resume.pdf" })
      window.open("/danial-resume.pdf", "_blank", "noopener,noreferrer")
    } else if (cmd === "projects") {
      PROJECTS.forEach((project) => output.push({ type: "output", text: `${project.title} - ${project.domain}` }))
    } else if (cmd === "social") {
      output.push({ type: "output", text: "github: github.com/danhaikal" })
      output.push({ type: "output", text: "linkedin: linkedin.com/in/danial-haikal" })
    } else if (cmd === "clear") {
      setHistory([])
      return
    } else {
      output.push({ type: "error", text: `command not found: ${cmd}` })
    }

    setHistory((items) => [...items, ...output])
  }

  return (
    <div className="portfolio-terminal text-left" onClick={() => inputRef.current?.focus()}>
      <TerminalBar title="danial@contact - interactive" />
      <div ref={bodyRef} className="terminal-body min-h-[13rem] max-h-[18rem] overflow-y-auto p-5 font-mono text-sm leading-7">
        {history.map((item, index) => (
          <TerminalLine key={`${item.text}-${index}`} item={item} />
        ))}
        <form
          className="flex min-w-0 items-center"
          onSubmit={(event) => {
            event.preventDefault()
            runCommand(input)
            setInput("")
          }}
        >
          <Prompt />
          <input
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="min-w-0 flex-1 bg-transparent text-foreground outline-none caret-accent"
            spellCheck={false}
            aria-label="Terminal command"
          />
        </form>
      </div>
    </div>
  )
}

function TerminalLine({ item }: { item: HistoryItem }) {
  if (item.type === "command") {
    return (
      <div>
        <Prompt />
        <span className="text-foreground">{item.text}</span>
      </div>
    )
  }

  return (
    <div className={cn("text-muted-foreground", item.type === "error" && "text-red-300")}>
      {item.text}
    </div>
  )
}

function TerminalBar({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-border bg-card/70 px-4 py-3">
      <span className="h-3 w-3 rounded-full bg-[#ff5f56]" aria-hidden="true" />
      <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" aria-hidden="true" />
      <span className="h-3 w-3 rounded-full bg-[#27c93f]" aria-hidden="true" />
      <span className="ml-auto mr-auto font-mono text-xs text-muted-foreground">{title}</span>
      <TerminalSquare className="h-4 w-4 text-accent" aria-hidden="true" />
    </div>
  )
}

function Prompt() {
  return (
    <span className="mr-2">
      <span className="text-emerald-300">guest</span>
      <span className="text-muted-foreground">@</span>
      <span className="text-accent">danial</span>
      <span className="text-muted-foreground">:~$</span>
    </span>
  )
}

function ProjectMockup({ project }: { project: (typeof PROJECTS)[number] }) {
  const style = { "--project-accent": project.accent } as CSSProperties

  return (
    <div className="project-visual" style={style}>
      <div className="phone-frame" aria-hidden="true">
        <div className="phone-notch" />
        <div className="phone-screen">
          <Image src={project.image} alt="" fill sizes="150px" className="object-cover opacity-40" />
          <div className="relative z-10">
            <div className="phone-status">
              <span>9:41</span>
              <span>5G</span>
            </div>
            <div className="phone-tile">
              <span className="phone-label">{project.label}</span>
              <span className="phone-bar strong" />
              <span className="phone-bar" />
              <span className="phone-bar short" />
            </div>
            <div className="phone-pills">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
      <a href="/danial-resume.pdf" target="_blank" rel="noreferrer noopener" className="project-open" aria-label={`Open resume context for ${project.title}`}>
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  )
}

function CountUp({ to, suffix = "", duration = 1200 }: { to: number; suffix?: string; duration?: number }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to)
      return
    }

    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(Math.round(to * eased))
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.35 },
    )

    observer.observe(element)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [duration, to])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const canvasEl = canvas
    const context = ctx

    const tokens = [
      "final",
      "const",
      "class",
      "Widget",
      "BLoC",
      "Provider",
      "Future",
      "await",
      "Flutter",
      "Dart",
      "React",
      "fetch",
      "REST",
      "JSON",
      "commit",
      "release",
      "QA",
      "API",
      "200",
      "404",
      "{}",
      "=>",
    ]
    const chars = "01{}[]<>/=+-ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    type Column = {
      x: number
      y: number
      speed: number
      token: string
      mode: "token" | "char"
    }

    let columns: Column[] = []
    let width = 0
    let height = 0
    let frame = 0
    let last = performance.now()

    const pick = () => tokens[Math.floor(Math.random() * tokens.length)] ?? "Dart"
    const pickChar = () => chars[Math.floor(Math.random() * chars.length)] ?? "0"

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      canvasEl.width = width * dpr
      canvasEl.height = height * dpr
      canvasEl.style.width = `${width}px`
      canvasEl.style.height = `${height}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)

      const columnWidth = 24
      columns = Array.from({ length: Math.ceil(width / columnWidth) }, (_, index) => ({
        x: index * columnWidth + Math.random() * 6,
        y: Math.random() * -height,
        speed: 0.5 + Math.random() * 1.25,
        token: pick(),
        mode: Math.random() < 0.35 ? "token" : "char",
      }))
    }

    function draw(now: number) {
      const dt = Math.min(48, now - last)
      last = now

      context.fillStyle = "rgba(5, 13, 26, 0.08)"
      context.fillRect(0, 0, width, height)
      context.font = '13px "JetBrains Mono", monospace'
      context.textBaseline = "top"

      for (const column of columns) {
        column.y += column.speed * (dt / 16)

        if (column.mode === "char") {
          context.shadowColor = "#22d3ee"
          context.shadowBlur = 8
          context.fillStyle = "rgba(34, 211, 238, 0.95)"
          context.fillText(pickChar(), column.x, column.y)
          context.shadowBlur = 0
          context.fillStyle = "rgba(34, 211, 238, 0.45)"
          context.fillText(pickChar(), column.x, column.y - 18)
          context.fillStyle = "rgba(34, 211, 238, 0.18)"
          context.fillText(pickChar(), column.x, column.y - 36)
        } else {
          for (let i = 0; i < column.token.length; i++) {
            const y = column.y - i * 16
            if (y < -20 || y > height + 20) continue
            const alpha = i === 0 ? 1 : Math.max(0.08, 0.85 - i * 0.12)
            if (i === 0) {
              context.shadowColor = "#22d3ee"
              context.shadowBlur = 8
            } else {
              context.shadowBlur = 0
            }
            context.fillStyle = `rgba(34, 211, 238, ${alpha})`
            context.fillText(column.token[i] ?? "", column.x, y)
          }
          context.shadowBlur = 0
        }

        if (column.y - 220 > height) {
          column.y = -Math.random() * 220
          column.speed = 0.5 + Math.random() * 1.25
          column.token = pick()
          column.mode = Math.random() < 0.35 ? "token" : "char"
        }
      }

      frame = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener("resize", resize)

    if (reducedMotion) {
      context.fillStyle = "rgba(34, 211, 238, 0.18)"
      context.font = '13px "JetBrains Mono", monospace'
      columns.forEach((column) => context.fillText(column.token, column.x, Math.abs(column.y) % height))
    } else {
      frame = requestAnimationFrame(draw)
    }

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="matrix-rain" aria-hidden="true" />
}

function useActiveSection() {
  const [active, setActive] = useState("about")

  useEffect(() => {
    const sections = NAV.map((item) => document.getElementById(item.id)).filter(
      (section): section is HTMLElement => section !== null,
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-38% 0px -54% 0px", threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return active
}

function useTypewriter(words: string[]) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing")

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(words[0] ?? "")
      return
    }

    const word = words[wordIndex % words.length] ?? ""
    let timeout = 0

    if (phase === "typing") {
      if (text.length < word.length) {
        timeout = window.setTimeout(() => setText(word.slice(0, text.length + 1)), 90)
      } else {
        timeout = window.setTimeout(() => setPhase("holding"), 1600)
      }
    }

    if (phase === "holding") {
      timeout = window.setTimeout(() => setPhase("deleting"), 200)
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        timeout = window.setTimeout(() => setText(text.slice(0, -1)), 45)
      } else {
        setWordIndex((index) => index + 1)
        setPhase("typing")
      }
    }

    return () => window.clearTimeout(timeout)
  }, [phase, text, wordIndex, words])

  return text
}

function handleAnchorClick(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
  event.preventDefault()
  scrollToSection(id)
}

function scrollToSection(id: string) {
  const element = document.getElementById(id)
  if (!element) return

  const top = element.getBoundingClientRect().top + window.scrollY - 76
  window.scrollTo({ top, behavior: "smooth" })
  history.replaceState(null, "", `#${id}`)
}
