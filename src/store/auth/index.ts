import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'src/store/configureStore'

const AUTH_STORE_NAME = 'STORE/AUTH'

/**
 * 유저의 상태 타입
 * 권한 확인중 -> null
 * 로그인 완료시 -> LoginMember
 * 비 로그인 or 권한 확인 실패시 -> false
 */
export type AuthStore = {
    loginUser: LoginMember | null | false
}

const initialState: AuthStore = {
    loginUser: null,
}

const authStore = createSlice({
    initialState,
    name: AUTH_STORE_NAME,
    reducers: {
        setLoginUser: (state, action: PayloadAction<LoginMember | null | false>) => ({
            ...state,
            loginUser: action.payload,
        }),
    },
})

export const { setLoginUser } = authStore.actions

export const getLoginUser = (state: RootState) => state.auth.loginUser

export default authStore
