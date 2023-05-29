import { baseAPI } from '@api/core'
import { RemoteError } from '@api/error/remoteError'
import { api } from '@api/index'
import { setLoginUser } from '@components/auth/authSlice'
import { serverToServerAPI } from '@server/serverToServerApi'
import wrapper from '@store/configureStore'
import { getCookie } from 'cookies-next'
import { GetServerSideProps } from 'next'

/**
 * 권한이 있는 SSR 페이지를 만들때 사용
 * (즉, SSR을 위한 페칭시 토큰이 필요한 경우 이 고차함수를 사용)
 * @param getServerSideProps
 */
export default function withAuthGssp(getServerSideProps: GetServerSideProps): GetServerSideProps {
    return wrapper.getServerSideProps((store) => async (context) => {
        try {
            const { req, res } = context
            const refreshToken = getCookie('server-key', { req, res })
            if (!refreshToken) store.dispatch(setLoginUser(null))
            if (refreshToken) {
                const { accessToken } = await serverToServerAPI.authServerToServer.refreshTokenToAccessToken(
                    refreshToken,
                )
                const user = await serverToServerAPI.authServerToServer.memberInfo(accessToken)
                //TODO : 백엔드에 refreshToken 바꿔오는 endPoint에 expiresIn 추가요청
                store.dispatch(setLoginUser({ ...user, accessToken, expiresIn: 99999 }))
            }
            return await getServerSideProps(context)
        } catch (error) {
            if (!(error instanceof RemoteError)) {
                console.error('unhandled error', error)
                throw error
            }
            return {
                props: {
                    error: JSON.parse(JSON.stringify(error)),
                },
            }
        }
    })
}
