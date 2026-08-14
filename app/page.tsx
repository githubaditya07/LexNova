import Link from 'next/link'
import React from 'react'

export default function Home(){
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-semibold">LEXNOVA</h1>
        <p className="mt-4 text-xl text-gray-300">AI-Driven Legal Research for Commercial Courts</p>
        <p className="mt-3 text-gray-400">Transform complex case files into structured, citation-backed legal research.</p>
        <div className="mt-6 flex gap-4 justify-center">
          <Link href="/workspace" className="px-5 py-3 bg-lexnova-500 rounded text-white">Enter Research Workspace</Link>
          <Link href="/research" className="px-4 py-3 border border-white/10 rounded text-gray-200">View Demo</Link>
        </div>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-3 gap-4">
        <div className="glass p-6 rounded">
          <h3 className="font-semibold">Intelligent Case Analysis</h3>
          <p className="text-sm text-gray-400 mt-2">Extracts legal issues, facts and timelines from case documents.</p>
        </div>
        <div className="glass p-6 rounded">
          <h3 className="font-semibold">Precedent Discovery</h3>
          <p className="text-sm text-gray-400 mt-2">Finds relevant authorities with contextual relevance scoring.</p>
        </div>
        <div className="glass p-6 rounded">
          <h3 className="font-semibold">Citation-Backed Research</h3>
          <p className="text-sm text-gray-400 mt-2">Produces transparent research briefs with source traceability.</p>
        </div>
      </div>

      <p className="text-sm text-gray-500 max-w-2xl text-center">LexNova is a research facilitator, not a judicial decision-maker.</p>
    </div>
  )
}
