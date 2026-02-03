"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

interface CertificationsSectionProps {
  locale?: 'es' | 'en'
}

const vendors = [
  { name: 'Microsoft Azure', count: 45, color: '#0078D4' },
  { name: 'Oracle', count: 35, color: '#F80000' },
  { name: 'AWS', count: 20, color: '#FF9900' },
  { name: 'Google Cloud', count: 15, color: '#4285F4' },
  { name: 'Kubernetes', count: 8, color: '#326CE5' },
  { name: 'HashiCorp', count: 6, color: '#7B42BC' },
  { name: 'DevOps/Agile', count: 11, color: '#00BFA5' },
]

const copy = {
  es: {
    eyebrow: 'Certificaciones',
    title: 'Aprendizaje continuo',
    description: 'Creo firmemente en la formación constante. Cada certificación representa un nuevo desafío superado.',
    totalLabel: 'Certificaciones totales',
    cta: 'Ver todas las certificaciones',
  },
  en: {
    eyebrow: 'Certifications',
    title: 'Continuous learning',
    description: 'I firmly believe in constant training. Each certification represents a new challenge overcome.',
    totalLabel: 'Total certifications',
    cta: 'View all certifications',
  },
}

export function CertificationsSection({ locale = 'es' }: CertificationsSectionProps) {
  const t = copy[locale]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const totalCerts = vendors.reduce((acc, v) => acc + v.count, 0)

  return (
    <section ref={ref} className="relative overflow-hidden bg-slate-900/50 py-24" style={{ position: 'relative' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.03),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        {/* Big number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="text-6xl font-bold sm:text-7xl lg:text-8xl">
            <span className="text-gradient">
              <AnimatedCounter value={totalCerts} suffix="+" duration={3} />
            </span>
          </div>
          <p className="mt-4 text-lg text-slate-400">{t.totalLabel}</p>
        </motion.div>

        {/* Vendor grid - uses CSS class */}
        <div className="certifications-grid">
          {vendors.map((vendor, index) => (
            <motion.div
              key={vendor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
              className="certification-card group rounded-xl border border-slate-700/50 bg-slate-900/60 p-4 text-center backdrop-blur-sm transition-all hover:border-slate-600 hover:bg-slate-800/60"
            >
              <div
                className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${vendor.color}20` }}
              >
                <span className="text-xl font-bold" style={{ color: vendor.color }}>
                  {vendor.count}
                </span>
              </div>
              <p className="text-xs font-medium text-slate-400">{vendor.name}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <MagneticButton
            href={locale === 'es' ? '/certifications' : '/en/certifications'}
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
