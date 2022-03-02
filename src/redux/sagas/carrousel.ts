import { put, takeLatest, call, PutEffect, SimpleEffect, CallEffectDescriptor } from "redux-saga/effects";
import request, { getOptions, showMessageError } from "@utils/request";

import { REQUEST_CARROUSEL_START } from "@redux/constants";
import Config from "react-native-config";
import { IResponseCarrousel, TCarrouselAction } from "@redux/reducers/carrousel";
import { delay } from "@utils/utils";
import { hideLoaderCarrouselSuccess, requestCarrouselSuccess, showLoaderCarrouselSuccess } from "@redux/actions/carrousel";

type TReturnFunctionInstanceCallOnHold = Generator<
  SimpleEffect<"CALL", CallEffectDescriptor<unknown>> | PutEffect<TCarrouselAction> | undefined | Promise<void>,
  void,
  Response & IResponseCarrousel[]
>;

export function* RequestCarrousel({ payload }: any): TReturnFunctionInstanceCallOnHold {
  try {
    yield put(showLoaderCarrouselSuccess());

    const url = `${Config.URL_API}/v1/mobile/data`;
    const options = getOptions(payload);
    const requestCarrousel: IResponseCarrousel[] = yield call(request, url, options);

    yield put(requestCarrouselSuccess({ data: requestCarrousel }));
  } catch (err) {
    yield showMessageError(err);
    yield delay(1000);
    yield put(hideLoaderCarrouselSuccess());
  }
}

export default function* carrouselSaga(): any {
  yield takeLatest(REQUEST_CARROUSEL_START, RequestCarrousel);
}
