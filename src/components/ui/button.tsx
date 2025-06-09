'use client'

import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

type ButtonProps = {
  variant?: 'default' | 'secondary' | 'destructive' | 'ghost' | 'outline' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
} & React.ComponentPropsWithoutRef<typeof motion.button>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow hover:from-green-700 hover:to-green-600',
      secondary: 'bg-gray-800 text-gray-300 hover:bg-gray-700',
      destructive: 'bg-red-600 text-white hover:bg-red-700',
      ghost: 'hover:bg-gray-800 hover:text-white',
      outline: 'border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white',
      link: 'text-green-400 underline-offset-4 hover:underline',
    }

    const sizes = {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10',
    }

    return (
      <motion.button
        whileHover={{ scale: variant === 'link' ? 1 : 1.03 }}
        whileTap={{ scale: variant === 'link' ? 1 : 0.98 }}
        className={cn(
          'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button }