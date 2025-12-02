export function AIBuilderSection() {
  const builders = [
    {
      title: "AI Form Builder",
      description:
        "Generate modern looking tailwind forms with validation in one click.",
      action: "Generate Form",
    },
    {
      title: "AI Table Builder",
      description:
        "Generate smart, customizable tables in seconds based on tenstack.",
      action: "Generate Table",
    },
    {
      title: "AI Chart Builder",
      description:
        "Create data-driven Apex charts in seconds with our AI Chart Builder.",
      action: "Generate Chart",
    },
  ];

  return (
    <section className="mt-24 space-y-8">
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
          Generate tables, forms & charts in seconds with our AI builder
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {builders.map((builder, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 space-y-4"
          >
            <h3 className="text-lg font-semibold text-slate-100">
              {builder.title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {builder.description}
            </p>
            <button className="w-full rounded-full border border-slate-700 bg-slate-950/80 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-slate-900">
              {builder.action}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

