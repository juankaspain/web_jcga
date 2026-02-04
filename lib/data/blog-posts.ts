// Blog posts data with bilingual support
export interface BlogPost {
  id: string
  slug: string
  title: Record<'es' | 'en', string>
  excerpt: Record<'es' | 'en', string>
  content: Record<'es' | 'en', string>
  author: {
    name: string
    avatar: string
    role: Record<'es' | 'en', string>
  }
  publishedAt: string
  updatedAt: string
  readTime: number
  tags: string[]
  category: 'AI' | 'Cloud' | 'DevOps' | 'Banking' | 'Architecture' | 'Development'
  featured: boolean
  image: string
  likes: number
  views: number
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'ia-banca-digital-2026',
    title: {
      es: 'IA en Banca Digital: Revolución 2026',
      en: 'AI in Digital Banking: 2026 Revolution'
    },
    excerpt: {
      es: 'Cómo la Inteligencia Artificial está transformando la experiencia bancaria con personalización extrema y seguridad avanzada.',
      en: 'How Artificial Intelligence is transforming the banking experience with extreme personalization and advanced security.'
    },
    content: {
      es: 'La IA generativa está redefiniendo la banca digital. Los modelos de lenguaje avanzados permiten asistentes virtuales que comprenden contexto financiero complejo. Los bancos implementan sistemas de detección de fraude en tiempo real que analizan millones de transacciones instantáneamente. La personalización predictiva anticipa necesidades del cliente. Los algoritmos de machine learning optimizan carteras de inversión automáticamente.',
      en: 'Generative AI is redefining digital banking. Advanced language models enable virtual assistants that understand complex financial context. Banks implement real-time fraud detection systems that analyze millions of transactions instantly. Predictive personalization anticipates customer needs. Machine learning algorithms automatically optimize investment portfolios.'
    },
    author: {
      name: 'Juan Carlos García Arriero',
      avatar: '/blog/author.jpg',
      role: { es: 'Arquitecto Cloud & Banking', en: 'Cloud & Banking Architect' }
    },
    publishedAt: '2026-02-01',
    updatedAt: '2026-02-04',
    readTime: 8,
    tags: ['IA', 'Banking', 'Machine Learning', 'Fintech'],
    category: 'AI',
    featured: true,
    image: '/blog/ai-banking.jpg',
    likes: 342,
    views: 5420
  },
  {
    id: '2',
    slug: 'kubernetes-produccion-2026',
    title: {
      es: 'Kubernetes en Producción: Best Practices 2026',
      en: 'Kubernetes in Production: 2026 Best Practices'
    },
    excerpt: {
      es: 'Guía completa para gestionar clusters de Kubernetes a escala enterprise con alta disponibilidad y seguridad.',
      en: 'Complete guide to managing enterprise-scale Kubernetes clusters with high availability and security.'
    },
    content: {
      es: 'Kubernetes se ha consolidado como el estándar de orquestación. Las mejoras en 1.30 incluyen mejor gestión de recursos, seguridad reforzada y observabilidad nativa. Los patrones GitOps con ArgoCD dominan despliegues. Service mesh como Istio ofrece control granular de tráfico. La monitorización con Prometheus y Grafana es esencial. Las políticas de red y RBAC protegen workloads críticos.',
      en: 'Kubernetes has established itself as the orchestration standard. Improvements in 1.30 include better resource management, reinforced security and native observability. GitOps patterns with ArgoCD dominate deployments. Service mesh like Istio offers granular traffic control. Monitoring with Prometheus and Grafana is essential. Network policies and RBAC protect critical workloads.'
    },
    author: {
      name: 'Juan Carlos García Arriero',
      avatar: '/blog/author.jpg',
      role: { es: 'Arquitecto Cloud & Banking', en: 'Cloud & Banking Architect' }
    },
    publishedAt: '2026-01-28',
    updatedAt: '2026-02-03',
    readTime: 12,
    tags: ['Kubernetes', 'DevOps', 'Cloud Native', 'Containers'],
    category: 'Cloud',
    featured: true,
    image: '/blog/kubernetes.jpg',
    likes: 567,
    views: 8930
  },
  {
    id: '3',
    slug: 'arquitectura-microservicios-escalables',
    title: {
      es: 'Arquitectura de Microservicios Escalables',
      en: 'Scalable Microservices Architecture'
    },
    excerpt: {
      es: 'Diseño y patrones para construir sistemas distribuidos resilientes que escalan a millones de usuarios.',
      en: 'Design and patterns to build resilient distributed systems that scale to millions of users.'
    },
    content: {
      es: 'Los microservicios requieren planificación cuidadosa. Event-driven architecture con Kafka permite desacoplamiento. API Gateway gestiona autenticación y rate limiting. Circuit breakers previenen fallos en cascada. Distributed tracing con OpenTelemetry facilita debugging. La resiliencia se logra con retry policies y bulkheads. El patrón saga maneja transacciones distribuidas.',
      en: 'Microservices require careful planning. Event-driven architecture with Kafka enables decoupling. API Gateway manages authentication and rate limiting. Circuit breakers prevent cascading failures. Distributed tracing with OpenTelemetry facilitates debugging. Resilience is achieved with retry policies and bulkheads. The saga pattern handles distributed transactions.'
    },
    author: {
      name: 'Juan Carlos García Arriero',
      avatar: '/blog/author.jpg',
      role: { es: 'Arquitecto Cloud & Banking', en: 'Cloud & Banking Architect' }
    },
    publishedAt: '2026-01-25',
    updatedAt: '2026-02-02',
    readTime: 10,
    tags: ['Microservicios', 'Architecture', 'Scalability', 'Event-Driven'],
    category: 'Architecture',
    featured: false,
    image: '/blog/microservices.jpg',
    likes: 423,
    views: 6740
  },
  {
    id: '4',
    slug: 'devops-ci-cd-avanzado',
    title: {
      es: 'CI/CD Avanzado con GitHub Actions',
      en: 'Advanced CI/CD with GitHub Actions'
    },
    excerpt: {
      es: 'Automatiza completamente tu pipeline de desarrollo con testing, seguridad y despliegues multi-cloud.',
      en: 'Fully automate your development pipeline with testing, security and multi-cloud deployments.'
    },
    content: {
      es: 'GitHub Actions revoluciona CI/CD. Los workflows reutilizables reducen duplicación. Matrix builds prueban múltiples versiones simultáneamente. La integración con SonarQube asegura calidad de código. Los escaneos de seguridad con Snyk detectan vulnerabilidades. Los despliegues blue-green minimizan downtime. La gestión de secrets con Vault protege credenciales.',
      en: 'GitHub Actions revolutionizes CI/CD. Reusable workflows reduce duplication. Matrix builds test multiple versions simultaneously. Integration with SonarQube ensures code quality. Security scans with Snyk detect vulnerabilities. Blue-green deployments minimize downtime. Secret management with Vault protects credentials.'
    },
    author: {
      name: 'Juan Carlos García Arriero',
      avatar: '/blog/author.jpg',
      role: { es: 'Arquitecto Cloud & Banking', en: 'Cloud & Banking Architect' }
    },
    publishedAt: '2026-01-20',
    updatedAt: '2026-01-30',
    readTime: 9,
    tags: ['CI/CD', 'DevOps', 'GitHub Actions', 'Automation'],
    category: 'DevOps',
    featured: false,
    image: '/blog/cicd.jpg',
    likes: 389,
    views: 5230
  },
  {
    id: '5',
    slug: 'zero-trust-banking',
    title: {
      es: 'Zero Trust Security en Banking',
      en: 'Zero Trust Security in Banking'
    },
    excerpt: {
      es: 'Implementación de arquitectura Zero Trust para proteger sistemas bancarios críticos en la nube.',
      en: 'Implementing Zero Trust architecture to protect critical banking systems in the cloud.'
    },
    content: {
      es: 'Zero Trust elimina perímetros de confianza. La verificación continua valida cada acceso. La micro-segmentación aísla workloads. MFA y autenticación adaptativa protegen identidades. El monitoreo de comportamiento detecta anomalías. Los privilegios mínimos reducen superficie de ataque. La encriptación end-to-end protege datos en tránsito.',
      en: 'Zero Trust eliminates trust perimeters. Continuous verification validates every access. Micro-segmentation isolates workloads. MFA and adaptive authentication protect identities. Behavior monitoring detects anomalies. Least privilege reduces attack surface. End-to-end encryption protects data in transit.'
    },
    author: {
      name: 'Juan Carlos García Arriero',
      avatar: '/blog/author.jpg',
      role: { es: 'Arquitecto Cloud & Banking', en: 'Cloud & Banking Architect' }
    },
    publishedAt: '2026-01-15',
    updatedAt: '2026-01-29',
    readTime: 11,
    tags: ['Security', 'Zero Trust', 'Banking', 'Cloud Security'],
    category: 'Banking',
    featured: true,
    image: '/blog/zero-trust.jpg',
    likes: 512,
    views: 7890
  },
  {
    id: '6',
    slug: 'serverless-arquitectura-azure',
    title: {
      es: 'Arquitectura Serverless con Azure Functions',
      en: 'Serverless Architecture with Azure Functions'
    },
    excerpt: {
      es: 'Construye aplicaciones escalables y cost-effective con arquitectura serverless en Azure.',
      en: 'Build scalable and cost-effective applications with serverless architecture on Azure.'
    },
    content: {
      es: 'Serverless elimina gestión de infraestructura. Azure Functions escala automáticamente. Los triggers conectan con múltiples servicios. Durable Functions orquesta workflows complejos. Application Insights proporciona observabilidad. El modelo de pago por uso optimiza costes. La integración con Event Grid permite arquitecturas event-driven.',
      en: 'Serverless eliminates infrastructure management. Azure Functions scales automatically. Triggers connect with multiple services. Durable Functions orchestrates complex workflows. Application Insights provides observability. Pay-per-use model optimizes costs. Integration with Event Grid enables event-driven architectures.'
    },
    author: {
      name: 'Juan Carlos García Arriero',
      avatar: '/blog/author.jpg',
      role: { es: 'Arquitecto Cloud & Banking', en: 'Cloud & Banking Architect' }
    },
    publishedAt: '2026-01-10',
    updatedAt: '2026-01-28',
    readTime: 8,
    tags: ['Serverless', 'Azure', 'Cloud', 'Functions'],
    category: 'Cloud',
    featured: false,
    image: '/blog/serverless.jpg',
    likes: 278,
    views: 4560
  }
]

export const featuredPosts = blogPosts.filter(p => p.featured)
export const categories = ['AI', 'Cloud', 'DevOps', 'Banking', 'Architecture', 'Development'] as const
export const allTags = Array.from(new Set(blogPosts.flatMap(p => p.tags)))
