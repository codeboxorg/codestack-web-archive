import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/configureStore'

const submissionSliceType = 'slice/submission'

export interface SubmissionSlice {
  submission: Submission
}

const initialState: SubmissionSlice = {
  submission: {
    id: -1,
    source_code: '',
    problem: { id: -1, title: '' },
    user: { id: -1, nickname: '' },
    language: { id: -1, name: '' },
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
export const getSubmission = (state: RootState) => state.submission.submission
export default submissionSlice
