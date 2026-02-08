"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Briefcase,
  Lightning,
  UsersThree,
  Calendar,
  CurrencyDollar,
  PaperPlaneRight
} from "@phosphor-icons/react"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"

interface ProjectType {
  id: string
  label: string
  description: string
  icon: typeof Briefcase
}

interface SmartContactFormProps {
  locale?: "es" | "en"
}

const copy = {
  es: {
    legend: "\u00bfQu\u00e9 tipo de proyecto tienes en mente?",
    projectTypes: [
      { id: "consulting", label: "Consultor\u00eda T\u00e9cnica", description: "Asesoramiento arquitectura cloud/pagos", icon: Lightning },
      { id: "architecture", label: "Dise\u00f1o de Arquitectura", description: "Plataformas escalables desde cero", icon: Briefcase },
      { id: "technical-lead", label: "Technical Leadership", description: "Liderazgo de equipos t\u00e9cnicos", icon: UsersThree }
    ] as ProjectType[],
    timelineLabel: "Timeline estimado",
    timelineOptions: ["Seleccionar...", "Menos de 1 mes", "1-3 meses", "3-6 meses", "6+ meses"],
    budgetLabel: "Presupuesto aproximado",
    budgetOptions: ["Seleccionar...", "Menos de 10K\u20ac", "10K - 50K\u20ac", "50K - 100K\u20ac", "100K\u20ac+"],
    namePlaceholder: "Nombre completo",
    emailPlaceholder: "Email profesional",
    messagePlaceholder: "Cu\u00e9ntame sobre tu proyecto...",
    submitButton: "Enviar propuesta",
    microcopy: "Te responder\u00e9 en menos de 24 horas \uD83D\uDE80",
    required: "Campo requerido"
  },
  en: {
    legend: "What type of project do you have in mind?",
    projectTypes: [
      { id: "consulting", label: "Technical Consulting", description: "Cloud/payments architecture advisory", icon: Lightning },
      { id: "architecture", label: "Architecture Design", description: "Scalable platforms from scratch", icon: Briefcase },
      { id: "technical-lead", label: "Technical Leadership", description: "Leading technical teams", icon: UsersThree }
    ] as ProjectType[],
    timelineLabel: "Estimated timeline",
    timelineOptions: ["Select...", "Less than 1 month", "1-3 months", "3-6 months", "6+ months"],
    budgetLabel: "Approximate budget",
    budgetOptions: ["Select...", "Less than 10K\u20ac", "10K - 50K\u20ac", "50K - 100K\u20ac", "100K\u20ac+"],
    namePlaceholder: "Full name",
    emailPlaceholder: "Professional email",
    messagePlaceholder: "Tell me about your project...",
    submitButton: "Send proposal",
    microcopy: "I'll respond within 24 hours \uD83D\uDE80",
    required: "Required field"
  }
}

export function SmartContactForm({ locale = "es" }: SmartContactFormProps) {
  const t = copy[locale]
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)
    const body = {
      projectType: selectedType || '',
      timeline: formData.get('timeline') as string,
      budget: formData.get('budget') as string,
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    }
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (!response.ok) throw new Error('Failed to submit')
      e.currentTarget.reset()
      setSelectedType(null)
    } catch (err) {
      console.error('Form submission error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    backgroundColor: 'var(--surface-primary)',
    border: '1px solid var(--border-subtle)',
    color: 'var(--text-primary)',
  }

  const inputFocusClass = 'focus:outline-none focus:ring-2 transition-all duration-300'

  return (
    <motion.form
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto"
    >
      {/* Step 1: Project type selection */}
      <fieldset className="mb-8">
        <legend className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
          {t.legend}
        </legend>
        <div className="grid md:grid-cols-3 gap-4">
          {t.projectTypes.map((type) => {
            const IconComponent = type.icon
            const isSelected = selectedType === type.id

            return (
              <label
                key={type.id}
                className="p-4 rounded-lg cursor-pointer transition-all duration-300 glass-card"
                style={{
                  border: isSelected ? '2px solid var(--accent-primary)' : '2px solid var(--border-subtle)',
                  backgroundColor: isSelected ? 'var(--accent-subtle)' : 'transparent',
                  boxShadow: isSelected ? 'var(--shadow-glow-sm)' : 'none',
                }}
              >
                <input
                  type="radio"
                  name="projectType"
                  value={type.id}
                  className="sr-only"
                  onChange={(e) => setSelectedType(e.target.value)}
                  required
                />
                <IconComponent
                  size={24}
                  weight="duotone"
                  style={{ color: isSelected ? 'var(--accent-primary)' : 'var(--text-secondary)' }}
                />
                <div>
                  <div className="font-medium mb-1" style={{ color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                    {type.label}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {type.description}
                  </div>
                </div>
              </label>
            )
          })}
        </div>
      </fieldset>

      {/* Step 2: Project context */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
            <Calendar size={16} weight="duotone" />
            {t.timelineLabel}
          </label>
          <select
            name="timeline"
            required
            className={`w-full px-4 py-3 rounded-lg ${inputFocusClass}`}
            style={{ ...inputStyle, '--tw-ring-color': 'var(--accent-primary)' } as React.CSSProperties}
            onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)' }}
            onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)' }}
          >
            {t.timelineOptions.map((option, index) => (
              <option key={index} value={index === 0 ? "" : option} disabled={index === 0}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="flex items-center gap-2 text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
            <CurrencyDollar size={16} weight="duotone" />
            {t.budgetLabel}
          </label>
          <select
            name="budget"
            required
            className={`w-full px-4 py-3 rounded-lg ${inputFocusClass}`}
            style={{ ...inputStyle, '--tw-ring-color': 'var(--accent-primary)' } as React.CSSProperties}
            onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)' }}
            onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)' }}
          >
            {t.budgetOptions.map((option, index) => (
              <option key={index} value={index === 0 ? "" : option} disabled={index === 0}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Standard fields */}
      <div className="space-y-4 mb-6">
        <input
          type="text" name="name" required
          placeholder={t.namePlaceholder}
          className={`w-full px-4 py-3 rounded-lg ${inputFocusClass}`}
          style={inputStyle}
          onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)' }}
          onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)' }}
        />
        <input
          type="email" name="email" required
          placeholder={t.emailPlaceholder}
          className={`w-full px-4 py-3 rounded-lg ${inputFocusClass}`}
          style={inputStyle}
          onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)' }}
          onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)' }}
        />
        <textarea
          name="message" required rows={6}
          placeholder={t.messagePlaceholder}
          className={`w-full px-4 py-3 rounded-lg resize-none ${inputFocusClass}`}
          style={inputStyle}
          onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)' }}
          onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)' }}
        />
      </div>

      {/* CTA */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        style={{
          background: 'var(--accent-gradient)',
          color: 'var(--text-on-accent)',
          boxShadow: 'var(--shadow-glow-sm)',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-glow)' }}
        onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-glow-sm)' }}
      >
        {isSubmitting ? (
          <div className="loading-dots"><span></span><span></span><span></span></div>
        ) : (
          <>
            {t.submitButton}
            <PaperPlaneRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
      <p className="text-sm text-center mt-3" style={{ color: 'var(--text-tertiary)' }}>
        {t.microcopy}
      </p>
    </motion.form>
  )
}
