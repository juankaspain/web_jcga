"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_50%)]" />
      
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Cloud · Payments · Data & AI · Digital Banking
          </p>
          
          <h1 className="mb-3 text-3xl font-semibold tracking-tight text-slate-50 md:text-5xl">
            Juan Carlos García Arriero
          </h1>
          
          <p className="mb-4 text-lg text-slate-300">
            Senior Technical Lead & Cloud Solutions Architect specializing in digital banking and data-driven solutions.
          </p>
          
          <p className="mb-8 text-sm text-slate-400">
            I design and lead platforms serving millions of customers, combining cloud architecture, DevOps practices, and an end-to-end vision of financial services.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-950 transition-colors hover:bg-cyan-400"
            >
              View High-Impact Projects
            </Link>
            <Link
              href="/experience"
              className="rounded-full border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-50 transition-colors hover:border-slate-500 hover:bg-slate-800"
            >
              View Full Experience
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="mt-8 flex-1 md:mt-0"
        >
          <div className="relative mx-auto h-64 w-64 max-w-xs rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Impact
            </div>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>
                <span className="font-semibold text-cyan-300">+15 years</span> of experience in IT (healthcare, telecom, banking).
              </li>
              <li>
                Solutions for <span className="font-semibold text-cyan-300">millions of customers</span> across multiple countries.
              </li>
              <li>
                <span className="font-semibold text-cyan-300">+140 certifications</span> in Azure, Oracle, DevOps, Data & AI.
              </li>
              <li>
                Leadership of multidisciplinary teams up to{" "}
                <span className="font-semibold text-cyan-300">12 people</span>.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
