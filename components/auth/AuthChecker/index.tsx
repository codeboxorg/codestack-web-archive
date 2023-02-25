import useAuth from '@hooks/useAuth'
import { useEffect } from 'react'

/**
 * App 랜더링시 권한을 확인하는 컴포넌트
 * 추후 토큰을 검증후 결과에 따라 전역 state인 user를 분기시켜 dispatch
 */

const AuthChecker = () => {
  const { user, initMember } = useAuth()

  /**
   * 사용자가 권한이 필요한 SSR페이지를 먼저 접속했을 시 권한확인이 완료되어 유저 정보가 이미 채워진 상태이므로
   * CSR측에서 초기 렌더링시 검증할 필요가 없음
   */
  useEffect(() => {
    if (user !== 'loading' && user) return
    else initMember()
  }, [])

  return null
}

export default AuthChecker
