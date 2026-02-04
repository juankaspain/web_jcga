"use client"

import { motion } from "framer-motion"
import { experiences } from "@/lib/data/experience"
import { staggerContainer, staggerItem } from "@/lib/animations/variants"

type ExperienceTimelineProps = {
  locale?: "es" | "en"
}

export function ExperienceTimeline({ locale = "es" }: ExperienceTimelineProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/50" />

      <div className="relative mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-slate-50 md:text-4xl">
            {locale === "es" ? "Experiencia Profesional" : "Professional Experience"}
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            {locale === "es"
              ? "Trayectoria en empresas líderes de tecnología y banca digital"
              : "Career path in leading technology and digital banking companies"}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Static line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-500 via-cyan-400 to-cyan-500 md:left-1/2 md:block" />

          {/* Experience items */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={exp.id}
                  variants={staggerItem}
                  className={`relative flex flex-col ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 top-0 z-10 hidden -translate-x-1/2 md:left-1/2 md:block">
                    <div className="flex h-4 w-4 items-center justify-center rounded-full border-4 border-slate-950 bg-cyan-500">
                      <div className="h-2 w-2 rounded-full bg-cyan-300" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`w-full pl-16 md:w-1/2 md:pl-0 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                    <motion.div
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-sm transition-colors hover:border-cyan-500/30"
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100" />

                      <div className="relative">
                        {/* Period badge */}
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          {exp.period}
                        </div>

                        {/* Role & Company */}
                        <h3 className="mb-1 text-xl font-bold text-slate-50">
                          {exp.role}
                        </h3>
                        <p className="mb-4 text-sm font-medium text-cyan-300">
                          {exp.company}
                        </p>

                        {/* Description */}
                        <p className="mb-4 text-sm leading-relaxed text-slate-400">
                          {exp.description}
                        </p>

                        {/* Highlights */}
                        {exp.highlights && exp.highlights.length > 0 && (
                          <div className="mb-4 space-y-2">
                            {exp.highlights.slice(0, 3).map((highlight, hIndex) => (
                              <div
                                key={hIndex}
                                className="flex items-start gap-2 text-sm text-slate-300"
                              >
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Tech stack */}
                        {exp.technologies && exp.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.slice(0, 5).map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full bg-slate-800 px-2.5 py-1 text-xs text-slate-300"
                              >
                                {tech}
                              </span>
                            ))}
                            {exp.technologies.length > 5 && (
                              <span className="rounded-full bg-slate-800/50 px-2.5 py-1 text-xs text-slate-500">
                                +{exp.technologies.length - 5}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Impact badge */}
                        {exp.impact && exp.impact.length > 0 && (
                          <div className="mt-4 rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-3">
                            <div className="text-xs font-medium uppercase tracking-wider text-cyan-400">
                              {locale === "es" ? "Impacto" : "Impact"}
                            </div>
                            <ul className="mt-2 space-y-1">
                              {exp.impact.slice(0, 2).map((item, iIndex) => (
                                <li key={iIndex} className="text-sm text-slate-300 flex items-start gap-2">
                                  <span className="text-cyan-400">→</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden w-1/2 md:block" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
