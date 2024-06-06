import { API } from '@client/index'
import { useAuth } from '@hooks/shared'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'

export const useSignIn = () => {
    const router = useRouter()
    const { signIn } = useAuth()

    const handleMutationSuccess = async (token: TokenInfo) => {
        const a = await API.authService.member()
        signIn(a, { message: true })
        router.push('/')
    }

    return useMutation(API.authService.signIn, {
        onSuccess: handleMutationSuccess,
    })
}
