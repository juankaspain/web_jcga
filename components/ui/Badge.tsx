import { cn } from '@/lib/utils/cn'

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'outline'
type BadgeSize = 'sm' | 'md'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  size?: BadgeSize
  className?: string
  style?: React.CSSProperties
}

const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
  default: {
    backgroundColor: 'var(--surface-secondary)',
    color: 'var(--text-secondary)',
    borderColor: 'var(--border-default)',
  },
  primary: {
    backgroundColor: 'var(--accent-subtle)',
    color: 'var(--accent-primary)',
    borderColor: 'var(--accent-muted)',
  },
  success: {
    backgroundColor: 'var(--success-subtle)',
    color: 'var(--success)',
    borderColor: 'var(--success)',
  },
  warning: {
    backgroundColor: 'var(--warning-subtle)',
    color: 'var(--warning)',
    borderColor: 'var(--warning)',
  },
  outline: {
    backgroundColor: 'transparent',
    color: 'var(--text-secondary)',
    borderColor: 'var(--border-default)',
  },
}

const sizes: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
}

export function Badge({ children, variant = 'default', size = 'sm', className, style }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border font-medium',
        'transition-colors duration-200 theme-transition',
        sizes[size],
        className
      )}
      style={{ ...variantStyles[variant], ...style }}
    >
      {children}
    </span>
  )
}
