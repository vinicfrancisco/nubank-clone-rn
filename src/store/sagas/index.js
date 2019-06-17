import { all } from 'redux-saga/effects';

import users from './users';

export default function* rootSaga() {
  return yield all([users()]);
}
