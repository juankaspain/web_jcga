import { Metadata } from "next"
import Link from "next/link"
import { projects } from "@/lib/data/projects"

export const metadata: Metadata = {
  title: "Projects | Juan Carlos García Arriero",
  description: "High-impact projects in digital banking, payments, and cloud architecture."
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-slate-50">
          Projects
        </h1>
        <p className="text-lg text-slate-400">
          High-impact solutions in digital banking, payments systems, and cloud architecture
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all hover:border-cyan-500/50 hover:bg-slate-900"
          >
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              {project.category}
            </div>
            
            <h2 className="mb-3 text-xl font-semibold text-slate-50 transition-colors group-hover:text-cyan-400">
              {project.title}
            </h2>
            
            <p className="mb-4 text-sm text-slate-400 line-clamp-3">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={`${project.slug}-tech-${index}`}
                  className="rounded-full border border-slate-700 bg-slate-950 px-2 py-0.5 text-xs text-slate-400"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="rounded-full border border-slate-700 bg-slate-950 px-2 py-0.5 text-xs text-slate-400">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
