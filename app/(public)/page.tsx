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
    'Senior Technical Lead & Cloud Solutions Architect en banca digital. +15 años de experiencia, +140 certificaciones. Especializado en pagos, cloud y AI.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection locale="es" />
      <AboutSection locale="es" />
      <ExperienceSection locale="es" />
      <ProjectsSection locale="es" />
      <CertificationsSection locale="es" />
      <SkillsSection locale="es" />
      <ContactSection locale="es" />
    </>
  )
}
