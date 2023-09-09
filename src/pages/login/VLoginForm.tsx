import BaseInput from '@components/core/BaseInput'
import { Control, Controller } from 'react-hook-form'

export type LoginForm = {
    email: string
    password: string
}

export type VLoginFromProps = {
    emailInput: HookFormInput<'email'>
    passwordInput: HookFormInput<'password'>
    control: Control<LoginForm>
    onSubmit: HookFormSubmit
}

function VLoginForm({ emailInput, passwordInput, onSubmit, control }: VLoginFromProps) {
    return (
        <form onSubmit={onSubmit} id='login'>
            <div className='mb-6'>
                <label htmlFor='email' className='block mb-5 text-sm font-medium text-gray-900'>
                    이메일
                </label>
                <Controller
                    control={control}
                    name='email'
                    rules={emailInput.roles}
                    render={({ field }) => <BaseInput id='email' placeholder='이메일을 입력해주세요.' {...field} />}
                />
            </div>
            <div className='mb-6 mt-20'>
                <label htmlFor='password' className='block mb-5 text-sm font-medium text-gray-900'>
                    비밀번호
                </label>
                <Controller
                    control={control}
                    name='password'
                    rules={passwordInput.roles}
                    render={({ field }) => (
                        <BaseInput id='password' type='password' placeholder='비밀번호를 입력해주세요.' {...field} />
                    )}
                />
                <div className='h-20 my-15 flex-center'>
                    {passwordInput.status === 'error' && (
                        <p className='text-red-500 text-xs'>{passwordInput.message}</p>
                    )}
                </div>
                <button
                    type='submit'
                    className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm m-auto block px-5 py-2.5 text-center'
                >
                    로그인
                </button>
            </div>
        </form>
    )
}

export default VLoginForm
