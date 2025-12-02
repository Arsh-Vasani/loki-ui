export function TestimonialsSection() {
  return (
    <section className="mt-24 space-y-8">
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
          See what developers & designers like you are saying
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 space-y-4">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-semibold text-slate-50">4.96</div>
            <div className="flex gap-0.5 text-emerald-300">
              ★★★★★
            </div>
          </div>
          <p className="text-sm text-slate-400">
            We've delivered 56+ projects that help companies generate real
            results.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-slate-800" />
            <div>
              <div className="text-sm font-medium text-slate-100">
                Alex Morgan
              </div>
              <div className="text-xs text-slate-500">Product Designer</div>
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            "Amazing service. Have been working with them for a long time now
            and the work quality is top notch and delivery is as promised."
          </p>
          <div className="flex gap-0.5 text-emerald-300 text-xs">★★★★★</div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-slate-800" />
            <div>
              <div className="text-sm font-medium text-slate-100">
                Sarah Chen
              </div>
              <div className="text-xs text-slate-500">Frontend Lead</div>
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            "I recently discovered Loki UI, and it has quickly become my
            go-to resource for high-quality UI kits and templates."
          </p>
          <div className="flex gap-0.5 text-emerald-300 text-xs">★★★★★</div>
        </div>
      </div>
    </section>
  );
}

