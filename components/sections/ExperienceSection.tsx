import { SectionHeading } from '@/components/ui/SectionHeading'
import { ExperienceAccordion } from '@/components/experience/ExperienceAccordion'

interface ExperienceSectionProps {
  locale?: 'es' | 'en'
}

const copy = {
  es: {
    title: 'Trayectoria Profesional',
    subtitle: 'Liderazgo técnico en proyectos críticos de banca digital'
  },
  en: {
    title: 'Professional Experience',
    subtitle: 'Technical leadership in critical digital banking projects'
  }
}

const mockExperiences = {
  es: [
    {
      role: 'Senior Technical Lead - Cloud & Payments',
      company: 'Santander Digital Services',
      period: '2020 - Presente',
      teamSize: '12 personas',
      budget: '€2.5M',
      impact: '5M usuarios',
      achievements: [
        {
          description: 'Lideré diseño e implementación de plataforma SEPA Instant Payments desde cero, alcanzando SLA 99.95% en producción',
          metric: '2M trans/día'
        },
        {
          description: 'Migración completa de monolito on-premise a microservicios en Azure AKS con zero downtime, reduciendo costes operacionales',
          metric: '-35% costes'
        },
        {
          description: 'Implementación de sistema anti-fraude ML en tiempo real, reduciendo fraude y falsos positivos significativamente',
          metric: '-45% fraude'
        },
        {
          description: 'Desarrollo de API Gateway PSD2-compliant para Open Banking, conectando más de 150 TPPs con OAuth 2.0',
          metric: '150+ TPPs'
        }
      ],
      techStack: [
        'Azure', 'Kubernetes', 'Spring Boot', 'Java 17', 'PostgreSQL', 'Redis', 'Kafka',
        'Terraform', 'Helm', 'ArgoCD', 'Grafana', 'Prometheus', 'Azure ML', 'Python'
      ]
    },
    {
      role: 'Solutions Architect - Payments',
      company: 'BBVA',
      period: '2017 - 2020',
      teamSize: '8 personas',
      budget: '€1.2M',
      impact: '3M usuarios',
      achievements: [
        {
          description: 'Diseñé arquitectura event-driven para orquestador multi-PSP, enrutando pagos a 8+ proveedores con failover automático',
          metric: '99.9% uptime'
        },
        {
          description: 'Optimización de costes de procesamiento mediante routing inteligente basado en tasas y disponibilidad de PSPs',
          metric: '-30% costes'
        },
        {
          description: 'Implementación de pipeline real-time analytics para dashboards ejecutivos con actualización cada 5 segundos',
          metric: '50+ dashboards'
        },
        {
          description: 'Liderazgo técnico en integración de Bizum para pagos instantáneos móviles, alcanzando 500K transacciones diarias',
          metric: '500K trans/día'
        }
      ],
      techStack: [
        'Node.js', 'TypeScript', 'RabbitMQ', 'MongoDB', 'Docker', 'AWS ECS',
        'Kafka', 'Flink', 'ClickHouse', 'Grafana', 'Kong', 'OAuth 2.0'
      ]
    },
    {
      role: 'Lead Backend Developer',
      company: 'CaixaBank Tech',
      period: '2014 - 2017',
      teamSize: '6 personas',
      budget: '€800K',
      impact: '2M usuarios',
      achievements: [
        {
          description: 'Desarrollo de microservicio core para procesamiento de transferencias SEPA, manejando validaciones ISO 20022',
          metric: '1M trans/día'
        },
        {
          description: 'Implementación de caching distribuido con Redis Cluster, reduciendo latencia de APIs críticas',
          metric: '-70% latencia'
        },
        {
          description: 'Migración de base de datos legacy Oracle a PostgreSQL con estrategia dual-write, sin downtime para usuarios',
          metric: '0min downtime'
        },
        {
          description: 'Establecimiento de pipelines CI/CD con Jenkins y Docker, automatizando deployments a 4 entornos',
          metric: '100% automatizado'
        }
      ],
      techStack: [
        'Java 8', 'Spring Framework', 'PostgreSQL', 'Redis', 'Oracle DB',
        'Jenkins', 'Docker', 'SonarQube', 'JUnit', 'Mockito', 'Maven'
      ]
    },
    {
      role: 'Backend Developer',
      company: 'Indra Sistemas',
      period: '2011 - 2014',
      teamSize: '4 personas',
      impact: '500K usuarios',
      achievements: [
        {
          description: 'Desarrollo de APIs REST para plataforma de banca online, implementando autenticación multifactor',
          metric: '200+ endpoints'
        },
        {
          description: 'Integración de pasarelas de pago (Redsys, PayPal) para e-commerce bancario, cumpliendo PCI-DSS',
          metric: 'PCI-DSS compliant'
        },
        {
          description: 'Optimización de queries SQL complejas, reduciendo tiempos de respuesta en reportes de auditoría',
          metric: '-80% tiempo'
        }
      ],
      techStack: [
        'Java 6/7', 'Struts', 'Hibernate', 'Oracle DB', 'SQL Server',
        'SOAP', 'XML', 'JBoss', 'SVN', 'Ant'
      ]
    }
  ],
  en: [
    {
      role: 'Senior Technical Lead - Cloud & Payments',
      company: 'Santander Digital Services',
      period: '2020 - Present',
      teamSize: '12 people',
      budget: '€2.5M',
      impact: '5M users',
      achievements: [
        {
          description: 'Led design and implementation of SEPA Instant Payments platform from scratch, achieving 99.95% SLA in production',
          metric: '2M trans/day'
        },
        {
          description: 'Complete migration of on-premise monolith to microservices on Azure AKS with zero downtime, reducing operational costs',
          metric: '-35% costs'
        },
        {
          description: 'Implementation of real-time ML anti-fraud system, significantly reducing fraud and false positives',
          metric: '-45% fraud'
        },
        {
          description: 'Development of PSD2-compliant API Gateway for Open Banking, connecting 150+ TPPs with OAuth 2.0',
          metric: '150+ TPPs'
        }
      ],
      techStack: [
        'Azure', 'Kubernetes', 'Spring Boot', 'Java 17', 'PostgreSQL', 'Redis', 'Kafka',
        'Terraform', 'Helm', 'ArgoCD', 'Grafana', 'Prometheus', 'Azure ML', 'Python'
      ]
    },
    {
      role: 'Solutions Architect - Payments',
      company: 'BBVA',
      period: '2017 - 2020',
      teamSize: '8 people',
      budget: '€1.2M',
      impact: '3M users',
      achievements: [
        {
          description: 'Designed event-driven architecture for multi-PSP orchestrator, routing payments to 8+ providers with automatic failover',
          metric: '99.9% uptime'
        },
        {
          description: 'Processing cost optimization through intelligent routing based on PSP rates and availability',
          metric: '-30% costs'
        },
        {
          description: 'Implementation of real-time analytics pipeline for executive dashboards with 5-second updates',
          metric: '50+ dashboards'
        },
        {
          description: 'Technical leadership in Bizum integration for mobile instant payments, reaching 500K daily transactions',
          metric: '500K trans/day'
        }
      ],
      techStack: [
        'Node.js', 'TypeScript', 'RabbitMQ', 'MongoDB', 'Docker', 'AWS ECS',
        'Kafka', 'Flink', 'ClickHouse', 'Grafana', 'Kong', 'OAuth 2.0'
      ]
    },
    {
      role: 'Lead Backend Developer',
      company: 'CaixaBank Tech',
      period: '2014 - 2017',
      teamSize: '6 people',
      budget: '€800K',
      impact: '2M users',
      achievements: [
        {
          description: 'Development of core microservice for SEPA transfer processing, handling ISO 20022 validations',
          metric: '1M trans/day'
        },
        {
          description: 'Implementation of distributed caching with Redis Cluster, reducing latency of critical APIs',
          metric: '-70% latency'
        },
        {
          description: 'Migration of legacy Oracle database to PostgreSQL with dual-write strategy, no user downtime',
          metric: '0min downtime'
        },
        {
          description: 'Establishment of CI/CD pipelines with Jenkins and Docker, automating deployments to 4 environments',
          metric: '100% automated'
        }
      ],
      techStack: [
        'Java 8', 'Spring Framework', 'PostgreSQL', 'Redis', 'Oracle DB',
        'Jenkins', 'Docker', 'SonarQube', 'JUnit', 'Mockito', 'Maven'
      ]
    },
    {
      role: 'Backend Developer',
      company: 'Indra Sistemas',
      period: '2011 - 2014',
      teamSize: '4 people',
      impact: '500K users',
      achievements: [
        {
          description: 'Development of REST APIs for online banking platform, implementing multi-factor authentication',
          metric: '200+ endpoints'
        },
        {
          description: 'Integration of payment gateways (Redsys, PayPal) for banking e-commerce, PCI-DSS compliant',
          metric: 'PCI-DSS compliant'
        },
        {
          description: 'Optimization of complex SQL queries, reducing response times in audit reports',
          metric: '-80% time'
        }
      ],
      techStack: [
        'Java 6/7', 'Struts', 'Hibernate', 'Oracle DB', 'SQL Server',
        'SOAP', 'XML', 'JBoss', 'SVN', 'Ant'
      ]
    }
  ]
}

export function ExperienceSection({ locale = 'es' }: ExperienceSectionProps) {
  const t = copy[locale]
  const experiences = mockExperiences[locale]

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-navy-950 to-slate-950" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="relative container-professional">
        <SectionHeading
          title={t.title}
          subtitle={t.subtitle}
          align="center"
        />
        
        <div className="mt-16 max-w-5xl mx-auto">
          <ExperienceAccordion experiences={experiences} locale={locale} />
        </div>
      </div>
    </section>
  )
}
