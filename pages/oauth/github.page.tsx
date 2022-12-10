import { api } from 'apiForClient/index'
import LoadingDot from '@components/shared/LoadingDot'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const githubSecretId = `${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`
const githubSecretSecret = `${process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET}`

const OAuthGithub = () => {
  const router = useRouter()

  useEffect(() => {
    const getAccessTokenTest = async (authCode: string) => {
      try {
        const res = await api.authService.githubAuthorizationToAccessToken(
          authCode,
          githubSecretId,
          githubSecretSecret
        )
        window.opener.oAuthRedirectCallback(res.accessToken)
        window.close()
      } catch (err) {
        console.log(err)
      }
    }
    if (router.isReady) {
      setTimeout(() => getAccessTokenTest(router.query.code as string), 2000)
    }
  }, [router.isReady])

  return (
    <div className="w-[100vw] h-[100vh] flex-center">
      <LoadingDot />
    </div>
  )
}
export default OAuthGithub
