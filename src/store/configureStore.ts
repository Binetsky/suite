import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createRootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

const rootReducer = createRootReducer();

/*
* Configuring store
 */
export const configureStore = (initialState?: any) => {
  // @ts-ignore
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(
      applyMiddleware(
        sagaMiddleware,
      ),
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export const store = configureStore();
