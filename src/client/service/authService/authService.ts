import { SignUpFormSchema, SignInFormSchema } from '@constants/form'

export interface AuthService {
    signUp(formData: SignUpFormSchema): Promise<unknown>
    signIn(formData: SignInFormSchema): Promise<LoginMember>
    logout(): Promise<unknown>
    member(): Promise<LoginMember>
}
