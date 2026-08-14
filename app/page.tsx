import Link from 'next/link'
import React from 'react'

export default function Home(){
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid-overlay rounded-3xl border border-white/10 bg-[#0a1420]/80 p-8 md:p-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-xs uppercase tracking-[0.45em] text-sky-300/80">LEXNOVA</div>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              AI-Driven Legal Research
              <span className="mt-2 block text-slate-300">for Commercial Courts</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-slate-300 md:text-xl">
              Transform complex case files into structured, citation-backed legal research.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/workspace" className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white shadow-lg shadow-blue-900/30 transition hover:bg-blue-500">Enter Research Workspace</Link>
              <Link href="/research" className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-slate-200 transition hover:border-sky-400/40 hover:bg-slate-900">View Demo</Link>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              AI assists legal research. It does not make judicial decisions.
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {['CASE FILE', 'AI RESEARCH AGENT', 'LEGAL AUTHORITIES', 'RESEARCH BRIEF'].map((step, idx) => (
              <div key={step} className="glass rounded-xl p-4 text-center">
                <div className="text-xs uppercase tracking-[0.3em] text-slate-400">{step}</div>
                {idx < 3 && <div className="mt-3 text-lg text-sky-300">↓</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            ['Intelligent Case Analysis', 'Extracts legal issues, facts, and timelines from complex commercial disputes.'],
            ['Precedent Discovery', 'Surfaces relevant authorities with relevance scoring and justification.'],
            ['Citation-Backed Research', 'Generates transparent, traceable research grounded in indexed demonstration sources.']
          ].map(([title, text]) => (
            <div key={title} className="glass rounded-2xl p-6">
              <div className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-sky-300">Feature</div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-slate-400">
          LexNova is a research facilitator, not a judicial decision-maker.
        </div>
      </div>
    </div>
  )
}
