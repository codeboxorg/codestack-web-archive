import { authServiceRemote } from './service/authService/index'

const provideAPIService = () => {
  const authService = authServiceRemote()
  return {
    authService,
  }
}

export const api = provideAPIService()
