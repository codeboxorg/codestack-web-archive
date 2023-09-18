import { API } from '@client/index'
import { MESSAGE } from '@constants/message'
import { setSignInMember } from '@store/auth'
import { useMutation } from '@tanstack/react-query'
import { message as messageCall } from 'antd'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { useRootState } from './useRootState'

type SignInMethodOption = {
    message: boolean
}

type SignOutMethodOption = {
    message?: boolean
}

const signInDefaultOption: SignInMethodOption = {
    message: false,
}

const signOutDefaultOption: SignOutMethodOption = {
    message: false,
}

export const useAuth = () => {
    const { signInMember } = useRootState((state) => state.auth)
    const router = useRouter()

    const dispatch = useDispatch()

    const signIn = useCallback(
        (member: SignInMember, option: SignInMethodOption = signInDefaultOption) => {
            dispatch(setSignInMember(member))

            if (option.message) messageCall.success(MESSAGE.AUTH_MESSAGE.success.signIn)
        },
        [dispatch],
    )

    const logoutMutation = useMutation(API.authService.signOut, {
        onSuccess: () => {
            dispatch(setSignInMember(false))
            router.push('/')
        },
    })

    const signOut = useCallback(
        (option: SignOutMethodOption = signOutDefaultOption) => {
            logoutMutation.mutate()
            if (option.message) messageCall.success(MESSAGE.AUTH_MESSAGE.success.signOut)
        },
        [logoutMutation],
    )

    const getMemberMutation = useMutation(API.authService.member, {
        onSuccess: (member) => signIn(member),
        onError: signOut,
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const initMember = useCallback(() => getMemberMutation.mutate(), [])

    return {
        signInMember,
        signIn,
        signOut,
        initMember,
    }
}
