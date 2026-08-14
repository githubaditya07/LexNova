export type DemoAuthority = {
  id: string
  title: string
  court: string
  year: string
  score: string
  excerpt: string
  sourceType: string
  jurisdiction: string
  evidence: string
}

export type DemoCase = {
  id: string
  title: string
  jurisdiction: string
  caseType: string
  summary: string
  issues: string[]
  authorities: DemoAuthority[]
}
