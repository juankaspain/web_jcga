export interface Skill {
  name: string
  level: "Expert" | "Advanced" | "Intermediate"
  years?: number
}

export interface SkillCategory {
  id: string
  title: string
  description: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    description: "Cloud architecture, platform engineering, and infrastructure as code",
    skills: [
      { name: "Microsoft Azure", level: "Expert", years: 8 },
      { name: "Azure DevOps", level: "Expert", years: 8 },
      { name: "Azure Data & AI Services", level: "Advanced", years: 3 },
      { name: "Oracle Cloud Infrastructure", level: "Advanced", years: 2 },
      { name: "Docker & Containers", level: "Advanced", years: 6 },
      { name: "Kubernetes", level: "Intermediate", years: 3 }
    ]
  },
  {
    id: "architecture-development",
    title: "Architecture & Development",
    description: "Software architecture, design patterns, and enterprise solutions",
    skills: [
      { name: "Solution Architecture", level: "Expert", years: 10 },
      { name: "Microservices", level: "Expert", years: 8 },
      { name: "REST APIs", level: "Expert", years: 12 },
      { name: "Java/Spring", level: "Advanced", years: 10 },
      { name: "Node.js", level: "Advanced", years: 6 },
      { name: "TypeScript", level: "Advanced", years: 5 },
      { name: "ESB (Mule, Camel, ServiceMix)", level: "Advanced", years: 8 }
    ]
  },
  {
    id: "devops-practices",
    title: "DevOps & Engineering Excellence",
    description: "CI/CD, automation, testing, and observability",
    skills: [
      { name: "CI/CD Pipelines", level: "Expert", years: 8 },
      { name: "GitOps", level: "Advanced", years: 4 },
      { name: "Test Automation (JUnit, Selenium, JMeter)", level: "Advanced", years: 8 },
      { name: "SonarQube", level: "Advanced", years: 6 },
      { name: "Monitoring & Observability", level: "Advanced", years: 6 },
      { name: "Clean Code & TDD/BDD", level: "Advanced", years: 10 }
    ]
  },
  {
    id: "data-ai",
    title: "Data & AI",
    description: "Data engineering, AI/ML, and intelligent systems",
    skills: [
      { name: "MongoDB", level: "Advanced", years: 5 },
      { name: "Azure AI Services", level: "Advanced", years: 2 },
      { name: "Data Engineering", level: "Advanced", years: 4 },
      { name: "MLOps", level: "Intermediate", years: 2 },
      { name: "Azure Data Factory", level: "Advanced", years: 3 },
      { name: "Cassandra", level: "Intermediate", years: 4 }
    ]
  },
  {
    id: "payments-banking",
    title: "Payments & Banking",
    description: "Payment systems, banking platforms, and financial services",
    skills: [
      { name: "Payment Systems (SEPA, SWIFT)", level: "Expert", years: 12 },
      { name: "Instant Payments", level: "Advanced", years: 4 },
      { name: "PSD2 / Open Banking", level: "Advanced", years: 6 },
      { name: "Digital Banking Channels", level: "Expert", years: 8 },
      { name: "PFM/BFM Solutions", level: "Advanced", years: 5 },
      { name: "Risk Engines", level: "Advanced", years: 4 }
    ]
  },
  {
    id: "leadership-methodologies",
    title: "Leadership & Methodologies",
    description: "Technical leadership, agile practices, and team management",
    skills: [
      { name: "Technical Leadership", level: "Expert", years: 10 },
      { name: "Team Management (up to 12)", level: "Advanced", years: 8 },
      { name: "Scrum/Kanban", level: "Advanced", years: 10 },
      { name: "Stakeholder Management", level: "Advanced", years: 10 },
      { name: "Technical Governance", level: "Advanced", years: 8 },
      { name: "Mentoring & Coaching", level: "Advanced", years: 8 }
    ]
  }
]

export const topSkills = [
  "Cloud Architecture (Azure)",
  "Payment Systems",
  "Microservices",
  "DevOps & CI/CD",
  "Data & AI",
  "Technical Leadership"
]
