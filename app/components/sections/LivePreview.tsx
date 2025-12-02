export function LivePreviewSection() {
  return (
    <section className="mt-24 space-y-6">
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
          See components in action
        </h2>
        <p className="text-base text-slate-400 max-w-2xl mx-auto">
          Browse our component library and see how each component looks and
          works. Click any component to copy its code directly.
        </p>
      </div>
      <div className="flex justify-center">
        <a
          href="#components"
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 px-6 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-900"
        >
          Browse Components
        </a>
      </div>
      <div className="relative mt-8 rounded-2xl border border-slate-800 bg-slate-950/80 p-8 overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-slate-900 via-slate-950 to-black rounded-xl flex items-center justify-center">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-4 py-2 text-sm text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
              Component Preview
            </div>
            <p className="text-sm text-slate-500">
              Scroll down to see all available components
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

