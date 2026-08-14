import React from 'react'

export function SourceBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-sky-200">
      {label}
    </span>
  )
}
