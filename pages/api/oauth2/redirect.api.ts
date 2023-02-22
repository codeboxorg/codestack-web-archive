import { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'cookies-next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { token } = req.query
  setCookie('server-key', 'temp.token', { req, res, maxAge: 60 * 60 * 24 })
  res.redirect(307, '/')
}
