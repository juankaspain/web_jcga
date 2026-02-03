"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MagneticButton } from '@/components/ui/MagneticButton'

interface ProjectsSectionProps {
  locale?: 'es' | 'en'
}

const projects = {
  es: [
    {
      title: 'Plataforma de Pagos Global',
      description: 'Arquitectura de microservicios para procesar +5M de transacciones diarias en tiempo real.',
      tags: ['Azure', 'Kubernetes', 'Event-Driven'],
      impact: '+5M txn/día',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Motor de Decisiones AI',
      description: 'Sistema de ML para scoring crediticio con latencias <100ms y 99.9% uptime.',
      tags: ['Python', 'ML', 'Real-time'],
      impact: '<100ms latencia',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'App Banca Móvil',
      description: 'Liderando el desarrollo de la app nativa usada por millones de clientes.',
      tags: ['React Native', 'TypeScript', 'CI/CD'],
      impact: '4.8★ rating',
      gradient: 'from-orange-500 to-red-500',
    },
  ],
  en: [
    {
      title: 'Global Payments Platform',
      description: 'Microservices architecture processing +5M daily transactions in real-time.',
      tags: ['Azure', 'Kubernetes', 'Event-Driven'],
      impact: '+5M txn/day',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'AI Decision Engine',
      description: 'ML system for credit scoring with <100ms latencies and 99.9% uptime.',
      tags: ['Python', 'ML', 'Real-time'],
      impact: '<100ms latency',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Mobile Banking App',
      description: 'Leading development of the native app used by millions of customers.',
      tags: ['React Native', 'TypeScript', 'CI/CD'],
      impact: '4.8★ rating',
      gradient: 'from-orange-500 to-red-500',
    },
  ],
}

const copy = {
  es: {
    eyebrow: 'Proyectos destacados',
    title: 'Impacto a escala global',
    description: 'Soluciones que procesan millones de transacciones y mejoran la vida de los usuarios.',
    cta: 'Ver todos los proyectos',
    viewDetails: 'Ver detalles',
  },
  en: {
    eyebrow: 'Featured projects',
    title: 'Impact at global scale',
    description: 'Solutions processing millions of transactions and improving users\' lives.',
    cta: 'View all projects',
    viewDetails: 'View details',
  },
}

export function ProjectsSection({ locale = 'es' }: ProjectsSectionProps) {
  const t = copy[locale]
  const items = projects[locale]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.05),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-600/80 hover:bg-slate-800/60"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                {/* Gradient bar */}
                <div className={`mb-6 h-1 w-16 rounded-full bg-gradient-to-r ${project.gradient}`} />

                {/* Impact badge */}
                <span className="inline-flex items-center rounded-full bg-slate-800/80 px-3 py-1 text-xs font-semibold text-cyan-400">
                  {project.impact}
                </span>

                <h3 className="mt-4 text-xl font-bold text-slate-50 transition-colors group-hover:text-cyan-400">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-800/50 px-2 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="mt-6 flex items-center text-sm font-medium text-cyan-400 opacity-0 transition-opacity group-hover:opacity-100">
                  <span>{t.viewDetails}</span>
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <MagneticButton
            href={locale === 'es' ? '/projects' : '/en/projects'}
            variant="primary"
          >
            {t.cta}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
