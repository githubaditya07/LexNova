"use client"
import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  'Understanding case',
  'Extracting legal issues',
  'Searching statutory provisions',
  'Searching case law',
  'Finding relevant precedents',
  'Ranking authorities',
  'Synthesizing research',
  'Verifying citations'
]

export function ResearchProgress(){
  return (
    <div className="glass mt-4 rounded-2xl p-4">
      <div className="text-[10px] uppercase tracking-[0.32em] text-[#C7A15A]">Running Research</div>
      <div className="mt-3 space-y-2">
        {steps.map((s,idx)=> (
          <motion.div key={s} initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{delay: idx*0.08}} className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-[#C7A15A]" />
            <div className="text-sm text-[#D9C8A7]">{s}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
