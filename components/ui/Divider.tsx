import { cn } from '@/lib/utils/cn'

type DividerOrientation = 'horizontal' | 'vertical'
type DividerVariant = 'solid' | 'gradient'

interface DividerProps {
  orientation?: DividerOrientation
  variant?: DividerVariant
  className?: string
}

export function Divider({
  orientation = 'horizontal',
  variant = 'solid',
  className,
}: DividerProps) {
  const isHorizontal = orientation === 'horizontal'

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        isHorizontal ? 'w-full h-px' : 'h-full w-px',
        className
      )}
      style={{
        background:
          variant === 'gradient'
            ? isHorizontal
              ? 'linear-gradient(90deg, transparent, var(--border-default), transparent)'
              : 'linear-gradient(180deg, transparent, var(--border-default), transparent)'
            : 'var(--border-subtle)',
      }}
    />
  )
}
