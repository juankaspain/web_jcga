import { SectionHeading } from '@/components/ui/SectionHeading'
import { SkillMatrix } from '@/components/skills/SkillMatrix'
import { 
  Cloud, 
  CreditCard, 
  ChartLine, 
  GitBranch 
} from '@phosphor-icons/react'

interface SkillsSectionProps {
  locale?: 'es' | 'en'
}

const copy = {
  es: {
    title: 'Stack Técnico',
    subtitle: 'Tecnologías probadas en producción bancaria con millones de usuarios'
  },
  en: {
    title: 'Tech Stack',
    subtitle: 'Technologies proven in banking production with millions of users'
  }
}

const mockSkillCategories = {
  es: [
    {
      name: 'Cloud & Infrastructure',
      icon: <Cloud size={24} weight="duotone" />,
      skills: [
        {
          name: 'Azure (AKS, Functions, Service Bus)',
          context: 'Producción Santander, clusters 50+ nodes, 5M usuarios'
        },
        {
          name: 'Kubernetes + Helm + Istio',
          context: '18 microservicios en AKS, service mesh completo'
        },
        {
          name: 'Terraform + Bicep',
          context: 'IaC para todos los entornos, 300+ recursos'
        },
        {
          name: 'Oracle Cloud Infrastructure',
          context: 'Migración de bases de datos críticas, 10TB+ datos'
        },
        {
          name: 'Docker + Azure Container Registry',
          context: 'Pipelines CI/CD, 200+ imágenes, registry privado'
        }
      ],
      certBadges: [
        { name: 'Azure Solutions Architect Expert', icon: '/certs/azure-expert.png' },
        { name: 'Kubernetes Administrator', icon: '/certs/cka.png' }
      ]
    },
    {
      name: 'Payments & Fintech',
      icon: <CreditCard size={24} weight="duotone" />,
      skills: [
        {
          name: 'SEPA Instant Payments (SCT Inst)',
          context: '2M transacciones/día, cumplimiento EPC, SLA 99.95%'
        },
        {
          name: 'PSD2 Open Banking APIs',
          context: 'API Gateway Kong, 150+ TPPs conectados, OAuth 2.0'
        },
        {
          name: 'ISO 20022 XML Processing',
          context: 'Parseo y validación de mensajes pain.001/pacs.008'
        },
        {
          name: 'Multi-PSP Orchestration',
          context: 'Enrutamiento inteligente, 8 proveedores, 99.9% uptime'
        },
        {
          name: 'Payment Gateway Integration',
          context: 'Redsys, Stripe, PayPal, Bizum - todas en producción'
        }
      ],
      certBadges: [
        { name: 'PSD2 Technical Specialist', icon: '/certs/psd2.png' }
      ]
    },
    {
      name: 'Data & AI/ML',
      icon: <ChartLine size={24} weight="duotone" />,
      skills: [
        {
          name: 'Azure Machine Learning',
          context: 'Modelos anti-fraude, 45% reducción fraude, scoring <100ms'
        },
        {
          name: 'Databricks + Spark',
          context: 'Procesamiento 10M eventos/día, pipelines ETL complejos'
        },
        {
          name: 'Python (TensorFlow, Scikit-learn)',
          context: 'Entrenamiento modelos ML, feature engineering avanzado'
        },
        {
          name: 'Kafka + Flink',
          context: 'Streaming real-time, dashboards actualizados cada 5s'
        },
        {
          name: 'PostgreSQL + Redis + MongoDB',
          context: 'BBDDs en HA, sharding, caching distribuido'
        }
      ],
      certBadges: [
        { name: 'Azure Data Engineer', icon: '/certs/azure-data.png' },
        { name: 'Databricks Certified', icon: '/certs/databricks.png' }
      ]
    },
    {
      name: 'DevOps & Automation',
      icon: <GitBranch size={24} weight="duotone" />,
      skills: [
        {
          name: 'Azure DevOps (Pipelines, Repos)',
          context: '50+ pipelines CI/CD, deployments automatizados blue/green'
        },
        {
          name: 'ArgoCD + GitOps',
          context: 'Deployments declarativos, sync automático desde Git'
        },
        {
          name: 'Grafana + Prometheus + AppInsights',
          context: 'Observabilidad completa, 200+ dashboards, alerting 24/7'
        },
        {
          name: 'SonarQube + Trivy + Snyk',
          context: 'Quality gates, security scanning en pipelines'
        },
        {
          name: 'Bash/Python Scripting',
          context: 'Automatización operaciones, scripts para 100+ tareas'
        }
      ],
      certBadges: [
        { name: 'Azure DevOps Engineer Expert', icon: '/certs/azure-devops.png' }
      ]
    }
  ],
  en: [
    {
      name: 'Cloud & Infrastructure',
      icon: <Cloud size={24} weight="duotone" />,
      skills: [
        {
          name: 'Azure (AKS, Functions, Service Bus)',
          context: 'Santander production, 50+ node clusters, 5M users'
        },
        {
          name: 'Kubernetes + Helm + Istio',
          context: '18 microservices on AKS, full service mesh'
        },
        {
          name: 'Terraform + Bicep',
          context: 'IaC for all environments, 300+ resources'
        },
        {
          name: 'Oracle Cloud Infrastructure',
          context: 'Critical database migration, 10TB+ data'
        },
        {
          name: 'Docker + Azure Container Registry',
          context: 'CI/CD pipelines, 200+ images, private registry'
        }
      ],
      certBadges: [
        { name: 'Azure Solutions Architect Expert', icon: '/certs/azure-expert.png' },
        { name: 'Kubernetes Administrator', icon: '/certs/cka.png' }
      ]
    },
    {
      name: 'Payments & Fintech',
      icon: <CreditCard size={24} weight="duotone" />,
      skills: [
        {
          name: 'SEPA Instant Payments (SCT Inst)',
          context: '2M transactions/day, EPC compliance, 99.95% SLA'
        },
        {
          name: 'PSD2 Open Banking APIs',
          context: 'Kong API Gateway, 150+ connected TPPs, OAuth 2.0'
        },
        {
          name: 'ISO 20022 XML Processing',
          context: 'Parsing and validation of pain.001/pacs.008 messages'
        },
        {
          name: 'Multi-PSP Orchestration',
          context: 'Intelligent routing, 8 providers, 99.9% uptime'
        },
        {
          name: 'Payment Gateway Integration',
          context: 'Redsys, Stripe, PayPal, Bizum - all in production'
        }
      ],
      certBadges: [
        { name: 'PSD2 Technical Specialist', icon: '/certs/psd2.png' }
      ]
    },
    {
      name: 'Data & AI/ML',
      icon: <ChartLine size={24} weight="duotone" />,
      skills: [
        {
          name: 'Azure Machine Learning',
          context: 'Anti-fraud models, 45% fraud reduction, <100ms scoring'
        },
        {
          name: 'Databricks + Spark',
          context: 'Processing 10M events/day, complex ETL pipelines'
        },
        {
          name: 'Python (TensorFlow, Scikit-learn)',
          context: 'ML model training, advanced feature engineering'
        },
        {
          name: 'Kafka + Flink',
          context: 'Real-time streaming, dashboards updated every 5s'
        },
        {
          name: 'PostgreSQL + Redis + MongoDB',
          context: 'HA databases, sharding, distributed caching'
        }
      ],
      certBadges: [
        { name: 'Azure Data Engineer', icon: '/certs/azure-data.png' },
        { name: 'Databricks Certified', icon: '/certs/databricks.png' }
      ]
    },
    {
      name: 'DevOps & Automation',
      icon: <GitBranch size={24} weight="duotone" />,
      skills: [
        {
          name: 'Azure DevOps (Pipelines, Repos)',
          context: '50+ CI/CD pipelines, automated blue/green deployments'
        },
        {
          name: 'ArgoCD + GitOps',
          context: 'Declarative deployments, automatic sync from Git'
        },
        {
          name: 'Grafana + Prometheus + AppInsights',
          context: 'Full observability, 200+ dashboards, 24/7 alerting'
        },
        {
          name: 'SonarQube + Trivy + Snyk',
          context: 'Quality gates, security scanning in pipelines'
        },
        {
          name: 'Bash/Python Scripting',
          context: 'Operations automation, scripts for 100+ tasks'
        }
      ],
      certBadges: [
        { name: 'Azure DevOps Engineer Expert', icon: '/certs/azure-devops.png' }
      ]
    }
  ]
}

export function SkillsSection({ locale = 'es' }: SkillsSectionProps) {
  const t = copy[locale]
  const categories = mockSkillCategories[locale]

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-slate-950 to-navy-950" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="relative container-professional">
        <SectionHeading
          title={t.title}
          subtitle={t.subtitle}
          align="center"
        />
        
        <div className="mt-16">
          <SkillMatrix categories={categories} locale={locale} />
        </div>
      </div>
    </section>
  )
}
