import React from 'react'
import Link from 'next/link'
import { StatCard } from '../../components/StatCard'

export default function Workspace(){
  return (
    <div className="min-h-screen">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm uppercase tracking-[0.35em] text-sky-300/80">LexNova</div>
          <h2 className="mt-2 text-3xl font-semibold text-white">Good morning</h2>
          <p className="mt-1 text-gray-400">Continue your legal research</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/research" className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white">Open Demo Case</Link>
          <button className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-slate-200">Start New Research</button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <StatCard title="Demo Corpus" value="5" note="DEMO / PROTOTYPE" />
        <StatCard title="Research Sessions" value="12" note="DEMO / PROTOTYPE" />
        <StatCard title="Authorities Found" value="34" note="DEMO / PROTOTYPE" />
        <StatCard title="Saved Cases" value="3" note="DEMO / PROTOTYPE" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="glass rounded-2xl p-6">
          <div className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-400">Recent activity</div>
          <div className="space-y-4">
            {[
              ['ABC Technologies Pvt. Ltd. vs XYZ Manufacturing Ltd.', 'Commercial contract dispute • Karnataka'],
              ['Demo research brief', 'Prepared 2 hours ago • 3 authorities'],
              ['Termination analysis', 'Updated 1 day ago • research draft']
            ].map(([title, subtitle]) => (
              <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="font-medium text-white">{title}</div>
                <div className="mt-1 text-sm text-slate-400">{subtitle}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <div className="text-sm uppercase tracking-[0.3em] text-slate-400">Workspace</div>
          <ul className="mt-4 space-y-3 text-slate-200">
            <li>Research Workspace</li>
            <li>Cases</li>
            <li>Research History</li>
            <li>Documents</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
