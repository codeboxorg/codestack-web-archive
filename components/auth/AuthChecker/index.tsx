import useAuth from '@hooks/useAuth'

/**
 * App 랜더링시 권한을 확인하는 컴포넌트
 * 추후 토큰을 검증후 결과에 따라 전역 state인 user를 분기시켜 dispatch
 */
const AuthChecker = () => {
  const { login, logout } = useAuth()

  /**
   * 토큰 검증 실패시 (임시)
   */
  setTimeout(() => {
    logout()
  }, 2000)

  //   /**
  //    * 토큰 검증 성공시 받아온 user 정보를 dispatch (임시)
  //    */
  //   setTimeout(() => {
  //     const testLoginUser = {
  //       userName: 'authTest',
  //       userEmail: 'authTest@gmail.com',
  //       userProfileImageUrl: '',
  //     }
  //     login(testLoginUser)
  //   }, 2000)

  return null
}

export default AuthChecker
