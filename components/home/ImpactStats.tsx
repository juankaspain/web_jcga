"use client"

import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { staggerContainer, staggerItem, hoverLift } from "@/lib/animations/variants"

type ImpactStatsProps = {
  locale?: "es" | "en"
}

const stats = {
  es: [
    { label: "Experiencia", value: "+15", unit: "años" },
    { label: "Clientes Impactados", value: "Millones", unit: "" },
    { label: "Certificaciones", value: "+140", unit: "" },
    { label: "Tamaño de Equipo", value: "12", unit: "personas" },
  ],
  en: [
    { label: "Experience", value: "+15", unit: "years" },
    { label: "Customers Impacted", value: "Millions", unit: "" },
    { label: "Certifications", value: "+140", unit: "" },
    { label: "Team Size", value: "12", unit: "people" },
  ],
}

export function ImpactStats({ locale = "es" }: ImpactStatsProps) {
  const items = stats[locale]
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  // Native IntersectionObserver instead of framer-motion useInView
  // Fixes whileInView/useInView bug in Next.js 15 + React 19 + Framer Motion 11
  useEffect(() => {
    const element = ref.current
    if (!element) return

    const fallbackTimer = setTimeout(() => setIsInView(true), 2000)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          clearTimeout(fallbackTimer)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(element)

    return () => {
      clearTimeout(fallbackTimer)
      observer.disconnect()
    }
  }, [])

  return (
    <section className="border-b theme-transition border-[var(--border-subtle)] bg-[var(--bg-primary)]">
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
            className="group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 border-[var(--border-subtle)] bg-[var(--surface-primary)] hover:border-[var(--border-accent)] hover:shadow-[var(--shadow-glow-sm)]"
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[var(--accent-subtle)]" />

            <div className="relative">
              <p className="text-sm font-medium uppercase tracking-wider text-[var(--text-tertiary)]">
                {stat.label}
              </p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                {stat.value}{" "}
                {stat.unit && (
                  <span className="text-lg font-normal text-[var(--text-secondary)]">
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
