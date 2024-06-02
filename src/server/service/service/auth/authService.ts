import { baseAPI } from '@client/core'
import { CookieValueTypes } from 'cookies-next'
import { SignInFormSchema } from '@constants/form'

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
        const response = await baseAPI.get({
            url: '',
            headers: { Authorization: `Bearer ${accessToken}` },
        })
        return response.data
    },
})
