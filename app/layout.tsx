import '../styles/globals.css'
import React from 'react'
import { Navbar } from '../components/Navbar'

export const metadata = {
  title: 'LexNova — AI Legal Research',
  description: 'AI-driven legal research for commercial courts.'
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <Navbar />
          <main className="mx-auto max-w-7xl px-4 py-6 md:px-6 lg:px-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
