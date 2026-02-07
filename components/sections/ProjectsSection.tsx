import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectShowcaseCard } from '@/components/projects/ProjectShowcaseCard'

interface ProjectsSectionProps {
  locale?: 'es' | 'en'
}

const copy = {
  es: {
    title: 'Proyectos Destacados',
    subtitle: 'Casos de estudio reales con impacto medible en producción'
  },
  en: {
    title: 'Featured Projects',
    subtitle: 'Real case studies with measurable production impact'
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
    },
    {
      slug: 'open-banking-api',
      title: 'API Gateway Open Banking',
      problem: 'Desarrollo de API Gateway PSD2-compliant para exposición segura de datos bancarios a TPPs, con rate limiting y OAuth 2.0.',
      thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      thumbnailAlt: 'Open Banking API Gateway',
      highlightMetric: {
        icon: '🔐',
        label: 'Compliance',
        value: 'PSD2'
      },
      tags: ['Kong', 'OAuth 2.0', 'Redis', 'Grafana', 'Prometheus'],
      metrics: [
        { value: '50K', label: 'Req/min' },
        { value: '150+', label: 'TPPs' },
        { value: '<50ms', label: 'Latencia' }
      ]
    },
    {
      slug: 'cloud-migration',
      title: 'Migración Cloud On-Prem → Azure',
      problem: 'Liderazgo técnico de migración de monolito legacy on-premise a microservicios en Azure Kubernetes Service con zero downtime.',
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      thumbnailAlt: 'Cloud Migration Architecture',
      highlightMetric: {
        icon: '☁️',
        label: 'Downtime',
        value: '0min'
      },
      tags: ['Azure', 'AKS', 'Terraform', 'Helm', 'ArgoCD', 'Istio'],
      metrics: [
        { value: '0', label: 'Downtime' },
        { value: '35%', label: '↓ Costes' },
        { value: '18', label: 'Microservicios' }
      ]
    },
    {
      slug: 'realtime-analytics',
      title: 'Analytics Real-Time',
      problem: 'Construcción de pipeline de datos en tiempo real para dashboards ejecutivos con métricas de negocio actualizadas cada 5 segundos.',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&hue=200',
      thumbnailAlt: 'Real-Time Analytics Dashboard',
      highlightMetric: {
        icon: '📊',
        label: 'Actualización',
        value: '5seg'
      },
      tags: ['Kafka', 'Flink', 'ClickHouse', 'Grafana', 'Python'],
      metrics: [
        { value: '5s', label: 'Refresh' },
        { value: '10M', label: 'Eventos/día' },
        { value: '50+', label: 'Dashboards' }
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
    },
    {
      slug: 'open-banking-api',
      title: 'Open Banking API Gateway',
      problem: 'Developed PSD2-compliant API Gateway for secure exposure of banking data to TPPs, with rate limiting and OAuth 2.0.',
      thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      thumbnailAlt: 'Open Banking API Gateway',
      highlightMetric: {
        icon: '🔐',
        label: 'Compliance',
        value: 'PSD2'
      },
      tags: ['Kong', 'OAuth 2.0', 'Redis', 'Grafana', 'Prometheus'],
      metrics: [
        { value: '50K', label: 'Req/min' },
        { value: '150+', label: 'TPPs' },
        { value: '<50ms', label: 'Latency' }
      ]
    },
    {
      slug: 'cloud-migration',
      title: 'Cloud Migration On-Prem → Azure',
      problem: 'Led technical migration of legacy on-premise monolith to microservices on Azure Kubernetes Service with zero downtime.',
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      thumbnailAlt: 'Cloud Migration Architecture',
      highlightMetric: {
        icon: '☁️',
        label: 'Downtime',
        value: '0min'
      },
      tags: ['Azure', 'AKS', 'Terraform', 'Helm', 'ArgoCD', 'Istio'],
      metrics: [
        { value: '0', label: 'Downtime' },
        { value: '35%', label: '↓ Costs' },
        { value: '18', label: 'Microservices' }
      ]
    },
    {
      slug: 'realtime-analytics',
      title: 'Real-Time Analytics',
      problem: 'Built real-time data pipeline for executive dashboards with business metrics updated every 5 seconds.',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&hue=200',
      thumbnailAlt: 'Real-Time Analytics Dashboard',
      highlightMetric: {
        icon: '📊',
        label: 'Update',
        value: '5sec'
      },
      tags: ['Kafka', 'Flink', 'ClickHouse', 'Grafana', 'Python'],
      metrics: [
        { value: '5s', label: 'Refresh' },
        { value: '10M', label: 'Events/day' },
        { value: '50+', label: 'Dashboards' }
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
          title={t.title}
          subtitle={t.subtitle}
          align="center"
        />
        
        <div className="projects-grid mt-16">
          {projects.map((project) => (
            <ProjectShowcaseCard
              key={project.slug}
              {...project}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
