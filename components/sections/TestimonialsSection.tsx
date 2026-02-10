"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface TestimonialsSectionProps {
  locale?: 'es' | 'en'
}

const copy = {
  es: {
    eyebrow: 'Testimonios',
    title: 'Lo que dicen de mí',
    description: 'Recomendaciones de colegas, clientes y líderes con los que he trabajado',
  },
  en: {
    eyebrow: 'Testimonials',
    title: 'What people say',
    description: "Recommendations from colleagues, clients and leaders I've worked with",
  },
}

const testimonials = [
  {
    id: 1,
    name: 'María González',
    role: { es: 'CTO en Santander', en: 'CTO at Santander' },
    content: {
      es: 'Juan Carlos es un arquitecto excepcional. Su visión estratégica y capacidad técnica transformaron completamente nuestra plataforma de pagos. Los resultados han superado todas nuestras expectativas.',
      en: 'Juan Carlos is an exceptional architect. His strategic vision and technical capacity completely transformed our payment platform. The results have exceeded all our expectations.',
    },
    rating: 5,
    company: 'Santander',
  },
  {
    id: 2,
    name: 'David López',
    role: { es: 'Director de Ingeniería', en: 'Engineering Director' },
    content: {
      es: 'Trabajar con Juan Carlos fue una experiencia transformadora. Su dominio de arquitecturas cloud y microservicios nos permitió escalar de manera increíble. Un verdadero líder técnico.',
      en: 'Working with Juan Carlos was a transformative experience. His mastery of cloud architectures and microservices allowed us to scale incredibly. A true technical leader.',
    },
    rating: 5,
    company: 'Tech Corp',
  },
  {
    id: 3,
    name: 'Laura Martínez',
    role: { es: 'Product Manager', en: 'Product Manager' },
    content: {
      es: 'La capacidad de Juan Carlos para traducir requisitos complejos en soluciones elegantes es impresionante. Siempre entrega más de lo esperado con la máxima calidad.',
      en: "Juan Carlos' ability to translate complex requirements into elegant solutions is impressive. Always delivers more than expected with maximum quality.",
    },
    rating: 5,
    company: 'FinTech Solutions',
  },
  {
    id: 4,
    name: 'Carlos Ruiz',
    role: { es: 'VP de Tecnología', en: 'VP of Technology' },
    content: {
      es: 'Juan Carlos no solo es un experto técnico, sino también un excelente mentor. Su capacidad para elevar el nivel del equipo completo es invaluable.',
      en: "Juan Carlos is not only a technical expert, but also an excellent mentor. His ability to elevate the entire team's level is invaluable.",
    },
    rating: 5,
    company: 'Digital Bank',
  },
  {
    id: 5,
    name: 'Ana Fernández',
    role: { es: 'Lead Developer', en: 'Lead Developer' },
    content: {
      es: 'He aprendido más trabajando con Juan Carlos que en años de experiencia previa. Su enfoque en DevOps y CI/CD revolucionó nuestro proceso de desarrollo.',
      en: "I've learned more working with Juan Carlos than in years of previous experience. His focus on DevOps and CI/CD revolutionized our development process.",
    },
    rating: 5,
    company: 'Startup Tech',
  },
  {
    id: 6,
    name: 'Roberto Sánchez',
    role: { es: 'Chief Architect', en: 'Chief Architect' },
    content: {
      es: 'La experiencia de Juan Carlos en sistemas de alto volumen es extraordinaria. Diseñó una arquitectura que maneja millones de transacciones diarias sin problemas.',
      en: "Juan Carlos' experience in high-volume systems is extraordinary. He designed an architecture that handles millions of daily transactions flawlessly.",
    },
    rating: 5,
    company: 'Payment Systems',
  },
]

export function TestimonialsSection({ locale = 'es' }: TestimonialsSectionProps) {
  const t = copy[locale]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 lg:py-32 theme-transition bg-[var(--bg-secondary)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] animate-pulse rounded-full blur-3xl bg-[var(--mesh-color-2)]" />
        <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] animate-pulse rounded-full blur-3xl animation-delay-2000 bg-[var(--mesh-color-1)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-primary)]">
            {t.eyebrow}
          </p>
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-gradient-accent">
            {t.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--text-secondary)]">
            {t.description}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="group relative"
            >
              <div
                className="absolute -inset-0.5 rounded-2xl opacity-0 blur transition-opacity duration-500 group-hover:opacity-30"
                style={{ background: 'var(--accent-gradient)' }}
              />

              <div className="relative flex h-full flex-col rounded-2xl backdrop-blur-xl p-6 transition-all duration-300 bg-[var(--surface-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-default)]">
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-[var(--warning)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="mb-6 flex-grow text-[var(--text-secondary)]">
                  "{typeof testimonial.content === 'object'
                    ? testimonial.content[locale]
                    : testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[var(--border-default)]">
                    <div className="h-full w-full" style={{ background: 'var(--accent-gradient)' }} />
                    <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-[var(--text-on-accent)]">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {typeof testimonial.role === 'object'
                        ? testimonial.role[locale]
                        : testimonial.role}
                    </p>
                    <p className="text-xs text-[var(--accent-primary)]">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
