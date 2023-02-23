import { LoginForm } from '@pages/login/index.page'
import { RegisterForm } from '@pages/register/index.page'
import { CookieValueTypes } from 'cookies-next'

export interface AuthService {
  register(formData: RegisterForm): Promise<unknown>
  login(formData: LoginForm): Promise<TokenInfo>
  login2(formData: LoginForm): Promise<LoginMember>
  initAuth(): Promise<LoginMember>
  refreshTokenToAccessToken(
    refreshToken: CookieValueTypes
  ): Promise<Pick<TokenInfo, 'accessToken'>>
}
