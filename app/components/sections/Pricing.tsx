export function PricingSection() {
  return (
    <section className="mt-24 space-y-8">
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
          Download and get started quickly with your project
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-50">
                Pro Version
              </h3>
              <p className="text-sm text-slate-400 mt-1">Recommended</p>
            </div>
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
              Best Value
            </span>
          </div>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <span>4 Dashboards</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <span>100+ UI Elements</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <span>45+ Page Templates</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <span>8+ Authentication Pages</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Email Support</span>
            </li>
          </ul>
          <a
            href="/register"
            className="block w-full text-center rounded-full bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            View Pricing
          </a>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-8 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-slate-50">
              Free Version
            </h3>
            <p className="text-sm text-slate-400 mt-1">Basic</p>
          </div>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <span className="text-slate-600">✓</span>
              <span>1 Dashboard</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-600">✓</span>
              <span>10+ UI Elements</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-600">✓</span>
              <span>3 Page Templates</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-600">✓</span>
              <span>2 Authentication Pages</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-600">✓</span>
              <span>Community Support</span>
            </li>
          </ul>
          <a
            href="/register"
            className="block w-full text-center rounded-full border border-slate-700 bg-slate-950/80 px-6 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-900"
          >
            Free Download
          </a>
        </div>
      </div>
    </section>
  );
}

