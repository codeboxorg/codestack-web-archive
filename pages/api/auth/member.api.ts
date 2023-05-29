import { serverToServerAPI } from '@server/serverToServerApi'
import { NextRequest } from '@server/types'
import { AxiosError } from 'axios'
import { getCookie } from 'cookies-next'
import { NextApiResponse } from 'next'

export default async function handler(
  req: NextRequest<unknown>,
  res: NextApiResponse
) {
  const refreshToken = getCookie('server-key', { req, res })
  if (!refreshToken) {
    res.json(false)
    return
  }
  try {
    const { accessToken } =
      await serverToServerAPI.authServerToServer.refreshTokenToAccessToken(
        refreshToken
      )
    const user = await serverToServerAPI.authServerToServer.memberInfo(
      accessToken
    )
    // TODO : 백엔드에 refreshToken 바꿔오는 endPoint에 expiresIn 추가요청
    res.json({ ...user, accessToken, expiresIn: 99999 })
  } catch (err) {
    if (err instanceof AxiosError) {
      const status = err.response?.status
      const data = err.response?.data
      res.status(status ?? 500).json(data)
    }
  }
}
