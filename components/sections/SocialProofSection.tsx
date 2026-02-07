"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
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
      {
        quote: 'Juan Carlos lideró la migración más crítica de nuestra historia con zero downtime. Su visión técnica y capacidad de ejecución son excepcionales.',
        author: 'Director de Tecnología',
        company: 'Santander Digital Services',
        role: 'CTO'
      },
      {
        quote: 'Arquitectó nuestro sistema de pagos instantáneos procesando 2M transacciones diarias con SLA del 99.95%. Un profesional de nivel enterprise.',
        author: 'Head of Payments',
        company: 'Santander',
        role: 'VP Payments'
      },
      {
        quote: 'Su expertise en cloud y sistemas distribuidos nos permitió escalar de 500K a 3M usuarios sin refactorizar. Mentalidad de product engineer.',
        author: 'Engineering Manager',
        company: 'BBVA',
        role: 'Engineering Lead'
      }
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
      {
        quote: 'Juan Carlos led the most critical migration in our history with zero downtime. His technical vision and execution capability are exceptional.',
        author: 'Chief Technology Officer',
        company: 'Santander Digital Services',
        role: 'CTO'
      },
      {
        quote: 'He architected our instant payments system processing 2M daily transactions with 99.95% SLA. An enterprise-level professional.',
        author: 'Head of Payments',
        company: 'Santander',
        role: 'VP Payments'
      },
      {
        quote: 'His expertise in cloud and distributed systems allowed us to scale from 500K to 3M users without refactoring. Product engineer mindset.',
        author: 'Engineering Manager',
        company: 'BBVA',
        role: 'Engineering Lead'
      }
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
    <section id="social-proof" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-navy-950 to-slate-950" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative container-professional">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400"
          >
            {t.eyebrow}
          </motion.p>
          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-slate-50 md:text-4xl lg:text-5xl"
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-slate-400 mx-auto max-w-2xl"
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
          <div className="relative p-8 md:p-12 rounded-2xl glass-card border border-slate-700/50">
            {/* Quote icon */}
            <Quote size={48} weight="fill" className="text-electric-500/20 mb-6" />

            {/* Testimonial content */}
            <blockquote className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
              &ldquo;{t.testimonials[currentTestimonial].quote}&rdquo;
            </blockquote>

            <div className="flex items-center gap-4">
              <div>
                <div className="font-semibold text-white">{t.testimonials[currentTestimonial].author}</div>
                <div className="text-sm text-slate-400">
                  {t.testimonials[currentTestimonial].role} @ {t.testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-lg glass-card border border-slate-700 hover:border-electric-500/30 transition-colors"
                aria-label="Previous testimonial"
              >
                <CaretLeft size={20} className="text-slate-400" />
              </button>

              {/* Indicators */}
              <div className="flex gap-2">
                {t.testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'w-8 bg-electric-500'
                        : 'w-2 bg-slate-700 hover:bg-slate-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-lg glass-card border border-slate-700 hover:border-electric-500/30 transition-colors"
                aria-label="Next testimonial"
              >
                <CaretRight size={20} className="text-slate-400" />
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
          <h3 className="text-center text-xs font-semibold text-slate-500 uppercase tracking-wide mb-8">
            {t.companiesTitle}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {t.companies.map((company) => (
              <div key={company.name} className="group relative flex items-center justify-center h-12 px-6 rounded-lg glass-card border border-slate-800 hover:border-slate-700 transition-all duration-300">
                {/* Placeholder for company logo */}
                <span className="text-sm font-medium text-slate-500 group-hover:text-slate-300 transition-colors">
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
          <h3 className="text-center text-xs font-semibold text-slate-500 uppercase tracking-wide mb-8">
            {t.certificationsTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.topCertifications.map((cert) => (
              <div key={cert.name} className="group p-4 rounded-xl glass-card border border-slate-800 hover:border-electric-500/30 transition-all duration-300 text-center">
                {/* Placeholder for cert badge */}
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-electric-500/20 to-cyan-500/20 flex items-center justify-center">
                  <span className="text-xl">🏆</span>
                </div>
                <div className="text-xs font-medium text-slate-300 mb-1">{cert.name}</div>
                <div className="text-xs text-slate-500">{cert.issuer}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
