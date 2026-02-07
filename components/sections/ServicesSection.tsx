"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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
        outcomes: [
          '99.95% SLA en producción',
          'Clusters 50+ nodos gestionados',
          '-35% reducción de costes operacionales'
        ]
      },
      {
        icon: CreditCard,
        title: 'Payment Systems',
        description: 'Especialista en sistemas de pago SEPA, ISO 20022, PSD2 Open Banking y orquestación multi-PSP. Experiencia en transacciones críticas con cumplimiento normativo total.',
        outcomes: [
          '2M transacciones/día procesadas',
          'Cumplimiento PSD2 y SEPA',
          '8+ PSPs integrados en producción'
        ]
      },
      {
        icon: UsersThree,
        title: 'Team Leadership',
        description: 'Liderazgo de equipos multidisciplinares (backend, DevOps, data) en proyectos de transformación digital. Metodologías ágiles, arquitectura técnica y mentoría continua.',
        outcomes: [
          'Equipos 12+ personas gestionados',
          'Proyectos €2.5M+ presupuesto',
          '18 microservicios en producción'
        ]
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
        outcomes: [
          '99.95% SLA in production',
          '50+ node clusters managed',
          '-35% operational cost reduction'
        ]
      },
      {
        icon: CreditCard,
        title: 'Payment Systems',
        description: 'Specialist in SEPA payment systems, ISO 20022, PSD2 Open Banking, and multi-PSP orchestration. Experience in critical transactions with full regulatory compliance.',
        outcomes: [
          '2M transactions/day processed',
          'PSD2 and SEPA compliance',
          '8+ PSPs integrated in production'
        ]
      },
      {
        icon: UsersThree,
        title: 'Team Leadership',
        description: 'Leadership of multidisciplinary teams (backend, DevOps, data) in digital transformation projects. Agile methodologies, technical architecture, and continuous mentoring.',
        outcomes: [
          '12+ person teams managed',
          '€2.5M+ budget projects',
          '18 microservices in production'
        ]
      }
    ]
  }
}

export function ServicesSection({ locale = 'es' }: ServicesSectionProps) {
  const t = copy[locale]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section 
      ref={ref}
      id="services" 
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-navy-950 to-slate-950" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="relative container-professional">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold-400"
          >
            {t.eyebrow}
          </motion.p>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-white md:text-5xl mb-6"
          >
            {t.title}
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg leading-relaxed text-slate-300"
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
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="group relative p-8 rounded-2xl glass-card border border-slate-800 hover:border-electric-500/30 transition-all duration-300 hover-lift"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center group-hover:bg-electric-500/20 transition-colors duration-300">
                    <IconComponent 
                      size={32} 
                      weight="duotone" 
                      className="text-electric-400 group-hover:text-electric-300 transition-colors duration-300" 
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient-fintech transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Outcomes */}
                <div className="space-y-2 pt-6 border-t border-slate-800">
                  {service.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-2">
                      <CheckCircle 
                        size={20} 
                        weight="fill" 
                        className="text-gold-500 flex-shrink-0 mt-0.5" 
                      />
                      <span className="text-sm text-slate-300 leading-relaxed">
                        {outcome}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover glow */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.1), transparent 70%)'
                  }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
