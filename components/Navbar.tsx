import Link from 'next/link'
import React from 'react'

export function Navbar(){
  return (
    <header className="w-full border-b border-[#4A3B2C] bg-[#1b1713]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="serif text-3xl font-semibold tracking-[0.12em] text-[#F2E8D5]">LEXNOVA</Link>
          <nav className="hidden items-center gap-6 text-sm text-[#D7C5A6] md:flex">
            <Link href="/workspace" className="border-l border-[#4A3B2C] pl-4 transition hover:text-[#F2E8D5]">Research Workspace</Link>
            <Link href="/research" className="transition hover:text-[#F2E8D5]">Research</Link>
            <Link href="/brief" className="transition hover:text-[#F2E8D5]">Brief</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <Link href="/login" className="border border-[#4A3B2C] bg-[#2B221B] px-3 py-2 text-[#F2E8D5] transition hover:border-[#B08A4A]">Sign in</Link>
          <span className="border-l border-[#4A3B2C] pl-4 text-[#B9AA94]">Demo Mode</span>
        </div>
      </div>
    </header>
  )
}
