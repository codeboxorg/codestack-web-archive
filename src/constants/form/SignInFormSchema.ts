import { z as zod } from 'zod'

export const SIGN_IN_FORM_SCHEMA = zod.object({
    email: zod.string({ required_error: '비밀번호를 한번 더 입력해주세요.' }),
    password: zod.string({ required_error: '비밀번호를 입력해주세요.' }),
})

export type SignInFormSchema = zod.infer<typeof SIGN_IN_FORM_SCHEMA>
