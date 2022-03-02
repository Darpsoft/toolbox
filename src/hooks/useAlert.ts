import { hideAlert, showAlert } from "@redux/actions";
import { IAlertInformation, TAlertAction } from "@redux/reducers/alert";
import { useDispatch } from "react-redux";

type ShowAlertComponent = (payload: IAlertInformation) => TAlertAction;
type HideAlertComponent = () => TAlertAction;

export function useAlert(): [ShowAlertComponent, HideAlertComponent] {
  const dispatch = useDispatch();

  const handleShowAlert = (payload: IAlertInformation): TAlertAction => {
    return dispatch(showAlert(payload));
  };

  const handleHideAlert = (): TAlertAction => {
    return dispatch(hideAlert());
  };

  return [handleShowAlert, handleHideAlert];
}
