import { BaseInput } from '@components/core/common'
import { FieldErrorMessage, FieldLabel } from '@components/core/form'
import { SIGN_IN_FORM_SCHEMA, SignInFormSchema } from '@constants/form'
import { MESSAGE } from '@constants/message'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSignIn } from '@hooks/auth'
import { Controller, useForm } from 'react-hook-form'
import 'twin.macro'

function SignIn() {
    const {
        handleSubmit,
        setError,
        formState: { errors },
        control,
    } = useForm<SignInFormSchema>({
        resolver: zodResolver(SIGN_IN_FORM_SCHEMA),
        mode: 'onSubmit',
    })

    const signInMutation = useSignIn()

    const handleSignInError = () =>
        setError('password', {
            message: MESSAGE.AUTH_MESSAGE.error.signInFail,
        })

    const handleSignInFormSubmit = handleSubmit((formData) =>
        signInMutation.mutate(formData, {
            onError: handleSignInError,
        }),
    )

    return (
        <form onSubmit={handleSignInFormSubmit} id='sign-in'>
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
            </div>
            <div className='mt-20 mb-6'>
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
                <FieldErrorMessage tw='h-20 my-15 flex-center' error={errors.password}>
                    {errors?.password?.message}
                </FieldErrorMessage>
            </div>
            <button
                type='submit'
                className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm m-auto block px-5 py-2.5 text-center'
            >
                로그인
            </button>
        </form>
    )
}

export default SignIn
