"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MagneticButton } from '@/components/ui/MagneticButton'

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
    <section ref={ref} className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background accent */}
      <div 
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          height: '600px',
          width: '600px',
          transform: 'translate(50%, -50%)',
          borderRadius: '50%',
          background: 'rgba(6, 182, 212, 0.05)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        {/* Two column layout */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
          {/* Left - Bio */}
          <div style={{ flex: '1 1 400px', minWidth: '300px' }}>
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
                style={{ paddingTop: '1rem' }}
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
          </div>

          {/* Right - Highlights grid 2x2 using CSS Grid */}
          <div style={{ flex: '1 1 400px', minWidth: '300px' }}>
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
              }}
            >
              {t.highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '1rem',
                    border: '1px solid rgba(51, 65, 85, 0.5)',
                    background: 'rgba(15, 23, 42, 0.6)',
                    backdropFilter: 'blur(8px)',
                    padding: '1.5rem',
                    transition: 'all 0.3s ease',
                  }}
                  className="group hover:border-slate-600 hover:bg-slate-800/60"
                >
                  <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                  <h3 style={{ marginTop: '1rem', fontWeight: 600, color: '#f8fafc' }}>{item.title}</h3>
                  <p style={{ marginTop: '0.25rem', fontSize: '0.875rem', color: '#94a3b8' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
