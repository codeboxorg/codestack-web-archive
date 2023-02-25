import useAuth from '@hooks/useAuth'
import renderEnv from '@utils/renderEnv'
import { useRouter } from 'next/router'
import { ReactElement, useEffect } from 'react'

interface Props {
  children: ReactElement
  pagePermissionInfo: Required<PagePermissionInfo>
}

/**
 * Private Route 처리가 필요한 Page Component를 감싸는 컨테이너
 * user의 기본 State는 AuthChecker 컴포넌트가 권한 검증을 하기 전까지는 undefined 상태.
 */
const AuthContainer = ({ children, pagePermissionInfo }: Props) => {
  const router = useRouter()
  const { user } = useAuth()
  const { redirect, loadingFallback } = pagePermissionInfo

  useEffect(() => {
    if (user === undefined) return
    if (!user) {
      router.push(redirect)
    }
  }, [user])

  /**
   * 전역에 유저정보가 있을 경우 통과 처리
   */
  if (user) {
    return children
  }

  /**
   * 새로고침시 AuthChecker Component가 권한 검증중인경우 loading fallback 표출
   */
  return loadingFallback
}

export default AuthContainer
