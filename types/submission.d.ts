type SubmissionStatus = 'AC' | 'WA' | 'PE' | 'TLE' | 'MLE' | 'OLE' | 'RE'

interface Submission {
    id: number
    sourceCode: string
    cpuTime: number
    memoryUsage: number
    problem: Pick<Problem, 'id' | 'title'>
    member: Pick<User, 'nickname'>
    language: Pick<Language, 'id' | 'name'>
    statusCode: SubmissionStatus
}

type Submissions = Record<'submissions', Pagination<Submission>>
