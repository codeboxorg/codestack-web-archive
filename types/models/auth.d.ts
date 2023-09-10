type Member = {
    id: number
    email: string
    nickname: string
    profileImage: string
}

type OAuthCodeInfo = {
    provider: 'github'
    code: string
    user?: unknown
}

type TokenInfo = {
    refreshToken: string
    accessToken: string
    expiresIn: number
}

type LoginMember = Member & Omit<TokenInfo, 'refreshToken'>

type PagePermissionInfo = {
    role?: 'admin' | 'member'
    loadingFallback?: React.ReactElement
    redirect?: string
}
