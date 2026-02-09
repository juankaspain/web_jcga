"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "@phosphor-icons/react"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"
import { useRef } from "react"
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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category, categoryIndex) => (
        <motion.div
          key={category.name}
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={
            isInView
              ? prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 1, y: 0 }
              : prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
          className="group p-6 rounded-xl glass-card transition-all duration-300 theme-transition border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:shadow-[var(--shadow-md)]"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 bg-[var(--accent-subtle)] border border-[var(--accent-muted)]">
              <div className="text-[var(--accent-primary)]">{category.icon}</div>
            </div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
              {category.name}
            </h3>
          </div>

          <ul className="space-y-3 mb-6">
            {category.skills.map((skill) => (
              <li key={skill.name} className="flex items-start gap-2">
                <CheckCircle
                  size={20}
                  weight="fill"
                  className="flex-shrink-0 mt-0.5 text-[var(--warning)]"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm leading-tight text-[var(--text-primary)]">
                    {skill.name}
                  </div>
                  <div className="text-xs mt-0.5 leading-relaxed text-[var(--text-secondary)]">
                    {skill.context}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {category.certBadges && category.certBadges.length > 0 && (
            <div className="pt-4 border-t border-[var(--border-subtle)]">
              <div className="flex flex-wrap gap-2">
                {category.certBadges.map((badge) => (
                  <div key={badge.name} className="group/badge relative" title={badge.name}>
                    <Image
                      src={badge.icon}
                      width={32}
                      height={32}
                      alt={badge.name}
                      className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded whitespace-nowrap opacity-0 group-hover/badge:opacity-100 transition-opacity duration-200 pointer-events-none bg-[var(--surface-secondary)] text-[var(--text-secondary)]">
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
