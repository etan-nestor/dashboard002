// components/CardStats.tsx
'use client'

import { MotionDiv } from './motion-div'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ComponentType } from 'react'

type CardStatsProps = {
  title: string
  value: string
  change: string
  icon: ComponentType<{ className?: string }>
  trend: 'up' | 'down'
}

export function CardStats({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  trend 
}: CardStatsProps) {
  return (
    <MotionDiv
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="rounded-xl border bg-background/50 p-6 shadow-sm backdrop-blur-sm"
    >
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
        <div className="rounded-lg p-3 shadow-inner bg-gradient-to-br from-primary/10 to-primary/5">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <div
          className={cn(
            "flex items-center text-sm font-medium",
            trend === 'up' ? 'text-green-500' : 'text-red-500'
          )}
        >
          {trend === 'up' ? (
            <TrendingUp className="h-4 w-4 mr-1" />
          ) : (
            <TrendingDown className="h-4 w-4 mr-1" />
          )}
          {change}
        </div>
        <span className="ml-2 text-xs text-muted-foreground">vs. mois dernier</span>
      </div>
    </MotionDiv>
  )
}