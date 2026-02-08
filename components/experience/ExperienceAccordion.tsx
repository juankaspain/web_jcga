"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import {
  CaretDown,
  TrendUp,
  Users,
  CurrencyDollar,
  ChartLine
} from "@phosphor-icons/react"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"

interface Achievement {
  description: string
  metric: string
}

interface Experience {
  role: string
  company: string
  period: string
  teamSize: string
  budget?: string
  impact: string
  achievements: Achievement[]
  techStack: string[]
}

interface ExperienceAccordionProps {
  experiences: Experience[]
  locale?: "es" | "en"
}

const copy = {
  es: { team: "Equipo", budget: "Budget", impact: "Impacto", achievements: "Logros Clave", technologies: "Tecnolog\u00edas" },
  en: { team: "Team", budget: "Budget", impact: "Impact", achievements: "Key Achievements", technologies: "Technologies" }
}

export function ExperienceAccordion({ experiences, locale = "es" }: ExperienceAccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const prefersReducedMotion = useReducedMotion()
  const t = copy[locale]
  const listRef = useRef(null)
  const isInView = useInView(listRef, { once: true, margin: "-50px" })

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div ref={listRef} className="space-y-4">
      {experiences.map((exp, index) => {
        const isExpanded = expandedIndex === index

        return (
          <motion.div
            key={`${exp.company}-${index}`}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={isInView ? (prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }) : (prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 })}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-xl border overflow-hidden theme-transition"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--surface-primary)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-primary)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-subtle)'
            }}
          >
            {/* Collapsible header */}
            <button
              onClick={() => toggleExpand(index)}
              className="w-full text-left p-6 flex items-start justify-between gap-4"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {exp.role}
                </h3>
                <p className="text-sm mt-1" style={{ color: 'var(--accent-primary)' }}>
                  {exp.company}
                </p>
                <p className="text-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>
                  {exp.period}
                </p>
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ color: 'var(--text-tertiary)' }}
              >
                <CaretDown size={20} />
              </motion.div>
            </button>

            {/* Visible highlights without expanding */}
            <div className="px-6 pb-4 flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
                <Users size={16} style={{ color: 'var(--accent-primary)' }} />
                {t.team}:&nbsp;
                <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{exp.teamSize}</span>
              </span>
              {exp.budget && (
                <span className="flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
                  <CurrencyDollar size={16} style={{ color: 'var(--accent-primary)' }} />
                  {t.budget}:&nbsp;
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{exp.budget}</span>
                </span>
              )}
              <span className="flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
                <ChartLine size={16} style={{ color: 'var(--accent-primary)' }} />
                {t.impact}:&nbsp;
                <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{exp.impact}</span>
              </span>
            </div>

            {/* Expandable content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 mt-4" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                      <TrendUp size={20} weight="duotone" style={{ color: 'var(--warning)' }} />
                      {t.achievements}
                    </h4>
                    <ul className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex gap-3 items-start">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--accent-primary)' }} />
                          <span className="flex-1 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            {achievement.description}
                          </span>
                          <span className="font-semibold text-sm whitespace-nowrap" style={{ color: 'var(--accent-primary)' }}>
                            {achievement.metric}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <h4 className="text-sm font-semibold mb-3" style={{ color: 'var(--text-tertiary)' }}>
                        {t.technologies}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 glass text-xs rounded transition-all duration-300"
                            style={{
                              color: 'var(--text-secondary)',
                              border: '1px solid var(--border-subtle)',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = 'var(--accent-primary)'
                              e.currentTarget.style.color = 'var(--accent-primary)'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = 'var(--border-subtle)'
                              e.currentTarget.style.color = 'var(--text-secondary)'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}
