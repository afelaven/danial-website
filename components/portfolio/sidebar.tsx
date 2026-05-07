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
    const isMobile = window.matchMedia("(max-width: 1023px)").matches
    const offset = isMobile ? 72 : 24
    const top = target.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: "smooth" })
    history.replaceState(null, "", `#${id}`)
    setActive(id)
  }

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <nav
        aria-label="In-page navigation"
        className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md lg:hidden"
      >
        <ul className="mx-auto flex max-w-screen-xl items-center justify-around px-4">
          {NAV.map((item) => {
            const isActive = active === item.id
            return (
              <li key={item.id} className="flex-1">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={cn(
                    "relative block py-4 text-center font-mono text-xs font-bold uppercase tracking-widest transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-4 bottom-0 h-px transition-colors",
                      isActive ? "bg-foreground" : "bg-transparent",
                    )}
                    aria-hidden="true"
                  />
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      <div>
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Danial Haikal
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">
          Senior Software Developer
        </h2>
        <p className="mt-4 max-w-xs text-pretty leading-relaxed text-muted-foreground">
          Mobile team lead shipping Flutter, React Native, and React web apps for banking,
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
            href="https://wa.me/60177565622"
            target="_blank"
            rel="noreferrer noopener"
            className="block transition-colors hover:text-foreground"
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="/resume"
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
