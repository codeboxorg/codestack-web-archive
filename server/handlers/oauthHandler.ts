import type { NextApiResponse } from 'next'
import nc from 'next-connect'
import { IncomingMessage } from 'node:http'

const authHandler = nc<IncomingMessage, NextApiResponse>()

export { authHandler }
