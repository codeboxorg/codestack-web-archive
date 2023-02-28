import { LoginForm } from '@pages/login/VLoginForm'
import { authHandler } from '@server/handlers/oauthHandler'
import { NextRequest } from '@server/types'
import { deleteCookie } from 'cookies-next'

authHandler.post<NextRequest<LoginForm>>(async (req, res) => {
  deleteCookie('server-key', { req, res })
  //TODO : 실제 Remote 서버에도 key 삭제 요청 보내기
  res.status(200).json(true)
})

export default authHandler
