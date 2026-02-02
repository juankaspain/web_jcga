import { Hero } from "@/components/home/Hero"
import { ImpactStats } from "@/components/home/ImpactStats"
import { ProjectsGrid } from "@/components/projects/ProjectsGrid"
import { SkillOrbit } from "@/components/skills/SkillOrbit"
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline"
import { CertificationShowcase } from "@/components/certifications/CertificationShowcase"

export const metadata = {
  title: "Inicio | Juan Carlos García Arriero",
  description:
    "Senior Technical Lead & Cloud Solutions Architect en banca digital, especializado en pagos, cloud, datos y AI.",
}

export default function HomePage() {
  return (
    <>
      <Hero locale="es" />
      <ImpactStats locale="es" />
      <ProjectsGrid locale="es" limit={6} showFilters={false} />
      <SkillOrbit locale="es" />
      <ExperienceTimeline locale="es" />
      <CertificationShowcase locale="es" />
    </>
  )
}
