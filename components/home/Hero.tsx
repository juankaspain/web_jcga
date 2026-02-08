"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import { staggerContainer, staggerItem } from "@/lib/animations/variants"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"
import {
  ArrowRight,
  Briefcase,
  ChartLine,
  Users,
  Trophy,
  Clock
} from "@phosphor-icons/react"

type HeroProps = {
  locale?: "es" | "en"
}

const copy = {
  es: {
    kicker: "Senior Technical Lead @ Santander Digital Services",
    h1Line1: "Arquitecto soluciones de pago",
    h1Line2: "que escalan a millones de usuarios",
    description: "Diseño y lidero arquitecturas cloud (Azure/Oracle) para sistemas de pago SEPA e internacionales en banca digital. Mi trabajo impacta a 5M+ usuarios procesando 2M transacciones/día con SLA 99.95%.",
    ctaPrimary: "Caso de estudio: Plataforma SEPA",
    ctaSecondary: "Mi expertise técnico",
    stats: [
      { value: "15+", label: "Años experiencia", icon: Clock },
      { value: "140+", label: "Certificaciones", icon: Trophy },
      { value: "12", label: "Equipo actual", icon: Users },
      { value: "99.95%", label: "SLA Achieved", icon: ChartLine }
    ]
  },
  en: {
    kicker: "Senior Technical Lead @ Santander Digital Services",
    h1Line1: "I architect payment solutions",
    h1Line2: "that scale to millions of users",
    description: "I design and lead cloud architectures (Azure/Oracle) for SEPA and international payment systems in digital banking. My work impacts 5M+ users processing 2M transactions/day with 99.95% SLA.",
    ctaPrimary: "Case study: SEPA Platform",
    ctaSecondary: "My technical expertise",
    stats: [
      { value: "15+", label: "Years experience", icon: Clock },
      { value: "140+", label: "Certifications", icon: Trophy },
      { value: "12", label: "Current team", icon: Users },
      { value: "99.95%", label: "SLA Achieved", icon: ChartLine }
    ]
  }
}

export function Hero({ locale = "es" }: HeroProps) {
  const t = copy[locale]
  const projectsLink = locale === "en" ? "/en/projects/sepa-platform" : "/projects/sepa-platform"
  const expertiseLink = locale === "en" ? "/en/skills" : "/skills"
  const prefersReducedMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden theme-transition"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Mesh gradient background */}
      <div className="mesh-gradient" />

      {/* Professional grid pattern overlay */}
      <div className="absolute inset-0 bg-grid" />

      {/* Subtle radial gradient for depth */}
      <div className="absolute inset-0 bg-gradient-radial" />

      {/* Content */}
      <div className="relative container-main py-32">
        <motion.div
          key="hero-content"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          variants={!prefersReducedMotion ? staggerContainer : undefined}
          className="max-w-5xl"
        >

          {/* Professional Kicker */}
          <motion.div
            variants={!prefersReducedMotion ? staggerItem : undefined}
            className="flex items-center gap-2 mb-4"
          >
            <Briefcase
              size={16}
              weight="duotone"
              style={{ color: 'var(--accent-primary)' }}
            />
            <p
              className="text-sm uppercase tracking-wider font-semibold"
              style={{ color: 'var(--accent-primary)' }}
            >
              {t.kicker}
            </p>
          </motion.div>

          {/* H1: Value proposition */}
          <motion.h1
            variants={!prefersReducedMotion ? staggerItem : undefined}
            className="mb-6 leading-tight"
          >
            <span
              className="block mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              {t.h1Line1}
            </span>
            <span className="block text-gradient-accent">{t.h1Line2}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={!prefersReducedMotion ? staggerItem : undefined}
            className="text-xl max-w-3xl mb-8 leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={!prefersReducedMotion ? staggerItem : undefined}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link
              href={projectsLink}
              className="group inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              style={{
                background: 'var(--accent-gradient)',
                color: 'var(--text-on-accent)',
                boxShadow: 'var(--shadow-glow-sm)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-glow)' }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-glow-sm)' }}
            >
              {t.ctaPrimary}
              <ArrowRight
                size={20}
                weight="bold"
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
            <Link
              href={expertiseLink}
              className="inline-flex items-center gap-2 border-2 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              style={{
                borderColor: 'var(--border-default)',
                color: 'var(--text-secondary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-primary)'
                e.currentTarget.style.color = 'var(--text-primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-default)'
                e.currentTarget.style.color = 'var(--text-secondary)'
              }}
            >
              {t.ctaSecondary}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={!prefersReducedMotion ? staggerItem : undefined}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl"
          >
            {t.stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={mounted ? (prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }) : { opacity: 1 }}
                  animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1 }}
                  transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <IconComponent
                      size={16}
                      weight="duotone"
                      style={{ color: 'var(--accent-primary)' }}
                      className="transition-colors duration-300"
                    />
                    <div className="text-3xl md:text-4xl font-bold text-gradient-accent">
                      {stat.value}
                    </div>
                  </div>
                  <div
                    className="text-xs uppercase tracking-wide"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={mounted ? (prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }) : { opacity: 1 }}
        animate={mounted ? { opacity: 1 } : { opacity: 1 }}
        transition={prefersReducedMotion ? { duration: 0 } : { delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={prefersReducedMotion ? {} : { duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2 transition-colors duration-300"
          style={{ borderColor: 'var(--border-default)' }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)' }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-default)' }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: 'var(--accent-primary)' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
