import '../styles/globals.css'
import React from 'react'
import { Navbar } from '../components/Navbar'

export const metadata = {
  title: 'LexNova — AI Legal Research',
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-8 max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  )
}
