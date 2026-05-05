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
          I&apos;m a senior software developer with 5+ years of experience building production
          mobile apps across banking, healthcare, and enterprise projects. My core work is in{" "}
          <span className="font-medium text-foreground">Flutter</span>,{" "}
          <span className="font-medium text-foreground">Dart</span>, RESTful APIs, app releases,
          and cross-functional delivery.
        </p>
        <p>
          Currently, I&apos;m a Senior Software Developer at{" "}
          <span className="font-medium text-foreground">Mandrill Tech Sdn. Bhd.</span>, developing
          and maintaining features across a banking mobile app and a Flutter Web banking website. I
          contribute across mobile apps, web portals, and backend work, taking features from
          requirement clarification through implementation, testing support, bug fixing, and release
          preparation.
        </p>
        <p>
          Before that, I worked with{" "}
          <span className="font-medium text-foreground">HAYAT Technologies</span> as an Assistant
          Team Lead and Flutter Developer, including work on SELANGKAH, a public healthcare
          platform used during the COVID-19 pandemic. That role sharpened my experience in sprint
          planning, progress tracking, developer support, and stakeholder collaboration.
        </p>
        <p>
          I like work where mobile craft meets delivery discipline: clean state management, reliable
          API integrations, practical testing support, and steady communication with QA, backend,
          frontend, design, product, and stakeholder teams.
        </p>
      </div>
    </section>
  )
}
