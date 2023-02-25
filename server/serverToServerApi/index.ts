import { authServerToServerRemote } from './service/auth/authService'

const provideAPIService = () => {
  const authServerToServer = authServerToServerRemote()
  return {
    authServerToServer,
  }
}

export const serverToServerAPI = provideAPIService()
