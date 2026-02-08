"use client"

import { forwardRef, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils/cn'
import { fadeUp } from '@/lib/animations/variants'

interface SectionProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  title?: string
  subtitle?: string
  centered?: boolean
  animate?: boolean
  id?: string
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, containerClassName, title, subtitle, centered = false, animate = true, id }, ref) => {
    const inViewRef = useRef(null)
    const isInView = useInView(inViewRef, { once: true, margin: '-100px' })

    const content = (
      <>
        {(title || subtitle) && (
          <div className={cn('mb-12', centered && 'text-center')}>
            {title && (
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </>
    )

    return (
      <section
        ref={ref}
        id={id}
        className={cn('py-16 md:py-24', className)}
      >
        <div className={cn('mx-auto max-w-6xl px-4', containerClassName)}>
          {animate ? (
            <motion.div
              ref={inViewRef}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {content}
            </motion.div>
          ) : (
            content
          )}
        </div>
      </section>
    )
  }
)

Section.displayName = 'Section'
