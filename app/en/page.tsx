import { HeroSection } from '@/components/sections/HeroSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata = {
  title: 'Juan Carlos García Arriero | Senior Technical Lead - Cloud & Payments',
  description:
    'Payment solutions architect scaling to millions of users. Senior Technical Lead @ Santander Digital Services. 2M transactions/day, 99.95% SLA. Specialized in Azure, Kubernetes, SEPA, PSD2, AI/ML.',
}

/**
 * HOMEPAGE STRATEGIC ORDER (Conversion-Optimized)
 * 
 * 1. Hero → Value proposition + quantifiable impact
 * 2. Projects → Immediate social proof (show don't tell)
 * 3. Skills → Technical credibility with production context
 * 4. Experience → Career depth for engaged visitors
 * 5. Certifications → Authority reinforcement (140+ certs)
 * 6. Contact → Strategic CTA with lead qualification
 * 
 * REMOVED: AboutSection (generic bio, low conversion value)
 * 
 * WHY THIS ORDER:
 * - Projects early = Hook attention with real results (99.95% SLA > generic about)
 * - Skills after projects = Visitor understands tech context from cases
 * - Experience deeper = Only truly interested visitors scroll this far
 * - Contact at end = Natural funnel conclusion, self-qualified leads
 */
export default function HomePageEN() {
  return (
    <>
      {/* 1. HOOK: Value proposition with quantifiable data */}
      <HeroSection locale="en" />
      
      {/* 2. PROOF: Show don't tell - Real projects with metrics */}
      <ProjectsSection locale="en" />
      
      {/* 3. CREDIBILITY: Technical expertise with production context */}
      <SkillsSection locale="en" />
      
      {/* 4. DEPTH: Career progression for engaged visitors */}
      <ExperienceSection locale="en" />
      
      {/* 5. AUTHORITY: 140+ certifications as trust signal */}
      <CertificationsSection locale="en" />
      
      {/* 6. CONVERSION: Smart form with lead qualification */}
      <ContactSection locale="en" />
    </>
  )
}
