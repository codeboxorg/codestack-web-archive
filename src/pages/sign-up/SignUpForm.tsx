import { BaseInput } from '@components/core/common'
import { SIGN_UP_FORM_SCHEMA, SignUpFormSchema } from '@constants/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSignUp } from '@hooks/auth'
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

    const signUpMutation = useSignUp()

    const handleSignUpFormSubmit = handleSubmit((signUpFormData) => {
        signUpMutation.mutate(signUpFormData)
    })

    return (
        <form onSubmit={handleSignUpFormSubmit} id='sign-in'>
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
                <div className='w-full h-20 pt-3'>
                    {errors.username && <p className='w-full text-xs text-red-500'>{errors.username.message}</p>}
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
                <div className='w-full h-20 pt-3'>
                    {errors.password && <p className='w-full text-xs text-red-500'>{errors.password.message}</p>}
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
                <div className='w-full h-20 pt-3'>
                    {errors.passwordConfirm && (
                        <p className='w-full text-xs text-red-500'>{errors.passwordConfirm.message}</p>
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
                <div className='w-full h-20 pt-3'>
                    {errors.email && <p className='w-full text-xs text-red-500'>{errors.email.message}</p>}
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
                <div className='w-full h-20 pt-3'>
                    {errors.nickname && <p className='w-full text-xs text-red-500'>{errors.nickname.message}</p>}
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
