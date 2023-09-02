import { api } from '@api/index'
import { getLoginUser, setLoginUser } from '@components/auth/authSlice'
import { MESSAGE } from '@constants/message'
import { useMutation } from '@tanstack/react-query'
import { message as messageCall } from 'antd'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

type LoginMethodOption = {
    message: boolean
}

type LogoutMethodOption = {
    message?: boolean
}

const loginDefaultOption: LoginMethodOption = {
    message: false,
}

const logoutDefaultOption: LogoutMethodOption = {
    message: false,
}

export const useAuth = () => {
    const user = useSelector(getLoginUser)
    const router = useRouter()

    const dispatch = useDispatch()

    const login = useCallback(
        (loginUser: LoginMember, option: LoginMethodOption = loginDefaultOption) => {
            dispatch(setLoginUser(loginUser))

            if (option.message) messageCall.success(MESSAGE.authMessage.success.login)
        },
        [dispatch],
    )

    const logoutMutation = useMutation(api.authService.logout, {
        onSuccess: () => {
            dispatch(setLoginUser(false))
            router.push('/')
        },
    })

    const logout = useCallback(
        (option: LogoutMethodOption = logoutDefaultOption) => {
            logoutMutation.mutate()
            if (option.message) messageCall.success(MESSAGE.authMessage.success.logout)
        },
        [logoutMutation],
    )

    const getMemberMutation = useMutation(api.authService.member, {
        onSuccess: (loginUser) => login(loginUser),
        onError: logout,
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const initMember = useCallback(() => getMemberMutation.mutate(), [])

    return {
        user,
        login,
        logout,
        initMember,
    }
}
