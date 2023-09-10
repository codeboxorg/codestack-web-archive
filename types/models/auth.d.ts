interface OAuthCodeInfo {
    provider: 'github'
    code: string
    user?: unknown
}

interface TokenInfo {
    refreshToken: string
    accessToken: string
    expiresIn: number
}

interface PagePermissionInfo {
    role?: 'admin' | 'member'
    loadingFallback?: React.ReactElement
    redirect?: string
}
