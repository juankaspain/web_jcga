"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { staggerContainer, staggerItem } from "@/lib/animations/variants"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"
import { TypingText } from "@/components/ui/TypingText"
import { HERO_CLAIMS, HERO_COPY, type Locale } from "@/app/content/hero"
import { Button } from "@/components/ui/Button"
import {
  ArrowRight,
  Briefcase,
  ChartLine,
  Users,
  Trophy,
  Clock,
} from "@phosphor-icons/react"

type HeroProps = {
  locale?: Locale
}

export function Hero({ locale = "es" }: HeroProps) {
  const t = HERO_COPY[locale]
  const projectsLink =
    locale === "en" ? "/en/projects/sepa-platform" : "/projects/sepa-platform"
  const expertiseLink = locale === "en" ? "/en/skills" : "/skills"
  const prefersReducedMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const radialY = useTransform(scrollYProgress, [0, 1], [0, 80])

  useEffect(() => {
    setMounted(true)
  }, [])

  const stats = [
    {
      value: HERO_CLAIMS.years,
      label: locale === "en" ? "Years experience" : "Años experiencia",
      icon: Clock,
    },
    {
      value: HERO_CLAIMS.certifications,
      label: locale === "en" ? "Certifications" : "Certificaciones",
      icon: Trophy,
    },
    {
      value: HERO_CLAIMS.teamSize,
      label: locale === "en" ? "Current team" : "Equipo actual",
      icon: Users,
    },
    {
      value: HERO_CLAIMS.sla,
      label: locale === "en" ? "SLA achieved" : "SLA logrado",
      icon: ChartLine,
    },
  ]

  return (
    <section
      ref={heroRef}
      className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden theme-transition bg-[var(--bg-primary)]"
    >
      <div className="mesh-gradient" />
      <div className="absolute inset-0 bg-grid" />

      <motion.div
        className="absolute inset-0 bg-gradient-radial hero-bg-radial"
        style={mounted && !prefersReducedMotion ? { y: radialY } : undefined}
      />

      <div className="relative container-main py-20">
        <motion.div
          key="hero-content"
          initial={mounted && !prefersReducedMotion ? "hidden" : undefined}
          animate={mounted && !prefersReducedMotion ? "visible" : undefined}
          variants={mounted && !prefersReducedMotion ? staggerContainer : undefined}
          className="max-w-5xl"
        >
          <motion.div
            variants={mounted && !prefersReducedMotion ? staggerItem : undefined}
            className="mb-3"
          >
            <TypingText
              text={t.greeting}
              typingSpeed={80}
              showCursor={true}
              className="text-lg font-semibold text-[var(--accent-primary)]"
            />
          </motion.div>

          <motion.div
            variants={mounted && !prefersReducedMotion ? staggerItem : undefined}
            className="flex items-center gap-2 mb-4"
          >
            <span className="text-[var(--accent-primary)]">
              <Briefcase size={16} weight="duotone" />
            </span>
            <p className="text-sm uppercase tracking-wider font-semibold text-[var(--text-secondary)]">
              {t.kicker}
            </p>
          </motion.div>

          <motion.h1
            variants={mounted && !prefersReducedMotion ? staggerItem : undefined}
            className="mb-6 leading-tight"
          >
            <span className="block mb-2 text-[var(--text-primary)]">
              {t.h1Line1}
            </span>
            <span className="block text-gradient-accent">{t.h1Line2}</span>
          </motion.h1>

          <motion.p
            variants={mounted && !prefersReducedMotion ? staggerItem : undefined}
            className="text-xl max-w-3xl mb-8 leading-relaxed text-[var(--text-secondary)]"
          >
            {t.description}
          </motion.p>

          <motion.div
            variants={mounted && !prefersReducedMotion ? staggerItem : undefined}
            className="flex flex-wrap gap-4 mb-10"
          >
            <Button
              href={projectsLink}
              size="lg"
              className="hero-cta-primary rounded-xl px-8 py-4 font-semibold"
              rightIcon={<ArrowRight size={20} weight="bold" />}
            >
              {t.ctaPrimary}
            </Button>

            <Button
              href={expertiseLink}
              size="lg"
              variant="outline"
              className="hero-cta-secondary rounded-xl border-2 px-8 py-4 font-semibold"
            >
              {t.ctaSecondary}
            </Button>
          </motion.div>

          <motion.div
            variants={mounted && !prefersReducedMotion ? staggerItem : undefined}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-primary)]/60 backdrop-blur px-4 py-4 text-left shadow-sm"
                  initial={
                    mounted && !prefersReducedMotion
                      ? { opacity: 0, y: 20 }
                      : undefined
                  }
                  animate={mounted ? { opacity: 1, y: 0 } : undefined}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[var(--accent-primary)]">
                      <IconComponent size={18} weight="duotone" />
                    </span>
                    <p className="text-xs uppercase tracking-wider font-semibold text-[var(--text-tertiary)]">
                      {stat.label}
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-[var(--text-primary)]">
                    {stat.value}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={mounted && !prefersReducedMotion ? { opacity: 0 } : undefined}
        animate={mounted ? { opacity: 1, y: [0, 8, 0] } : undefined}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
      >
        <div className="hero-scroll-indicator w-6 h-10 rounded-full border-2 flex items-start justify-center p-2 transition-colors">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]"
            animate={
              mounted && !prefersReducedMotion ? { y: [0, 12, 0] } : undefined
            }
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
