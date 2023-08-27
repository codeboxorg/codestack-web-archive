import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const submissionSliceType = 'slice/submission'

export type SubmissionSlice = {
    submission: ReduxSliceItem<Submission>
}

const initialState: SubmissionSlice = {
    submission: {
        id: -1,
        cpuTime: 0,
        memoryUsage: 0,
        sourceCode: '',
        problem: { id: -1, title: '' },
        language: { id: -1, name: '' },
        member: { nickname: '' },
        statusCode: 'AC',
        isInit: true,
    },
}

const submissionSlice = createSlice({
    initialState,
    name: submissionSliceType,
    reducers: {
        setSubmission: (state, action: PayloadAction<Submission>) => ({
            ...state,
            submission: action.payload,
        }),
    },
})

export const { setSubmission } = submissionSlice.actions
export default submissionSlice
