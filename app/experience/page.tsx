import { Metadata } from "next"
import { experiences } from "@/lib/data/experience"

export const metadata: Metadata = {
  title: "Experience | Juan Carlos García Arriero",
  description: "Professional experience in cloud architecture, digital banking, and payments systems."
}

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="mb-12 text-4xl font-semibold tracking-tight text-slate-50">
        Professional Experience
      </h1>

      <div className="space-y-12">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="relative border-l-2 border-cyan-500/30 pl-8 pb-12 last:pb-0"
          >
            {/* Timeline dot */}
            <div className="absolute -left-2 top-0 h-4 w-4 rounded-full border-2 border-cyan-500 bg-slate-950" />

            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-semibold text-slate-50">{exp.role}</h2>
                <h3 className="mt-1 text-lg text-cyan-400">{exp.company}</h3>
                <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-400">
                  <span>{exp.period}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              <p className="text-slate-300">{exp.description}</p>

              {exp.highlights && exp.highlights.length > 0 && (
                <div>
                  <h4 className="mb-2 font-semibold text-slate-50">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {exp.highlights.map((highlight, i) => (
                      <li key={`${exp.id}-highlight-${i}`} className="flex items-start text-sm text-slate-300">
                        <span className="mr-2 text-cyan-400">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.impact && exp.impact.length > 0 && (
                <div>
                  <h4 className="mb-2 font-semibold text-slate-50">Impact:</h4>
                  <ul className="space-y-1">
                    {exp.impact.map((item, i) => (
                      <li key={`${exp.id}-impact-${i}`} className="flex items-start text-sm text-slate-300">
                        <span className="mr-2 text-cyan-400">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.technologies && exp.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={`${exp.id}-tech-${tech}`}
                      className="rounded-full border border-slate-700 bg-slate-900/50 px-3 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
