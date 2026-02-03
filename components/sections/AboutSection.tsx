"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { GlassCard } from '@/components/ui/GlassCard'

interface AboutSectionProps {
  locale?: 'es' | 'en'
}

const copy = {
  es: {
    eyebrow: 'Sobre mí',
    title: 'Arquitecto de soluciones que escalan',
    description: 'Más de 15 años transformando ideas en plataformas que procesan millones de transacciones.',
    bio: [
      'Lidero equipos de alto rendimiento en Santander Digital Services, donde diseñamos la arquitectura de canales digitales que utilizan millones de clientes en España, UK, Portugal y Latinoamérica.',
      'Mi pasión es encontrar la intersección entre la excelencia técnica y el impacto de negocio. Cada sistema que construyo está pensado para escalar, ser mantenible y generar valor real.',
      'Fuera del código, soy un eterno estudiante: +140 certificaciones y contando. Creo firmemente que en tecnología, el día que dejas de aprender es el día que empiezas a quedarte atrás.',
    ],
    highlights: [
      { icon: '🏦', title: 'Banca Digital', desc: 'Santander, BBVA, entidades financieras globales' },
      { icon: '☁️', title: 'Cloud Native', desc: 'Azure, Kubernetes, Microservicios' },
      { icon: '🤖', title: 'Data & AI', desc: 'ML/AI aplicado a productos financieros' },
      { icon: '🚀', title: 'DevOps', desc: 'CI/CD, IaC, observabilidad' },
    ],
    cta: 'Ver mi trayectoria completa',
  },
  en: {
    eyebrow: 'About me',
    title: 'Architect of solutions that scale',
    description: 'Over 15 years transforming ideas into platforms processing millions of transactions.',
    bio: [
      'I lead high-performance teams at Santander Digital Services, where we design the architecture of digital channels used by millions of customers in Spain, UK, Portugal, and Latin America.',
      'My passion is finding the intersection between technical excellence and business impact. Every system I build is designed to scale, be maintainable, and generate real value.',
      'Outside of code, I\'m an eternal student: +140 certifications and counting. I firmly believe that in technology, the day you stop learning is the day you start falling behind.',
    ],
    highlights: [
      { icon: '🏦', title: 'Digital Banking', desc: 'Santander, BBVA, global financial institutions' },
      { icon: '☁️', title: 'Cloud Native', desc: 'Azure, Kubernetes, Microservices' },
      { icon: '🤖', title: 'Data & AI', desc: 'ML/AI applied to financial products' },
      { icon: '🚀', title: 'DevOps', desc: 'CI/CD, IaC, observability' },
    ],
    cta: 'View my full journey',
  },
}

export function AboutSection({ locale = 'es' }: AboutSectionProps) {
  const t = copy[locale]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Bio */}
          <div className="space-y-6">
            {t.bio.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="text-base leading-relaxed text-slate-400"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-4"
            >
              <MagneticButton
                href={locale === 'es' ? '/about' : '/en/about'}
                variant="secondary"
              >
                {t.cta}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right - Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {t.highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <GlassCard className="h-full p-6" glowColor={index % 2 === 0 ? 'cyan' : 'purple'}>
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="mt-4 font-semibold text-slate-50">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
