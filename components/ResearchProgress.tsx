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
    <div className="glass p-4 rounded mt-4">
      <h4 className="font-semibold">Running research</h4>
      <div className="mt-3 space-y-2">
        {steps.map((s,idx)=> (
          <motion.div key={s} initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{delay: idx*0.08}} className="flex items-center gap-3">
            <div className="w-3 h-3 bg-lexnova-500 rounded-full" />
            <div className="text-sm text-gray-300">{s}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
