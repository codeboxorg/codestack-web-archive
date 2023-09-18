import { API } from '@client/index'
import { useAuth } from '@hooks/shared'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'

export const useSignIn = () => {
    const router = useRouter()
    const { login } = useAuth()

    const handleMutationSuccess = (user: LoginMember) => {
        login(user, { message: true })
        router.push('/')
    }

    return useMutation(API.authService.signIn, {
        onSuccess: handleMutationSuccess,
    })
}
