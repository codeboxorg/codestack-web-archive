import { api } from '@api/index'
import { baseAPI, nextAPI, graphqlAPI } from 'apiService/core'
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
      const response = await nextAPI.post({
        url: `api/auth/login`,
        data: formData,
      })
      baseAPI.setDefaultAuthorizationHeader(response.data.accessToken)
      graphqlAPI.setDefaultAuthorizationHeader(response.data.accessToken)
      const user = await api.memberService.memberInfo()
      return { ...response.data, ...user }
    } catch (error) {
      throwRemoteError(error)
    }
  },
  async logout() {
    try {
      const response = await nextAPI.post({
        url: `api/auth/logout`,
      })
      return response.data
    } catch (error) {
      throwRemoteError(error)
    }
  },
  async member() {
    try {
      const response = await nextAPI.post({
        url: `api/auth/member`,
      })
      baseAPI.setDefaultAuthorizationHeader(response.data.accessToken)
      graphqlAPI.setDefaultAuthorizationHeader(response.data.accessToken)
      return response.data
    } catch (error) {
      throwRemoteError(error)
    }
  },
})
