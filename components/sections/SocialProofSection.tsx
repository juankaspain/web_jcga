"use client"

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
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
      { name: 'Azure Solutions Architect Expert', icon: '/certs/azure-expert.png', issuer: 'Microsoft' },
      { name: 'Kubernetes Administrator (CKA)', icon: '/certs/cka.png', issuer: 'CNCF' },
      { name: 'Azure DevOps Engineer Expert', icon: '/certs/azure-devops.png', issuer: 'Microsoft' },
      { name: 'PSD2 Technical Specialist', icon: '/certs/psd2.png', issuer: 'EBA' }
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
      { name: 'Azure Solutions Architect Expert', icon: '/certs/azure-expert.png', issuer: 'Microsoft' },
      { name: 'Kubernetes Administrator (CKA)', icon: '/certs/cka.png', issuer: 'CNCF' },
      { name: 'Azure DevOps Engineer Expert', icon: '/certs/azure-devops.png', issuer: 'Microsoft' },
      { name: 'PSD2 Technical Specialist', icon: '/certs/psd2.png', issuer: 'EBA' }
    ]
  }
}

export function SocialProofSection({ locale = 'es' }: SocialProofSectionProps) {
  const t = copy[locale]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
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
      ref={ref}
      id="social-proof" 
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-slate-950 to-navy-950" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="relative container-professional">
        
        {/* Header */}
        <div className="text-center mb-16">
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
            className="text-4xl font-bold tracking-tight text-white md:text-5xl mb-4"
          >
            {t.title}
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-slate-400"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="relative p-12 rounded-2xl glass-strong border border-slate-800">
            {/* Quote icon */}
            <Quote 
              size={48} 
              weight="fill" 
              className="absolute top-8 left-8 text-electric-500/20" 
            />

            {/* Testimonial content */}
            <div className="relative z-10">
              <p className="text-xl text-slate-200 leading-relaxed mb-6 italic">
                "{t.testimonials[currentTestimonial].quote}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">
                    {t.testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-sm text-slate-400">
                    {t.testimonials[currentTestimonial].role} @ {t.testimonials[currentTestimonial].company}
                  </div>
                </div>
                
                {/* Navigation */}
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-lg glass border border-slate-800 hover:border-electric-500/50 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <CaretLeft size={20} weight="bold" className="text-slate-400" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-lg glass border border-slate-800 hover:border-electric-500/50 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <CaretRight size={20} weight="bold" className="text-slate-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
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
          </div>
        </motion.div>

        {/* Companies Logos */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-20"
        >
          <h3 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wide mb-8">
            {t.companiesTitle}
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {t.companies.map((company) => (
              <div 
                key={company.name}
                className="opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                title={company.name}
              >
                {/* Placeholder for company logo */}
                <div className="w-32 h-12 flex items-center justify-center text-slate-400 font-semibold text-lg">
                  {company.name}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top Certifications */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h3 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wide mb-8">
            {t.certificationsTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {t.topCertifications.map((cert) => (
              <div
                key={cert.name}
                className="group p-6 rounded-xl glass-card border border-slate-800 hover:border-gold-500/30 transition-all duration-300 text-center"
              >
                {/* Placeholder for cert badge */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                  <span className="text-2xl">🏆</span>
                </div>
                <div className="text-sm font-medium text-white mb-1 leading-tight">
                  {cert.name}
                </div>
                <div className="text-xs text-slate-500">
                  {cert.issuer}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
