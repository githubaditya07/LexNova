"use client"
import React, { useState } from 'react'
import { demoCase, demoStatutes } from '../../data/demo'
import { CaseCard } from '../../components/CaseCard'
import { ResearchProgress } from '../../components/ResearchProgress'
import { AuthorityCard } from '../../components/AuthorityCard'
import { ResearchChat } from '../../components/ResearchChat'
import { IssueCard } from '../../components/IssueCard'
import { ResearchBrief } from '../../components/ResearchBrief'

export default function Research(){
  const [running, setRunning] = useState(false)
  const [showResults, setShowResults] = useState(false)

  return (
    <div className="min-h-screen flex flex-col gap-6 xl:flex-row">
      <div className="flex-1">
        <div className="mb-6">
          <CaseCard c={demoCase} />
          <div className="mt-4 flex gap-3">
            <button
              onClick={() => {
                setRunning(true)
                setTimeout(() => {
                  setRunning(false)
                  setShowResults(true)
                }, 2200)
              }}
              className="rounded-md border border-[#B08A4A] bg-[#B08A4A] px-5 py-3 font-medium text-[#1a120d]"
            >
              Start AI Research
            </button>
          </div>
        </div>

        {running && <ResearchProgress />}

        {showResults && (
          <section className="mt-6 space-y-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-[#C7A15A]">Research Query</div>
              <h3 className="serif mt-2 text-4xl text-[#F2E8D5]">Termination of commercial contracts and damages</h3>
            </div>

            <div>
              <div className="mb-3 text-[10px] uppercase tracking-[0.32em] text-[#B9AA94]">Legal Issues Identified</div>
              <div className="grid gap-3 md:grid-cols-2">
                {demoCase.issues.map((issue, idx) => (
                  <div key={issue} className="glass rounded-2xl p-4">
                    <div className="text-[10px] uppercase tracking-[0.26em] text-[#C7A15A]">0{idx + 1}</div>
                    <div className="mt-2 text-lg text-[#F2E8D5]">{issue}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-3 text-[10px] uppercase tracking-[0.32em] text-[#B9AA94]">Applicable Statutory Provisions</div>
              <div className="grid gap-3 md:grid-cols-3">
                {demoStatutes.map((s) => (
                  <div key={s.id} className="glass rounded-2xl p-4">
                    <div className="text-lg font-semibold text-[#F2E8D5]">{s.title}</div>
                    <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#C7A15A]">{s.section}</div>
                    <div className="mt-2 text-sm text-[#D9C8A7]">{s.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-3 text-[10px] uppercase tracking-[0.32em] text-[#B9AA94]">Top Authorities</div>
              <div className="grid gap-3 md:grid-cols-2">
                {demoCase.authorities.map((a) => <AuthorityCard key={a.id} a={a} />)}
              </div>
            </div>

            <ResearchBrief />
          </section>
        )}
      </div>

      <aside className="w-full xl:w-[380px]">
        <ResearchChat />
      </aside>
    </div>
  )
}
