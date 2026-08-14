"use client"
import React, { useState } from 'react'
import { demoBrief } from '../data/demo'

export function ResearchBrief() {
  const [generating, setGenerating] = useState(false)
  const [ready, setReady] = useState(false)

  return (
    <div className="mt-8">
      <button
        className="rounded-md border border-[#B08A4A] bg-[#B08A4A] px-5 py-3 font-medium text-[#1a120d]"
        onClick={() => {
          setGenerating(true)
          setTimeout(() => {
            setGenerating(false)
            setReady(true)
          }, 1200)
        }}
      >
        Generate Research Brief
      </button>

      {generating && (
        <div className="glass mt-4 rounded-xl p-4 text-[#F2E8D5]">Generating legal research brief…</div>
      )}

      {ready && (
        <div className="glass mt-6 rounded-2xl p-6">
          <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[#C7A15A]">Legal Research Brief</div>
          <h3 className="serif text-4xl text-[#F2E8D5]">Case Overview</h3>
          <p className="mt-3 text-[#D9C8A7]">{demoBrief.caseOverview}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[#B9AA94]">Legal Issues</h4>
              <ul className="list-disc space-y-2 pl-5 text-[#F2E8D5]">
                <li>Whether the termination constituted breach of contract</li>
                <li>Whether contractual damages may be claimed</li>
                <li>Whether the relevant dispute resolution clause applies</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[#B9AA94]">Applicable Statutes</h4>
              <ul className="list-disc space-y-2 pl-5 text-[#F2E8D5]">
                <li>Indian Contract Act, 1872</li>
                <li>Arbitration and Conciliation Act, 1996</li>
                <li>Commercial Courts Act, 2015</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[#B9AA94]">Relevant Authorities</h4>
            <ul className="space-y-2 text-[#F2E8D5]">
              {demoBrief.authorities.map((a) => (
                <li key={a.id} className="border-b border-[#4A3B2C] pb-2">
                  {a.title} — {a.court} ({a.year})
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-md border border-[#B08A4A] bg-[#B08A4A] px-4 py-2 font-medium text-[#1a120d]">Print</button>
            <button className="rounded-md border border-[#4A3B2C] bg-[#2B221B] px-4 py-2 text-[#F2E8D5]">Download Brief (Prototype)</button>
          </div>
        </div>
      )}
    </div>
  )
}
