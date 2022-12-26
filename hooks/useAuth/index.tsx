import { getLoginUser, setLoginUser } from '@components/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'

const useAuth = () => {
  const user = useSelector(getLoginUser)
  const dispatch = useDispatch()

  const login = (user: LoginUser) => {
    dispatch(setLoginUser(user))
  }

  const logout = () => {
    dispatch(setLoginUser(null))
  }

  return {
    user,
    login,
    logout,
  }
}

export default useAuth
