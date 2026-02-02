export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
}

export const experiences: ExperienceItem[] = [
  {
    id: "santander-2018",
    company: "Santander Digital Services",
    role: "Senior Technical Lead & Cloud Solutions Architect",
    period: "2018 - Present",
    location: "Madrid, Spain",
    description: "Technical leadership of a portfolio of digital banking solutions focused on financial health, payments, and solutions for freelancers and SMEs.",
    achievements: [
      "Solutions supporting over 7M customers across multiple countries (ES, UK, PT, PL)",
      "Reduced critical incidents by 55%",
      "Improved release frequency by 32%",
      "Reduced onboarding time for new team members by 2 months"
    ],
    technologies: [
      "Azure Cloud",
      "Microservices",
      "APIs REST",
      "DevOps",
      "AI/ML",
      "PFM/BFM",
      "Payment Systems"
    ]
  },
  {
    id: "avertia-2018",
    company: "AVERTIA Zona Norte",
    role: "Senior API Enterprise Architect",
    period: "2018",
    location: "Madrid, Spain",
    description: "Focused on PSD2 Open API for banking sector.",
    achievements: [
      "REST API definition with Swagger (JSON/YAML)",
      "Microservices design and ESB orchestrations (Mule, Node-RED)",
      "Integration with 3Scale, IBM API Connect"
    ],
    technologies: [
      "PSD2",
      "Open Banking",
      "Swagger/OpenAPI",
      "Mule ESB",
      "3Scale",
      "IBM API Connect"
    ]
  },
  {
    id: "panel-2011-2018",
    company: "Panel Sistemas",
    role: "Technical Product Owner & Functional Analyst",
    period: "2011 - 2018",
    location: "Madrid, Spain",
    description: "Various roles across different projects for major clients including Ericsson and Telefónica.",
    achievements: [
      "Technical leadership of 8-person team",
      "Architecture with Karaf, OSGI, ServiceMix, Camel, Cassandra",
      "Focus on telecom billing and complex migrations"
    ],
    technologies: [
      "Java/J2EE",
      "Karaf",
      "OSGI",
      "Apache Camel",
      "Cassandra",
      "ServiceMix"
    ]
  }
]
