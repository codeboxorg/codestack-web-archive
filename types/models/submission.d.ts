type SubmissionStatus = 'AC' | 'WA' | 'PE' | 'TLE' | 'MLE' | 'OLE' | 'RE' | 'CE'

interface Submission {
    id: number
    sourceCode: string
    maxCpuTime: number
    maxMemoryUsage: number
    problem: Pick<Problem, 'id' | 'name'>
    member: Pick<Member, 'id'>
    language: Pick<Language, 'id' | 'name'>
    status: SubmissionStatus
    testcases: any[]
}

type Submissions = Record<'submissions', Pagination<Submission>>
