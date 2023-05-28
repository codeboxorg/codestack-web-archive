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
    maxCpuTime: 0,
    maxMemory: 0,
    languages: [],
    submission: 0,
    accepted: 0,
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
