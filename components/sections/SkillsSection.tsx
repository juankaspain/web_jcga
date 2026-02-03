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
    <section ref={ref} className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at top right, rgba(6, 182, 212, 0.05), transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        {/* Skills grid using CSS Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + catIndex * 0.1, duration: 0.6 }}
              style={{
                borderRadius: '1rem',
                border: '1px solid rgba(30, 41, 59, 1)',
                background: 'rgba(15, 23, 42, 0.5)',
                padding: '1.5rem',
              }}
            >
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.125rem', fontWeight: 600, color: '#f8fafc' }}>
                {category.name}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#cbd5e1' }}>{skill.name}</span>
                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: '0.5rem', overflow: 'hidden', borderRadius: '9999px', background: '#1e293b' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          delay: 0.4 + catIndex * 0.1 + skillIndex * 0.05,
                          duration: 1,
                          ease: 'easeOut',
                        }}
                        style={{
                          height: '100%',
                          borderRadius: '9999px',
                          background: 'linear-gradient(90deg, #06b6d4, #22d3ee)',
                        }}
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
          style={{ marginTop: '4rem', textAlign: 'center' }}
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
