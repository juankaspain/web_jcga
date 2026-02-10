"use client"

import { motion } from 'framer-motion'
import {
  EnvelopeSimple,
  LinkedinLogo,
  GithubLogo,
  Phone,
  MapPin,
} from '@phosphor-icons/react'
import { SmartContactForm } from '@/components/contact/SmartContactForm'

interface ContactSectionProps {
  locale?: 'es' | 'en'
}

const copy = {
  es: {
    eyebrow: 'Contacto',
    title: 'Trabajemos juntos',
    subtitle: 'Cuéntame sobre tu proyecto y veamos cómo puedo ayudarte',
    availability: 'Disponible para proyectos',
    contactInfoTitle: 'Información de contacto',
    contactInfoSubtitle:
      'Prefiero discusiones estructuradas. Completa el formulario o contacta directamente:',
    email: 'Email profesional',
    emailValue: 'contact@jcga.dev',
    phone: 'Teléfono',
    phoneValue: '+34 XXX XXX XXX',
    location: 'Ubicación',
    locationValue: 'Alicante, España (Remote-friendly)',
    responseTime: 'Tiempo de respuesta típico',
    responseTimeValue: '< 24 horas',
  },
  en: {
    eyebrow: 'Contact',
    title: "Let's work together",
    subtitle: "Tell me about your project and let's see how I can help",
    availability: 'Available for projects',
    contactInfoTitle: 'Contact information',
    contactInfoSubtitle:
      'I prefer structured discussions. Fill out the form or contact directly:',
    email: 'Professional email',
    emailValue: 'contact@jcga.dev',
    phone: 'Phone',
    phoneValue: '+34 XXX XXX XXX',
    location: 'Location',
    locationValue: 'Alicante, Spain (Remote-friendly)',
    responseTime: 'Typical response time',
    responseTimeValue: '< 24 hours',
  },
}

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/juancarlosgarciarriero',
    icon: LinkedinLogo,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/juankaspain',
    icon: GithubLogo,
  },
]

export function ContactSection({ locale = 'es' }: ContactSectionProps) {
  const t = copy[locale]

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden theme-transition"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide mb-6 bg-[var(--success-subtle)] text-[var(--success)] border border-[var(--success)]"
          >
            <span className="w-2 h-2 rounded-full animate-pulse bg-[var(--success)]" />
            {t.availability}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-primary)]"
          >
            {t.eyebrow}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-[var(--text-primary)]"
          >
            {t.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg mx-auto max-w-2xl text-[var(--text-secondary)]"
          >
            {t.subtitle}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <SmartContactForm locale={locale} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">
                {t.contactInfoTitle}
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                {t.contactInfoSubtitle}
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${t.emailValue}`}
                className="group flex items-center gap-4 p-4 rounded-xl glass-card transition-all duration-300 border border-[var(--border-subtle)] hover:border-[var(--accent-primary)]"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--accent-subtle)] border border-[var(--accent-muted)]">
                  <EnvelopeSimple
                    size={20}
                    weight="duotone"
                    className="text-[var(--accent-primary)]"
                  />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-[var(--text-tertiary)]">
                    {t.email}
                  </div>
                  <div className="text-sm font-medium text-[var(--text-primary)]">
                    {t.emailValue}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl glass-card border border-[var(--border-subtle)]">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--accent-subtle)] border border-[var(--accent-muted)]">
                  <Phone
                    size={20}
                    weight="duotone"
                    className="text-[var(--accent-primary)]"
                  />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-[var(--text-tertiary)]">
                    {t.phone}
                  </div>
                  <div className="text-sm font-medium text-[var(--text-primary)]">
                    {t.phoneValue}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl glass-card border border-[var(--border-subtle)]">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--success-subtle)] border border-[var(--success)]">
                  <MapPin
                    size={20}
                    weight="duotone"
                    className="text-[var(--success)]"
                  />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-[var(--text-tertiary)]">
                    {t.location}
                  </div>
                  <div className="text-sm font-medium text-[var(--text-primary)]">
                    {t.locationValue}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[var(--accent-subtle)] border border-[var(--accent-muted)]">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                <div className="text-xs font-semibold uppercase tracking-wide text-[var(--accent-primary)]">
                  {t.responseTime}
                </div>
              </div>
              <div className="text-sm font-medium text-[var(--text-primary)]">
                {t.responseTimeValue}
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--border-subtle)]">
              <div className="text-xs font-semibold uppercase tracking-wide mb-4 text-[var(--text-tertiary)]">
                Social
              </div>
              <div className="flex gap-3">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex-1"
                      aria-label={link.name}
                      title={link.name}
                    >
                      <div className="flex items-center justify-center gap-2 p-3 rounded-xl glass-card transition-all duration-300 border border-[var(--border-subtle)] hover:border-[var(--accent-primary)]">
                        <IconComponent
                          size={20}
                          weight="fill"
                          className="text-[var(--text-secondary)]"
                        />
                        <span className="text-xs font-medium text-[var(--text-secondary)]">
                          {link.name}
                        </span>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
