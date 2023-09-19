import { API } from '@client/index'
import { MESSAGE } from '@constants/message'
import { setSignInMember } from '@store/auth'
import { useMutation, useQuery } from '@tanstack/react-query'
import { message as messageCall } from 'antd'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { AUTH_KEYS } from '@constants/query-key'
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
    const router = useRouter()

    const { signInMember } = useRootState((state) => state.auth)
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

    useQuery(AUTH_KEYS.Authentication, API.authService.member, {
        onSuccess: signIn,
        onError: signOut,
        staleTime: Infinity,
        cacheTime: Infinity,
        enabled: !signInMember,
    })

    return {
        signInMember,
        signIn,
        signOut,
    }
}
