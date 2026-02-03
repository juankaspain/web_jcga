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
      icon: '💳'
    },
    {
      title: 'Motor de Decisiones AI',
      description: 'Sistema de ML para scoring crediticio con latencias <100ms y 99.9% uptime.',
      tags: ['Python', 'ML', 'Real-time'],
      impact: '<100ms latencia',
      gradient: 'from-purple-500 to-pink-500',
      icon: '🤖'
    },
    {
      title: 'App Banca Móvil',
      description: 'Liderando el desarrollo de la app nativa usada por millones de clientes.',
      tags: ['React Native', 'TypeScript', 'CI/CD'],
      impact: '4.8★ rating',
      gradient: 'from-orange-500 to-red-500',
      icon: '📱'
    }
  ],
  en: [
    {
      title: 'Global Payments Platform',
      description: 'Microservices architecture processing +5M daily transactions in real-time.',
      tags: ['Azure', 'Kubernetes', 'Event-Driven'],
      impact: '+5M txn/day',
      gradient: 'from-cyan-500 to-blue-500',
      icon: '💳'
    },
    {
      title: 'AI Decision Engine',
      description: 'ML system for credit scoring with <100ms latencies and 99.9% uptime.',
      tags: ['Python', 'ML', 'Real-time'],
      impact: '<100ms latency',
      gradient: 'from-purple-500 to-pink-500',
      icon: '🤖'
    },
    {
      title: 'Mobile Banking App',
      description: 'Leading development of the native app used by millions of customers.',
      tags: ['React Native', 'TypeScript', 'CI/CD'],
      impact: '4.8★ rating',
      gradient: 'from-orange-500 to-red-500',
      icon: '📱'
    }
  ]
}

const copy = {
  es: {
    label: 'PROYECTOS DESTACADOS',
    title: 'Impacto a escala global',
    subtitle: 'Soluciones que procesan millones de transacciones y mejoran la vida de los usuarios.',
    viewAll: 'Ver todos los proyectos',
    viewDetails: 'Ver detalles'
  },
  en: {
    label: 'FEATURED PROJECTS',
    title: 'Impact at global scale',
    subtitle: 'Solutions processing millions of transactions and improving users\' lives.',
    viewAll: 'View all projects',
    viewDetails: 'View details'
  }
}

export function ProjectsSection({ locale = 'es' }: ProjectsSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const t = copy[locale]
  const projectList = projects[locale]
  const projectsLink = locale === 'en' ? '/en/projects' : '/projects'

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05),transparent_70%)]" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label={t.label}
          title={t.title}
          subtitle={t.subtitle}
        />

        {/* Projects Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-slate-600/50 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2">
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Glow effect on hover */}
                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
                
                <div className="relative p-6 md:p-8">
                  {/* Impact badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white shadow-lg`}>
                      {project.impact}
                    </span>
                    <span className="text-3xl">{project.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium text-slate-400 bg-slate-800/80 rounded-md border border-slate-700/50 group-hover:border-slate-600/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View details link */}
                  <div className="flex items-center text-sm font-medium text-slate-500 group-hover:text-cyan-400 transition-colors duration-300">
                    <span>{t.viewDetails}</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <MagneticButton href={projectsLink} variant="outline">
            {t.viewAll}
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
