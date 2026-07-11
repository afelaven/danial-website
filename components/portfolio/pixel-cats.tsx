"use client"

import { useEffect, useRef } from "react"

import {
  type FrameKey,
  type PaletteName,
  renderFrames,
  SPRITE_H,
  SPRITE_W,
} from "./cat-sprites"

type CatState = "idle" | "walk" | "run" | "sit" | "sleep" | "stretch" | "alert"

type AnimFrame = { key: FrameKey; ms: number }

const ANIMS: Record<CatState, AnimFrame[]> = {
  idle: [
    { key: "stand", ms: 2200 },
    { key: "stand-blink", ms: 140 },
    { key: "stand", ms: 1500 },
    { key: "stand-tailup", ms: 800 },
  ],
  walk: [
    { key: "walk-1", ms: 150 },
    { key: "walk-pass", ms: 150 },
    { key: "walk-3", ms: 150 },
    { key: "walk-pass", ms: 150 },
  ],
  run: [
    { key: "run-1", ms: 110 },
    { key: "run-2", ms: 110 },
  ],
  sit: [
    { key: "sit-wrap", ms: 2300 },
    { key: "sit-blink", ms: 140 },
    { key: "sit-wrap", ms: 1300 },
    { key: "sit-tailup", ms: 650 },
    { key: "sit-wrap", ms: 900 },
    { key: "sit-tailup", ms: 650 },
  ],
  sleep: [
    { key: "sleep-1", ms: 850 },
    { key: "sleep-2", ms: 850 },
  ],
  stretch: [{ key: "stretch", ms: 1300 }],
  alert: [
    { key: "stand-tailup", ms: 600 },
    { key: "stand", ms: 600 },
  ],
}

type Personality = {
  palette: PaletteName
  scale: number
  smallScale: number
  startX: number // fraction of viewport width
  startState: CatState
  walkSpeed: number
  runSpeed: number
  next: Record<CatState, [CatState, number][]>
  dur: Record<CatState, [number, number]>
}

const PERSONALITIES: Personality[] = [
  {
    // Orange: restless explorer.
    palette: "orange",
    scale: 3,
    smallScale: 2,
    startX: 0.16,
    startState: "walk",
    walkSpeed: 30,
    runSpeed: 100,
    next: {
      idle: [["walk", 0.5], ["sit", 0.22], ["run", 0.13], ["idle", 0.15]],
      walk: [["idle", 0.35], ["walk", 0.25], ["run", 0.2], ["sit", 0.2]],
      run: [["walk", 0.55], ["idle", 0.45]],
      sit: [["idle", 0.4], ["sleep", 0.3], ["sit", 0.3]],
      sleep: [["stretch", 1]],
      stretch: [["idle", 1]],
      alert: [["idle", 1]],
    },
    dur: {
      idle: [1600, 3600],
      walk: [2400, 6000],
      run: [900, 1900],
      sit: [3500, 8000],
      sleep: [9000, 18000],
      stretch: [1300, 1300],
      alert: [600, 600],
    },
  },
  {
    // Tabby: professional napper.
    palette: "tabby",
    scale: 3,
    smallScale: 2,
    startX: 0.68,
    startState: "sit",
    walkSpeed: 22,
    runSpeed: 80,
    next: {
      idle: [["sit", 0.45], ["walk", 0.35], ["idle", 0.15], ["run", 0.05]],
      walk: [["sit", 0.4], ["idle", 0.35], ["walk", 0.15], ["run", 0.1]],
      run: [["walk", 0.5], ["idle", 0.5]],
      sit: [["sleep", 0.45], ["sit", 0.3], ["idle", 0.25]],
      sleep: [["stretch", 1]],
      stretch: [["idle", 1]],
      alert: [["idle", 1]],
    },
    dur: {
      idle: [2000, 4200],
      walk: [2200, 5200],
      run: [800, 1600],
      sit: [4500, 10000],
      sleep: [12000, 22000],
      stretch: [1300, 1300],
      alert: [600, 600],
    },
  },
]

const EDGE_MARGIN = 12

function rand(min: number, max: number) {
  return min + Math.random() * (max - min)
}

function pickNext(options: [CatState, number][]): CatState {
  let roll = Math.random()
  for (const [state, weight] of options) {
    roll -= weight
    if (roll <= 0) return state
  }
  return options[0][0]
}

class Cat {
  private frames: Record<FrameKey, HTMLCanvasElement>
  private ctx: CanvasRenderingContext2D | null
  private width: number
  private height: number

  private x: number
  private facing: 1 | -1 = 1
  private state: CatState
  private stateLeft: number
  private frameIndex = 0
  private frameLeft: number
  private drawnKey: FrameKey | null = null
  private stateBeforeAlert: CatState = "idle"
  private zzzLeft = 0

  constructor(
    private wrap: HTMLDivElement,
    private canvas: HTMLCanvasElement,
    private p: Personality,
    scale: number,
  ) {
    this.frames = renderFrames(p.palette, scale)
    this.width = SPRITE_W * scale
    this.height = SPRITE_H * scale
    canvas.width = this.width
    canvas.height = this.height
    this.ctx = canvas.getContext("2d")

    this.x = window.innerWidth * p.startX
    this.state = p.startState
    this.stateLeft = rand(...p.dur[this.state])
    this.frameLeft = ANIMS[this.state][0].ms
    this.clampX()
    this.apply()
  }

  get hitCenter() {
    return this.x + this.width / 2
  }

  get sleeping() {
    return this.state === "sleep"
  }

  private maxX() {
    return document.documentElement.clientWidth - this.width - EDGE_MARGIN
  }

  private clampX() {
    this.x = Math.min(Math.max(this.x, EDGE_MARGIN), this.maxX())
  }

  private setState(state: CatState) {
    if (state === "walk" || state === "run") {
      if (this.x < EDGE_MARGIN + 80) this.facing = 1
      else if (this.x > this.maxX() - 80) this.facing = -1
      else if (Math.random() < 0.3) this.facing = this.facing === 1 ? -1 : 1
    }
    this.state = state
    this.stateLeft = rand(...this.p.dur[state])
    this.frameIndex = 0
    this.frameLeft = ANIMS[state][0].ms
  }

  startle() {
    // Cursor poked a sleeping cat: wake up with a stretch.
    if (this.state === "sleep") this.setState("stretch")
  }

  watchCursor(cursorX: number | null) {
    if (cursorX === null) {
      if (this.state === "alert") this.setState(this.stateBeforeAlert)
      return
    }
    if (this.state === "alert") {
      this.facing = cursorX >= this.hitCenter ? 1 : -1
      this.stateLeft = 500
      return
    }
    if (this.state === "idle" || this.state === "walk" || this.state === "sit") {
      this.stateBeforeAlert = this.state === "walk" ? "idle" : this.state
      this.setState("alert")
      this.facing = cursorX >= this.hitCenter ? 1 : -1
    }
  }

  pet() {
    this.spawnFloat("♥", "cat-float-heart", 3)
    this.wrap.classList.remove("cat-pet")
    // Force reflow so a rapid second pet restarts the hop animation.
    void this.wrap.offsetWidth
    this.wrap.classList.add("cat-pet")
    if (this.state === "sleep") this.setState("stretch")
    else if (this.state === "alert") this.stateLeft = 500
  }

  private spawnFloat(text: string, className: string, count = 1) {
    for (let i = 0; i < count; i++) {
      const span = document.createElement("span")
      span.className = `cat-float ${className}`
      span.textContent = text
      span.style.left = `${this.width * 0.25 + Math.random() * this.width * 0.5}px`
      span.style.animationDelay = `${i * 160}ms`
      span.addEventListener("animationend", () => span.remove())
      this.wrap.appendChild(span)
    }
  }

  step(dt: number) {
    // Movement.
    if (this.state === "walk" || this.state === "run") {
      const speed = this.state === "walk" ? this.p.walkSpeed : this.p.runSpeed
      this.x += (speed * dt * this.facing) / 1000
      if (this.x <= EDGE_MARGIN) {
        this.x = EDGE_MARGIN
        this.facing = 1
      } else if (this.x >= this.maxX()) {
        this.x = this.maxX()
        this.facing = -1
      }
    }

    // Zzz particles while asleep.
    if (this.state === "sleep") {
      this.zzzLeft -= dt
      if (this.zzzLeft <= 0) {
        this.spawnFloat("z", "cat-float-zzz")
        this.zzzLeft = rand(1400, 2200)
      }
    }

    // State timer.
    this.stateLeft -= dt
    if (this.stateLeft <= 0) {
      this.setState(pickNext(this.p.next[this.state]))
    }

    // Frame timer.
    this.frameLeft -= dt
    if (this.frameLeft <= 0) {
      const anim = ANIMS[this.state]
      this.frameIndex = (this.frameIndex + 1) % anim.length
      this.frameLeft = anim[this.frameIndex].ms
    }

    this.apply()
  }

  onResize() {
    this.clampX()
    this.apply()
  }

  drawStatic(key: FrameKey) {
    this.ctx?.drawImage(this.frames[key], 0, 0)
    this.wrap.style.transform = `translate3d(${Math.round(this.x)}px, 0, 0)`
  }

  private apply() {
    this.wrap.style.transform = `translate3d(${Math.round(this.x)}px, 0, 0)`
    this.canvas.style.setProperty("--cat-facing", String(this.facing))
    const key = ANIMS[this.state][this.frameIndex].key
    if (key !== this.drawnKey && this.ctx) {
      this.ctx.clearRect(0, 0, this.width, this.height)
      this.ctx.drawImage(this.frames[key], 0, 0)
      this.drawnKey = key
    }
  }
}

export function PixelCats() {
  const wrapRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)]
  const canvasRefs = [useRef<HTMLCanvasElement>(null), useRef<HTMLCanvasElement>(null)]

  useEffect(() => {
    const small = window.matchMedia("(max-width: 768px), (pointer: coarse)").matches
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const cleanups: (() => void)[] = []

    const cats = PERSONALITIES.map((p, i) => {
      const wrap = wrapRefs[i].current
      const canvas = canvasRefs[i].current
      if (!wrap || !canvas) return null
      const cat = new Cat(wrap, canvas, p, small ? p.smallScale : p.scale)
      if (!reducedMotion) {
        const onPet = () => cat.pet()
        canvas.addEventListener("pointerdown", onPet)
        cleanups.push(() => canvas.removeEventListener("pointerdown", onPet))
      }
      return cat
    }).filter((cat): cat is Cat => cat !== null)

    if (cats.length === 0) return

    if (reducedMotion) {
      cats.forEach((cat) => cat.drawStatic("sit-wrap"))
      return
    }

    let cursor: { x: number; y: number } | null = null
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "mouse") cursor = { x: event.x, y: event.y }
    }
    const onResize = () => cats.forEach((cat) => cat.onResize())

    let raf = 0
    let last = performance.now()
    const loop = (now: number) => {
      const dt = Math.min(now - last, 100)
      last = now

      const nearFloor = cursor && cursor.y > window.innerHeight - 190
      for (const cat of cats) {
        if (nearFloor && cursor) {
          const distance = Math.abs(cursor.x - cat.hitCenter)
          if (cat.sleeping && distance < 46) cat.startle()
          else cat.watchCursor(distance < 130 ? cursor.x : null)
        } else {
          cat.watchCursor(null)
        }
        cat.step(dt)
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    window.addEventListener("pointermove", onPointerMove, { passive: true })
    window.addEventListener("resize", onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("resize", onResize)
      cleanups.forEach((fn) => fn())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="pixel-cats" aria-hidden="true">
      {PERSONALITIES.map((p, i) => (
        <div key={p.palette} ref={wrapRefs[i]} className="pixel-cat">
          <canvas ref={canvasRefs[i]} />
        </div>
      ))}
    </div>
  )
}
