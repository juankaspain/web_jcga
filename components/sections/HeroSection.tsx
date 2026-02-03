"use client"

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { GradientOrbs } from '@/components/effects/GradientOrbs'
import { GridPattern } from '@/components/effects/GridPattern'
import dynamic from 'next/dynamic'

const ParticleNetwork = dynamic(
  () => import('@/components/effects/ParticleNetwork').then(mod => mod.ParticleNetwork),
  { ssr: false }
)

interface HeroSectionProps {
  locale?: 'es' | 'en'
}

const copy = {
  es: {
    greeting: 'Hola, soy',
    name: 'Juan Carlos',
    lastName: 'García Arriero',
    role: 'Senior Technical Lead',
    specialization: 'Cloud & Payments Architect',
    description: 'Diseño y lidero arquitecturas cloud que procesan millones de transacciones en banca digital. Especializado en sistemas de pagos, microservicios y soluciones Data & AI.',
    cta: 'Ver mi trabajo',
    ctaSecondary: 'Contactar',
    stats: [
      { value: 15, suffix: '+', label: 'Años experiencia' },
      { value: 140, suffix: '+', label: 'Certificaciones' },
      { value: 12, suffix: '', label: 'Equipo actual' },
      { value: 5, suffix: 'M+', label: 'Usuarios impactados' },
    ],
    scroll: 'Scroll para explorar',
    available: 'Disponible para proyectos',
    techStack: 'Tech Stack Principal',
  },
  en: {
    greeting: "Hi, I'm",
    name: 'Juan Carlos',
    lastName: 'García Arriero',
    role: 'Senior Technical Lead',
    specialization: 'Cloud & Payments Architect',
    description: 'I design and lead cloud architectures processing millions of transactions in digital banking. Specialized in payment systems, microservices, and Data & AI solutions.',
    cta: 'View my work',
    ctaSecondary: 'Contact me',
    stats: [
      { value: 15, suffix: '+', label: 'Years experience' },
      { value: 140, suffix: '+', label: 'Certifications' },
      { value: 12, suffix: '', label: 'Current team' },
      { value: 5, suffix: 'M+', label: 'Users impacted' },
    ],
    scroll: 'Scroll to explore',
    available: 'Available for projects',
    techStack: 'Main Tech Stack',
  },
}

export function HeroSection({ locale = 'es' }: HeroSectionProps) {
  const t = copy[locale]
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <GridPattern />
        <GradientOrbs />
        <div className="absolute inset-0">
          <ParticleNetwork />
        </div>
      </div>

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Left column - Text */}
          <div className="space-y-6">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {t.available}
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-slate-400"
            >
              {t.greeting}
            </motion.p>

            {/* Name */}
            <div className="space-y-1">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl md:text-6xl"
              >
                {t.name}
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  {t.lastName}
                </span>
              </motion.h1>
            </div>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-1"
            >
              <p className="text-xl font-semibold text-slate-200">{t.role}</p>
              <p className="text-lg text-cyan-400">{t.specialization}</p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="max-w-lg text-base leading-relaxed text-slate-400"
            >
              {t.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <MagneticButton
                href={locale === 'es' ? '/projects' : '/en/projects'}
                variant="primary"
                size="lg"
              >
                {t.cta}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MagneticButton>
              <MagneticButton
                href={locale === 'es' ? '/contact' : '/en/contact'}
                variant="secondary"
                size="lg"
              >
                {t.ctaSecondary}
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right column - Stats card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="lg:justify-self-end"
          >
            {/* Glass Card */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/70 p-8 backdrop-blur-xl lg:p-10">
              {/* Gradient border glow */}
              <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20" />
              
              <div className="relative">
                {/* Stats Grid - 2x2 */}
                <div className="grid grid-cols-2 gap-8">
                  {t.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-cyan-400 sm:text-4xl lg:text-5xl">
                        <AnimatedCounter
                          value={stat.value}
                          suffix={stat.suffix}
                          duration={2.5}
                        />
                      </div>
                      <p className="mt-2 text-xs text-slate-400 sm:text-sm">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Tech stack preview */}
                <div className="mt-8 border-t border-slate-700/50 pt-6">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {t.techStack}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Azure', 'Kubernetes', 'Python', 'React', 'Node.js', 'Terraform'].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-slate-500">
            {t.scroll}
          </span>
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-slate-600 p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="h-2 w-1 rounded-full bg-cyan-400"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
