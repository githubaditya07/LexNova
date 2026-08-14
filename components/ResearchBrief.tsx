"use client"
import React, { useState } from 'react'
import { demoBrief } from '../data/demo'

export function ResearchBrief() {
  const [generating, setGenerating] = useState(false)
  const [ready, setReady] = useState(false)

  return (
    <div className="mt-8">
      <button
        className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white"
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
        <div className="glass mt-4 rounded-xl p-4 text-slate-200">Generating legal research brief…</div>
      )}

      {ready && (
        <div className="glass mt-6 rounded-2xl p-6">
          <div className="mb-2 text-xs uppercase tracking-[0.3em] text-sky-300">Legal Research Brief</div>
          <h3 className="text-2xl font-semibold text-white">Case Overview</h3>
          <p className="mt-3 text-slate-300">{demoBrief.caseOverview}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="mb-2 text-sm uppercase tracking-[0.28em] text-slate-400">Legal Issues</h4>
              <ul className="list-disc space-y-2 pl-5 text-slate-200">
                <li>Whether the termination constituted breach of contract</li>
                <li>Whether contractual damages may be claimed</li>
                <li>Whether the relevant dispute resolution clause applies</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-sm uppercase tracking-[0.28em] text-slate-400">Applicable Statutes</h4>
              <ul className="list-disc space-y-2 pl-5 text-slate-200">
                <li>Indian Contract Act, 1872</li>
                <li>Arbitration and Conciliation Act, 1996</li>
                <li>Commercial Courts Act, 2015</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="mb-2 text-sm uppercase tracking-[0.28em] text-slate-400">Relevant Authorities</h4>
            <ul className="space-y-2 text-slate-200">
              {demoBrief.authorities.map((a) => (
                <li key={a.id} className="border-b border-white/10 pb-2">
                  {a.title} — {a.court} ({a.year})
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">Print</button>
            <button className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-slate-200">Download Brief (Prototype)</button>
          </div>
        </div>
      )}
    </div>
  )
}
