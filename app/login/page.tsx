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
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="glass w-full max-w-md rounded-[22px] p-6 md:p-8">
        <div className="text-[10px] uppercase tracking-[0.38em] text-[#C7A15A]">LexNova</div>
        <h3 className="serif mt-3 text-4xl text-[#F2E8D5]">Sign in</h3>
        <p className="mt-2 text-sm text-[#B9AA94]">Use your email for a magic link or continue in demo mode.</p>

        <div className="mt-5">
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@domain.com" className="w-full rounded-lg border border-[#4A3B2C] bg-[#1D1712] p-3 text-[#F2E8D5] outline-none placeholder:text-[#817463]" />
        </div>

        <div className="mt-5 flex gap-2">
          <button onClick={signIn} className="rounded-md border border-[#B08A4A] bg-[#B08A4A] px-4 py-2.5 font-medium text-[#1a120d] disabled:opacity-70" disabled={loading}>{loading ? 'Sending...' : 'Send Sign-in Link'}</button>
          <button onClick={()=>router.push('/')} className="rounded-md border border-[#4A3B2C] bg-transparent px-4 py-2.5 text-[#F2E8D5]">Cancel</button>
        </div>

        <div className="mt-6 border-t border-[#4A3B2C] pt-4">
          <div className="text-[10px] uppercase tracking-[0.28em] text-[#B9AA94]">Presentation fallback</div>
          <button onClick={()=>{ localStorage.setItem('demo_user','demo@lexnova'); router.push('/workspace') }} className="mt-3 rounded-md border border-[#4A3B2C] bg-[#2B221B] px-3 py-2 text-[#F2E8D5]">Demo sign in</button>
        </div>

        {message && <div className="mt-4 rounded-lg border border-[#4A3B2C] bg-[#211A14] p-3 text-sm text-[#D9C8A7]">{message}</div>}
      </div>
    </div>
  )
}
