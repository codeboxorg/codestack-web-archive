import { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'cookies-next'
import { api } from '@api/index'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const formData = req.body
  const { accessToken, refreshToken, expiresIn } = await api.authService.login(
    formData
  )
  setCookie('server-key', refreshToken, {
    req,
    res,
    maxAge: 60 * 60 * 24,
  })
  res.json({ accessToken, expiresIn })
}
