"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      className="border-b theme-transition"
      style={{
        borderColor: 'var(--border-subtle)',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
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
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle at 50% 50%, var(--accent-subtle), transparent 70%)',
              }}
            />
            <div className="relative">
              <p
                className="text-sm font-medium mb-1"
                style={{ color: 'var(--text-secondary)' }}
              >
                {stat.label}
              </p>
              <p className="text-3xl font-bold" style={{ color: 'var(--accent-primary)' }}>
                {stat.value}{' '}
                {stat.unit && (
                  <span className="text-lg font-normal" style={{ color: 'var(--text-tertiary)' }}>
                    {stat.unit}
                  </span>
                )}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
