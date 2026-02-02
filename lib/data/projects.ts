export interface Project {
  id: string
  title: string
  slug: string
  description: string
  category: string
  technologies: string[]
  highlights: string[]
  impact?: string
  period: string
}

export const projects: Project[] = [
  {
    id: "multichannel-payments",
    slug: "multichannel-payments-platform",
    title: "Multichannel Payments Platform",
    description: "Centralized platform for managing international, domestic, SEPA payments and pan-European clearing houses for multiple banks within Santander Group.",
    category: "Payments & Banking",
    period: "2012-2018",
    technologies: [
      "Java",
      "SWIFT",
      "SEPA",
      "Microservices",
      "ESB",
      "TARGET2",
      "Iberpay"
    ],
    highlights: [
      "Routing to appropriate clearing house/RTGS based on priority rules",
      "Multiple format support (SWIFT, SEPA, etc.) and reconciliation with clearing houses",
      "Service design for routing, message formatting, and reconciliation",
      "Integration with STEP1, STEP2, EURO1, TARGET2, Iberpay, BACS, CHAPS"
    ],
    impact: "Handling large daily payment volumes in a resilient and auditable manner"
  },
  {
    id: "digital-banking-health",
    slug: "digital-banking-financial-health",
    title: "Digital Banking & Financial Health",
    description: "Comprehensive digital banking platform focused on financial health management, payment solutions, and automated savings for millions of customers.",
    category: "Digital Banking",
    period: "2018-Present",
    technologies: [
      "Azure Cloud",
      "Microservices",
      "APIs REST",
      "AI/ML",
      "DevOps",
      "React",
      "Node.js"
    ],
    highlights: [
      "PFM/BFM and transaction categorization",
      "Subscription control and automatic savings products",
      "Immediate payments and invoicing platforms integrated with Verifactu",
      "Risk engine for contracting, signature, and strong authentication"
    ],
    impact: "Serving 7M+ customers across ES, UK, PT, PL with 55% reduction in critical incidents"
  },
  {
    id: "psd2-open-api",
    slug: "psd2-open-banking-api",
    title: "PSD2 Open Banking API",
    description: "Complete PSD2-compliant Open API solution for banking sector with security, homologation, and regulatory compliance.",
    category: "Open Banking",
    period: "2018",
    technologies: [
      "REST API",
      "Swagger/OpenAPI",
      "OAuth2",
      "Mule ESB",
      "3Scale",
      "IBM API Connect"
    ],
    highlights: [
      "REST API definition with Swagger (JSON/YAML)",
      "Microservices design and ESB orchestrations",
      "Security and PSD2 homologation",
      "Integration with API management platforms"
    ]
  }
]
