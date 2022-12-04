import { nextAPI } from '@api/core'
import { throwRemoteError } from '@api/error/remoteError'
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
