"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {experiences.map((exp, index) => {
        const isExpanded = expandedIndex === index
        
        return (
          <motion.div
            key={`${exp.company}-${index}`}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-xl glass-card transition-all duration-300 theme-transition"
            style={{
              border: '1px solid var(--border-subtle)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)' }}
          >
            {/* Collapsible header */}
            <div 
              className="flex items-start justify-between cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {exp.role}
                </h3>
                <p className="font-semibold mb-1" style={{ color: 'var(--accent-primary)' }}>
                  {exp.company}
                </p>
                <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                  {exp.period}
                </p>
              </div>
              
              {/* Visible highlights without expanding */}
              <div className="flex flex-wrap gap-2 items-start ml-4">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 glass text-sm rounded-lg"
                  style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}
                >
                  <Users size={16} weight="duotone" style={{ color: 'var(--accent-primary)' }} />
                  <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{t.team}:</span>
                  <span className="font-semibold">{exp.teamSize}</span>
                </span>
                
                {exp.budget && (
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 glass text-sm rounded-lg"
                    style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}
                  >
                    <CurrencyDollar size={16} weight="duotone" style={{ color: 'var(--warning)' }} />
                    <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{t.budget}:</span>
                    <span className="font-semibold">{exp.budget}</span>
                  </span>
                )}
                
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 glass text-sm rounded-lg"
                  style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}
                >
                  <ChartLine size={16} weight="duotone" style={{ color: 'var(--success)' }} />
                  <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{t.impact}:</span>
                  <span className="font-semibold">{exp.impact}</span>
                </span>
                
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center w-8 h-8 rounded-lg transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <CaretDown size={20} weight="bold" />
                </motion.div>
              </div>
            </div>
            
            {/* Expandable content */}
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={prefersReducedMotion ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={prefersReducedMotion ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
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
