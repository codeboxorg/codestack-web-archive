interface Problem {
  id: number
  title: string
  context: string
  max_cpu_time: number
  max_memory: number
  submission: number
  accepted: number
  language: Language[]
}

type SubmitRes = {
  id: number
  language_id: number
  member_id: number
  problem_id: number
  source_code: string
  updated_at: string
  created_at: string
}
