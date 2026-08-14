"use client"
import React, {useState} from 'react'
import { demoResearchResponses } from '../data/demo'

export function ResearchChat(){
  const [messages, setMessages] = useState<Array<{role:string; text:string; sources?:string[]}>>([
    {role:'assistant', text:'Research grounded in indexed legal authorities. Ask a follow-up question.', sources:[]}
  ])
  const [input, setInput] = useState('')
  const [thinking, setThinking] = useState(false)

  function send(){
    if(!input) return;
    const user = {role:'user', text:input}
    setMessages(ms=>[...ms, user])
    setInput('')
    setThinking(true)
    setTimeout(()=>{
      const resp = demoResearchResponses[input.toLowerCase()] || demoResearchResponses['default']
      setMessages(ms=>[...ms, {role:'assistant', text:resp.text, sources:resp.sources}])
      setThinking(false)
    }, 900)
  }

  return (
    <div className="glass rounded-2xl p-4">
      <div className="border-b border-[#4A3B2C] pb-3">
        <div className="text-[10px] uppercase tracking-[0.32em] text-[#C7A15A]">LexNova Research Agent</div>
        <div className="mt-1 text-sm text-[#B9AA94]">Research grounded in indexed legal authorities.</div>
      </div>

      <div className="mt-4 max-h-[430px] space-y-3 overflow-auto pr-1">
        {messages.map((m,idx)=> (
          <div key={idx} className={m.role==='user' ? 'text-right' : 'text-left'}>
            <div className={`inline-block max-w-full rounded-xl px-3 py-2 text-sm leading-6 ${m.role==='user' ? 'bg-[#2B221B] text-[#F2E8D5]' : 'bg-[#3A3128] text-[#F2E8D5]'}`}>
              {m.text}
            </div>
            {m.sources && m.sources.length > 0 && (
              <div className="mt-2 flex flex-wrap justify-start gap-2">
                {m.sources.map(s => <span key={s} className="legal-chip rounded-full px-2 py-1 text-[9px] uppercase tracking-[0.16em]">{s}</span>)}
              </div>
            )}
          </div>
        ))}
        {thinking && <div className="text-sm text-[#B9AA94]">Reviewing indexed authorities…</div>}
      </div>

      <div className="mt-4 flex gap-2">
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask about termination, damages, or authorities" className="flex-1 rounded-lg border border-[#4A3B2C] bg-[#1D1712] px-3 py-2 text-sm text-[#F2E8D5] outline-none placeholder:text-[#817463]" />
        <button onClick={send} className="rounded-lg border border-[#B08A4A] bg-[#B08A4A] px-3 py-2 text-sm font-medium text-[#1a120d]">Ask</button>
      </div>
    </div>
  )
}
