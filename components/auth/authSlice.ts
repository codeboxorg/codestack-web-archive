import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/configureStore'

const authSliceType = 'slice/auth'

/**
 * 유저의 상태 타입
 * 권한 확인중 -> null
 * 로그인 완료시 -> LoginMember
 * 비 로그인 or 권한 확인 실패시 -> false
 */
export interface AuthSlice {
  loginUser: LoginMember | null | false
}

const initialState: AuthSlice = {
  loginUser: null,
}

const authSlice = createSlice({
  initialState,
  name: authSliceType,
  reducers: {
    setLoginUser: (
      state,
      action: PayloadAction<LoginMember | null | false>
    ) => {
      state.loginUser = action.payload
    },
  },
})

export const { setLoginUser } = authSlice.actions
export const getLoginUser = (state: RootState) => state.auth.loginUser
export default authSlice
