import React from 'react'

export function IssueCard({ issue }: { issue: string }) {
  return (
    <div className="glass rounded-2xl p-4">
      <div className="mb-3 text-xs uppercase tracking-[0.28em] text-sky-300">Legal issue</div>
      <div className="text-base text-slate-100">{issue}</div>
    </div>
  )
}
