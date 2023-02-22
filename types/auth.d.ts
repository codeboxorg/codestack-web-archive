interface LoginUser {
  userName: string
  userProfileImageUrl: string
  userEmail: string
  accessToken: string
}

interface PagePermissionInfo {
  role?: 'admin' | 'member'
  loadingFallback?: React.ReactElement
  redirect?: string
}
