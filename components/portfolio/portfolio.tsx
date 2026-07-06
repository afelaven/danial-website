"use client"

import type { CSSProperties } from "react"
import { useEffect, useRef, useState } from "react"
import {
  Activity,
  ArrowDownLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Code2,
  Cpu,
  CreditCard,
  Database,
  ExternalLink,
  Fan,
  FileText,
  GitBranch,
  HeartPulse,
  Linkedin,
  Lock,
  Mail,
  Phone,
  Plus,
  Rocket,
  ShieldCheck,
  Smartphone,
  Users,
  Wind,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useReveal } from "@/hooks/use-reveal"
import { HeroAvatar } from "@/components/portfolio/hero-avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const

const STATS = [
  { value: 6, suffix: "+", label: "Years of experience" },
  { value: 6, suffix: "", label: "Apps in production" },
  { value: 2, suffix: "", label: "Banks shipped for" },
  { value: 4, suffix: "", label: "Industries served" },
]

const TRUSTED_BY = [
  { name: "AFFIN Bank", logo: "/logo-affin.svg" },
  { name: "Hong Leong Bank", logo: "/logo-hong-leong.png" },
  { name: "SELANGKAH", logo: "/logo-selangkah.jpg" },
  { name: "MoneyX", logo: "/logo-moneyx.png" },
  { name: "Net7", logo: "/logo-net7.jpg" },
  { name: "Khind", logo: "/logo-khind.svg" },
]

const SNAPSHOT = [
  { key: "Now", value: "Senior Software Developer at Mandrill Tech" },
  { key: "Focus", value: "Mobile banking delivery — Flutter, Flutter Web, React" },
  { key: "Open to", value: "Senior Mobile Developer and Mobile Team Lead roles" },
  { key: "Base", value: "Kuala Lumpur, Malaysia" },
]

const EXPERIENCE = [
  {
    company: "Mandrill Tech",
    role: "Senior Software Developer",
    location: "Petaling Jaya, MY",
    period: "May 2024 — Present",
    duration: "2+ yrs",
    bullets: [
      "Own banking features end to end — from requirement clarification and technical design through implementation, QA support, and production release.",
      "Deliver across four product surfaces: the Flutter mobile app, Flutter Web banking site, web portal, and backend services.",
      "Translate product and stakeholder requirements into API-driven flows, data models, and realistic release scope.",
      "Lead root-cause investigation on regression and production issues, shipping fixes without slowing release momentum.",
      "Integrate REST APIs and third-party services powering customer-facing banking and enterprise workflows.",
    ],
  },
  {
    company: "HAYAT Technologies",
    role: "Assistant Team Lead / Flutter Developer",
    location: "Mid Valley, KL",
    period: "Apr 2021 — Apr 2024",
    duration: "3 yrs",
    bullets: [
      "Coordinated developers as Assistant Team Lead — sprint planning, task breakdown, progress tracking, and keeping the team unblocked.",
      "Delivered SELANGKAH, a statewide public healthcare platform relied on throughout the COVID-19 pandemic.",
      "Built and maintained Flutter features across BLoC and Provider modules with REST API integration.",
      "Owned release support across frequent App Store and Play Store cycles.",
      "Acted as the bridge between QA, backend, project, and stakeholder teams to keep releases on schedule.",
    ],
  },
  {
    company: "ASP Medical Group",
    role: "Mobile App Programmer",
    location: "Masjid Jamek, KL",
    period: "Sep 2020 — Apr 2021",
    duration: "8 mos",
    bullets: [
      "Developed and maintained production iOS and Android healthcare apps.",
      "Integrated REST APIs, shipped enhancements, and resolved production bugs across active apps.",
      "Collaborated with design, product, QA, and engineering to deliver stable mobile releases.",
    ],
  },
]

const LEADERSHIP = [
  {
    title: "End-to-end ownership",
    detail:
      "I take features from requirement clarification through design, implementation, QA, release, and production support — no hand-offs, no gaps.",
  },
  {
    title: "Team coordination",
    detail:
      "As Assistant Team Lead I ran sprint planning, task breakdown, and progress tracking, and kept developers unblocked day to day.",
  },
  {
    title: "Regulated delivery",
    detail:
      "Banking, fintech, and healthcare shaped how I ship: careful scoping, disciplined releases, and calm production debugging.",
  },
  {
    title: "Cross-functional alignment",
    detail:
      "I work directly with product, design, QA, backend, and stakeholders — translating between business intent and technical reality.",
  },
]

const CORE_SKILLS = new Set(["Flutter", "Dart", "BLoC", "Flutter Web", "REST APIs", "Feature ownership"])

const SKILLS = [
  { title: "Mobile", icon: Smartphone, items: ["Flutter", "Dart", "Android", "iOS", "Flutter Web"] },
  { title: "Architecture & State", icon: Cpu, items: ["BLoC", "Cubit", "Provider", "Riverpod", "Modular design"] },
  { title: "Web & Frontend", icon: Code2, items: ["React", "Next.js", "JavaScript", "Tailwind CSS"] },
  { title: "APIs & Data", icon: Database, items: ["REST APIs", "JSON modeling", "Third-party integrations", "Error handling"] },
  { title: "Leadership & Process", icon: Users, items: ["Feature ownership", "Sprint planning", "Task breakdown", "Stakeholder alignment"] },
  { title: "Delivery & Tooling", icon: GitBranch, items: ["Git", "Jira", "Code review", "App Store", "Play Store"] },
]

type ProjectLink =
  | { kind: "website"; href: string }
  | { kind: "android"; href: string }
  | { kind: "ios"; href: string }
  | { kind: "internal" }

type Project = {
  domain: string
  title: string
  description: string
  stack: string[]
  accent: string
  logo: string
  links: ProjectLink[]
}

const PROJECTS: Project[] = [
  {
    domain: "Banking",
    title: "AFFIN Bank — AffinAlwaysX",
    description:
      "Retail mobile banking app for AFFIN Bank. Built customer-facing Flutter features with BLoC state management and REST integration, and supported sprint releases, QA validation, and production triage across the App Store and Play Store.",
    stack: ["Flutter", "BLoC", "REST"],
    accent: "#e3192e",
    logo: "/logo-affin.svg",
    links: [
      { kind: "website", href: "https://www.affinalways.com/en/AffinAlwaysX" },
      { kind: "android", href: "https://play.google.com/store/apps/details?id=com.affin.mobilebanking" },
      { kind: "ios", href: "https://apps.apple.com/my/app/affinalwaysx/id6736671432" },
    ],
  },
  {
    domain: "Banking",
    title: "Hong Leong Bank",
    description:
      "Flutter Web banking website for one of Malaysia's largest banks. Delivered features, REST integrations, and regression fixes under strict banking release constraints, coordinating closely with stakeholders and QA.",
    stack: ["Flutter Web", "Dart", "REST"],
    accent: "#e31b23",
    logo: "/logo-hong-leong.png",
    links: [{ kind: "internal" }],
  },
  {
    domain: "Healthcare",
    title: "SELANGKAH",
    description:
      "Statewide public healthcare platform relied on throughout the COVID-19 pandemic. Built Flutter features across BLoC and Provider modules and supported high-frequency store releases under real-world pressure.",
    stack: ["Flutter", "Provider", "REST"],
    accent: "#f472b6",
    logo: "/logo-selangkah.jpg",
    links: [
      { kind: "android", href: "https://play.google.com/store/apps/details?id=sel.main.selangkah" },
      { kind: "ios", href: "https://apps.apple.com/my/app/selangkah/id1552552227" },
    ],
  },
  {
    domain: "Fintech",
    title: "MoneyX",
    description:
      "Production fintech app where reliability matters most. Worked on API-driven money flows, third-party service integrations, and release triage — with a focus on clear app states and safe delivery.",
    stack: ["Flutter", "Dart", "JSON"],
    accent: "#e60013",
    logo: "/logo-moneyx.png",
    links: [
      { kind: "website", href: "https://www.moneyx.com.my/" },
      { kind: "android", href: "https://play.google.com/store/apps/details?id=com.hextartech.moneyx" },
      { kind: "ios", href: "https://apps.apple.com/my/app/moneyx/id6450739960" },
    ],
  },
  {
    domain: "Enterprise",
    title: "Net7",
    description:
      "Enterprise networking platform spanning mobile, web portal, and backend. Turned requirements into shippable workflows and delivered end to end across all three surfaces.",
    stack: ["Flutter", "React", "Backend"],
    accent: "#a78bfa",
    logo: "/logo-net7.jpg",
    links: [
      { kind: "website", href: "https://net7.biz/" },
      { kind: "android", href: "https://play.google.com/store/apps/details?id=com.mandrilltech.BizTag" },
      { kind: "ios", href: "https://apps.apple.com/my/app/net7-scan-save-connect/id6745174993" },
    ],
  },
  {
    domain: "Consumer — Freelance",
    title: "Khind Care",
    description:
      "Companion app for Khind home appliances, delivered freelance with direct client accountability — from Flutter build and REST integration to store launch and post-launch support.",
    stack: ["Flutter", "Dart", "REST"],
    accent: "#22d3ee",
    logo: "/logo-khind.svg",
    links: [
      { kind: "website", href: "https://khind.com.my/" },
      { kind: "android", href: "https://play.google.com/store/apps/details?id=com.khind.care" },
      { kind: "ios", href: "https://apps.apple.com/my/app/khind-care/id1630830536" },
    ],
  },
]

export function Portfolio() {
  const activeSection = useActiveSection()
  const [activeJob, setActiveJob] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  useReveal()

  const onTabKeyDown = (event: React.KeyboardEvent) => {
    const last = EXPERIENCE.length - 1
    let next: number
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        next = activeJob === last ? 0 : activeJob + 1
        break
      case "ArrowLeft":
      case "ArrowUp":
        next = activeJob === 0 ? last : activeJob - 1
        break
      case "Home":
        next = 0
        break
      case "End":
        next = last
        break
      default:
        return
    }
    event.preventDefault()
    setActiveJob(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <div className="relative isolate min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <div className="portfolio-grid-bg" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-accent-foreground"
      >
        Skip to content
      </a>

      <SiteNav activeSection={activeSection} />

      <main id="top" className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* ============ Hero ============ */}
        <section id="hero" className="flex min-h-[88svh] flex-col justify-center pb-16 pt-32 sm:pt-28 lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-8">
          <div className="min-w-0">
          <div className="reveal mb-7">
            <HeroAvatar className="hero-avatar h-24 w-24 rounded-full sm:h-28 sm:w-28" />
          </div>
          <p className="reveal">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/[0.07] px-4 py-1.5 text-xs font-medium text-accent sm:text-sm">
              <span className="status-dot" aria-hidden="true" />
              Available for Senior Mobile &amp; Team Lead roles
            </span>
          </p>
          <h1
            className="hero-name reveal mt-7 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            data-reveal-delay="1"
          >
            Danial Haikal
          </h1>
          <h2
            className="reveal mt-5 max-w-3xl text-2xl font-medium leading-snug tracking-tight text-muted-foreground sm:text-4xl"
            data-reveal-delay="2"
          >
            I build and lead <span className="text-foreground">production mobile apps</span> for
            banking, fintech, and healthcare.
          </h2>
          <p className="reveal mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8" data-reveal-delay="3">
            Six-plus years shipping Flutter, Flutter Web, and React applications end to end — from
            architecture and API design to App Store and Play Store releases. Currently delivering
            mobile banking at <span className="font-medium text-foreground">Mandrill Tech</span>,
            Kuala Lumpur.
          </p>

          <div className="reveal mt-9 flex flex-wrap gap-3" data-reveal-delay="4">
            <a
              href="#projects"
              onClick={(event) => handleAnchorClick(event, "projects")}
              className="portfolio-button portfolio-button-primary"
            >
              View projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="/resume" target="_blank" rel="noreferrer noopener" className="portfolio-button portfolio-button-secondary">
              <FileText className="h-4 w-4" aria-hidden="true" />
              View resume
            </a>
          </div>

          </div>

          <HeroPhone />

          <dl className="reveal mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border/70 pt-8 sm:grid-cols-4 lg:col-span-2 lg:mt-6" data-reveal-delay="5">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dd className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </dd>
                <dt className="mt-1.5 text-sm text-muted-foreground">{stat.label}</dt>
              </div>
            ))}
          </dl>

          <div className="reveal mt-16 lg:col-span-2 lg:mt-10" data-reveal-delay="5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Shipped production work for
            </p>
            <div className="logo-marquee mt-6">
              <div className="logo-marquee-track">
                {[0, 1].map((copy) => (
                  <ul key={copy} aria-hidden={copy === 1} className="logo-marquee-group">
                    {TRUSTED_BY.map((client) => (
                      <li key={client.name} className="flex shrink-0 items-center gap-3.5">
                        <span className="logo-tile">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={client.logo} alt="" loading="lazy" />
                        </span>
                        <span className="whitespace-nowrap text-base font-medium text-muted-foreground">
                          {client.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ About ============ */}
        <section id="about" className="section-block">
          <SectionHeading eyebrow="About" title="Built for products where failure is expensive" />
          <div className="grid gap-10 lg:grid-cols-[1.55fr_0.95fr]">
            <div className="reveal space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                For the past six years I have built mobile products in high-trust environments —
                banking apps, fintech platforms, and public healthcare systems. My core stack is{" "}
                <span className="font-medium text-foreground">Flutter and Dart</span>, alongside
                Flutter Web, React, and the REST APIs that power them.
              </p>
              <p>
                I work best owning features end to end: clarifying requirements with stakeholders,
                designing clean state management, integrating APIs, supporting QA, and shipping
                through App Store, Play Store, and web releases. At HAYAT Technologies I served as{" "}
                <span className="font-medium text-foreground">Assistant Team Lead</span> — planning
                sprints, breaking down work, and coordinating developers on a statewide healthcare
                platform used throughout the COVID-19 pandemic.
              </p>
              <p>
                Today I deliver banking features at Mandrill Tech, and I am looking for my next
                challenge as a Senior Mobile Developer or Mobile Team Lead.
              </p>
            </div>

            <div className="reveal portfolio-card h-fit p-6" data-reveal-delay="2">
              <div className="mb-5 flex items-center gap-2.5">
                <span className="status-dot" aria-hidden="true" />
                <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Snapshot
                </h3>
              </div>
              <dl className="space-y-4">
                {SNAPSHOT.map((item) => (
                  <div key={item.key} className="border-t border-border/60 pt-4 first:border-t-0 first:pt-0">
                    <dt className="text-xs font-medium uppercase tracking-wider text-accent">{item.key}</dt>
                    <dd className="mt-1 text-sm leading-6 text-foreground">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ============ Experience ============ */}
        <section id="experience" className="section-block">
          <SectionHeading eyebrow="Experience" title="Six years of production delivery" />
          <div className="reveal grid gap-8 lg:grid-cols-[16rem_1fr]">
            <div
              role="tablist"
              aria-label="Employers"
              onKeyDown={onTabKeyDown}
              className="flex overflow-x-auto border-b border-border lg:block lg:overflow-visible lg:border-b-0 lg:border-l"
            >
              {EXPERIENCE.map((job, index) => (
                <button
                  key={job.company}
                  ref={(el) => {
                    tabRefs.current[index] = el
                  }}
                  type="button"
                  role="tab"
                  id={`job-tab-${index}`}
                  aria-selected={activeJob === index}
                  aria-controls="job-panel"
                  tabIndex={activeJob === index ? 0 : -1}
                  onClick={() => setActiveJob(index)}
                  className={cn(
                    "min-w-max border-b-2 border-transparent px-5 py-3.5 text-left text-sm font-medium transition lg:block lg:w-full lg:border-b-0 lg:border-l-2",
                    activeJob === index
                      ? "border-accent bg-accent/[0.07] text-accent lg:-ml-px"
                      : "text-muted-foreground hover:bg-accent/5 hover:text-foreground",
                  )}
                >
                  {job.company}
                </button>
              ))}
            </div>

            <article role="tabpanel" id="job-panel" aria-labelledby={`job-tab-${activeJob}`} className="min-h-[24rem]">
              <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {EXPERIENCE[activeJob].role}{" "}
                <span className="text-accent">· {EXPERIENCE[activeJob].company}</span>
              </h3>
              <p className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                <span>{EXPERIENCE[activeJob].period}</span>
                <span className="rounded-full border border-accent/25 bg-accent/[0.07] px-2.5 py-0.5 text-[11px] text-accent">
                  {EXPERIENCE[activeJob].duration}
                </span>
                <span>{EXPERIENCE[activeJob].location}</span>
              </p>
              <ul className="mt-7 space-y-4">
                {EXPERIENCE[activeJob].bullets.map((bullet) => (
                  <li key={bullet} className="grid grid-cols-[1.1rem_1fr] gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                    <span className="pt-2 text-accent" aria-hidden="true">
                      <svg viewBox="0 0 8 8" className="h-2 w-2 fill-current"><circle cx="4" cy="4" r="3" /></svg>
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* ============ Projects ============ */}
        <section id="projects" className="section-block">
          <SectionHeading eyebrow="Projects" title="Selected production work" />
          <TooltipProvider delayDuration={150}>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((project, index) => (
                <article
                  key={project.title}
                  className="reveal portfolio-card group flex flex-col overflow-hidden transition duration-200 hover:-translate-y-1 hover:border-accent/40"
                  data-reveal-delay={String(Math.min(index, 4))}
                >
                  <ProjectBanner project={project} />
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">{project.title}</h3>
                    <p className="mt-2.5 flex-1 text-sm leading-6 text-muted-foreground">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="rounded-md border border-border/80 bg-background/40 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-border/60 pt-4">
                      {project.links.map((link, i) => (
                        <ProjectLinkButton key={i} link={link} title={project.title} />
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </TooltipProvider>
        </section>

        {/* ============ Leadership ============ */}
        <section id="leadership" className="section-block">
          <SectionHeading eyebrow="Leadership" title="How I lead delivery" />
          <div className="grid gap-5 sm:grid-cols-2">
            {LEADERSHIP.map((item, index) => (
              <article key={item.title} className="reveal portfolio-card p-6" data-reveal-delay={String(Math.min(index, 4))}>
                <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-7 text-muted-foreground">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ============ Skills ============ */}
        <section id="skills" className="section-block">
          <SectionHeading eyebrow="Skills" title="Tools I ship with" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((skill, index) => {
              const Icon = skill.icon
              return (
                <article key={skill.title} className="reveal portfolio-card p-6" data-reveal-delay={String(Math.min(index, 4))}>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent/25 bg-accent/[0.06] text-accent">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="text-sm font-semibold text-foreground">{skill.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className={cn(
                          "rounded-md border px-2.5 py-1 font-mono text-[11px]",
                          CORE_SKILLS.has(item)
                            ? "border-accent/30 bg-accent/[0.08] text-accent"
                            : "border-border/80 bg-background/40 text-muted-foreground",
                        )}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        {/* ============ Contact ============ */}
        <section id="contact" className="section-block pb-24 text-center">
          <p className="reveal font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">Contact</p>
          <h2 className="reveal mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl" data-reveal-delay="1">
            Let&apos;s talk.
          </h2>
          <p className="reveal mx-auto mt-5 max-w-xl text-base leading-8 text-muted-foreground" data-reveal-delay="2">
            I&apos;m open to Senior Mobile Developer, Senior Software Engineer, and Mobile Team Lead
            roles. Email is the fastest way to reach me — I usually reply within a day.
          </p>

          <div className="reveal mt-9 flex flex-wrap justify-center gap-3" data-reveal-delay="3">
            <a href="mailto:danhaikalwork@gmail.com" className="portfolio-button portfolio-button-primary">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/danial-haikal-801b571ab/"
              target="_blank"
              rel="noreferrer noopener"
              className="portfolio-button portfolio-button-secondary"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
            <a href="https://wa.me/60177565622" target="_blank" rel="noreferrer noopener" className="portfolio-button portfolio-button-secondary">
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
            <a href="tel:+60177565622" className="portfolio-button portfolio-button-secondary">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call
            </a>
          </div>

          <p className="reveal mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-sm text-muted-foreground" data-reveal-delay="4">
            <a href="mailto:danhaikalwork@gmail.com" className="whitespace-nowrap transition hover:text-accent">
              danhaikalwork@gmail.com
            </a>
            <span className="hidden text-border sm:inline" aria-hidden="true">|</span>
            <a href="tel:+60177565622" className="whitespace-nowrap transition hover:text-accent">
              +60 17-756 5622
            </a>
          </p>

          <p className="reveal mt-4 text-sm text-muted-foreground" data-reveal-delay="4">
            Prefer paper?{" "}
            <a href="/resume" target="_blank" rel="noreferrer noopener" className="font-medium text-accent underline-offset-4 hover:underline">
              View my resume
            </a>
          </p>
        </section>
      </main>

      <footer className="relative z-10 border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:px-8 lg:px-10">
          <p>© 2026 Danial Haikal · Designed &amp; built with Next.js</p>
          <div className="flex gap-6">
            <a href="mailto:danhaikalwork@gmail.com" className="transition hover:text-accent">
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/danial-haikal-801b571ab/"
              target="_blank"
              rel="noreferrer noopener"
              className="transition hover:text-accent"
            >
              LinkedIn
            </a>
            <a href="/resume" target="_blank" rel="noreferrer noopener" className="transition hover:text-accent">
              Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function HeroPhone() {
  return (
    <div className="hero-visual reveal flex lg:self-start" data-reveal-delay="3" aria-hidden="true">
      <div className="hero-visual-glow" />
      <div className="hero-orbit" />
      <div className="hero-orbit hero-orbit-2" />

      <div className="demo-phone">
        <div className="demo-notch" />
        <div className="demo-screen">
          <div className="demo-status">
            <span>9:41</span>
            <span className="demo-status-icons">
              <span className="demo-signal" />
              <span className="demo-battery" />
            </span>
          </div>

          <div className="demo-greeting">
            <div>
              <span className="demo-greeting-label">Good evening</span>
              <span className="demo-greeting-name">Danial</span>
            </div>
            <span className="demo-avatar-dot" />
          </div>

          <div className="demo-pager">
            {/* Page 1 — Banking */}
            <div className="demo-page">
              <div className="demo-balance">
                <span className="demo-balance-label">Total balance</span>
                <span className="demo-balance-value">RM 24,850.32</span>
                <span className="demo-balance-delta">
                  <ArrowUpRight className="h-3 w-3" />
                  +3.2% this month
                </span>
                <div className="demo-balance-sheen" />
              </div>

              <div className="demo-actions">
                {[Plus, ArrowUpRight, ArrowDownLeft, CreditCard].map((Icon, i) => (
                  <span key={i} className="demo-action">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                ))}
              </div>

              <div className="demo-chart">
                {[42, 68, 34, 80, 56, 92, 64].map((height, i) => (
                  <span key={i} style={{ height: `${height}%`, animationDelay: `${i * 180}ms` }} />
                ))}
              </div>

              <div className="demo-list">
                <div className="demo-row">
                  <span className="demo-row-icon demo-row-icon-in">
                    <ArrowDownLeft className="h-3 w-3" />
                  </span>
                  <span className="demo-row-lines">
                    <span className="demo-row-title">Salary credited</span>
                    <span className="demo-row-sub">Today, 09:00</span>
                  </span>
                  <span className="demo-row-amt demo-row-amt-in">+4,500.00</span>
                </div>
              </div>
            </div>

            {/* Page 2 — Healthcare */}
            <div className="demo-page demo-page-health" style={{ animationDelay: "6s" }}>
              <div className="demo-appt">
                <span className="demo-appt-icon">
                  <CalendarDays className="h-4 w-4" />
                </span>
                <span className="demo-row-lines">
                  <span className="demo-appt-label">Next appointment</span>
                  <span className="demo-appt-title">Klinik Kesihatan Seksyen 7</span>
                  <span className="demo-appt-sub">Tue, 10:30 AM · Slot A-12</span>
                </span>
              </div>

              <div className="demo-tiles">
                <div className="demo-tile">
                  <HeartPulse className="h-4 w-4" />
                  <span className="demo-tile-value">72</span>
                  <span className="demo-tile-label">bpm resting</span>
                </div>
                <div className="demo-tile">
                  <Activity className="h-4 w-4" />
                  <span className="demo-tile-value">8,412</span>
                  <span className="demo-tile-label">steps today</span>
                </div>
              </div>

              <div className="demo-list">
                <div className="demo-row">
                  <span className="demo-row-icon demo-row-icon-in">
                    <ShieldCheck className="h-3 w-3" />
                  </span>
                  <span className="demo-row-lines">
                    <span className="demo-row-title">Vaccination complete</span>
                    <span className="demo-row-sub">Digital cert issued</span>
                  </span>
                  <span className="demo-row-amt demo-row-amt-in">
                    <Check className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </div>

            {/* Page 3 — Smart appliances */}
            <div className="demo-page demo-page-home" style={{ animationDelay: "12s" }}>
              <div className="demo-appt">
                <span className="demo-appt-icon">
                  <Wind className="h-4 w-4" />
                </span>
                <span className="demo-row-lines">
                  <span className="demo-appt-label">My devices</span>
                  <span className="demo-appt-title">Living room</span>
                  <span className="demo-appt-sub">2 devices online</span>
                </span>
              </div>

              <div className="demo-tiles">
                <div className="demo-tile demo-tile-on">
                  <Fan className="h-4 w-4 demo-spin" />
                  <span className="demo-tile-value">Fan</span>
                  <span className="demo-tile-label">Speed 3 · On</span>
                  <span className="demo-toggle demo-toggle-on" />
                </div>
                <div className="demo-tile">
                  <Wind className="h-4 w-4" />
                  <span className="demo-tile-value">Purifier</span>
                  <span className="demo-tile-label">Auto · Off</span>
                  <span className="demo-toggle" />
                </div>
              </div>

              <div className="demo-list">
                <div className="demo-row">
                  <span className="demo-row-icon demo-row-icon-in">
                    <ShieldCheck className="h-3 w-3" />
                  </span>
                  <span className="demo-row-lines">
                    <span className="demo-row-title">Warranty registered</span>
                    <span className="demo-row-sub">Valid until 2027</span>
                  </span>
                  <span className="demo-row-amt demo-row-amt-in">
                    <Check className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="demo-dots" aria-hidden="true">
            <span className="demo-dot" />
            <span className="demo-dot" style={{ animationDelay: "6s" }} />
            <span className="demo-dot" style={{ animationDelay: "12s" }} />
          </div>
        </div>

        <div className="demo-notif">
          <span className="demo-notif-icon">
            <Check className="h-3 w-3" />
          </span>
          <span className="demo-notif-lines">
            <span className="demo-notif-title">Payment received</span>
            <span className="demo-notif-sub">+RM 1,200.00 · just now</span>
          </span>
        </div>
      </div>

      <div className="hero-card hero-card-build">
        <span className="hero-card-icon">
          <Rocket className="h-3.5 w-3.5" />
        </span>
        <span className="hero-card-lines">
          <span className="hero-card-title">flutter build ipa ✓</span>
          <span className="hero-card-sub">Release signed &amp; shipped</span>
        </span>
      </div>

      <div className="hero-card hero-card-stores">
        <span className="hero-card-icon">
          <AppleIcon className="h-3.5 w-3.5" />
        </span>
        <span className="hero-card-icon">
          <AndroidIcon className="h-3.5 w-3.5" />
        </span>
        <span className="hero-card-lines">
          <span className="hero-card-title">6 apps live</span>
          <span className="hero-card-sub">App Store · Play Store</span>
        </span>
      </div>

      <span className="float-chip float-chip-1">Flutter</span>
      <span className="float-chip float-chip-2">BLoC</span>
      <span className="float-chip float-chip-3">REST APIs</span>
    </div>
  )
}

function SiteNav({ activeSection }: { activeSection: string }) {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl" aria-label="Primary navigation">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-10">
        <div className="flex h-14 items-center gap-3 sm:h-16 sm:gap-4">
          <a
            href="#top"
            onClick={(event) => handleAnchorClick(event, "top")}
            className="shrink-0 text-sm font-semibold tracking-tight text-foreground"
          >
            Danial Haikal
          </a>

          <div className="ml-auto hidden items-center gap-1 sm:flex">
            {NAV.map((item) => (
              <NavLink key={item.id} item={item} active={activeSection === item.id} />
            ))}
            <a
              href="/resume"
              target="_blank"
              rel="noreferrer noopener"
              className="ml-2 inline-flex h-9 shrink-0 items-center gap-2 rounded-lg border border-accent/40 px-3.5 text-xs font-semibold text-accent transition hover:bg-accent/10"
            >
              <FileText className="h-3.5 w-3.5" aria-hidden="true" />
              Resume
            </a>
          </div>

          <a
            href="/resume"
            target="_blank"
            rel="noreferrer noopener"
            className="ml-auto grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-accent/40 text-accent sm:hidden"
            aria-label="Open resume"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="-mx-1 flex justify-between gap-1 pb-2 sm:hidden">
          {NAV.map((item) => (
            <NavLink key={item.id} item={item} active={activeSection === item.id} compact />
          ))}
        </div>
      </div>
    </nav>
  )
}

function NavLink({
  item,
  active,
  compact = false,
}: {
  item: (typeof NAV)[number]
  active: boolean
  compact?: boolean
}) {
  return (
    <a
      href={`#${item.id}`}
      onClick={(event) => handleAnchorClick(event, item.id)}
      aria-current={active ? "page" : undefined}
      className={cn(
        "shrink-0 rounded-md font-medium transition",
        compact ? "flex min-h-11 flex-1 items-center justify-center px-1 text-xs" : "px-3 py-2 text-sm",
        active ? "bg-accent/10 text-accent" : "text-muted-foreground hover:text-foreground",
      )}
    >
      {item.label}
    </a>
  )
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="reveal mb-9">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <div className="mt-3 flex items-center gap-6">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>
        <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" aria-hidden="true" />
      </div>
    </div>
  )
}

function ProjectBanner({ project }: { project: Project }) {
  const style = { "--project-accent": project.accent } as CSSProperties

  return (
    <div className="project-banner" style={style}>
      <span className="project-banner-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.logo} alt={`${project.title} logo`} loading="lazy" />
      </span>
      <span className="rounded-full border border-border/80 bg-background/60 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground backdrop-blur">
        {project.domain}
      </span>
    </div>
  )
}

function ProjectLinkButton({ link, title }: { link: ProjectLink; title: string }) {
  if (link.kind === "internal") {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <span
            tabIndex={0}
            className="inline-flex min-h-11 items-center gap-1.5 rounded-md border border-border bg-background/40 px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-wide text-muted-foreground sm:min-h-0"
          >
            <Lock className="h-3 w-3" aria-hidden="true" />
            Internal
          </span>
        </TooltipTrigger>
        <TooltipContent side="top">Internal banking system — no public link</TooltipContent>
      </Tooltip>
    )
  }

  const meta =
    link.kind === "android"
      ? { label: "Google Play", icon: <AndroidIcon className="h-4 w-4" /> }
      : link.kind === "ios"
        ? { label: "App Store", icon: <AppleIcon className="h-4 w-4" /> }
        : { label: "Website", icon: <ExternalLink className="h-3.5 w-3.5" /> }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={link.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${title} on ${meta.label}`}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-background/40 text-muted-foreground transition hover:border-accent/50 hover:text-accent sm:h-8 sm:w-8"
        >
          {meta.icon}
        </a>
      </TooltipTrigger>
      <TooltipContent side="top">{meta.label}</TooltipContent>
    </Tooltip>
  )
}

function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.523 15.341a1.108 1.108 0 1 1 .001-2.217 1.108 1.108 0 0 1-.001 2.217m-11.046 0a1.108 1.108 0 1 1 .001-2.217 1.108 1.108 0 0 1-.001 2.217m11.443-6.02 2.21-3.827a.46.46 0 1 0-.797-.46l-2.236 3.873A13.78 13.78 0 0 0 12 7.527c-2.064 0-4.011.439-5.097.88L4.667 4.534a.46.46 0 1 0-.797.46l2.21 3.827C2.292 10.86.5 14.082.5 17.5h23c0-3.418-1.792-6.64-5.58-8.179" />
    </svg>
  )
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16.365 1.43c0 1.14-.467 2.234-1.227 3.034-.84.88-2.224 1.56-3.342 1.474-.14-1.105.41-2.27 1.18-3.05.853-.86 2.297-1.534 3.39-1.458zM20.5 17.293c-.55 1.27-.81 1.84-1.515 2.96-.985 1.56-2.376 3.5-4.099 3.515-1.534.014-1.927-1.005-4.005-.992-2.078.012-2.514 1.013-4.05.999-1.722-.014-3.04-1.766-4.026-3.327C-.04 16.252-.296 11.43 1.515 8.79c1.286-1.876 3.318-2.973 5.227-2.973 1.943 0 3.165 1.07 4.77 1.07 1.557 0 2.506-1.072 4.752-1.072 1.7 0 3.5.926 4.78 2.527-4.197 2.301-3.514 8.31.456 8.95z" />
    </svg>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
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

function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    let frame = 0
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0
      bar.style.transform = `scaleX(${progress})`
      frame = 0
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return <div ref={barRef} className="scroll-progress" aria-hidden="true" />
}

function useActiveSection() {
  const [active, setActive] = useState("")

  useEffect(() => {
    const sections = ["hero", ...NAV.map((item) => item.id)]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id === "hero" ? "" : entry.target.id)
        })
      },
      { rootMargin: "-38% 0px -54% 0px", threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return active
}

function handleAnchorClick(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
  event.preventDefault()
  scrollToSection(id)
}

function scrollToSection(id: string) {
  const element = document.getElementById(id)
  if (!element) return

  const navHeight = document.querySelector("nav")?.getBoundingClientRect().height ?? 64
  const top = id === "top" ? 0 : element.getBoundingClientRect().top + window.scrollY - (navHeight + 16)
  window.scrollTo({ top, behavior: "smooth" })
  history.replaceState(null, "", id === "top" ? window.location.pathname : `#${id}`)
}
