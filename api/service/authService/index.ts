import { githubBaseAPI } from '@api/core'
import { throwRemoteError } from '@api/error/remoteError'
import { AuthService } from './authService'

export const authServiceRemote = (): AuthService => ({
  githubAuthorizationToAccessToken: async (code, client_id, client_secret) => {
    try {
      const response = await githubBaseAPI.post({
        url: `/access_token`,
        data: { code, client_id, client_secret },
      })
      return response.data
    } catch (error) {
      throwRemoteError(error)
    }
  },
})
