import { Metadata } from "next"
import { skillCategories } from "@/lib/data/skills"

export const metadata: Metadata = {
  title: "Skills | Juan Carlos García Arriero",
  description: "Technical skills in cloud architecture, DevOps, data & AI, payments, and technical leadership."
}

const levelColors: Record<string, string> = {
  Intermediate: "text-blue-400 border-blue-700",
  Advanced: "text-cyan-400 border-cyan-700",
  Expert: "text-emerald-400 border-emerald-700"
}

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-slate-50">
          Skills & Expertise
        </h1>
        <p className="text-lg text-slate-400">
          Technical competencies developed across 15+ years of experience
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.id}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
          >
            <h2 className="mb-2 text-xl font-semibold text-slate-50">
              {category.title}
            </h2>
            <p className="mb-6 text-sm text-slate-400">{category.description}</p>
            
            <div className="space-y-3">
              {category.skills.map((skill, index) => (
                <div key={`${category.id}-skill-${index}`} className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-slate-200">{skill.name}</span>
                    {skill.years && (
                      <span className="text-xs text-slate-500">({skill.years}y)</span>
                    )}
                  </div>
                  <span
                    className={`rounded-full border px-2 py-0.5 text-xs font-medium ${levelColors[skill.level] || "text-slate-400 border-slate-700"}`}
                  >
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
