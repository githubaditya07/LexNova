import React from 'react'

export function StatCard({ title, value, note }: { title: string; value: string; note?: string }) {
  return (
    <div className="stat-card glass rounded-2xl p-5 transition duration-200 hover:-translate-y-1 hover:border-[#B08A4A]">
      <div className="text-xs uppercase tracking-[0.28em] text-[#B9AA94]">{title}</div>
      <div className="mt-3 text-3xl font-semibold text-[#F2E8D5]">{value}</div>
      {note && <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#817463]">{note}</div>}
    </div>
  )
}
