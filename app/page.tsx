"use client"

import { useEffect, useState } from "react"
import { RedesignedPortfolio } from "@/components/portfolio/redesigned-portfolio"
import { IntroTerminal } from "@/components/portfolio/intro-terminal"
import { CustomCursor } from "@/components/portfolio/custom-cursor"

export default function Page() {
  const [showIntro, setShowIntro] = useState<boolean | null>(null)

  useEffect(() => {
    const seen = sessionStorage.getItem("portfolio-intro-shown")
    setShowIntro(!seen)
  }, [])

  if (showIntro === null) return null

  return (
    <>
      <CustomCursor />
      {showIntro && <IntroTerminal onDone={() => setShowIntro(false)} />}
      <RedesignedPortfolio />
    </>
  )
}
