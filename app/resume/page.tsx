import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, FileText } from "lucide-react"

const RESUME_PDF = "/danial-resume.pdf"
const RESUME_PREVIEW = "/danial-resume-preview.png"

export const metadata: Metadata = {
  title: "Resume - Danial Haikal",
  description: "Resume for Danial Haikal, Senior Software Developer.",
}

export default function ResumePage() {
  return (
    <main className="relative isolate min-h-svh overflow-hidden bg-background text-foreground">
      <div className="portfolio-grid-bg" aria-hidden="true" />

      <header className="relative z-10 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:h-[4.5rem] sm:px-8 lg:px-10">
          <Link
            href="/"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground transition hover:border-accent hover:text-accent"
            aria-label="Back to portfolio"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </Link>

          <div className="min-w-0">
            <p className="truncate font-mono text-xs uppercase text-accent">Danial Haikal</p>
            <h1 className="truncate text-base font-semibold text-foreground sm:text-lg">Resume</h1>
          </div>

          <a
            href={RESUME_PDF}
            target="_blank"
            rel="noreferrer noopener"
            className="ml-auto inline-flex h-9 shrink-0 items-center gap-2 rounded-md border border-accent/50 px-3 font-mono text-xs font-bold text-accent transition hover:bg-accent/10"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Open PDF</span>
          </a>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-3 py-3 sm:px-8 sm:py-5 lg:px-10">
        <div className="mx-auto max-w-[54rem] overflow-hidden rounded-md border border-border/80 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.28)]">
          <Image
            src={RESUME_PREVIEW}
            alt="Danial Haikal resume"
            width={1272}
            height={1800}
            priority
            className="h-auto w-full"
          />
        </div>

        <a
          href={RESUME_PDF}
          target="_blank"
          rel="noreferrer noopener"
          className="mx-auto mt-3 flex h-10 max-w-[54rem] items-center justify-center gap-2 rounded-md border border-border bg-background/80 px-3 font-mono text-xs font-bold text-muted-foreground transition hover:border-accent hover:text-accent"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          Open PDF
        </a>
      </section>
    </main>
  )
}
