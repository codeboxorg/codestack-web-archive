import useAuth from '@hooks/useAuth'
import { useRouter } from 'next/router'
import { ReactElement, ReactNode, useEffect } from 'react'

interface Props {
  children: ReactElement
  pagePermissionInfo?: PagePermissionInfo
}

/**
 * Private Route 처리가 필요한 Page Component를 감싸는 컨테이너
 * user의 기본 State는 AuthChecker 컴포넌트가 권한 검증을 하기 전까지는 'loading' 상태.
 */
const AuthContainer = ({ children, pagePermissionInfo }: Props) => {
  const router = useRouter()
  const { user } = useAuth()

  const targetRedirect = pagePermissionInfo?.redirect ?? '/'
  const targetRole = pagePermissionInfo?.role ?? 'member'
  const targetLoadingFallback = pagePermissionInfo?.loadingFallback || (
    <div>Default Auth Loading</div>
  )

  useEffect(() => {
    if (user === 'loading') return
    if (!user) {
      router.push(targetRedirect)
    }
  }, [user])

  /**
   * user state가 loading이 아니면서 전역에 유저정보가 있을 경우 통과 처리
   */
  if (user !== 'loading' && user) {
    return children
  }

  /**
   * 새로고침시 AuthChecker Component가 권한 검증중인경우 loading 처리
   */
  return targetLoadingFallback
}

export default AuthContainer
