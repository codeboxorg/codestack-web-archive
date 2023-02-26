import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const submissionSliceType = 'slice/submission'

export type SubmissionSlice = {
  submission: ReduxSliceItem<Submission>
}

const initialState: SubmissionSlice = {
  submission: {
    id: -1,
    source_code: '',
    problem: { id: -1, title: '' },
    language: { id: -1, name: '' },
    member: { id: -1, nickname: '' },
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
