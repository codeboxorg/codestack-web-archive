import { api } from '@api/index'
import useAuth from '@hooks/useAuth'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import VLoginForm, { LoginForm, VLoginFromProps } from './VLoginForm'

const LoginForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
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
      roles: {
        required: '이메일을 입력해주세요.',
      },
      status: errors.email ? 'error' : '',
      message: errors?.email?.message,
    },
    passwordInput: {
      roles: {
        required: '비밀번호를 입력해주세요.',
      },
      status: errors.password ? 'error' : '',
      message: errors?.password?.message,
    },
    onSubmit,
    control,
  }

  return (
    <>
      <VLoginForm {...vLoginFormProps} />
    </>
  )
}

export default LoginForm
