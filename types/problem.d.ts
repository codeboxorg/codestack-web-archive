interface Problem {
  id: number
  title: string
  context: string
  max_cpu_time: number
  max_memory: number
  language: Pick<Language, 'id' | 'name'>[]
}
