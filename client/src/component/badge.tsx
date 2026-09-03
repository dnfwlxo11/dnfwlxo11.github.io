import { ReactNode } from "react"

export default function badge({ children, type }: { children: ReactNode, type: string }) {
  type dotType = {
    [key: string]: string,
  }
  const dotColor: dotType = {
    front: '#2563eb',
    back: '#a855f7',
    lang: '#22c55e',
    db: '#f59e0b',
  }

  return (
    <div className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted">
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dotColor[type] ?? '#71717a' }}></span>
      {children}
    </div>
  )
}
