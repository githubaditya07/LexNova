"use client"
import React from 'react'
import { DemoAuthority } from '../types'

export function CitationDrawer({a, onClose}:{a:DemoAuthority; onClose:()=>void}){
  return (
    <div className="fixed right-0 top-0 z-50 h-full w-full border-l border-[#4A3B2C] bg-[#17130F]/95 p-5 shadow-2xl md:w-[440px]">
      <div className="flex items-center justify-between border-b border-[#4A3B2C] pb-3">
        <div>
          <div className="text-[10px] uppercase tracking-[0.28em] text-[#C7A15A]">Source Evidence</div>
          <h4 className="serif mt-2 text-3xl text-[#F2E8D5]">{a.title}</h4>
        </div>
        <button onClick={onClose} className="text-sm text-[#B9AA94]">Close</button>
      </div>

      <div className="mt-5 space-y-3 text-sm text-[#D9C8A7]">
        <div><span className="mr-2 text-[#C7A15A]">Source:</span>{a.title}</div>
        <div><span className="mr-2 text-[#C7A15A]">Source Type:</span>{a.sourceType}</div>
        <div><span className="mr-2 text-[#C7A15A]">Jurisdiction:</span>{a.jurisdiction}</div>
        <div><span className="mr-2 text-[#C7A15A]">Year:</span>{a.year}</div>
        <div><span className="mr-2 text-[#C7A15A]">Court:</span>{a.court}</div>
      </div>

      <div className="paper-surface mt-5 rounded-xl p-4 text-sm leading-6">
        <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[#5a4934]">Research Note</div>
        <p>{a.evidence}</p>
        <div className="mt-4 border-t border-[#d1b98d] pt-3 text-[11px] uppercase tracking-[0.2em] text-[#5a4934]">
          Full-text evidence is not currently indexed in this prototype.
        </div>
      </div>

      <div className="mt-6 text-[10px] uppercase tracking-[0.22em] text-[#817463]">DEMO / SYNTHETIC SOURCE — For prototype only</div>
    </div>
  )
}
