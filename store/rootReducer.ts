import { AnyAction, CombinedState, combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import problemSlice, { ProblemSlice } from '@pages/problem/problemSlice'

export interface ReducerStates {
  problem: ProblemSlice
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
      })
      return combinedReducer(state, action)
    }
  }
}

export default rootReducer
