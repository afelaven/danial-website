import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ExternalLink, FileText } from "lucide-react"

const RESUME_PDF = "/danial-resume.pdf"
const RESUME_VIEWER_SRC = `${RESUME_PDF}#toolbar=1&navpanes=0&view=FitH`

export const metadata: Metadata = {
  title: "Resume - Danial Haikal",
  description: "Resume for Danial Haikal, Senior Software Developer.",
}

export default function ResumePage() {
  return (
    <main className="portfolio-shell relative isolate min-h-svh overflow-hidden bg-background text-foreground">
      <div className="portfolio-grid-bg" aria-hidden="true" />
      <div className="portfolio-vignette" aria-hidden="true" />

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

      <section className="relative z-10 mx-auto flex h-[calc(100svh-4rem)] max-w-6xl flex-col px-3 py-3 sm:h-[calc(100svh-4.5rem)] sm:px-8 sm:py-5 lg:px-10">
        <div className="min-h-0 flex-1 overflow-hidden rounded-md border border-border/80 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.28)]">
          <iframe
            src={RESUME_VIEWER_SRC}
            title="Danial Haikal resume PDF"
            className="h-full w-full bg-white"
          />
        </div>

        <a
          href={RESUME_PDF}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-3 inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border bg-background/80 px-3 font-mono text-xs font-bold text-muted-foreground transition hover:border-accent hover:text-accent sm:hidden"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          Open PDF
        </a>
      </section>
    </main>
  )
}
