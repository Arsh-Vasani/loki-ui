export function FeaturesSection() {
  const features = [
    {
      icon: "📋",
      title: "Copy & paste ready",
      description:
        "Every component is ready to copy directly into your project. No installation, no package dependencies—just pure React and Tailwind code.",
    },
    {
      icon: "🎨",
      title: "Fully customizable",
      description:
        "All components are built with Tailwind CSS, making it easy to customize colors, spacing, and styles to match your brand perfectly.",
    },
    {
      icon: "🌙",
      title: "Dark mode first",
      description:
        "Designed specifically for dark interfaces. Every component is optimized for low-light, high-focus environments like dashboards and admin panels.",
    },
    {
      icon: "⚡",
      title: "Lightweight & fast",
      description:
        "No heavy dependencies or runtime overhead. Just the code you need, when you need it. Tree-shakeable and performant.",
    },
    {
      icon: "🔓",
      title: "100% open source",
      description:
        "MIT licensed and completely free. Use in personal or commercial projects without restrictions. Contribute back if you'd like!",
    },
  ];

  return (
    <section className="mt-24 space-y-8">
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
          Why choose Loki UI components
        </h2>
        <p className="text-base text-slate-400 max-w-2xl mx-auto">
          Everything you need to build beautiful dark interfaces, without the
          complexity.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-6 space-y-3 transition hover:border-slate-700 hover:bg-slate-950"
          >
            <div className="text-3xl">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-slate-100">
              {feature.title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

