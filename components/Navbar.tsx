import Link from 'next/link'
import React from 'react'

export function Navbar(){
  return (
    <header className="w-full py-4 px-6 border-b border-white/6 glass">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-lg font-semibold">LEXNOVA</Link>
          <nav className="hidden md:flex gap-3 text-sm text-gray-300">
            <Link href="/workspace">Research Workspace</Link>
            <Link href="/research">Research</Link>
            <Link href="/brief">Brief</Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <nav className="hidden sm:flex gap-3 text-sm">
            <Link href="/login" className="text-gray-300">Sign in</Link>
          </nav>
          <span className="text-sm text-gray-400">Demo Mode</span>
        </div>
      </div>
    </header>
  )
}
