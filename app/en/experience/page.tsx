import { Metadata } from "next"
import { ExperienceSection } from '@/components/sections/ExperienceSection'

export const metadata: Metadata = {
  title: "Experience | Juan Carlos García Arriero",
  description: "Professional experience in cloud architecture, digital banking, and payments systems."
}

export default function EnExperiencePage() {
  return <ExperienceSection locale="en" />
}
