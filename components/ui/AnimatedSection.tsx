"use client"

import { motion, type Variants } from "framer-motion"
import { type ReactNode, useRef } from "react"
import { useNativeInView } from "@/lib/hooks/useNativeInView"
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
  const ref = useRef(null)
  const isInView = useNativeInView(ref, { once, amount })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
