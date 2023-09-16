import { API } from '@client/index'
import BaseInput from '@components/core/BaseInput'
import { SIGN_UP_FORM_SCHEMA, SignUpFormSchema } from '@constants/form'
import { MESSAGE } from '@constants/message'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { message } from 'antd'
import { useRouter } from 'next/router'
import { Controller, useForm } from 'react-hook-form'

function SignUpForm() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpFormSchema>({
        resolver: zodResolver(SIGN_UP_FORM_SCHEMA),
        mode: 'onChange',
    })

    const router = useRouter()

    const handleMutationSuccess = async () => {
        message.success(MESSAGE.USER_MESSAGE.success.signUp)
        router.push('/login')
    }
    const signUpMutation = useMutation(API.authService.signUp, {
        onSuccess: handleMutationSuccess,
    })

    const onSubmit = handleSubmit((signUpFormData) => {
        signUpMutation.mutate(signUpFormData)
    })

    return (
        <form onSubmit={onSubmit} id='login'>
            <div className='mb-6'>
                <label htmlFor='username' className='block mb-5 text-sm font-medium text-gray-900'>
                    아이디
                </label>
                <Controller
                    control={control}
                    name='username'
                    render={({ field }) => (
                        <BaseInput
                            id='username'
                            placeholder='아이디를 입력해주세요.'
                            status={errors.username && 'error'}
                            {...field}
                        />
                    )}
                />
                <div className='h-20 pt-3 w-full'>
                    {errors.username && <p className='text-red-500 w-full text-xs'>{errors.username.message}</p>}
                </div>
            </div>
            <div className='mb-6'>
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
                <div className='h-20 pt-3 w-full'>
                    {errors.password && <p className='text-red-500 w-full text-xs'>{errors.password.message}</p>}
                </div>
            </div>
            <div className='mb-6'>
                <label htmlFor='passwordConfirm' className='block mb-5 text-sm font-medium text-gray-900'>
                    비밀번호 확인
                </label>
                <Controller
                    control={control}
                    name='passwordConfirm'
                    render={({ field }) => (
                        <BaseInput
                            id='passwordConfirm'
                            type='password'
                            placeholder='비밀번호를 한번 더 입력해주세요.'
                            status={errors.passwordConfirm && 'error'}
                            {...field}
                        />
                    )}
                />
                <div className='h-20 pt-3 w-full'>
                    {errors.passwordConfirm && (
                        <p className='text-red-500 w-full text-xs'>{errors.passwordConfirm.message}</p>
                    )}
                </div>
            </div>
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
                <div className='h-20 pt-3 w-full'>
                    {errors.email && <p className='text-red-500 w-full text-xs'>{errors.email.message}</p>}
                </div>
            </div>
            <div className='mb-6'>
                <label htmlFor='nickname' className='block mb-5 text-sm font-medium text-gray-900'>
                    닉네임
                </label>
                <Controller
                    control={control}
                    name='nickname'
                    render={({ field }) => (
                        <BaseInput
                            id='nickname'
                            placeholder='닉네임을 입력해주세요.'
                            status={errors.nickname && 'error'}
                            {...field}
                        />
                    )}
                />
                <div className='h-20 pt-3 w-full'>
                    {errors.nickname && <p className='text-red-500 w-full text-xs'>{errors.nickname.message}</p>}
                </div>
            </div>
            <button
                type='submit'
                className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm m-auto block px-5 py-2.5 text-center'
            >
                회원가입
            </button>
        </form>
    )
}

export default SignUpForm
