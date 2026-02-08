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
    style,
    ...props 
  }, ref) => {

    const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
      primary: {
        background: 'var(--accent-gradient)',
        color: 'var(--text-on-accent)',
      },
      secondary: {
        backgroundColor: 'var(--surface-secondary)',
        color: 'var(--text-primary)',
        border: '1px solid var(--border-default)',
      },
      ghost: {
        backgroundColor: 'transparent',
        color: 'var(--text-secondary)',
      },
      outline: {
        backgroundColor: 'transparent',
        color: 'var(--text-primary)',
        border: '1px solid var(--border-default)',
      },
    }

    const classes = cn(
      'inline-flex items-center justify-center gap-2 rounded-full font-medium',
      'transition-all duration-300 ease-out',
      'focus-visible:outline-2 focus-visible:outline-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none',
      sizes[size],
      className
    )

    const mergedStyle = {
      ...variantStyles[variant],
      // @ts-expect-error CSS custom properties
      '--focus-ring-color': 'var(--accent-primary)',
      outlineColor: 'var(--accent-primary)',
      ...style,
    }

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
        <Link href={href} className={classes} style={mergedStyle}>
          {content}
        </Link>
      )
    }

    return (
      <button
        ref={ref}
        className={classes}
        style={mergedStyle}
        disabled={disabled || isLoading}
        onMouseEnter={(e) => {
          if (variant === 'primary') {
            e.currentTarget.style.boxShadow = 'var(--shadow-glow-sm)'
          } else if (variant === 'outline' || variant === 'secondary') {
            e.currentTarget.style.borderColor = 'var(--accent-primary)'
            e.currentTarget.style.color = 'var(--accent-primary)'
          } else if (variant === 'ghost') {
            e.currentTarget.style.color = 'var(--accent-primary)'
            e.currentTarget.style.backgroundColor = 'var(--surface-hover)'
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = ''
          e.currentTarget.style.borderColor = ''
          e.currentTarget.style.color = ''
          e.currentTarget.style.backgroundColor = ''
        }}
        {...props}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'
