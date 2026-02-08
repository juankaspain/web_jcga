"use client"

import { motion } from 'framer-motion'
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
  const totalCerts = vendors.reduce((acc, v) => acc + v.count, 0)

  return (
    <section
      id="certifications"
      className="relative overflow-hidden py-24 theme-transition"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        {/* Big number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-baseline gap-2">
            <AnimatedCounter value={totalCerts} className="text-7xl font-black text-gradient-accent" />
            <span className="text-xl" style={{ color: 'var(--text-secondary)' }}>+</span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ color: 'var(--text-secondary)' }}
            className="mt-2"
          >
            {t.totalLabel}
          </motion.p>
        </motion.div>

        {/* Vendor bars */}
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          {vendors.map((vendor, index) => (
            <motion.div
              key={vendor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
              className="group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{vendor.name}</span>
                <span className="text-sm" style={{ color: 'var(--text-tertiary)' }}>{vendor.count}</span>
              </div>
              <div
                className="h-2 rounded-full overflow-hidden"
                style={{ backgroundColor: 'var(--surface-secondary)' }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(vendor.count / totalCerts) * 100}%` }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: vendor.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <MagneticButton href={locale === 'en' ? '/en/certifications' : '/certifications'}>
            {t.cta}
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
