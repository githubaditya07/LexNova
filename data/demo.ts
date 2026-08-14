import type { DemoCase, DemoAuthority } from '../types'

const authorities: DemoAuthority[] = [
  {
    id: 'A',
    title: 'Authority A (DEMO)',
    court: 'Karnataka High Court',
    year: '2018',
    score: '92%',
    excerpt: 'Holds that premature termination may amount to breach when notice periods are contractual.',
    sourceType: 'Judgment',
    jurisdiction: 'Karnataka',
    evidence: 'Document: Demo Judgment — Page 12\nRetrieved passage: "Termination without notice where contract specified notice constitutes breach..."'
  },
  {
    id: 'B',
    title: 'Authority B (DEMO)',
    court: 'Delhi High Court',
    year: '2015',
    score: '86%',
    excerpt: 'Discusses remedies and calculation of contractual damages in supply agreements.',
    sourceType: 'Judgment',
    jurisdiction: 'Delhi',
    evidence: 'Document: Demo Judgment B — Page 5\nRetrieved passage: "Damages should aim to put the claimant in the position..."'
  },
  {
    id: 'C',
    title: 'Authority C (DEMO)',
    court: 'Bombay High Court',
    year: '2012',
    score: '78%',
    excerpt: 'Analyses applicability of dispute resolution clauses in commercial contracts.',
    sourceType: 'Judgment',
    jurisdiction: 'Maharashtra',
    evidence: 'Document: Demo Judgment C — Page 3\nRetrieved passage: "Arbitration clause interpretation depends on clear reference..."'
  }
]

export const demoCase: DemoCase = {
  id: 'demo-1',
  title: 'ABC Technologies Pvt. Ltd. vs XYZ Manufacturing Ltd.',
  jurisdiction: 'Karnataka Commercial Court',
  caseType: 'Commercial Contract Dispute',
  summary: 'The plaintiff alleges that the defendant prematurely terminated a commercial supply agreement and seeks damages for the alleged breach.',
  issues: [
    'Whether the termination constituted breach of contract',
    'Whether contractual damages may be claimed',
    'Whether the relevant dispute resolution clause applies',
    'What legal principles govern the dispute'
  ],
  authorities
}

export const demoBrief = {
  caseOverview: 'Prototype brief: summary of issues and suggested authorities based on demo corpus.',
  authorities
}

export const demoResearchResponses: Record<string, {text:string; sources:string[]}> = {
  'which authority is most relevant to the termination issue?': {
    text: 'Based on the indexed demonstration corpus, Authority A is the strongest match because its factual pattern and contractual termination issue most closely resemble the current case.',
    sources: ['Authority A', 'Authority B']
  },
  'default': {
    text: 'This is a deterministic demo response. Try asking about the most relevant authority or statutory provisions.',
    sources: []
  }
}
