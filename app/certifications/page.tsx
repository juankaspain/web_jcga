import { Metadata } from "next"
import { certificationGroups } from "@/lib/data/certifications"

export const metadata: Metadata = {
  title: "Certifications | Juan Carlos García Arriero",
  description: "140+ professional certifications in Azure, Oracle Cloud, MongoDB, DevOps, and AI."
}

export default function CertificationsPage() {
  const totalCount = certificationGroups.reduce(
    (sum, group) => sum + group.certifications.length,
    0
  )

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-slate-50">
          Certifications
        </h1>
        <p className="text-lg text-slate-400">
          {totalCount}+ professional certifications demonstrating continuous learning and expertise
        </p>
      </div>

      <div className="space-y-8">
        {certificationGroups.map((group) => (
          <div
            key={group.id}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
          >
            <h2 className="mb-6 text-2xl font-semibold text-slate-50">
              {group.provider}
            </h2>
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-1 rounded-lg border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-medium text-slate-200">{cert.name}</h3>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {cert.year && (
                      <span className="text-cyan-400">{cert.year}</span>
                    )}
                    {cert.badge && (
                      <span className="text-slate-400">• {cert.badge}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-6">
        <h2 className="mb-2 text-xl font-semibold text-slate-50">Commitment to Learning</h2>
        <p className="text-slate-300">
          Continuous professional development through certifications in cloud architecture, 
          DevOps practices, data engineering, and AI. Currently pursuing specialization in 
          AI & Data Science with a 9.3/10 GPA.
        </p>
      </div>
    </div>
  )
}
