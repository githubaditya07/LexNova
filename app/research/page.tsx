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
              className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white"
            >
              Start AI Research
            </button>
          </div>
        </div>

        {running && <ResearchProgress />}

        {showResults && (
          <section className="mt-6 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-white">Research Results</h3>
              <p className="mt-1 text-slate-400">AI-generated research based on the indexed demonstration corpus.</p>
            </div>

            <div>
              <div className="mb-3 text-xs uppercase tracking-[0.3em] text-slate-400">Legal Issues</div>
              <div className="grid gap-3 md:grid-cols-2">
                {demoCase.issues.map((issue) => <IssueCard key={issue} issue={issue} />)}
              </div>
            </div>

            <div>
              <div className="mb-3 text-xs uppercase tracking-[0.3em] text-slate-400">Applicable Statutory Provisions</div>
              <div className="grid gap-3 md:grid-cols-3">
                {demoStatutes.map((s) => (
                  <div key={s.id} className="glass rounded-2xl p-4">
                    <div className="text-lg font-semibold text-white">{s.title}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.22em] text-sky-300">{s.section}</div>
                    <div className="mt-2 text-sm text-slate-300">{s.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-3 text-xs uppercase tracking-[0.3em] text-slate-400">Relevant Authorities</div>
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
