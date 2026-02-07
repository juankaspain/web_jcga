"use client"

import { motion } from "framer-motion"
  import { useState } from "react"
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
    description: (
      <>
        Diseño y lidero arquitecturas cloud (Azure/Oracle) para{" "}
        <strong className="text-white font-semibold">sistemas de pago SEPA e internacionales</strong> en banca digital.
        Mi trabajo impacta a <strong className="text-gold-400 font-semibold">5M+ usuarios</strong> procesando{" "}
        <strong className="text-gold-400 font-semibold">2M transacciones/día</strong> con SLA 99.95%.
      </>
    ),
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
    description: (
      <>
        I design and lead cloud architectures (Azure/Oracle) for{" "}
        <strong className="text-white font-semibold">SEPA and international payment systems</strong> in digital banking.
        My work impacts <strong className="text-gold-400 font-semibold">5M+ users</strong> processing{" "}
        <strong className="text-gold-400 font-semibold">2M transactions/day</strong> with 99.95% SLA.
      </>
    ),
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
  

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Simplified premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />

      {/* Professional grid pattern overlay */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Subtle radial gradient for depth */}
      <div className="absolute inset-0 bg-gradient-radial" />

      {/* Content */}
              <div className="relative container-professional py-32">
        <motion.div
                      key="hero-content"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      variants={!prefersReducedMotion ? staggerContainer : undefined}
          className="max-w-5xl"
        >

          {/* Professional Kicker - Authority signal */}
          <motion.div
                        variants={!prefersReducedMotion ? staggerItem : undefined}
            className="flex items-center gap-2 mb-4"
          >
            <Briefcase size={16} weight="duotone" className="text-gold-500" />
            <p className="text-sm uppercase tracking-wider text-gold-400 font-semibold">
              {t.kicker}
            </p>
          </motion.div>

          {/* H1: Value proposition (problem/solution) */}
          <motion.h1
                        variants={!prefersReducedMotion ? staggerItem : undefined}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block text-white mb-2">{t.h1Line1}</span>
            <span className="block text-gradient-fintech">{t.h1Line2}</span>
          </motion.h1>

          {/* Description with concrete quantifiable data */}
          <motion.p
                        variants={!prefersReducedMotion ? staggerItem : undefined}
            className="text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed"
          >
            {t.description}
          </motion.p>

          {/* Specific outcome-oriented CTAs */}
          <motion.div
                        variants={!prefersReducedMotion ? staggerItem : undefined}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link
              href={projectsLink}
              className="group inline-flex items-center gap-2 bg-electric-500 hover:bg-electric-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-electric-500/25 hover:shadow-electric-500/40"
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
              className="inline-flex items-center gap-2 border-2 border-slate-700 hover:border-electric-500/50 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              {t.ctaSecondary}
            </Link>
          </motion.div>

          {/* Stats inline - integrated, not competing */}
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
                      className="text-electric-500 group-hover:text-electric-400 transition-colors duration-300"
                    />
                    <div className="text-3xl md:text-4xl font-bold text-gradient-electric">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - minimal */}
      <motion.div
        initial={mounted ? (prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }) : { opacity: 1 }}
        animate={mounted ? { opacity: 1 } : { opacity: 1 }}
        transition={prefersReducedMotion ? { duration: 0 } : { delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={prefersReducedMotion ? {} : { duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center p-2 hover:border-electric-500/50 transition-colors duration-300"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-electric-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
