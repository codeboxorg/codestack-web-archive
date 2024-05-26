import { z as zod } from 'zod'

const passwordSchema = zod
    .object({
        password: zod
            .string({ required_error: '비밀번호를 입력해주세요.' })
            .min(1, '비밀번호를 입력해주세요.')
            .refine((value) => /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/.test(value), {
                message: '최소 8자에서 최대32자 사이이며 첫 글자는 영어여야 합니다.',
            }),
        passwordConfirm: zod.string({ required_error: '비밀번호를 한번 더 입력해주세요.' }),
    })
    .refine((data) => data.password === data.passwordConfirm, {
        message: '비밀번호와 일치하지 않습니다.',
        path: ['passwordConfirm'],
    })

const baseSchema = zod.object({
    id: zod
        .string({ required_error: '아이디를 입력해주세요.' })
        .refine((value) => /^[a-z][a-z0-9]{5,15}$/.test(value), {
            message: '최소 6자에서 최대 16자 사이이며 첫 글자는 영어여야 합니다.',
        }),
    email: zod.string({ required_error: '이메일을 입력해주세요.' }).email('올바른 이메일 형식을 입력해주세요.'),
    nickname: zod
        .string({ required_error: '닉네임을 입력해주세요.' })
        .refine((value) => /^(?=.*[a-zA-Z가-힣])[a-zA-Z가-힣\d]{2,10}$/.test(value), {
            message: '최소 2자에서 최대10자 사이이며 한글, 영어, 숫자 조합이어야 합니다.',
        }),
})

export const SIGN_UP_FORM_SCHEMA = passwordSchema.and(baseSchema)
export type SignUpFormSchema = zod.infer<typeof SIGN_UP_FORM_SCHEMA>
