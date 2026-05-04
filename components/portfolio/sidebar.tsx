"use client"

import { useEffect, useState } from "react"
import { Mail, FileText, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
] as const

export function Sidebar() {
  const [active, setActive] = useState<string>("about")

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => el !== null,
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (!target) return
    const top = target.getBoundingClientRect().top + window.scrollY - 24
    window.scrollTo({ top, behavior: "smooth" })
    history.replaceState(null, "", `#${id}`)
    setActive(id)
  }

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Danial Haikal
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">
          Senior Software Developer
        </h2>
        <p className="mt-4 max-w-xs text-pretty leading-relaxed text-muted-foreground">
          Mobile team lead building Flutter, Dart, React, and production apps for banking,
          healthcare, and enterprise teams.
        </p>

        {/* Desktop nav */}
        <nav aria-label="In-page navigation" className="mt-16 hidden lg:block">
          <ul className="space-y-2">
            {NAV.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="group flex items-center py-3"
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span
                      className={cn(
                        "mr-4 h-px transition-all duration-300",
                        isActive
                          ? "w-16 bg-foreground"
                          : "w-8 bg-muted-foreground/40 group-hover:w-16 group-hover:bg-foreground",
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={cn(
                        "font-mono text-xs font-bold uppercase tracking-widest transition-colors",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground",
                      )}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <ul
        className="mt-12 ml-1 flex items-center gap-5 text-muted-foreground"
        aria-label="Contact links"
      >
        <li>
          <a
            href="mailto:danhaikalwork@gmail.com"
            className="block transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            href="tel:+60177565622"
            className="block transition-colors hover:text-foreground"
            aria-label="Phone"
          >
            <Phone className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="block transition-colors hover:text-foreground"
            aria-label="Resume (opens in a new tab)"
          >
            <FileText className="h-5 w-5" />
          </a>
        </li>
      </ul>
    </header>
  )
}
