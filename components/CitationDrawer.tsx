"use client"
import React from 'react'
import { DemoAuthority } from '../types'

export function CitationDrawer({a, onClose}:{a:DemoAuthority; onClose:()=>void}){
  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-[#071025] border-l border-white/6 p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Source Evidence</h4>
        <button onClick={onClose} className="text-gray-400">Close</button>
      </div>

      <div className="mt-4 text-sm text-gray-300">
        <div><strong>Source:</strong> {a.title}</div>
        <div><strong>Type:</strong> {a.sourceType}</div>
        <div><strong>Jurisdiction:</strong> {a.jurisdiction}</div>
        <div><strong>Year:</strong> {a.year}</div>
        <div className="mt-3 bg-gray-900 p-3 rounded text-gray-300">{a.evidence}</div>
      </div>

      <div className="mt-6 text-xs text-gray-500">DEMO / SYNTHETIC SOURCE — For prototype only</div>
    </div>
  )
}
