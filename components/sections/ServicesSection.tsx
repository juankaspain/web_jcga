"use client"

import { motion } from 'framer-motion'
import {
  Cloud,
  CreditCard,
  UsersThree,
  CheckCircle
} from '@phosphor-icons/react'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

interface ServicesSectionProps {
  locale?: 'es' | 'en'
}

const copy = {
  es: {
    eyebrow: 'Servicios',
    title: 'Qué hago y cómo genero valor',
    subtitle: 'Lidero equipos técnicos que construyen plataformas de pago críticas para banca digital. Mi expertise combina arquitectura cloud (Azure/Oracle), sistemas distribuidos y soluciones Data & AI para problemas reales: reducir latencia, escalar a millones de usuarios y cumplir regulación SEPA.',
    services: [
      {
        icon: Cloud,
        title: 'Cloud Architecture',
        description: 'Diseño e implemento arquitecturas cloud-native en Azure y Oracle, optimizadas para alta disponibilidad y escalabilidad. Desde Kubernetes en producción hasta estrategias multi-cloud.',
        outcomes: ['99.95% SLA en producción', 'Clusters 50+ nodos gestionados', '-35% reducción de costes operacionales']
      },
      {
        icon: CreditCard,
        title: 'Payment Systems',
        description: 'Especialista en sistemas de pago SEPA, ISO 20022, PSD2 Open Banking y orquestación multi-PSP. Experiencia en transacciones críticas con cumplimiento normativo total.',
        outcomes: ['2M transacciones/día procesadas', 'Cumplimiento PSD2 y SEPA', '8+ PSPs integrados en producción']
      },
      {
        icon: UsersThree,
        title: 'Team Leadership',
        description: 'Liderazgo de equipos multidisciplinares (backend, DevOps, data) en proyectos de transformación digital. Metodologías ágiles, arquitectura técnica y mentoría continua.',
        outcomes: ['Equipos 12+ personas gestionados', 'Proyectos €2.5M+ presupuesto', '18 microservicios en producción']
      }
    ]
  },
  en: {
    eyebrow: 'Services',
    title: 'What I do and how I create value',
    subtitle: 'I lead technical teams that build critical payment platforms for digital banking. My expertise combines cloud architecture (Azure/Oracle), distributed systems, and Data & AI solutions for real problems: reducing latency, scaling to millions of users, and complying with SEPA regulations.',
    services: [
      {
        icon: Cloud,
        title: 'Cloud Architecture',
        description: 'I design and implement cloud-native architectures on Azure and Oracle, optimized for high availability and scalability. From Kubernetes in production to multi-cloud strategies.',
        outcomes: ['99.95% SLA in production', '50+ node clusters managed', '-35% operational cost reduction']
      },
      {
        icon: CreditCard,
        title: 'Payment Systems',
        description: 'Specialist in SEPA payment systems, ISO 20022, PSD2 Open Banking, and multi-PSP orchestration. Experience in critical transactions with full regulatory compliance.',
        outcomes: ['2M transactions/day processed', 'PSD2 and SEPA compliance', '8+ PSPs integrated in production']
      },
      {
        icon: UsersThree,
        title: 'Team Leadership',
        description: 'Leadership of multidisciplinary teams (backend, DevOps, data) in digital transformation projects. Agile methodologies, technical architecture, and continuous mentoring.',
        outcomes: ['12+ person teams managed', '€2.5M+ budget projects', '18 microservices in production']
      }
    ]
  }
}

export function ServicesSection({ locale = 'es' }: ServicesSectionProps) {
  const t = copy[locale]
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="services"
      className="relative py-24 overflow-hidden theme-transition"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs font-bold uppercase tracking-[0.3em]"
            style={{ color: 'var(--accent-primary)' }}
          >
            {t.eyebrow}
          </motion.p>
          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ color: 'var(--text-primary)' }}
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg mx-auto max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Services Grid - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-500"
                style={{
                  backgroundColor: 'var(--surface-primary)',
                  border: '1px solid var(--border-subtle)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-glow-sm)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Icon */}
                <div
                  className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl"
                  style={{
                    backgroundColor: 'var(--accent-subtle)',
                    border: '1px solid var(--accent-muted)',
                  }}
                >
                  <IconComponent size={28} weight="duotone" style={{ color: 'var(--accent-primary)' }} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>

                {/* Outcomes */}
                <ul className="space-y-2">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={18} weight="fill" style={{ color: 'var(--success)' }} className="mt-0.5 shrink-0" />
                      <span style={{ color: 'var(--text-secondary)' }}>{outcome}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(135deg, var(--accent-subtle), transparent 60%)' }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
