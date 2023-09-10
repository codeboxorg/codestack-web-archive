import { API } from '@server/index'
import { AxiosError } from 'axios'
import { setCookie } from 'cookies-next'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { isMobile, code } = req.query

    if (isMobile && code) {
        res.redirect(301, `codestackios://git/auth?code=${code}`)
    }

    const githubCodeInfo: OAuthCodeInfo = {
        provider: 'github',
        code: code?.toString() ?? '',
    }
    try {
        const { refreshToken } = await API.oAuthServerToServer.oAuthCodeToAccessToken(githubCodeInfo)

        setCookie('server-key', refreshToken, {
            req,
            res,
            maxAge: 60 * 60 * 24,
        })

        res.redirect(307, '/')
    } catch (err) {
        if (err instanceof AxiosError) {
            const status = err.response?.status
            const data = err.response?.data
            res.status(status ?? 500).json(data)
        }
    }
}
