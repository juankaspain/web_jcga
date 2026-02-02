"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem, hoverLift } from "@/lib/animations/variants"

type ImpactStatsProps = {
  locale?: "es" | "en"
}

const stats = {
  es: [
    { label: "Experiencia", value: "+15", unit: "años" },
    { label: "Clientes Impactados", value: "Millones", unit: "" },
    { label: "Certificaciones", value: "+140", unit: "" },
    { label: "Tamaño de Equipo", value: "12", unit: "personas" }
  ],
  en: [
    { label: "Experience", value: "+15", unit: "years" },
    { label: "Customers Impacted", value: "Millions", unit: "" },
    { label: "Certifications", value: "+140", unit: "" },
    { label: "Team Size", value: "12", unit: "people" }
  ]
}

export function ImpactStats({ locale = "es" }: ImpactStatsProps) {
  const items = stats[locale]

  return (
    <section className="border-b border-slate-800 bg-slate-950">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="mx-auto grid max-w-6xl gap-6 px-4 py-12 md:grid-cols-4"
      >
        {items.map((stat, index) => (
          <motion.div
            key={`stat-${index}`}
            variants={staggerItem}
            whileHover={hoverLift}
            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-colors hover:border-cyan-500/30"
          >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            
            <div className="relative">
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                {stat.label}
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-cyan-400">
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="text-lg text-slate-300">{stat.unit}</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
