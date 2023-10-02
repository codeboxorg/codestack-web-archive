interface Problem {
    id: number
    title: string
    context: string
    maxCpuTime: number
    maxMemory: number
    submission: number
    accepted: number
    languages: Language[]
}

type Problems = Record<'problems', Pagination<Problem>>

interface SubmitRequest {
    problemId: number
    languageId: number
    sourceCode: string
}

interface SubmitResponse {
    createSubmission: {
        id: number
        source_code: string
    }
}
