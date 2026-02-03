"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MagneticButton } from '@/components/ui/MagneticButton'

interface SkillsSectionProps {
  locale?: 'es' | 'en'
}

const skillCategories = {
  es: [
    {
      name: 'Cloud & Infrastructure',
      skills: [
        { name: 'Azure', level: 95 },
        { name: 'Kubernetes', level: 90 },
        { name: 'Terraform', level: 85 },
        { name: 'Docker', level: 92 },
      ],
    },
    {
      name: 'Backend & APIs',
      skills: [
        { name: 'Java/Spring', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'GraphQL/REST', level: 92 },
      ],
    },
    {
      name: 'Data & AI',
      skills: [
        { name: 'SQL/NoSQL', level: 88 },
        { name: 'Apache Kafka', level: 82 },
        { name: 'ML/AI', level: 75 },
        { name: 'Data Engineering', level: 78 },
      ],
    },
    {
      name: 'DevOps & Leadership',
      skills: [
        { name: 'CI/CD', level: 92 },
        { name: 'Observability', level: 85 },
        { name: 'Team Leadership', level: 90 },
        { name: 'Architecture', level: 95 },
      ],
    },
  ],
  en: [
    {
      name: 'Cloud & Infrastructure',
      skills: [
        { name: 'Azure', level: 95 },
        { name: 'Kubernetes', level: 90 },
        { name: 'Terraform', level: 85 },
        { name: 'Docker', level: 92 },
      ],
    },
    {
      name: 'Backend & APIs',
      skills: [
        { name: 'Java/Spring', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'GraphQL/REST', level: 92 },
      ],
    },
    {
      name: 'Data & AI',
      skills: [
        { name: 'SQL/NoSQL', level: 88 },
        { name: 'Apache Kafka', level: 82 },
        { name: 'ML/AI', level: 75 },
        { name: 'Data Engineering', level: 78 },
      ],
    },
    {
      name: 'DevOps & Leadership',
      skills: [
        { name: 'CI/CD', level: 92 },
        { name: 'Observability', level: 85 },
        { name: 'Team Leadership', level: 90 },
        { name: 'Architecture', level: 95 },
      ],
    },
  ],
}

const copy = {
  es: {
    eyebrow: 'Tech Stack',
    title: 'Herramientas del oficio',
    description: 'Las tecnologías con las que trabajo día a día para construir soluciones de alto impacto.',
    cta: 'Ver stack completo',
  },
  en: {
    eyebrow: 'Tech Stack',
    title: 'Tools of the trade',
    description: 'The technologies I work with daily to build high-impact solutions.',
    cta: 'View full stack',
  },
}

export function SkillsSection({ locale = 'es' }: SkillsSectionProps) {
  const t = copy[locale]
  const categories = skillCategories[locale]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.05),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + catIndex * 0.1, duration: 0.6 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
            >
              <h3 className="mb-6 text-lg font-semibold text-slate-50">{category.name}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-xs text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          delay: 0.4 + catIndex * 0.1 + skillIndex * 0.05,
                          duration: 1,
                          ease: 'easeOut',
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <MagneticButton
            href={locale === 'es' ? '/skills' : '/en/skills'}
            variant="secondary"
          >
            {t.cta}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
