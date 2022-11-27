import { popupCenter } from '@utils/popupCenter'
import { useEffect } from 'react'

const GithubUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

const LoginPage = () => {
  const oAuthRedirectCallback = (authorizationCode: string) => {
    console.log(authorizationCode)
  }

  useEffect(() => {
    window.oAuthRedirectCallback = oAuthRedirectCallback
    return () => {
      delete window.oAuthRedirectCallback
    }
  }, [])

  return (
    <>
      <button
        onClick={() => {
          popupCenter({
            url: GithubUrl,
            title: 'github-login',
            w: 700,
            h: 1000,
          })
        }}
      >
        Github 로그인
      </button>
    </>
  )
}

export default LoginPage
