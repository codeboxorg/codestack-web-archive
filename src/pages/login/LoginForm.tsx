import { api } from '@api/index'
import useAuth from '@hooks/useAuth'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { MESSAGE } from '@constants/message'
import VLoginForm, { LoginForm, VLoginFromProps } from './VLoginForm'

function Login() {
    const {
        handleSubmit,
        setError,
        formState: { errors },
        control,
    } = useForm<LoginForm>()

    const router = useRouter()
    const { login } = useAuth()

    const loginMutation = useMutation(api.authService.login)

    const handleLoginSuccess = (user: LoginMember) => {
        login(user, { message: true })
        router.push('/')
    }

    const handleLoginFail = () =>
        setError('password', {
            message: MESSAGE.authMessage.error.loginFail,
        })

    const onSubmit = handleSubmit((formData) =>
        loginMutation.mutate(formData, {
            onSuccess: handleLoginSuccess,
            onError: handleLoginFail,
        }),
    )

    const vLoginFormProps: VLoginFromProps = {
        emailInput: {
            status: errors.email ? 'error' : '',
            message: errors?.email?.message,
        },
        passwordInput: {
            roles: {
                required: '이메일과 비밀번호를 입력해주세요',
            },
            status: errors.password ? 'error' : '',
            message: errors?.password?.message,
        },
        onSubmit,
        control,
    }

    return <VLoginForm {...vLoginFormProps} />
}

export default Login
