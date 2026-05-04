import { Sidebar } from "@/components/portfolio/sidebar"
import { About } from "@/components/portfolio/about"
import { Experience } from "@/components/portfolio/experience"
import { Projects } from "@/components/portfolio/projects"
import { Footer } from "@/components/portfolio/footer"
import { SpotlightBg } from "@/components/portfolio/spotlight-bg"

export default function Page() {
  return (
    <div className="relative mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <SpotlightBg />
      <a
        href="#content"
        className="absolute left-0 top-0 z-50 -translate-y-full bg-accent px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-accent-foreground focus:translate-y-0"
      >
        Skip to content
      </a>

      <div className="lg:flex lg:justify-between lg:gap-4">
        <Sidebar />

        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <About />
          <Experience />
          <Projects />
          <Footer />
        </main>
      </div>
    </div>
  )
}
