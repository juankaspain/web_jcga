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
    <section
      className="border-b theme-transition"
      style={{
        borderColor: 'var(--border-subtle)',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
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
            className="group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--surface-primary)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-accent)'
              e.currentTarget.style.boxShadow = 'var(--shadow-glow-sm)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-subtle)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {/* Subtle glow on hover */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
              style={{ background: 'linear-gradient(135deg, var(--accent-subtle), transparent)' }}
            />
            
            <div className="relative">
              <div
                className="text-xs font-medium uppercase tracking-[0.2em]"
                style={{ color: 'var(--text-tertiary)' }}
              >
                {stat.label}
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span
                  className="text-3xl font-bold text-gradient-accent"
                >
                  {stat.value}
                </span>
                {stat.unit && (
                  <span
                    className="text-lg"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {stat.unit}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
