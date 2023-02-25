import { api } from '@api/index'
import { getLoginUser, setLoginUser } from '@components/auth/authSlice'
import { useMutation } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'

const useAuth = () => {
  const user = useSelector(getLoginUser)
  const dispatch = useDispatch()

  const mutation = useMutation(api.authService.member)

  const login = (user: LoginMember) => {
    dispatch(setLoginUser(user))
  }

  const logout = () => {
    dispatch(setLoginUser(false))
  }

  const initMember = () => {
    mutation.mutate(undefined, {
      onSuccess(user) {
        login(user)
      },
      onError() {
        logout()
      },
    })
  }

  return {
    user,
    login,
    logout,
    initMember,
  }
}

export default useAuth
