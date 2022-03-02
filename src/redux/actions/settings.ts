import { HIDE_LOADER, SHOW_LOADER } from "../constants";

export const showLoader = (): any => ({
  type: SHOW_LOADER,
});

export const hideLoader = (): any => ({
  type: HIDE_LOADER,
});
