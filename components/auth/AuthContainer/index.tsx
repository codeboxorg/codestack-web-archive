import useAuth from '@hooks/useAuth'
import { message } from 'antd'
import { MESSAGE } from 'constant/message'
import { useRouter } from 'next/router'
import { ReactElement, useEffect } from 'react'

interface Props {
  children: ReactElement
  pagePermissionInfo: Required<PagePermissionInfo>
}

const AuthContainer = ({ children, pagePermissionInfo }: Props) => {
  const router = useRouter()
  const { user } = useAuth()
  const { redirect, loadingFallback } = pagePermissionInfo

  useEffect(() => {
    if (user === null) return
    if (!user) {
      message.info(MESSAGE.authMessage.info.requiredLogin)
      router.push(redirect)
    }
  }, [user])

  if (user) {
    return children
  }

  return loadingFallback
}

export default AuthContainer
