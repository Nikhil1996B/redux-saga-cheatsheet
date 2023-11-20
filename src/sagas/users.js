import {
  take,
  takeEvery,
  call,
  fork,
  put,
  takeLatest,
} from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api";

function* getUsers() {
  try {
    const result = yield call(api.users);
    yield put(actions.getUsersSuccess({ items: result.data }));
  } catch (error) {
    yield put(
      actions.usersErrorAction({
        error: "An error occured when trying to get the user",
      }),
    );
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.types.GET_USERS_REQUEST, getUsers);
}

function* createUser({ payload: { firstName, lastName } }) {
  try {
    yield call(api.createUser, { firstName, lastName });
    yield call(getUsers);
  } catch (error) {
    yield put(
      actions.usersErrorAction({
        error: "An error occured when trying to create user",
      }),
    );
  }
}

function* watchCreateUserRequest() {
  yield takeLatest(actions.types.CREATE_USER_REQUEST, createUser);
}

function* deleteUser({ userId }) {
  try {
    yield call(api.deleteUser, userId);
    yield call(getUsers);
  } catch (error) {
    yield put(
      actions.usersErrorAction({
        error: "An error occured when trying to delete user",
      }),
    );
  }
}

function* watchDeleteUserRequest() {
  while (true) {
    const action = yield take(actions.types.DELETE_USER_REQUEST);
    yield call(deleteUser, { userId: action.payload });
  }
}

const userSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRequest),
];
export default userSagas;
