import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

export default function* rootSaga() {
  // centraliza os sagas
  return yield all([cart]);
}
