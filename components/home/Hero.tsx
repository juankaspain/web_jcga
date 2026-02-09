"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { staggerContainer, staggerItem } from "@/lib/animations/variants"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"
import { TypingText } from "@/components/ui/TypingText"
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
    greeting: "Hola, soy Juan Carlos...",
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
    greeting: "Hi, I'm Juan Carlos...",
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
  const heroRef = useRef<HTMLElement>(null)

  // Parallax: decorative elements move at different speeds during scroll
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  const meshY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const radialY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50])

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden theme-transition bg-[var(--bg-primary)]"
    >
      {/* Mesh gradient background — parallax layer (slowest) */}
      <motion.div
        className="mesh-gradient"
        style={mounted && !prefersReducedMotion ? { y: meshY } : undefined}
      />

      {/* Professional grid pattern overlay — parallax layer */}
      <motion.div
        className="absolute inset-0 bg-grid"
        style={mounted && !prefersReducedMotion ? { y: gridY } : undefined}
      />

      {/* Subtle radial gradient for depth — parallax layer */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial"
        style={mounted && !prefersReducedMotion ? { y: radialY } : undefined}
      />

      {/* Content — slight parallax for depth perception */}
      <motion.div
        className="relative container-main py-20"
        style={mounted && !prefersReducedMotion ? { y: contentY } : undefined}
      >
        <motion.div
          key="hero-content"
          initial={!prefersReducedMotion ? "hidden" : undefined}
          animate={!prefersReducedMotion ? "visible" : undefined}
          variants={!prefersReducedMotion ? staggerContainer : undefined}
          className="max-w-5xl"
        >

          {/* Typing greeting */}
          <motion.div
            variants={!prefersReducedMotion ? staggerItem : undefined}
            className="mb-3"
          >
            <TypingText
              text={t.greeting}
              typingSpeed={80}
              showCursor={true}
              className="text-lg font-semibold text-[var(--accent-primary)]"
            />
          </motion.div>

          {/* Professional Kicker */}
          <motion.div
            variants={!prefersReducedMotion ? staggerItem : undefined}
            className="flex items-center gap-2 mb-4"
          >
            <Briefcase
              size={16}
              weight="duotone"
              className="text-[var(--accent-primary)]"
            />
            <p
              className="text-sm uppercase tracking-wider font-semibold text-[var(--text-secondary)]"
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
              className="block mb-2 text-[var(--text-primary)]"
            >
              {t.h1Line1}
            </span>
            <span className="block text-gradient-accent">{t.h1Line2}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={!prefersReducedMotion ? staggerItem : undefined}
            className="text-xl max-w-3xl mb-8 leading-relaxed text-[var(--text-secondary)]"
          >
            {t.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={!prefersReducedMotion ? staggerItem : undefined}
            className="flex flex-wrap gap-4 mb-10"
          >
            <Link
              href={projectsLink}
              className="hero-cta-primary group inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
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
              className="hero-cta-secondary inline-flex items-center gap-2 border-2 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
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
                  className="text-center"
                  initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : undefined}
                  animate={mounted ? { opacity: 1, y: 0 } : undefined}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  <IconComponent
                    size={20}
                    weight="duotone"
                    className="mx-auto mb-2 text-[var(--accent-primary)]"
                  />
                  <p
                    className="text-2xl font-bold text-[var(--text-primary)]"
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-sm text-[var(--text-tertiary)]"
                  >
                    {stat.label}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={!prefersReducedMotion ? { opacity: 0 } : undefined}
        animate={mounted ? { opacity: 1, y: [0, 8, 0] } : undefined}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
      >
        <div
          className="hero-scroll-indicator w-6 h-10 rounded-full border-2 flex items-start justify-center p-2 transition-colors"
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]"
            animate={!prefersReducedMotion ? { y: [0, 12, 0] } : undefined}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
