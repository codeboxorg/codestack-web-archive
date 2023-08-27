import { authServiceRemote } from './service/authService/index'
import { memberServiceRemote } from './service/memberService'
import { problemServiceRemote } from './service/problemService'
import { submissionServiceRemote } from './service/submissionService'
import { tagServiceRemote } from './service/tagService'

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

export const api = provideAPIService()
