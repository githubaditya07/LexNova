import React from 'react'

export function IssueCard({ issue }: { issue: string }) {
  return (
    <div className="glass rounded-2xl p-4">
      <div className="mb-3 text-[10px] uppercase tracking-[0.28em] text-[#C7A15A]">Legal issue</div>
      <div className="text-base text-[#F2E8D5]">{issue}</div>
    </div>
  )
}
