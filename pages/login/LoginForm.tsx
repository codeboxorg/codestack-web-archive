import { useForm } from 'react-hook-form'
import { LoginForm, VLoginFromProps } from './VLoginForm'
import VLoginForm from './VLoginForm'
import { useRouter } from 'next/router'
import useAuth from '@hooks/useAuth'
import { useMutation } from '@tanstack/react-query'
import { api } from '@api/index'

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>()

  const router = useRouter()
  const { login } = useAuth()

  const loginMutation = useMutation(api.authService.login)

  const handleLoginSuccess = (user: LoginMember) => {
    login(user, { message: true })
    router.push('/')
  }

  const onSubmit = handleSubmit((formData) =>
    loginMutation.mutate(formData, {
      onSuccess: handleLoginSuccess,
    })
  )

  const vLoginFormProps: VLoginFromProps = {
    emailInput: {
      register: register('email', {
        required: '비밀번호를 입력해주세요.',
      }),
      status: errors.email ? 'error' : '',
      message: errors?.email?.message,
    },
    passwordInput: {
      register: register('password'),
      status: errors.password ? 'error' : '',
      message: errors?.password?.message,
    },
    onSubmit,
  }

  return <VLoginForm {...vLoginFormProps} />
}

export default LoginForm
