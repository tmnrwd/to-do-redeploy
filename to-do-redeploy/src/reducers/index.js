import { combineReducers } from 'redux'
import {todoReducer} from './todoReducer'
import {visibilityFilterReducer} from './visibilityFilterReducer'


export const rootReducer = combineReducers({
  visibilityFilter: visibilityFilterReducer,
  todos: todoReducer,
})