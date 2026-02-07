import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectShowcaseCard } from '@/components/projects/ProjectShowcaseCard'
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

const mockProjects = {
  es: [
    {
      slug: 'sepa-platform',
      title: 'Plataforma SEPA Instant Payments',
      problem: 'Construcción desde cero de plataforma para procesar transferencias SEPA instant 24/7 con alta disponibilidad y cumplimiento normativo PSD2.',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      thumbnailAlt: 'SEPA Platform Dashboard',
      highlightMetric: {
        icon: '🎯',
        label: 'SLA',
        value: '99.95%'
      },
      tags: ['Azure', 'Kubernetes', 'Spring Boot', 'PostgreSQL', 'Redis', 'Kafka'],
      metrics: [
        { value: '2M', label: 'Trans/día' },
        { value: '5M+', label: 'Usuarios' },
        { value: '<2s', label: 'Latencia P95' }
      ]
    },
    {
      slug: 'payment-orchestrator',
      title: 'Orquestador Multi-PSP',
      problem: 'Diseño de arquitectura event-driven para enrutar pagos a 8+ proveedores (Redsys, Stripe, PayPal) con failover automático y optimización de costes.',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      thumbnailAlt: 'Payment Orchestrator Architecture',
      highlightMetric: {
        icon: '⚡',
        label: 'Ahorro',
        value: '30% costes'
      },
      tags: ['Node.js', 'TypeScript', 'RabbitMQ', 'MongoDB', 'Docker'],
      metrics: [
        { value: '500K', label: 'Trans/día' },
        { value: '8', label: 'PSPs' },
        { value: '99.9%', label: 'Uptime' }
      ]
    },
    {
      slug: 'fraud-detection-ml',
      title: 'Sistema Anti-Fraude ML',
      problem: 'Implementación de motor ML en tiempo real para detección de fraude en transacciones, reduciendo falsos positivos y mejorando experiencia de usuario.',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&sat=-100',
      thumbnailAlt: 'Fraud Detection ML Dashboard',
      highlightMetric: {
        icon: '🔒',
        label: 'Reducción fraude',
        value: '45%'
      },
      tags: ['Python', 'TensorFlow', 'Azure ML', 'Databricks', 'Spark'],
      metrics: [
        { value: '45%', label: '↓ Fraude' },
        { value: '60%', label: '↓ Falsos +' },
        { value: '<100ms', label: 'Scoring' }
      ]
    }
  ],
  en: [
    {
      slug: 'sepa-platform',
      title: 'SEPA Instant Payments Platform',
      problem: 'Built from scratch a platform to process SEPA instant transfers 24/7 with high availability and PSD2 regulatory compliance.',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      thumbnailAlt: 'SEPA Platform Dashboard',
      highlightMetric: {
        icon: '🎯',
        label: 'SLA',
        value: '99.95%'
      },
      tags: ['Azure', 'Kubernetes', 'Spring Boot', 'PostgreSQL', 'Redis', 'Kafka'],
      metrics: [
        { value: '2M', label: 'Trans/day' },
        { value: '5M+', label: 'Users' },
        { value: '<2s', label: 'P95 Latency' }
      ]
    },
    {
      slug: 'payment-orchestrator',
      title: 'Multi-PSP Payment Orchestrator',
      problem: 'Designed event-driven architecture to route payments across 8+ providers (Redsys, Stripe, PayPal) with automatic failover and cost optimization.',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      thumbnailAlt: 'Payment Orchestrator Architecture',
      highlightMetric: {
        icon: '⚡',
        label: 'Savings',
        value: '30% costs'
      },
      tags: ['Node.js', 'TypeScript', 'RabbitMQ', 'MongoDB', 'Docker'],
      metrics: [
        { value: '500K', label: 'Trans/day' },
        { value: '8', label: 'PSPs' },
        { value: '99.9%', label: 'Uptime' }
      ]
    },
    {
      slug: 'fraud-detection-ml',
      title: 'ML Fraud Detection System',
      problem: 'Implemented real-time ML engine for transaction fraud detection, reducing false positives and improving user experience.',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&sat=-100',
      thumbnailAlt: 'Fraud Detection ML Dashboard',
      highlightMetric: {
        icon: '🔒',
        label: 'Fraud reduction',
        value: '45%'
      },
      tags: ['Python', 'TensorFlow', 'Azure ML', 'Databricks', 'Spark'],
      metrics: [
        { value: '45%', label: '↓ Fraud' },
        { value: '60%', label: '↓ False +' },
        { value: '<100ms', label: 'Scoring' }
      ]
    }
  ]
}

export function ProjectsSection({ locale = 'es' }: ProjectsSectionProps) {
  const t = copy[locale]
  const projects = mockProjects[locale]

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
          {projects.map((project) => (
            <ProjectShowcaseCard
              key={project.slug}
              {...project}
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
