export function WorkflowSection() {
  return (
    <section className="mt-20 grid gap-10 border-t border-slate-800 pt-12 md:grid-cols-3">
      <div className="space-y-4 md:col-span-1">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
          How to use Loki UI
        </h2>
        <p className="text-base leading-relaxed text-slate-400">
          It's simple: browse, copy, paste, and customize. No installation
          required, no dependencies to manage.
        </p>
      </div>
      <div className="grid gap-5 text-sm text-slate-200 md:col-span-2 md:grid-cols-3">
        <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
            01 · Browse
          </p>
          <p className="text-sm leading-relaxed text-slate-300">
            Explore our component library. Each component shows a live preview
            and includes the full source code.
          </p>
        </div>
        <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
            02 · Copy
          </p>
          <p className="text-sm leading-relaxed text-slate-300">
            Click the copy button to get the component code. Paste it directly
            into your Next.js project—no installation needed.
          </p>
        </div>
        <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
            03 · Customize
          </p>
          <p className="text-sm leading-relaxed text-slate-300">
            Modify the Tailwind classes to match your brand. All components are
            built with standard Tailwind utilities, so customization is easy.
          </p>
        </div>
      </div>
    </section>
  );
}


