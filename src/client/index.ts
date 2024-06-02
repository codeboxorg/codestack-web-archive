import { authServiceRemote, memberServiceRemote, problemServiceRemote, submissionServiceRemote } from './service'

const provideAPIService = () => {
    const authService = authServiceRemote()
    const problemService = problemServiceRemote()
    const submissionService = submissionServiceRemote()
    const memberService = memberServiceRemote()

    return {
        authService,
        problemService,
        submissionService,
        memberService,
    }
}

export const API = provideAPIService()
