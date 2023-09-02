import { api } from '@api/index'
import { useMutation } from '@tanstack/react-query'
import { message } from 'antd'
import { MESSAGE } from '@constants/message'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import VRegisterForm, { VRegisterFormProps } from './VRegisterForm'

const RegisterFormSchema = z
    .object({
        username: z
            .string({ required_error: '아이디를 입력해주세요.' })
            .refine((value) => /^[a-z][a-z0-9]{5,15}$/.test(value), {
                message: '최소 6자에서 최대 16자 사이이며 첫 글자는 영어여야 합니다.',
            }),
        password: z
            .string({ required_error: '비밀번호를 입력해주세요.' })
            .min(1, '비밀번호를 입력해주세요.')
            .refine((value) => /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/.test(value), {
                message: '최소 8자에서 최대32자 사이이며 첫 글자는 영어여야 합니다.',
            }),
        passwordConfirm: z.string({ required_error: '비밀번호를 한번 더 입력해주세요.' }),
        email: z.string({ required_error: '이메일을 입력해주세요.' }).email('올바른 이메일 형식을 입력해주세요.'),
        nickname: z
            .string({ required_error: '닉네임을 입력해주세요.' })
            .refine((value) => /^(?=.*[a-zA-Z가-힣])[a-zA-Z가-힣\d]{2,10}$/.test(value), {
                message: '최소 2자에서 최대10자 사이이며 한글, 영어, 숫자 조합이어야 합니다.',
            }),
    })
    .refine((data) => data.password === data.passwordConfirm, {
        message: '비밀번호와 일치하지 않습니다.',
        path: ['passwordConfirm'],
    })

type RegisterForm = z.infer<typeof RegisterFormSchema>

function Register() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterForm>({
        resolver: zodResolver(RegisterFormSchema),
        mode: 'onChange',
        criteriaMode: 'firstError',
    })
    const router = useRouter()

    const handleMutationSuccess = async () => {
        message.success(MESSAGE.USER_MESSAGE.success.register)
        router.push('/login')
    }
    const registerMutation = useMutation(api.authService.register, {
        onSuccess: handleMutationSuccess,
    })

    const onSubmit = handleSubmit((registerFormData) => {
        registerMutation.mutate(registerFormData)
    })

    const vRegisterFormProps: VRegisterFormProps = {
        usernameInput: {
            status: errors.username ? 'error' : '',
            message: errors?.username?.message,
        },
        passwordInput: {
            status: errors.password ? 'error' : '',
            message: errors?.password?.message,
        },
        passwordConfirmInput: {
            // roles: {
            //     required: '비밀번호를 한번 더 입력해주세요.',
            //     validate: (field: string) => field === getValues('password') || '비밀번호와 일치하지 않아요!',
            // },
            status: errors.passwordConfirm ? 'error' : '',
            message: errors?.passwordConfirm?.message,
        },
        emailInput: {
            status: errors.email ? 'error' : '',
            message: errors?.email?.message,
        },
        nicknameInput: {
            status: errors.nickname ? 'error' : '',
            message: errors?.nickname?.message,
        },
        control,
        onSubmit,
    }

    return <VRegisterForm {...vRegisterFormProps} />
}

export default Register
