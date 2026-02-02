import { Metadata } from "next"
import { ProjectsGrid } from "@/components/projects/ProjectsGrid"

export const metadata: Metadata = {
  title: "Projects | Juan Carlos García Arriero",
  description: "High-impact projects in cloud architecture, digital banking, payments, and data solutions."
}

export default function EnProjectsPage() {
  return <ProjectsGrid locale="en" showFilters={true} />
}
