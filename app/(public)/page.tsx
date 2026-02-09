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
    `Arquitecto de soluciones de pago que escalan a millones de usuarios. Senior Technical Lead @ Santander Digital Services. ${HERO_CLAIMS.transactionsPerDay} transacciones/día, SLA ${HERO_CLAIMS.sla}. Especializado en Azure, Kubernetes, SEPA, PSD2, AI/ML.`,
}

/**
 * HOMEPAGE STRATEGIC ORDER (Conversion-Optimized)
 */
export default function HomePage() {
  return (
    <>
      <HeroSection locale="es" />
      <ProjectsSection locale="es" />
      <SkillsSection locale="es" />
      <ExperienceSection locale="es" />
      <CertificationsSection locale="es" />
      <ContactSection locale="es" />
    </>
  )
}
