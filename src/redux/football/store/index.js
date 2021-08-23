import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/index';
import rootSaga from '../saga/index';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const configureStore = (defaultState = {}) => {
  const store = createStore(
    rootReducer,
    defaultState,
    applyMiddleware(
      logger,
      sagaMiddleware
    )
  );
  // run saga
  sagaMiddleware.run(rootSaga);
  return { store }
}
export default configureStore;