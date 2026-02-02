"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/Card'

const stats = [
  { 
    label: "Experiencia", 
    value: "+15", 
    suffix: "años",
    icon: "⏱️",
    description: "En sector TI"
  },
  { 
    label: "Clientes impactados", 
    value: "M+", 
    prefix: "",
    icon: "🌍",
    description: "En múltiples países"
  },
  { 
    label: "Certificaciones", 
    value: "+140", 
    suffix: "",
    icon: "🏆",
    description: "Azure, Oracle, DevOps"
  },
  { 
    label: "Equipo máximo", 
    value: "12", 
    suffix: "personas",
    icon: "👥",
    description: "Equipos multidisciplinares"
  }
]

export function ImpactStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative border-b border-slate-800 bg-slate-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      <div className="relative mx-auto max-w-6xl px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card 
                variant="interactive" 
                className="text-center h-full group"
              >
                <motion.div
                  className="text-3xl mb-3"
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.icon}
                </motion.div>
                
                <div className="text-3xl font-bold text-cyan-300 mb-1 group-hover:text-cyan-400 transition-colors">
                  {stat.prefix}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  >
                    {stat.value}
                  </motion.span>
                  {stat.suffix && <span className="text-lg font-normal text-slate-400 ml-1">{stat.suffix}</span>}
                </div>
                
                <div className="text-sm font-medium text-slate-200 mb-1">
                  {stat.label}
                </div>
                
                <div className="text-xs text-slate-500">
                  {stat.description}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
