"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  CaretDown, 
  TrendingUp, 
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
  es: {
    team: "Equipo",
    budget: "Budget",
    impact: "Impacto",
    achievements: "Logros Clave",
    technologies: "Tecnologías"
  },
  en: {
    team: "Team",
    budget: "Budget",
    impact: "Impact",
    achievements: "Key Achievements",
    technologies: "Technologies"
  }
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
            className="p-6 rounded-xl glass-card border border-slate-800 hover:border-electric-500/30 transition-all duration-300"
          >
            {/* Collapsible header */}
            <div 
              className="flex items-start justify-between cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-electric-400 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-electric-400 font-semibold mb-1">
                  {exp.company}
                </p>
                <p className="text-sm text-slate-500">
                  {exp.period}
                </p>
              </div>
              
              {/* Visible highlights without expanding */}
              <div className="flex flex-wrap gap-2 items-start ml-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 glass text-sm text-slate-300 rounded-lg border border-slate-800">
                  <Users size={16} weight="duotone" className="text-electric-400" />
                  <span className="text-xs text-slate-500">{t.team}:</span>
                  <span className="font-semibold">{exp.teamSize}</span>
                </span>
                
                {exp.budget && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 glass text-sm text-slate-300 rounded-lg border border-slate-800">
                    <CurrencyDollar size={16} weight="duotone" className="text-gold-400" />
                    <span className="text-xs text-slate-500">{t.budget}:</span>
                    <span className="font-semibold">{exp.budget}</span>
                  </span>
                )}
                
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 glass text-sm text-slate-300 rounded-lg border border-slate-800">
                  <ChartLine size={16} weight="duotone" className="text-success-500" />
                  <span className="text-xs text-slate-500">{t.impact}:</span>
                  <span className="font-semibold">{exp.impact}</span>
                </span>
                
                {/* Expand icon */}
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <CaretDown size={20} weight="bold" className="text-slate-400" />
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
                  <div className="pt-6 border-t border-slate-800 mt-4">
                    
                    {/* Achievements with metrics */}
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <TrendingUp size={20} weight="duotone" className="text-gold-400" />
                      {t.achievements}
                    </h4>
                    <ul className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex gap-3 items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-electric-400 mt-2 flex-shrink-0" />
                          <span className="text-slate-300 flex-1 leading-relaxed">
                            {achievement.description}
                          </span>
                          <span className="text-electric-400 font-semibold text-sm whitespace-nowrap">
                            {achievement.metric}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Tech stack used */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-500 mb-3">
                        {t.technologies}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 glass text-slate-400 text-xs rounded border border-slate-800 hover:border-electric-500/30 hover:text-electric-400 transition-all duration-300"
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
