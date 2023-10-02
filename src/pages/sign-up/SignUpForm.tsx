import { BaseInput } from '@components/core/common'
import { FieldErrorMessage, FieldLabel } from '@components/core/form'
import { SIGN_UP_FORM_SCHEMA, SignUpFormSchema } from '@constants/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSignUp } from '@hooks/auth'
import { Controller, useForm } from 'react-hook-form'
import 'twin.macro'

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
                <FieldLabel htmlFor='username'>아이디</FieldLabel>
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
                <FieldErrorMessage error={errors.username}>{errors?.username?.message}</FieldErrorMessage>
            </div>
            <div className='mb-6'>
                <FieldLabel htmlFor='password'>비밀번호</FieldLabel>
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
                <FieldErrorMessage error={errors.password}>{errors?.password?.message}</FieldErrorMessage>
            </div>
            <div className='mb-6'>
                <FieldLabel htmlFor='passwordConfirm'>비밀번호 확인</FieldLabel>
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
                <FieldErrorMessage error={errors.passwordConfirm}>{errors?.passwordConfirm?.message}</FieldErrorMessage>
            </div>
            <div className='mb-6'>
                <FieldLabel htmlFor='email'>이메일</FieldLabel>
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
                <FieldErrorMessage error={errors.email}>{errors?.email?.message}</FieldErrorMessage>
            </div>
            <div className='mb-6'>
                <FieldLabel htmlFor='nickname'>닉네임</FieldLabel>
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
                <FieldErrorMessage error={errors.nickname}>{errors?.nickname?.message}</FieldErrorMessage>
            </div>
            <button
                type='submit'
                className='w-full mt-20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm m-auto block px-5 py-2.5 text-center'
            >
                회원가입
            </button>
        </form>
    )
}

export default SignUpForm
