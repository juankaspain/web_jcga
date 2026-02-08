import { SectionHeading } from '@/components/ui/SectionHeading'
import { ExperienceAccordion } from '@/components/experience/ExperienceAccordion'
import { experiences } from '@/lib/data/experience'

interface ExperienceSectionProps {
  locale?: 'es' | 'en'
}

const copy = {
  es: {
    eyebrow: 'Trayectoria',
    title: 'Dónde he creado impacto',
    subtitle: 'Liderazgo técnico en proyectos críticos de transformación digital bancaria'
  },
  en: {
    eyebrow: 'Career',
    title: 'Where I\'ve created impact',
    subtitle: 'Technical leadership in critical digital banking transformation projects'
  }
}

function mapExperiencesToAccordion(locale: 'es' | 'en') {
  return experiences.map((exp) => ({
    role: exp.role,
    company: exp.company,
    period: exp.period,
    teamSize: locale === 'es' ? `${exp.location}` : `${exp.location}`,
    impact: exp.impact ? exp.impact[0] : exp.description,
    achievements: exp.highlights.map((h) => ({
      description: h,
      metric: ''
    })),
    techStack: exp.technologies
  }))
}

export function ExperienceSection({ locale = 'es' }: ExperienceSectionProps) {
  const t = copy[locale]
  const adaptedExperiences = mapExperiencesToAccordion(locale)

  return (
    <section
      className="relative py-24 overflow-hidden theme-transition"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          subtitle={t.subtitle}
        />
        <ExperienceAccordion experiences={adaptedExperiences} locale={locale} />
      </div>
    </section>
  )
}
