"use client";

const components = [
  {
    name: "Command Palette",
    description: "Keyboard-first global actions with fuzzy search and sections.",
    badge: "CommandK",
  },
  {
    name: "Dock Layout",
    description: "Snap panes, inspectors and timelines into a fluid dock.",
    badge: "Layout",
  },
  {
    name: "Metric Cards",
    description: "Animated KPI cards with deltas, trend lines and spark charts.",
    badge: "Analytics",
  },
];

export function ComponentsGridSection() {
  return (
    <section
      id="components"
      className="fade-in-up fade-in-delay-3 mt-16 space-y-6 md:mt-20"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
            Browse our component library
          </h2>
          <p className="mt-2 text-base text-slate-400">
            Copy any component code directly into your project and customize as
            needed
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {components.map((component) => (
          <article
            key={component.name}
            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-[0.9rem] text-slate-200 shadow-[0_0_26px_rgba(15,23,42,0.9)] transition-transform duration-300 hover:-translate-y-1 hover:border-slate-500 hover:shadow-[0_0_42px_rgba(15,23,42,1)]"
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -right-12 top-0 h-32 w-32 rotate-12 bg-slate-700/40 blur-2xl" />
            </div>
            <div className="relative flex items-start justify-between gap-4">
              <div className="space-y-1.5">
                <span className="inline-flex items-center rounded-full bg-slate-900 px-2.5 py-0.5 text-[11px] font-medium text-slate-200">
                  {component.badge}
                </span>
                <h3 className="text-[0.95rem] font-semibold">{component.name}</h3>
                <p className="text-xs text-slate-400">
                  {component.description}
                </p>
              </div>
              <div className="mt-1 h-10 w-10 rounded-xl bg-gradient-to-br from-slate-100/80 to-slate-400/40 shadow-[0_0_24px_rgba(15,23,42,1)] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
            </div>
            <div className="relative mt-4 flex items-center justify-between text-xs text-slate-400">
              <span>Copy code &amp; customize</span>
              <button
                onClick={() => {
                  // Copy component code to clipboard
                  void navigator.clipboard.writeText(
                    `// ${component.name} component code`
                  );
                }}
                className="inline-flex items-center gap-1 text-slate-200 hover:text-emerald-300 transition"
              >
                Copy code
                <span className="translate-y-[0.5px] text-xs">⧉</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
        <div className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
          <span>100% free forever</span>
        </div>
        <div className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
          <span>MIT licensed</span>
        </div>
        <div className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
          <span>No dependencies</span>
        </div>
        <div className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
          <span>Copy & paste ready</span>
        </div>
      </div>
    </section>
  );
}


