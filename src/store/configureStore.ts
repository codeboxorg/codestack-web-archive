import { AnyAction, Reducer, configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import rootReducer, { ReducerStates } from './rootReducer'

const isDev = process.env.NODE_ENV === 'development'

const createStore = () => {
    const store = configureStore({
        reducer: rootReducer as Reducer<ReducerStates, AnyAction>,
        devTools: isDev,
    })
    return store
}

const stored = createStore()
export type RootState = ReturnType<typeof stored.getState>

const wrapper = createWrapper(createStore)
export default wrapper
