import { AnyAction, CombinedState, combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import problemSlice, { ProblemSlice } from '@pages/problem/problemSlice'
import submissionSlice, {
  SubmissionSlice,
} from '@pages/submission/submissionSlice'
import authSlice, { AuthSlice } from '@components/auth/authSlice'

export interface ReducerStates {
  problem: ProblemSlice
  submission: SubmissionSlice
  auth: AuthSlice
}

const getNeedChangeState = (actionPayload: any) => {
  const newActionPayload: { [key: string]: any } = {}
  for (const rootKey in actionPayload) {
    for (const key in actionPayload[rootKey]) {
      if (
        actionPayload[rootKey][key] === null ||
        actionPayload[rootKey][key]['isInit']
      ) {
        continue
      }
      newActionPayload[rootKey] = { [key]: actionPayload[rootKey][key] }
    }
  }
  return newActionPayload
}

const rootReducer = (
  state: ReducerStates,
  action: AnyAction
): CombinedState<ReducerStates> => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...getNeedChangeState(action.payload) }
    default: {
      const combinedReducer = combineReducers({
        problem: problemSlice.reducer,
        submission: submissionSlice.reducer,
        auth: authSlice.reducer,
      })
      return combinedReducer(state, action)
    }
  }
}

export default rootReducer
