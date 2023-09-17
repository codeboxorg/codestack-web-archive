import { baseAPI, graphqlAPI } from '@client/core'
import { CookieValueTypes } from 'cookies-next'
import { SignInFormSchema } from '@constants/form'
import { MY_INFO } from './graphqlQueries'

interface AuthService {
    signIn(formData: SignInFormSchema): Promise<TokenInfo>
    refreshTokenToAccessToken(refreshToken: CookieValueTypes): Promise<Pick<TokenInfo, 'accessToken'>>
    memberInfo(accessToken: string): Promise<Member>
}

export const authServerToServerRemote = (): AuthService => ({
    async signIn(formData) {
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
