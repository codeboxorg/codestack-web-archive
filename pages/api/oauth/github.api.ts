import { serverToServerAPI } from '@server/serverToServerApi'
import { AxiosError } from 'axios'
import { setCookie } from 'cookies-next'
import { NextApiRequest, NextApiResponse } from 'next'

const githubClientId = `${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`
const githubSecretSecret = `${process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET}`

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { code } = req.query
    try {
        const { access_token } = await serverToServerAPI.oAuthServerToServer.githubCodeToToken({
            client_id: githubClientId,
            client_secret: githubSecretSecret,
            code: code?.toString() ?? '',
        })
        const { refreshToken } = await serverToServerAPI.oAuthServerToServer.oAuthTokenToAccessToken(
            'GITHUB',
            'access_token',
            access_token,
        )
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
