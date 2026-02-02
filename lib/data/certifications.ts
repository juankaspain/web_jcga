export interface CertificationGroup {
  id: string
  provider: string
  certifications: Certification[]
}

export interface Certification {
  name: string
  year?: string
  badge?: string
}

export const certificationGroups: CertificationGroup[] = [
  {
    id: "azure",
    provider: "Microsoft Azure",
    certifications: [
      { name: "Azure Solutions Architect Expert", year: "2024" },
      { name: "Azure DevOps Engineer Expert", year: "2024" },
      { name: "Azure Security Engineer Associate", year: "2024" },
      { name: "Azure Data Engineer Associate", year: "2024" },
      { name: "Azure AI Engineer Associate", year: "2025" },
      { name: "Azure Fundamentals", year: "2023" },
      { name: "Azure AI Fundamentals", year: "2024" },
      { name: "Azure Data Fundamentals", year: "2024" }
    ]
  },
  {
    id: "oracle",
    provider: "Oracle Cloud",
    certifications: [
      { name: "Infrastructure 2023 Foundations" },
      { name: "Data Management 2023 Foundations" },
      { name: "AI Foundations" }
    ]
  },
  {
    id: "mongodb",
    provider: "MongoDB & AI",
    certifications: [
      { name: "AI and Innovation: How MongoDB Enables a Resilient AI Strategy" },
      { name: "Securing MongoDB Self-Managed Networking" },
      { name: "MongoDB Developer Fundamentals" }
    ]
  },
  {
    id: "devops",
    provider: "DevOps & Agile",
    certifications: [
      { name: "DevOps Foundation" },
      { name: "GitOps Fundamentals" },
      { name: "GitOps at Scale" },
      { name: "Scrum Fundamentals" },
      { name: "Team Kanban Practitioner" },
      { name: "Six Sigma Yellow Belt" }
    ]
  },
  {
    id: "education",
    provider: "Academic Education",
    certifications: [
      { name: "Specialization in AI & Data Science", year: "2025-2026", badge: "UNIR (9.3/10)" },
      { name: "Master in Software Engineering", year: "2012", badge: "Universidad Europea" },
      { name: "Degree in Computer Engineering", year: "2008", badge: "Universidad Europea" }
    ]
  }
]
