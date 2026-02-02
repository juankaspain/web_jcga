"use client"

import { motion, type Variants } from "framer-motion"
import { type ReactNode } from "react"
import { fadeInUp } from "@/lib/animations/variants"

type AnimatedSectionProps = {
  children: ReactNode
  className?: string
  variants?: Variants
  delay?: number
  once?: boolean
  amount?: number
}

export function AnimatedSection({
  children,
  className = "",
  variants = fadeInUp,
  delay = 0,
  once = true,
  amount = 0.3
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
