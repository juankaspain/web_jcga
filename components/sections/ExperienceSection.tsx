"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MagneticButton } from '@/components/ui/MagneticButton'

interface ExperienceSectionProps {
  locale?: 'es' | 'en'
}

const experiences = {
  es: [
    {
      period: '2022 - Presente',
      role: 'Senior Technical Lead',
      company: 'Santander Digital Services',
      location: 'Madrid, España',
      description: 'Liderando arquitectura de canales digitales para millones de clientes en múltiples países.',
      highlights: ['Arquitectura Cloud', 'Equipos de 12+ personas', 'Multi-país'],
      color: 'cyan',
    },
    {
      period: '2019 - 2022',
      role: 'Cloud Solutions Architect',
      company: 'Santander',
      location: 'Madrid, España',
      description: 'Diseño e implementación de soluciones cloud para sistemas de pagos críticos.',
      highlights: ['Azure', 'Microservicios', 'Pagos'],
      color: 'purple',
    },
    {
      period: '2015 - 2019',
      role: 'Senior Software Engineer',
      company: 'Accenture',
      location: 'Madrid, España',
      description: 'Desarrollo de aplicaciones empresariales para clientes del sector financiero.',
      highlights: ['Java', 'Spring', 'Oracle'],
      color: 'blue',
    },
  ],
  en: [
    {
      period: '2022 - Present',
      role: 'Senior Technical Lead',
      company: 'Santander Digital Services',
      location: 'Madrid, Spain',
      description: 'Leading digital channels architecture for millions of customers across multiple countries.',
      highlights: ['Cloud Architecture', '12+ person teams', 'Multi-country'],
      color: 'cyan',
    },
    {
      period: '2019 - 2022',
      role: 'Cloud Solutions Architect',
      company: 'Santander',
      location: 'Madrid, Spain',
      description: 'Design and implementation of cloud solutions for critical payment systems.',
      highlights: ['Azure', 'Microservices', 'Payments'],
      color: 'purple',
    },
    {
      period: '2015 - 2019',
      role: 'Senior Software Engineer',
      company: 'Accenture',
      location: 'Madrid, Spain',
      description: 'Development of enterprise applications for financial sector clients.',
      highlights: ['Java', 'Spring', 'Oracle'],
      color: 'blue',
    },
  ],
}

const copy = {
  es: {
    eyebrow: 'Trayectoria',
    title: '+15 años construyendo el futuro',
    description: 'De desarrollador a arquitecto, liderando equipos que transforman la banca digital.',
    cta: 'Ver experiencia completa',
  },
  en: {
    eyebrow: 'Experience',
    title: '+15 years building the future',
    description: 'From developer to architect, leading teams that transform digital banking.',
    cta: 'View full experience',
  },
}

export function ExperienceSection({ locale = 'es' }: ExperienceSectionProps) {
  const t = copy[locale]
  const items = experiences[locale]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const colorClasses = {
    cyan: 'border-l-cyan-500',
    purple: 'border-l-purple-500',
    blue: 'border-l-blue-500',
  }

  const tagColors = {
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  }

  return (
    <section ref={ref} className="relative overflow-hidden bg-slate-900/50 py-24 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.05),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-blue-500/30 md:left-8" />

          <div className="space-y-8">
            {items.map((item, index) => (
              <motion.div
                key={item.period}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-8">
                  <span className="h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-500" />
                </div>

                {/* Card */}
                <div className={`rounded-xl border border-slate-700/50 bg-slate-900/70 p-6 backdrop-blur-sm transition-all duration-300 hover:border-slate-600/80 border-l-4 ${colorClasses[item.color as keyof typeof colorClasses]}`}>
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    {item.period}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-slate-50">{item.role}</h3>
                  <p className="text-sm text-slate-300">
                    {item.company} · {item.location}
                  </p>
                  <p className="mt-3 text-sm text-slate-400">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.highlights.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full border px-3 py-1 text-xs font-medium ${tagColors[item.color as keyof typeof tagColors]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <MagneticButton
            href={locale === 'es' ? '/experience' : '/en/experience'}
            variant="secondary"
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
