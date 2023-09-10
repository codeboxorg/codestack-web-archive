import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const SUBMISSION_STORE_NAME = 'STORE/SUBMISSION'

export type SubmissionStore = {
    submission: ReduxStoreItem<Submission>
}

const initialState: SubmissionStore = {
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

const submissionStore = createSlice({
    initialState,
    name: SUBMISSION_STORE_NAME,
    reducers: {
        setSubmission: (state, action: PayloadAction<Submission>) => ({
            ...state,
            submission: action.payload,
        }),
    },
})

export const { setSubmission } = submissionStore.actions

export default submissionStore
