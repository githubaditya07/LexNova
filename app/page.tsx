import Link from 'next/link'
import React from 'react'

const featureTiles = [
  { title: 'Intelligent\nCase Analysis', icon: '📄' },
  { title: 'Precedent\nDiscovery', icon: '⚖️' },
  { title: 'Statutory\nInsights', icon: '📚' },
  { title: 'Citation\nIntegrity', icon: '🛡️' }
]

export default function Home(){
  return (
    <div className="law-shell min-h-screen py-8 md:py-10">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="hero-stage w-full overflow-hidden rounded-[28px] border border-[#5a432d] p-6 md:p-10">
          <div className="hero-grid grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="left-panel relative z-10">
              <div className="brand-row flex items-center gap-4">
                <div className="brand-mark" aria-hidden="true" />
                <div>
                  <div className="serif text-5xl tracking-[0.12em] text-[#F4E7C8] md:text-[3.2rem]">LEXNOVA</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.32em] text-[#C9AF73]">Legal intelligence, amplified</div>
                </div>
              </div>

              <div className="mt-10 max-w-[760px]">
                <h1 className="serif text-[3.2rem] leading-[0.9] tracking-[-0.04em] text-[#F3E7D1] md:text-[6.1rem]">
                  AI-DRIVEN
                  <span className="mt-2 block text-[#F3E7D1]">LEGAL RESEARCH</span>
                </h1>
                <div className="mt-5 border-t border-[#8f6d3a]/60 pt-5 text-[1.9rem] uppercase tracking-[0.08em] text-[#D9BB7E] md:text-[2.4rem]">
                  FOR COMMERCIAL COURTS
                </div>
              </div>

              <div className="mt-8 max-w-[620px] text-xl leading-relaxed text-[#E5D3A2] md:text-[2rem]">
                Transform complex case files into structured, citation-backed legal research.
              </div>

              <div className="mt-8 flex flex-wrap gap-4 md:gap-6">
                {featureTiles.map((feature) => (
                  <div key={feature.title} className="feature-tile flex min-w-[120px] flex-col items-center gap-3 rounded-xl border border-[#6f5637] bg-[#1b1713]/40 p-4 text-center text-[#F2E8D5] backdrop-blur-sm">
                    <div className="text-3xl leading-none" aria-hidden="true">{feature.icon}</div>
                    <div className="text-[0.8rem] uppercase tracking-[0.12em] leading-relaxed whitespace-pre-line text-[#E6D3A1]">
                      {feature.title}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4 md:gap-5">
                <Link href="/workspace" className="cta-primary inline-flex items-center justify-center rounded-xl border border-[#C49C5E] bg-[#C49C5E] px-7 py-4 text-base font-semibold uppercase tracking-[0.12em] text-[#1b140e] shadow-[0_12px_26px_rgba(196,156,94,0.35)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#D7B575]">
                  Enter Research Workspace
                  <span className="ml-3 text-xl">→</span>
                </Link>
                <Link href="/research" className="cta-secondary inline-flex items-center justify-center rounded-xl border border-[#B08A4A] bg-transparent px-7 py-4 text-base font-semibold uppercase tracking-[0.12em] text-[#F2E8D5] transition duration-200 hover:-translate-y-0.5 hover:border-[#D7B575] hover:text-[#F9EBC7]">
                  View Demo
                  <span className="ml-3 text-xl">›</span>
                </Link>
              </div>
            </div>

            <div className="right-panel relative z-10 flex min-h-[620px] items-end justify-center pb-4">
              <div className="visual-stage relative h-[560px] w-full max-w-[520px]">
                <div className="court-arch" aria-hidden="true" />
                <div className="data-orbit" aria-hidden="true">
                  <span className="node node-1">Judgments</span>
                  <span className="node node-2">Acts</span>
                  <span className="node node-3">Sections</span>
                  <span className="node node-4">Precedents</span>
                </div>

                <div className="search-pill">
                  <span className="search-placeholder">Search Acts, Judgments, Sections...</span>
                  <span className="search-icon" aria-hidden="true">⌕</span>
                </div>

                <div className="book-stack" aria-hidden="true">
                  <div className="book book-1"><span>CONSTITUTION<br/>OF INDIA</span></div>
                  <div className="book book-2"><span>COMMERCIAL<br/>COURTS ACT, 2015</span></div>
                  <div className="book book-3"><span>CONTRACT ACT, 1872</span></div>
                  <div className="book book-4"><span>ARBITRATION AND<br/>CONCILIATION ACT, 1996</span></div>
                </div>

                <div className="scale" aria-hidden="true">
                  <div className="scale-beam" />
                  <div className="scale-arm left" />
                  <div className="scale-arm right" />
                  <div className="scale-pan left-pan" />
                  <div className="scale-pan right-pan" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
