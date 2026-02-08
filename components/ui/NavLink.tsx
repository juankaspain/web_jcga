'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  className?: string
}

export function NavLink({
  href,
  children,
  isActive = false,
  onClick,
  className,
}: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'relative py-2 text-sm font-medium transition-colors duration-200',
        className
      )}
      style={{
        color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
      }}
    >
      {children}
      {isActive && (
        <motion.span
          layoutId="nav-underline"
          className="absolute bottom-0 left-0 h-0.5 w-full rounded-full"
          style={{ backgroundColor: 'var(--accent-primary)' }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}
      <span
        className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-full"
        style={{ backgroundColor: 'var(--accent-glow)' }}
        aria-hidden="true"
      />
    </a>
  )
}
