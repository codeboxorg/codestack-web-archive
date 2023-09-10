import { baseAPI, graphqlAPI } from '@client/core'
import { LoginForm } from '@pages/login/VLoginForm'
import { CookieValueTypes } from 'cookies-next'

import { MY_INFO } from './graphqlQueries'

interface AuthService {
    login(formData: LoginForm): Promise<TokenInfo>
    refreshTokenToAccessToken(refreshToken: CookieValueTypes): Promise<Pick<TokenInfo, 'accessToken'>>
    memberInfo(accessToken: string): Promise<Member>
}

export const authServerToServerRemote = (): AuthService => ({
    async login(formData) {
        const response = await baseAPI.post({
            url: `/auth/login`,
            data: formData,
        })
        return response.data
    },

    async refreshTokenToAccessToken(refreshToken) {
        const response = await baseAPI.post({
            url: `/auth/token`,
            data: { refreshToken },
        })
        return response.data
    },

    async memberInfo(accessToken) {
        const response = await graphqlAPI.request({
            document: MY_INFO,
            requestHeaders: { Authorization: `Bearer ${accessToken}` },
        })
        return response.getMe
    },
})
