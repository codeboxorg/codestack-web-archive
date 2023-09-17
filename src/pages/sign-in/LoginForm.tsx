import { API } from '@client/index'
import BaseInput from '@components/core/BaseInput'
import { SIGN_IN_FORM_SCHEMA, SignInFormSchema } from '@constants/form'
import { MESSAGE } from '@constants/message'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '@hooks/shared'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { Controller, useForm } from 'react-hook-form'

function Login() {
    const {
        handleSubmit,
        setError,
        formState: { errors },
        control,
    } = useForm<SignInFormSchema>({
        resolver: zodResolver(SIGN_IN_FORM_SCHEMA),
        mode: 'onSubmit',
    })

    const router = useRouter()
    const { login } = useAuth()

    const loginMutation = useMutation(API.authService.signIn)

    const handleLoginSuccess = (user: LoginMember) => {
        login(user, { message: true })
        router.push('/')
    }

    const handleLoginFail = () =>
        setError('password', {
            message: MESSAGE.AUTH_MESSAGE.error.loginFail,
        })

    const onSubmit = handleSubmit((formData) =>
        loginMutation.mutate(formData, {
            onSuccess: handleLoginSuccess,
            onError: handleLoginFail,
        }),
    )

    return (
        <form onSubmit={onSubmit} id='login'>
            <div className='mb-6'>
                <label htmlFor='email' className='block mb-5 text-sm font-medium text-gray-900'>
                    이메일
                </label>
                <Controller
                    control={control}
                    name='email'
                    render={({ field }) => (
                        <BaseInput
                            id='email'
                            placeholder='이메일을 입력해주세요.'
                            status={errors.email && 'error'}
                            {...field}
                        />
                    )}
                />
            </div>
            <div className='mt-20 mb-6'>
                <label htmlFor='password' className='block mb-5 text-sm font-medium text-gray-900'>
                    비밀번호
                </label>
                <Controller
                    control={control}
                    name='password'
                    render={({ field }) => (
                        <BaseInput
                            id='password'
                            type='password'
                            placeholder='비밀번호를 입력해주세요.'
                            status={errors.password && 'error'}
                            {...field}
                        />
                    )}
                />
                <div className='h-20 my-15 flex-center'>
                    {errors.password && <p className='text-xs text-red-500'>{errors.password.message}</p>}
                </div>
                <button
                    type='submit'
                    className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm m-auto block px-5 py-2.5 text-center'
                >
                    로그인
                </button>
            </div>
        </form>
    )
}

export default Login
