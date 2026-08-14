import type { DemoCase, DemoAuthority } from '../types'

const authorities: DemoAuthority[] = [
  {
    id: 'A',
    title: 'Authority A (DEMO / SYNTHETIC SOURCE)',
    court: 'Karnataka High Court',
    year: '2018',
    score: '92%',
    excerpt: 'Holds that premature termination may amount to breach when notice periods are contractual.',
    sourceType: 'Judgment',
    jurisdiction: 'Karnataka',
    evidence: 'Document: Demo Judgment A — Page 12\nRetrieved passage: "Termination without notice where contract specified notice constitutes breach..."\nResearch conclusion: likely relevant to the termination issue.'
  },
  {
    id: 'B',
    title: 'Authority B (DEMO / SYNTHETIC SOURCE)',
    court: 'Delhi High Court',
    year: '2015',
    score: '86%',
    excerpt: 'Discusses remedies and calculation of contractual damages in supply agreements.',
    sourceType: 'Judgment',
    jurisdiction: 'Delhi',
    evidence: 'Document: Demo Judgment B — Page 5\nRetrieved passage: "Damages should aim to put the claimant in the position..."\nResearch conclusion: useful for damages assessment.'
  },
  {
    id: 'C',
    title: 'Authority C (DEMO / SYNTHETIC SOURCE)',
    court: 'Bombay High Court',
    year: '2012',
    score: '78%',
    excerpt: 'Analyses applicability of dispute resolution clauses in commercial contracts.',
    sourceType: 'Judgment',
    jurisdiction: 'Maharashtra',
    evidence: 'Document: Demo Judgment C — Page 3\nRetrieved passage: "Arbitration clause interpretation depends on clear reference..."\nResearch conclusion: relevant to forum and clause enforcement.'
  },
  {
    id: 'D',
    title: 'Authority D (DEMO / SYNTHETIC SOURCE)',
    court: 'Supreme Court (Demo corpus)',
    year: '2020',
    score: '74%',
    excerpt: 'On balancing commercial certainty with contractual interpretation principles.',
    sourceType: 'Judgment',
    jurisdiction: 'India',
    evidence: 'Document: Demo Judgment D — Page 18\nRetrieved passage: "Commercial contracts must be read in light of the parties’ bargain and objective intent."\nResearch conclusion: supports interpretive frame.'
  }
]

export const demoStatutes = [
  {
    id: 's1',
    title: 'Indian Contract Act, 1872',
    section: 'Sections 73 and 74',
    description: 'Damages and penalties in contract claims.'
  },
  {
    id: 's2',
    title: 'Arbitration and Conciliation Act, 1996',
    section: 'Section 11 and Section 34',
    description: 'Arbitration clause validity and challenge framework.'
  },
  {
    id: 's3',
    title: 'Commercial Courts Act, 2015',
    section: 'Section 12A',
    description: 'Pre-institution mediation and jurisdictional procedural context.'
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
  'show only supreme court authorities.': {
    text: 'Within the demonstration corpus, the Supreme Court-type authority is ranked as a secondary but useful interpretive authority, while the Karnataka and Delhi judgments are more factually relevant.',
    sources: ['Authority D', 'Authority A']
  },
  'summarize the strongest authority.': {
    text: 'Authority A is the strongest authority because it most closely aligns with a premature termination and notice issue in a commercial contract setting.',
    sources: ['Authority A']
  },
  'what statutory provisions should i examine?': {
    text: 'The most relevant demonstration provisions are the Indian Contract Act, 1872 provisions on damages and the Arbitration and Conciliation Act, 1996 provisions governing contract enforcement and arbitral process.',
    sources: ['Indian Contract Act, 1872', 'Arbitration and Conciliation Act, 1996']
  },
  'explain this in simpler language.': {
    text: 'The dispute is about whether the supplier was entitled to end the agreement early and whether the other side can claim monetary compensation for that alleged breach.',
    sources: ['Authority A', 'Indian Contract Act, 1872']
  },
  'default': {
    text: 'This is a deterministic demo response. Try asking about the most relevant authority or statutory provisions.',
    sources: []
  }
}
