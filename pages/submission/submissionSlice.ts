import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const submissionSliceType = 'slice/submission'

export type SubmissionSlice = {
  submission: ReduxSliceItem<Submission>
}

const initialState: SubmissionSlice = {
  submission: {
    id: -1,
    cpu_time: 0,
    memory_usage: 0,
    source_code: '',
    problem: { id: -1, title: '' },
    language: { id: -1, name: '' },
    member: { id: -1, nickname: '' },
    status_code: 'AC',
    isInit: true,
  },
}

const submissionSlice = createSlice({
  initialState,
  name: submissionSliceType,
  reducers: {
    setSubmission: (state, action: PayloadAction<Submission>) => {
      state.submission = action.payload
    },
  },
})

export const { setSubmission } = submissionSlice.actions
export default submissionSlice
