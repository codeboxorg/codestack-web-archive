import { authServiceRemote } from './service/authService/index'
import { problemServiceRemote } from './service/problemService'
import { submissionServiceRemote } from './service/submissionService'
const provideAPIService = () => {
  const authService = authServiceRemote()
  const problemService = problemServiceRemote()
  const submissionService = submissionServiceRemote()
  return {
    authService,
    problemService,
    submissionService,
  }
}

export const api = provideAPIService()
