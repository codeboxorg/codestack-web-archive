import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const PROBLEM_STORE_NAME = 'STORE/PROBLEM'

export type ProblemStore = {
    problem: ReduxStoreItem<Problem>
}

const initialState: ProblemStore = {
    problem: {
        id: -1,
        name: '',
        description: [],
        maxCpuTime: 0,
        maxMemory: 0,
        languages: [],
        submission: 0,
        accepted: 0,
        isInit: true,
    },
}

const problemStore = createSlice({
    initialState,
    name: PROBLEM_STORE_NAME,
    reducers: {
        setProblem: (state, action: PayloadAction<Problem>) => ({
            ...state,
            problem: action.payload,
        }),
    },
})

export const { setProblem } = problemStore.actions

export default problemStore
