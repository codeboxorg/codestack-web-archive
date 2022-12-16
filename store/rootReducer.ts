import { AnyAction, CombinedState, combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import problemSlice, { ProblemSlice } from '@pages/problem/problemSlice'
import submissionSlice, {
  SubmissionSlice,
} from '@pages/submission/submissionSlice'

export interface ReducerStates {
  problem: ProblemSlice
  submission: SubmissionSlice
}

const rootReducer = (
  state: ReducerStates,
  action: AnyAction
): CombinedState<ReducerStates> => {
  switch (action.type) {
    case HYDRATE:
      return action.payload
    default: {
      const combinedReducer = combineReducers({
        problem: problemSlice.reducer,
        submission: submissionSlice.reducer,
      })
      return combinedReducer(state, action)
    }
  }
}

export default rootReducer
