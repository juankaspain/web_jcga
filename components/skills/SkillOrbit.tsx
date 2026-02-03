"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { staggerContainer, staggerItem } from "@/lib/animations/variants"

type SkillOrbitProps = {
  locale?: "es" | "en"
}

const skillGroups = [
  {
    id: "cloud",
    title: { es: "Cloud & DevOps", en: "Cloud & DevOps" },
    colorBg: "bg-cyan-500",
    colorBgLight: "bg-cyan-500/20",
    colorBorder: "border-cyan-500/30",
    colorText: "text-cyan-400",
    skills: [
      { name: "Azure", level: 95 },
      { name: "Oracle Cloud", level: 85 },
      { name: "Kubernetes", level: 80 },
      { name: "Docker", level: 90 },
      { name: "Terraform", level: 75 },
      { name: "CI/CD", level: 90 }
    ]
  },
  {
    id: "data",
    title: { es: "Data & AI", en: "Data & AI" },
    colorBg: "bg-purple-500",
    colorBgLight: "bg-purple-500/20",
    colorBorder: "border-purple-500/30",
    colorText: "text-purple-400",
    skills: [
      { name: "Python", level: 85 },
      { name: "SQL", level: 95 },
      { name: "MongoDB", level: 80 },
      { name: "Machine Learning", level: 70 },
      { name: "Power BI", level: 75 },
      { name: "Data Modeling", level: 90 }
    ]
  },
  {
    id: "backend",
    title: { es: "Backend & APIs", en: "Backend & APIs" },
    colorBg: "bg-emerald-500",
    colorBgLight: "bg-emerald-500/20",
    colorBorder: "border-emerald-500/30",
    colorText: "text-emerald-400",
    skills: [
      { name: "Java", level: 90 },
      { name: "Spring Boot", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "REST APIs", level: 95 },
      { name: "Microservices", level: 90 },
      { name: "Event-Driven", level: 85 }
    ]
  },
  {
    id: "leadership",
    title: { es: "Liderazgo Técnico", en: "Technical Leadership" },
    colorBg: "bg-amber-500",
    colorBgLight: "bg-amber-500/20",
    colorBorder: "border-amber-500/30",
    colorText: "text-amber-400",
    skills: [
      { name: "Architecture", level: 95 },
      { name: "Team Lead", level: 90 },
      { name: "Agile/Scrum", level: 85 },
      { name: "Mentoring", level: 85 },
      { name: "Stakeholder Mgmt", level: 80 },
      { name: "Tech Strategy", level: 85 }
    ]
  }
]

export function SkillOrbit({ locale = "es" }: SkillOrbitProps) {
  const [activeGroup, setActiveGroup] = useState<string | null>(null)

  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900 py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-slate-50 md:text-4xl">
            {locale === "es" ? "Skills & Expertise" : "Skills & Expertise"}
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            {locale === "es"
              ? "Competencias técnicas desarrolladas en +15 años de experiencia"
              : "Technical competencies developed across 15+ years of experience"}
          </p>
        </motion.div>

        {/* Skill details grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {skillGroups.map((group) => {
            const isActive = activeGroup === group.id || activeGroup === null

            return (
              <motion.div
                key={group.id}
                variants={staggerItem}
                onClick={() => setActiveGroup(activeGroup === group.id ? null : group.id)}
                className={`cursor-pointer rounded-2xl border bg-slate-900/60 p-6 transition-all duration-300 hover:shadow-lg ${group.colorBorder} ${isActive ? "opacity-100" : "opacity-40"}`}
              >
                <h3 className={`mb-4 text-lg font-semibold ${group.colorText}`}>
                  {group.title[locale]}
                </h3>
                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="text-slate-300 transition-colors group-hover:text-slate-50">
                          {skill.name}
                        </span>
                        <span className={`text-xs ${group.colorText} opacity-0 transition-opacity group-hover:opacity-100`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                          className={`h-full rounded-full ${group.colorBg}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
