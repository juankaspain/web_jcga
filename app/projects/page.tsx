import { Metadata } from "next"
import { ProjectsGrid } from "@/components/projects/ProjectsGrid"

export const metadata: Metadata = {
  title: "Projects | Juan Carlos García Arriero",
  description: "High-impact projects in cloud architecture, digital banking, payments, and data solutions."
}

export default function ProjectsPage() {
  return <ProjectsGrid locale="es" showFilters={true} />
}
