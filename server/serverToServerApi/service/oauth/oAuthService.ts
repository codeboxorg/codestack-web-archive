import { baseAPI } from '@api/core'
import { axiosForNextApi } from '@server/utils/axiosForNextApi'

type OAuthBaseReqBody = {
    client_id: string
    client_secret: string
}

type GithubTokenInfo = {
    access_token: string
    token_type: string
    scope: string
}

type OAuthService = {
    githubCodeToToken(oAuthRequiredData: OAuthBaseReqBody & { code: string }): Promise<GithubTokenInfo>
    oAuthTokenToAccessToken(provider: string, type: string, token: string): Promise<TokenInfo>
}

export const oAuthServerToServerRemote = (): OAuthService => ({
    async githubCodeToToken(oAuthRequiredData) {
        try {
            const response = await axiosForNextApi.post(
                `https://github.com/login/oauth/access_token`,
                oAuthRequiredData,
            )
            return response.data
        } catch (error) {
            throw error
        }
    },
    async oAuthTokenToAccessToken(provider, type, token) {
        try {
            const response = await baseAPI.post({
                url: `/oauth2/login/provider/${provider}`,
                data: { type, token },
            })
            return response.data
        } catch (error) {
            throw error
        }
    },
})
