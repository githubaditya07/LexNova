"use client"
import React, {useState} from 'react'
import { demoCase } from '../../data/demo'
import { CaseCard } from '../../components/CaseCard'
import { ResearchProgress } from '../../components/ResearchProgress'
import { AuthorityCard } from '../../components/AuthorityCard'
import { ResearchChat } from '../../components/ResearchChat'

export default function Research(){
  const [running, setRunning] = useState(false)
  const [showResults, setShowResults] = useState(false)

  return (
    <div className="min-h-screen flex gap-6">
      <div className="flex-1">
        <div className="mb-6">
          <CaseCard c={demoCase} />
          <div className="mt-4 flex gap-3">
            <button onClick={() => { setRunning(true); setTimeout(()=>{ setRunning(false); setShowResults(true); }, 2200)}} className="px-4 py-2 bg-lexnova-500 rounded">Start AI Research</button>
          </div>
        </div>

        {running && <ResearchProgress />}

        {showResults && (
          <section className="mt-6">
            <h3 className="text-xl font-semibold">Research Results</h3>
            <p className="text-gray-400">AI-generated research based on the indexed demonstration corpus.</p>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {demoCase.issues.map((issue, idx)=> (
                <div key={idx} className="glass p-4 rounded">
                  <h4 className="font-semibold">{issue}</h4>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="font-semibold">Relevant Authorities</h4>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {demoCase.authorities.map((a)=> <AuthorityCard key={a.id} a={a} />)}
              </div>
            </div>
          </section>
        )}
      </div>

      <aside className="w-96">
        <ResearchChat />
      </aside>
    </div>
  )
}
