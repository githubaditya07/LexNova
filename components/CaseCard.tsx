import React from 'react'
import { motion } from 'framer-motion'
import { DemoCase } from '../types'

export function CaseCard({c}:{c:DemoCase}){
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="glass rounded-2xl p-6 md:p-8"
    >
      <div className="flex flex-col gap-4 border-b border-[#4A3B2C] pb-5 md:flex-row md:items-end md:justify-between">
        <div className="min-w-0 flex-1">
          <div className="text-[10px] uppercase tracking-[0.32em] text-[#C7A15A]">DEMO CASE</div>
          <h3 className="serif mt-3 text-3xl leading-tight text-[#F2E8D5] break-words sm:text-4xl">{c.title}</h3>
        </div>
        <div className="legal-chip shrink-0 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em]">Commercial Contract Dispute</div>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-[#4A3B2C] bg-[#211A14] p-3">
          <div className="text-[10px] uppercase tracking-[0.28em] text-[#B9AA94]">Jurisdiction</div>
          <div className="mt-2 text-sm text-[#F2E8D5]">{c.jurisdiction}</div>
        </div>
        <div className="rounded-xl border border-[#4A3B2C] bg-[#211A14] p-3">
          <div className="text-[10px] uppercase tracking-[0.28em] text-[#B9AA94]">Case Type</div>
          <div className="mt-2 text-sm text-[#F2E8D5]">{c.caseType}</div>
        </div>
        <div className="rounded-xl border border-[#4A3B2C] bg-[#211A14] p-3">
          <div className="text-[10px] uppercase tracking-[0.28em] text-[#B9AA94]">Status</div>
          <div className="mt-2 text-sm text-[#F2E8D5]">Indexed Demo Corpus</div>
        </div>
      </div>

      <div className="mt-6 text-base leading-7 text-[#D7C5A6]">
        <p>{c.summary}</p>
      </div>

      <div className="mt-6">
        <h4 className="text-[10px] uppercase tracking-[0.32em] text-[#B9AA94]">Legal Issues</h4>
        <ul className="mt-3 space-y-2 text-[#E8D9BA]">
          {c.issues.map((i,idx)=>(<li key={idx} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#C7A15A]" /> <span>{i}</span></li>))}
        </ul>
      </div>
    </motion.div>
  )
}
