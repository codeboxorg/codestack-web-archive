import { api } from '@api/index'
import { baseAPI, nextAPI } from 'apiService/core'
import { throwRemoteError } from 'apiService/error/remoteError'
import { AuthService } from './authService'

export const authServiceRemote = (): AuthService => ({
  async register(formData) {
    try {
      const response = await baseAPI.post({
        url: `/auth/register`,
        data: formData,
      })
      return response.data
    } catch (error) {
      throwRemoteError(error)
    }
  },
  async login(formData) {
    try {
      const response = await baseAPI.post({
        url: `/auth/login`,
        data: formData,
      })
      return response.data
    } catch (error) {
      throwRemoteError(error)
    }
  },
  async login2(formData) {
    try {
      const response = await nextAPI.post({
        url: `api/auth/login`,
        data: formData,
      })
      baseAPI.setDefaultAuthorizationHeader(response.data.accessToken)
      const user = await api.memberService.memberInfo()
      return { ...response.data, ...user }
    } catch (error) {
      throwRemoteError(error)
    }
  },
  async refreshTokenToAccessToken(refreshToken) {
    try {
      const response = await baseAPI.post({
        url: `/auth/token`,
        data: { refreshToken },
      })
      return response.data
    } catch (error) {
      throwRemoteError(error)
    }
  },
  async initAuth() {
    try {
      const response = await nextAPI.post({
        url: `api/auth/init-auth`,
      })
      return response.data
    } catch (error) {
      throwRemoteError(error)
    }
  },
})
