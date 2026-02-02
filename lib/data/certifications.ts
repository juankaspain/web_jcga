export interface Certification {
  name: string
  issuer: string
  date?: string
  credentialId?: string
  url?: string
}

export interface CertificationGroup {
  provider: string
  logo?: string
  certifications: Certification[]
  count: number
}

export const certificationGroups: CertificationGroup[] = [
  {
    provider: "Microsoft Azure",
    count: 40,
    certifications: [
      {
        name: "Azure Solutions Architect Expert",
        issuer: "Microsoft",
        date: "2024"
      },
      {
        name: "Azure DevOps Engineer Expert",
        issuer: "Microsoft",
        date: "2024"
      },
      {
        name: "Azure Security Engineer Associate",
        issuer: "Microsoft",
        date: "2024"
      },
      {
        name: "Azure Data Engineer Associate",
        issuer: "Microsoft",
        date: "2024"
      },
      {
        name: "Azure AI Engineer Associate",
        issuer: "Microsoft",
        date: "2025"
      }
    ]
  },
  {
    provider: "Oracle Cloud",
    count: 15,
    certifications: [
      {
        name: "Oracle Cloud Infrastructure 2023 Foundations",
        issuer: "Oracle",
        date: "2023"
      },
      {
        name: "Oracle Cloud Data Management 2023 Foundations",
        issuer: "Oracle",
        date: "2023"
      },
      {
        name: "Oracle Cloud Infrastructure AI Foundations",
        issuer: "Oracle",
        date: "2024"
      }
    ]
  },
  {
    provider: "MongoDB",
    count: 12,
    certifications: [
      {
        name: "AI and Innovation: How MongoDB Enables a Resilient AI Strategy",
        issuer: "MongoDB University",
        date: "2024"
      },
      {
        name: "Securing MongoDB Self-Managed Networking",
        issuer: "MongoDB University",
        date: "2024"
      },
      {
        name: "MongoDB for SQL Professionals",
        issuer: "MongoDB University",
        date: "2023"
      }
    ]
  },
  {
    provider: "DevOps & Agile",
    count: 25,
    certifications: [
      {
        name: "DevOps Foundation",
        issuer: "DevOps Institute",
        date: "2022"
      },
      {
        name: "GitOps Fundamentals",
        issuer: "Codefresh",
        date: "2023"
      },
      {
        name: "GitOps at Scale",
        issuer: "Codefresh",
        date: "2023"
      },
      {
        name: "Scrum Fundamentals Certified",
        issuer: "SCRUMstudy",
        date: "2021"
      },
      {
        name: "Team Kanban Practitioner",
        issuer: "Kanban University",
        date: "2021"
      },
      {
        name: "Six Sigma Yellow Belt",
        issuer: "Six Sigma",
        date: "2020"
      }
    ]
  },
  {
    provider: "Data Science & AI",
    count: 18,
    certifications: [
      {
        name: "AI & Data Science Specialization (9.3/10)",
        issuer: "UNIR",
        date: "2025-2026"
      },
      {
        name: "Azure AI Fundamentals",
        issuer: "Microsoft",
        date: "2024"
      },
      {
        name: "Azure Data Fundamentals",
        issuer: "Microsoft",
        date: "2024"
      }
    ]
  },
  {
    provider: "Architecture & Platforms",
    count: 30,
    certifications: [
      {
        name: "Enterprise Architecture",
        issuer: "Various",
        date: "2018-2024"
      },
      {
        name: "API Management & Design",
        issuer: "Various",
        date: "2018-2024"
      },
      {
        name: "Microservices Architecture",
        issuer: "Various",
        date: "2019-2024"
      }
    ]
  }
]

export const totalCertifications = certificationGroups.reduce(
  (acc, group) => acc + group.count,
  0
)

export const topCertifications = [
  "Azure Solutions Architect Expert",
  "Azure DevOps Engineer Expert",
  "Azure Security Engineer Associate",
  "Azure Data Engineer Associate",
  "Azure AI Engineer Associate",
  "AI & Data Science Specialization (UNIR)"
]
