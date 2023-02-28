import { api } from '@api/index'
import { useMutation } from '@tanstack/react-query'
import { message } from 'antd'
import { MESSAGE } from 'constant/message'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import VRegisterForm, { VRegisterFormProps } from './VRegisterForm'
import { RegisterForm } from './VRegisterForm'

const RegisterForm = () => {
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>()
  const router = useRouter()

  const handleMutationSuccess = async () => {
    message.success(MESSAGE.userMessage.success.register)
    router.push('/login')
  }
  const registerMutation = useMutation(api.authService.register, {
    onSuccess: handleMutationSuccess,
  })

  const onSubmit = handleSubmit((registerFormData) => {
    registerMutation.mutate(registerFormData)
  })

  const vRegisterFormProps: VRegisterFormProps = {
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
    passwordConfirmInput: {
      roles: {
        required: '비밀번호를 한번 더 입력해주세요.',
        validate: (field: string) =>
          field === getValues('password') || '비밀번호와 일치하지 않아요!',
      },
      status: errors.passwordConfirm ? 'error' : '',
      message: errors?.passwordConfirm?.message,
    },
    nicknameInput: {
      roles: {
        required: '이메일을 입력해주세요.',
      },
      status: errors.nickname ? 'error' : '',
      message: errors?.nickname?.message,
    },
    control,
    onSubmit,
  }

  return (
    <>
      <VRegisterForm {...vRegisterFormProps} />
    </>
  )
}

export default RegisterForm
