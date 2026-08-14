import React from 'react'

export function StatCard({title, value, note}:{title:string; value:string; note?:string}){
  return (
    <div className="glass p-4 rounded">
      <div className="text-sm text-gray-400">{title}</div>
      <div className="text-2xl font-semibold">{value}</div>
      {note && <div className="text-xs text-gray-500 mt-1">{note}</div>}
    </div>
  )
}
