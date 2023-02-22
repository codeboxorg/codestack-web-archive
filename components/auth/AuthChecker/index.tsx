import useAuth from '@hooks/useAuth'

/**
 * App 랜더링시 권한을 확인하는 컴포넌트
 * 추후 토큰을 검증후 결과에 따라 전역 state인 user를 분기시켜 dispatch
 */
const AuthChecker = () => {
  const { user, login, logout } = useAuth()

  /**
   * 사용자가 권한이 필요한 SSR페이지를 먼저 접속했을 시 권한확인이 완료되어 유저 정보가 이미 채워진 상태이므로
   * CSR측에서 초기 렌더링시 검증할 필요가 없음
   */
  if (user !== 'loading' && user) {
    return null
  } else {
    /**
     * TODO:
     * - [] 쿠키의 Token을 UserInfo로 바꿔오는 서버측 엔드포인트로 Fetch (react-query의 useMutation을 사용해주세요)
     * - [] Fetch 성공 (토큰 검증 성공)시 받아온 user 정보를 전역으로 유지시키기
     * - [] Fetch 실패 (토큰 검증 실패)시 logout 메서드 실행
     */
    // 임시로 검증 실패 처리
    setTimeout(logout, 1000)
  }

  return null
}

export default AuthChecker
