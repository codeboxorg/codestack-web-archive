import { NextRequest } from '@server/types'
import { oauthHandler } from '@server/oauth/oauthHandler'
import { GithubAuthorizationToAccessTokenRequest } from '@server/oauth/request'
import { OAuthAuthorizationToAccessTokenRequestResponse } from '@server/oauth/response'

import { axiosForNextApi } from '@server/axiosForNextApi'

oauthHandler.post<NextRequest<GithubAuthorizationToAccessTokenRequest>>(
  async (req, res) => {
    const { client_id, client_secret, code } = req.body
    try {
      const fetchResponse = await axiosForNextApi.post(
        'https://github.com/login/oauth/access_token',
        {
          client_id,
          client_secret,
          code,
        }
      )
      const response: OAuthAuthorizationToAccessTokenRequestResponse = {
        accessToken: fetchResponse.data.access_token,
      }
      res.status(200).json(response)
    } catch (err) {
      console.log(err)
    }
  }
)
export default oauthHandler
