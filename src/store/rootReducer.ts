import { HYDRATE } from 'next-redux-wrapper'
import { AnyAction, CombinedState, combineReducers } from 'redux'

import authStore, { AuthStore } from './auth'
import problemStore, { ProblemStore } from './problem'
import submissionStore, { SubmissionStore } from './submission'

export interface ReducerStates {
    problem: ProblemStore
    submission: SubmissionStore
    auth: AuthStore
}

const getNeedChangeState = (actionPayload: any) => {
    const newActionPayload: Record<string, unknown> = {}
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const rootKey in actionPayload) {
        // eslint-disable-next-line no-restricted-syntax
        for (const key in actionPayload[rootKey]) {
            if (actionPayload[rootKey][key] === null || actionPayload[rootKey][key].isInit) {
                // eslint-disable-next-line no-continue
                continue
            }
            newActionPayload[rootKey] = { [key]: actionPayload[rootKey][key] }
        }
    }
    return newActionPayload
}

const rootReducer = (state: ReducerStates, action: AnyAction): CombinedState<ReducerStates> => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...getNeedChangeState(action.payload) }
        default: {
            const combinedReducer = combineReducers({
                problem: problemStore.reducer,
                submission: submissionStore.reducer,
                auth: authStore.reducer,
            })
            return combinedReducer(state, action)
        }
    }
}

export default rootReducer
