import { LoginForm } from '@pages/login/VLoginForm'
import { serverToServerAPI } from '@server/serverToServerApi'
import { NextRequest } from '@server/types'
import { AxiosError } from 'axios'
import { setCookie } from 'cookies-next'

import type { NextApiResponse } from 'next'

export default async function handler(req: NextRequest<LoginForm>, res: NextApiResponse) {
    const formData = req.body
    try {
        const { accessToken, refreshToken, expiresIn } = await serverToServerAPI.authServerToServer.login(formData)
        setCookie('server-key', refreshToken, {
            req,
            res,
            maxAge: 60 * 60 * 24,
        })
        res.json({ accessToken, expiresIn })
    } catch (err) {
        if (err instanceof AxiosError) {
            const status = err.response?.status
            const data = err.response?.data
            res.status(status ?? 500).json(data)
        }
    }
}
