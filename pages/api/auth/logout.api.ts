import { LoginForm } from '@pages/login/index.page'
import { authHandler } from '@server/handlers/oauthHandler'
import { NextRequest } from '@server/types'
import { deleteCookie } from 'cookies-next'

authHandler.post<NextRequest<LoginForm>>(async (req, res) => {
  deleteCookie('server-key', { req, res })
  res.status(200).json(true)
})

export default authHandler
