export function PreviewPanel() {
  return (
    <section className="fade-in-up fade-in-delay-2">
      <div className="glass-panel emerald-ring relative overflow-hidden rounded-2xl p-5 sm:p-6">
        <div className="relative space-y-5">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
              Preview: Command palette
            </span>
            <span className="rounded-full bg-slate-900/80 px-2.5 py-1 text-[11px] text-slate-200">
              ⌘K to open
            </span>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950/80">
            <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-950/90 px-3 py-2 text-[11px] text-slate-400">
              <span className="flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-600/80" />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-500/70" />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-400/60" />
              </span>
              <span className="truncate">
                `loki-ui` / `components/command-palette.tsx`
              </span>
            </div>

            <div className="grid gap-4 p-3 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)] sm:p-4">
              <div className="space-y-2">
                <div className="relative overflow-hidden rounded-lg border border-slate-800 bg-slate-950/80 p-2.5 text-xs text-slate-200">
                  <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-900/95 to-transparent" />
                  <pre className="max-h-48 overflow-hidden text-[11px] leading-relaxed sm:text-[12px]">
                    <code>
                      {`<CommandPalette>
  <Command.Input placeholder="Jump to anything…" />
  <Command.List>
    <Command.Group heading="Navigation">
      <Command.Item icon="🌌">Dashboards</Command.Item>
      <Command.Item icon="📊">Analytics</Command.Item>
      <Command.Item icon="⚙️">Settings</Command.Item>
    </Command.Group>
  </Command.List>
</CommandPalette>`}
                    </code>
                  </pre>
                </div>
                <p className="text-xs text-slate-400">
                  Tiny surface area, fully typed, wired into your design tokens.
                </p>
              </div>

              <div className="space-y-2">
                <div className="relative overflow-hidden rounded-lg border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-3.5 shadow-[0_0_40px_rgba(15,23,42,0.8)]">
                  <div className="mb-2 flex items-center justify-between text-xs text-slate-200">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-4 w-4 rounded-lg bg-slate-200/90" />
                      Palette
                    </span>
                    <span className="rounded-full bg-slate-950/80 px-2.5 py-0.5 text-[11px] text-slate-300">
                      Instant search
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between rounded-lg bg-slate-950/80 px-2.5 py-1.5 text-slate-100">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="text-xs">🌌</span> Dashboards
                      </span>
                      <span className="rounded bg-slate-900/80 px-1.5 py-0.5 text-[11px] text-slate-200">
                        ↵ open
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-slate-300">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="text-xs">📊</span> Analytics
                      </span>
                      <span className="text-[11px] text-slate-500">A</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-slate-300">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="text-xs">⚙️</span> Settings
                      </span>
                      <span className="text-[11px] text-slate-500">S</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-400">
                  Motion tuned for dark UIs – subtle springs, no harsh flashes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


