"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Briefcase,
  Lightning,
  UsersThree,
  Calendar,
  CurrencyDollar,
  PaperPlaneRight,
} from "@phosphor-icons/react"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"
import { Button } from "@/components/ui/Button"

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
        icon: Lightning,
      },
      {
        id: "architecture",
        label: "Diseño de Arquitectura",
        description: "Plataformas escalables desde cero",
        icon: Briefcase,
      },
      {
        id: "technical-lead",
        label: "Technical Leadership",
        description: "Liderazgo de equipos técnicos",
        icon: UsersThree,
      },
    ] as ProjectType[],
    timelineLabel: "Timeline estimado",
    timelineOptions: [
      "Seleccionar...",
      "Menos de 1 mes",
      "1-3 meses",
      "3-6 meses",
      "6+ meses",
    ],
    budgetLabel: "Presupuesto aproximado",
    budgetOptions: [
      "Seleccionar...",
      "Menos de 10K€",
      "10K - 50K€",
      "50K - 100K€",
      "100K€+",
    ],
    namePlaceholder: "Nombre completo",
    emailPlaceholder: "Email profesional",
    messagePlaceholder: "Cuéntame sobre tu proyecto...",
    submitButton: "Enviar propuesta",
    microcopy: "Te responderé en menos de 24 horas 🚀",
    required: "Campo requerido",
  },
  en: {
    legend: "What type of project do you have in mind?",
    projectTypes: [
      {
        id: "consulting",
        label: "Technical Consulting",
        description: "Cloud/payments architecture advisory",
        icon: Lightning,
      },
      {
        id: "architecture",
        label: "Architecture Design",
        description: "Scalable platforms from scratch",
        icon: Briefcase,
      },
      {
        id: "technical-lead",
        label: "Technical Leadership",
        description: "Leading technical teams",
        icon: UsersThree,
      },
    ] as ProjectType[],
    timelineLabel: "Estimated timeline",
    timelineOptions: [
      "Select...",
      "Less than 1 month",
      "1-3 months",
      "3-6 months",
      "6+ months",
    ],
    budgetLabel: "Approximate budget",
    budgetOptions: [
      "Select...",
      "Less than 10K€",
      "10K - 50K€",
      "50K - 100K€",
      "100K€+",
    ],
    namePlaceholder: "Full name",
    emailPlaceholder: "Professional email",
    messagePlaceholder: "Tell me about your project...",
    submitButton: "Send proposal",
    microcopy: "I'll respond within 24 hours 🚀",
    required: "Required field",
  },
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
      projectType: selectedType || "",
      timeline: formData.get("timeline") as string,
      budget: formData.get("budget") as string,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      if (!response.ok) throw new Error("Failed to submit")

      e.currentTarget.reset()
      setSelectedType(null)
    } catch (err) {
      console.error("Form submission error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputBase =
    "w-full px-4 py-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2"

  const inputStyle: React.CSSProperties = {
    backgroundColor: "var(--surface-primary)",
    border: "1px solid var(--border-subtle)",
    color: "var(--text-primary)",
    // @ts-expect-error CSS custom property for Tailwind ring
    "--tw-ring-color": "var(--accent-primary)",
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
      <fieldset className="mb-8">
        <legend className="text-lg font-semibold mb-4 text-[var(--text-primary)]">
          {t.legend}
        </legend>

        <div className="grid md:grid-cols-3 gap-4">
          {t.projectTypes.map((type) => {
            const IconComponent = type.icon
            const isSelected = selectedType === type.id

            return (
              <label
                key={type.id}
                className="p-4 rounded-lg cursor-pointer transition-all duration-200 glass-card border-2"
                style={{
                  borderColor: isSelected
                    ? "var(--accent-primary)"
                    : "var(--border-subtle)",
                  backgroundColor: isSelected ? "var(--accent-subtle)" : "transparent",
                  boxShadow: isSelected ? "var(--shadow-glow-sm)" : "none",
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
                  style={{
                    color: isSelected
                      ? "var(--accent-primary)"
                      : "var(--text-secondary)",
                  }}
                />

                <div>
                  <div
                    className="font-medium mb-1"
                    style={{
                      color: isSelected
                        ? "var(--text-primary)"
                        : "var(--text-secondary)",
                    }}
                  >
                    {type.label}
                  </div>
                  <div className="text-sm text-[var(--text-secondary)]">
                    {type.description}
                  </div>
                </div>
              </label>
            )
          })}
        </div>
      </fieldset>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium mb-2 text-[var(--text-secondary)]">
            <Calendar size={16} weight="duotone" />
            {t.timelineLabel}
          </label>
          <select
            name="timeline"
            required
            className={inputBase}
            style={inputStyle}
          >
            {t.timelineOptions.map((option, index) => (
              <option
                key={index}
                value={index === 0 ? "" : option}
                disabled={index === 0}
              >
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium mb-2 text-[var(--text-secondary)]">
            <CurrencyDollar size={16} weight="duotone" />
            {t.budgetLabel}
          </label>
          <select name="budget" required className={inputBase} style={inputStyle}>
            {t.budgetOptions.map((option, index) => (
              <option
                key={index}
                value={index === 0 ? "" : option}
                disabled={index === 0}
              >
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <input
          type="text"
          name="name"
          required
          placeholder={t.namePlaceholder}
          className={inputBase}
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          required
          placeholder={t.emailPlaceholder}
          className={inputBase}
          style={inputStyle}
        />
        <textarea
          name="message"
          required
          rows={6}
          placeholder={t.messagePlaceholder}
          className={`${inputBase} resize-none`}
          style={inputStyle}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full rounded-lg px-8 py-4"
        isLoading={isSubmitting}
        rightIcon={<PaperPlaneRight size={20} weight="bold" />}
      >
        {t.submitButton}
      </Button>

      <p className="text-sm text-center mt-3 text-[var(--text-tertiary)]">
        {t.microcopy}
      </p>
    </motion.form>
  )
}
