"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { staggerContainer, staggerItem } from "@/lib/animations/variants"

type CertificationShowcaseProps = {
  locale?: "es" | "en"
}

const certGroups = [
  {
    id: "azure",
    provider: "Microsoft Azure",
    logo: "☁️",
    colorBg: "bg-blue-500",
    colorBgLight: "bg-blue-500/20",
    colorBorder: "border-blue-500/30",
    colorText: "text-blue-400",
    count: 45,
    featured: [
      "Azure Solutions Architect Expert",
      "Azure DevOps Engineer Expert",
      "Azure Data Engineer Associate",
      "Azure AI Engineer Associate"
    ]
  },
  {
    id: "oracle",
    provider: "Oracle Cloud",
    logo: "🟠",
    colorBg: "bg-red-500",
    colorBgLight: "bg-red-500/20",
    colorBorder: "border-red-500/30",
    colorText: "text-red-400",
    count: 35,
    featured: [
      "OCI Architect Professional",
      "OCI Developer Professional",
      "Oracle Database Administrator",
      "Oracle Integration Cloud"
    ]
  },
  {
    id: "mongodb",
    provider: "MongoDB",
    logo: "🍃",
    colorBg: "bg-green-500",
    colorBgLight: "bg-green-500/20",
    colorBorder: "border-green-500/30",
    colorText: "text-green-400",
    count: 12,
    featured: [
      "MongoDB Developer Associate",
      "MongoDB DBA Associate",
      "MongoDB Data Modeling",
      "Atlas Administrator"
    ]
  },
  {
    id: "devops",
    provider: "DevOps & Agile",
    logo: "♾️",
    colorBg: "bg-purple-500",
    colorBgLight: "bg-purple-500/20",
    colorBorder: "border-purple-500/30",
    colorText: "text-purple-400",
    count: 25,
    featured: [
      "Kubernetes Administrator (CKA)",
      "Docker Certified Associate",
      "Professional Scrum Master",
      "GitLab CI/CD Specialist"
    ]
  },
  {
    id: "ai",
    provider: "AI & Data Science",
    logo: "🧠",
    colorBg: "bg-cyan-500",
    colorBgLight: "bg-cyan-500/20",
    colorBorder: "border-cyan-500/30",
    colorText: "text-cyan-400",
    count: 20,
    featured: [
      "TensorFlow Developer",
      "AWS Machine Learning",
      "Google Data Analytics",
      "IBM Data Science Professional"
    ]
  }
]

export function CertificationShowcase({ locale = "es" }: CertificationShowcaseProps) {
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null)
  const totalCerts = certGroups.reduce((sum, g) => sum + g.count, 0)

  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 py-20">
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-slate-50 md:text-4xl">
            {locale === "es" ? "Certificaciones" : "Certifications"}
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            {locale === "es"
              ? `${totalCerts}+ certificaciones profesionales que demuestran aprendizaje continuo`
              : `${totalCerts}+ professional certifications demonstrating continuous learning`}
          </p>
        </motion.div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap items-center justify-center gap-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400">{totalCerts}+</div>
            <div className="text-sm text-slate-400">
              {locale === "es" ? "Certificaciones" : "Certifications"}
            </div>
          </div>
          <div className="hidden h-12 w-px bg-slate-700 md:block" />
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400">{certGroups.length}</div>
            <div className="text-sm text-slate-400">
              {locale === "es" ? "Proveedores" : "Providers"}
            </div>
          </div>
          <div className="hidden h-12 w-px bg-slate-700 md:block" />
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400">9.3</div>
            <div className="text-sm text-slate-400">
              {locale === "es" ? "GPA Máster AI" : "AI Master GPA"}
            </div>
          </div>
        </motion.div>

        {/* Certification grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {certGroups.map((group) => {
            const isExpanded = expandedGroup === group.id

            return (
              <motion.div
                key={group.id}
                variants={staggerItem}
                className={`group cursor-pointer rounded-2xl border bg-slate-900/60 p-6 transition-all duration-300 hover:shadow-lg ${group.colorBorder}`}
                onClick={() => setExpandedGroup(isExpanded ? null : group.id)}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{group.logo}</span>
                    <div>
                      <h3 className="font-semibold text-slate-50">{group.provider}</h3>
                      <p className={`text-sm ${group.colorText}`}>{group.count} certs</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    className="text-slate-400"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>

                {/* Progress bar */}
                <div className="mb-4 h-2 overflow-hidden rounded-full bg-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(group.count / 50) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className={`h-full rounded-full ${group.colorBg}`}
                  />
                </div>

                {/* Featured certs (expandable) */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2 pt-2">
                    {group.featured.map((cert, index) => (
                      <motion.div
                        key={cert}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -10 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${group.colorBg}`} />
                        {cert}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Hover hint */}
                {!isExpanded && (
                  <p className="mt-2 text-xs text-slate-500">
                    {locale === "es" ? "Click para ver destacadas" : "Click to see featured"}
                  </p>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Learning commitment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 p-8 text-center"
        >
          <h3 className="mb-2 text-xl font-semibold text-slate-50">
            {locale === "es" ? "Compromiso con el Aprendizaje" : "Commitment to Learning"}
          </h3>
          <p className="mx-auto max-w-2xl text-slate-300">
            {locale === "es"
              ? "Desarrollo profesional continuo a través de certificaciones en arquitectura cloud, prácticas DevOps, ingeniería de datos e IA. Actualmente cursando especialización en AI & Data Science con media de 9.3/10."
              : "Continuous professional development through certifications in cloud architecture, DevOps practices, data engineering, and AI. Currently pursuing specialization in AI & Data Science with a 9.3/10 GPA."}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
