"use client"
import React, {useState} from 'react'
import { demoBrief } from '../../data/demo'

export default function Brief(){
  const [generating, setGenerating] = useState(false)
  const [ready, setReady] = useState(false)

  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <div className="text-[10px] uppercase tracking-[0.32em] text-[#C7A15A]">LexNova</div>
          <h2 className="serif mt-2 text-4xl text-[#F2E8D5]">Generate Research Brief</h2>
        </div>
        <button onClick={()=>{ setGenerating(true); setTimeout(()=>{ setGenerating(false); setReady(true)}, 1200)}} className="rounded-md border border-[#B08A4A] bg-[#B08A4A] px-5 py-3 font-medium text-[#1a120d]">Generate Research Brief</button>
      </div>

      {generating && <div className="glass mt-6 rounded-xl p-4 text-[#F2E8D5]">Generating legal research brief…</div>}

      {ready && (
        <div className="paper-surface mt-6 rounded-[22px] p-6 md:p-8">
          <div className="border-b border-[#d1b98d] pb-4">
            <div className="text-[10px] uppercase tracking-[0.35em] text-[#5a4934]">LexNova</div>
            <h3 className="serif mt-2 text-5xl text-[#1b1713]">Legal Research Brief</h3>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-[#5a4934]">Case Context</div>
              <p className="mt-2 text-[#2d241d]">{demoBrief.caseOverview}</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-[#5a4934]">Case</div>
              <p className="mt-2 text-[#2d241d]">M/s Deep Industries Ltd. v. ONGC Ltd.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-[#5a4934]">Legal Issues</div>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[#2d241d]">
                <li>Contract termination</li>
                <li>Breach of contractual obligations</li>
                <li>Damages and compensation</li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-[#5a4934]">Relevant Authorities</div>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[#2d241d]">
                {demoBrief.authorities.map(a => <li key={a.id}>{a.title}</li>)}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-md border border-[#B08A4A] bg-[#B08A4A] px-4 py-2 font-medium text-[#1a120d]">Print</button>
            <button className="rounded-md border border-[#4A3B2C] bg-transparent px-4 py-2 font-medium text-[#1b1713]">Download Brief (Prototype)</button>
          </div>

          <div className="mt-6 border-t border-[#d1b98d] pt-3 text-[10px] uppercase tracking-[0.28em] text-[#5a4934]">
            AI-GENERATED RESEARCH — HUMAN LEGAL REVIEW REQUIRED
          </div>
        </div>
      )}
    </div>
  )
}
