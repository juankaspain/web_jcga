export interface ProjectMetric {
  label: string
  value: string
}

export interface Project {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  challenge: string
  solution: string
  impact: string[]
  technologies: string[]
  category: "Payments" | "Banking" | "Cloud" | "AI" | "Platform"
  categories: string[] // For filtering
  year: string
  featured: boolean
  icon?: string
  metrics?: ProjectMetric[]
}

export const projects: Project[] = [
  {
    id: "payment-platform",
    slug: "payment-platform-multicanal",
    title: "Multi-Channel Payment Platform",
    subtitle: "Centralized payment processing for international banks",
    description: "Enterprise payment platform managing international, domestic, SEPA, and pan-European chamber payments for multiple banks within Santander Group.",
    challenge: "Design a resilient, scalable platform capable of routing high-volume daily payments to appropriate clearing houses (STEP1, STEP2, EURO1, TARGET2, Iberpay, BACS, CHAPS) while supporting multiple message formats and ensuring full auditability.",
    solution: "Architected microservices-based platform with intelligent routing engine, multi-format message transformation (SWIFT, SEPA), and comprehensive reconciliation mechanisms. Implemented fault-tolerant design with automated retry logic and complete audit trail.",
    impact: [
      "Processed millions of daily payment transactions",
      "Integrated with 8+ international clearing systems",
      "Achieved 99.9% uptime for critical payment operations",
      "Reduced payment processing time by 40%"
    ],
    technologies: ["Java/Spring", "Apache Camel", "SWIFT", "SEPA", "Payment Gateways", "Message Routing"],
    category: "Payments",
    categories: ["payments", "architecture"],
    year: "2012-2018",
    featured: true,
    icon: "💳",
    metrics: [
      { label: "Daily Txns", value: "10M+" },
      { label: "Uptime", value: "99.9%" }
    ]
  },
  {
    id: "digital-banking",
    slug: "digital-banking-health",
    title: "Digital Banking & Financial Health Platform",
    subtitle: "PFM/BFM solutions for 7M+ customers",
    description: "Comprehensive digital banking platform featuring Personal Financial Management (PFM), Business Financial Management (BFM), transaction categorization, subscription control, and automatic savings.",
    challenge: "Build scalable financial health solutions that provide intelligent insights to millions of customers across multiple countries while integrating with legacy banking systems and ensuring real-time performance.",
    solution: "Developed cloud-native microservices architecture on Azure with AI-powered transaction categorization, intelligent subscription detection, and personalized savings recommendations. Implemented event-driven architecture for real-time insights and notifications.",
    impact: [
      "Serving 7M+ customers across ES, UK, PT, PL",
      "Reduced critical incidents by 55%",
      "Improved release frequency by 32%",
      "95%+ accuracy in transaction categorization"
    ],
    technologies: ["Azure", "Node.js", "MongoDB", "AI/ML", "Microservices", "Event-Driven Architecture"],
    category: "Banking",
    categories: ["cloud", "data", "architecture"],
    year: "2018-Present",
    featured: true,
    icon: "🏦",
    metrics: [
      { label: "Customers", value: "7M+" },
      { label: "Countries", value: "4" }
    ]
  },
  {
    id: "instant-payments",
    slug: "instant-payments-verifactu",
    title: "Instant Payments & Verifactu Integration",
    subtitle: "Real-time payment processing with regulatory compliance",
    description: "Platform for instant payment processing integrated with Spanish Verifactu invoicing regulations, enabling real-time payments for freelancers and SMEs.",
    challenge: "Implement instant payment capabilities while ensuring compliance with new Spanish Verifactu regulations for electronic invoicing, maintaining high availability and sub-second processing times.",
    solution: "Built real-time payment engine with direct integration to instant payment rails and automated Verifactu compliance layer. Implemented asynchronous processing with guaranteed delivery and comprehensive error handling.",
    impact: [
      "Sub-second payment processing",
      "100% Verifactu compliance",
      "Enabled instant payments for 500K+ SMEs",
      "99.95% transaction success rate"
    ],
    technologies: ["Instant Payments", "Azure", "Microservices", "Event Streaming", "API Gateway"],
    category: "Payments",
    categories: ["payments", "cloud"],
    year: "2022-Present",
    featured: true,
    icon: "⚡",
    metrics: [
      { label: "SMEs", value: "500K+" },
      { label: "Success", value: "99.95%" }
    ]
  },
  {
    id: "psd2-api",
    slug: "psd2-open-banking-api",
    title: "PSD2 Open Banking API Platform",
    subtitle: "Enterprise API management for Open Banking",
    description: "Complete PSD2-compliant Open Banking API platform with OAuth2/OpenID Connect security, rate limiting, and comprehensive API management.",
    challenge: "Design and implement PSD2-compliant APIs that meet strict security requirements while providing excellent developer experience and maintaining backward compatibility with existing systems.",
    solution: "Architected RESTful APIs using OpenAPI/Swagger specifications with 3Scale API Management and IBM API Connect. Implemented OAuth2/OIDC authentication, certificate-based security, and comprehensive API governance.",
    impact: [
      "Certified PSD2 compliance",
      "50+ third-party integrations",
      "99.9% API availability",
      "Sub-200ms average response time"
    ],
    technologies: ["REST API", "OpenAPI/Swagger", "OAuth2/OIDC", "3Scale", "IBM API Connect", "Node-RED"],
    category: "Banking",
    categories: ["architecture", "cloud"],
    year: "2018",
    featured: true,
    icon: "🔐",
    metrics: [
      { label: "Integrations", value: "50+" },
      { label: "Response", value: "<200ms" }
    ]
  },
  {
    id: "risk-engine",
    slug: "risk-engine-authentication",
    title: "Risk Engine & Authentication Platform",
    subtitle: "AI-powered risk assessment for digital onboarding",
    description: "Intelligent risk assessment engine for customer onboarding, transaction signing, and strong authentication with machine learning-based fraud detection.",
    challenge: "Build real-time risk assessment system that balances security with user experience, preventing fraud while minimizing false positives and maintaining regulatory compliance.",
    solution: "Developed ML-based risk scoring engine analyzing multiple data points (behavioral, transactional, device) with adaptive authentication flows. Integrated with Azure AI services for anomaly detection and pattern recognition.",
    impact: [
      "Reduced fraud by 70%",
      "Decreased false positives by 45%",
      "Improved onboarding conversion by 25%",
      "Real-time risk scoring (<100ms)"
    ],
    technologies: ["Azure AI", "Machine Learning", "Python", "Node.js", "MongoDB", "Real-time Analytics"],
    category: "AI",
    categories: ["data", "cloud"],
    year: "2020-Present",
    featured: true,
    icon: "🧠",
    metrics: [
      { label: "Fraud -", value: "70%" },
      { label: "Scoring", value: "<100ms" }
    ]
  },
  {
    id: "devops-platform",
    slug: "devops-platform-engineering",
    title: "DevOps Platform & Engineering Excellence",
    subtitle: "CI/CD pipeline and developer platform",
    description: "Comprehensive DevOps platform with automated CI/CD pipelines, testing frameworks, observability, and developer self-service capabilities.",
    challenge: "Standardize and automate software delivery across multiple teams while improving code quality, reducing deployment time, and increasing system reliability.",
    solution: "Built GitOps-based platform with Azure DevOps, automated testing (unit, integration, e2e), code quality gates (SonarQube), and comprehensive monitoring. Implemented self-service developer portal and infrastructure as code.",
    impact: [
      "Deployment frequency increased 300%",
      "Lead time reduced from days to hours",
      "Critical incidents reduced 55%",
      "Test coverage increased to 85%+"
    ],
    technologies: ["Azure DevOps", "GitOps", "Docker", "Terraform", "SonarQube", "Monitoring Stack"],
    category: "Platform",
    categories: ["cloud", "architecture"],
    year: "2019-Present",
    featured: true,
    icon: "🚀",
    metrics: [
      { label: "Deploy +", value: "300%" },
      { label: "Coverage", value: "85%+" }
    ]
  }
]

export const featuredProjects = projects.filter(p => p.featured)
