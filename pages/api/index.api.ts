import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

const handler = nc<NextApiRequest, NextApiResponse>()

handler.get('/api', async (req, res) => {
  res.status(200).json({ test: 'test' })
})

export default handler
