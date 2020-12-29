import { all, takeLatest } from 'redux-saga/effects';
import { actions } from '../reducers/counterReducer';

export function* increment() {
  // eslint-disable-next-line no-console
  yield console.log('INC');
}

export function* decrement() {
  // eslint-disable-next-line no-console
  yield console.log('DEC');
}

export function* counterWatcher() {
  yield all([
    takeLatest(actions.incrementState, increment),
    takeLatest(actions.decrementState, decrement),
  ]);
}
