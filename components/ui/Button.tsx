"use client"

import { forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

type CommonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsLink = CommonProps & {
  href: string
} & Omit<React.ComponentProps<typeof Link>, 'href' | 'className' | 'style'>

type ButtonProps = ButtonAsButton | ButtonAsLink

const sizes: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3 text-base',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
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
    },
    ref
  ) => {
    const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
      primary: {
        background: 'var(--accent-gradient)',
        color: 'var(--text-on-accent)',
        boxShadow: 'var(--shadow-glow-sm)',
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
      'inline-flex items-center justify-center gap-2 font-semibold',
      'transition-all duration-200 ease-out',
      'focus-visible:outline-2 focus-visible:outline-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      sizes[size],
      className
    )

    const mergedStyle: React.CSSProperties = {
      ...variantStyles[variant],
      outlineColor: 'var(--accent-primary)',
      ...style,
    }

    const content = (
      <>
        {isLoading ? (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </>
    )

    const commonInteractiveProps = {
      className: classes,
      style: mergedStyle,
    }

    if (href) {
      return (
        <Link href={href} {...(props as any)} {...commonInteractiveProps}>
          {content}
        </Link>
      )
    }

    return (
      <button
        ref={ref}
        {...(props as any)}
        {...commonInteractiveProps}
        disabled={disabled || isLoading}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'
