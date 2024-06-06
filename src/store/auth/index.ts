import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const AUTH_STORE_NAME = 'STORE/AUTH'

/**
 * 유저의 상태 타입
 * 권한 확인중 -> null
 * 로그인 완료시 -> SignInMember
 * 비 로그인 or 권한 확인 실패시 -> false
 */
export type AuthStore = {
    signInMember: SignInMember | null | false
}

const initialState: AuthStore = {
    signInMember: null,
}

const authStore = createSlice({
    initialState,
    name: AUTH_STORE_NAME,
    reducers: {
        setSignInMember: (state, action: PayloadAction<SignInMember | null | false>) => ({
            ...state,
            signInMember: action.payload,
        }),
    },
})

export const { setSignInMember } = authStore.actions

export default authStore
