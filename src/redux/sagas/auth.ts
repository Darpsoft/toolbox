import { put, takeLatest, call, PutEffect, SimpleEffect, CallEffectDescriptor } from "redux-saga/effects";
import request, { postOptionsWithoutToken, showMessageError } from "@utils/request";

import { showLoader, hideLoader, loginSuccess } from "@redux/actions";
import { LOGIN_START } from "@redux/constants";
import Config from "react-native-config";
import { TAuthAction } from "@redux/reducers/auth";
import { TLoaderAction } from "@redux/reducers/loader";
import { delay } from "@utils/utils";

type TResponseAuth = {
  token: string;
  type: string;
  sub: string;
};

type TReturnFunctionInstanceCallOnHold = Generator<
  SimpleEffect<"CALL", CallEffectDescriptor<unknown>> | PutEffect<TLoaderAction> | PutEffect<TAuthAction> | undefined | Promise<void>,
  void,
  Response & TResponseAuth
>;

export function* Login({ payload }: any): TReturnFunctionInstanceCallOnHold {
  let url, options;
  try {
    yield put(showLoader("Verifying credentials"));

    url = `${Config.URL_API}/v1/mobile/auth`;
    options = postOptionsWithoutToken(payload);
    const requestToken = yield call(request, url, options);

    yield put(loginSuccess({ tokenUser: `${requestToken.type} ${requestToken.token}`, dataUser: { email: payload.email } }));
  } catch (err) {
    yield showMessageError(err);
  } finally {
    yield delay(1000);
    yield put(hideLoader());
  }
}

export default function* authSaga(): any {
  yield takeLatest(LOGIN_START, Login);
}
