import { cn } from '@/lib/utils/cn'

interface VisuallyHiddenProps {
  children: React.ReactNode
  as?: keyof JSX.IntrinsicElements
  className?: string
}

/**
 * Visually hidden component for screen reader only content
 * Essential for accessibility
 */
export function VisuallyHidden({ 
  children, 
  as: Component = 'span',
  className 
}: VisuallyHiddenProps) {
  return (
    <Component
      className={cn(
        'absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0',
        '[clip:rect(0,0,0,0)]',
        className
      )}
    >
      {children}
    </Component>
  )
}
