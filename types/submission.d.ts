type SubmissionStatus = 'AC' | 'WA' | 'PE' | 'TLE' | 'MLE' | 'OLE' | 'RE'

interface Submission {
  id: number
  source_code: string
  cpu_time: number
  memory_usage: number
  problem: Pick<Problem, 'id' | 'title'>
  member: Pick<User, 'id' | 'nickname'>
  language: Pick<Language, 'id' | 'name'>
  status_code: SubmissionStatus
}
