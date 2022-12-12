import { authServiceRemote } from './service/authService/index'
import { problemServiceRemote } from './service/problemService'

const provideAPIService = () => {
  const authService = authServiceRemote()
  const problemService = problemServiceRemote()

  return {
    authService,
    problemService,
  }
}

export const api = provideAPIService()
