import { takeLatest, put } from 'redux-saga/effects';
import { Types as UsersTypes, Creators as UsersActions } from '~/store/ducks/users';

export function* login() {
  try {
    console.tron.log('teste');
    yield put(UsersActions.loginSuccess(true));
  } catch (error) {
    yield put(UsersActions.loginFailure(error));
  }
}

export default function* saga() {
  yield takeLatest(UsersTypes.LOGIN_REQUEST, login);
}
