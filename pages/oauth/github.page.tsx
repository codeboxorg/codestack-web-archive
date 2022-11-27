import LoadingDot from '@components/shared/LoadingDot'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const OAuthGithub = () => {
  const router = useRouter()

  useEffect(() => {
    if (router.isReady) {
      window.opener.oAuthRedirectCallback(router.query.code)
      window.close()
    }
  }, [router.isReady])

  return (
    <div className="w-[100vw] h-[100vh] flex-center">
      <LoadingDot />
    </div>
  )
}
export default OAuthGithub
