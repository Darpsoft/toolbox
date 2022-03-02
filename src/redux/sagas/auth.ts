import { put, takeLatest, call } from "redux-saga/effects";
import request, { getOptionsWithToken, postOptions, showMessageError } from "@utils/request";

import { showLoader, hideLoader, loginSuccess } from "@redux/actions";
import { LOGIN_START } from "@redux/constants";
import Config from "react-native-config";

export function* Login({ payload }: any): any {
  let url, options;
  try {
    yield put(showLoader());

    url = `${Config.URL_API}/user/signin`;
    options = postOptions(payload);
    const requestToken = yield call(request, url, options);

    url = `${Config.URL_API}/user/me`;
    options = getOptionsWithToken(requestToken.token);
    const requestUser = yield call(request, url, options);

    yield put(loginSuccess({ tokenUser: requestToken.token, dataUser: requestUser[0] }));
  } catch (err) {
    yield showMessageError(err);
  } finally {
    yield put(hideLoader());
  }
}

export default function* authSaga(): any {
  yield takeLatest(LOGIN_START, Login);
}
