export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string
  highlights: string[]
  technologies: string[]
  impact?: string[]
}

export const experiences: Experience[] = [
  {
    id: "santander-digital",
    company: "Santander Digital Services",
    role: "Senior Technical Lead & Cloud Solutions Architect",
    period: "2018 - Present",
    location: "Madrid, Spain",
    description: "Technical leadership of digital banking solutions portfolio focused on financial health, payments, and solutions for freelancers and SMEs.",
    highlights: [
      "Led technical architecture for digital banking channels (web & mobile apps)",
      "Designed and implemented PFM/BFM solutions with transaction categorization",
      "Built subscription control and automatic savings products",
      "Architected instant payment platforms integrated with Verifactu",
      "Developed risk engines for onboarding, signing, and strong authentication"
    ],
    technologies: [
      "Azure",
      "Node.js",
      "MongoDB",
      "AI/ML",
      "Microservices",
      "DevOps",
      "API Management"
    ],
    impact: [
      "Solutions serving 7M+ customers across multiple countries (ES, UK, PT, PL)",
      "Reduced critical incidents by 55%",
      "Improved release frequency by 32%",
      "Reduced onboarding time for new team members by 2 months"
    ]
  },
  {
    id: "avertia",
    company: "AVERTIA Zona Norte",
    role: "Senior API Enterprise Architect",
    period: "2018",
    location: "Spain",
    description: "Specialized in PSD2 Open Banking API architecture for financial institutions.",
    highlights: [
      "Defined REST APIs with Swagger (JSON/YAML)",
      "Designed microservices and ESB orchestrations (Mule, Node-RED)",
      "Integrated with 3Scale and IBM API Connect",
      "Implemented PSD2 compliance and security standards"
    ],
    technologies: [
      "REST API",
      "Swagger/OpenAPI",
      "Mule ESB",
      "Node-RED",
      "3Scale",
      "IBM API Connect"
    ]
  },
  {
    id: "panel-sistemas",
    company: "Panel Sistemas",
    role: "Technical Product Owner / Senior Functional Analyst",
    period: "2011 - 2018",
    location: "Spain",
    description: "Led technical teams and architected telecom billing and payment processing systems.",
    highlights: [
      "Technical leadership of 8-person development team",
      "Architected solutions with Karaf, OSGI, ServiceMix, Camel, Cassandra",
      "Developed Revenue Manager and Batch Tool for Ericsson/Telefónica",
      "Built bridging middleware for complex telecom migrations",
      "Designed payment platform for CSI - Isban (Santander Group)"
    ],
    technologies: [
      "Java/J2EE",
      "Apache Karaf",
      "OSGI",
      "Apache Camel",
      "Cassandra",
      "SWIFT",
      "SEPA"
    ]
  },
  {
    id: "csi-isban",
    company: "CSI - Isban (Santander Group)",
    role: "Payment Platform Architect",
    period: "2012 - 2018",
    location: "Madrid, Spain",
    description: "Centralized platform for managing international, domestic, SEPA, and pan-European chamber payments.",
    highlights: [
      "Designed routing to appropriate chambers/RTGS based on priority rules",
      "Implemented multi-format support (SWIFT, SEPA, etc.)",
      "Built reconciliation with clearing houses",
      "Integrated with STEP1, STEP2, EURO1, TARGET2, Iberpay, BACS, CHAPS"
    ],
    technologies: [
      "SWIFT",
      "SEPA",
      "Payment Gateways",
      "Message Routing",
      "Clearing Systems"
    ],
    impact: [
      "Managed high-volume daily payment processing",
      "Resilient and auditable payment operations"
    ]
  }
]
