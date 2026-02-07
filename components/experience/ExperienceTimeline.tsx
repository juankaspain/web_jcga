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
          animate={{ opacity: 1, y: 0 }}
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
            animate="visible"
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
                    <div className="h-4 w-4 rounded-full border-2 border-cyan-400 bg-slate-950 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                  </div>

                  {/* Content card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${
                    isEven ? "md:pr-8" : "md:pl-8"
                  }`}>
                    <div className="relative rounded-xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-sm transition-all hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5">
                      {/* Glow effect */}
                      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 transition-opacity hover:opacity-100" />

                      {/* Period badge */}
                      <div className="relative mb-3">
                        <span className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                          {exp.period}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <div className="relative">
                        <h3 className="mb-1 text-lg font-semibold text-slate-50">
                          {exp.role}
                        </h3>
                        <p className="mb-3 text-sm font-medium text-cyan-400">
                          {exp.company}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="relative mb-4 text-sm text-slate-400">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      {exp.highlights && exp.highlights.length > 0 && (
                        <ul className="relative mb-4 space-y-1.5">
                          {exp.highlights.slice(0, 3).map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start gap-2 text-sm text-slate-300">
                              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Tech stack */}
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="relative flex flex-wrap gap-1.5">
                          {exp.technologies.slice(0, 5).map((tech) => (
                            <span key={tech} className="rounded bg-slate-800 px-2 py-0.5 text-xs text-slate-400">
                              {tech}
                            </span>
                          ))}
                          {exp.technologies.length > 5 && (
                            <span className="rounded bg-slate-800 px-2 py-0.5 text-xs text-slate-500">
                              +{exp.technologies.length - 5}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Impact badge */}
                      {exp.impact && exp.impact.length > 0 && (
                        <div className="relative mt-4 rounded-lg bg-cyan-500/5 p-3">
                          <p className="mb-1 text-xs font-semibold uppercase text-cyan-400">
                            {locale === "es" ? "Impacto" : "Impact"}
                          </p>
                          {exp.impact.slice(0, 2).map((item, iIndex) => (
                            <p key={iIndex} className="text-sm text-slate-300">
                                                    <span className="text-cyan-400">{"\u2192"}</span> {item}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden w-[calc(50%-2rem)] md:block" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
