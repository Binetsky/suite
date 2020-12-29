import { fork } from 'redux-saga/effects';
import { counterWatcher } from './sagas/sagas.counter';

export function* rootSaga() {
  yield fork(counterWatcher);
}
