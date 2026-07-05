"use client"

import { useEffect, useRef } from "react"

// Max pupil travel in viewBox units — keeps pupils inside the glasses lenses.
const MAX_X = 5
const MAX_Y = 3.5

export function HeroAvatar({ className }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null)
  const leftEyeRef = useRef<SVGCircleElement>(null)
  const rightEyeRef = useRef<SVGCircleElement>(null)

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const onMove = (e: MouseEvent) => {
      const svg = svgRef.current
      const left = leftEyeRef.current
      const right = rightEyeRef.current
      if (!svg || !left || !right) return
      const rect = svg.getBoundingClientRect()
      const dx = e.clientX - (rect.left + rect.width / 2)
      const dy = e.clientY - (rect.top + rect.height / 2)
      const dist = Math.hypot(dx, dy) || 1
      const pull = Math.min(1, dist / 160)
      const t = `translate(${(dx / dist) * MAX_X * pull}px, ${(dy / dist) * MAX_Y * pull}px)`
      left.style.transform = t
      right.style.transform = t
    }

    const onLeave = () => {
      if (leftEyeRef.current) leftEyeRef.current.style.transform = ""
      if (rightEyeRef.current) rightEyeRef.current.style.transform = ""
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    document.documentElement.addEventListener("mouseleave", onLeave)
    return () => {
      window.removeEventListener("mousemove", onMove)
      document.documentElement.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustrated portrait of Danial Haikal"
      width={112}
      height={112}
      className={className}
    >
      <defs>
        <radialGradient id="av-bg" cx="30%" cy="18%" r="95%">
          <stop offset="0%" stopColor="#16323a" />
          <stop offset="55%" stopColor="#101c2c" />
          <stop offset="100%" stopColor="#0b1420" />
        </radialGradient>
        <linearGradient id="av-shirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#28394d" />
          <stop offset="100%" stopColor="#1b2838" />
        </linearGradient>
        <linearGradient id="av-hair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#20242c" />
          <stop offset="100%" stopColor="#101318" />
        </linearGradient>
        <clipPath id="av-circle">
          <circle cx="120" cy="120" r="120" />
        </clipPath>
      </defs>

      <g clipPath="url(#av-circle)">
        {/* background */}
        <rect width="240" height="240" fill="url(#av-bg)" />
        <circle cx="120" cy="120" r="119" fill="none" stroke="#5eead4" strokeOpacity="0.14" strokeWidth="2" />

        {/* shoulders / shirt */}
        <path
          d="M120 158 C88 158 62 176 54 204 L54 240 L186 240 L186 204 C178 176 152 158 120 158 Z"
          fill="url(#av-shirt)"
        />
        {/* collar accent */}
        <path
          d="M98 165 L120 186 L142 165"
          fill="none"
          stroke="#5eead4"
          strokeOpacity="0.55"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* neck */}
        <path
          d="M106 138 L134 138 L134 164 C134 172 126 176 120 176 C114 176 106 172 106 164 Z"
          fill="#b97f52"
        />
        <path d="M106 144 C110 152 130 152 134 144 L134 150 C128 156 112 156 106 150 Z" fill="#9c6842" opacity="0.7" />

        {/* ears */}
        <ellipse cx="74" cy="106" rx="7" ry="11" fill="#b97f52" />
        <ellipse cx="166" cy="106" rx="7" ry="11" fill="#b97f52" />
        <ellipse cx="74.5" cy="106" rx="3" ry="5.5" fill="#9c6842" opacity="0.75" />
        <ellipse cx="165.5" cy="106" rx="3" ry="5.5" fill="#9c6842" opacity="0.75" />

        {/* face */}
        <path
          d="M78 88 C78 60 96 46 120 46 C144 46 162 60 162 88 L162 108 C162 134 144 152 120 152 C96 152 78 134 78 108 Z"
          fill="#c68b59"
        />

        {/* hair: neat short crop with side fade */}
        <path
          d="M74 100 C72 62 94 40 120 40 C146 40 168 62 166 100 L162 100 C162 84 158 76 152 70 C142 78 100 80 88 68 C82 74 78 84 78 100 Z"
          fill="url(#av-hair)"
        />
        <path d="M88 68 C100 80 142 78 152 70 C146 60 134 54 120 54 C106 54 94 58 88 68 Z" fill="#181c23" />

        {/* brows */}
        <path d="M88 96 C94 92 104 92 109 95" fill="none" stroke="#2a2e36" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M131 95 C136 92 146 92 152 96" fill="none" stroke="#2a2e36" strokeWidth="4.5" strokeLinecap="round" />

        {/* glasses */}
        <g stroke="#22303e" strokeWidth="4" fill="rgba(94,234,212,0.06)">
          <rect x="82" y="100" width="34" height="26" rx="9" />
          <rect x="124" y="100" width="34" height="26" rx="9" />
        </g>
        <path d="M116 110 L124 110" stroke="#22303e" strokeWidth="4" strokeLinecap="round" />
        <path d="M82 108 L74 104 M158 108 L166 104" stroke="#22303e" strokeWidth="4" strokeLinecap="round" />
        {/* lens glint */}
        <path d="M88 106 L96 120" stroke="#5eead4" strokeOpacity="0.35" strokeWidth="3" strokeLinecap="round" />
        <path d="M130 106 L138 120" stroke="#5eead4" strokeOpacity="0.35" strokeWidth="3" strokeLinecap="round" />

        {/* eyes — pupils translated toward the cursor */}
        <circle ref={leftEyeRef} cx="99" cy="113" r="3.6" fill="#1c1f26" />
        <circle ref={rightEyeRef} cx="141" cy="113" r="3.6" fill="#1c1f26" />

        {/* nose */}
        <path
          d="M120 112 C119 120 117 124 115 127 C117 130 123 130 125 127"
          fill="none"
          stroke="#a06b43"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* smile */}
        <path d="M106 136 C112 142 128 142 134 136" fill="none" stroke="#8a5a36" strokeWidth="3.5" strokeLinecap="round" />

        {/* facial hair: light neat stubble accent */}
        <path
          d="M100 146 C108 151 132 151 140 146"
          fill="none"
          stroke="#2a2e36"
          strokeOpacity="0.25"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}
