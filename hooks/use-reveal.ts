"use client"

import { useEffect } from "react"

export function useReveal(deps: ReadonlyArray<unknown> = []) {
  useEffect(() => {
    if (typeof window === "undefined") return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const els = document.querySelectorAll<HTMLElement>(".reveal:not(.in)")

    if (reduced) {
      els.forEach((el) => el.classList.add("in"))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in")
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
