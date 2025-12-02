"use client";

import { RequireAuth } from "../auth/RequireAuth";

const snippets = [
  {
    name: "Metric row",
    description: "KPIs with trend, delta and badge, tuned for dark surfaces.",
    code: `<MetricRow>
  <Metric label="MRR" value="$82.4k" delta="+12.8%" tone="positive" />
  <Metric label="Churn" value="2.3%" delta="-0.4%" tone="neutral" />
  <Metric label="Latency" value="142ms" delta="-23ms" tone="positive" />
</MetricRow>`,
  },
  {
    name: "Dock layout",
    description: "Resizable panes with snapped regions for timelines and logs.",
    code: `<DockLayout>
  <Dock.Region id="main" defaultSize="4fr" />
  <Dock.Region id="inspector" side="right" defaultSize="1.5fr" />
  <Dock.Region id="timeline" side="bottom" defaultSize="1.2fr" />
</DockLayout>`,
  },
  {
    name: "Shell header",
    description: "App shell header with breadcrumbs and ambient glow.",
    code: `<Shell.Header>
  <Shell.Breadcrumbs segments={segments} />
  <Shell.Actions>
    <Button icon={<Lightning />}>Run</Button>
    <Button variant="ghost">Share</Button>
  </Shell.Actions>
</Shell.Header>`,
  },
];

export default function LibraryPage() {
  return (
    <RequireAuth>
      <div className="space-y-6">
        <header className="space-y-2">
          <h1 className="text-xl font-semibold text-slate-50 sm:text-2xl">
            Your component library
          </h1>
          <p className="max-w-xl text-sm text-slate-400">
            Explore Loki UI patterns and copy-paste snippets into your Next.js
            app. Everything is built for dark mode first with emerald accents.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {snippets.map((snippet) => (
            <article
              key={snippet.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-emerald-500/30 bg-slate-950/80 p-4 text-sm text-slate-200 shadow-[0_0_26px_rgba(8,47,73,0.9)] transition-transform duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-[0_0_42px_rgba(16,185,129,0.8)]"
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <div>
                  <h2 className="text-sm font-semibold">{snippet.name}</h2>
                  <p className="mt-1 text-[11px] text-slate-400">
                    {snippet.description}
                  </p>
                </div>
                <span className="mt-0.5 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] text-emerald-200">
                  React · Tailwind
                </span>
              </div>

              <div className="relative flex-1 overflow-hidden rounded-xl border border-emerald-500/35 bg-slate-950/90 p-2 text-[11px] text-emerald-100">
                <pre className="max-h-40 overflow-auto text-[10px] leading-relaxed">
                  <code>{snippet.code}</code>
                </pre>
              </div>

              <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400">
                <span>Optimised for dark dashboards</span>
                <button
                  type="button"
                  onClick={() => {
                    void navigator.clipboard.writeText(snippet.code);
                  }}
                  className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] text-emerald-200 transition hover:bg-slate-800"
                >
                  <span className="text-[11px]">⧉</span> Copy
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </RequireAuth>
  );
}


