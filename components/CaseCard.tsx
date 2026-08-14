import React from 'react'
import { DemoCase } from '../types'

export function CaseCard({c}:{c:DemoCase}){
  return (
    <div className="glass p-6 rounded">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{c.title} <span className="ml-2 text-xs bg-yellow-600/20 px-2 py-1 rounded">DEMO CASE</span></h3>
          <div className="text-sm text-gray-400 mt-2">{c.jurisdiction} — {c.caseType}</div>
        </div>
      </div>

      <div className="mt-4 text-gray-300">
        <p>{c.summary}</p>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold">Legal Issues</h4>
        <ul className="list-disc ml-5 mt-2 text-gray-300">
          {c.issues.map((i,idx)=>(<li key={idx}>{i}</li>))}
        </ul>
      </div>
    </div>
  )
}
