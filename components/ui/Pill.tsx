import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type PillProps = {
  children: ReactNode
  tone?: 'honey' | 'sage' | 'oat'
}

export function Pill({ children, tone = 'honey' }: PillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]',
        tone === 'honey' && 'bg-honey/25 text-espresso',
        tone === 'sage' && 'bg-sage/25 text-espresso',
        tone === 'oat' && 'bg-oat text-espresso',
      )}
    >
      {children}
    </span>
  )
}
