import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/Todo/TodoSlice'

export const store = configureStore({
    reducer: todoReducer //just to make store aware of all the reducers we are going to use to make changes in our todo
})