interface Member {
    id: number
    email: string
    nickname: string
    profileImage: string
}

type SignInMember = Member & Omit<TokenInfo, 'refreshToken'>
