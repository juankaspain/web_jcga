import { Metadata } from "next"
import { SkillOrbit } from "@/components/skills/SkillOrbit"

export const metadata: Metadata = {
  title: "Skills | Juan Carlos García Arriero",
  description: "Technical skills in cloud architecture, DevOps, data & AI, payments, and technical leadership."
}

export default function SkillsPage() {
  return <SkillOrbit locale="es" />
}
