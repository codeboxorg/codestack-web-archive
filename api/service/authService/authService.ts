export interface AuthService {
  githubAuthorizationToAccessToken(
    code: string,
    client_id: string,
    client_secret: string
  ): Promise<any>
}
