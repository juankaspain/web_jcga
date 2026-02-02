export interface SkillCategory {
  id: string
  name: string
  skills: Skill[]
}

export interface Skill {
  name: string
  level?: "Beginner" | "Intermediate" | "Advanced" | "Expert"
  description?: string
}

export const skillCategories: SkillCategory[] = [
  {
    id: "cloud-infra",
    name: "Cloud & Infrastructure",
    skills: [
      { name: "Microsoft Azure", level: "Expert", description: "PaaS, IaaS, networking, security, data" },
      { name: "Oracle Cloud", level: "Advanced", description: "Infrastructure, data, AI" },
      { name: "Docker & Containers", level: "Advanced" },
      { name: "Kubernetes", level: "Intermediate" }
    ]
  },
  {
    id: "architecture",
    name: "Architecture & Development",
    skills: [
      { name: "Solution Architecture", level: "Expert", description: "Cloud & on-premise" },
      { name: "Microservices", level: "Expert" },
      { name: "REST APIs", level: "Expert" },
      { name: "ESB (Mule, ServiceMix, Karaf, Camel)", level: "Advanced" },
      { name: "Java/Spring", level: "Advanced" },
      { name: "Node.js", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" }
    ]
  },
  {
    id: "devops",
    name: "DevOps & Observability",
    skills: [
      { name: "CI/CD (Jenkins, Azure Pipelines)", level: "Advanced" },
      { name: "Testing (JUnit, Selenium, JMeter, Sonarqube)", level: "Advanced" },
      { name: "Git/GitFlow", level: "Expert" },
      { name: "Jira/Redmine", level: "Expert" },
      { name: "Monitoring & Observability", level: "Advanced" }
    ]
  },
  {
    id: "data-ai",
    name: "Data & AI",
    skills: [
      { name: "Data Engineering", level: "Advanced", description: "Azure Data, Azure AI" },
      { name: "Data Science", level: "Intermediate", description: "Specialization UNIR" },
      { name: "Machine Learning", level: "Intermediate" },
      { name: "MLOps", level: "Intermediate" },
      { name: "MongoDB", level: "Advanced", description: "AI and Innovation badge" }
    ]
  },
  {
    id: "payments",
    name: "Payments & Banking",
    skills: [
      { name: "Payment Systems", level: "Expert", description: "SEPA, SWIFT, TARGET2, Iberpay" },
      { name: "PSD2 & Open Banking", level: "Expert" },
      { name: "API Management", level: "Expert", description: "3Scale, IBM API Connect" },
      { name: "Financial Products", level: "Expert", description: "PFM/BFM, risk engines" }
    ]
  },
  {
    id: "leadership",
    name: "Leadership & Methodologies",
    skills: [
      { name: "Technical Leadership", level: "Expert", description: "Teams up to 12 people" },
      { name: "Scrum/Kanban", level: "Expert" },
      { name: "Stakeholder Management", level: "Expert" },
      { name: "Technical Governance", level: "Expert" }
    ]
  }
]
