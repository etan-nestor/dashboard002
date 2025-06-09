'use client'

import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'destructive'
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variant === 'default' && "bg-gray-700 text-gray-200",
        variant === 'success' && "bg-green-900/50 text-green-400",
        variant === 'warning' && "bg-yellow-900/50 text-yellow-400",
        variant === 'destructive' && "bg-red-900/50 text-red-400",
        className
      )}
      {...props}
    />
  )
}