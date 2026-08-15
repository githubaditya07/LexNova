"use client"
import React, {useState} from 'react'
import { motion } from 'framer-motion'
import { DemoAuthority } from '../types'
import { CitationDrawer } from './CitationDrawer'

export function AuthorityCard({a}:{a:DemoAuthority}){
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="glass rounded-2xl p-4"
    >
      <div className="flex flex-col gap-3 border-b border-[#4A3B2C] pb-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <div className="serif text-2xl leading-tight text-[#F2E8D5] break-words">{a.title}</div>
          <div className="mt-2 text-[10px] uppercase tracking-[0.28em] text-[#C7A15A]">{a.court} • {a.year}</div>
        </div>
        <div className="shrink-0 text-left sm:text-right">
          <div className="text-[10px] uppercase tracking-[0.22em] text-[#B9AA94]">Prototype relevance score</div>
          <div className="mt-2 text-lg text-[#F2E8D5]">{a.score}</div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <span className="legal-chip rounded-full px-2 py-1 text-[9px] uppercase tracking-[0.2em]">{a.sourceType}</span>
        <span className="legal-chip rounded-full px-2 py-1 text-[9px] uppercase tracking-[0.2em]">{a.jurisdiction}</span>
      </div>

      <p className="mt-3 text-sm leading-6 text-[#D9C8A7]">{a.excerpt}</p>

      <button onClick={()=>setOpen(true)} className="mt-4 rounded-md border border-[#B08A4A] bg-[#2B221B] px-3 py-2 text-sm text-[#F2E8D5] transition hover:border-[#C7A15A] hover:bg-[#342b22]">View Evidence</button>

      {open && <CitationDrawer a={a} onClose={()=>setOpen(false)} />}
    </motion.div>
  )
}
