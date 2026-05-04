export function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
      <p className="leading-relaxed">
        Built with{" "}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noreferrer noopener"
          className="font-medium text-foreground underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noreferrer noopener"
          className="font-medium text-foreground underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          Tailwind CSS
        </a>
        , deployed on{" "}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noreferrer noopener"
          className="font-medium text-foreground underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          Vercel
        </a>
        . Type set in Inter and JetBrains Mono.
      </p>
    </footer>
  )
}
