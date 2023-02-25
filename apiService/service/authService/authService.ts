import { LoginForm } from '@pages/login/index.page'
import { RegisterForm } from '@pages/register/index.page'

export interface AuthService {
  register(formData: RegisterForm): Promise<unknown>
  login(formData: LoginForm): Promise<LoginMember>
  member(): Promise<LoginMember>
}
