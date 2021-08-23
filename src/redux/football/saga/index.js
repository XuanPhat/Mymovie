import { call, all } from 'redux-saga/effects';
import { watchHandleFootball } from './footballSaga';

export default function* rootSaga() {
  yield all([
    call(watchHandleFootball),
    // call cac saga khac o day
  ])
}