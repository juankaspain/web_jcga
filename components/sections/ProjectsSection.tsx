import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectShowcaseCard } from '@/components/projects/ProjectShowcaseCard'
import { getAllProjects } from '@/lib/data/projects'
import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react'

interface ProjectsSectionProps {
  locale?: 'es' | 'en'
}

const copy = {
  es: {
    eyebrow: 'Portfolio',
    title: 'Casos de éxito que procesaron 500M€/año',
    subtitle: 'Proyectos reales con impacto medible en producción bancaria. Desde plataformas SEPA hasta sistemas anti-fraude ML.',
    ctaText: 'Ver todos los casos de estudio',
    ctaLink: '/projects'
  },
  en: {
    eyebrow: 'Portfolio',
    title: 'Success cases that processed €500M/year',
    subtitle: 'Real projects with measurable impact in banking production. From SEPA platforms to ML anti-fraud systems.',
    ctaText: 'View all case studies',
    ctaLink: '/en/projects'
  }
}

export function ProjectsSection({ locale = 'es' }: ProjectsSectionProps) {
  const t = copy[locale]
  const allProjects = getAllProjects(locale)
  // Show only first 3 projects in homepage
  const featuredProjects = allProjects.slice(0, 3)

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-slate-950 to-navy-950" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="relative container-professional">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          subtitle={t.subtitle}
          align="center"
        />
        
        {/* Featured Projects - Top 3 */}
        <div className="projects-grid mt-16">
          {featuredProjects.map((project) => (
            <ProjectShowcaseCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              problem={project.problem}
              thumbnail={project.thumbnail}
              thumbnailAlt={project.thumbnailAlt}
              highlightMetric={project.highlightMetric}
              tags={project.tags}
              metrics={project.metrics}
              locale={locale}
            />
          ))}
        </div>

        {/* CTA to all projects */}
        <div className="flex justify-center mt-12">
          <Link
            href={t.ctaLink}
            className="group inline-flex items-center gap-2 px-8 py-4 glass-card border-2 border-slate-700 text-slate-300 rounded-lg font-semibold hover:border-electric-500/50 hover:text-electric-400 transition-all duration-300"
          >
            {t.ctaText}
            <ArrowRight 
              size={20} 
              weight="bold" 
              className="group-hover:translate-x-1 transition-transform" 
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
