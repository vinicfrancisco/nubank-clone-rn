import { takeLatest, put } from 'redux-saga/effects';
import { Types as UsersTypes, Creators as UsersActions } from '../ducks/users';

function* login() {
  try {
    yield put(UsersActions.loginSuccess(true));
  } catch (error) {
    yield put(UsersActions.loginFailure(error));
  }
}

export default function* users() {
  yield takeLatest(UsersTypes.LOGIN_REQUEST, login);
}
