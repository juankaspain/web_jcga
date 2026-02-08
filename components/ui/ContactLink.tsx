'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

interface ContactLinkProps {
  href: string
  icon: React.ReactNode
  label: string
  external?: boolean
  className?: string
}

export function ContactLink({
  href,
  icon,
  label,
  external = false,
  className,
}: ContactLinkProps) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      whileHover={{ x: 4 }}
      className={cn(
        'inline-flex items-center gap-3 py-2 group transition-colors duration-200',
        className
      )}
      style={{ color: 'var(--text-secondary)' }}
      aria-label={label}
    >
      <span
        className="flex-shrink-0 transition-colors duration-200"
        style={{ color: 'var(--text-tertiary)' }}
      >
        {icon}
      </span>
      <span className="text-sm font-medium transition-colors duration-200 group-hover:text-[var(--accent-primary)]">
        {label}
      </span>
    </motion.a>
  )
}
