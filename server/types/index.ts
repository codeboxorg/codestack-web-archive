import { NextApiRequest } from 'next'

export type NextRequest<T> = OverrideType<NextApiRequest, { body: T }>
