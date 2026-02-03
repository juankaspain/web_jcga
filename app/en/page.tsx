import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata = {
  title: 'Juan Carlos García Arriero | Cloud & Payments Architect',
  description:
    'Senior Technical Lead & Cloud Solutions Architect in digital banking. +15 years experience, +140 certifications. Specialized in payments, cloud and AI.',
}

export default function HomePageEN() {
  return (
    <>
      <HeroSection locale="en" />
      <AboutSection locale="en" />
      <ExperienceSection locale="en" />
      <ProjectsSection locale="en" />
      <CertificationsSection locale="en" />
      <SkillsSection locale="en" />
      <ContactSection locale="en" />
    </>
  )
}
