"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

interface TestimonialsSectionProps {
  locale?: 'es' | 'en'
}

const copy = {
  es: {
    eyebrow: 'Testimonios',
    title: 'Lo que dicen de mí',
    description: 'Recomendaciones de colegas, clientes y líderes con los que he trabajado'
  },
  en: {
    eyebrow: 'Testimonials',
    title: 'What people say',
    description: 'Recommendations from colleagues, clients and leaders I\'ve worked with'
  }
}

const testimonials = [
  {
    id: 1,
    name: 'María González',
    role: {
      es: 'CTO en Santander',
      en: 'CTO at Santander'
    },
    image: '/testimonials/avatar-1.jpg',
    content: {
      es: 'Juan Carlos es un arquitecto excepcional. Su visión estratégica y capacidad técnica transformaron completamente nuestra plataforma de pagos. Los resultados han superado todas nuestras expectativas.',
      en: 'Juan Carlos is an exceptional architect. His strategic vision and technical capacity completely transformed our payment platform. The results have exceeded all our expectations.'
    },
    rating: 5,
    company: 'Santander'
  },
  {
    id: 2,
    name: 'David López',
    role: {
      es: 'Director de Ingeniería',
      en: 'Engineering Director'
    },
    image: '/testimonials/avatar-2.jpg',
    content: {
      es: 'Trabajar con Juan Carlos fue una experiencia transformadora. Su dominio de arquitecturas cloud y microservicios nos permitió escalar de manera increíble. Un verdadero líder técnico.',
      en: 'Working with Juan Carlos was a transformative experience. His mastery of cloud architectures and microservices allowed us to scale incredibly. A true technical leader.'
    },
    rating: 5,
    company: 'Tech Corp'
  },
  {
    id: 3,
    name: 'Laura Martínez',
    role: {
      es: 'Product Manager',
      en: 'Product Manager'
    },
    image: '/testimonials/avatar-3.jpg',
    content: {
      es: 'La capacidad de Juan Carlos para traducir requisitos complejos en soluciones elegantes es impresionante. Siempre entrega más de lo esperado con la máxima calidad.',
      en: 'Juan Carlos\' ability to translate complex requirements into elegant solutions is impressive. Always delivers more than expected with maximum quality.'
    },
    rating: 5,
    company: 'FinTech Solutions'
  },
  {
    id: 4,
    name: 'Carlos Ruiz',
    role: {
      es: 'VP de Tecnología',
      en: 'VP of Technology'
    },
    image: '/testimonials/avatar-4.jpg',
    content: {
      es: 'Juan Carlos no solo es un experto técnico, sino también un excelente mentor. Su capacidad para elevar el nivel del equipo completo es invaluable.',
      en: 'Juan Carlos is not only a technical expert, but also an excellent mentor. His ability to elevate the entire team\'s level is invaluable.'
    },
    rating: 5,
    company: 'Digital Bank'
  },
  {
    id: 5,
    name: 'Ana Fernández',
    role: {
      es: 'Lead Developer',
      en: 'Lead Developer'
    },
    image: '/testimonials/avatar-5.jpg',
    content: {
      es: 'He aprendido más trabajando con Juan Carlos que en años de experiencia previa. Su enfoque en DevOps y CI/CD revolucionó nuestro proceso de desarrollo.',
      en: 'I\'ve learned more working with Juan Carlos than in years of previous experience. His focus on DevOps and CI/CD revolutionized our development process.'
    },
    rating: 5,
    company: 'Startup Tech'
  },
  {
    id: 6,
    name: 'Roberto Sánchez',
    role: {
      es: 'Chief Architect',
      en: 'Chief Architect'
    },
    image: '/testimonials/avatar-6.jpg',
    content: {
      es: 'La experiencia de Juan Carlos en sistemas de alto volumen es extraordinaria. Diseñó una arquitectura que maneja millones de transacciones diarias sin problemas.',
      en: 'Juan Carlos\' experience in high-volume systems is extraordinary. He designed an architecture that handles millions of daily transactions flawlessly.'
    },
    rating: 5,
    company: 'Payment Systems'
  }
]

export function TestimonialsSection({ locale = 'es' }: TestimonialsSectionProps) {
  const t = copy[locale]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] animate-pulse rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] animate-pulse rounded-full bg-cyan-500/10 blur-3xl animation-delay-2000" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            {t.eyebrow}
          </p>
          <h2 className="mb-6 bg-gradient-to-r from-slate-50 via-cyan-100 to-slate-50 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl">
            {t.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            {t.description}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="group relative"
            >
              {/* Card glow effect */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 blur transition-opacity duration-500 group-hover:opacity-30" />
              
              <div className="relative flex h-full flex-col rounded-2xl border border-slate-700/50 bg-slate-900/80 p-6 backdrop-blur-xl transition-all duration-300 group-hover:border-slate-600">
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="mb-6 flex-grow text-slate-300">
                  "{typeof testimonial.content === 'object' ? testimonial.content[locale] : testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-slate-700">
                    <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-purple-600" />
                    <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-200">{testimonial.name}</p>
                    <p className="text-sm text-slate-400">
                      {typeof testimonial.role === 'object' ? testimonial.role[locale] : testimonial.role}
                    </p>
                    <p className="text-xs text-cyan-400">{testimonial.company}</p>
                  </div>
                </div>

                {/* LinkedIn icon */}
                <div className="absolute right-6 top-6 opacity-20 transition-opacity group-hover:opacity-40">
                  <svg className="h-6 w-6 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
