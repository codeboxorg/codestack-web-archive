import Link from 'next/link'
import GithubIcon from '@assets/icons/github.svg'
import { NextSeo } from 'next-seo'
import LoginForm from './LoginForm'

const githubClientId = `${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

function LoginPage() {
    return (
        <>
            <NextSeo title='로그인' />
            <main className='px-20 w-full pt-[7vh]'>
                <div className='sm:w-full md:w-450 mx-auto'>
                    <h1 className='text-center text-25 my-30'>로그인</h1>
                    <LoginForm />
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
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default LoginPage
