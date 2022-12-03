import type { NextApiResponse } from 'next'
import nc from 'next-connect'
import { IncomingMessage } from 'node:http'

const oauthHandler = nc<IncomingMessage, NextApiResponse>()

export { oauthHandler }
