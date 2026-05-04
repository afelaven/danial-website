"use client"

import { useEffect, useRef, useState } from "react"

type Line = {
  prompt?: boolean
  cmd?: string
  out?: string
  cls?: string
}

const SCRIPT: Line[] = [
  { prompt: true, cmd: "whoami" },
  { out: "danial_haikal" },
  { prompt: true, cmd: 'echo "$ROLE"' },
  { out: "Senior Software Developer · Flutter / Dart / React" },
  { prompt: true, cmd: "cat ./focus.txt" },
  { out: "Mobile · Banking · Healthcare · Fintech · Enterprise" },
  { prompt: true, cmd: "./run portfolio.sh" },
  { out: "Loading portfolio…", cls: "text-accent" },
]

const STORAGE_KEY = "portfolio-intro-shown"

export function IntroTerminal({ onDone }: { onDone: () => void }) {
  const [lineIdx, setLineIdx] = useState(0)
  const [typed, setTyped] = useState("")
  const [fading, setFading] = useState(false)
  const finished = useRef(false)

  const finish = () => {
    if (finished.current) return
    finished.current = true
    setFading(true)
    setTimeout(() => {
      sessionStorage.setItem(STORAGE_KEY, "1")
      document.body.classList.remove("intro-active")
      onDone()
    }, 600)
  }

  useEffect(() => {
    document.body.classList.add("intro-active")

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced || sessionStorage.getItem(STORAGE_KEY)) {
      finish()
      return
    }

    const onKey = () => finish()
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (finished.current || lineIdx >= SCRIPT.length) {
      if (lineIdx >= SCRIPT.length) {
        const t = setTimeout(finish, 700)
        return () => clearTimeout(t)
      }
      return
    }

    const line = SCRIPT[lineIdx]
    const text = line.cmd ?? line.out ?? ""

    if (typed.length < text.length) {
      const speed = line.cmd ? 55 : 18
      const t = setTimeout(() => setTyped(text.slice(0, typed.length + 1)), speed)
      return () => clearTimeout(t)
    }

    const hold = line.cmd ? 240 : 360
    const t = setTimeout(() => {
      setLineIdx((i) => i + 1)
      setTyped("")
    }, hold)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typed, lineIdx])

  const completed = SCRIPT.slice(0, lineIdx)
  const current = SCRIPT[lineIdx]

  return (
    <div className={`intro-screen${fading ? " fade-out" : ""}`} role="dialog" aria-label="Intro terminal">
      <button type="button" onClick={finish} className="intro-skip" aria-label="Skip intro">
        Skip ›
      </button>

      <div className="intro-terminal">
        <div className="intro-bar">
          <span className="intro-dot" style={{ background: "#ff5f56" }} />
          <span className="intro-dot" style={{ background: "#ffbd2e" }} />
          <span className="intro-dot" style={{ background: "#27c93f" }} />
          <span className="intro-title">danial@portfolio — zsh</span>
        </div>
        <div className="intro-body">
          {completed.map((line, i) => (
            <div key={i} className="intro-line">
              {line.prompt ? (
                <>
                  <Prompt />
                  <span className="intro-cmd">{line.cmd}</span>
                </>
              ) : (
                <span className={line.cls ?? "intro-out"}>{line.out}</span>
              )}
            </div>
          ))}
          {current && (
            <div className="intro-line">
              {current.prompt ? (
                <>
                  <Prompt />
                  <span className="intro-cmd">{typed}</span>
                  <span className="intro-caret" />
                </>
              ) : (
                <span className={current.cls ?? "intro-out"}>
                  {typed}
                  <span className="intro-caret" />
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="intro-hint">
        press <kbd>any key</kbd> to skip
      </div>
    </div>
  )
}

function Prompt() {
  return (
    <span className="intro-prompt">
      <span className="text-emerald-300">danial</span>
      <span className="text-slate-400">@</span>
      <span className="text-accent">portfolio</span>
      <span className="text-slate-400">:~$ </span>
    </span>
  )
}
