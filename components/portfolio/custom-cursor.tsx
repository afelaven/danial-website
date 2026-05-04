"use client"

import { useEffect } from "react"

const HOVER_SELECTOR = 'a, button, [role="tab"], .portfolio-card, [data-cursor="hover"]'

export function CustomCursor() {
  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(pointer: coarse)").matches) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const ring = document.createElement("div")
    ring.className = "cursor-ring"
    const dot = document.createElement("div")
    dot.className = "cursor-dot"
    document.body.append(ring, dot)
    document.body.classList.add("custom-cursor-on")

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`
    }

    const tick = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(tick)
    }

    const isInteractive = (el: EventTarget | null) =>
      el instanceof Element && el.closest(HOVER_SELECTOR) !== null

    const onOver = (e: MouseEvent) => {
      if (isInteractive(e.target)) ring.classList.add("hover")
    }
    const onOut = (e: MouseEvent) => {
      if (isInteractive(e.target)) ring.classList.remove("hover")
    }
    const onLeave = () => {
      ring.style.opacity = "0"
      dot.style.opacity = "0"
    }
    const onEnter = () => {
      ring.style.opacity = ""
      dot.style.opacity = ""
    }
    const onDown = () => ring.classList.add("press")
    const onUp = () => ring.classList.remove("press")

    window.addEventListener("mousemove", onMove)
    document.addEventListener("mouseover", onOver)
    document.addEventListener("mouseout", onOut)
    document.documentElement.addEventListener("mouseleave", onLeave)
    document.documentElement.addEventListener("mouseenter", onEnter)
    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onUp)
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseover", onOver)
      document.removeEventListener("mouseout", onOut)
      document.documentElement.removeEventListener("mouseleave", onLeave)
      document.documentElement.removeEventListener("mouseenter", onEnter)
      window.removeEventListener("mousedown", onDown)
      window.removeEventListener("mouseup", onUp)
      ring.remove()
      dot.remove()
      document.body.classList.remove("custom-cursor-on")
    }
  }, [])

  return null
}
