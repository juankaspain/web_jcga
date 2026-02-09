import { HeroSection } from '@/components/sections/HeroSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import type { Metadata } from 'next'
import { HERO_CLAIMS } from '@/app/content/hero'

export const metadata: Metadata = {
  title: 'Juan Carlos García Arriero | Senior Technical Lead - Cloud & Payments',
  description:
    `Payment solutions architect scaling to millions of users. Senior Technical Lead @ Santander Digital Services. ${HERO_CLAIMS.transactionsPerDay} transactions/day, ${HERO_CLAIMS.sla} SLA. Specialized in Azure, Kubernetes, SEPA, PSD2, AI/ML.`,
}

export default function HomePageEN() {
  return (
    <>
      <HeroSection locale="en" />
      <ProjectsSection locale="en" />
      <SkillsSection locale="en" />
      <ExperienceSection locale="en" />
      <CertificationsSection locale="en" />
      <ContactSection locale="en" />
    </>
  )
}
