"use client"
import React, {useState} from 'react'
import { demoBrief } from '../../data/demo'

export default function Brief(){
  const [generating, setGenerating] = useState(false)
  const [ready, setReady] = useState(false)

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Generate Research Brief</h2>
        <div>
          <button onClick={()=>{ setGenerating(true); setTimeout(()=>{ setGenerating(false); setReady(true)}, 1200)}} className="px-4 py-2 bg-lexnova-500 rounded">Generate Research Brief</button>
        </div>
      </div>

      {generating && <div className="mt-6 glass p-4 rounded">Generating research brief…</div>}

      {ready && (
        <div className="mt-6 glass p-6 rounded">
          <h3 className="text-xl font-semibold">LEGAL RESEARCH BRIEF</h3>
          <p className="mt-2 text-gray-300">{demoBrief.caseOverview}</p>

          <div className="mt-4">
            <h4 className="font-semibold">Key Authorities</h4>
            <ul className="list-disc ml-6 mt-2 text-gray-300">
              {demoBrief.authorities.map(a=> <li key={a.id}>{a.title} — {a.court} ({a.year})</li>)}
            </ul>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="px-4 py-2 bg-lexnova-500 rounded">Print</button>
            <button className="px-4 py-2 border rounded">Download (Prototype)</button>
          </div>
        </div>
      )}
    </div>
  )
}
