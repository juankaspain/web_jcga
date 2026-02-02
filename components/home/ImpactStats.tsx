export function ImpactStats() {
  const stats = [
    { label: "Experience", value: "+15 years" },
    { label: "Customers Impacted", value: "Millions" },
    { label: "Certifications", value: "+140" },
    { label: "Team Size", value: "Up to 12 people" }
  ]

  return (
    <section className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm"
          >
            <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
              {stat.label}
            </div>
            <div className="mt-2 text-xl font-semibold text-cyan-300">
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
