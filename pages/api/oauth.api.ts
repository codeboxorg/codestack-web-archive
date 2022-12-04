import { oauthHandler } from '@server/oauth/oauthHandler'
import { GithubAuthorizationToAccessTokenRequest } from '@server/oauth/request'
import { OAuthAuthorizationToAccessTokenRequestResponse } from '@server/oauth/response'
import { NextRequest } from '@server/types'

import { serverToServerAPI } from '@server/serverToServer'

oauthHandler.post<NextRequest<GithubAuthorizationToAccessTokenRequest>>(
  async (req, res) => {
    const { client_id, client_secret, code } = req.body
    try {
      const fromServerResponse =
        await serverToServerAPI.oauthServerToServer.githubAuthorizationToAccessToken(
          code,
          client_id,
          client_secret
        )
      const response: OAuthAuthorizationToAccessTokenRequestResponse = {
        accessToken: fromServerResponse.access_token,
      }
      res.status(200).json(response)
    } catch (err) {
      console.log(err)
    }
  }
)
export default oauthHandler
