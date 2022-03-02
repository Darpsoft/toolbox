import {
  HIDE_LOADER_CARROUSEL_SUCCESS,
  REQUEST_CARROUSEL_START,
  REQUEST_CARROUSEL_SUCCESS,
  SHOW_LOADER_CARROUSEL_SUCCESS,
} from "@redux/constants";
import { ICarrouselAction, TCarrouselAction } from "@redux/reducers/carrousel";

export const requestCarrouselStart = (): TCarrouselAction => ({
  type: REQUEST_CARROUSEL_START,
});

export const requestCarrouselSuccess = (payload: ICarrouselAction["REQUEST_CARROUSEL_SUCCESS"]["payload"]): TCarrouselAction => ({
  type: REQUEST_CARROUSEL_SUCCESS,
  payload,
});

export const showLoaderCarrouselSuccess = (): TCarrouselAction => ({
  type: SHOW_LOADER_CARROUSEL_SUCCESS,
});

export const hideLoaderCarrouselSuccess = (): TCarrouselAction => ({
  type: HIDE_LOADER_CARROUSEL_SUCCESS,
});
