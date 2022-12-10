import { NextApiRequest, NextApiResponse } from 'next'

function handler(req: NextApiRequest, res: NextApiResponse) {
  req.headers
  res.status(200).json({ test: 'root', h: req.headers })
}

export default handler
