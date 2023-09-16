import { SignUpFormSchema } from '@constants/form'
import { LoginForm } from '@pages/login/VLoginForm'

export interface AuthService {
    signUp(formData: SignUpFormSchema): Promise<unknown>
    login(formData: LoginForm): Promise<LoginMember>
    logout(): Promise<unknown>
    member(): Promise<LoginMember>
}
