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

type SubmitRes = {
    id: number
    language_id: number
    member_id: number
    problem_id: number
    source_code: string
    updated_at: string
    created_at: string
}
