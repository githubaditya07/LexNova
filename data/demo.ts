import type { DemoCase, DemoAuthority } from '../types'

const authorities: DemoAuthority[] = [
  {
    id: 'A',
    title: 'M/s Deep Industries Ltd. v. Oil and Natural Gas Corporation Ltd.',
    court: 'Supreme Court of India',
    year: '2019',
    score: '92%',
    excerpt: 'Commercial contract termination and arbitration metadata from the demo corpus; source metadata available — full-text evidence not indexed in this prototype.',
    sourceType: 'Judgment',
    jurisdiction: 'India',
    evidence: 'Citation: 2019 INSC 1299\nCourt: Supreme Court of India\nDate: 28 November 2019\nSource metadata available — full-text evidence not indexed in this prototype.'
  },
  {
    id: 'B',
    title: 'ONGC Ltd. v. Saw Pipes Ltd.',
    court: 'Supreme Court of India',
    year: '2003',
    score: '88%',
    excerpt: 'Commercial contract, liquidated damages and arbitration metadata from the demo corpus; source metadata available — full-text evidence not indexed in this prototype.',
    sourceType: 'Judgment',
    jurisdiction: 'India',
    evidence: 'Citation: (2003) 5 SCC 705\nCourt: Supreme Court of India\nDate: 2003\nSource metadata available — full-text evidence not indexed in this prototype.'
  },
  {
    id: 'C',
    title: 'Kailash Nath Associates v. Delhi Development Authority',
    court: 'Supreme Court of India',
    year: '2015',
    score: '85%',
    excerpt: 'Contract breach, forfeiture and liquidated damages metadata from the demo corpus; source metadata available — full-text evidence not indexed in this prototype.',
    sourceType: 'Judgment',
    jurisdiction: 'India',
    evidence: 'Citation: (2015) 4 SCC 136\nCourt: Supreme Court of India\nDate: 9 January 2015\nSource metadata available — full-text evidence not indexed in this prototype.'
  },
  {
    id: 'D',
    title: 'M/s J.G. Engineers Pvt. Ltd. v. Union of India',
    court: 'Supreme Court of India',
    year: '2011',
    score: '79%',
    excerpt: 'Works contract, termination and arbitration metadata from the demo corpus; source metadata available — full-text evidence not indexed in this prototype.',
    sourceType: 'Judgment',
    jurisdiction: 'India',
    evidence: 'Court: Supreme Court of India\nDate: 28 April 2011\nSource metadata available — full-text evidence not indexed in this prototype.'
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
  title: 'M/s Deep Industries Ltd. v. Oil and Natural Gas Corporation Ltd.',
  jurisdiction: 'Supreme Court of India',
  caseType: 'Commercial Contract Dispute',
  summary: 'The dispute concerns contract termination, alleged breach of commercial obligations and the interplay between contractual damages and arbitration proceedings.',
  issues: [
    'Contract termination',
    'Breach of contractual obligations',
    'Damages / compensation',
    'Arbitration and dispute resolution'
  ],
  authorities
}

export const demoBrief = {
  caseOverview: 'This prototype brief summarizes the main legal issues and the relevant indexed legal authorities for a commercial contract termination dispute.',
  authorities
}

export const demoResearchResponses: Record<string, {text:string; sources:string[]}> = {
  'which authority is most relevant to the termination issue?': {
    text: 'Based on the indexed demo corpus, M/s Deep Industries Ltd. v. Oil and Natural Gas Corporation Ltd. is the strongest match because it directly concerns commercial contract termination and dispute resolution.',
    sources: ['M/s Deep Industries Ltd. v. ONGC Ltd.', 'ONGC Ltd. v. Saw Pipes Ltd.']
  },
  'show only supreme court authorities.': {
    text: 'The Supreme Court authorities in the demo corpus are the most relevant starting points for the issue, especially Deep Industries and ONGC v. Saw Pipes.',
    sources: ['M/s Deep Industries Ltd. v. ONGC Ltd.', 'ONGC Ltd. v. Saw Pipes Ltd.']
  },
  'summarize the strongest authority.': {
    text: 'The strongest authority in the indexed demo corpus is Deep Industries because it is a commercially sensitive termination and arbitration dispute and is closely aligned with the present research question.',
    sources: ['M/s Deep Industries Ltd. v. ONGC Ltd.']
  },
  'what statutory provisions should i examine?': {
    text: 'The most relevant provisions in the demo corpus are the Indian Contract Act, 1872 provisions on damages and the Arbitration and Conciliation Act, 1996 provisions on arbitration enforcement and jurisdictional issues.',
    sources: ['Indian Contract Act, 1872', 'Arbitration and Conciliation Act, 1996']
  },
  'explain this in simpler language.': {
    text: 'This dispute is about whether a commercial agreement was validly terminated and whether the other side may claim compensation, while also considering the arbitration clause.',
    sources: ['M/s Deep Industries Ltd. v. ONGC Ltd.', 'Indian Contract Act, 1872']
  },
  'default': {
    text: 'This is a deterministic demo response. Ask about a specific authority, a statutory provision, or the commercial termination issue.',
    sources: []
  }
}
