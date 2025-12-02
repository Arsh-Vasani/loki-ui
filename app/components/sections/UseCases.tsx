export function UseCasesSection() {
  return (
    <section className="mt-18 space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl text-center">
          Perfect for dark-mode projects
        </h2>
        <p className="mt-2 max-w-2xl mx-auto text-base leading-relaxed text-slate-400 text-center">
          Use our components to build admin panels, internal tools, analytics
          dashboards, and any dark-mode interface. Copy what you need, customize
          to match your brand.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-slate-500">
            Analytics SaaS
          </p>
          <p className="text-xs leading-relaxed text-slate-300">
            Wire up metric cards, time-series panels and filters without
            reinventing the shell for every new surface.
          </p>
        </div>
        <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-slate-500">
            Internal tools
          </p>
          <p className="text-xs leading-relaxed text-slate-300">
            Give ops and support pros the same level of polish as your end-user
            product, with shortcuts and drill-downs baked in.
          </p>
        </div>
        <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-slate-500">
            Trading &amp; terminals
          </p>
          <p className="text-xs leading-relaxed text-slate-300">
            Compose dense layouts, tickers and stream panes that stay legible in
            low-light, high-focus environments.
          </p>
        </div>
      </div>
    </section>
  );
}