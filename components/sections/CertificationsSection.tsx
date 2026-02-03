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
    <section ref={ref} className="relative overflow-hidden bg-slate-900/50 py-24">
      {/* Background */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.03), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

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
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <div style={{ fontSize: 'clamp(4rem, 12vw, 8rem)', fontWeight: 700 }}>
            <span style={{ background: 'linear-gradient(90deg, #22d3ee, #67e8f9, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              <AnimatedCounter value={totalCerts} suffix="+" duration={3} />
            </span>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '1.125rem', color: '#94a3b8' }}>{t.totalLabel}</p>
        </motion.div>

        {/* Vendor grid using flexbox */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {vendors.map((vendor, index) => (
            <motion.div
              key={vendor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
              style={{
                flex: '1 1 120px',
                maxWidth: '140px',
                borderRadius: '0.75rem',
                border: '1px solid rgba(51, 65, 85, 0.5)',
                background: 'rgba(15, 23, 42, 0.6)',
                backdropFilter: 'blur(8px)',
                padding: '1rem',
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
              className="group hover:border-slate-600 hover:bg-slate-800/60"
            >
              <div
                style={{
                  margin: '0 auto 0.75rem',
                  display: 'flex',
                  height: '3rem',
                  width: '3rem',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '0.75rem',
                  backgroundColor: `${vendor.color}20`,
                  transition: 'transform 0.3s ease',
                }}
                className="group-hover:scale-110"
              >
                <span style={{ fontSize: '1.25rem', fontWeight: 700, color: vendor.color }}>
                  {vendor.count}
                </span>
              </div>
              <p style={{ fontSize: '0.75rem', fontWeight: 500, color: '#94a3b8' }}>{vendor.name}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          style={{ marginTop: '4rem', textAlign: 'center' }}
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
