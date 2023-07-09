import { baseAPI } from '@api/core'

type OAuthService = {
    oAuthCodeToAccessToken(OAuthCodeInfo: OAuthCodeInfo): Promise<TokenInfo>
}

export const oAuthServerToServerRemote = (): OAuthService => ({
    async oAuthCodeToAccessToken({ provider, code }) {
        const response = await baseAPI.post({
            url: `/oauth2/login/${provider}`,
            data: { code, user: null },
        })
        return response.data
    },
})
