import { IAlertInformation, TAlertAction } from "@redux/reducers/alert";
import { HIDE_ALERT, SHOW_ALERT } from "@redux/constants";

/**
 * Action for Show Alert
 */
export const showAlert = (payload: IAlertInformation): TAlertAction => ({
  type: SHOW_ALERT,
  payload,
});

/**
 * Action for Hide Alert
 */
export const hideAlert = (): TAlertAction => ({
  type: HIDE_ALERT,
});
