import { forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] active:bg-cyan-600',
  secondary: 'bg-slate-800 text-slate-50 hover:bg-slate-700 border border-slate-700 hover:border-slate-600',
  ghost: 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50',
  outline: 'border border-slate-600 text-slate-50 hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3 text-base',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    href, 
    isLoading,
    leftIcon,
    rightIcon,
    children, 
    disabled,
    ...props 
  }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center gap-2 rounded-full font-medium',
      'transition-all duration-300 ease-out',
      'focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-slate-950',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none',
      variants[variant],
      sizes[size],
      className
    )

    const content = (
      <>
        {isLoading ? (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        ) : leftIcon}
        {children}
        {!isLoading && rightIcon}
      </>
    )

    if (href) {
      return (
        <Link href={href} className={classes}>
          {content}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} disabled={disabled || isLoading} {...props}>
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'
