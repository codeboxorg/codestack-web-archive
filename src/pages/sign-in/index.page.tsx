import Link from 'next/link'
import GithubIcon from '@assets/icons/github.svg'
import { NextSeo } from 'next-seo'
import { BaseInput } from '@components/core/common'
import { FieldErrorMessage, FieldLabel } from '@components/core/form'
import { SIGN_IN_FORM_SCHEMA, SignInFormSchema } from '@constants/form'
import { MESSAGE } from '@constants/message'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSignIn } from '@hooks/auth'
import { Controller, useForm } from 'react-hook-form'
import 'twin.macro'

const githubClientId = 'Ov23liXv0cGEZW2vUTKM'

console.log(githubClientId)

function SignInPage() {
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
        <>
            <NextSeo title='로그인' />
            <main className='px-20 w-full pt-[7vh]'>
                <div className='sm:w-full md:w-450 mx-auto'>
                    <h1 className='text-center text-25 my-30'>로그인</h1>
                    <form onSubmit={handleSignInFormSubmit} id='sign-in'>
                        <div className='mb-6'>
                            <FieldLabel htmlFor='username'>아이디</FieldLabel>
                            <Controller
                                control={control}
                                name='username'
                                render={({ field }) => (
                                    <BaseInput
                                        id='username'
                                        placeholder='아이디또는 이메일을 입력해주세요.'
                                        error={errors.username}
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
                                        error={errors.password}
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
                    <div className='mt-20'>
                        <Link
                            href={`https://github.com/login/oauth/authorize?client_id=${githubClientId}`}
                            type='button'
                            className='w-full justify-center gap-5 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2'
                        >
                            <GithubIcon width={20} height={20} />
                            <span>Github 로그인</span>
                        </Link>
                        <div className='under:mt-15 text-14 px-2'>
                            <div>
                                CodeStack 회원 가입은{' '}
                                <Link className='text-blue-600/100' href='/sign-up'>
                                    여기
                                </Link>
                                에서 할 수 있어요!
                            </div>
                            <div>
                                아이디나 비밀번호를 잊었을 때는,{' '}
                                <Link className='text-blue-600/100' href='/sign-up'>
                                    여기
                                </Link>
                                를 눌러주세요.
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SignInPage
