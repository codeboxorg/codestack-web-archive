import { popupCenter } from '@utils/popupCenter'
import Link from 'next/link'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const GithubUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

interface LoginForm {
  username: string
  password: string
}

const LoginPage = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>()
  //TODO :
  const onSubmit = handleSubmit((data) => console.log(data))

  const oAuthRedirectCallback = (githubAccessToken: string) => {
    console.log(githubAccessToken)
  }

  useEffect(() => {
    window.oAuthRedirectCallback = oAuthRedirectCallback
    return () => {
      delete window.oAuthRedirectCallback
    }
  }, [])

  return (
    <>
      <div className="container m-auto w-1/2">
        <form onSubmit={onSubmit}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              아이디
            </label>
            <input
              type="text"
              {...register('username', {
                required: '아이디를 입력해주세요.  ',
              })}
              className={`${
                !errors.username
                  ? 'border-gray-300 bg-gray-50 text-red-900'
                  : 'border-red-500 bg-red-50 text-gray-900'
              } border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
            />
            {errors.username && (
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            )}
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              패스워드
            </label>
            <input
              type="password"
              {...register('password', {
                required: '비밀번호를 입력해주세요.',
              })}
              className={`${
                !errors.password
                  ? 'border-gray-300 bg-gray-50 text-red-900'
                  : 'border-red-500 bg-red-50 text-gray-900'
              } border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                {errors.password?.message}
              </p>
            )}
          </div>
          <span>
            회원 가입은{' '}
            <Link className="text-blue-600/100" href="/register">
              여기
            </Link>
            에서 할 수 있습니다.
          </span>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm m-auto block px-5 py-2.5 text-center"
          >
            로그인
          </button>
        </form>
        <div className="mt-25 b">
          <Link
            href="http://dev-api.rrrmaster.com/oauth2/authorization/github?redirect_uri=https://pr-16.dp9i34mgnqryi.amplifyapp.com/api/oauth2/redirect"
            type="button"
            className="w-full justify-center text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
          >
            <svg
              className="mr-2 -ml-1 w-16 h-16"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>{' '}
            Github 로그인
          </Link>
        </div>
      </div>
    </>
  )
}

export default LoginPage
