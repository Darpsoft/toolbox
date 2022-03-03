import {
  HIDE_LOADER_CAROUSEL_SUCCESS,
  REQUEST_CAROUSEL_START,
  REQUEST_CAROUSEL_SUCCESS,
  SHOW_LOADER_CAROUSEL_SUCCESS,
} from "@redux/constants";
import { ICarouselAction, TCarouselAction } from "@redux/reducers/carousel";

export const requestCarouselStart = (): TCarouselAction => ({
  type: REQUEST_CAROUSEL_START,
});

export const requestCarouselSuccess = (payload: ICarouselAction["REQUEST_CAROUSEL_SUCCESS"]["payload"]): TCarouselAction => ({
  type: REQUEST_CAROUSEL_SUCCESS,
  payload,
});

export const showLoaderCarouselSuccess = (): TCarouselAction => ({
  type: SHOW_LOADER_CAROUSEL_SUCCESS,
});

export const hideLoaderCarouselSuccess = (): TCarouselAction => ({
  type: HIDE_LOADER_CAROUSEL_SUCCESS,
});
