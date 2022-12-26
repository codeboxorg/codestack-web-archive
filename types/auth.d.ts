interface LoginUser {
  userName: string
  userProfileImageUrl: string
  userEmail: string
}

interface PagePermissionInfo {
  role?: 'admin' | 'member'
  loadingFallback?: React.ReactElement
  redirect?: string
}
