import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/configureStore'

const authSliceType = 'slice/auth'

/**
 * 유저의 상태 타입
 * 권한 확인중 -> undefined
 * 로그인 완료시 -> LoginMember
 * 비 로그인 or 권한 확인 실패시 -> null
 */
export interface AuthSlice {
  loginUser: LoginMember | null | undefined
}

const initialState: AuthSlice = {
  loginUser: undefined,
}

const authSlice = createSlice({
  initialState,
  name: authSliceType,
  reducers: {
    setLoginUser: (
      state,
      action: PayloadAction<LoginMember | null | undefined>
    ) => {
      state.loginUser = action.payload
    },
  },
})

export const { setLoginUser } = authSlice.actions
export const getLoginUser = (state: RootState) => state.auth.loginUser
export default authSlice
