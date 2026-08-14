"use client"
import React, {useState, useEffect} from 'react'
import { supabase } from '../../lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function LoginPage(){
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const router = useRouter()

  useEffect(()=>{
    if(!supabase) return
    const { data } = supabase.auth.onAuthStateChange((event, session)=>{
      if(session?.user) router.push('/workspace')
    })
    return ()=>{ data.subscription?.unsubscribe() }
  }, [router])

  async function signIn(){
    if(!supabase){ setMessage('Supabase client not available. Set NEXT_PUBLIC_SUPABASE_* env vars.'); return }
    setLoading(true)
    setMessage(null)
    const { error } = await supabase.auth.signInWithOtp({ email })
    if(error) setMessage(error.message)
    else setMessage('Check your email for a sign-in link (demo).')
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="glass p-6 rounded w-full max-w-md">
        <h3 className="text-lg font-semibold">Sign in to LexNova (Demo)</h3>
        <p className="text-sm text-gray-400 mt-1">Use your email to receive a magic link. This demo uses Supabase Auth.</p>

        <div className="mt-4">
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@domain.com" className="w-full p-3 rounded bg-black/20" />
        </div>

        <div className="mt-4 flex gap-2">
          <button onClick={signIn} className="px-4 py-2 bg-lexnova-500 rounded" disabled={loading}>{loading? 'Sending...' : 'Send Sign-in Link'}</button>
          <button onClick={()=>router.push('/')} className="px-4 py-2 border rounded">Cancel</button>
        </div>

        <div className="mt-4 border-t pt-4">
          <div className="text-sm text-gray-400">Presentation fallback</div>
          <button onClick={()=>{ localStorage.setItem('demo_user','demo@lexnova'); router.push('/workspace') }} className="mt-2 px-3 py-2 bg-white/5 rounded">Demo sign in</button>
        </div>

        {message && <div className="mt-3 text-sm text-gray-300">{message}</div>}
      </div>
    </div>
  )
}
