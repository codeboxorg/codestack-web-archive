import { NextRequest } from '@server/types'
import { deleteCookie } from 'cookies-next'
import { NextApiResponse } from 'next'

export default async function handler(
  req: NextRequest<unknown>,
  res: NextApiResponse
) {
  deleteCookie('server-key', { req, res })
  //TODO : 실제 Remote 서버에도 key 삭제 요청 보내기
  res.status(200).json(true)
}
