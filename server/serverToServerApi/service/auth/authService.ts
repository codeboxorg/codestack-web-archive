import { baseAPI } from '@api/core'
import { LoginForm } from '@pages/login/VLoginForm'
import { CookieValueTypes } from 'cookies-next'

type AuthService = {
  login(formData: LoginForm): Promise<TokenInfo>
  refreshTokenToAccessToken(
    refreshToken: CookieValueTypes
  ): Promise<Pick<TokenInfo, 'accessToken'>>
  memberInfo(accessToken: string): Promise<Member>
}

export const authServerToServerRemote = (): AuthService => ({
  async login(formData) {
    try {
      const response = await baseAPI.post({
        url: `/auth/login`,
        data: formData,
      })
      return response.data
    } catch (error) {
      throw error
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
      throw error
    }
  },
  async memberInfo(accessToken) {
    try {
      const response = await baseAPI.get({
        url: `/member/me`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      return response.data
    } catch (error) {
      throw error
    }
  },
})
