"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Quote, CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

interface SocialProofSectionProps {
  locale?: 'es' | 'en'
}

const copy = {
  es: {
    eyebrow: 'Social Proof',
    title: 'Validado por líderes de la industria',
    subtitle: 'Reconocimiento de equipos y organizaciones con las que he trabajado',
    testimonialsTitle: 'Testimonios',
    companiesTitle: 'He trabajado con',
    certificationsTitle: 'Certificaciones destacadas',
    testimonials: [
      { quote: 'Juan Carlos lideró la migración más crítica de nuestra historia con zero downtime. Su visión técnica y capacidad de ejecución son excepcionales.', author: 'Director de Tecnología', company: 'Santander Digital Services', role: 'CTO' },
      { quote: 'Arquitectó nuestro sistema de pagos instantáneos procesando 2M transacciones diarias con SLA del 99.95%. Un profesional de nivel enterprise.', author: 'Head of Payments', company: 'Santander', role: 'VP Payments' },
      { quote: 'Su expertise en cloud y sistemas distribuidos nos permitió escalar de 500K a 3M usuarios sin refactorizar. Mentalidad de product engineer.', author: 'Engineering Manager', company: 'BBVA', role: 'Engineering Lead' }
    ],
    companies: [
      { name: 'Santander', logo: '/logos/santander.svg' },
      { name: 'BBVA', logo: '/logos/bbva.svg' },
      { name: 'CaixaBank', logo: '/logos/caixabank.svg' },
      { name: 'Indra', logo: '/logos/indra.svg' }
    ],
    topCertifications: [
      { name: 'Azure Solutions Architect Expert', icon: '/certs/azure-expert.svg', issuer: 'Microsoft' },
      { name: 'Kubernetes Administrator (CKA)', icon: '/certs/cka.svg', issuer: 'CNCF' },
      { name: 'Azure DevOps Engineer Expert', icon: '/certs/azure-devops.svg', issuer: 'Microsoft' },
      { name: 'PSD2 Technical Specialist', icon: '/certs/psd2.svg', issuer: 'EBA' }
    ]
  },
  en: {
    eyebrow: 'Social Proof',
    title: 'Validated by industry leaders',
    subtitle: 'Recognition from teams and organizations I\'ve worked with',
    testimonialsTitle: 'Testimonials',
    companiesTitle: 'I\'ve worked with',
    certificationsTitle: 'Featured certifications',
    testimonials: [
      { quote: 'Juan Carlos led the most critical migration in our history with zero downtime. His technical vision and execution capability are exceptional.', author: 'Chief Technology Officer', company: 'Santander Digital Services', role: 'CTO' },
      { quote: 'He architected our instant payments system processing 2M daily transactions with 99.95% SLA. An enterprise-level professional.', author: 'Head of Payments', company: 'Santander', role: 'VP Payments' },
      { quote: 'His expertise in cloud and distributed systems allowed us to scale from 500K to 3M users without refactoring. Product engineer mindset.', author: 'Engineering Manager', company: 'BBVA', role: 'Engineering Lead' }
    ],
    companies: [
      { name: 'Santander', logo: '/logos/santander.svg' },
      { name: 'BBVA', logo: '/logos/bbva.svg' },
      { name: 'CaixaBank', logo: '/logos/caixabank.svg' },
      { name: 'Indra', logo: '/logos/indra.svg' }
    ],
    topCertifications: [
      { name: 'Azure Solutions Architect Expert', icon: '/certs/azure-expert.svg', issuer: 'Microsoft' },
      { name: 'Kubernetes Administrator (CKA)', icon: '/certs/cka.svg', issuer: 'CNCF' },
      { name: 'Azure DevOps Engineer Expert', icon: '/certs/azure-devops.svg', issuer: 'Microsoft' },
      { name: 'PSD2 Technical Specialist', icon: '/certs/psd2.svg', issuer: 'EBA' }
    ]
  }
}

export function SocialProofSection({ locale = 'es' }: SocialProofSectionProps) {
  const t = copy[locale]
  const prefersReducedMotion = useReducedMotion()
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % t.testimonials.length)
  }
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + t.testimonials.length) % t.testimonials.length)
  }

  return (
    <section
      id="social-proof"
      className="relative py-24 overflow-hidden theme-transition"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative container-professional">

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
            transition={{ delay: 0.1, duration: 0.6 }}
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

        {/* Testimonials Carousel */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <div
            className="relative p-8 md:p-12 rounded-2xl glass-card"
            style={{ border: '1px solid var(--border-subtle)' }}
          >
            <Quote size={48} weight="fill" style={{ color: 'var(--accent-subtle)' }} className="mb-6" />

            <blockquote className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              &ldquo;{t.testimonials[currentTestimonial].quote}&rdquo;
            </blockquote>

            <div className="flex items-center gap-4">
              <div>
                <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>{t.testimonials[currentTestimonial].author}</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {t.testimonials[currentTestimonial].role} @ {t.testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-lg glass-card transition-colors"
                style={{ border: '1px solid var(--border-subtle)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)' }}
                aria-label="Previous testimonial"
              >
                <CaretLeft size={20} style={{ color: 'var(--text-secondary)' }} />
              </button>

              <div className="flex gap-2">
                {t.testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: index === currentTestimonial ? 32 : 8,
                      backgroundColor: index === currentTestimonial ? 'var(--accent-primary)' : 'var(--border-default)',
                    }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-lg glass-card transition-colors"
                style={{ border: '1px solid var(--border-subtle)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)' }}
                aria-label="Next testimonial"
              >
                <CaretRight size={20} style={{ color: 'var(--text-secondary)' }} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Companies Logos */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h3
            className="text-center text-xs font-semibold uppercase tracking-wide mb-8"
            style={{ color: 'var(--text-tertiary)' }}
          >
            {t.companiesTitle}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {t.companies.map((company) => (
              <div
                key={company.name}
                className="group relative flex items-center justify-center h-12 px-6 rounded-lg glass-card transition-all duration-300"
                style={{ border: '1px solid var(--border-subtle)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-default)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)' }}
              >
                <span
                  className="text-sm font-medium transition-colors"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top Certifications */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3
            className="text-center text-xs font-semibold uppercase tracking-wide mb-8"
            style={{ color: 'var(--text-tertiary)' }}
          >
            {t.certificationsTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.topCertifications.map((cert) => (
              <div
                key={cert.name}
                className="group p-4 rounded-xl glass-card transition-all duration-300 text-center"
                style={{ border: '1px solid var(--border-subtle)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)' }}
              >
                <div
                  className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: 'var(--accent-subtle)',
                    border: '1px solid var(--accent-muted)',
                  }}
                >
                  <span className="text-xl">🏆</span>
                </div>
                <div className="text-xs font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>{cert.name}</div>
                <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{cert.issuer}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
