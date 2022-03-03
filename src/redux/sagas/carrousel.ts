import {
  put,
  takeLatest,
  call,
  PutEffect,
  SimpleEffect,
  CallEffectDescriptor,
  SelectEffectDescriptor,
  take,
  TakeEffectDescriptor,
} from "redux-saga/effects";
import request, { getOptions, showMessageError } from "@utils/request";

import { REFRESH_TOKEN_SUCCESS, REQUEST_CARROUSEL_START } from "@redux/constants";
import Config from "react-native-config";
import { IResponseCarrousel, TCarrouselAction } from "@redux/reducers/carrousel";
import { delay } from "@utils/utils";
import { hideLoaderCarrouselSuccess, requestCarrouselSuccess, showLoaderCarrouselSuccess } from "@redux/actions/carrousel";
import { TReturnFunctionInstanceLogin } from "./auth";
import { RootState } from "@redux/reducers";
import { refreshTokenStart } from "@redux/actions";
import { TAuthAction } from "@redux/reducers/auth";

type TReturnFunctionInstanceRequestCarrousel = Generator<
  | SimpleEffect<"CALL", CallEffectDescriptor<unknown>>
  | PutEffect<TCarrouselAction>
  | PutEffect<TAuthAction>
  | undefined
  | Promise<void>
  | TReturnFunctionInstanceLogin
  | SimpleEffect<"TAKE", TakeEffectDescriptor>
  | SimpleEffect<"SELECT", SelectEffectDescriptor>,
  void,
  Response & IResponseCarrousel[] & RootState
>;

export function* RequestCarrousel({ payload }: any): TReturnFunctionInstanceRequestCarrousel {
  try {
    yield put(showLoaderCarrouselSuccess());
    yield put(refreshTokenStart());

    while (true) {
      yield take(REFRESH_TOKEN_SUCCESS);

      const url = `${Config.URL_API}/v1/mobile/data`;
      const options = getOptions(payload);
      const requestCarrousel: IResponseCarrousel[] = yield call(request, url, options);

      yield put(requestCarrouselSuccess({ data: requestCarrousel }));
    }
  } catch (err) {
    yield showMessageError(err);
    yield delay(1000);
    yield put(hideLoaderCarrouselSuccess());
  }
}

export default function* carrouselSaga(): any {
  yield takeLatest(REQUEST_CARROUSEL_START, RequestCarrousel);
}
