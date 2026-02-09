"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  TrendUp,
  Users,
  CurrencyDollar,
  ChartLine,
  Circle,
} from "@phosphor-icons/react"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

interface Achievement {
  description: string
  metric: string
}

interface Experience {
  role: string
  company: string
  period: string
  teamSize: string
  budget?: string
  impact: string
  achievements: Achievement[]
  techStack: string[]
}

interface ExperienceTimelineProps {
  experiences: Experience[]
  locale?: "es" | "en"
}

const copy = {
  es: {
    team: "Equipo",
    budget: "Budget",
    impact: "Impacto",
    achievements: "Logros Clave",
    technologies: "Tecnologías",
  },
  en: {
    team: "Team",
    budget: "Budget",
    impact: "Impact",
    achievements: "Key Achievements",
    technologies: "Technologies",
  },
}

/**
 * Timeline vertical de experiencia profesional
 * Diseño premium con línea conectora animada al scroll
 * Alternancia izquierda/derecha en desktop, lineal en mobile
 * Dot indicator con pulse animation en el item visible
 * 
 * @example
 * <ExperienceTimeline experiences={mockExperiences} locale="es" />
 */
export function ExperienceTimeline({
  experiences,
  locale = "es",
}: ExperienceTimelineProps) {
  const t = copy[locale]
  const prefersReducedMotion = useReducedMotion()
  const timelineRef = useRef<HTMLDivElement>(null)

  // Progreso de scroll para animar la línea conectora
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={timelineRef} className="relative">
      {/* Línea vertical central — animada con scroll */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
        style={{ backgroundColor: "var(--border-subtle)" }}
      >
        <motion.div
          className="w-full origin-top"
          style={{
            height: prefersReducedMotion ? "100%" : lineHeight,
            background: "var(--accent-gradient)",
            boxShadow: "0 0 8px var(--accent-glow)",
          }}
        />
      </div>

      {/* Mobile: Línea vertical a la izquierda */}
      <div
        className="absolute left-4 top-0 bottom-0 w-px md:hidden"
        style={{ backgroundColor: "var(--border-subtle)" }}
      >
        <motion.div
          className="w-full origin-top"
          style={{
            height: prefersReducedMotion ? "100%" : lineHeight,
            background: "var(--accent-gradient)",
            boxShadow: "0 0 8px var(--accent-glow)",
          }}
        />
      </div>

      <div className="space-y-16">
        {experiences.map((exp, index) => {
          // Alternar izquierda/derecha en desktop
          const isLeft = index % 2 === 0
          return (
            <TimelineItem
              key={`${exp.company}-${index}`}
              experience={exp}
              index={index}
              isLeft={isLeft}
              locale={locale}
              t={t}
            />
          )
        })}
      </div>
    </div>
  )
}

function TimelineItem({
  experience: exp,
  index,
  isLeft,
  locale,
  t,
}: {
  experience: Experience
  index: number
  isLeft: boolean
  locale: "es" | "en"
  t: typeof copy.es
}) {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>({
    once: false,
    margin: "-20%",
  })
  const prefersReducedMotion = useReducedMotion()

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
    >
      {/* Desktop: Alternar contenido */}
      <div
        className={`hidden md:block ${
          isLeft ? "md:order-1" : "md:order-2"
        }`}
      >
        <motion.div
          initial=
            prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: isLeft ? 30 : -30 }
          }
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : prefersReducedMotion
              ? { opacity: 1 }
              : { opacity: 0, x: isLeft ? 30 : -30 }
          }
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`glass-card p-6 rounded-xl hover-lift ${
            isLeft ? "text-right" : "text-left"
          }`}
        >
          <CardContent exp={exp} t={t} isLeft={isLeft} />
        </motion.div>
      </div>

      {/* Dot indicator central */}
      <div
        className="absolute left-4 md:left-1/2 top-4 md:top-6 transform md:-translate-x-1/2 z-10"
      >
        <motion.div
          animate={{
            scale: isInView ? [1, 1.2, 1] : 1,
          }}
          transition={{
            duration: 2,
            repeat: isInView ? Infinity : 0,
            ease: "easeInOut",
          }}
          className="relative"
        >
          {/* Glow outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              width: 24,
              height: 24,
              marginLeft: -12,
              marginTop: -12,
              backgroundColor: "var(--accent-primary)",
              opacity: isInView ? 0.3 : 0.1,
            }}
            animate={{
              scale: isInView ? [1, 1.5, 1] : 1,
              opacity: isInView ? [0.3, 0, 0.3] : 0.1,
            }}
            transition={{
              duration: 2,
              repeat: isInView ? Infinity : 0,
              ease: "easeOut",
            }}
          />
          {/* Inner dot */}
          <Circle
            size={12}
            weight="fill"
            className="relative"
            style={{
              color: isInView ? "var(--accent-primary)" : "var(--text-tertiary)",
            }}
          />
        </motion.div>
      </div>

      {/* Desktop: Espacio vacío en el lado opuesto */}
      <div
        className={`hidden md:block ${
          isLeft ? "md:order-2" : "md:order-1"
        }`}
      />

      {/* Mobile: Contenido siempre a la derecha de la línea */}
      <div className="md:hidden pl-12">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : prefersReducedMotion
              ? { opacity: 1 }
              : { opacity: 0, x: 20 }
          }
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-6 rounded-xl"
        >
          <CardContent exp={exp} t={t} isLeft={false} />
        </motion.div>
      </div>
    </div>
  )
}

function CardContent({
  exp,
  t,
  isLeft,
}: {
  exp: Experience
  t: typeof copy.es
  isLeft: boolean
}) {
  return (
    <>
      {/* Header */}
      <div className="mb-4">
        <h3
          className="text-xl font-bold mb-1"
          style={{ color: "var(--text-primary)" }}
        >
          {exp.role}
        </h3>
        <p
          className="text-sm font-semibold mb-1"
          style={{ color: "var(--accent-primary)" }}
        >
          {exp.company}
        </p>
        <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
          {exp.period}
        </p>
      </div>

      {/* Highlights */}
      <div
        className={`flex flex-wrap gap-3 text-xs mb-4 ${
          isLeft ? "justify-end" : "justify-start"
        }`}
      >
        <span
          className="flex items-center gap-1.5"
          style={{ color: "var(--text-secondary)" }}
        >
          <Users size={14} style={{ color: "var(--accent-primary)" }} />
          {t.team}:&nbsp;
          <span
            className="font-medium"
            style={{ color: "var(--text-primary)" }}
          >
            {exp.teamSize}
          </span>
        </span>
        {exp.budget && (
          <span
            className="flex items-center gap-1.5"
            style={{ color: "var(--text-secondary)" }}
          >
            <CurrencyDollar size={14} style={{ color: "var(--accent-primary)" }} />
            {t.budget}:&nbsp;
            <span
              className="font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              {exp.budget}
            </span>
          </span>
        )}
        <span
          className="flex items-center gap-1.5"
          style={{ color: "var(--text-secondary)" }}
        >
          <ChartLine size={14} style={{ color: "var(--accent-primary)" }} />
          {t.impact}:&nbsp;
          <span
            className="font-medium"
            style={{ color: "var(--text-primary)" }}
          >
            {exp.impact}
          </span>
        </span>
      </div>

      {/* Achievements */}
      <div className="mb-4">
        <h4
          className="font-semibold mb-2 flex items-center gap-2 text-sm"
          style={{ color: "var(--text-primary)" }}
        >
          <TrendUp size={16} weight="duotone" style={{ color: "var(--warning)" }} />
          {t.achievements}
        </h4>
        <ul className="space-y-2">
          {exp.achievements.map((achievement, achIndex) => (
            <li
              key={achIndex}
              className={`flex gap-2 items-start text-sm ${
                isLeft ? "flex-row-reverse text-right" : ""
              }`}
            >
              <div
                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: "var(--accent-primary)" }}
              />
              <span className="flex-1" style={{ color: "var(--text-secondary)" }}>
                {achievement.description}
              </span>
              <span
                className="font-semibold text-xs whitespace-nowrap"
                style={{ color: "var(--accent-primary)" }}
              >
                {achievement.metric}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div>
        <h4
          className="text-xs font-semibold mb-2"
          style={{ color: "var(--text-tertiary)" }}
        >
          {t.technologies}
        </h4>
        <div
          className={`flex flex-wrap gap-2 ${
            isLeft ? "justify-end" : "justify-start"
          }`}
        >
          {exp.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded transition-all duration-300"
              style={{
                color: "var(--text-secondary)",
                border: "1px solid var(--border-subtle)",
                backgroundColor: "var(--surface-secondary)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-primary)"
                e.currentTarget.style.color = "var(--accent-primary)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-subtle)"
                e.currentTarget.style.color = "var(--text-secondary)"
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
