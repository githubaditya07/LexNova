"use client"
import React, {useState} from 'react'
import { demoResearchResponses } from '../data/demo'

export function ResearchChat(){
  const [messages, setMessages] = useState<Array<{role:string; text:string; sources?:string[]}>>([
    {role:'assistant', text:'This is a deterministic demo assistant. Ask follow-up questions.', sources:[]}
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
    <div className="glass p-4 rounded">
      <h4 className="font-semibold">LexNova Research Agent</h4>
      <p className="text-sm text-gray-400">Ask follow-up questions about this research.</p>

      <div className="mt-3 space-y-3 max-h-64 overflow-auto">
        {messages.map((m,idx)=> (
          <div key={idx} className={m.role==='user'? 'text-right':'text-left'}>
            <div className={`inline-block p-2 rounded ${m.role==='user'? 'bg-lexnova-500 text-white':'bg-white/3 text-gray-200'}`}>{m.text}</div>
            {m.sources && m.sources.length>0 && <div className="text-xs text-gray-400 mt-1">{m.sources.map(s=> <span key={s} className="mr-2 px-2 py-0.5 bg-black/30 rounded">{s}</span>)}</div>}
          </div>
        ))}
        {thinking && <div className="text-sm text-gray-400">LexNova is researching…</div>}
      </div>

      <div className="mt-3 flex gap-2">
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask the agent (try: 'Which authority is most relevant to the termination issue?')" className="flex-1 px-3 py-2 rounded bg-black/20" />
        <button onClick={send} className="px-3 py-2 bg-lexnova-500 rounded">Ask</button>
      </div>
    </div>
  )
}
