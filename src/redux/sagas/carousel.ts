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

import { REFRESH_TOKEN_SUCCESS, REQUEST_CAROUSEL_START } from "@redux/constants";
import Config from "react-native-config";
import { IResponseCarousel, TCarouselAction } from "@redux/reducers/carousel";
import { delay } from "@utils/utils";
import { hideLoaderCarouselSuccess, requestCarouselSuccess, showLoaderCarouselSuccess } from "@redux/actions/carousel";
import { TReturnFunctionInstanceLogin } from "./auth";
import { RootState } from "@redux/reducers";
import { refreshTokenStart } from "@redux/actions";
import { TAuthAction } from "@redux/reducers/auth";

type TReturnFunctionInstanceRequestCarousel = Generator<
  | SimpleEffect<"CALL", CallEffectDescriptor<unknown>>
  | PutEffect<TCarouselAction>
  | PutEffect<TAuthAction>
  | undefined
  | Promise<void>
  | TReturnFunctionInstanceLogin
  | SimpleEffect<"TAKE", TakeEffectDescriptor>
  | SimpleEffect<"SELECT", SelectEffectDescriptor>,
  void,
  Response & IResponseCarousel[] & RootState
>;

export function* RequestCarousel({ payload }: any): TReturnFunctionInstanceRequestCarousel {
  try {
    yield put(showLoaderCarouselSuccess());
    yield put(refreshTokenStart());

    while (true) {
      yield take(REFRESH_TOKEN_SUCCESS);

      const url = `${Config.URL_API}/v1/mobile/data`;
      const options = getOptions(payload);
      const requestCarousel: IResponseCarousel[] = yield call(request, url, options);

      yield put(requestCarouselSuccess({ data: requestCarousel }));
    }
  } catch (err) {
    yield showMessageError(err);
    yield delay(1000);
    yield put(hideLoaderCarouselSuccess());
  }
}

export default function* carouselSaga(): any {
  yield takeLatest(REQUEST_CAROUSEL_START, RequestCarousel);
}
