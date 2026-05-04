export function About() {
  return (
    <section
      id="about"
      aria-label="About me"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-foreground">
          About
        </h2>
      </div>

      <div className="space-y-4 leading-relaxed text-muted-foreground">
        <p>
          I&apos;m a software engineer passionate about building distributed systems and
          developer tools that make hard problems feel approachable. My favorite work lives at the
          intersection of platform engineering and product, crafting infrastructure that empowers
          teams to ship faster without compromising reliability.
        </p>
        <p>
          Currently, I&apos;m a Senior Engineer at{" "}
          <span className="font-medium text-foreground">Northwind Labs</span>, leading the platform
          team that powers our real-time data pipeline serving over 4B events per day. I focus on
          observability, fault tolerance, and the quiet design decisions that keep systems healthy
          at 3am.
        </p>
        <p>
          In the past, I&apos;ve had the opportunity to develop software across a variety of
          settings — from{" "}
          <span className="font-medium text-foreground">early-stage startups</span> and{" "}
          <span className="font-medium text-foreground">Series C scale-ups</span> to{" "}
          <span className="font-medium text-foreground">large enterprise teams</span> at Fortune
          500 companies. I&apos;ve shipped everything from low-level Rust services to consumer
          iOS apps with millions of installs.
        </p>
        <p>
          Outside of work, you&apos;ll find me contributing to open source, mentoring junior
          engineers, writing about systems design, or out on long trail runs trying to clear my
          head between deploys.
        </p>
      </div>
    </section>
  )
}
