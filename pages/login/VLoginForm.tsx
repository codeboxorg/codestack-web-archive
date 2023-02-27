import Link from 'next/link'
import { useFormContext, UseFormRegisterReturn } from 'react-hook-form'

export type LoginForm = {
  email: string
  password: string
}

export type VLoginFromProps = {
  emailInput: HookFormInput<'email'>
  passwordInput: HookFormInput<'password'>
  onSubmit: HookFormSubmit
}

const VLoginForm = ({
  emailInput,
  passwordInput,
  onSubmit,
}: VLoginFromProps) => {
  return (
    <form onSubmit={onSubmit} id="login">
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          아이디
        </label>
        <input
          type="text"
          {...emailInput.register}
          placeholder="이메일을 입력해주세요."
          className={`${
            !(emailInput.status === 'error')
              ? 'border-gray-300 bg-gray-50 text-red-900'
              : 'border-red-500 bg-red-50 text-gray-900'
          } border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
        />
        {emailInput.status === 'error' && (
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
          {...passwordInput.register}
          placeholder="비밀번호를 입력해주세요."
          className={`${
            !(passwordInput.status === 'error')
              ? 'border-gray-300 bg-gray-50 text-red-900'
              : 'border-red-500 bg-red-50 text-gray-900'
          } border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
        />
        {passwordInput.status === 'error' && (
          <p className="text-red-500 text-xs italic">{passwordInput.message}</p>
        )}
      </div>
      <span>
        회원 가입은{' '}
        <Link className="text-blue-600/100" href="/register">
          여기
        </Link>
        에서 할 수 있습니다.
      </span>
    </form>
  )
}

export default VLoginForm
