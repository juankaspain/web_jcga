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
    color: "cyan",
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
    color: "purple",
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
    color: "emerald",
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
    color: "amber",
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

const colorClasses = {
  cyan: {
    bg: "bg-cyan-500",
    bgLight: "bg-cyan-500/20",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    glow: "shadow-cyan-500/20"
  },
  purple: {
    bg: "bg-purple-500",
    bgLight: "bg-purple-500/20",
    border: "border-purple-500/30",
    text: "text-purple-400",
    glow: "shadow-purple-500/20"
  },
  emerald: {
    bg: "bg-emerald-500",
    bgLight: "bg-emerald-500/20",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    glow: "shadow-emerald-500/20"
  },
  amber: {
    bg: "bg-amber-500",
    bgLight: "bg-amber-500/20",
    border: "border-amber-500/30",
    text: "text-amber-400",
    glow: "shadow-amber-500/20"
  }
}

export function SkillOrbit({ locale = "es" }: SkillOrbitProps) {
  const [activeGroup, setActiveGroup] = useState<string | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

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

        {/* Orbit visualization */}
        <div className="relative mx-auto mb-16 h-[400px] w-full max-w-[400px] md:h-[500px] md:max-w-[500px]">
          {/* Center core */}
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 20px rgba(6, 182, 212, 0.3)",
                  "0 0 40px rgba(6, 182, 212, 0.5)",
                  "0 0 20px rgba(6, 182, 212, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 text-slate-950 md:h-24 md:w-24"
            >
              <span className="text-2xl font-bold md:text-3xl">JC</span>
            </motion.div>
          </div>

          {/* Orbit rings */}
          {[1, 2, 3].map((ring) => (
            <div
              key={ring}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-800/50"
              style={{
                width: `${ring * 30 + 20}%`,
                height: `${ring * 30 + 20}%`
              }}
            />
          ))}

          {/* Orbiting skill groups */}
          {skillGroups.map((group, groupIndex) => {
            const angle = (groupIndex / skillGroups.length) * 360
            const radius = 42 // percentage from center
            const colors = colorClasses[group.color as keyof typeof colorClasses]
            const isActive = activeGroup === group.id

            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.15, duration: 0.5 }}
                animate={{
                  rotate: [angle, angle + 360]
                }}
                transition={{
                  rotate: {
                    duration: 60 + groupIndex * 10,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
                className="absolute left-1/2 top-1/2"
                style={{
                  width: `${radius * 2}%`,
                  height: `${radius * 2}%`,
                  marginLeft: `-${radius}%`,
                  marginTop: `-${radius}%`
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveGroup(isActive ? null : group.id)}
                  className={`absolute right-0 top-1/2 flex h-14 w-14 -translate-y-1/2 translate-x-1/2 cursor-pointer items-center justify-center rounded-full border-2 transition-all md:h-16 md:w-16 ${colors.bgLight} ${colors.border} ${isActive ? `shadow-lg ${colors.glow}` : ""}`}
                  style={{
                    // Counter-rotate to keep text upright
                    transform: `translateY(-50%) translateX(50%)`
                  }}
                >
                  <motion.span
                    animate={{ rotate: [0, -360] }}
                    transition={{
                      duration: 60 + groupIndex * 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className={`text-xs font-bold ${colors.text} md:text-sm`}
                  >
                    {group.title[locale].split(" ")[0]}
                  </motion.span>
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        {/* Skill details grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {skillGroups.map((group) => {
            const colors = colorClasses[group.color as keyof typeof colorClasses]
            const isActive = activeGroup === group.id || activeGroup === null

            return (
              <motion.div
                key={group.id}
                variants={staggerItem}
                className={`rounded-2xl border bg-slate-900/60 p-6 transition-all duration-300 ${colors.border} ${isActive ? "opacity-100" : "opacity-40"}`}
              >
                <h3 className={`mb-4 text-lg font-semibold ${colors.text}`}>
                  {group.title[locale]}
                </h3>
                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="text-slate-300 transition-colors group-hover:text-slate-50">
                          {skill.name}
                        </span>
                        <span className={`text-xs ${colors.text} opacity-0 transition-opacity group-hover:opacity-100`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                          className={`h-full rounded-full ${colors.bg}`}
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
