interface Submission {
  id: number
  source_code: string
  problem: Pick<Problem, 'id' | 'title'>
  user: Pick<User, 'id' | 'nickname'>
  language: Pick<Language, 'id' | 'name'>
}
