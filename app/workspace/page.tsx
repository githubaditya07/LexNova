import React from 'react'
import Link from 'next/link'
import { StatCard } from '../../components/StatCard'

export default function Workspace(){
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Good morning</h2>
          <p className="text-gray-400">Continue your legal research</p>
        </div>
        <div className="flex gap-3">
          <Link href="/research" className="px-4 py-2 bg-lexnova-500 rounded">Open Demo Case</Link>
          <button className="px-4 py-2 border rounded text-gray-200">Start New Research</button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-4 gap-4">
        <StatCard title="Demo Corpus" value="5" note="DEMO / PROTOTYPE" />
        <StatCard title="Research Sessions" value="12" note="DEMO / PROTOTYPE" />
        <StatCard title="Authorities Found" value="34" note="DEMO / PROTOTYPE" />
        <StatCard title="Saved Cases" value="3" note="DEMO / PROTOTYPE" />
      </div>
    </div>
  )
}
