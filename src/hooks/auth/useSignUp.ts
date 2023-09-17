import { API } from '@client/index'
import { MESSAGE } from '@constants/message'
import { useMutation } from '@tanstack/react-query'
import { message } from 'antd'
import { useRouter } from 'next/router'

export const useSignUp = () => {
    const router = useRouter()

    const handleMutationSuccess = async () => {
        message.success(MESSAGE.USER_MESSAGE.success.signUp)
        router.push('/sign-in')
    }

    return useMutation(API.authService.signUp, {
        onSuccess: handleMutationSuccess,
    })
}
