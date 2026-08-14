import React from 'react'

export function StatCard({ title, value, note }: { title: string; value: string; note?: string }) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="text-xs uppercase tracking-[0.28em] text-slate-400">{title}</div>
      <div className="mt-3 text-3xl font-semibold text-white">{value}</div>
      {note && <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-slate-500">{note}</div>}
    </div>
  )
}
