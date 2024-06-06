import { SignUpFormSchema, SignInFormSchema } from '@constants/form'

export interface AuthService {
    signUp(formData: SignUpFormSchema): Promise<unknown>
    signIn(formData: SignInFormSchema): Promise<TokenInfo>
    signOut(): Promise<unknown>
    member(): Promise<SignInMember>
}
