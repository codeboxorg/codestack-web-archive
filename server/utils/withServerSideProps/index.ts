import { baseAPI } from '@api/core'
import { RemoteError } from '@api/error/remoteError'
import { setLoginUser } from '@components/auth/authSlice'
import wrapper from '@store/configureStore'
import { getCookie } from 'cookies-next'
import { GetServerSideProps } from 'next'

export default function withGetServerSideProps(
  getServerSideProps: GetServerSideProps
): GetServerSideProps {
  return wrapper.getServerSideProps((store) => async (context) => {
    try {
      const { req, res } = context
      const refreshToken = getCookie('server-key', { req, res })
      /**
       * TODO : 이곳에서 refresh token을 검증후 유저를 받아옴 현재는 임시로 토큰 검증 완료를 가정
       */
      if (refreshToken === 'temp.token') {
        store.dispatch(
          setLoginUser({
            userName: 'temp',
            userProfileImageUrl: 'temp.user.imageUrl',
            userEmail: 'temp.user.email',
            accessToken: 'temp.user.token',
          })
        )
        baseAPI.setDefaultAuthorizationHeader('temp.user.token')
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
