import { createReducer, createAction } from 'redux-act';

/* Actions descriptions */
const increment = 'INC';
const decrement = 'DEC';

/* Creating counter action creators */
const incrementState = createAction(increment);
const decrementState = createAction(decrement);

/* Counter initial state */
const initialState = {
  counter: 0,
};

/* Creating reducers functions for increment and decrement counter */
const toIncrementState = (state: Record<string, number>) => ({
  counter: state.counter + 1,
});

const toDecrementState = (state: Record<string, number>) => ({
  counter: state.counter - 1,
});

/* Creating reducer */
export const counterReducer = createReducer({
  [incrementState as any]: toIncrementState,
  [decrementState as any]: toDecrementState,
}, initialState);

/* Exporting action creators */
export const actions = {
  incrementState,
  decrementState,
};
