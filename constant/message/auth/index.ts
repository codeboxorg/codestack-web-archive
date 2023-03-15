const authMessage = {
  success: {
    login: '로그인 했어요!',
    logout: '로그아웃 했어요!',
  },
  info: {
    requiredLogin: '로그인이 필요한 서비스에요',
  },
} as const

export { authMessage }
