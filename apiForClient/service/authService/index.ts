import { nextAPI } from 'apiForClient/core'
import { throwRemoteError } from 'apiForClient/error/remoteError'
import { AuthService } from './authService'

export const authServiceRemote = (): AuthService => ({
  githubAuthorizationToAccessToken: async (code, client_id, client_secret) => {
    try {
      const response = await nextAPI.post({
        url: `/api/oauth/github`,
        data: { code, client_id, client_secret },
      })
      return response.data
    } catch (error) {
      throwRemoteError(error)
    }
  },
})
