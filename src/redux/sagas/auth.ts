import { put, takeLatest, call, PutEffect, SimpleEffect, CallEffectDescriptor } from "redux-saga/effects";
import request, { postOptionsWithoutToken, showMessageError } from "@utils/request";

import { showLoader, hideLoader, loginSuccess, refreshTokenSuccess } from "@redux/actions";
import { LOGIN_START, REFRESH_TOKEN_START } from "@redux/constants";
import Config from "react-native-config";
import { TAuthAction, IAuthAction } from "@redux/reducers/auth";
import { TLoaderAction } from "@redux/reducers/loader";
import { delay } from "@utils/utils";

type TResponseAuth = {
  token: string;
  type: string;
  sub: string;
};

export type TReturnFunctionInstanceLogin = Generator<
  SimpleEffect<"CALL", CallEffectDescriptor<unknown>> | PutEffect<TLoaderAction> | PutEffect<TAuthAction> | undefined | Promise<void>,
  void,
  Response & TResponseAuth
>;

export function* Login({ payload }: IAuthAction["LOGIN_START"]): TReturnFunctionInstanceLogin {
  try {
    yield put(showLoader("Verifying credentials"));

    const url = `${Config.URL_API}/v1/mobile/auth`;
    const options = postOptionsWithoutToken({ sub: "ToolboxMobileTest" });
    const requestToken = yield call(request, url, options);

    yield put(loginSuccess({ tokenUser: `${requestToken.type} ${requestToken.token}`, dataUser: { email: payload?.email } }));
  } catch (err) {
    yield showMessageError(err);
  } finally {
    yield delay(1000);
    yield put(hideLoader());
  }
}
export function* RefreshToken(): TReturnFunctionInstanceLogin {
  try {
    const url = `${Config.URL_API}/v1/mobile/auth`;
    const options = postOptionsWithoutToken({ sub: "ToolboxMobileTest" });
    const requestToken = yield call(request, url, options);

    yield put(refreshTokenSuccess({ tokenUser: `${requestToken.type} ${requestToken.token}` }));
  } catch (err) {
    yield showMessageError(err);
  }
}

export default function* authSaga(): any {
  yield takeLatest(LOGIN_START, Login);
  yield takeLatest(REFRESH_TOKEN_START, RefreshToken);
}
