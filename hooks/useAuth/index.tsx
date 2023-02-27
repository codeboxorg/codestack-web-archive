import { api } from '@api/index'
import { getLoginUser, setLoginUser } from '@components/auth/authSlice'
import { useMutation } from '@tanstack/react-query'
import { MESSAGE } from 'constant/message'
import { message } from 'antd'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useAuth = () => {
  const user = useSelector(getLoginUser)
  const router = useRouter()

  const dispatch = useDispatch()

  const login = useCallback((user: LoginMember) => {
    dispatch(setLoginUser(user))
    message.success(MESSAGE.authMessage.success.login)
  }, [])

  const logoutMutation = useMutation(api.authService.logout, {
    onSuccess: () => {
      dispatch(setLoginUser(false))
      router.push('/')
    },
  })

  const logout = useCallback(() => {
    logoutMutation.mutate()
    message.success(MESSAGE.authMessage.success.logout)
  }, [])

  const getMemberMutation = useMutation(api.authService.member, {
    onSuccess: (user) => login(user),
    onError: logout,
  })

  const initMember = useCallback(() => getMemberMutation.mutate(), [])

  return {
    user,
    login,
    logout,
    initMember,
  }
}

export default useAuth
