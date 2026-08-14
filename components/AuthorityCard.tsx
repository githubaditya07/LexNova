"use client"
import React, {useState} from 'react'
import { DemoAuthority } from '../types'
import { CitationDrawer } from './CitationDrawer'

export function AuthorityCard({a}:{a:DemoAuthority}){
  const [open, setOpen] = useState(false)
  return (
    <div className="glass p-4 rounded">
      <div className="flex items-start justify-between">
        <div>
          <div className="font-semibold">{a.title}</div>
          <div className="text-sm text-gray-400">{a.court} — {a.year}</div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-300">Score: {a.score}</div>
          <button onClick={()=>setOpen(true)} className="mt-2 px-3 py-1 border rounded text-sm">View Evidence</button>
        </div>
      </div>
      <p className="text-sm text-gray-300 mt-3">{a.excerpt}</p>

      {open && <CitationDrawer a={a} onClose={()=>setOpen(false)} />}
    </div>
  )
}
