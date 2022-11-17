import { combineReducers } from 'redux';
import { reducer } from './initialData';

export const rootReducer = combineReducers({
  data: reducer,
});