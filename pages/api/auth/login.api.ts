import { LoginForm } from '@pages/login/VLoginForm'
import { authHandler } from '@server/handlers/oauthHandler'
import { serverToServerAPI } from '@server/serverToServerApi'
import { NextRequest } from '@server/types'
import { initValidation } from '@server/utils/validator'
import { AxiosError } from 'axios'
import { setCookie } from 'cookies-next'
import { body } from 'express-validator'

authHandler.post<NextRequest<LoginForm>>(
  initValidation([
    body('email').notEmpty().withMessage('Email is empty'),
    body('password').notEmpty().withMessage('Password id is empty'),
  ]),
  async (req, res) => {
    const formData = req.body
    try {
      const { accessToken, refreshToken, expiresIn } =
        await serverToServerAPI.authServerToServer.login(formData)
      setCookie('server-key', refreshToken, {
        req,
        res,
        maxAge: 60 * 60 * 24,
      })
      res.json({ accessToken, expiresIn })
    } catch (err) {
      if (err instanceof AxiosError) {
        const status = err.response?.status
        const data = err.response?.data
        res.status(status ?? 500).json(data)
      }
    }
  }
)

export default authHandler
