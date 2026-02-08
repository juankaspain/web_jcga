"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MagneticButton } from '@/components/ui/MagneticButton'

interface AboutSectionProps {
  locale?: 'es' | 'en'
}

const copy = {
  es: {
    eyebrow: 'SOBRE MÍ',
    title: 'Arquitecto de soluciones que escalan',
    description: 'Más de 15 años transformando ideas en plataformas que procesan millones de transacciones.',
    bio: [
      'Lidero equipos de alto rendimiento en Santander Digital Services, donde diseñamos la arquitectura de canales digitales que utilizan millones de clientes en España, UK, Portugal y Latinoamérica.',
      'Mi pasión es encontrar la intersección entre la excelencia técnica y el impacto de negocio. Cada sistema que construyo está pensado para escalar, ser mantenible y generar valor real.',
      'Fuera del código, soy un eterno estudiante: +140 certificaciones y contando. Creo firmemente que en tecnología, el día que dejas de aprender es el día que empiezas a quedarte atrás.',
    ],
    highlights: [
      { icon: '\uD83C\uDFE6', title: 'Banca Digital', desc: 'Santander, BBVA, entidades financieras globales' },
      { icon: '\u2601\uFE0F', title: 'Cloud Native', desc: 'Azure, Kubernetes, Microservicios' },
      { icon: '\uD83E\uDD16', title: 'Data & AI', desc: 'ML/AI aplicado a productos financieros' },
      { icon: '\uD83D\uDE80', title: 'DevOps', desc: 'CI/CD, IaC, observabilidad' },
    ],
    cta: 'Ver mi trayectoria completa',
  },
  en: {
    eyebrow: 'ABOUT ME',
    title: 'Architect of solutions that scale',
    description: 'Over 15 years transforming ideas into platforms processing millions of transactions.',
    bio: [
      'I lead high-performance teams at Santander Digital Services, where we design the architecture of digital channels used by millions of customers in Spain, UK, Portugal, and Latin America.',
      'My passion is finding the intersection between technical excellence and business impact. Every system I build is designed to scale, be maintainable, and generate real value.',
      'Outside of code, I\'m an eternal student: +140 certifications and counting. I firmly believe that in technology, the day you stop learning is the day you start falling behind.',
    ],
    highlights: [
      { icon: '\uD83C\uDFE6', title: 'Digital Banking', desc: 'Santander, BBVA, global financial institutions' },
      { icon: '\u2601\uFE0F', title: 'Cloud Native', desc: 'Azure, Kubernetes, Microservices' },
      { icon: '\uD83E\uDD16', title: 'Data & AI', desc: 'ML/AI applied to financial products' },
      { icon: '\uD83D\uDE80', title: 'DevOps', desc: 'CI/CD, IaC, observability' },
    ],
    cta: 'View my full journey',
  },
}

export function AboutSection({ locale = 'es' }: AboutSectionProps) {
  const t = copy[locale]
  const aboutLink = locale === 'en' ? '/en/about' : '/about'
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden theme-transition"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      {/* Subtle radial background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, var(--accent-subtle), transparent 60%)',
        }}
      />

      <div ref={ref} className="relative mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
          align="center"
        />

        <div className="grid gap-12 md:grid-cols-2 items-start mt-16">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4">
              {t.bio.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              <MagneticButton href={aboutLink} variant="outline">
                {t.cta}
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right: Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {t.highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group rounded-2xl border p-5 transition-all duration-300 theme-transition"
                style={{
                  borderColor: 'var(--border-subtle)',
                  backgroundColor: 'var(--surface-primary)',
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
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'radial-gradient(circle at center, var(--accent-subtle), transparent 70%)' }}
                />
                <div className="relative">
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
