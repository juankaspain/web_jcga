import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Experience | Juan Carlos García Arriero",
  description: "Professional experience in cloud architecture, digital banking, and payments systems."
}

export default function ExperiencePage() {
  return <ExperienceSection locale="es" />
}
