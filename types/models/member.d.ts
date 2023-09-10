interface Member {
    id: number
    email: string
    nickname: string
    profileImage: string
}

type LoginMember = Member & Omit<TokenInfo, 'refreshToken'>
