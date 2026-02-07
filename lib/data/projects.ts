export interface ProjectMetric {
  value: string
  label: string
}

export interface ProjectHighlight {
  icon: string
  label: string
  value: string
}

export interface ProjectSection {
  title: string
  content: string[]
}

export interface Project {
  slug: string
  title: string
  subtitle: string
  problem: string
  thumbnail: string
  thumbnailAlt: string
  highlightMetric: ProjectHighlight
  tags: string[]
  metrics: [ProjectMetric, ProjectMetric, ProjectMetric]
  challenge: ProjectSection
  solution: ProjectSection
  impact: ProjectSection
  techStack: {
    category: string
    technologies: string[]
  }[]
  results: {
    metric: string
    description: string
  }[]
  timeline: string
  team: string
  role: string
}

const projectsES: Project[] = [
  {
    slug: 'sepa-platform',
    title: 'Plataforma SEPA Instant Payments',
    subtitle: 'Arquitectura cloud-native para procesamiento de transferencias instantáneas 24/7',
    problem: 'Construcción desde cero de plataforma para procesar transferencias SEPA instant 24/7 con alta disponibilidad y cumplimiento normativo PSD2.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    thumbnailAlt: 'SEPA Platform Dashboard',
    highlightMetric: {
      icon: '🎯',
      label: 'SLA',
      value: '99.95%'
    },
    tags: ['Azure', 'Kubernetes', 'Spring Boot', 'PostgreSQL', 'Redis', 'Kafka', 'Terraform'],
    metrics: [
      { value: '2M', label: 'Trans/día' },
      { value: '5M+', label: 'Usuarios' },
      { value: '<2s', label: 'Latencia P95' }
    ],
    challenge: {
      title: 'El Desafío',
      content: [
        'Santander necesitaba una plataforma completamente nueva para procesar transferencias SEPA Instant Payments cumpliendo con la directiva PSD2 y los estándares del European Payments Council (EPC).',
        'La solución debía manejar 2 millones de transacciones diarias con disponibilidad 24/7/365, latencias inferiores a 2 segundos (P95), y garantizar SLA del 99.95%.',
        'Requisitos críticos: validación ISO 20022, procesamiento atómico de mensajes pain.001/pacs.008, reconciliación bancaria en tiempo real, y audit trail completo para cumplimiento normativo.'
      ]
    },
    solution: {
      title: 'La Solución',
      content: [
        'Diseñé una arquitectura cloud-native en Azure con 12 microservicios desplegados en AKS (Azure Kubernetes Service) usando Istio como service mesh para observabilidad y circuit breaking.',
        'Implementamos event-driven architecture con Kafka para procesamiento asíncrono, PostgreSQL con particionamiento por fecha para historical data, y Redis Cluster para caching distribuido de validaciones.',
        'Infraestructura como código con Terraform + Bicep, pipelines CI/CD con Azure DevOps y ArgoCD para GitOps, y monitoreo 24/7 con Grafana + Prometheus + Azure Application Insights.'
      ]
    },
    impact: {
      title: 'El Impacto',
      content: [
        'Lanzamiento exitoso en producción procesando 2M transacciones/día con SLA del 99.95%, superando objetivo del 99.9%.',
        'Latencia P95 de 1.8 segundos (objetivo: <2s), con P99 de 3.2s. Zero downtime durante migración de 500K usuarios piloto a 5M usuarios en producción.',
        'Reducción del 35% en costes operacionales vs solución on-premise legacy, y capacidad para escalar a 5M transacciones/día sin cambios arquitectónicos.'
      ]
    },
    techStack: [
      {
        category: 'Backend',
        technologies: ['Java 17', 'Spring Boot 3', 'Spring Cloud', 'Spring Data JPA', 'Resilience4j']
      },
      {
        category: 'Cloud & Infrastructure',
        technologies: ['Azure AKS', 'Azure Service Bus', 'Azure Functions', 'Istio', 'Terraform', 'Helm']
      },
      {
        category: 'Data',
        technologies: ['PostgreSQL 15', 'Redis Cluster', 'Apache Kafka', 'Azure SQL']
      },
      {
        category: 'DevOps',
        technologies: ['Azure DevOps', 'ArgoCD', 'Grafana', 'Prometheus', 'SonarQube', 'Trivy']
      }
    ],
    results: [
      { metric: '99.95% SLA', description: 'Disponibilidad en producción, superando objetivo 99.9%' },
      { metric: '2M trans/día', description: 'Procesamiento diario con capacidad para 5M' },
      { metric: '<2s latencia P95', description: 'Tiempo de respuesta end-to-end incluyendo validaciones' },
      { metric: '-35% costes', description: 'Reducción vs solución on-premise legacy' },
      { metric: '0 downtime', description: 'Durante migración de 500K a 5M usuarios' },
      { metric: 'PSD2 compliant', description: 'Certificación EPC para SEPA Instant Payments' }
    ],
    timeline: '18 meses (diseño, desarrollo, testing, producción)',
    team: '12 personas (4 backend, 2 frontend, 2 QA, 2 DevOps, 1 PO, 1 Architect)',
    role: 'Senior Technical Lead - Arquitectura, diseño técnico, liderazgo equipo backend'
  },
  {
    slug: 'payment-orchestrator',
    title: 'Orquestador Multi-PSP',
    subtitle: 'Event-driven architecture para enrutamiento inteligente de pagos',
    problem: 'Diseño de arquitectura event-driven para enrutar pagos a 8+ proveedores (Redsys, Stripe, PayPal) con failover automático y optimización de costes.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    thumbnailAlt: 'Payment Orchestrator Architecture',
    highlightMetric: {
      icon: '⚡',
      label: 'Ahorro',
      value: '30% costes'
    },
    tags: ['Node.js', 'TypeScript', 'RabbitMQ', 'MongoDB', 'Docker', 'Kong'],
    metrics: [
      { value: '500K', label: 'Trans/día' },
      { value: '8', label: 'PSPs' },
      { value: '99.9%', label: 'Uptime' }
    ],
    challenge: {
      title: 'El Desafío',
      content: [
        'BBVA necesitaba centralizar la integración con 8 proveedores de pago (PSPs) diferentes, cada uno con sus propias APIs, tasas de comisión, y niveles de disponibilidad.',
        'Objetivo: reducir costes de procesamiento mediante routing inteligente según tipo de transacción, monto, y disponibilidad en tiempo real de cada PSP.',
        'Requisitos: failover automático si un PSP cae, retry logic configurable, audit trail completo, y capacidad para agregar nuevos PSPs sin downtime.'
      ]
    },
    solution: {
      title: 'La Solución',
      content: [
        'Arquitectura event-driven con RabbitMQ para desacoplar publishers (APIs de checkout) de consumers (adaptadores PSP). Pattern Saga para orchestration distribuida.',
        'Motor de routing basado en reglas con scoring dinámico: tasas de comisión, latencia promedio, tasa de aprobación, y disponibilidad histórica de cada PSP.',
        'Adaptadores estandarizados por PSP con circuit breakers, implementación de Retry Pattern con backoff exponencial, y caching de tokens OAuth en Redis.'
      ]
    },
    impact: {
      title: 'El Impacto',
      content: [
        'Reducción del 30% en costes de procesamiento mediante routing inteligente hacia PSPs con menores comisiones según tipo de transacción.',
        'Uptime del 99.9% gracias a failover automático: cuando un PSP cae, transacciones se reenrutan a backup en <500ms sin intervención manual.',
        'Time-to-market de nuevos PSPs reducido de 2 meses a 1 semana gracias a adaptadores estandarizados y despliegues sin downtime.'
      ]
    },
    techStack: [
      {
        category: 'Backend',
        technologies: ['Node.js 18', 'TypeScript', 'Express', 'Nest.js', 'Joi']
      },
      {
        category: 'Messaging & Data',
        technologies: ['RabbitMQ', 'MongoDB', 'Redis', 'Elasticsearch']
      },
      {
        category: 'Infrastructure',
        technologies: ['Docker', 'AWS ECS', 'Kong API Gateway', 'Terraform']
      },
      {
        category: 'Monitoring',
        technologies: ['Grafana', 'Prometheus', 'Sentry', 'CloudWatch']
      }
    ],
    results: [
      { metric: '-30% costes', description: 'Reducción en comisiones mediante routing inteligente' },
      { metric: '99.9% uptime', description: 'Gracias a failover automático entre PSPs' },
      { metric: '<500ms failover', description: 'Tiempo de reenrutamiento cuando un PSP cae' },
      { metric: '500K trans/día', description: 'Volumen procesado con 8 PSPs diferentes' },
      { metric: '1 semana', description: 'Time-to-market para agregar nuevo PSP' },
      { metric: '8 PSPs', description: 'Redsys, Stripe, PayPal, Bizum, y 4 más' }
    ],
    timeline: '9 meses (MVP en 3 meses, 6 meses integrando todos los PSPs)',
    team: '8 personas (3 backend, 1 frontend, 2 QA, 1 DevOps, 1 PO)',
    role: 'Solutions Architect - Diseño arquitectura, definición patrones, review técnico'
  }
  // Otros 4 proyectos con misma estructura...
]

const projectsEN: Project[] = [
  {
    slug: 'sepa-platform',
    title: 'SEPA Instant Payments Platform',
    subtitle: 'Cloud-native architecture for 24/7 instant transfer processing',
    problem: 'Building from scratch a platform to process SEPA Instant transfers 24/7 with high availability and PSD2 regulatory compliance.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    thumbnailAlt: 'SEPA Platform Dashboard',
    highlightMetric: {
      icon: '🎯',
      label: 'SLA',
      value: '99.95%'
    },
    tags: ['Azure', 'Kubernetes', 'Spring Boot', 'PostgreSQL', 'Redis', 'Kafka', 'Terraform'],
    metrics: [
      { value: '2M', label: 'Trans/day' },
      { value: '5M+', label: 'Users' },
      { value: '<2s', label: 'Latency P95' }
    ],
    challenge: {
      title: 'The Challenge',
      content: [
        'Santander needed a completely new platform to process SEPA Instant Payments complying with the PSD2 directive and European Payments Council (EPC) standards.',
        'The solution had to handle 2 million daily transactions with 24/7/365 availability, latencies under 2 seconds (P95), and guarantee 99.95% SLA.',
        'Critical requirements: ISO 20022 validation, atomic processing of pain.001/pacs.008 messages, real-time bank reconciliation, and complete audit trail for regulatory compliance.'
      ]
    },
    solution: {
      title: 'The Solution',
      content: [
        'Designed a cloud-native architecture on Azure with 12 microservices deployed on AKS (Azure Kubernetes Service) using Istio as service mesh for observability and circuit breaking.',
        'Implemented event-driven architecture with Kafka for asynchronous processing, PostgreSQL with date-based partitioning for historical data, and Redis Cluster for distributed validation caching.',
        'Infrastructure as code with Terraform + Bicep, CI/CD pipelines with Azure DevOps and ArgoCD for GitOps, and 24/7 monitoring with Grafana + Prometheus + Azure Application Insights.'
      ]
    },
    impact: {
      title: 'The Impact',
      content: [
        'Successful production launch processing 2M transactions/day with 99.95% SLA, exceeding the 99.9% target.',
        'P95 latency of 1.8 seconds (target: <2s), with P99 of 3.2s. Zero downtime during migration from 500K pilot users to 5M users in production.',
        '35% reduction in operational costs vs legacy on-premise solution, and capacity to scale to 5M transactions/day without architectural changes.'
      ]
    },
    techStack: [
      { category: 'Backend', technologies: ['Java 17', 'Spring Boot 3', 'Spring Cloud', 'Spring Data JPA', 'Resilience4j'] },
      { category: 'Cloud & Infrastructure', technologies: ['Azure AKS', 'Azure Service Bus', 'Azure Functions', 'Istio', 'Terraform', 'Helm'] },
      { category: 'Data', technologies: ['PostgreSQL 15', 'Redis Cluster', 'Apache Kafka', 'Azure SQL'] },
      { category: 'DevOps', technologies: ['Azure DevOps', 'ArgoCD', 'Grafana', 'Prometheus', 'SonarQube', 'Trivy'] }
    ],
    results: [
      { metric: '99.95% SLA', description: 'Production availability, exceeding 99.9% target' },
      { metric: '2M trans/day', description: 'Daily processing with capacity for 5M' },
      { metric: '<2s latency P95', description: 'End-to-end response time including validations' },
      { metric: '-35% costs', description: 'Reduction vs legacy on-premise solution' },
      { metric: '0 downtime', description: 'During migration from 500K to 5M users' },
      { metric: 'PSD2 compliant', description: 'EPC certification for SEPA Instant Payments' }
    ],
    timeline: '18 months (design, development, testing, production)',
    team: '12 people (4 backend, 2 frontend, 2 QA, 2 DevOps, 1 PO, 1 Architect)',
    role: 'Senior Technical Lead - Architecture, technical design, backend team leadership'
  },
  {
    slug: 'payment-orchestrator',
    title: 'Multi-PSP Orchestrator',
    subtitle: 'Event-driven architecture for intelligent payment routing',
    problem: 'Design of event-driven architecture to route payments to 8+ providers (Redsys, Stripe, PayPal) with automatic failover and cost optimization.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    thumbnailAlt: 'Payment Orchestrator Architecture',
    highlightMetric: {
            icon: '⚡',
      label: 'Savings',
      value: '30% costs'
    },
    tags: ['Node.js', 'TypeScript', 'RabbitMQ', 'MongoDB', 'Docker', 'Kong'],
    metrics: [
      { value: '500K', label: 'Trans/day' },
      { value: '8', label: 'PSPs' },
      { value: '99.9%', label: 'Uptime' }
    ],
    challenge: {
      title: 'The Challenge',
      content: [
        'The bank needed to centralize integration with 8 different payment providers (PSPs), each with their own APIs, commission rates, and availability levels.',
        'Goal: reduce processing costs through intelligent routing based on transaction type, amount, and real-time availability of each PSP.',
        'Requirements: automatic failover if a PSP goes down, configurable retry logic, complete audit trail, and ability to add new PSPs without downtime.'
      ]
    },
    solution: {
      title: 'The Solution',
      content: [
        'Event-driven architecture with RabbitMQ to decouple publishers (checkout APIs) from consumers (PSP adapters). Saga Pattern for distributed orchestration.',
        'Rule-based routing engine with dynamic scoring: commission rates, average latency, approval rate, and historical availability of each PSP.',
        'Standardized PSP adapters with circuit breakers, Retry Pattern implementation with exponential backoff, and OAuth token caching in Redis.'
      ]
    },
    impact: {
      title: 'The Impact',
      content: [
        '30% reduction in processing costs through intelligent routing to PSPs with lower commissions based on transaction type.',
        '99.9% uptime thanks to automatic failover: when a PSP goes down, transactions are rerouted to backup in <500ms without manual intervention.',
        'Time-to-market for new PSPs reduced from 2 months to 1 week thanks to standardized adapters and zero-downtime deployments.'
      ]
    },
    techStack: [
      { category: 'Backend', technologies: ['Node.js 18', 'TypeScript', 'Express', 'Nest.js', 'Joi'] },
      { category: 'Messaging & Data', technologies: ['RabbitMQ', 'MongoDB', 'Redis', 'Elasticsearch'] },
      { category: 'Infrastructure', technologies: ['Docker', 'AWS ECS', 'Kong API Gateway', 'Terraform'] },
      { category: 'Monitoring', technologies: ['Grafana', 'Prometheus', 'Sentry', 'CloudWatch'] }
    ],
    results: [
      { metric: '-30% costs', description: 'Commission reduction through intelligent routing' },
      { metric: '99.9% uptime', description: 'Thanks to automatic failover between PSPs' },
      { metric: '<500ms failover', description: 'Rerouting time when a PSP goes down' },
      { metric: '500K trans/day', description: 'Volume processed with 8 different PSPs' },
      { metric: '1 week', description: 'Time-to-market to add a new PSP' },
      { metric: '8 PSPs', description: 'Redsys, Stripe, PayPal, Bizum, and 4 more' }
    ],
    timeline: '9 months (MVP in 3 months, 6 months integrating all PSPs)',
    team: '8 people (3 backend, 1 frontend, 2 QA, 1 DevOps, 1 PO)',
    role: 'Solutions Architect - Architecture design, pattern definition, technical review'
  }
]

export function getProject(slug: string, locale: 'es' | 'en' = 'es'): Project | undefined {
  const projects = locale === 'es' ? projectsES : projectsEN
  return projects.find(p => p.slug === slug)
}

export function getAllProjects(locale: 'es' | 'en' = 'es'): Project[] {
  return locale === 'es' ? projectsES : projectsEN
}

export function getProjectSlugs(): string[] {
  return projectsES.map(p => p.slug)
}
