import { combineReducers } from 'redux';
import { counterReducer } from './reducers/counterReducer';

/* Root reducer */
export const createRootReducer = () => combineReducers({
  counter: counterReducer,
});
