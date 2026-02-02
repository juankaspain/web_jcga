import { Metadata } from "next"
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline"

export const metadata: Metadata = {
  title: "Experience | Juan Carlos García Arriero",
  description: "Professional experience in cloud architecture, digital banking, and payments systems."
}

export default function ExperiencePage() {
  return <ExperienceTimeline locale="es" />
}
