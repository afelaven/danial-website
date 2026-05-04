"use client"

import { useEffect, useRef } from "react"

export function SpotlightBg() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      el.style.setProperty("--mouse-x", `${clientX}px`)
      el.style.setProperty("--mouse-y", `${clientY}px`)
    }

    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="spotlight pointer-events-none fixed inset-0 z-30 transition duration-300"
    />
  )
}
