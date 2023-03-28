import BaseInput from '@components/shared/BaseInput'
import { Control, Controller } from 'react-hook-form'

export type RegisterForm = {
  username: string
  email: string
  password: string
  passwordConfirm: string
  nickname: string
}

export type VRegisterFormProps = {
  usernameInput: HookFormInput<'username'>
  emailInput: HookFormInput<'email'>
  passwordInput: HookFormInput<'password'>
  passwordConfirmInput: HookFormInput<'passwordConfirm'>
  nicknameInput: HookFormInput<'nickname'>
  control: Control<RegisterForm>
  onSubmit: HookFormSubmit
}

const VRegisterForm = ({
  usernameInput,
  emailInput,
  passwordInput,
  passwordConfirmInput,
  nicknameInput,
  control,
  onSubmit,
}: VRegisterFormProps) => {
  return (
    <form onSubmit={onSubmit} id="login">
      <div className="mb-6">
        <label className="block mb-5 text-sm font-medium text-gray-900">
          아이디
        </label>
        <Controller
          control={control}
          name="username"
          rules={usernameInput.roles}
          render={({ field }) => (
            <BaseInput
              placeholder="아이디를 입력해주세요."
              status={usernameInput.status}
              {...field}
            />
          )}
        />
        <div className="h-20 pt-3 w-full">
          {usernameInput.status === 'error' && (
            <p className="text-red-500 w-full text-xs">
              {usernameInput.message}
            </p>
          )}
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-5 text-sm font-medium text-gray-900">
          비밀번호
        </label>
        <Controller
          control={control}
          name="password"
          rules={passwordInput.roles}
          render={({ field }) => (
            <BaseInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              status={passwordInput.status}
              {...field}
            />
          )}
        />
        <div className="h-20 pt-3 w-full">
          {passwordInput.status === 'error' && (
            <p className="text-red-500 w-full text-xs">
              {passwordInput.message}
            </p>
          )}
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-5 text-sm font-medium text-gray-900">
          비밀번호 확인
        </label>
        <Controller
          control={control}
          name="passwordConfirm"
          rules={passwordConfirmInput.roles}
          render={({ field }) => (
            <BaseInput
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요."
              status={passwordConfirmInput.status}
              {...field}
            />
          )}
        />
        <div className="h-20 pt-3 w-full">
          {passwordConfirmInput.status === 'error' && (
            <p className="text-red-500 w-full text-xs">
              {passwordConfirmInput.message}
            </p>
          )}
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-5 text-sm font-medium text-gray-900">
          이메일
        </label>
        <Controller
          control={control}
          name="email"
          rules={emailInput.roles}
          render={({ field }) => (
            <BaseInput
              placeholder="이메일을 입력해주세요."
              status={emailInput.status}
              {...field}
            />
          )}
        />
        <div className="h-20 pt-3 w-full">
          {emailInput.status === 'error' && (
            <p className="text-red-500 w-full text-xs">{emailInput.message}</p>
          )}
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-5 text-sm font-medium text-gray-900">
          닉네임
        </label>
        <Controller
          control={control}
          name="nickname"
          rules={nicknameInput.roles}
          render={({ field }) => (
            <BaseInput
              placeholder="닉네임을 입력해주세요."
              status={nicknameInput.status}
              {...field}
            />
          )}
        />
        <div className="h-20 pt-3 w-full">
          {nicknameInput.status === 'error' && (
            <p className="text-red-500 w-full text-xs">
              {nicknameInput.message}
            </p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm m-auto block px-5 py-2.5 text-center"
      >
        회원가입
      </button>
    </form>
  )
}

export default VRegisterForm
