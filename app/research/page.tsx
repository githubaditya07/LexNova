"use client"
import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { demoCase, demoStatutes } from '../../data/demo'
import { CaseCard } from '../../components/CaseCard'
import { ResearchProgress } from '../../components/ResearchProgress'
import { AuthorityCard } from '../../components/AuthorityCard'
import { ResearchChat } from '../../components/ResearchChat'
import { ResearchBrief } from '../../components/ResearchBrief'

export default function Research(){
  const [running, setRunning] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const activeCase = useMemo(() => {
    if (!uploadedFile) return demoCase

    return {
      ...demoCase,
      title: uploadedFile.name.replace(/\.pdf$/i, '') || demoCase.title,
    }
  }, [uploadedFile])

  const handleFile = (file: File | null) => {
    if (!file) return
    const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')
    if (!isPdf) {
      setUploadedFile(null)
      return
    }
    setUploadedFile(file)
  }

  return (
    <div className="min-h-screen flex flex-col gap-6 xl:flex-row">
      <div className="flex-1">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="glass mb-6 rounded-2xl p-4 md:p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-[#C7A15A]">Case File</div>
              <h3 className="serif mt-2 text-3xl text-[#F2E8D5]">Upload document</h3>
            </div>
            <div className="legal-chip rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em]">Demo upload only</div>
          </div>

          <label
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => {
              e.preventDefault()
              setIsDragging(false)
              handleFile(e.dataTransfer.files?.[0] ?? null)
            }}
            className={`mt-4 flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed p-6 text-center transition ${
              isDragging ? 'border-[#C7A15A] bg-[#2B221B]' : 'border-[#4A3B2C] bg-[#1D1712] hover:border-[#B08A4A]'
            }`}
          >
            <input
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
            />
            <div className="text-lg font-medium text-[#F2E8D5]">Drag a PDF here or browse</div>
            <div className="mt-2 text-sm text-[#B9AA94]">This is a front-end prototype demo: the file is accepted visually and stored in the UI state only.</div>
          </label>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[#D9C8A7]">
            {uploadedFile ? (
              <>
                <span className="rounded-full border border-[#B08A4A] bg-[#2B221B] px-3 py-1">{uploadedFile.name}</span>
                <span className="text-[#B9AA94]">PDF accepted</span>
              </>
            ) : (
              <span className="text-[#B9AA94]">No PDF selected yet</span>
            )}
          </div>
        </motion.div>

        <div className="mb-6">
          <CaseCard c={activeCase} />
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={() => {
                setRunning(true)
                setTimeout(() => {
                  setRunning(false)
                  setShowResults(true)
                }, 2200)
              }}
              className="rounded-md border border-[#B08A4A] bg-[#B08A4A] px-5 py-3 font-medium text-[#1a120d] transition hover:bg-[#C7A15A]"
            >
              Start AI Research
            </button>
            <button className="rounded-md border border-[#4A3B2C] bg-[#2B221B] px-5 py-3 font-medium text-[#F2E8D5] transition hover:border-[#B08A4A]">
              Quick fact extract
            </button>
          </div>
        </div>

        {running && <ResearchProgress />}

        {showResults && (
          <section className="mt-6 space-y-6">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="grid gap-3 md:grid-cols-3">
              {[
                ['Research confidence', '92%'],
                ['Authorities found', '4'],
                ['Issue match score', '87%']
              ].map(([label, value]) => (
                <div key={label} className="glass rounded-2xl p-4">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-[#B9AA94]">{label}</div>
                  <div className="mt-2 text-3xl font-semibold text-[#F2E8D5]">{value}</div>
                </div>
              ))}
            </motion.div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-[#C7A15A]">Research Query</div>
              <h3 className="serif mt-2 text-4xl text-[#F2E8D5]">Termination of commercial contracts and damages</h3>
            </div>

            <div>
              <div className="mb-3 text-[10px] uppercase tracking-[0.32em] text-[#B9AA94]">Legal Issues Identified</div>
              <div className="grid gap-3 md:grid-cols-2">
                {activeCase.issues.map((issue, idx) => (
                  <motion.div key={issue} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.06 }} className="glass rounded-2xl p-4 transition hover:-translate-y-1 hover:border-[#B08A4A]">
                    <div className="text-[10px] uppercase tracking-[0.26em] text-[#C7A15A]">0{idx + 1}</div>
                    <div className="mt-2 text-lg text-[#F2E8D5]">{issue}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-3 text-[10px] uppercase tracking-[0.32em] text-[#B9AA94]">Applicable Statutory Provisions</div>
              <div className="grid gap-3 md:grid-cols-3">
                {demoStatutes.map((s, idx) => (
                  <motion.div key={s.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} className="glass rounded-2xl p-4 transition hover:-translate-y-1 hover:border-[#B08A4A]">
                    <div className="text-lg font-semibold text-[#F2E8D5]">{s.title}</div>
                    <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#C7A15A]">{s.section}</div>
                    <div className="mt-2 text-sm text-[#D9C8A7]">{s.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-3 text-[10px] uppercase tracking-[0.32em] text-[#B9AA94]">Top Authorities</div>
              <div className="grid gap-3 md:grid-cols-2">
                {activeCase.authorities.map((a) => <AuthorityCard key={a.id} a={a} />)}
              </div>
            </div>

            <ResearchBrief />
          </section>
        )}
      </div>

      <aside className="w-full xl:w-[380px]">
        <ResearchChat />
      </aside>
    </div>
  )
}
