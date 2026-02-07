"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "@phosphor-icons/react"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"
import type { ReactNode } from "react"

interface Skill {
  name: string
  context: string
}

interface CertBadge {
  name: string
  icon: string
}

interface SkillCategory {
  name: string
  icon: ReactNode
  skills: Skill[]
  certBadges?: CertBadge[]
}

interface SkillMatrixProps {
  categories: SkillCategory[]
  locale?: "es" | "en"
}

export function SkillMatrix({ categories, locale = "es" }: SkillMatrixProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category, categoryIndex) => (
        <motion.div
          key={category.name}
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          className="group p-6 rounded-xl glass-card border border-slate-800 hover:border-electric-500/30 transition-all duration-300"
        >
          {/* Category header with icon */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-electric-500/10 border border-electric-500/20 flex items-center justify-center group-hover:bg-electric-500/20 transition-colors duration-300">
              <div className="text-electric-400 group-hover:text-electric-300 transition-colors duration-300">
                {category.icon}
              </div>
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-electric-400 transition-colors duration-300">
              {category.name}
            </h3>
          </div>
          
          {/* Skills with real-world context */}
          <ul className="space-y-3 mb-6">
            {category.skills.map((skill) => (
              <li key={skill.name} className="flex items-start gap-2">
                <CheckCircle 
                  size={20} 
                  weight="fill" 
                  className="text-gold-500 flex-shrink-0 mt-0.5" 
                />
                <div className="flex-1 min-w-0">
                  <div className="text-white font-medium text-sm leading-tight">
                    {skill.name}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    {skill.context}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          
          {/* Related certification badges */}
          {category.certBadges && category.certBadges.length > 0 && (
            <div className="pt-4 border-t border-slate-800">
              <div className="flex flex-wrap gap-2">
                {category.certBadges.map((badge) => (
                  <div
                    key={badge.name}
                    className="group/badge relative"
                    title={badge.name}
                  >
                    <Image 
                      src={badge.icon}
                      width={32}
                      height={32}
                      alt={badge.name}
                      className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    />
                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-950 text-slate-300 text-xs rounded whitespace-nowrap opacity-0 group-hover/badge:opacity-100 transition-opacity duration-200 pointer-events-none">
                      {badge.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
