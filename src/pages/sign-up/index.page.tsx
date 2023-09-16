import { NextSeo } from 'next-seo'
import SignUpForm from './SignUpForm'

function SignUpPage() {
    return (
        <>
            <NextSeo title='회원가입' />
            <main className='container px-20 w-full pt-[7vh]'>
                <div className='sm:w-full md:w-450 mx-auto'>
                    <h1 className='text-center text-25 my-30'>회원가입</h1>
                    <SignUpForm />
                </div>
            </main>
        </>
    )
}

export default SignUpPage
