import { HIDE_LOADER, SHOW_LOADER } from "@redux/constants";
import { TLoaderAction } from "@redux/reducers/loader";

/**
 * Action for Show modal loader
 */
export const showLoader = (payload?: string): TLoaderAction => ({
  type: SHOW_LOADER,
  payload,
});

/**
 * Action for Hide modal loader
 */
export const hideLoader = (): TLoaderAction => ({
  type: HIDE_LOADER,
});
