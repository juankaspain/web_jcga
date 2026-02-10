import { HeroSection } from '@/components/sections/HeroSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import type { Metadata } from 'next'
import { HERO_COPY, type Locale } from '@/app/content/hero'

const locale: Locale = 'es'

export const metadata: Metadata = {
  title: 'Juan Carlos García Arriero | Senior Technical Lead - Cloud & Payments',
  description: HERO_COPY[locale].description,
}

/**
 * HOMEPAGE STRATEGIC ORDER (Conversion-Optimized)
 */
export default function HomePage() {
  return (
    <>
      <HeroSection locale={locale} />
      <ProjectsSection locale={locale} />
      <SkillsSection locale={locale} />
      <ExperienceSection locale={locale} />
      <CertificationsSection locale={locale} />
      <ContactSection locale={locale} />
    </>
  )
}
