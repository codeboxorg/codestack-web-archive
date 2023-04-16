const authMessage = {
  success: {
    login: '로그인 했어요!',
    logout: '로그아웃 했어요!',
  },
  error: {
    loginFail:
      '등록되지 않은 회원이거나 아이디 또는 비밀번호가 일치하지 않습니다.',
  },
  info: {
    requiredLogin: '로그인이 필요한 서비스에요',
  },
} as const

export { authMessage }
