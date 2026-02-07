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
    legend: "¿Qué tipo de proyecto tienes en mente?",
    projectTypes: [
      {
        id: "consulting",
        label: "Consultoría Técnica",
        description: "Asesoramiento arquitectura cloud/pagos",
        icon: Lightning
      },
      {
        id: "architecture",
        label: "Diseño de Arquitectura",
        description: "Plataformas escalables desde cero",
        icon: Briefcase
      },
      {
        id: "technical-lead",
        label: "Technical Leadership",
        description: "Liderazgo de equipos técnicos",
        icon: UsersThree
      }
    ] as ProjectType[],
    timelineLabel: "Timeline estimado",
    timelineOptions: [
      "Seleccionar...",
      "Menos de 1 mes",
      "1-3 meses",
      "3-6 meses",
      "6+ meses"
    ],
    budgetLabel: "Presupuesto aproximado",
    budgetOptions: [
      "Seleccionar...",
      "Menos de 10K€",
      "10K - 50K€",
      "50K - 100K€",
      "100K€+"
    ],
    namePlaceholder: "Nombre completo",
    emailPlaceholder: "Email profesional",
    messagePlaceholder: "Cuéntame sobre tu proyecto...",
    submitButton: "Enviar propuesta",
    microcopy: "Te responderé en menos de 24 horas 🚀",
    required: "Campo requerido"
  },
  en: {
    legend: "What type of project do you have in mind?",
    projectTypes: [
      {
        id: "consulting",
        label: "Technical Consulting",
        description: "Cloud/payments architecture advisory",
        icon: Lightning
      },
      {
        id: "architecture",
        label: "Architecture Design",
        description: "Scalable platforms from scratch",
        icon: Briefcase
      },
      {
        id: "technical-lead",
        label: "Technical Leadership",
        description: "Leading technical teams",
        icon: UsersThree
      }
    ] as ProjectType[],
    timelineLabel: "Estimated timeline",
    timelineOptions: [
      "Select...",
      "Less than 1 month",
      "1-3 months",
      "3-6 months",
      "6+ months"
    ],
    budgetLabel: "Approximate budget",
    budgetOptions: [
      "Select...",
      "Less than 10K€",
      "10K - 50K€",
      "50K - 100K€",
      "100K€+"
    ],
    namePlaceholder: "Full name",
    emailPlaceholder: "Professional email",
    messagePlaceholder: "Tell me about your project...",
    submitButton: "Send proposal",
    microcopy: "I'll respond within 24 hours 🚀",
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
    
    // TODO: Implement form submission logic
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
  }

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
        <legend className="text-lg font-semibold text-white mb-4">
          {t.legend}
        </legend>
        <div className="grid md:grid-cols-3 gap-4">
          {t.projectTypes.map((type) => {
            const IconComponent = type.icon
            const isSelected = selectedType === type.id
            
            return (
              <label
                key={type.id}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? 'border-electric-500 bg-electric-500/5 shadow-glow-sm'
                    : 'border-slate-800 hover:border-slate-700 glass-card'
                }`}
              >
                <input
                  type="radio"
                  name="projectType"
                  value={type.id}
                  className="sr-only"
                  onChange={(e) => setSelectedType(e.target.value)}
                  required
                />
                <div className="flex flex-col gap-3">
                  <IconComponent 
                    size={24} 
                    weight="duotone" 
                    className={isSelected ? 'text-electric-400' : 'text-slate-400'}
                  />
                  <div>
                    <div className={`font-medium mb-1 ${
                      isSelected ? 'text-white' : 'text-slate-300'
                    }`}>
                      {type.label}
                    </div>
                    <div className="text-sm text-slate-400">
                      {type.description}
                    </div>
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
          <label className="flex items-center gap-2 text-sm font-medium text-slate-400 mb-2">
            <Calendar size={16} weight="duotone" />
            {t.timelineLabel}
          </label>
          <select 
            required
            className="w-full px-4 py-3 glass-card border border-slate-800 rounded-lg text-white focus:border-electric-500 focus:outline-none focus:ring-2 focus:ring-electric-500/20 transition-all duration-300"
          >
            {t.timelineOptions.map((option, index) => (
              <option key={index} value={index === 0 ? "" : option} disabled={index === 0}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-slate-400 mb-2">
            <CurrencyDollar size={16} weight="duotone" />
            {t.budgetLabel}
          </label>
          <select 
            required
            className="w-full px-4 py-3 glass-card border border-slate-800 rounded-lg text-white focus:border-electric-500 focus:outline-none focus:ring-2 focus:ring-electric-500/20 transition-all duration-300"
          >
            {t.budgetOptions.map((option, index) => (
              <option key={index} value={index === 0 ? "" : option} disabled={index === 0}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Standard fields */}
      <div className="space-y-4 mb-6">
        <input
          type="text"
          required
          placeholder={t.namePlaceholder}
          className="w-full px-4 py-3 glass-card border border-slate-800 rounded-lg text-white placeholder:text-slate-500 focus:border-electric-500 focus:outline-none focus:ring-2 focus:ring-electric-500/20 transition-all duration-300"
        />
        <input
          type="email"
          required
          placeholder={t.emailPlaceholder}
          className="w-full px-4 py-3 glass-card border border-slate-800 rounded-lg text-white placeholder:text-slate-500 focus:border-electric-500 focus:outline-none focus:ring-2 focus:ring-electric-500/20 transition-all duration-300"
        />
        <textarea
          required
          rows={6}
          placeholder={t.messagePlaceholder}
          className="w-full px-4 py-3 glass-card border border-slate-800 rounded-lg text-white placeholder:text-slate-500 focus:border-electric-500 focus:outline-none focus:ring-2 focus:ring-electric-500/20 transition-all duration-300 resize-none"
        />
      </div>

      {/* CTA with micro-copy */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-electric-500 to-electric-600 text-white rounded-lg font-semibold hover:from-electric-400 hover:to-electric-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg glow-electric-sm hover:glow-electric"
      >
        {isSubmitting ? (
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          <>
            {t.submitButton}
            <PaperPlaneRight 
              size={20} 
              weight="bold" 
              className="group-hover:translate-x-1 transition-transform" 
            />
          </>
        )}
      </button>
      
      <p className="text-sm text-slate-500 text-center mt-3">
        {t.microcopy}
      </p>
    </motion.form>
  )
}
