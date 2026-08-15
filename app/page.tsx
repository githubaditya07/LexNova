import Link from 'next/link'
import React from 'react'

export default function Home(){
  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-2 md:px-4">
        <div className="hero-ornament grid-overlay rounded-[30px] border border-[#4A3B2C] bg-[#17130F]/80 p-6 md:p-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-[11px] uppercase tracking-[0.45em] text-[#C7A15A]">LEXNOVA</div>
            <h1 className="serif max-w-4xl text-5xl font-semibold text-[#F2E8D5] drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)] md:text-7xl">
              AI-DRIVEN LEGAL RESEARCH
              <span className="mt-2 block text-[#D9C8A7]">FOR COMMERCIAL COURTS</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-[#B9AA94] md:text-xl">
              From complex case files to structured, citation-backed legal research.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/workspace" className="rounded-md border border-[#B08A4A] bg-[#B08A4A] px-5 py-3 font-medium text-[#1a120d] shadow-[0_10px_25px_rgba(176,138,74,0.3)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#C7A15A]">Enter Research Workspace</Link>
              <Link href="/research" className="rounded-md border border-[#4A3B2C] bg-transparent px-5 py-3 font-medium text-[#F2E8D5] transition duration-200 hover:-translate-y-0.5 hover:border-[#B08A4A] hover:text-[#F9F2E7]">View Demo</Link>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-[#B9AA94]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C7A15A]"></span>
              AI assists legal research. It does not make judicial decisions.
            </div>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-4">
            {['CASE FILE', 'AI RESEARCH AGENT', 'LEGAL AUTHORITIES', 'RESEARCH BRIEF'].map((step, idx) => (
              <div key={step} className="feature-card glass rounded-xl p-4 text-center transition duration-200 hover:-translate-y-1">
                <div className="text-[10px] uppercase tracking-[0.26em] text-[#B9AA94]">{step}</div>
                {idx < 3 && <div className="mt-3 text-lg text-[#C7A15A]">↓</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            ['Intelligent Case Analysis', 'Extracts legal issues, facts and timelines from complex commercial disputes.'],
            ['Precedent Discovery', 'Surfaces relevant Supreme Court and commercial law authorities with transparent indexing.'],
            ['Citation-Backed Research', 'Builds structured, traceable findings for judicial review and professional briefing.']
          ].map(([title, text]) => (
            <div key={title} className="feature-card glass rounded-2xl p-6 transition duration-200 hover:-translate-y-1">
              <div className="mb-3 text-[10px] uppercase tracking-[0.28em] text-[#C7A15A]">Feature</div>
              <h3 className="serif text-3xl text-[#F2E8D5]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#B9AA94]">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-[#817463]">
          LexNova is a research facilitator, not a judicial decision-maker.
        </div>
      </div>
    </div>
  )
}
