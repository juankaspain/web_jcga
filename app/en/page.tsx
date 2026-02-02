import { Hero } from "@/components/home/Hero"
import { ImpactStats } from "@/components/home/ImpactStats"
import { ProjectsGrid } from "@/components/projects/ProjectsGrid"
import { SkillOrbit } from "@/components/skills/SkillOrbit"
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline"
import { CertificationShowcase } from "@/components/certifications/CertificationShowcase"

export const metadata = {
  title: "Home | Juan Carlos García Arriero",
  description:
    "Senior Technical Lead & Cloud Solutions Architect specializing in digital banking, payments, and AI-driven solutions.",
}

export default function EnHomePage() {
  return (
    <>
      <Hero locale="en" />
      <ImpactStats locale="en" />
      <ProjectsGrid locale="en" limit={6} showFilters={false} />
      <SkillOrbit locale="en" />
      <ExperienceTimeline locale="en" />
      <CertificationShowcase locale="en" />
    </>
  )
}
