import { oauthHandler } from '@server/handlers/oauthHandler'
import { GithubAuthorizationToAccessTokenRequest } from '@server/oauth/request'
import { OAuthAuthorizationToAccessTokenRequestResponse } from '@server/oauth/response'
import { NextRequest } from '@server/types'
import { serverToServerAPI } from '@server/serverToServerApi'
import { initValidation } from '@server/utils/validator'
import { AxiosError } from 'axios'
import { body } from 'express-validator'

oauthHandler.get<NextRequest<GithubAuthorizationToAccessTokenRequest>>(
  'api/',
  async (req, res) => {
    res.status(200).json({ test: 'test' })
  }
)

oauthHandler.get<NextRequest<GithubAuthorizationToAccessTokenRequest>>(
  'api/oauth/test',
  async (req, res) => {
    res.status(200).json({ test: 'test' })
  }
)

oauthHandler.post<NextRequest<GithubAuthorizationToAccessTokenRequest>>(
  'api/oauth/github',
  initValidation([
    body('code').notEmpty().withMessage('Authorization code is empty'),
    body('client_id').notEmpty().withMessage('Client id is empty'),
    body('client_secret').notEmpty().withMessage('Client secret is empty'),
  ]),
  async (req, res) => {
    const { code, client_id, client_secret } = req.body
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
      if (err instanceof AxiosError) {
        const status = err.response?.status
        const data = err.response?.data
        res.status(status ?? 500).json(data)
      }
    }
  }
)

export default oauthHandler
