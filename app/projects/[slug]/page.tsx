import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { projects } from "@/lib/data/projects"

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
  
  if (!project) {
    return {
      title: "Project Not Found"
    }
  }

  return {
    title: `${project.title} | Projects`,
    description: project.description
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }))
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300"
      >
        ← Back to Projects
      </Link>

      <div className="mb-6">
        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          {project.category}
        </div>
        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-slate-50">
          {project.title}
        </h1>
        <p className="text-sm text-slate-400">{project.period}</p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-slate-50">Overview</h2>
          <p className="text-slate-300 leading-relaxed">{project.description}</p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-slate-50">Key Features</h2>
          <ul className="space-y-2">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start text-slate-300">
                <span className="mr-2 text-cyan-400">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        {project.impact && (
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-slate-50">Impact</h2>
            <p className="rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-4 text-slate-300">
              {project.impact}
            </p>
          </section>
        )}

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-slate-50">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
