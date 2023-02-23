interface Submission {
  id: number
  source_code: string
  problem: Pick<Problem, 'id' | 'title'>
  member: Pick<User, 'id' | 'nickname'>
  language: Pick<Language, 'id' | 'name'>
}
