"use client"

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { GradientOrbs } from '@/components/effects/GradientOrbs'
import { GridPattern } from '@/components/effects/GridPattern'
import dynamic from 'next/dynamic'

const ParticleNetwork = dynamic(
  () => import('@/components/effects/ParticleNetwork').then(mod => mod.ParticleNetwork),
  { ssr: false }
)

interface HeroSectionProps {
  locale?: 'es' | 'en'
}

const copy = {
  es: {
    greeting: 'Hola, soy',
    name: 'Juan Carlos',
    lastName: 'García Arriero',
    role: 'Senior Technical Lead',
    specialization: 'Cloud & Payments Architect',
    description: 'Diseño y lidero arquitecturas cloud que procesan millones de transacciones en banca digital. Especializado en sistemas de pagos, microservicios y soluciones Data & AI.',
    cta: 'Ver mi trabajo',
    ctaSecondary: 'Contactar',
    stats: [
      { value: 15, suffix: '+', label: 'Años experiencia' },
      { value: 140, suffix: '+', label: 'Certificaciones' },
      { value: 12, suffix: '', label: 'Equipo actual' },
      { value: 5, suffix: 'M+', label: 'Usuarios impactados' },
    ],
    scroll: 'Scroll para explorar',
    available: 'Disponible para proyectos',
    techStack: 'Tech Stack Principal',
  },
  en: {
    greeting: "Hi, I'm",
    name: 'Juan Carlos',
    lastName: 'García Arriero',
    role: 'Senior Technical Lead',
    specialization: 'Cloud & Payments Architect',
    description: 'I design and lead cloud architectures processing millions of transactions in digital banking. Specialized in payment systems, microservices, and Data & AI solutions.',
    cta: 'View my work',
    ctaSecondary: 'Contact me',
    stats: [
      { value: 15, suffix: '+', label: 'Years experience' },
      { value: 140, suffix: '+', label: 'Certifications' },
      { value: 12, suffix: '', label: 'Current team' },
      { value: 5, suffix: 'M+', label: 'Users impacted' },
    ],
    scroll: 'Scroll to explore',
    available: 'Available for projects',
    techStack: 'Main Tech Stack',
  },
}

export function HeroSection({ locale = 'es' }: HeroSectionProps) {
  const t = copy[locale]
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <GridPattern />
        <GradientOrbs />
        <div className="absolute inset-0">
          <ParticleNetwork />
        </div>
      </div>

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20"
      >
        {/* Two column layout using flexbox */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
          {/* Left column - Text */}
          <div style={{ flex: '1 1 400px', minWidth: '300px' }}>
            <div className="space-y-6">
              {/* Availability badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  {t.available}
                </span>
              </motion.div>

              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-slate-400"
              >
                {t.greeting}
              </motion.p>

              {/* Name */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1.1, color: '#f8fafc' }}
                >
                  {t.name}
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1.1, background: 'linear-gradient(90deg, #22d3ee, #67e8f9, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  {t.lastName}
                </motion.h1>
              </div>

              {/* Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-xl font-semibold text-slate-200">{t.role}</p>
                <p className="text-lg text-cyan-400">{t.specialization}</p>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="max-w-lg text-base leading-relaxed text-slate-400"
              >
                {t.description}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', paddingTop: '0.5rem' }}
              >
                <MagneticButton
                  href={locale === 'es' ? '/projects' : '/en/projects'}
                  variant="primary"
                  size="lg"
                >
                  {t.cta}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </MagneticButton>
                <MagneticButton
                  href={locale === 'es' ? '/contact' : '/en/contact'}
                  variant="secondary"
                  size="lg"
                >
                  {t.ctaSecondary}
                </MagneticButton>
              </motion.div>
            </div>
          </div>

          {/* Right column - Stats card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ flex: '1 1 350px', minWidth: '300px', maxWidth: '450px' }}
          >
            {/* Glass Card */}
            <div 
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '1.5rem',
                border: '1px solid rgba(51, 65, 85, 0.5)',
                background: 'rgba(15, 23, 42, 0.7)',
                backdropFilter: 'blur(16px)',
                padding: '2rem',
              }}
            >
              {/* Gradient border glow */}
              <div 
                style={{
                  position: 'absolute',
                  inset: '-1px',
                  borderRadius: '1.5rem',
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), transparent 50%, rgba(139, 92, 246, 0.2))',
                  pointerEvents: 'none',
                }}
              />
              
              <div style={{ position: 'relative' }}>
                {/* Stats Grid - 2x2 using CSS Grid */}
                <div 
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '2rem',
                  }}
                >
                  {t.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      style={{ textAlign: 'center' }}
                    >
                      <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#22d3ee' }}>
                        <AnimatedCounter
                          value={stat.value}
                          suffix={stat.suffix}
                          duration={2.5}
                        />
                      </div>
                      <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#94a3b8' }}>{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Tech stack preview */}
                <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(51, 65, 85, 0.5)', paddingTop: '1.5rem' }}>
                  <p style={{ marginBottom: '1rem', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b' }}>
                    {t.techStack}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['Azure', 'Kubernetes', 'Python', 'React', 'Node.js', 'Terraform'].map((tech) => (
                      <span
                        key={tech}
                        style={{
                          borderRadius: '9999px',
                          background: 'rgba(30, 41, 59, 0.8)',
                          padding: '0.375rem 0.75rem',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          color: '#cbd5e1',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-slate-500">
            {t.scroll}
          </span>
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-slate-600 p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="h-2 w-1 rounded-full bg-cyan-400"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
