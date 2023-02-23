import { authServiceRemote } from './service/authService/index'
import { memberServiceRemote } from './service/memberService'
import { problemServiceRemote } from './service/problemService'
import { submissionServiceRemote } from './service/submissionService'
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

export const api = provideAPIService()
