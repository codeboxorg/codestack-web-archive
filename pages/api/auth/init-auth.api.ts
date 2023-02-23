import { NextApiRequest, NextApiResponse } from 'next'
import { getCookie, setCookie } from 'cookies-next'
import { api } from '@api/index'
import { baseAPI } from '@api/core'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const refreshToken = getCookie('server-key', { req, res })
  if (!refreshToken) {
    res.json(null)
    return
  }
  try {
    const { accessToken } = await api.authService.refreshTokenToAccessToken(
      refreshToken
    )
    baseAPI.setDefaultAuthorizationHeader(accessToken)
    const user = await api.memberService.memberInfo()
    //TODO : 토큰정보 추가
    res.json(user)
  } catch (err) {
    //TODO : 엑세스 토큰 변환시 에러 핸들링
    res.json(null)
  }
}
