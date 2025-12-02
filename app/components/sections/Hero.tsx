import Link from "next/link";

export function HeroSection() {
  return (
    <section className="space-y-12 fade-in-up fade-in-delay-1">
      {/* Hot pill */}
      <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-5 py-2 text-sm font-medium text-slate-200 w-fit mx-auto justify-center">
        <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs uppercase tracking-[0.16em] text-emerald-300">
          Open Source
        </span>
        <span className="h-2 w-2 rounded-full bg-emerald-400/80 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
        Free UI components for dark-mode interfaces
      </div>

      {/* Headline + subcopy */}
      <div className="space-y-6">
        <h1 className="text-balance text-5xl font-semibold tracking-tight text-slate-50 sm:text-6xl lg:text-7xl text-center">
          Copy, paste, customize
          <span className="block bg-gradient-to-r from-slate-100 via-slate-300 to-emerald-300 bg-clip-text text-transparent">
            Dark UI components for Next.js
          </span>
        </h1>
        <p className="text-balance text-lg text-slate-300 sm:text-xl leading-relaxed text-center">
          Loki UI is a collection of free, open-source React components built
          with Next.js and Tailwind. Copy any component into your project,
          customize it to match your brand, and ship faster. No dependencies,
          no subscriptions, just pure components.
        </p>
      </div>

      {/* Primary + secondary CTAs */}
      <div className="flex flex-wrap items-center gap-4 justify-center">
        <a
          href="#components"
          className="group inline-flex items-center gap-2 rounded-full bg-slate-50 px-6 py-3.5 text-base font-semibold text-slate-950 shadow-[0_0_28px_rgba(15,23,42,0.9)] transition hover:bg-slate-200"
        >
          Browse Components
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </a>
        <a
          href="https://github.com/Arsh-Vasani/loki-ui"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 px-6 py-3.5 text-sm font-medium text-slate-200 transition hover:bg-slate-900"
        >
          View on GitHub
        </a>
      </div>

      {/* Trust row */}
      <div className="flex items-center gap-6 text-base text-slate-400 justify-center">
        <span>100% free and open source</span>
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
        <span>MIT licensed</span>
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
        <span>No sign-up required</span>
      </div>
    </section>
  );
}