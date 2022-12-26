import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/configureStore'

const authSliceType = 'slice/auth'

export interface AuthSlice {
  loginUser: LoginUser | null | 'loading'
}

const initialState: AuthSlice = {
  loginUser: 'loading',
}

const authSlice = createSlice({
  initialState,
  name: authSliceType,
  reducers: {
    setLoginUser: (
      state,
      action: PayloadAction<LoginUser | null | 'loading'>
    ) => {
      state.loginUser = action.payload
    },
  },
})

export const { setLoginUser } = authSlice.actions
export const getLoginUser = (state: RootState) => state.auth.loginUser
export default authSlice
