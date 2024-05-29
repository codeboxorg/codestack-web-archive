interface Problem {
    id: number
    name: string
    description: {
        title: string
        content: string
    }[]
    maxCpuTime: number
    maxMemory: number
    submission: number
    accepted: number
    languages: Language[]
}

type Problems = Record<'problems', Pagination<Problem>>

interface ProblemSubmitRequest {
    languageId: number
    sourceCode: string
}

interface ProblemSubmitResponse {
    id: number
    source_code: string
}
