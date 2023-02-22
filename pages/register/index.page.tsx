import { useForm } from 'react-hook-form'

interface LoginForm {
  email: string
  password: string
  passwordConfirm: string
  nickname: string
}

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>()
  
  //TODO : 회원가입 기능 추가 예정
  const onSubmit = handleSubmit(async (data) => {})

  return (
    <>
      <div className="container m-auto pt-30 w-1/2">
        <h1 className="text-3xl">회원가입</h1>
        <form className="mt-10" onSubmit={onSubmit}>
          <div className="mb-20">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              아이디
            </label>
            <input
              type="text"
              {...register('email', {
                required: '이메일를 입력해주세요.  ',
              })}
              className={`${
                !errors.email
                  ? 'border-gray-300 bg-gray-50 text-red-900'
                  : 'border-red-500 bg-red-50 text-gray-900'
              } border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="mb-20">
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

          <div className="mb-20">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              패스워드 재확인
            </label>
            <input
              type="password"
              {...register('passwordConfirm', {
                required: '비밀번호를 재입력해주세요.',
              })}
              className={`${
                !errors.passwordConfirm
                  ? 'border-gray-300 bg-gray-50 text-red-900'
                  : 'border-red-500 bg-red-50 text-gray-900'
              } border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                {errors.passwordConfirm?.message}
              </p>
            )}
          </div>

          <div className="mb-20">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              닉네임
            </label>
            <input
              type="text"
              {...register('nickname', {
                required: '닉네임를 입력해주세요.  ',
              })}
              className={`${
                !errors.nickname
                  ? 'border-gray-300 bg-gray-50 text-red-900'
                  : 'border-red-500 bg-red-50 text-gray-900'
              } border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
            />
            {errors.nickname && (
              <p className="text-red-500 text-xs italic">
                {errors.nickname?.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm m-auto block px-5 py-2.5 text-center"
          >
            로그인
          </button>
        </form>
      </div>
    </>
  )
}

export default RegisterPage
