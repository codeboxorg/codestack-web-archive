import { axiosForNextApi } from '@server/utils/axiosForNextApi'

interface GithubAccessTokenInfo {
  access_token: string
  scope: string
  token_type: string
}

interface OAuthService {
  githubAuthorizationToAccessToken(
    code: string,
    client_id: string,
    client_secret: string
  ): Promise<GithubAccessTokenInfo>
}

export const oauthServerToServerRemote = (): OAuthService => ({
  async githubAuthorizationToAccessToken(code, client_id, client_secret) {
    try {
      const res = await axiosForNextApi.post(
        'https://github.com/login/oauth/access_token',
        {
          client_id,
          client_secret,
          code,
        }
      )
      return res.data
    } catch (err) {
      return err
    }
  },
})
