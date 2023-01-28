import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/configureStore'

const problemSliceType = 'slice/problem'

export interface ProblemSlice {
  problem: Problem
}

const initialState: ProblemSlice = {
  problem: {
    id: -1,
    title: '',
    context: '',
    max_cpu_time: 0,
    max_memory: 0,
  },
}

const problemSlice = createSlice({
  initialState,
  name: problemSliceType,
  reducers: {
    setProblem: (state, action: PayloadAction<Problem>) => {
      state.problem = action.payload
    },
  },
})

export const { setProblem } = problemSlice.actions
export default problemSlice
