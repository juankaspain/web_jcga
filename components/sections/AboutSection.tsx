"use client"

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MagneticButton } from '@/components/ui/MagneticButton'

interface AboutSectionProps {
  locale?: 'es' | 'en'
}

const copy = {
  es: {
    eyebrow: 'SOBRE MÍ',
    title: 'Arquitecto de soluciones que escalan',
    description: 'Más de 15 años transformando ideas en plataformas que procesan millones de transacciones.',
    bio: [
      'Lidero equipos de alto rendimiento en Santander Digital Services, donde diseñamos la arquitectura de canales digitales que utilizan millones de clientes en España, UK, Portugal y Latinoamérica.',
      'Mi pasión es encontrar la intersección entre la excelencia técnica y el impacto de negocio. Cada sistema que construyo está pensado para escalar, ser mantenible y generar valor real.',
      'Fuera del código, soy un eterno estudiante: +140 certificaciones y contando. Creo firmemente que en tecnología, el día que dejas de aprender es el día que empiezas a quedarte atrás.',
    ],
    highlights: [
      { icon: '🏦', title: 'Banca Digital', desc: 'Santander, BBVA, entidades financieras globales' },
      { icon: '☁️', title: 'Cloud Native', desc: 'Azure, Kubernetes, Microservicios' },
      { icon: '🤖', title: 'Data & AI', desc: 'ML/AI aplicado a productos financieros' },
      { icon: '🚀', title: 'DevOps', desc: 'CI/CD, IaC, observabilidad' },
    ],
    cta: 'Ver mi trayectoria completa',
  },
  en: {
    eyebrow: 'ABOUT ME',
    title: 'Architect of solutions that scale',
    description: 'Over 15 years transforming ideas into platforms processing millions of transactions.',
    bio: [
      'I lead high-performance teams at Santander Digital Services, where we design the architecture of digital channels used by millions of customers in Spain, UK, Portugal, and Latin America.',
      'My passion is finding the intersection between technical excellence and business impact. Every system I build is designed to scale, be maintainable, and generate real value.',
      'Outside of code, I\'m an eternal student: +140 certifications and counting. I firmly believe that in technology, the day you stop learning is the day you start falling behind.',
    ],
    highlights: [
      { icon: '🏦', title: 'Digital Banking', desc: 'Santander, BBVA, global financial institutions' },
      { icon: '☁️', title: 'Cloud Native', desc: 'Azure, Kubernetes, Microservices' },
      { icon: '🤖', title: 'Data & AI', desc: 'ML/AI applied to financial products' },
      { icon: '🚀', title: 'DevOps', desc: 'CI/CD, IaC, observability' },
    ],
    cta: 'View my full journey',
  },
}

export function AboutSection({ locale = 'es' }: AboutSectionProps) {
  const t = copy[locale]
  const aboutLink = locale === 'en' ? '/en/about' : '/about'

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.08),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              label={t.eyebrow}
              title={t.title}
              subtitle={t.description}
              align="left"
            />

            <div className="mt-8 space-y-4">
              {t.bio.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-slate-400 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <MagneticButton href={aboutLink}>
                {t.cta}
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right: Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {t.highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="mt-3 text-sm font-semibold text-slate-200">{item.title}</h3>
                  <p className="mt-1 text-xs text-slate-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
