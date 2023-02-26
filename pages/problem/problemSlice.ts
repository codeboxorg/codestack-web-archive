import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const problemSliceType = 'slice/problem'

export type ProblemSlice = {
  problem: ReduxSliceItem<Problem>
}

const initialState: ProblemSlice = {
  problem: {
    id: -1,
    title: '',
    context: '',
    max_cpu_time: 0,
    max_memory: 0,
    isInit: true,
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
