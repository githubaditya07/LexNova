import React from 'react'
import Link from 'next/link'
import { StatCard } from '../../components/StatCard'

export default function Workspace(){
  return (
    <div className="min-h-screen">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-[0.38em] text-[#C7A15A]">LexNova</div>
          <h2 className="serif mt-2 text-4xl text-[#F2E8D5]">Legal Research Workspace</h2>
          <p className="mt-2 text-sm text-[#B9AA94]">Structured intelligence for commercial dispute research.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/research" className="rounded-md border border-[#B08A4A] bg-[#B08A4A] px-5 py-3 font-medium text-[#1a120d]">Open Demo Case</Link>
          <button className="rounded-md border border-[#4A3B2C] bg-[#2B221B] px-5 py-3 font-medium text-[#F2E8D5]">Start New Research</button>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-4">
        <StatCard title="Indexed Authorities" value="5" note="DEMO CORPUS" />
        <StatCard title="Research Sessions" value="12" note="DEMO / PROTOTYPE" />
        <StatCard title="Authorities Discovered" value="34" note="DEMO / PROTOTYPE" />
        <StatCard title="Saved Cases" value="3" note="DEMO / PROTOTYPE" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="glass rounded-2xl p-6">
          <div className="mb-4 text-[10px] uppercase tracking-[0.32em] text-[#B9AA94]">Recent Activity</div>
          <div className="space-y-4">
            {[
              ['M/s Deep Industries Ltd. v. ONGC Ltd.', 'Commercial contract dispute • Supreme Court metadata'],
              ['Research brief draft', 'Prepared 2 hours ago • 4 authorities'],
              ['Termination analysis', 'Updated 1 day ago • research notes']
            ].map(([title, subtitle]) => (
              <div key={title} className="rounded-xl border border-[#4A3B2C] bg-[#211A14] p-4">
                <div className="font-medium text-[#F2E8D5]">{title}</div>
                <div className="mt-1 text-sm text-[#B9AA94]">{subtitle}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <div className="text-[10px] uppercase tracking-[0.32em] text-[#B9AA94]">Workspace</div>
          <ul className="mt-4 space-y-3 text-[#F2E8D5]">
            <li className="border-b border-[#4A3B2C] pb-2">Research Workspace</li>
            <li className="border-b border-[#4A3B2C] pb-2">Cases</li>
            <li className="border-b border-[#4A3B2C] pb-2">Research History</li>
            <li className="border-b border-[#4A3B2C] pb-2">Documents</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
