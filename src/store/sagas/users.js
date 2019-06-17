import {
  takeLatest, put, call, delay,
} from 'redux-saga/effects';
import { Types as UsersTypes, Creators as UsersActions } from '~/store/ducks/users';

export function* login(action) {
  try {
    const { callback } = action.payload;
    yield delay(1000);
    // throw new Error();

    yield call(callback, 'main');

    yield put(UsersActions.loginSuccess(true));
  } catch (error) {
    console.tron.log(error);
    yield put(UsersActions.loginFailure(error));
  }
}

export default function* saga() {
  yield takeLatest(UsersTypes.LOGIN_REQUEST, login);
}
