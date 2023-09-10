import {
    authServiceRemote,
    memberServiceRemote,
    problemServiceRemote,
    submissionServiceRemote,
    tagServiceRemote,
} from './service'

const provideAPIService = () => {
    const authService = authServiceRemote()
    const problemService = problemServiceRemote()
    const submissionService = submissionServiceRemote()
    const memberService = memberServiceRemote()
    const tagService = tagServiceRemote()

    return {
        authService,
        problemService,
        submissionService,
        memberService,
        tagService,
    }
}

export const API = provideAPIService()
